# Google Ads Restoration Proposal — September 1, 2026

**Prepared for:** Morrison Insurance Agency, Center, Texas  
**Status:** Proposed only — no Google Ads setting has been changed

## What the audit found

The campaigns are not presently paused. Auto Insurance is enabled and producing traffic, while the Bundle, Home, and Commercial Search campaigns are enabled but receive virtually no delivery. The immediate problem is not a website outage or billing hold: all four confirmed landing pages return HTTP 200 for desktop, Android, Googlebot, and AdsBot requests, the GTM container is present on the live pages, and billing is current. The Search campaigns are too fragmented and rely heavily on terms marked “Low search volume.”

The active Auto Insurance Performance Max campaign spent $51.74 in the reviewed week, produced 21 clicks, and registered four account-level phone-call conversions. Those results need caution because the account also treats an `/about` page view as a primary conversion even though Google Ads marks that action **Misconfigured**. The asset table separately shows three lead-form conversions, while the account-level submitted-form goal shows zero; that reporting difference needs reconciliation before it guides bidding. Google’s current guidance is to give Performance Max accurate conversion inputs, optimize toward a clearly valuable lead action, and avoid mixing funnel stages in a single target-CPA strategy.[1]

> **Recommendation:** Restore meaningful local delivery through a controlled 14-day test, with a **$10/day combined average budget** across the active campaigns—not the present $40/day configured total. This is about **33% below July’s $452.67 account cost** and caps the proposed monthly average-budget total at approximately **$304**.

Google budgets are averages rather than a hard per-day charge ceiling. For most campaigns, Google may serve up to twice an average daily budget in a high-traffic day, while the monthly spending limit remains 30.4 times the average daily budget.[2]

## Exact proposed changes

| Campaign | Current status / budget | Proposed status / budget | Exact purpose and change |
| --- | --- | --- | --- |
| **Auto Insurance** (Performance Max) | Enabled; $10/day; Target CPA $18 | **Remain enabled; $6/day; retain Target CPA $18 for the initial test** | Preserve the only campaign with recent local response while reducing its share of the account cap. Keep its current Shelby, Sabine, and San Augustine County targets; change location option to **Presence: people in or regularly in included locations**; turn **Final URL expansion off** and use the Auto Insurance page as the campaign landing page. Do not add a wider location, raise budget, or enable new automated features during this test. |
| **Morrison_Search_Home_Center-TX** (Search) | Enabled; $10/day; no recent delivery | **Remain enabled; $2/day** | Change location option to **Presence**; keep Center, Shelby, Panola, Sabine, and San Augustine County targets; turn **Search partners off**; retain Google Search Network, English, existing manual assets, no AI Max, and no Final URL expansion. Replace only the non-delivering low-volume keyword set with the local-intent terms listed below. Keep the presently eligible Home Insurance landing page and existing responsive search ad unchanged in this first step. |
| **Morrison_Search_Commercial_Center-TX** (Search) | Enabled; $10/day; no recent delivery | **Remain enabled; $2/day** | Change location option to **Presence**; keep Center, Shelby, Panola, Sabine, and San Augustine County targets; turn **Search partners off**; retain Google Search Network, English, existing manual assets, no AI Max, and no Final URL expansion. Replace only the non-delivering low-volume keyword set with the local-intent terms listed below. Keep its existing ad and Business Insurance landing page unchanged for now. |
| **Morrison_Search_Bundle_Center-TX** (Search) | Enabled; $10/day; one impression in seven days | **Pause; $0 active spend** | Its eight bundle/savings terms are either low-volume or non-local and its ad includes an unsupported savings claim. Pausing prevents a fourth fragmented campaign from drawing from the controlled account cap. Do not delete the campaign; it can be rebuilt later once Home and Commercial Search produce useful local query data. |

The proposed combined average budget is **$10/day**. That equates to approximately **$304 over a 30.4-day month** under Google’s average-budget convention. The Google Ads account’s current active promotional credit remains separate; **do not apply, redeem, or expand spending to chase the credit**. The $1,000 credit is already active and Google currently reports $927.49 as estimated unspent credit, subject to its billing calculations.

## Proposed local keyword structure

The proposed terms are intentionally modest. They rely on exact and phrase match only, while geographic scope is handled through approved local targets and the Presence setting. This avoids relying on ultra-narrow “Center TX” phrases that Google has already labeled low volume, without opening the account to nationwide broad-match traffic.

| Search campaign | Add and retain as exact match | Add and retain as phrase match | Remove / pause from active set |
| --- | --- | --- | --- |
| **Home** | `[home insurance]`; `[homeowners insurance]`; `[home insurance near me]`; `[independent home insurance agent]` | `"home insurance"`; `"homeowners insurance"`; `"independent home insurance agent"` | Current localized terms that Google marks **Low search volume**. |
| **Commercial** | `[business insurance]`; `[commercial insurance]`; `[small business insurance]`; `[business insurance near me]`; `[independent insurance agent]` | `"business insurance"`; `"commercial insurance"`; `"small business insurance"`; `"independent insurance agent"` | Current localized terms that Google marks **Low search volume** and the two statewide terms that are too generic for a local test. |

