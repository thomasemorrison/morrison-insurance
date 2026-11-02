#!/usr/bin/env python3
"""Register the three November 2 articles; safe to rerun before commit."""
from pathlib import Path
from xml.sax.saxutils import escape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'content/three-article-assets-and-capacity-2026-11-02.json').read_text())['images']

def update(relative, transform):
    path = ROOT / relative
    before = path.read_text()
    after = transform(before)
    if after != before:
        path.write_text(after)
        print('Updated:', relative)

def app(s):
    imports = ''.join(f'import {a["component"]} from "./pages/articles/{a["component"]}";\n' for a in manifest if f'import {a["component"]} ' not in s)
    s = s.replace('import CookieConsent', imports + 'import CookieConsent', 1)
    routes = ''.join(f'      <Route path="/resources/{a["slug"]}" component={{() => <Layout><{a["component"]} /></Layout>}} />\n' for a in manifest if f'path="/resources/{a["slug"]}"' not in s)
    return s.replace('      <Route path="/morrison-family-history"', routes + '      <Route path="/morrison-family-history"', 1)
update('client/src/App.tsx', app)

def resources(s):
    cards = ''
    for a in manifest:
        if f'href: "/resources/{a["slug"]}"' in s:
            continue
        cards += '  {\n' + ''.join(f'    {key}: {json.dumps(value, ensure_ascii=False)},\n' for key, value in [('category',a['category']),('title',a['title']),('excerpt',a['description']),('readTime','6 min read'),('href','/resources/'+a['slug']),('image',a['image'])]) + '  },\n'
    return s.replace('const articles = [\n', 'const articles = [\n' + cards, 1)
update('client/src/pages/Resources.tsx', resources)

def metadata(s):
    entries = ''
    for a in manifest:
        if f'"/resources/{a["slug"]}":' in s:
            continue
        entries += f'  "/resources/{a["slug"]}": {{\n'
        entries += ''.join(f'    {key}: {json.dumps(value, ensure_ascii=False)},\n' for key, value in [('title',a['title']+' | Morrison Insurance'),('description',a['description']),('image',a['image']),('slug',a['slug'])])
        entries += '  },\n'
    return s.replace('export const ARTICLE_META: Record<string, ArticleMeta> = {\n', 'export const ARTICLE_META: Record<string, ArticleMeta> = {\n' + entries, 1)
update('server/_core/articleMeta.ts', metadata)
meta_text = (ROOT / 'server/_core/articleMeta.ts').read_text()
entry_count = len(re.findall(r'^  "/resources/[^"\n]+": \{', meta_text, re.M))

def tests(s):
    s = re.sub(r'has exactly \d+ article entries', f'has exactly {entry_count} article entries', s)
    s = re.sub(r'expect\(Object.keys\(ARTICLE_META\)\).toHaveLength\(\d+\)', f'expect(Object.keys(ARTICLE_META)).toHaveLength({entry_count})', s)
    return re.sub(r'expect\(images.size\).toBe\(\d+\)', f'expect(images.size).toBe({entry_count})', s)
update('server/articleMeta.test.ts', tests)

def rss(s):
    s = re.sub(r'<lastBuildDate>[^<]+</lastBuildDate>', '<lastBuildDate>Mon, 02 Nov 2026 10:15:00 -0600</lastBuildDate>', s, count=1)
    items = ''
    for a in manifest:
        url = 'https://morrison-ins.net/resources/' + a['slug']
        if f'<link>{url}</link>' in s:
            continue
        image = 'https://morrison-ins.net' + a['image']
        items += f'''    <item>
      <title>{escape(a['title'])}</title>
      <link>{url}</link>
      <description>{escape(a['description'])}</description>
      <category>{escape(a['category'])}</category>
      <pubDate>Mon, 02 Nov 2026 10:15:00 -0600</pubDate>
      <guid isPermaLink="true">{url}</guid>
      <enclosure url="{image}" length="0" type="image/jpeg"/>
      <media:content url="{image}" medium="image"/>
    </item>

'''
    return s.replace('    <item>\n', items + '    <item>\n', 1)
update('client/public/rss.xml', rss)

def sitemap(s):
    urls = ''
    for a in manifest:
        url = 'https://morrison-ins.net/resources/' + a['slug']
        if f'<loc>{url}</loc>' in s:
            continue
        urls += f'''  <url>
    <loc>{url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>2026-11-02</lastmod>
  </url>
'''
    s = s.replace('  <!-- SEO blog articles -->\n', '  <!-- SEO blog articles -->\n' + urls, 1)
    return re.sub(r'(<loc>https://morrison-ins.net/resources</loc>[\s\S]*?<lastmod>)[^<]+', r'\g<1>2026-11-02', s, count=1)
update('client/public/sitemap.xml', sitemap)
print('Article registry count:', entry_count)
