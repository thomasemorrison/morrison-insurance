# November 9 — quote-page release confirmed

**Current status, 1:45 PM CST: the approved quote refresh is live on both public Morrison domains.** Fresh verification passes for the exact new title, description, canonical, hero, updated existing RSS item and sitemap lastmod. The browser shows the new guidance, original July 13 publication and November 9 update. The prior deployment blocker is resolved. The eight approved Facebook/Instagram promotions remain active schedules at their planned dates, provider PENDING—not yet published.

## Approved and tested source

The Morrison team approved the displayed social batch and quote-page refresh at 1:25 PM CST: “Looks great! Let's get it all posted.” This records owner/editorial approval, not a fabricated licensed-agent review. Visible editorial responsibility remains Morrison Insurance.

Scoped code commit **9b9ef86**, “Refresh Center car insurance quote guide (2026-11-09),” was pushed to `thomasemorrison/morrison-insurance` main. Six files only: existing quote TSX, Resources card, server article metadata, existing RSS item, sitemap entry and quote-refresh regression test. Original July 13 publication, canonical URL and existing 1080 × 1350 hero retained; no duplicate page, route or feed item.

The active project was fast-forwarded to that exact commit from the verified canonical clone. Its own remote credential helper was unavailable, so a local Git fetch/fast-forward was used without modifying credentials, global Git settings or the working GitHub connector. Active-project TypeScript, all **34 tests**, production build and preview title check passed. Mobile/desktop and XML checks also passed. Existing dependency/chunk-size warnings remain unchanged.

Release-ready checkpoint **5c973531** included the approved source. Documentation checkpoint **648f68b6** retained that same source and recorded the initial rollout issue. A push/checkpoint alone was not treated as deployment. The sandbox browser could not reach the signed-in Website Publish control, and no hosting, auto-publish or deployment-setting workaround was used.

## Actual public verification

The user reported Publish at 1:31 PM. Initial checks through 1:37 PM still served the old article, including cache-bypassed requests. Those dated findings remain historical evidence—not the current status. After the user's renewed “Publish” message at 1:44 PM, the 1:45 PM verification passed and the platform also reported successful deployment on Morrison's domains.

[Read the live quote guide](https://morrison-ins.net/resources/car-insurance-quotes-center-tx).

Both `morrison-ins.net` and `www.morrison-ins.net` now return **“Car Insurance Quotes in Center, TX: What to Ask Before You Choose | Morrison Insurance”**, the approved description and canonical, and matching hero. The existing RSS entry occurs once with the updated title and both image elements; the live RSS build date and quote sitemap lastmod reflect November 9. The existing hero is HTTP 200, JPEG, 1080 × 1350. Browser verification confirms the new body and visible original/update dates.

[Final raw public verification](/home/ubuntu/research/quote-release-2026-11-09/public-verification.json). The earlier [cache-bypass evidence](/home/ubuntu/research/quote-release-2026-11-09/cache-bypass-check.json) documents only the pre-release state.

## Social and indexing status

Eight existing FB/IG drafts were activated and independently read back, with unchanged approved copy, media, alt text, UUIDs and dates. They are scheduled PENDING, not published. Actual weekly placements: eight Facebook and eight Instagram, plus one separately reserved Thursday fishing pair makes a source-gated nine-per-channel plan. No new GBP/LinkedIn or legacy edits. Sunday links the existing comparison guide as originally approved; no caption link was silently swapped.

Search Console indexing remains separate and unsubmitted. When access is available, use the verified Morrison property and URL Inspection → Request Indexing for the updated canonical URL. Inspection API alone is not a request. Sports and water-status holds remain. No Ads, GTM, email, Trigger or recurring-workflow setting changed.
