# Google Ads Restoration Audit — September 1, 2026

## Audit purpose and change-control note

This record supports a read-only review of the Morrison Insurance Agency Google Ads account after the report that campaigns had been down. No campaign status, budget, bidding, location, keyword, ad, conversion, billing, or promotional-credit setting has been changed during this review. Any change that can affect advertising spend or reach requires a separate, explicit approval from the account owner after the exact proposed settings are presented.

## Account access and initial campaign view

| Field | Observed value |
| --- | --- |
| Account | Morrison Insurance Agency |
| Signed-in user | thomas@moonrabbitexp.com |
| Google Ads customer context shown in URL | 830-642-4851 |
| Time zone shown in account | Central Time (GMT-05:00) |
| Initial reporting window | August 25–31, 2026 |
| Visible campaigns | 4 |
| Current view filter | All but removed campaigns |

The initial account view does **not** show campaigns paused or removed. It shows one Performance Max campaign limited by budget and three Search campaigns marked eligible. This is an important distinction: the available evidence points first to limited or uneven delivery rather than a blanket campaign shutdown. A deeper review is still required to identify any location, policy, landing-page, conversion, or account-level issue.

| Campaign | Type | Daily budget | Serving indication | Bid strategy | Aug. 25–31 delivery | Initial interpretation |
| --- | --- | ---: | --- | --- | --- | --- |
| Auto Insurance | Performance Max | $10.00 | Limited by budget | Target CPA | 418 impressions; 21 clicks; $51.74 cost; 4.00 conversions; $12.94 cost/conversion | Delivering, but its constrained budget and broad multi-network format need review before any expansion. |
| Morrison_Search_Bundle_Center-TX | Search | $10.00 | Eligible | Maximize clicks | 1 impression; 0 clicks; $0.00 cost | Active but receiving almost no delivery in this seven-day window. |
| Morrison_Search_Commercial_Center-TX | Search | $10.00 | Eligible | Maximize clicks | 0 impressions; 0 clicks; $0.00 cost | Active but receiving no delivery in this seven-day window. |
| Morrison_Search_Home_Center-TX | Search | $10.00 | Eligible | Maximize clicks | 0 impressions; 0 clicks; $0.00 cost | Active but receiving no delivery in this seven-day window. |

The account’s visible daily budget total is $40.00, although actual spend over the seven-day reporting window was $51.74 and was concentrated in the Performance Max campaign.

## Initial account notices requiring follow-up

| Notice | Follow-up needed |
| --- | --- |
| "Fix your disapproved sitelinks" | Inspect each disapproved sitelink, its policy reason, and its exact landing URL. Do not edit until the remedy is approved. |
| "Limited by budget" for Auto Insurance | Review actual search/query quality, geography, conversion action quality, and credit eligibility before deciding whether any budget should be reallocated or changed. |
| Search campaigns eligible but nearly inactive | Audit locations, network settings, keyword match types and bids, negative keywords, ad eligibility, and search-volume coverage before drawing a conclusion. |

The account-level Policy Summary view did not populate a policy table during this review. This does not clear the sitelink issue because the active campaign view still presents the "Fix your disapproved sitelinks" recommendation. The campaign’s native Assets navigation opens successfully at the association report, with the relevant Google Ads route `/aw/assetreport/associations`. The direct `/aw/assets` route returned a platform 404 in this session, so it is not reliable for the review. The asset association table resolved the open item: one sitelink is disapproved for **Destination not working**. The sitelink-recommendation page itself did not render its details during the initial load, but an asset list is available for direct review.

