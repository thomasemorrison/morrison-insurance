import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ARTICLE_META, injectArticleMeta } from "./_core/articleMeta";

const read = (p: string) => readFileSync(resolve(process.cwd(), p), "utf8");
const path = "/resources/car-insurance-quotes-center-tx";
const title = "Car Insurance Quotes in Center, TX: What to Ask Before You Choose";
const image = "/manus-storage/car-insurance-quotes-center-tx-portrait_4d76811a.jpg";
const source = read("client/src/pages/articles/ArticleCarInsuranceQuotesCenterTx.tsx");

describe("November 9 quote-page refresh", () => {
  it("preserves the established route and emits aligned crawler metadata", () => {
    expect(read("client/src/App.tsx")).toContain(`path="${path}"`);
    const meta = ARTICLE_META[path];
    expect(meta.title).toBe(`${title} | Morrison Insurance`);
    expect(meta.image).toBe(image);
    const html = injectArticleMeta('<html><head><title>Default</title><meta name="description" content="Default"/><link rel="canonical" href="https://morrison-ins.net/"/></head><body></body></html>', meta);
    expect(html).toContain(`href="https://morrison-ins.net${path}"`);
    expect(html).toContain(`content="https://morrison-ins.net${image}"`);
  });
  it("keeps the original publication date and distinguishes the actual refresh date", () => {
    expect(source).toContain('datePublished="2026-07-13"');
    expect(source).toContain('dateModified="2026-11-09"');
    expect(source).toContain('dateTime="2026-07-13"');
    expect(source).toContain('dateTime="2026-11-09"');
    expect(source).toContain("Editorial responsibility:");
  });
  it("separates quote conversation from preparation, comparison and switching guides", () => {
    for (const slug of ["car-insurance-quote-checklist-center-tx", "car-insurance-companies-center-tx", "switch-car-insurance-texas-without-gap"])
      expect(source).toContain(`/resources/${slug}`);
    expect(source).toContain("Does receiving a quote mean coverage has started?");
    expect(source).toContain("educationalCta");
    expect(source).toContain("Keep license numbers");
    expect(source).toContain("https://www.tdi.texas.gov/consumer/auto-insurance-shopping-guide.html");
  });
  it("removes old unverified local pricing, timing and whole-market claims", () => {
    for (const text of ["generally pay less", "The most significant factor", "three to five years", "no lengthy online forms", "all it takes", "find the carrier that treats your specific situation most favorably"])
      expect(source).not.toContain(text);
    expect(source).toContain("not a quote from every insurer in Texas");
    expect(source).toContain("does not promise");
  });
  it("updates the existing card and feed without duplicating the GUID", () => {
    const resources = read("client/src/pages/Resources.tsx");
    expect(resources).toContain(`title: "${title}"`);
    expect(resources).toContain(image);
    const rss = read("client/public/rss.xml");
    expect(rss).toContain(`<title>${title}</title>`);
    expect(rss.match(new RegExp(`<guid isPermaLink="true">https://morrison-ins.net${path}</guid>`, "g"))).toHaveLength(1);
    expect(rss).toContain(`<enclosure url="https://morrison-ins.net${image}" length="0" type="image/jpeg"/>`);
    const sitemap = read("client/public/sitemap.xml");
    const entry = sitemap.split("<url>").find(x => x.includes(`<loc>https://morrison-ins.net${path}</loc>`));
    expect(entry).toContain("<lastmod>2026-11-09</lastmod>");
  });
});
