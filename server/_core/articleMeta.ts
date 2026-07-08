/**
 * Server-side Open Graph / social meta tag injection for article pages.
 *
 * Social crawlers (Facebook, LinkedIn, Metricool, etc.) do NOT execute
 * JavaScript, so og:image and og:title set via React useEffect are invisible
 * to them.  This module intercepts the HTML response for every /resources/
 * article route and rewrites the <head> with the correct per-article meta
 * before the bytes leave the server.
 */

export interface ArticleMeta {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BASE_URL = "https://morrison-ins.net";

/** Canonical article meta — one entry per article route. */
export const ARTICLE_META: Record<string, ArticleMeta> = {
  "/resources/what-does-homeowners-insurance-cover-texas": {
    title: "What Does Homeowners Insurance Actually Cover in Texas? | Morrison Insurance",
    description:
      "A plain-language breakdown of Texas homeowners insurance coverage — what's included, what's excluded, and what East Texas homeowners should watch for. Serving Center, TX since 1923.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=70",
    slug: "what-does-homeowners-insurance-cover-texas",
  },
  "/resources/texas-auto-insurance-requirements": {
    title: "Texas Auto Insurance Requirements: What You Need to Know | Morrison Insurance",
    description:
      "Texas requires minimum liability insurance for all drivers, but those minimums may not be enough. Here's what the law requires and what we recommend for drivers in Shelby County and East Texas.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=70",
    slug: "texas-auto-insurance-requirements",
  },
  "/resources/farm-insurance-vs-homeowners-insurance": {
    title: "Farm Insurance vs. Homeowners Insurance: What's the Difference? | Morrison Insurance",
    description:
      "If you own land, livestock, or equipment in East Texas, a standard homeowners policy probably isn't enough. Here's what farm insurance covers that homeowners insurance doesn't.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=70",
    slug: "farm-insurance-vs-homeowners-insurance",
  },
  "/resources/does-homeowners-insurance-cover-flood-damage-texas": {
    title: "Does Homeowners Insurance Cover Flood Damage in Texas? | Morrison Insurance",
    description:
      "Most Texas homeowners don't realize their standard policy excludes flood damage. Here's what you need to know about flood insurance in East Texas.",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&q=70",
    slug: "does-homeowners-insurance-cover-flood-damage-texas",
  },
  "/resources/uninsured-driver-accident-texas": {
    title: "What Happens If You're in an Accident with an Uninsured Driver in Texas? | Morrison Insurance",
    description:
      "Texas has one of the highest rates of uninsured drivers in the country. Here's what happens after an accident with an uninsured driver and how to protect yourself.",
    image: "https://images.unsplash.com/photo-1627398924667-7f4ab354ab49?w=1200&q=70",
    slug: "uninsured-driver-accident-texas",
  },
  "/resources/small-business-insurance-coverage-gaps": {
    title: "Does Your Small Business Have the Right Insurance Coverage? | Morrison Insurance",
    description:
      "Many small businesses in East Texas are underinsured or have the wrong type of coverage. Here are the most common coverage gaps and how to fix them.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=70",
    slug: "small-business-insurance-coverage-gaps",
  },
  "/resources/independent-vs-captive-insurance-agents": {
    title: "Independent vs. Captive Insurance Agents: What's the Difference? | Morrison Insurance",
    description:
      "An independent insurance agent works for you, not for a single insurance company. Here's why that matters for East Texas families and businesses shopping for coverage.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=70",
    slug: "independent-vs-captive-insurance-agents",
  },
  "/resources/how-to-file-insurance-claim-texas": {
    title: "How to File an Insurance Claim in Texas: A Step-by-Step Guide | Morrison Insurance",
    description:
      "Filing an insurance claim doesn't have to be stressful. Here's a clear, step-by-step guide to filing a home, auto, or business insurance claim in Texas.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=70",
    slug: "how-to-file-insurance-claim-texas",
  },
  "/resources/why-is-homeowners-insurance-going-up-texas": {
    title: "Why Is My Texas Homeowners Insurance Going Up? | Morrison Insurance",
    description:
      "Texas homeowners insurance premiums have risen sharply in recent years. Here's a plain-language explanation of why rates are increasing, what's driving the trend, and what East Texas homeowners can do about it.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=70",
    slug: "why-is-homeowners-insurance-going-up-texas",
  },
  "/resources/boat-insurance-toledo-bend-texas": {
    title: "Boat Insurance Basics: Protecting Your Summer on Toledo Bend | Morrison Insurance",
    description:
      "Texas law doesn't require boat insurance, but hitting the water without it is a major financial risk. Here's a plain-language guide to watercraft insurance for East Texas boaters on Toledo Bend and beyond.",
    image: "https://images.unsplash.com/photo-1551942296-97384c850440?w=1200&q=70",
    slug: "boat-insurance-toledo-bend-texas",
  },
  "/resources/renters-insurance-texas-myths": {
    title: "Renters Insurance in Texas: 3 Myths That Could Cost You | Morrison Insurance",
    description:
      "If you rent in East Texas, your landlord's insurance does not cover your belongings. Here are 3 common myths about renters insurance in Texas — and the reality of what it actually covers.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=70",
    slug: "renters-insurance-texas-myths",
  },
  "/resources/umbrella-insurance-east-texas": {
    title: "Umbrella Insurance: Why East Texas Families and Landowners Need It | Morrison Insurance",
    description:
      "An umbrella policy provides an extra layer of liability protection that kicks in when your home or auto insurance runs out. Here's why East Texas families, farmers, and landowners should consider one.",
    image: "https://images.unsplash.com/photo-1644676654534-abc4f62ceee1?w=1200&q=70",
    slug: "umbrella-insurance-east-texas",
  },
  "/resources/mobile-home-insurance-texas": {
    title: "Mobile Home Insurance in Texas: What You Need to Know | Morrison Insurance",
    description:
      "A standard homeowners policy won't cover a manufactured home. Here's a plain-language guide to HO-7 mobile home insurance in Texas — what it covers, what it doesn't, and why it matters for East Texans.",
    image: "https://images.unsplash.com/photo-1630437683041-d1b3e19a7c5c?w=1200&q=70",
    slug: "mobile-home-insurance-texas",
  },
};

/**
 * Given an HTML string and an article's meta, replace the generic og: tags
 * in <head> with article-specific values.
 *
 * Strategy: replace existing og: meta content attributes in-place so the
 * surrounding HTML structure is preserved.  If a tag doesn't exist yet,
 * insert it just before </head>.
 */
export function injectArticleMeta(html: string, meta: ArticleMeta): string {
  const canonicalUrl = `${BASE_URL}/resources/${meta.slug}`;

  // Helper: replace or insert a <meta property="…" content="…"> tag
  const setMetaProperty = (property: string, content: string, h: string): string => {
    const escapedContent = content.replace(/"/g, "&quot;");
    const tagRegex = new RegExp(
      `<meta\\s+property=["']${property}["'][^>]*>|<meta\\s+[^>]*property=["']${property}["'][^>]*>`,
      "i"
    );
    const newTag = `<meta property="${property}" content="${escapedContent}" />`;
    if (tagRegex.test(h)) {
      return h.replace(tagRegex, newTag);
    }
    // Insert before </head>
    return h.replace("</head>", `  ${newTag}\n  </head>`);
  };

  // Helper: replace or insert a <meta name="…" content="…"> tag
  const setMetaName = (name: string, content: string, h: string): string => {
    const escapedContent = content.replace(/"/g, "&quot;");
    const tagRegex = new RegExp(
      `<meta\\s+name=["']${name}["'][^>]*>|<meta\\s+[^>]*name=["']${name}["'][^>]*>`,
      "i"
    );
    const newTag = `<meta name="${name}" content="${escapedContent}" />`;
    if (tagRegex.test(h)) {
      return h.replace(tagRegex, newTag);
    }
    return h.replace("</head>", `  ${newTag}\n  </head>`);
  };

  // Helper: replace <title> tag
  const setTitle = (title: string, h: string): string => {
    const escapedTitle = title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return h.replace(/<title>[^<]*<\/title>/i, `<title>${escapedTitle}</title>`);
  };

  // Helper: replace or insert <link rel="canonical">
  const setCanonical = (url: string, h: string): string => {
    const tagRegex = /<link\s+rel=["']canonical["'][^>]*>/i;
    const newTag = `<link rel="canonical" href="${url}" />`;
    if (tagRegex.test(h)) {
      return h.replace(tagRegex, newTag);
    }
    return h.replace("</head>", `  ${newTag}\n  </head>`);
  };

  let result = html;
  result = setTitle(meta.title, result);
  result = setMetaName("description", meta.description, result);
  result = setMetaProperty("og:type", "article", result);
  result = setMetaProperty("og:url", canonicalUrl, result);
  result = setMetaProperty("og:title", meta.title, result);
  result = setMetaProperty("og:description", meta.description, result);
  result = setMetaProperty("og:image", meta.image, result);
  // Twitter Card tags for completeness
  result = setMetaName("twitter:card", "summary_large_image", result);
  result = setMetaName("twitter:title", meta.title, result);
  result = setMetaName("twitter:description", meta.description, result);
  result = setMetaName("twitter:image", meta.image, result);
  result = setCanonical(canonicalUrl, result);

  return result;
}