| Auto Insurance asset | Asset type | Status | Aug. 25–31 results | Audit finding |
| --- | --- | --- | --- | --- |
| Get a free quote lead form | Lead form | Eligible (Limited) — Policy: Financial Services Verification | 30 impressions; 8 clicks; $26.70 cost; 3 conversions | The lead form is the main reported conversion source. Its policy limitation must be checked, and its conversions must be verified as actual submitted leads rather than opens. |
| Get a free quote | Sitelink | Eligible | 13 impressions; 1 click; $5.06 cost | Final URL: `https://morrison-ins.net/contact`; verified HTTP 200 for desktop, Android, Googlebot, and AdsBot-style header requests. |
| Get to know us | Sitelink | Eligible | 10 impressions; 1 click; $5.06 cost | Final URL: `https://morrison-ins.net/`; public page is reachable. |
| Need Auto Coverage? | Sitelink | Eligible | 6 impressions; 0 clicks | Final URL: `https://morrison-ins.net/auto-insurance`; verified HTTP 200 for desktop, Android, Googlebot, and AdsBot-style header requests. |
| Learn more about coverage | Sitelink | Eligible | 5 impressions; 0 clicks | Final URL: `https://morrison-ins.net/resources`; verified HTTP 200 for desktop, Android, Googlebot, and AdsBot-style header requests. |
| Serving East Texas - 1923 | Sitelink | **Not eligible — Disapproved (Destination not working)** | 0 impressions; 0 clicks | Final URL: `https://morrison-ins.net/about`. This is the source of the disapproved-sitelink recommendation and should be corrected only after live-destination testing confirms the remedy. |
| Call extension: (936) 598-2791 | Call | Eligible | 88 impressions; 15 clicks; $46.24 cost; 3 conversions | The call asset accounts for the other reported conversions, so its qualified-call definition needs validation. |

The asset table contains one Financial Services Verification-limited lead form and one disapproved sitelink. The account’s seven-day delivery was heavily concentrated in the lead-form and call assets; individual sitelinks were not a material source of traffic during the observed window.

The disapproved sitelink’s visible text is “Serving East Texas - 1923,” with descriptions “More than 100 years of service” and “Three generations of experience.” Its edit screen confirms the final URL is **`https://morrison-ins.net/about`**. The current edit scope is set to “All associations of this asset (account and 1 campaign),” so a future correction to this shared asset could affect more than the Auto Insurance campaign. No form value was altered or saved in this audit.

### Destination test result

The exact `https://morrison-ins.net/about` URL returned HTTP 200 with no redirect for desktop Chrome, Android Chrome, Googlebot, and AdsBot-Google user-agent requests on September 1. The other confirmed sitelink destinations—`/contact`, `/auto-insurance`, and `/resources`—also returned HTTP 200 for all four request profiles. The homepage completed successfully for Android and returned 200 headers or bodies under the other profiles during the test sequence, though several requests timed out while the full response body was still streaming. These duration exceptions did not produce a destination-not-working response.

The current disapproval therefore most plausibly reflects a prior transient availability check or a stale policy-crawl result rather than a presently reproducible response failure. The correct remediation is to resubmit the unchanged destination for review or trigger its policy recheck after confirmation—**not** to change the destination simply because it was once marked unavailable.

## Billing status and historical spend context

The Billing Summary shows a zero current balance, no upcoming automatic payment, and a payment recorded on September 1. A Visa payment method is active. The account is therefore not visibly blocked by an unpaid balance in this view.

| Month shown | Net cost | Payments shown | Note |
| --- | ---: | ---: | --- |
| September 2026 (current month) | $0.00 | $181.67 | The latest payment is recorded September 1; current-month activity is early and not a useful performance baseline. |
| August 2026 | $181.67 | $252.67 | Month was still processing at time of review. |
| July 2026 | $452.67 | $216.91 | Shows a materially higher historical outlay than the proposed conservative restart should assume. |
| June 2026 | $176.91 | $160.00 | Partial-month context after campaign start. |

These figures reinforce the need to set a combined daily budget substantially below historical spend unless the account owner expressly approves a larger amount. They do not establish the value or eligibility of an outstanding promotional credit; that will be checked in the separate Promotions view.

## Promotional-credit status

The Promotions view confirms that the $1,000 spend-based credit is active. It was redeemed June 17, has $1,000.00 in granted credit, and shows $72.51 (7.25%) spent as of the audit. The listed credit expiration date is October 21, 2026. The prerequisite-completion date shown is August 16, 2026, which has passed; because the status remains active, the requirement appears to have been met. The estimated unspent credit based on the displayed values is $927.49, subject to Google’s billing processing and final accounting.

