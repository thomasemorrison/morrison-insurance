# Morrison Insurance — Project TODO

## Server-Side Social Meta (Option B)
- [x] Upgrade project to full-stack (web-db-user) with database, server, and user features
- [x] Run pnpm db:push to sync database schema
- [x] Audit all 13 article routes: extract slugs, titles, descriptions, and hero images
- [x] Create server/_core/articleMeta.ts with ARTICLE_META map and injectArticleMeta() function
- [x] Update server/_core/vite.ts to call injectArticleMeta() for /resources/* routes in both dev and production
- [x] Verify all 13 article URLs return correct og:image, og:title, og:description, og:url, og:type in raw HTML
- [x] Verify homepage still returns generic og:image (not overwritten)
- [x] Write and pass 17 vitest tests covering ARTICLE_META integrity and injectArticleMeta() behavior

## Hero Image Hosting
- [x] Download all 13 article hero images from Unsplash
- [x] Upload all 13 images to Manus webdev storage
- [x] Update ARTICLE_META in articleMeta.ts with hosted /manus-storage/ URLs
- [x] Run tests and save checkpoint

## Homepage og:image
- [x] Add og:image tag to client/index.html pointing to the Morrison Insurance building photo

## Weekly Blog Workflow
- [x] Document the full weekly blog research, creation, and publishing workflow
- [x] Set up recurring weekly scheduled task to trigger the blog workflow (every Monday 8:00 AM CDT)

## Hunting Lease Article (Article #14)
- [x] Download and host hero image to Manus storage
- [x] Create ArticleHuntingLease.tsx with correct imports and hosted image URLs
- [x] Add route to App.tsx
- [x] Add card to Resources.tsx
- [x] Add entry to articleMeta.ts (og:image injection)
- [x] Add item to rss.xml
- [x] Add URL to sitemap.xml
- [x] Update tests to expect 14 articles — all 17 tests pass
