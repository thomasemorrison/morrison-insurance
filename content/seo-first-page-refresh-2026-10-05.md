# First-Page SEO Refresh — October 5, 2026

## Purpose

Use the current 28-day Search Console snapshot to improve two existing, close-to-page-one paths without creating duplicate pages:

1. **“file a claim with a texas adjuster”** — average position **11.4**, 7 impressions.
2. **“car insurance center”** — average position **11.5**, 2 impressions.

The same report also shows **“comparing car insurance rates”** at 12 impressions and 0% CTR. It is worth watching, but the report does not identify the page earning those impressions. It should be mapped to a specific page before changing another page in the auto cluster.

> These steps improve relevance, crawlability, clarity, and local usefulness. They cannot promise a particular ranking, click volume, price, or lead result.

## What Was Corrected

### 1. Local car-insurance service page: crawlable metadata defect

A raw-HTML review found that `https://morrison-ins.net/auto-insurance` was returning the homepage’s title, description, canonical URL, and Open Graph URL to non-JavaScript crawlers. The visible page had auto-insurance content, but the server response told crawlers the page was the homepage.

**Fix applied**

- Added route-specific, server-rendered metadata for `/auto-insurance`.
- Corrected the canonical URL to `https://morrison-ins.net/auto-insurance`.
- Set the crawler-visible title to **“Car Insurance in Center, TX | Morrison Insurance.”**
- Added a local, plain-language description focused on Center and Shelby County.
- Corrected the service schema URL from the obsolete `morrisoninsurance.com` domain to `morrison-ins.net`.
- Made the service-page headline and local comparison guidance match the local search intent without promising a rate or outcome.

**Intent boundary**

- `/auto-insurance` is now the main **local service and comparison** page for “car insurance Center.”
- `/resources/auto-insurance-center-tx` is now the supporting **Texas requirements and education** guide.

This makes the roles clearer for readers and reduces the chance that two similar pages compete for the same local-intent query.

### 2. Texas adjuster claim guide: practical update and source support

The existing claim guide already matched the query, so it was refreshed rather than replaced.

**Changes applied**

- Tightened the title and description around the exact question: **“How to File a Claim with a Texas Adjuster: 5 Steps.”**
- Added a visible, practical “Before You Call” checklist so the answer begins with the immediate need.
- Clarified the general Texas claim-timeline explanation, including exceptions and extensions.
- Added visible links to the Texas Department of Insurance claim and complaint guidance.
- Added an accountable review date and updated Article/Breadcrumb structured data.
- Removed outcome-style language that could imply the agency controls a claim decision or payment.

**Primary official sources**

- [Texas Department of Insurance — Steps to getting your home or car insurance claim paid](https://www.tdi.texas.gov/tips/getting-your-insurance-claim-paid.html)
- [Texas Department of Insurance — Get help with an insurance complaint](https://www.tdi.texas.gov/consumer/get-help-with-an-insurance-complaint.html)
- [Texas Department of Insurance — Auto insurance consumer guidance](https://www.tdi.texas.gov/consumer/auto-insurance.html)

### 3. Supporting signals

- Updated the affected Resources card, internal-link title, RSS titles/descriptions, and sitemap `<lastmod>` values.
- Updated raw Open Graph, title, description, and canonical tests.
- Kept the existing URLs. No duplicate article, redirect, or paid-search change was created.

## Quality Checks Completed

| Check | Result |
|---|---|
| TypeScript check | Passed |
| Automated tests | Passed — 24 tests |
| Production build | Passed |
| Sitemap XML parsing | Passed |
| Raw metadata: `/auto-insurance` | Passed — page-specific title, description, canonical, and Open Graph URL |
| Raw metadata: claims article | Passed |
| Raw metadata: Texas auto requirements article | Passed |
| Browser review | Passed — both refreshed pages rendered correctly at desktop size |

## Measurement Plan

### Immediately after deployment

1. Confirm the live production HTML for all three refreshed URLs shows the same page-specific title, description, canonical URL, and Open Graph URL tested locally.
2. Submit the sitemap through the normal Search Console process or request inspection for:
   - `https://morrison-ins.net/auto-insurance`
   - `https://morrison-ins.net/resources/how-to-file-claim-texas-adjuster`
   - `https://morrison-ins.net/resources/auto-insurance-center-tx`
3. Do not add more near-duplicate local car-insurance articles while Google processes this clearer page hierarchy.

### At 28 days

Compare the next weekly report with the October 5 baseline for:

| Query or page | Baseline to retain | What would show progress |
|---|---:|---|
| `file a claim with a texas adjuster` | Position 11.4; 7 impressions | More impressions, a move into positions 1–10, or the first click |
| `car insurance center` | Position 11.5; 2 impressions | More local impressions and a move into positions 1–10 |
| `comparing car insurance rates` | 12 impressions; 0% CTR | Identify the page served, then improve that exact page’s title/snippet or answer block |
| `/auto-insurance` | Correct crawler metadata now in place | Search Console starts attributing local impressions to the intended service page |
| `/resources/how-to-file-claim-texas-adjuster` | Refreshed October 5 | Improved position, CTR, or clicks for the exact adjuster query |

### Next priority only after that review

If the report attributes “comparing car insurance rates” to the existing comparison guide, refresh that guide with a clear first-screen comparison checklist and a descriptive title/snippet. If Search Console attributes it elsewhere, improve the page already earning the impression rather than opening another overlapping article.

## Expected Cadence

Search rankings usually need several weeks to react to a content refresh, and low-impression queries can move noisily from week to week. The useful decision point is the next complete 28-day comparison—not daily checks.