| Promotion | Current status | Important dates | Credit information | Restoration implication |
| --- | --- | --- | --- | --- |
| $300 Website Conversion Tracking credit | Expired | Redeemed July 13; requirements due August 12 | No credit shown as granted | Not available for a restart. |
| $1,000 for $500 Google Ads spend | **Active** | Redeemed June 17; listed credit expiration October 21 | $1,000.00 granted; $72.51 / 7.25% spent | The active balance can support a controlled restart, but it does not remove the need for an owner-approved cap and qualified-lead controls. |

## Conversion-goal configuration

The account has three conversion-goal groups shown in the Goals view. In the Aug. 25–31 window, the only recorded results were four **Phone call leads**; contacts, directions, page views, and submitted lead forms all recorded zero in their corresponding goal cards. The account-default settings include "Submit lead form," "Phone call lead," and "Page view" goals across all four campaigns.

| Conversion goal | Campaign assignment | Primary actions | Status shown | Aug. 25–31 results | Audit implication |
| --- | --- | ---: | --- | ---: | --- |
| Submit lead form | Account-default; 4 of 4 campaigns | 1 | Needs attention | 0 | Form tracking needs diagnostic review before it is relied on for bidding. |
| Phone call lead | Account-default; 4 of 4 campaigns | 1 | Active | 4 | This is the only goal currently reporting results; the definition and minimum-duration rule still need confirmation. |
| Contact | 0 of 4 campaigns | 1 | Needs attention | 0 | Not currently used by the active campaigns. |
| Page view | Account-default; 4 of 4 campaigns | 2 | Needs attention | 0 | Page-view actions are included in the campaign conversion mix but are not producing results in the observed week. Their primary/secondary classification must be reviewed before future bidding changes. |

The conversion mix does not support increasing budget or loosening automated bidding at this stage. First, the underlying form and website actions must be checked for diagnostics and the account should optimize toward real calls and submitted forms rather than a broad page-view proxy.

The conversion-action inventory identifies the underlying website action that needs remediation. The account-default page-view conversion is a primary action but is marked **Misconfigured**; it tracks the `morrison-ins.net/about` page load and uses a 90-day click-through conversion window. This page-view action is not a useful lead proxy and should not be used to steer automated bidding after the account is restored.

| Individual conversion action | Source | Tracking status | Optimization | Counting method | Click-through window | All conversions, Aug. 25–31 |
| --- | --- | --- | --- | --- | --- | ---: |
| Submit lead form (`www.morrison-ins.net/`) | Website | Awaiting conversions | Primary | One | 90 days | 0 |
| Calls from ads | Call from Ads | Active | Primary | Every | 30 days | 4 |
| Page view (page load `morrison-ins.net/about`) | Website | **Misconfigured** | **Primary** | Every | 90 days | 0 |
| Local actions — Website visits | Google-hosted | Awaiting conversions | Primary | Every | 30 days | 0 |
| Clicks to call | Google-hosted | Awaiting conversions | Primary | Every | 30 days | 0 |

The immediate technical priority is to correct the misconfigured `/about` page-view tag or demote that action from primary optimization. This correction could affect bidding behavior and must be explicitly included in the owner-approved change set. The Submit lead form action is not presently misconfigured, but it lacks recorded conversions and should be verified with a controlled form test before it is treated as a reliable bidding signal.

The Google Ads Diagnostics tab did not populate any actionable diagnostic details in this session. The conversion-action inventory remains the authoritative account evidence for the current audit: the `/about` page-view action is misconfigured, the lead-form action is awaiting conversions, and call tracking is active.

The Auto campaign’s separate asset report also displays three conversions beside its Google Ads lead-form asset for the same displayed reporting window. That differs from the account-level Submit lead form goal card, which reports zero. The discrepancy may reflect the reporting context or attribution used by the asset table, but it should be reconciled before a lead-form metric is used as a bidding decision point. The account-level conversion-action inventory remains the current source for account-default bidding configuration.

## Bundle Search campaign delivery

The `Morrison_Search_Bundle_Center-TX` campaign is enabled and eligible with a $10.00 daily budget and a Maximize clicks strategy. Its single standard ad group is also eligible. Despite that active status, it served only one impression and no clicks or cost in the Aug. 25–31 period; Google reports that the campaign has insufficient recent data for its budget simulator. This is underdelivery, not a paused-campaign status.

