import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ARTICLE_META, injectArticleMeta } from "./_core/articleMeta";

const articles = [
  ["ArticleCarQuoteChecklist", "car-insurance-quote-checklist-center-tx", "/manus-storage/car-quote-checklist-2026-11-hero_057d7888.jpg"],
  ["ArticleSwitchCarInsurance", "switch-car-insurance-texas-without-gap", "/manus-storage/switch-car-insurance-2026-11-hero_3d48e552.jpg"],
  ["ArticleCertificateOfInsurance", "certificate-of-insurance-shelby-county-tx", "/manus-storage/certificate-insurance-2026-11-hero_0c5c76af.jpg"],
] as const;
const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const sample = '<html><head><title>Default</title><meta name="description" content="Default"/><link rel="canonical" href="https://morrison-ins.net/"/></head><body><div id="root"></div></body></html>';

describe("November 2 new articles", () => {
  for (const [component, slug, image] of articles) {
    it(`${slug} has a complete route, card, metadata, feed, sitemap, and sourced component`, () => {
      const path = `/resources/${slug}`;
      const meta = ARTICLE_META[path];
      expect(meta).toBeDefined();
      expect(meta.slug).toBe(slug);
      expect(meta.image).toBe(image);
      expect(read("client/src/App.tsx")).toContain(`path="${path}"`);
      expect(read("client/src/App.tsx")).toContain(`import ${component} `);
      expect(read("client/src/pages/Resources.tsx")).toContain(`href: "${path}"`);
      const rss = read("client/public/rss.xml");
      expect(rss).toContain(`<link>https://morrison-ins.net${path}</link>`);
      expect(rss).toContain(`<enclosure url="https://morrison-ins.net${image}" length="0" type="image/jpeg"/>`);
      expect(rss).toContain(`<media:content url="https://morrison-ins.net${image}" medium="image"/>`);
      expect(read("client/public/sitemap.xml")).toContain(`<loc>https://morrison-ins.net${path}</loc>`);
      const source = read(`client/src/pages/articles/${component}.tsx`);
      expect(source).not.toContain("PENDING-");
      expect(source).toContain(image);
      expect(source).toContain("SchemaMarkup");
      expect(source).toContain("2026-11-02");
      expect(source).toContain("Editorial");
      expect(source).toContain("https://www.tdi.texas.gov/");
      expect(source).toContain("/contact");
      const html = injectArticleMeta(sample, meta);
      expect(html).toContain(`href="https://morrison-ins.net${path}"`);
      expect(html).toContain(`content="https://morrison-ins.net${image}"`);
    });
  }
  it("uses three distinct original heroes", () => {
    expect(new Set(articles.map(([, , image]) => image)).size).toBe(3);
  });
  it("links from established guides to each new specialist article", () => {
    expect(read("client/src/pages/articles/ArticleCarInsuranceQuotesCenterTx.tsx")).toContain("/resources/car-insurance-quote-checklist-center-tx");
    expect(read("client/src/pages/articles/ArticleCarInsuranceCompaniesCenterTx.tsx")).toContain("/resources/switch-car-insurance-texas-without-gap");
    expect(read("client/src/pages/articles/ArticleSmallBusinessCoverage.tsx")).toContain("/resources/certificate-of-insurance-shelby-county-tx");
  });
});
