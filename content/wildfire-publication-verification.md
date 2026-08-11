# Wildfire Article Publication Verification

Verified August 11, 2026.

- GitHub commit `032826a` is synchronized locally and includes the wildfire article component, route, Resources card, Open Graph metadata, RSS item, and sitemap URL.
- The development preview renders the complete article at `/resources/wildfire-insurance-east-texas`, including its hosted forest hero image, checklist content, related articles, and page title.
- The restarted local development server returns article-specific `og:title`, `og:description`, `og:url`, and the hosted 4:5 `og:image` for the wildfire URL.
- The public production URL currently returns a 404 because the latest GitHub changes have not yet been published through the Management UI.
- The wildfire hero image was moved from Unsplash to the 4:5 Instagram-compatible path `/manus-storage/wildfire-east-texas-forest-portrait_11257999.jpg` and applied to the article component, Resources card, Open Graph metadata, and RSS image fields.
- The article metadata test expectation was updated from 24 to 25 entries. The complete test suite now passes (17 tests), as does the production build.
