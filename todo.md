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

## Social Media Content Calendar
- [x] Remove blog content from manual social schedule (now automated via Metricool RSS)
- [x] Create references/social-media-calendar.md with full content pillar strategy, 12-week rotation, caption templates, hashtag sets, image direction, and Canva template plan
- [x] Update references/weekly-blog-workflow.md to reflect automated blog posting and reference new social calendar

## Monday Task Extension + July Friday Posts
- [x] Update Monday 9:00 AM scheduled task to include community research (Part B) alongside blog article (Part A)
- [x] Write updated task prompt with Steps 10-12 covering community research, caption writing, and combined delivery
- [x] Create references/july-friday-posts.md with 4 weeks of ready-to-schedule Friday posts for July (Jul 11, 18, 25, Aug 1)
- [x] Morrison team action (Thu Jul 10): Open Metricool Planner, schedule 8 posts (4 Fridays × 2 platforms) using captions in references/july-friday-posts.md

## LinkedIn Page Optimization
- [x] Audit current LinkedIn page fields (tagline, about, website, industry, specialties)
- [x] Write optimized LinkedIn copy matching website branding and messaging
- [x] Apply all edits live in LinkedIn admin via My Browser — tagline, about, website, phone, year founded, specialties, logo all saved

## Favicon Update
- [x] Generate all favicon sizes (16, 32, 180, 512) from user-provided M INS favicon design
- [x] Upload all favicon sizes to client/public/ and manus-storage CDN
- [x] Update index.html favicon link tags to new user-provided favicon
- [x] Add LinkedIn to schema sameAs in index.html

## Google Business Profile Fixes
- [x] Update GBP website URL from http://www.morrison-ins.net/ to https://morrison-ins.net (fixes missing website display in knowledge panel)
- [x] Upload Morrison Insurance logo as GBP profile photo — M INS favicon-512x512.png uploaded
- [x] Add LinkedIn profile URL to GBP social profiles section

## Blog Queue Addition
- [x] Add construction liability / premises liability article to blog topic queue in references/weekly-blog-workflow.md

## GSC Blog Posts (July 13, 2026)
- [x] Source and upload hero images for 5 new GSC blog posts
- [x] Build ArticleAutoInsuranceCenterTx.tsx
- [x] Build ArticleCarInsuranceQuotesCenterTx.tsx
- [x] Build ArticleCarInsuranceAgentsCenterTx.tsx
- [x] Build ArticleAllstateCaptiveAgency.tsx
- [x] Build ArticleFileClaimTexasAdjuster.tsx
- [x] Register all 5 routes in App.tsx
- [x] Add all 5 entries to articleMeta.ts
- [x] Add all 5 items to rss.xml
- [x] Add all 5 URLs to sitemap.xml
- [x] Add all 5 cards to Resources.tsx

## Google Ads Setup (Upcoming)

- [ ] Create Google Ads campaigns for Morrison Insurance (Customer ID: 133-171-2290)
- [ ] Configure conversion tracking via Google Tag Manager BEFORE launching ads — address the "Your conversions can't be measured" priority issue flagged by Google Ads (Jul 20, 2026)
  - Conversion actions to set up: phone call clicks (tel: link), contact form submissions, quote request submissions
  - Method: Create conversion actions in Google Ads → fire via GTM tags (no site code changes needed)
- [ ] Link Google Ads account to Google Analytics 4 and Google Search Console
- [ ] Set campaign targeting to Shelby County + surrounding Deep East Texas counties
- [ ] Draft ad copy following Morrison brand voice (community-first, plain language, no fear tactics)

## GSC Content Improvement — Auto/Car Insurance Cluster (Jul 20, 2026)

- [ ] Add internal links from /auto-insurance service page to three Center TX articles
- [ ] Add internal links from each of the three Center TX articles back to /auto-insurance and to each other
- [ ] Build new article: "How to Compare Car Insurance Companies in Center, TX" targeting "car insurance companies in center, tx"
- [ ] Add new article to App.tsx, articleMeta.ts, rss.xml, sitemap.xml, Resources.tsx
- [ ] Write social posts for all four Center TX auto articles (3 existing + 1 new) for Metricool scheduling
- [ ] Write Google Business Profile post scripts for all four articles