### Shared negative-keyword guardrail

Add the following **account-level phrase negative keywords** before the keyword expansion: `jobs`, `job`, `careers`, `career`, `employment`, `salary`, `license`, `licensing`, `course`, `classes`, `training`, `claims`, `claim status`, `policy login`, `make a payment`, `customer service`, `phone number`, and `contact number`.

These exclusions are aimed at recruitment, education, self-service, and claims-status queries rather than people seeking a local independent agent. Do **not** add insurer or competitor brand names as active keywords in this first test. This keeps the restart focused on local, non-comparative demand.

## Conversion and policy-control changes

| Area | Current condition | Proposed correction | Reason |
| --- | --- | --- | --- |
| **Page view — `/about`** | Website action is Primary and marked **Misconfigured** | Change to **Secondary** and remove it from each campaign’s primary bidding goals | An About-page load is not a lead and should not guide automated optimization. |
| **Phone call lead** | Active and produced four reported results in the reviewed week | Keep as **Primary**; make no call-duration change until the agency confirms the current qualified-call rule | It is the only currently proven conversion source. |
| **Submit lead form** | Primary; awaiting conversions | Leave installed, but do not treat it as a proven optimization signal until one legitimate inquiry is confirmed in HubSpot and Google Ads | The site uses a HubSpot embed, and the site code has no direct Google Ads form-submission event or thank-you redirect. |
| **“Serving East Texas – 1923” sitelink** | Disapproved for **Destination not working** though its `/about` destination now tests 200 for AdsBot and Googlebot | Submit the existing unchanged URL for policy re-review; do not alter the destination | The available evidence suggests a stale or transient crawl finding, not a live outage. |
| **PMax lead form asset** | Eligible (limited) for Financial Services Verification | Make no change in this first step | Its policy status warrants monitoring; it does not need a speculative edit. |

Google advises that location targeting is based on multiple signals and should be monitored, rather than regarded as perfectly precise.[3] For Performance Max lead campaigns, Google specifically identifies **Presence: people in or regularly in included locations** as the appropriate correction when leads arrive from outside the desired area.[1]

### Separate measurement repair — no action included in this approval

The verification identified an important but separate configuration issue: the current Google Ads “Submit Lead Form” tag fires only on a page URL containing `/thank-you`. The React form mount does not configure a redirect, and the connected HubSpot form’s saved post-submit redirect could not be confirmed in this audit. I recommend a **separate, no-spend measurement repair** after the campaign restoration: verify the HubSpot post-submit behavior, then either retain a confirmed `/thank-you` redirect or publish a GTM trigger tied to HubSpot’s documented `hs-form-event:on-submission:success` event for form ID `156de4fd-61c3-4bff-a7a7-779bfb6bb35b`.[4] That repair will be scoped and approval-gated separately, with an end-to-end verification based on a legitimate inquiry rather than a synthetic lead.

## What will not change in the proposed first step

The plan does **not** create or submit a test lead, raise total spend, activate AI Max, enable broad match, expand into Nacogdoches County, create new ads, alter call-conversion duration, redeem any credit, or make an import into Microsoft Advertising. The Home and Commercial responsive search ads will remain in place initially, even though the Commercial creative needs improvement, so early delivery data is not confounded by a simultaneous ad rewrite.

## Monitoring and decision point

The initial review window is **14 days after the approved changes are live**. I will review delivery, local location breakdowns, search-term insights where available, cost, calls, submitted-form signals, policy status, and disapprovals. The first decision point should be based on verified qualified inquiries, not clicks alone. If Search still does not enter auctions after the keyword rebuild, the next step would be a separate recommendation for a single combined local Search campaign rather than reopening the paused Bundle campaign.

## Approval required

Because this proposal changes campaign status, budgets, location options, networks, keywords, conversion optimization, and an asset-policy re-review, please reply with the following exact approval if you want me to implement it:

> **I approve the September 1 Google Ads restoration proposal exactly as written: keep Auto at $6/day, Home at $2/day, Commercial at $2/day, pause Bundle, apply the listed local targeting/network/keyword/conversion changes, and resubmit the unchanged About sitelink for review.**

If you want a different combined monthly comfort level, tell me the maximum average daily budget and I will revise the allocation before making any change.

## References

[1] [Google Ads Help — Performance Max best practices for lead generation](https://support.google.com/google-ads/answer/13775965?hl=en)  
[2] [Google Ads Help — About average daily budgets](https://support.google.com/google-ads/answer/6385083?hl=en)  
[3] [Google Ads Help — Location targeting](https://support.google.com/google-ads/answer/6317?hl=en)  
[4] [HubSpot Developer Docs — Global form events](https://developers.hubspot.com/docs/api-reference/latest/marketing/forms/global-form-events)
