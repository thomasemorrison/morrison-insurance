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
    image: "/manus-storage/homeowners-cover-portrait_e57ab9b9.jpg",
    slug: "what-does-homeowners-insurance-cover-texas",
  },
  "/resources/texas-auto-insurance-requirements": {
    title: "Texas Auto Insurance Requirements: What You Need to Know | Morrison Insurance",
    description:
      "Texas requires minimum liability insurance for all drivers, but those minimums may not be enough. Here's what the law requires and what we recommend for drivers in Shelby County and East Texas.",
    image: "/manus-storage/auto-requirements-portrait_33abb8ba.jpg",
    slug: "texas-auto-insurance-requirements",
  },
  "/resources/farm-insurance-vs-homeowners-insurance": {
    title: "Farm Insurance vs. Homeowners Insurance: What's the Difference? | Morrison Insurance",
    description:
      "If you own land, livestock, or equipment in East Texas, a standard homeowners policy probably isn't enough. Here's what farm insurance covers that homeowners insurance doesn't.",
    image: "/manus-storage/farm-vs-homeowners-portrait_6ad73dae.jpg",
    slug: "farm-insurance-vs-homeowners-insurance",
  },
  "/resources/does-homeowners-insurance-cover-flood-damage-texas": {
    title: "Does Homeowners Insurance Cover Flood Damage in Texas? | Morrison Insurance",
    description:
      "Most Texas homeowners don't realize their standard policy excludes flood damage. Here's what you need to know about flood insurance in East Texas.",
    image: "/manus-storage/flood-damage-portrait_3b5723cb.jpg",
    slug: "does-homeowners-insurance-cover-flood-damage-texas",
  },
  "/resources/uninsured-driver-accident-texas": {
    title: "What Happens If You're in an Accident with an Uninsured Driver in Texas? | Morrison Insurance",
    description:
      "Texas has one of the highest rates of uninsured drivers in the country. Here's what happens after an accident with an uninsured driver and how to protect yourself.",
    image: "/manus-storage/uninsured-driver-portrait-new_b3983c5f.jpg",
    slug: "uninsured-driver-accident-texas",
  },
  "/resources/small-business-insurance-coverage-gaps": {
    title: "Does Your Small Business Have the Right Insurance Coverage? | Morrison Insurance",
    description:
      "Many small businesses in East Texas are underinsured or have the wrong type of coverage. Here are the most common coverage gaps and how to fix them.",
    image: "/manus-storage/small-business-portrait_ae44be43.jpg",
    slug: "small-business-insurance-coverage-gaps",
  },
  "/resources/independent-vs-captive-insurance-agents": {
    title: "Independent vs. Captive Insurance Agents: What's the Difference? | Morrison Insurance",
    description:
      "An independent insurance agent works for you, not for a single insurance company. Here's why that matters for East Texas families and businesses shopping for coverage.",
    image: "/manus-storage/independent-vs-captive-portrait_a5315342.jpg",
    slug: "independent-vs-captive-insurance-agents",
  },
  "/resources/how-to-file-insurance-claim-texas": {
    title: "How to File an Insurance Claim in Texas: A Step-by-Step Guide | Morrison Insurance",
    description:
      "Filing an insurance claim doesn't have to be stressful. Here's a clear, step-by-step guide to filing a home, auto, or business insurance claim in Texas.",
    image: "/manus-storage/how-to-file-claim-portrait_3abb3307.jpg",
    slug: "how-to-file-insurance-claim-texas",
  },
  "/resources/why-is-homeowners-insurance-going-up-texas": {
    title: "Why Is My Texas Homeowners Insurance Going Up? | Morrison Insurance",
    description:
      "Texas homeowners insurance premiums have risen sharply in recent years. Here's a plain-language explanation of why rates are increasing, what's driving the trend, and what East Texas homeowners can do about it.",
    image: "/manus-storage/rates-going-up-portrait_49cf40f8.jpg",
    slug: "why-is-homeowners-insurance-going-up-texas",
  },
  "/resources/boat-insurance-toledo-bend-texas": {
    title: "Boat Insurance Basics: Protecting Your Summer on Toledo Bend | Morrison Insurance",
    description:
      "Texas law doesn't require boat insurance, but hitting the water without it is a major financial risk. Here's a plain-language guide to watercraft insurance for East Texas boaters on Toledo Bend and beyond.",
    image: "/manus-storage/boat-toledo-bend-portrait_1c105e8b.jpg",
    slug: "boat-insurance-toledo-bend-texas",
  },
  "/resources/renters-insurance-texas-myths": {
    title: "Renters Insurance in Texas: 3 Myths That Could Cost You | Morrison Insurance",
    description:
      "If you rent in East Texas, your landlord's insurance does not cover your belongings. Here are 3 common myths about renters insurance in Texas — and the reality of what it actually covers.",
    image: "/manus-storage/renters-myths-portrait_a6c2541a.jpg",
    slug: "renters-insurance-texas-myths",
  },
  "/resources/umbrella-insurance-east-texas": {
    title: "Umbrella Insurance: Why East Texas Families and Landowners Need It | Morrison Insurance",
    description:
      "An umbrella policy provides an extra layer of liability protection that kicks in when your home or auto insurance runs out. Here's why East Texas families, farmers, and landowners should consider one.",
    image: "/manus-storage/umbrella-east-texas-portrait_a2bdc0ca.jpg",
    slug: "umbrella-insurance-east-texas",
  },
  "/resources/mobile-home-insurance-texas": {
    title: "Mobile Home Insurance in Texas: What You Need to Know | Morrison Insurance",
    description:
      "A standard homeowners policy won't cover a manufactured home. Here's a plain-language guide to HO-7 mobile home insurance in Texas — what it covers, what it doesn't, and why it matters for East Texans.",
    image: "/manus-storage/mobile-home-portrait_50dddf6e.jpg",
    slug: "mobile-home-insurance-texas",
  },
  "/resources/hunting-lease-liability-insurance-east-texas": {
    title: "Hunting Lease Liability Insurance in East Texas: What Landowners Need to Know | Morrison Insurance",
    description:
      "If you lease your land for hunting in East Texas, you could be personally liable for injuries on your property. Here's what Shelby County landowners need to know about hunting lease insurance.",
    image: "/manus-storage/hunting-lease-portrait_bd3812a3.jpg",
    slug: "hunting-lease-liability-insurance-east-texas",
  },
  "/resources/auto-insurance-center-tx": {
    title: "Auto Insurance in Center, TX — What Shelby County Drivers Need to Know | Morrison Insurance",
    description:
      "Auto insurance in Center, TX from a local independent agency serving Shelby County since 1923. Morrison Insurance compares multiple carriers to find the right coverage at the right price.",
    image: "/manus-storage/auto-insurance-center-tx-portrait_a89331da.jpg",
    slug: "auto-insurance-center-tx",
  },
  "/resources/car-insurance-quotes-center-tx": {
    title: "How to Get Car Insurance Quotes in Center, TX | Morrison Insurance",
    description:
      "Looking for car insurance quotes in Center, TX? Morrison Insurance has served Shelby County since 1923. Get a free, no-pressure quote from a local independent agent who knows East Texas.",
    image: "/manus-storage/car-insurance-quotes-center-tx-portrait_afcb939e.jpg",
    slug: "car-insurance-quotes-center-tx",
  },
  "/resources/car-insurance-agents-center-tx": {
    title: "Car Insurance Agents in Center, TX — Why Local Still Matters | Morrison Insurance",
    description:
      "Looking for car insurance agents in Center, TX? Morrison Insurance has served Shelby County since 1923. Local, independent, and here when you need us — not just when you're buying a policy.",
    image: "/manus-storage/car-insurance-agents-center-tx-portrait_0ba704aa.jpg",
    slug: "car-insurance-agents-center-tx",
  },
  "/resources/is-allstate-captive-agency-independent-agent-difference": {
    title: "Is Allstate a Captive Agency? What East Texas Drivers Should Know | Morrison Insurance",
    description:
      "Is Allstate a captive agency? Yes — and it matters when you're shopping for insurance in East Texas. Learn the difference between captive and independent agents, and why it affects your options.",
    image: "/manus-storage/allstate-captive-agency-portrait_c37faf3a.jpg",
    slug: "is-allstate-captive-agency-independent-agent-difference",
  },
  "/resources/how-to-file-claim-texas-adjuster": {
    title: "How to File a Claim with a Texas Adjuster — A Plain-Language Guide | Morrison Insurance",
    description:
      "Not sure how to file a claim with a Texas adjuster? Morrison Insurance walks you through the process step by step — from the first call to final settlement. Local guidance from Center, TX.",
    image: "/manus-storage/file-claim-texas-adjuster-portrait_aae7ba5c.jpg",
    slug: "how-to-file-claim-texas-adjuster",
  },
};

/**
 * Given an HTML string and an article's meta, replace the generic og: tags
 * in <head> with article-specific values.
 *
 * Strategy: replace existing og: meta content attributes in-place so the
 * surrounding HTML structure is preserved.  If a tag doesn't exist yet,
 * insert it just before </head>.
 *
 * For og:image, the stored value is a relative path (/manus-storage/…).
 * Social crawlers need an absolute URL, so we resolve it against BASE_URL.
 */
export function injectArticleMeta(html: string, meta: ArticleMeta): string {
  const canonicalUrl = `${BASE_URL}/resources/${meta.slug}`;
  // Resolve relative image paths to absolute URLs for og:image
  const absoluteImage = meta.image.startsWith("http")
    ? meta.image
    : `${BASE_URL}${meta.image}`;

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
  result = setMetaProperty("og:image", absoluteImage, result);
  // Twitter Card tags for completeness
  result = setMetaName("twitter:card", "summary_large_image", result);
  result = setMetaName("twitter:title", meta.title, result);
  result = setMetaName("twitter:description", meta.description, result);
  result = setMetaName("twitter:image", absoluteImage, result);
  result = setCanonical(canonicalUrl, result);

  return result;
}
