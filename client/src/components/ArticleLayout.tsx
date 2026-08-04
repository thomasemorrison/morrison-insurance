import { useEffect } from "react";
import { Link } from "wouter";
import { Clock } from "lucide-react";
import { StickyCtaBar, RelatedArticles, ArticleCta } from "./ArticleComponents";
import { useScrollReveal } from "../hooks/useScrollReveal";

// ============================================================
// ArticleLayout — reusable wrapper for all blog post pages
// Matches existing morrison-ins.net article design exactly
// ============================================================

export interface ArticleSection {
  heading?: string;
  body: string | React.ReactNode;
  subSections?: Array<{ heading: string; body: string | React.ReactNode }>;
}

export interface RelatedArticle {
  category: string;
  title: string;
  href: string;
  image: string;
}

interface ArticleLayoutProps {
  // SEO
  pageTitle: string;
  metaDescription: string;
  canonicalSlug: string;
  // Hero
  category: string;
  title: string;
  readTime: string;
  excerpt: string;
  heroImage?: string;
  // Content
  children: React.ReactNode;
  // Related
  relatedArticles: RelatedArticle[];
}

export function ArticleLayout({
  pageTitle,
  metaDescription,
  canonicalSlug,
  category,
  title,
  readTime,
  excerpt,
  heroImage,
  children,
  relatedArticles,
}: ArticleLayoutProps) {
  const ref = useScrollReveal();

  // Update document title and meta on mount
  useEffect(() => {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", metaDescription);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://morrison-ins.net/resources/${canonicalSlug}`);
    // OG tags for social sharing / Metricool
    const setMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", val);
    };
    setMeta("og:title", pageTitle);
    setMeta("og:description", metaDescription);
    setMeta("og:url", `https://morrison-ins.net/resources/${canonicalSlug}`);
    setMeta("og:type", "article");
    if (heroImage) setMeta("og:image", heroImage);
    else setMeta("og:image", "https://morrison-ins.net/apple-touch-icon-180x180.png");
    return () => {
      // Reset to site defaults on unmount
      setMeta("og:type", "website");
    };
  }, [pageTitle, metaDescription, canonicalSlug, heroImage]);

  return (
    <div ref={ref}>
      {/* Hero section */}
      <section
        style={{
          backgroundColor: "var(--pine)",
          padding: "4rem 0 3.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {heroImage && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.12,
            }}
          />
        )}
        <div className="container" style={{ maxWidth: "860px", position: "relative" }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              marginBottom: "1.5rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            <Link href="/">
              <span style={{ color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</span>
            </Link>
            <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
            <Link href="/resources">
              <span style={{ color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Resources</span>
            </Link>
            <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
            <span style={{ color: "oklch(0.55 0.01 80)" }}>{category}</span>
          </nav>

          {/* Category badge */}
          <div
            className="fade-up"
            style={{
              display: "inline-block",
              padding: "0.25rem 0.875rem",
              backgroundColor: "oklch(0.38 0.06 140)",
              borderRadius: "2rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--amber-brand)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {category}
          </div>

          {/* Title */}
          <h1
            className="fade-up"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: "white",
              lineHeight: 1.2,
              marginTop: "0.25rem",
              marginBottom: "1.25rem",
              maxWidth: "800px",
              transitionDelay: "80ms",
            }}
          >
            {title}
          </h1>

          {/* Meta */}
          <div
            className="fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "1.5rem",
              transitionDelay: "160ms",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                color: "oklch(0.65 0.01 80)",
              }}
            >
              <Clock size={14} />
              {readTime}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                color: "oklch(0.55 0.01 80)",
              }}
            >
              Morrison Insurance · Center, TX
            </span>
          </div>

          {/* Excerpt */}
          <p
            className="fade-up"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.0625rem",
              color: "oklch(0.78 0.01 80)",
              lineHeight: 1.75,
              maxWidth: "680px",
              transitionDelay: "240ms",
            }}
          >
            {excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      {children}

      {/* CTA */}
      <ArticleCta />

      {/* Related articles */}
      <RelatedArticles articles={relatedArticles} />

      <StickyCtaBar />
    </div>
  );
}

// Reusable section wrapper for article content
export function ArticleSection({
  children,
  white = false,
}: {
  children: React.ReactNode;
  white?: boolean;
}) {
  return (
    <section
      style={{
        backgroundColor: white ? "white" : "var(--cream)",
        padding: "4rem 0",
      }}
    >
      <div className="container" style={{ maxWidth: "780px" }}>
        {children}
      </div>
    </section>
  );
}

// Reusable H2 heading for article sections
export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="fade-up"
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: 700,
        fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
        color: "var(--pine)",
        marginBottom: "1rem",
        marginTop: "0.5rem",
      }}
    >
      {children}
    </h2>
  );
}

// Reusable body paragraph
export function ArticleP({ children, delay }: { children: React.ReactNode; delay?: string }) {
  return (
    <p
      className="fade-up"
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "1.0625rem",
        color: "var(--text-body)",
        lineHeight: 1.8,
        marginBottom: "1.25rem",
        transitionDelay: delay,
      }}
    >
      {children}
    </p>
  );
}

// Callout box
export function ArticleCallout({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div
      className="fade-up"
      style={{
        backgroundColor: "oklch(0.38 0.06 140 / 0.08)",
        borderLeft: "3px solid var(--pine)",
        borderRadius: "0 0.375rem 0.375rem 0",
        padding: "1.25rem 1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      {label && (
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--pine)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          color: "var(--text-body)",
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}
