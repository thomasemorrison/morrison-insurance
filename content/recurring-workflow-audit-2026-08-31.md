# Recurring Workflow Audit — August 31, 2026

## Confirmed scheduled work

The active `Morrison Insurance — Monday Weekly Content (Blog + Community Post)` scheduled Manus task is set for 9:00 AM Central on its configured weekly day. It last executed on August 11, 2026, despite still reporting an active status. Its instructions cover 28-day Search Console research, a weekly article, and a Monday community update.

The separate **Weekly GSC Report** is not part of the Morrison Insurance website project. The project’s GSC operations note identifies it as the `weekly-gsc-report` cron (task UID `2h7esp4rMKpQTQharCyHGm`) with a Monday 8:00 AM Central cadence and dashboard at `https://morrigsc-5q5rp2nl.manus.space`. That dashboard is a separate, sign-in-protected project. The current Morrison project cannot read its run history because the job belongs to that other project.

## Implication

There is confirmed duplication in the intended SEO workflow: the weekly content task includes a 28-day GSC pull, while the separate dashboard sends a weekly GSC report. The eventual consolidated process should keep the dashboard/report as the measurement source and make the content task consume that report rather than perform a duplicate independent pull.

## Workflow status as of August 31

| Workflow | Current state | Evidence | Operational conclusion |
| --- | --- | --- | --- |
| Weekly GSC report | **Active, separate project** | A recent report email was received; the GSC operations note identifies the Monday 8:00 AM Central `weekly-gsc-report` job. | Keep as the single SEO measurement source. Do not create another weekly GSC pull. |
| Weekly content and community handoff | **Marked active but stalled** | The scheduled task is active, but its last execution was Tuesday, August 11, 2026. | Repair or replace this job before relying on it for weekly publishing. |
| Weather alert / burn-ban monitoring | **Not scheduled** | A daily weather-monitor prompt and a weather/burn section inside local intelligence are saved, but no corresponding active job appears in the schedule inventory. | Reintroduce a dedicated daily safety scan if timely alerts remain a priority. |
| Toledo Bend fishing report | **Not scheduled** | The Thursday fishing-report workflow is documented, but no scheduled job exists. | Restart as a single weekly Thursday deliverable rather than duplicate it inside another workflow. |
| Five-school sports crawl | **Not scheduled** | Existing cards and one-time CSV material are present, but there is no recurring sports workflow or job. | Add a weekly sports research handoff covering Center, Joaquin, Tenaha, Timpson, and Shelbyville only. |
| Local events / current-events research | **Partially covered, not independent** | Community-event research is embedded in the local-intelligence and weekly content prompts, but there is no dedicated live job. | Fold it into the repaired weekly editorial handoff to avoid duplicate searches. |

## SEO snapshot from the supplied weekly report

For the latest 28-day period, the website recorded **1 click**, **347 impressions**, **0.3% average CTR**, and an **average position of 44.4**. The data is early but actionable: search impressions show that Google is testing several Morrison pages, while the low CTR and page-two positions show the site needs more focused updates and internal support.

| Priority | Query | Current signal | Recommended next action |
| --- | --- | --- | --- |
| 1 | difference between farm insurance and homeowners insurance | 118 impressions; 0.0% CTR | Refresh the existing farm-vs-homeowners article: rewrite the title and meta description around the exact question, improve the opening answer, add a short FAQ, and link to it from relevant farm and homeowners pages. Do **not** write a duplicate article. |
| 2 | file a claim with a texas adjuster | Position 14.6; 7 impressions | Update the existing claims guide with a clearer step-by-step opening and an FAQ matching the exact query; strengthen internal links from storm-damage and claims content. |
| 3 | how much car insurance coverage do i really need? | Position 16.0; 1 impression | Add this as the next new evergreen article or a substantial section within the Texas auto-requirements guide after the farm article refresh. |
| 4 | car insurance agents in center, tx | Position 18.0; 4 impressions | Improve the existing Center agent article with a more direct local title/meta description and links from the auto-insurance service page. |
| 5 | shelby business insurance | Position 19.4; 5 impressions | Update the business coverage page and business article to include a plain-language Shelby County small-business section and mutual internal links. |

## Recommended content operating model

The content calendar should be managed as one editorial system rather than a set of independent searches. Weekly blog decisions should start with the Monday GSC report; the editorial handoff should then choose one action: improve an existing page when the query already has a close match, or write a new article only when a genuine coverage gap exists. The same handoff should set the week’s community and school content, checking Metricool capacity before any post is scheduled.

The five-school sports series will cover **Center, Joaquin, Tenaha, Timpson, and Shelbyville**. Martinsville remains excluded from Shelby County posts and county-wide messaging.

## Consolidation options for approval

| Approach | What runs automatically | Tradeoffs | Relative operating cost | Setup complexity |
| --- | --- | --- | --- | --- |
| **A. Focused weekly rhythm plus safety monitor** | A daily 6:30 AM weather/burn scan that stays silent unless conditions justify a post; a Monday GSC report; a Monday editorial handoff consuming that report and researching local events; a Tuesday school-sports crawl; and a Thursday fishing report. | Separates time-sensitive safety updates from predictable weekly content. Gives each community series a dependable slot without duplicate research. | Moderate: one daily safety scan plus three weekly research/editorial runs. | Moderate: repair the stalled weekly handoff and create three clearly scoped jobs. |
| **B. Lean weekly editorial desk** | Keep the Monday GSC report and one repaired Monday editorial handoff covering SEO, local events, weather/burn status, schools, and the weekly post calendar; run fishing only in-season or on request. | Lowest maintenance and fewer runs, but safety alerts are not monitored every morning and school/fishing research has less depth. | Low: two weekly runs in most weeks. | Low: repair one job and revise its instructions. |

Neither option should create a second weekly GSC query. The existing `weekly-gsc-report` should remain the data source; the editorial workflow should consume its report and turn it into content decisions.

## Implemented model — September 1, 2026

The Morrison team approved the focused weekly rhythm. To minimize duplicate work, the existing stalled weekly content task was converted into one active **weekday Content Desk** rather than creating separate overlapping tasks. It runs at **6:30 AM Central, Monday through Friday** and preserves the existing task UID (`NrUhJhWwfMw5AAmP7EyhUH`).

| Day | Required outcome | Guardrail |
| --- | --- | --- |
| Every weekday | Scan only for material weather, burn-ban, wildfire, flood, evacuation, or comparable public-safety alerts. | No routine weather posts; never recommend or schedule a fourth cross-network post. |
| Monday | Use the separate weekly GSC report to prepare a research-backed SEO and local-events editorial handoff. | Improve existing pages before proposing duplicate articles. |
| Tuesday | Prepare the current five-school sports update. | Center, Joaquin, Tenaha, Timpson, and Shelbyville only; rotate card order and cover the sport with the strongest local relevance. |
| Thursday | Prepare the Toledo Bend fishing report. | Use current sourceable conditions and no performance guarantees. |

All outputs remain review-first: the task prepares materials but does not publish articles or schedule social posts without the Morrison team’s explicit approval.