The Bundle campaign has one eligible responsive search ad leading to `https://morrison-ins.net`. Its reported strength is **Poor**. The current headline and description emphasize savings, free quotes, and an unsupported “Most clients save hundreds” claim. That language does not fit Morrison Insurance’s neighborly, non-promotional voice and should be replaced only through an explicit owner-approved ad update. Its immediate delivery issue remains the low-volume keyword mix rather than an ad disapproval.

The campaign-settings panel confirms Search campaign type and eligible status. Its full settings content did not populate reliably during the first load, so exact Search-network, location, language, and URL options remain to be captured before a change proposal is made.

On the subsequent settings-panel load, the campaign confirms Search type, Enabled / Eligible status, Maximize clicks bidding, and a $10.00 daily budget. It is optimized to the same account-default mixture of page views, phone call leads, and one additional goal. The exact network selection and location list still require review. Because the page-view action is misconfigured, the present automated-bidding configuration should not be expanded before the conversion mix is corrected or isolated.

### Keyword inventory

The Bundle campaign contains eight keywords, all centered on multi-policy savings rather than the hyper-local general insurance and independent-agency queries the account needs. Six of eight recorded no impressions in the observed period; four terms are explicitly not eligible for low search volume.

| Current keyword | Match type | Current status | Aug. 25–31 impressions | Finding |
| --- | --- | --- | ---: | --- |
| "bundle home and auto insurance" | Phrase | Eligible | 1 | The only term with an impression; still too generic to establish local demand. |
| "save on home and auto insurance" | Phrase | Eligible | 0 | Non-local and no observed delivery. |
| "multi-policy insurance discount" | Phrase | Eligible | 0 | Discount-driven and non-local; conflicts with the desired service-led Morrison voice. |
| [multi policy insurance discount Texas] | Exact | Not eligible — low search volume | 0 | No delivery path. |
| [home and auto insurance bundle Center TX] | Exact | Not eligible — low search volume | 0 | Very narrow term lacks available query volume. |
| "home and auto bundle East Texas" | Phrase | Not eligible — low search volume | 0 | No delivery path. |
| [bundle insurance East Texas] | Exact | Not eligible — low search volume | 0 | No delivery path. |
| [bundle home and auto insurance Texas] | Exact | Eligible | 0 | Broad statewide qualifier but no observed delivery. |

No AI Max expanded matches, AI Max landing-page matches, or URL inclusions generated traffic in this campaign during the period shown. The direct cause of Bundle’s lack of delivery is therefore a keyword set with limited available volume and insufficient local-intent coverage—not a paused status or budget exhaustion.

### Geographic targeting

The Bundle Search campaign has five active location targets: Center, Panola County, Sabine County, San Augustine County, and Shelby County. This is broadly consistent with a Deep East Texas service area but omits nearby Nacogdoches County, which can be a meaningful local-intent market, and has not yet been reviewed for exclusions or the selected location-presence option. The campaign recorded one impression across these targets in the observed period and no clicks.

| Existing Bundle target | Type | Observed Aug. 25–31 clicks | Observed impressions |
| --- | --- | ---: | ---: |
| Center, Texas | City | 0 | 1 |
| Shelby County, Texas | County | 0 | 0 |
| Panola County, Texas | County | 0 | 0 |
| Sabine County, Texas | County | 0 | 0 |
| San Augustine County, Texas | County | 0 | 0 |

The Bundle campaign currently has **no location exclusions**. That is not a defect by itself, but the campaign lacks a documented presence-only setting and has no guardrail against serving to people merely interested in the area rather than located within it. The recommendation will specify a presence-based targeting setting and retain exclusions only if later search-term or geo-location data identifies wasteful areas.

## Commercial Search campaign

`Morrison_Search_Commercial_Center-TX` is enabled and eligible with a $10.00 daily budget. It recorded no impressions, clicks, cost, or conversions in the Aug. 25–31 period. Its nine-keyword inventory is more aligned to local business intent than Bundle’s, but the local terms were narrowed so far that five keywords are not eligible for low search volume.

