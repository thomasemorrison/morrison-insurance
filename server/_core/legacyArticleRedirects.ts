/**
 * Permanent redirects for retired resource slugs that were previously crawled
 * or shared. Preserve query strings so external tracking parameters survive.
 */
export const LEGACY_ARTICLE_REDIRECTS: Record<string, string> = {
  "/resources/accident-uninsured-driver-texas": "/resources/uninsured-driver-accident-texas",
};

export function getLegacyArticleRedirect(requestUrl: string): string | undefined {
  const [pathname, queryString] = requestUrl.split("?", 2);
  const destination = LEGACY_ARTICLE_REDIRECTS[pathname];

  if (!destination) return undefined;
  return queryString ? `${destination}?${queryString}` : destination;
}
