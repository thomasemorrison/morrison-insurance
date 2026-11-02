# Three new SEO-supporting articles — November 2, 2026

## Current status — November 2, 11:56 AM CST

The Morrison team confirmed publication of the latest website version. All three articles return HTTP 200 with their exact article-specific title, description, canonical URL, and hosted hero metadata on both `morrison-ins.net` and `www.morrison-ins.net`. The live RSS and sitemap were independently downloaded and parsed on both domains: all three article URLs are registered, and both RSS image elements match the corresponding article hero. Website publication is complete and unchanged; Google indexing is a separate step and is not claimed.

The parent verified at 11:56 AM CST that **all nine existing article promotions** are activated in Metricool with `draft: false`, `autoPublish: true`, and provider status `PENDING` (**not published**). The existing drafts were updated rather than duplicated. The six Facebook and Instagram promotions were independently read back after their earlier activation and remain unchanged: quote checklist November 4 at 10:00 AM Facebook and 10:15 AM Instagram; switching guide November 6 at the same times; business checklist November 13 at the same times. All times are America/Chicago CST. Instagram AI-image disclosure remains enabled. The three Google Business Profile Updates are also now activated, as detailed below. LinkedIn's three captions remain copy-only and held under the profile gate.

Before the initial Facebook/Instagram activation, the fresh Metricool check showed zero other active placements across all networks on each selected date. Those six schedules initially made two active placements each on November 4, 6, and 13. After Google activation, current combined totals are **November 4 = 2, November 5 = 1, November 6 = 3, and November 13 = 3**. Reserve November 5’s two remaining slots for the already authorized Thursday fishing pair, which is **not yet scheduled**; recheck capacity before scheduling it. This batch fits the normal three-placement combined cap without relying on the temporary November–December exception. No unrelated legacy posts were edited, canceled, or moved.

**Earlier GBP gate retained as validation history:** My Browser authentication was confirmed at 11:32 AM, so login was no longer the blocker. Neither the connector nor the inspected editor exposed a separate button field. Metricool's documented text-plus-link conversion conflicted with Morrison's no-URL-in-caption input rule, and permission was required before testing it. As of the 11:35 AM handoff, no URL had been entered and no Google draft had been activated. The 11:32 AM capacity readback showed zero active placements November 5 and two each November 6 and 13. The original Google IDs were 414198279, 414198349, and 414198391; their UUIDs and planned dates were preserved through subsequent updates.