| Current commercial keyword | Match type | Current status | Finding |
| --- | --- | --- | --- |
| [business insurance Center TX] | Exact | Not eligible — low search volume | Core local term is too narrowly constrained. |
| [commercial insurance Shelby County] | Exact | Not eligible — low search volume | Core local term is too narrowly constrained. |
| [general liability insurance Center Texas] | Exact | Not eligible — low search volume | Core local term is too narrowly constrained. |
| [small business insurance East Texas] | Exact | Not eligible — low search volume | Regional long-tail term has no delivery. |
| [business insurance East Texas] | Exact | Eligible | No observed delivery. |
| "business insurance Center TX" | Phrase | Not eligible — low search volume | Core local phrase remains too narrow. |
| "commercial insurance East Texas" | Phrase | Eligible | No observed delivery. |
| "general liability insurance Texas small business" | Phrase | Eligible | Statewide generic term could pull broad / less-local demand; no observed delivery. |
| "independent commercial insurance agent Texas" | Phrase | Eligible | Statewide generic term could pull broad / less-local demand; no observed delivery. |

The Commercial campaign is not technically down; its near-zero delivery reflects low-volume keyword concentration and a lack of a practical local-intent keyword structure. Any restoration plan should not simply raise its budget. It should first adjust the eligible phrase/exact term mix toward service-led local business queries and apply appropriate negative keywords.

## Home Search campaign

`Morrison_Search_Home_Center-TX` is enabled and eligible with a $10.00 daily budget. It recorded no impressions, clicks, cost, or conversions in the Aug. 25–31 period. Its keyword set includes one broad term but is otherwise made up of narrow local exact/phrase variants. Seven of the eleven keywords visible in the first page of the report are not eligible for low search volume; the eligible regional and county variants had no delivery.

| Current home keyword | Match type | Current status | Finding |
| --- | --- | --- | --- |
| home insurance center texas | Broad | Not eligible — low search volume | Even the broad local phrase has no available volume in its present configuration. |
| [homeowners insurance Center TX] | Exact | Not eligible — low search volume | No delivery. |
| [home insurance Center Texas] | Exact | Not eligible — low search volume | No delivery. |
| [homeowners insurance Shelby County] | Exact | Eligible | No observed delivery. |
| [house insurance Center TX] | Exact | Not eligible — low search volume | No delivery. |
| [home insurance East Texas] | Exact | Eligible | No observed delivery. |
| "homeowners insurance Center TX" | Phrase | Not eligible — low search volume | No delivery. |
| "independent home insurance agent Texas" | Phrase | Eligible | Statewide framing, yet no observed delivery. |
| "compare home insurance East Texas" | Phrase | Not eligible — low search volume | No delivery. |
| "home insurance Shelby County" | Phrase | Eligible | No observed delivery. |

The Home campaign demonstrates the same operating issue as Bundle and Commercial: campaign status is active and eligible, but the keyword selection is too sparse and too tightly localized to produce meaningful auction participation. A lower-budget restart needs a more usable query structure, not merely another $10 daily allocation.

The Home campaign uses the **same five geographic targets** as Bundle—Center plus Shelby, Panola, Sabine, and San Augustine Counties—and posted no delivery against any of them during the observed week. Targeting consistency across the two campaigns is useful, but the lack of a documented presence-only setting remains a shared correction opportunity.

The Home campaign has one eligible, Excellent-strength responsive search ad that leads to `https://morrison-ins.net/home-insurance`. It has no delivery in the observed week. Its current ad copy emphasizes “best home insurance rate” and “protecting your biggest asset,” which is more rate-led and fear-adjacent than the project’s plain-spoken, service-first voice. Any copy revision should be a separate, owner-approved change; it is not required to address the campaign’s immediate lack of keyword volume.

The Commercial campaign uses the **same five geographic targets**—Center plus Shelby, Panola, Sabine, and San Augustine Counties—and likewise recorded no delivery across those areas in the observed week. All three Search campaigns can therefore be treated as a single targeting-control set for proposal purposes: preserve the core five existing local targets, add Nacogdoches County only if the owner approves the broader Deep East Texas service-area definition, and move each Search campaign to presence-based location targeting.

