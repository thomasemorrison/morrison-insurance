import { describe, it, expect } from "vitest";
import { ARTICLE_META, injectArticleMeta } from "./_core/articleMeta";

const SAMPLE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Morrison Insurance | Center, TX Since 1923</title>
    <meta name="description" content="Generic description." />
    <link rel="canonical" href="https://morrison-ins.net/" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://morrison-ins.net/" />
    <meta property="og:title" content="Morrison Insurance | Serving East Texans Since 1923" />
    <meta property="og:description" content="Generic og description." />
    <meta property="og:site_name" content="Morrison Insurance" />
  </head>
  <body><div id="root"></div></body>
</html>`;

describe("ARTICLE_META", () => {
  it("has exactly 26 article entries", () => {
    expect(Object.keys(ARTICLE_META)).toHaveLength(26);
  });

  it("every entry has a non-empty title, description, image, and slug", () => {
    for (const [path, meta] of Object.entries(ARTICLE_META)) {
      expect(meta.title, `title for ${path}`).toBeTruthy();
      expect(meta.description, `description for ${path}`).toBeTruthy();
      expect(meta.image, `image for ${path}`).toMatch(/^\/manus-storage\/|^https?:\/\//);
      expect(meta.slug, `slug for ${path}`).toBeTruthy();
      // slug should match the last segment of the path
      expect(path).toBe(`/resources/${meta.slug}`);
    }
  });

  it("all image URLs point to Manus hosted storage", () => {
    for (const meta of Object.values(ARTICLE_META)) {
      expect(meta.image).toMatch(/^\/manus-storage\//);
    }
  });
});

describe("injectArticleMeta", () => {
  const meta = ARTICLE_META["/resources/boat-insurance-toledo-bend-texas"];

  it("replaces og:title with article title", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(
      `<meta property="og:title" content="Boat Insurance Basics: Protecting Your Summer on Toledo Bend | Morrison Insurance" />`
    );
    // should NOT contain the old generic title
    expect(result).not.toContain("Morrison Insurance | Serving East Texans Since 1923");
  });

  it("replaces og:image with article hero image", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(
      `<meta property="og:image" content="https://morrison-ins.net/manus-storage/boat-toledo-bend-portrait_af454abd.jpg" />`
    );
  });

  it("sets og:type to article", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(`<meta property="og:type" content="article" />`);
    expect(result).not.toContain(`content="website"`);
  });

  it("sets og:url to canonical article URL", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(
      `<meta property="og:url" content="https://morrison-ins.net/resources/boat-insurance-toledo-bend-texas" />`
    );
  });

  it("sets og:description to article description", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(
      `<meta property="og:description" content="Texas law doesn`
    );
    expect(result).not.toContain("Generic og description.");
  });

  it("replaces <title> tag with article title", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(
      "<title>Boat Insurance Basics: Protecting Your Summer on Toledo Bend | Morrison Insurance</title>"
    );
    expect(result).not.toContain("Morrison Insurance | Center, TX Since 1923");
  });

  it("replaces meta name=description with article description", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).not.toContain("Generic description.");
    expect(result).toContain("Texas law doesn");
  });

  it("updates canonical link to article URL", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(
      `<link rel="canonical" href="https://morrison-ins.net/resources/boat-insurance-toledo-bend-texas" />`
    );
    expect(result).not.toContain(`href="https://morrison-ins.net/"`);
  });

  it("injects Twitter Card tags", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(`<meta name="twitter:card" content="summary_large_image" />`);
    expect(result).toContain(`<meta name="twitter:image"`);
  });

  it("does not duplicate existing og: tags", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    const ogTitleMatches = result.match(/property="og:title"/g);
    expect(ogTitleMatches).toHaveLength(1);
    const ogImageMatches = result.match(/property="og:image"/g);
    expect(ogImageMatches).toHaveLength(1);
  });

  it("inserts og:image when not present in original HTML", () => {
    const htmlWithoutOgImage = SAMPLE_HTML.replace(
      /<meta property="og:image"[^>]*>/i,
      ""
    );
    const result = injectArticleMeta(htmlWithoutOgImage, meta);
    expect(result).toContain(`property="og:image"`);
  });

  it("preserves unrelated HTML content", () => {
    const result = injectArticleMeta(SAMPLE_HTML, meta);
    expect(result).toContain(`<meta charset="UTF-8" />`);
    expect(result).toContain(`<div id="root"></div>`);
    expect(result).toContain(`<meta property="og:site_name" content="Morrison Insurance" />`);
  });

  // Test all 25 articles produce unique og:image values
  it("every article produces a distinct og:image", () => {
    const images = new Set<string>();
    for (const meta of Object.values(ARTICLE_META)) {
      const result = injectArticleMeta(SAMPLE_HTML, meta);
      const match = result.match(/property="og:image" content="([^"]+)"/);
      expect(match).not.toBeNull();
      images.add(match![1]);
    }
    expect(images.size).toBe(26);
  });
});
