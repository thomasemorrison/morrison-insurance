# November 9 — approved quote-page release status

**Current status, 1:39 PM CST:** code is approved, pushed and present in the active project, but **public deployment is not verified**. The user reported Publish for checkpoint **5c973531** at 1:31 PM. Checks through 1:37 PM still returned the old article, RSS title and sitemap modification date on both Morrison domains. The eight approved Facebook/Instagram promotions are active schedules and are unaffected by this website blocker.

## Completed release preparation

The Morrison team approved the displayed social batch and quote-page refresh at 1:25 PM CST: “Looks great! Let's get it all posted.” This records owner/editorial approval, not a fabricated licensed-agent review. Visible editorial responsibility remains Morrison Insurance.

Scoped code commit **9b9ef86**, “Refresh Center car insurance quote guide (2026-11-09),” pushed successfully to `thomasemorrison/morrison-insurance` main. Six files only: existing quote TSX, Resources card, server article metadata, existing RSS item, sitemap entry and quote-refresh regression test. Original July 13 publication, canonical URL and existing 1080 × 1350 hero retained; no duplicate page, route or feed item.

The active project was fast-forwarded to that exact commit from the verified canonical clone. Its own remote credential helper was unavailable, so a local Git fetch/fast-forward was used without modifying credentials, global Git settings or the working GitHub connector. Active-project TypeScript, all **34 tests**, production build and preview title check passed. Prior mobile/desktop and XML checks also passed. Existing dependency/chunk-size warnings remain unchanged.

Release-ready checkpoint **5c973531** contains the approved website source. A checkpoint and Git push are not public deployment. The sandbox browser redirects to Manus sign-in and cannot access the Website panel's Publish control; the tool catalog exposes no separate public deploy/status operation. No authentication, auto-publish, hosting, domain or deployment-mode change was attempted.

## Public evidence after the reported Publish action

At the final check, both `morrison-ins.net` and `www.morrison-ins.net` returned HTTP 200 but still served **“How to Get Car Insurance Quotes in Center, TX | Morrison Insurance”**, the prior description and old body. The intended title is **“Car Insurance Quotes in Center, TX: What to Ask Before You Choose | Morrison Insurance.”** RSS and sitemap also remain from the prior release. The existing hero is accessible and remains a valid 1080 × 1350 JPEG.

Cache-bypassed requests likewise returned the old response with `Cache-Control: no-cache, no-store, must-revalidate`, and the public JavaScript asset was `/assets/index-DklEoDqz.js`, not the new built `/assets/index-DQXhUJzv.js`. This is evidence that the new public build is not yet being served; it is not a claim that Google Search or the site has stopped working. A five-minute finite rollout check completed without the expected release. No recurring monitor was created.

[Final raw public verification](/home/ubuntu/research/quote-release-2026-11-09/public-verification.json) · [Cache-bypass evidence](/home/ubuntu/research/quote-release-2026-11-09/cache-bypass-check.json).

## Remaining input

Inspect the existing Website panel's deployment result for **5c973531**: whether it is still deploying, reported an error, or marked a different release live. Do not repeatedly click Publish, change domains, enable auto-publish or introduce a new hosting workflow without diagnosing that result. After the actual release reaches production, verify exact article metadata/body/update date, hero, RSS and sitemap on both domains. Search Console indexing is separate and remains unsubmitted; URL Inspection API alone is not Request Indexing.

Sunday's active quote-question pair links the existing, already-live comparison guide. The three community pairs retain their original approved dates. All eight are provider PENDING—scheduled, not published. Existing GBP/LinkedIn and legacy posts were unchanged. Sports and water-status holds remain. No Ads, GTM, email, Trigger or recurring-workflow setting changed.
