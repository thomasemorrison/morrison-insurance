# Wildfire Article Publication Verification

Verified August 11, 2026.

- GitHub commit `032826a` is synchronized locally and includes the wildfire article component, route, Resources card, Open Graph metadata, RSS item, and sitemap URL.
- The development preview renders the complete article at `/resources/wildfire-insurance-east-texas`, including its hosted forest hero image, checklist content, related articles, and page title.
- The restarted local development server returns article-specific `og:title`, `og:description`, `og:url`, and the hosted 4:5 `og:image` for the wildfire URL.
- The public production URL currently returns a 404 because the latest GitHub changes have not yet been published through the Management UI.
- The wildfire hero image was moved from Unsplash to the 4:5 Instagram-compatible path `/manus-storage/wildfire-east-texas-forest-portrait_11257999.jpg` and applied to the article component, Resources card, Open Graph metadata, and RSS image fields.
- The article metadata test expectation was updated from 24 to 25 entries. The complete test suite now passes (17 tests), as does the production build.

## Post-publication verification

The public URL was verified live after publication. It no longer returns a 404, renders the article content, and returns the expected canonical `og:url`, wildfire-specific `og:title` and `og:description`, plus the hosted 4:5 `og:image`. The public image URL responds with a redirect to the storage CDN as expected.

Google's legacy sitemap-ping endpoint returned its documented deprecation response. The browser then reached the Google Search Console sign-in screen, so a logged-in Search Console session is required to submit the remaining manual URL Inspection request.

The owner signed in to the verified `https://morrison-ins.net/` Search Console property. URL Inspection reports that the published wildfire article is currently not indexed because the URL is unknown to Google; the page presents an available **Request indexing** action.

The **Request indexing** action was submitted. Search Console began its live indexability test for the published URL; the request status will be recorded once that test completes.

Search Console completed the live check and confirmed **Indexing requested**. The article URL was added to Google's priority crawl queue. The page remains unindexed until Google processes that crawl request.
