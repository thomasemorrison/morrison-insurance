import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";

// Sticky mobile CTA bar shown on article pages
export function StickyCtaBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderTop: "1px solid oklch(0.88 0.01 80)",
      }}
      className="md:hidden"
    >
      <a
        href="tel:+19365982791"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "1rem",
          backgroundColor: "oklch(0.38 0.06 140)",
          color: "white",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9375rem",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link href="/contact">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "var(--amber-brand)",
            color: "oklch(0.15 0.02 65)",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 600,
          }}
        >
          Get a Quote
        </div>
      </Link>
    </div>
  );
}

// Related articles grid
export function RelatedArticles({
  articles,
}: {
  articles: Array<{ category: string; title: string; href: string; image: string }>;
}) {
  return (
    <section
      style={{
        backgroundColor: "var(--cream)",
        padding: "4rem 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container" style={{ maxWidth: "780px" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "var(--pine)",
            marginBottom: "1.5rem",
          }}
        >
          Related Articles
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {articles.map((article) => (
            <Link key={article.href} href={article.href}>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px oklch(0 0 0 / 0.10)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    height: "140px",
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: "1rem" }}>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      color: "var(--amber-brand)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {article.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "1.0625rem",
                      color: "var(--pine)",
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </div>
                  <div
                    style={{
                      marginTop: "0.625rem",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--amber-brand)",
                      fontWeight: 500,
                    }}
                  >
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Article CTA section
export function ArticleCta() {
  return (
    <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
      <div className="container" style={{ maxWidth: "780px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          Questions? We're here to help.
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.0625rem",
            color: "oklch(0.78 0.01 80)",
            lineHeight: 1.7,
            marginBottom: "2rem",
            maxWidth: "560px",
            margin: "0 auto 2rem",
          }}
        >
          Morrison Insurance has been serving Shelby County since 1923. Call us or stop by our
          office in Center — we'll walk through your options and find the right coverage for your
          situation.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact">
            <div
              style={{
                padding: "0.875rem 2rem",
                backgroundColor: "var(--amber-brand)",
                color: "oklch(0.15 0.02 65)",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Get a Free Quote
            </div>
          </Link>
          <a
            href="tel:+19365982791"
            style={{
              padding: "0.875rem 2rem",
              border: "1px solid oklch(0.55 0.01 80)",
              color: "white",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "0.25rem",
              textDecoration: "none",
            }}
          >
            (936) 598-2791
          </a>
        </div>
      </div>
    </section>
  );
}