The Commercial campaign has one eligible responsive search ad that leads to `https://morrison-ins.net/business-insurance`, but its reported strength is **Poor** and it had no delivery in the observed period. The headline includes “Protect Your Business Today” and the description includes “Free quote today,” which conflict with the requested non-urgent, service-led local voice. A replacement ad should be considered only as an explicit owner-approved change alongside any keyword rebuild.

### Confirmed Search campaign settings

The Home and Commercial Search campaign settings are materially identical: both use the Google Search Network **and Search partners**, $10.00/day budgets, Maximize clicks bidding, English, no end date, no IP exclusions, no AI Max, and no text customization or Final URL expansion. Both optimize toward the account-default mixture of Page views, Phone call leads, and one additional goal. Given the tiny local budgets and lack of reliable form data, the recommendation will retain Google Search but turn **Search partners off** during the controlled restart, retain AI Max and dynamic expansion off, and remove Page view from each campaign’s primary optimization set. The Bundle campaign showed the same core budget, bidding, conversion-goal, and enabled-status setup; its detailed network setting was not separately rendered but will not be modified unless included in the final approved change set.

## Performance Max Auto Insurance campaign

`Auto Insurance` is the only campaign producing material delivery. It is enabled, **Limited by budget**, and capped at $10.00/day. Its Aug. 25–31 spend was $51.74 for 21 clicks, 418 impressions, and four recorded conversions. Google’s campaign table reports a $12.94 cost per conversion, but the conversion mix includes the account-level page-view goal that is misconfigured; the raw result should therefore be treated cautiously until conversion configuration is corrected.

| Targeted location with observed delivery | Clicks | Impressions | CTR | Avg. CPC | Cost | Recorded conversions | Cost / recorded conversion |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Shelby County, Texas | 15 | 359 | 4.18% | $2.73 | $40.90 | 3 | $13.63 |
| Sabine County, Texas | 6 | 38 | 15.79% | $1.81 | $10.84 | 1 | $10.84 |
| San Augustine County, Texas | 0 | 21 | 0.00% | — | $0.00 | 0 | $0.00 |
| **Campaign total** | **21** | **418** | **5.02%** | **$2.46** | **$51.74** | **4** | **$12.94** |

PMax delivery is concentrated in Shelby County with a smaller, efficient-looking sample in Sabine County. Given the small volume, it supports keeping the core counties rather than broadening the budget. The campaign’s “limited by budget” label does not justify an automatic increase because the conversion objectives remain mixed and the three Search campaigns are not yet participating meaningfully in auctions.

## Active landing-page verification

All four confirmed destinations used by active ads or assets were tested on September 1 using desktop Chrome, Android Chrome, Googlebot, and AdsBot-Google user-agent requests. Every request completed with HTTP 200 and no redirect. One Googlebot request to `/home-insurance` transferred the full page more slowly than the eight-second command limit but still returned HTTP 200 before the connection closed; the other three agents completed normally. This does not reproduce a current destination-not-working error.

| Destination | Desktop | Android | Googlebot | AdsBot-Google | Conclusion |
| --- | --- | --- | --- | --- | --- |
| `https://morrison-ins.net/` | 200 | 200 | 200 | 200 | Publicly accessible; no redirect. |
| `https://morrison-ins.net/home-insurance` | 200 | 200 | 200 (slow full transfer) | 200 | Publicly accessible; no redirect. |
| `https://morrison-ins.net/business-insurance` | 200 | 200 | 200 | 200 | Publicly accessible; no redirect. |
| `https://morrison-ins.net/about` | 200 | 200 | 200 | 200 | Publicly accessible; no redirect. |

The account’s lone destination-not-working sitelink therefore appears suitable for a policy recheck without altering its URL. Website accessibility is not presently the cause of Search campaign underdelivery.

### Tag-presence check

The deployed HTML for the homepage, Home Insurance, Business Insurance, and About pages contains the configured `GTM-PHMQXFMT` container. The `AW-18227570003` Google Ads tag does not appear as a static page string; that is consistent with the Google Ads tag being loaded through the GTM container. This check confirms the container is present but does not by itself prove that individual conversion events fire. No test lead form was submitted during this audit, to avoid creating artificial conversion data.

### Site-level form implementation review

