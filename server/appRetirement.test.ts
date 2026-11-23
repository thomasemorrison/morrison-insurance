import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = new URL("../", import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), "utf8");
const acquisitionPaths = [
  "/start-here",
  "/prepare-for-a-conversation",
  "/what-to-expect",
];

// Scan shipped source/public text and configuration, not historical content or references.
function activeTextFiles(path: string): string[] {
  return readdirSync(new URL(path, root), { withFileTypes: true }).flatMap(entry => {
    const child = `${path}/${entry.name}`;
    if (entry.isDirectory()) return activeTextFiles(child);
    if (/\.(?:test|spec)\.[cm]?[jt]sx?$/.test(entry.name)) return [];
    return /\.(?:[cm]?[jt]sx?|json|html|css|xml|svg|txt|md|csv|ya?ml)$/.test(entry.name)
      ? [child]
      : [];
  });
}

describe("retired separate Morrison app promotions", () => {
  it("has no active app URL, banner or app-specific branding references", () => {
    const files = [
      ...["client", "server", "shared", "drizzle", "scripts"].flatMap(activeTextFiles),
      ...readdirSync(fileURLToPath(root)).filter(path => /\.(?:json|ts)$/.test(path)),
    ];
    const retiredReference = /morrison-insapp\.(?:com|net)|\bAppBanner\b|\bappUrl\b|\bappTagline\b|app-banner|\bfree app\b|your insurance agent in your pocket/i;
    const offenders = files.filter(path => retiredReference.test(read(path)));
    expect(offenders).toEqual([]);
    expect(existsSync(new URL("client/src/components/AppBanner.tsx", root))).toBe(false);
  });

  it("preserves the existing hero local-agent and direct-call actions", () => {
    const hero = read("client/src/pages/Home.tsx").split("{/* Trust badges */}")[0];
    expect(hero).toContain('<Link href="/contact" className="btn-amber"');
    expect(hero).toContain("Speak with a Local Agent");
    expect(hero).toContain('<a href={BRAND.phoneHref} className="btn-white"');
    expect(hero).toContain("Call Now");
  });

  it("preserves phone, email and shared header quote actions", () => {
    const brand = read("client/src/lib/constants.ts");
    expect(brand).toContain('phone: "(936) 598-2791"');
    expect(brand).toContain('phoneHref: "tel:+19365982791"');
    expect(brand).toContain('email: "hello@morrison-ins.net"');
    expect(brand).toContain('emailHref: "mailto:hello@morrison-ins.net"');
    for (const path of [
      "client/src/components/Header.tsx",
      "client/src/components/Footer.tsx",
      "client/src/pages/Home.tsx",
      "client/src/pages/Contact.tsx",
      "client/src/components/AcquisitionPath.tsx",
    ]) {
      expect(read(path)).toContain("href={BRAND.phoneHref}");
      if (!path.endsWith("Header.tsx")) {
        expect(read(path)).toContain("href={BRAND.emailHref}");
      }
    }
    const header = read("client/src/components/Header.tsx");
    expect(header.match(/href="\/contact"/g)).toHaveLength(3);
    expect(header).toContain("Call Now");
    expect(header).toContain("Get a Quote");
  });

  it("preserves acquisition navigation and inserts beside direct contact", () => {
    for (const path of acquisitionPaths) {
      expect(read("client/src/lib/constants.ts")).toContain(`href: "${path}"`);
      expect(read("client/src/pages/Contact.tsx")).toContain(`href="${path}"`);
      expect(read("client/src/components/AcquisitionPath.tsx")).toContain(`path: "${path}"`);
    }
    expect(read("client/src/components/Footer.tsx")).toContain("FOOTER_LINKS.map");
    expect(read("client/src/components/Header.tsx")).toContain("NAV_LINKS.slice(1).map");
    for (const path of [
      "client/src/pages/Home.tsx",
      "client/src/components/ServicePageLayout.tsx",
    ]) {
      expect(read(path)).toContain("<AcquisitionPath />");
      expect(read(path)).toContain('href="/contact"');
    }
    expect(read("client/src/components/ServicePageLayout.tsx")).toContain('href="/start-here"');
  });

  it("preserves HubSpot QuoteForm on Home, Contact and service pages", () => {
    for (const path of ["client/src/pages/Home.tsx", "client/src/pages/Contact.tsx"]) {
      expect(read(path)).toContain("<QuoteForm />");
    }
    expect(read("client/src/components/ServicePageLayout.tsx")).toContain(
      "<QuoteForm defaultCoverage={props.defaultCoverage} />"
    );
    const form = read("client/src/components/QuoteForm.tsx");
    expect(form).toContain('const HS_PORTAL_ID = "246212557"');
    expect(form).toContain('const HS_FORM_ID = "156de4fd-61c3-4bff-a7a7-779bfb6bb35b"');
    expect(form).toContain("hsforms.net/forms/embed/");
    expect(form).toContain('formDiv.className = "hs-form-frame"');
  });
});
