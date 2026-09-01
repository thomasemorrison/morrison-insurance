# Google Correspondence Triage — August 25, 2026

## Immediate priorities

| Priority | Finding | Current implication | Next step |
|---|---|---|---|
| 1 | Google Ads disapproved one ad and one asset in `Morrison_Search_Commercial_Center-TX` for **Destination not working**; Android check reported HTTP 503. A separate notice reports four affected assets with the same policy reason. | Affected ads/assets cannot serve until the destination check succeeds and policy review clears. | Reproduce with mobile and Google Ads crawler-style requests, identify the final URLs, correct any response issue, and request review. |
| 2 | Search Console validation for **Crawled — currently not indexed** failed because some pages remain affected. | The specific remaining URLs must be inspected; this is not a sitewide proof of a technical failure. | Open the issue report, export the affected URL examples, sort by business/SEO priority, and inspect each type. |
| 3 | Google Ads reports a **$1,000 ad credit** earned. | The credit should be verified under Billing → Promotions before any budget change. | Confirm credit amount, expiration/terms, eligible spend, and current account balance. |
| 4 | Performance Max `Auto Insurance`: 13 clicks (down 24%) and 403 impressions (down 12%). | Volume is modest, so fixing the blocked destinations and conversion measurement takes priority over scaling. | Review asset status, final URLs, conversion goals, location targeting, and search themes. |

## Analytics snapshot supplied

The July 24–August 20 report shows 540 active users (+102.25%), 536 new users (+102.26%), 2.3K events (+75.73%), and average engagement time of 7 seconds (down 61.1%). The homepage shows 557 views, 439 active users, and an 82.31% bounce rate. The Business Insurance Center, TX page shows 85 views, 80 active users, and an 85.39% bounce rate. These are **directional signals**, not a diagnosis: traffic quality, consent behavior, bot filtering, event configuration, and page speed should be checked before changing campaigns based on bounce rate alone.

## Indexing note

The Search Console notice relates to a prior validation request for **Crawled — currently not indexed**. It does not say the wildfire article or the entire website is blocked. The next action is to review the remaining URL examples in Search Console and separate low-priority/de-duplicated pages from pages that need content, canonical, or internal-link remediation.

## Live destination test — August 25

At triage time, the live site returned **HTTP 200** for both Android-style and `AdsBot-Google` requests to the canonical homepage, the `www` homepage redirect, `/auto-insurance`, and `/business-insurance`. The `www` hostname resolved cleanly to the canonical non-`www` host. This does not clear the Ads policy issue: the Google Ads interface must still be checked for the exact final URL of each disapproved ad and asset, and a policy re-review must be requested after the destination issue is confirmed resolved.

Search Console is currently signed out in the browser, so the remaining examples for the indexing report require the property owner to sign in during the working session.

## Search Console status after sign-in

The Page indexing report, last updated August 21, 2026, shows **29 indexed pages** and **11 not indexed pages**. The not-indexed total is split across three active reasons: one **Crawled — currently not indexed** URL with validation failed, two **Soft 404** URLs with validation not started, and eight **Discovered — currently not indexed** URLs with validation started. Search Console reports zero active “Not found (404)” URLs. The requested validation failure therefore concerns one current crawled-but-not-indexed example, not all eleven URLs.

The single crawled-but-not-indexed example is `https://morrison-ins.net/resources/accident-uninsured-driver-texas`, last crawled on **June 28, 2026**. The validation request started July 29 and failed August 11. The page should be checked for current live status, canonical tag, internal links, and substantive uniqueness before submitting a new validation request.

## Email-authentication report

The attached Google DMARC aggregate report covers four messages from Microsoft 365 IPv6 sending infrastructure. Every message passed both SPF and DKIM with `selector1`; no unauthorized source or authentication failure appears in this report. The published DMARC policy remains monitoring-only (`p=none`). No immediate email-authentication action is required.

## Follow-up DMARC reports

The two consecutive Google aggregate reports reviewed together cover seven total messages sent as `morrison-ins.net`: four in the first report and three in the second. All seven passed aligned SPF and DKIM using `selector1`, with no unauthorized sending source, DMARC failure, or quarantine/reject action reported. The domain remains on the monitoring policy (`p=none`), so no email-authentication change is warranted at this time.

## Working-session agenda for tomorrow

1. Verify the $1,000 promotional credit and its terms.
2. Open the disapproved Search campaign ad and assets; copy each final URL and reproduce the Android 503 result.
3. Test live landing pages with Google Ads’ mobile/crawler context; fix the response issue and submit policy review.
4. Confirm conversion actions in Google Ads and their GTM triggers for phone calls and completed lead forms.
5. Review the Performance Max Auto Insurance campaign: asset policy status, destination URLs, location targeting, conversion goal, and budget.
6. Open the Search Console indexing issue, export affected URL examples, and assign fixes by impact.
7. Review Analytics acquisition, engagement, and key-event configuration; avoid using bounce rate alone as a campaign decision rule.

## Calendar confirmation

The Google Ads and Search Console working session is on the primary calendar for **Thursday, August 27, 2026, 9:30–10:15 AM CDT**. Calendar event ID: `crfm358b6ccco37pscfr2ib0og`. It includes 30-minute and 5-minute reminders.

## Published redirect verification

After publication, `https://morrison-ins.net/resources/accident-uninsured-driver-texas?utm_source=google` returns an HTTP 301 redirect to `/resources/uninsured-driver-accident-texas?utm_source=google`. The canonical destination returns HTTP 200 to a Googlebot-style request and now declares its own canonical URL, matching `og:url` and the article title. This resolves the specific canonical mismatch behind the crawled-but-not-indexed example; Search Console will need time to recrawl and update its report.

## September 1 robots.txt live-test check

Google Search Console rejected the new ATV/UTV article’s indexing request after its live URL test reported **“Robots.txt unreachable.”** The website’s source and production build both contain the same 91-byte `robots.txt`, and direct live checks immediately afterward returned HTTP 200 with `text/plain` for standard, Googlebot, and Google smartphone crawler-style requests. The live file allows all crawlers except `/thank-you` and identifies `https://morrison-ins.net/sitemap.xml`.

This evidence does not show a persistent site defect; it points to an intermittent or temporary Google-side fetch failure. Do not issue repeated indexing submissions. Re-run the live URL test during the scheduled Google Ads/Search Console review and request indexing only if that test reaches the site successfully.