The site mounts a HubSpot embedded form (portal `246212557`, form `156de4fd-61c3-4bff-a7a7-779bfb6bb35b`) through the HubSpot forms script. The React component does not contain a Google Ads event call, a HubSpot submission callback, or a redirect to the site’s `/thank-you` page. The existing `/thank-you` page is designed as a confirmation page and fires only a Meta lead event; it is not connected by the present form component. As a result, the Google Ads “Submit lead form” action may be dependent on a GTM listener for the HubSpot embed rather than on a confirmed site-side event. This explains why the Google Ads action is awaiting conversions but does not prove it is broken.

The conservative restoration proposal should therefore preserve the existing submitted-form action but avoid using it—or the misconfigured About-page view—as the sole automated bidding signal until a genuine test submission can be confirmed by the agency in HubSpot and in Google Ads. No artificial form submission was created during the audit.

### Tag Manager verification

The authenticated `GTM-PHMQXFMT` container has zero unpublished changes and includes a Conversion Linker firing on all pages, the base Google tag for `AW-18227570003` firing on all pages, and the Google Ads “Submit Lead Form” conversion tag (ID `18227570003`, label `o8nyCPSEv9AcENPKyvND`). The conversion tag’s only trigger is a Page View trigger named **Thank You Page**, which fires when `Page URL contains /thank-you`.

The present site-level form mount does not define a redirect. Whether the HubSpot form’s own saved configuration redirects to `/thank-you` could not be displayed in the browser session, so the result is a clear tracking risk rather than proof of total failure: a successfully submitted HubSpot inquiry is counted only if the form’s post-submit behavior sends the visitor to `/thank-you`. HubSpot’s current form API supports a successful-submission event, which can be used for a more durable trigger if the existing redirect is not configured.[1]

Tag Manager also reports two container-quality action items: additional domains detected for configuration, and a recommendation to add a second administrator. Neither is a direct campaign-serving block. The additional-domain item should be reviewed deliberately because the site uses both `morrison-ins.net` and `www.morrison-ins.net`; no domain or admin setting was changed in this audit.

## Recent-change check

The account-level Change History view showed **no matching changes** for August 25–31, 2026. Within that visible period, there is no evidence of a recent pause, budget reduction, bid change, geographic change, conversion change, or asset edit that explains campaign underdelivery. The campaigns are presently enabled and eligible; the underlying operating issue is the mismatch between tight low-volume local keywords, four split $10/day budgets, and a conversion mix that includes a misconfigured page-view action.

### Search-term-report access limitation

The legacy direct `aw/searchterms` route returned Google’s 404 page for this account on September 1. Search terms will instead need to be reviewed through the current navigation’s Insights and reports area or after sufficient Search-campaign data accrues. This does not block the immediate recommendation because the existing keyword inventory itself confirms the Search campaigns are not entering enough relevant auctions to produce actionable query data.

## Auto Insurance campaign configuration observed

The Performance Max campaign is enabled, rather than paused. Its campaign-settings panel shows a $10.00 daily budget and a Target CPA of $18.00. It is optimized to the account-default conversion goal set, which is displayed as “Page views, Phone call leads, and 1 more.” Including page views as an optimization goal can make the reported conversion total less representative of prospective-customer actions, so the conversion-action definitions and primary/secondary classifications need a separate audit before any bidding recommendation is made.

| Setting area | Observed value | Audit implication |
| --- | --- | --- |
| Status | Enabled; limited by budget | This campaign is active, but its traffic and delivery are constrained. |
| Campaign type | Performance Max | Delivery may extend beyond Search and requires closer control of search themes, assets, and locations than the narrower Search campaigns. |
| Budget | $10.00/day | Any change to this amount affects potential spend and is approval-gated. |
| Bidding | Target CPA $18.00 | Must be evaluated against qualified leads only, not page-view volume. |
| Conversion goals | Account-default: Page views, Phone call leads, and one additional action | Confirm the additional action and determine whether page views should be excluded from the campaign’s primary bidding goals. |
| Customer acquisition | Bid equally for new and existing customers | Reasonable default pending review; no current change proposed. |
| Merchant Center | Not set up | Not material to insurance lead generation. |

## Account-wide destination inventory

