import { getLegacyArticleRedirect } from "./_core/legacyArticleRedirects";
import { describe, expect, it } from "vitest";

describe("getLegacyArticleRedirect", () => {
  it("permanently maps the obsolete uninsured-driver slug to the canonical route", () => {
    expect(getLegacyArticleRedirect("/resources/accident-uninsured-driver-texas")).toBe(
      "/resources/uninsured-driver-accident-texas"
    );
  });

  it("preserves query parameters on legacy article links", () => {
    expect(
      getLegacyArticleRedirect("/resources/accident-uninsured-driver-texas?utm_source=google")
    ).toBe("/resources/uninsured-driver-accident-texas?utm_source=google");
  });

  it("does not redirect current or unrelated routes", () => {
    expect(getLegacyArticleRedirect("/resources/uninsured-driver-accident-texas")).toBeUndefined();
    expect(getLegacyArticleRedirect("/contact")).toBeUndefined();
  });
});