**GBP gates passed individually and activation verified at 11:56 AM CST:** The user conditionally approved a one-time URL-to-button preview for each of the three Updates. Each full visible Metricool preview caption contained no URL or domain, with a distinct **More info** anchor to the matching article outside `.preview__content`. The API stores the original informational body **plus the matching article URL** for [Metricool's documented conversion](https://metricool.com/schedule-google-mybusiness/); the API text is not URL-free. The plain GBP copy blocks in the social handoff remain URL-free and describe the visible caption, not the complete API payload. The authentic Morrison building image, its alt text, and Update publication type were preserved. Actual live Google rendering and click-through were not tested. These conditional approvals confer **no future general authorization**.

| GBP Update | Current post ID | Preserved UUID | Connector-authoritative schedule (America/Chicago CST) |
|---|---|---|---|
| Quote checklist | 414310000 | 407231681415431540 | November 5, 2026, 08:30 |
| Switching guide | 414313655 | -2505700324724748477 | November 6, 2026, 13:00 |
| Business certificate checklist | 414318146 | 7194380236199052482 | November 13, 2026, 13:00 |

No browser **Save** or **Schedule** action was used because of a displayed-time discrepancy; connector times are authoritative. Retained HTML evidence: switching guide `/home/ubuntu/upload/app.metricool.com_planner_calendar_blogId_6256215_userId_4822283_1793641832907.html`; certificate checklist `/home/ubuntu/upload/app.metricool.com_planner_calendar_blogId_6256215_userId_4822283_1793642111235.html`.

No Search Console connector matched the current configuration check. No sitemap submission, indexing request, or indexed status is claimed. The remaining supported fallback is manual Search Console URL Inspection → Request Indexing for the three URLs below, or an authorized sitemap submission. URL Inspection API only reports status; the discontinued sitemap-ping endpoint is not an alternative.

## Live articles

[What to Bring for a Car Insurance Quote in Center, TX](https://morrison-ins.net/resources/car-insurance-quote-checklist-center-tx)

[How to Switch Car Insurance in Texas Without a Coverage Gap](https://morrison-ins.net/resources/switch-car-insurance-texas-without-gap)

[Asked for a Certificate of Insurance? A Shelby County Business Checklist](https://morrison-ins.net/resources/certificate-of-insurance-shelby-county-tx)

## Search evidence and selection

The team supplied the November 2 Weekly GSC Report for the last 28 days: 2 clicks, 619 impressions, 0.3% average CTR, and average position 32.9. The screenshot does not provide query-to-page mappings, country/device breakdowns, or the full query/page export. It is first-party evidence for prioritization, not proof of future rankings.

The strongest local topic in the supplied list is **“car insurance quotes center, tx”**, average position 12.3, 39 impressions. Other rows are “insurance agency,” position 11.0, 2 impressions; “monica watson,” position 11.0, 1 impression; “price comparison on car insurance,” position 13.0, 1 impression; and “business insurance shelby,” position 14.0, 2 impressions. The navigational name query is not a reason to publish an agent-name or headshot-led article.

The established quote, rate-comparison, auto-requirements, and small-business pages remain the destinations for their respective head queries. The new quote checklist answers preparation and privacy questions. The switching guide explains effective times, cancellation, lender proof, payments, and refund questions. The business checklist addresses a contractor/vendor certificate request rather than another product list. Contextual inbound links connect each new guide to its existing parent pages.

Public search sampling found TDI checklists alongside national quote tools, switching process guides, and TDI/Texas broker certificate explanations. These support the information needs, not measured local volume or keyword difficulty. No traffic, difficulty, or ranking forecasts were invented. The useful differentiator is practical local preparation, official sources, and a calm human next step.

## Implementation and validation

The three articles were pushed to canonical GitHub main in commit **5b59721**, then synchronized to the managed website project. Release-ready checkpoints include **5b597213** and **11e45264**. Each has a unique Morrison-hosted 4:5 JPEG, route, Resources card, crawler-visible metadata, article structured data, RSS enclosure/media content, and sitemap entry. Each guide has a visible publication date, editorial-responsibility line, official sources, and an educational next step.

TypeScript, **29 tests**, production build, XML parsing, public JPEG checks, all production-preview metadata checks, and three desktop and 375-pixel mobile previews passed. The November 2, 10:21 AM live check initially showed the older release; that blocker is now resolved by the user’s publication and the successful 10:34–10:37 AM public checks. Production RSS/sitemap results are retained in `content/three-article-live-feed-check-2026-11-02.json`.

The earlier planner snapshot is retained in `content/three-article-social-planner-2026-11-02.json`; it was not updated in this documentation-only revision and must not be treated as authoritative for the latest Google IDs or activation state. Current IDs, preserved UUIDs, dates, planner URLs, full four-channel copy, and completed Google button-preview validation are recorded in `content/three-article-social-handoff-2026-11-02.md`, with current Google IDs also listed above. The earlier six Facebook/Instagram updates and the subsequent three Google updates changed numeric IDs while preserving UUIDs; use the current IDs for any subsequent authorized changes.

Durable history is updated locally in these two handoff documents. The durable project-calendar copy previously contained the November 2 entry, and its configuration update was submitted for user review, not confirmed applied. **Final shared project-calendar synchronization is separately pending confirmation**; a pending project-file card is not a saved cross-task update, and no applied shared sync is claimed. Only the nine existing article promotions were activated; no unrelated legacy social post, Ads, email, trigger, recurring schedule, or LinkedIn publication was changed. Manual Search Console indexing remains open with no request submitted.

## Research references

Detailed sources and overlap findings are recorded in the three companion research files. The articles cite the authoritative pages actually read: TDI’s auto shopping guide, auto consumer guidance and policyholder rights, cancellation guidance, and the certificate-of-insurance hub and FAQ. The supplied GSC screenshot is the first-party prioritization evidence.