The asset reports and ad reports now provide the following account-wide inventory of destination-bearing creative. The three Search campaign asset reports show no additional associated assets. All reported final URLs remain within the Morrison Insurance domain and were tested in this audit; the call asset has no website destination.

| Campaign | Asset or ad | Final destination / action | Audit status |
| --- | --- | --- | --- |
| Auto Insurance — Performance Max | Google Ads lead form: Get a free quote | Post-submit action is **Visit site** to `https://morrison-ins.net/`; privacy URL is `https://morrison-ins.net/privacy-policy` | Lead form is Eligible (Limited) by Financial Services Verification. Its three asset-reported conversions differ from the account-level submitted-form goal and need reconciliation. |
| Auto Insurance — Performance Max | Sitelink: Get a free quote | `https://morrison-ins.net/contact` | HTTP 200 for desktop, Android, Googlebot, and AdsBot-style header requests. |
| Auto Insurance — Performance Max | Sitelink: Get to know us | `https://morrison-ins.net/` | HTTP 200 for desktop, Android, Googlebot, and AdsBot-style HTTP/1.1 header requests. |
| Auto Insurance — Performance Max | Sitelink: Need Auto Coverage? | `https://morrison-ins.net/auto-insurance` | HTTP 200 for desktop, Android, Googlebot, and AdsBot-style header requests. |
| Auto Insurance — Performance Max | Sitelink: Learn more about coverage | `https://morrison-ins.net/resources` | HTTP 200 for desktop, Android, Googlebot, and AdsBot-style header requests. |
| Auto Insurance — Performance Max | Sitelink: Serving East Texas - 1923 | `https://morrison-ins.net/about` | HTTP 200 for all four request profiles; still disapproved as Destination not working, suggesting a stale or prior transient review result. |
| Auto Insurance — Performance Max | Call asset | `tel:+19365982791` | No web destination. Eligible; call definition still requires a qualified-call-duration review. |
| Morrison_Search_Bundle_Center-TX | Responsive search ad | `https://morrison-ins.net/` | Eligible ad; no separate campaign assets displayed. Homepage verified as above. |
| Morrison_Search_Home_Center-TX | Responsive search ad | `https://morrison-ins.net/home-insurance` | Eligible ad; no separate campaign assets displayed. HTTP 200 for the four request profiles. |
| Morrison_Search_Commercial_Center-TX | Responsive search ad | `https://morrison-ins.net/business-insurance` | Eligible ad; no separate campaign assets displayed. HTTP 200 for the four request profiles. |

The homepage header test initially had intermittent TLS connection delays under several crawler-style requests, while it continued to load normally in a browser and returned 200 to Android. A bounded HTTP/1.1 retry test then returned **HTTP 200** for desktop, Android, Googlebot, and AdsBot-style homepage requests. The current evidence therefore does not support a live landing-page outage.
| Store locations | One location group | Verify that the correct Morrison Insurance Agency location is attached. |
| Dynamic data feed | No data feed | Not material to the immediate campaign-restoration decision. |
| Asset group | One eligible group, average ad strength, no audience signals | Search themes are broad: car insurance, insurance quote, auto insurance, insurance agent. The themes need locality and intent refinement before any expansion. |

The visible location summary begins with **Sabine County, Texas, United States (county)** and indicates two additional locations. The setting panel does not expose the full list in its summary view; the complete location list and each campaign’s location-presence setting remain to be inspected before recommending a hyper-local target area.

Additional settings visible in the same panel show English language targeting, a June 17, 2026 start date with no end date, all-device delivery including TV screens, and no demographic, audience-data, or brand-list exclusions. Text customization and final-URL expansion are enabled under asset optimization. These broad automation settings should be evaluated carefully in a local lead-generation program, but no setting has been changed in this audit.

## Next audit steps

The next read-only steps are to inspect campaign settings, locations, networks, search terms and keywords, ad and asset policy statuses, conversion definitions, account billing/credit messages, and the final URLs associated with all active or disapproved assets. Exact destination testing will then be performed outside the advertising platform using browser and crawler-style checks.

## References

[1] [HubSpot Developer Docs — Global form events](https://developers.hubspot.com/docs/api-reference/latest/marketing/forms/global-form-events)
