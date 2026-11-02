#!/usr/bin/env python3
"""Verify article XML registrations, optionally fetch HTML from a local/live origin."""
from pathlib import Path
import json
import sys
import re
import html
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
items = json.loads((ROOT / 'content/three-article-assets-and-capacity-2026-11-02.json').read_text())['images']
rss = ET.parse(ROOT / 'client/public/rss.xml').getroot()
sitemap = ET.parse(ROOT / 'client/public/sitemap.xml').getroot()
urls = {node.text for node in sitemap.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
feed = {node.findtext('link'): node for node in rss.findall('channel/item')}
assert len(urls) == len(sitemap.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url')), 'Duplicate sitemap URL'
origin = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else None
passed = True
for a in items:
    canonical = f'https://morrison-ins.net/resources/{a["slug"]}'
    image = 'https://morrison-ins.net' + a['image']
    assert canonical in urls, canonical
    entry = feed[canonical]
    assert entry.find('enclosure').attrib['url'] == image
    assert entry.find('{http://search.yahoo.com/mrss/}content').attrib['url'] == image
    if not origin:
        print('XML PASS', canonical)
        continue
    target = origin + '/resources/' + a['slug']
    try:
        req = Request(target, headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'})
        with urlopen(req, timeout=25) as response:
            status = response.status
            body = response.read().decode('utf-8')
        title = html.unescape(re.search(r'<title>(.*?)</title>', body, re.S).group(1))
        assert status == 200
        assert title == a['title'] + ' | Morrison Insurance', title
        assert f'href="{canonical}"' in body, 'canonical'
        assert f'content="{image}"' in body, 'hero metadata'
        assert html.escape(a['description'], quote=True).replace('&#x27;', '&#39;') in body or a['description'] in body, 'description'
        print('HTML PASS', target, title)
    except Exception as e:
        passed = False
        print('HTML NOT LIVE/FAIL', target, str(e))
if not passed:
    sys.exit(2)
