# Morrison’s Analytics report — November 13, 2026

This report shows fewer measured visitors and short measured engagement. It does **not** establish that Google Search, the website or the new articles are broken. The useful next question is whether the decline comes from fewer relevant visitors, a change in the traffic mix or incomplete measurement—not whether to rebuild the site.

## What the numbers tell us

For October 16–November 12, the supplied report shows 170 active users, down 17.48%, and 168 new users, down 18.05%. The active-user change implies roughly 206 in its comparison period. That comparison date range is not visible, and the implied count is approximate because the displayed figures may be rounded. These are Analytics user counts, not Search Console organic clicks or Business Profile reach.

Average engagement time increased 27.1% to nine seconds, from an implied roughly seven seconds. The improvement is encouraging, but nine seconds is still short for sustained reading of an educational guide. Google measures engagement while a webpage is in focus; this is not the same as total elapsed visit duration. A visitor finding the office phone number quickly may still have a useful visit, so the time alone cannot tell us whether the site helped them.[1]

The 715 events, down 10.51%, are **not 715 leads**. Ordinary visits can generate page views, first-visit, session-start and engagement events. We need the event names and actual contact outcomes before interpreting that total as business results.[1]

## What the page rows mean

The homepage dominates the listed page activity: 183 views, 147 active users and a 76.28% bounce rate. That makes it the first place to examine how visitors arrive and what they do next. It does not establish that the homepage design caused the traffic decline.

In GA4, a bounce is a session that does not qualify as engaged. Google’s standard criteria are a session longer than ten seconds, a key event, or at least two page or screen views. A single-page visit can therefore be engaged, and bounce rate is not simply the percentage who leave without visiting another page.[2]

The switching guide has only six views, and the company-comparison guide only three. Their reported 100% bounce rates warrant watching, not a verdict that the articles failed. Those samples are very small. Views are not sessions, so the screenshot does not let us calculate exact bounced-session counts. The November 2 articles and November 9 quote-page refresh were present for only part of this reporting period; this is not a clean before-and-after assessment of the recent work.

One row deserves a reporting check: the business page shows two views but four active users. Before using that row to judge performance, confirm the report’s filters, metric scopes and underlying export. It is a reason to verify the report, not proof that the site’s tracking is broken.

## The next useful check

Compare the same two date ranges in GA4’s Traffic acquisition and Landing page reports. Separate organic search from paid traffic, social and direct visits. Then look at relevant visitor locations and contact actions. This can distinguish a decline in useful local traffic from a change in low-intent traffic.

Verify what is being measured as a successful inquiry. A phone-link click indicates intent, not a completed call; a form view or button click is not a successful submission. The October 26 audit identified a possible gap between the embedded HubSpot form and the Google Ads thank-you-page conversion trigger. That finding was a risk, not a confirmed failed conversion, and the HubSpot post-submit setting still needs verification. It cannot be used to explain this Analytics decline without further evidence.

For the new guides, compare equivalent periods after publication and review engaged visits and contact actions alongside Search Console clicks. Do not attribute success or failure to the current small page samples, or increase advertising spend just to make the user count larger.

No website, tracking, paid-media, social or recurring setting was changed for this readout. The screenshots were interpreted as displayed in the conversation and were not reopened. The supplied values and approximate comparison calculations are retained in [the data snapshot](/home/ubuntu/morrison-insurance/content/ga-report-data-2026-11-13.json).

## References

The figures come from the two user-supplied Analytics email screenshots received November 13. The report’s comparison dates, channel breakdown and lead counts were not supplied. The historical conversion finding is recorded in `content/google-ads-restoration-audit-2026-09-01.md`, October 26 section.

[1]: https://support.google.com/analytics/answer/11109416?hl=en "Google Analytics: User engagement and collected events"
[2]: https://support.google.com/analytics/answer/12195621?hl=en "Google Analytics: Engagement rate and bounce rate"
