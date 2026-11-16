import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { STATIC_PAGE_META, injectStaticPageMeta } from './_core/articleMeta';
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const paths = ['/start-here', '/prepare-for-a-conversation', '/what-to-expect'];

describe('ungated Morrison acquisition paths', () => {
  it.each(paths)('registers the route, canonical and sitemap for %s', path => {
    expect(read('client/src/App.tsx')).toContain(`path="${path}"`);
    expect(read('client/public/sitemap.xml')).toContain(`https://morrison-ins.net${path}`);
    const meta = STATIC_PAGE_META[path];
    expect(meta.canonicalPath).toBe(path);
    const html = injectStaticPageMeta('<html><head><title>old</title></head><body></body></html>', meta);
    expect(html).toContain(meta.title);
    expect(html).toContain(`https://morrison-ins.net${path}`);
    expect(html).toContain(meta.description);
  });
  it('links preparation from Home, Resources, Contact and shared service layout', () => {
    for (const path of ['client/src/pages/Home.tsx','client/src/pages/Resources.tsx','client/src/components/ServicePageLayout.tsx']) {
      expect(read(path)).toContain('<AcquisitionPath');
    }
    expect(read('client/src/pages/Contact.tsx')).toContain('href="/prepare-for-a-conversation"');
  });
  it('keeps the new checklist local, ungated and free of sensitive data collection', () => {
    const text = read('client/src/pages/PrepareConversation.tsx');
    expect(text).toContain('checkbox');
    expect(text).not.toMatch(/localStorage|sessionStorage|fetch\(|axios|invokeLLM|hs-form|<form|type="file"|type="text"|type="email"/);
    expect(text).toContain('print');
  });
  it('offers three hosted one-page PDFs without gating the preparation tool', () => {
    const page = read('client/src/pages/PrepareConversation.tsx');
    expect(page).toContain('Open the one-page PDF');
    expect(page.match(/https:\/\/files\.manuscdn\.com\/[^"\s]+\.pdf/g)).toHaveLength(3);
    expect(page).toContain('href={PRINTABLE_PDFS[topic]}');
  });
  it('preserves the existing contact/form/consent pathways', () => {
    expect(read('client/src/App.tsx')).toContain('path="/contact"');
    expect(read('client/src/App.tsx')).toContain('path="/thank-you"');
    expect(read('client/src/App.tsx')).toContain('<CookieConsent');
    expect(read('client/src/components/QuoteForm.tsx')).toContain('hs-form-frame');
  });
  it('does not preserve the incorrect most-employers workers compensation assertion', () => {
    const page = read('client/src/pages/BusinessInsurance.tsx');
    expect(page).not.toContain("Workers' compensation — required in Texas for most employers");
    expect(page).toContain('most private Texas employers are not required');
  });
});
