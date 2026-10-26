
## Conversion-path code recheck — October 26, 2026

A read-only source review confirms the measurement risk identified in the September audit remains unresolved in the current website workspace. `client/src/components/QuoteForm.tsx` mounts the HubSpot embedded form (portal `246212557`, form `156de4fd-61c3-4bff-a7a7-779bfb6bb35b`) by creating a `hs-form-frame`; it includes no HubSpot successful-submission callback, Google Ads event call, `dataLayer` push, or client-side redirect to `/thank-you`. `client/src/pages/ThankYou.tsx` fires only a Meta `Lead` event when that page is loaded.

The existing GTM Google Ads “Submit Lead Form” tag is configured for a page-view trigger whose URL contains `/thank-you`. Therefore a legitimate HubSpot submission can be counted only if the HubSpot form’s saved post-submit behavior independently directs the visitor to `/thank-you`; that setting cannot be verified from the site code. The code review confirms a tracking risk but does not establish a failed conversion.

No test form was submitted, no GTM or Google Ads tag was changed, and no campaign setting, budget, targeting, or credit was changed. The task remains open pending (1) a read-only check of the HubSpot form’s post-submit behavior and (2) an agency-approved measurement repair if the redirect is absent. A durable repair must either retain a confirmed redirect or use HubSpot’s documented successful-submission event for this exact form, followed by verification with a genuine inquiry rather than a synthetic lead.
