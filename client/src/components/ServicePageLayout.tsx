import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import QuoteForm from "./QuoteForm";
import AppBanner from "./AppBanner";
import { useSeoMeta } from "@/hooks/useSeoMeta";

export interface ServicePageProps {
  seoTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroSupporting: string;
  heroImage: string;
  trustPoints: string[];
  howItWorksHeader: string;
  howItWorksIntro: string;
  howItWorksBullets: string[];
  builtForHeader: string;
  builtForIntro: string;
  builtForBullets: string[];
  realScenariosHeader: string;
  realScenarios: string[];
  guidanceHeader: string;
  guidanceCards: { title: string; desc: string }[];
  whatMostMissHeader: string;
  whatMostMissIntro: string;
  whatMostMissBullets: string[];
  shopHeader: string;
  shopBullets: string[];
  localSeoHeader: string;
  localSeoBody: string;
  localSeoList: string[];
  faqHeader: string;
  faqs: { q: string; a: string }[];
  processHeader: string;
  processSteps: string[];
  finalCtaHeadline: string;
  finalCtaSubheadline: string;
  defaultCoverage: string;
  schemaJson: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
}

function useScrollFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    container.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        paddingBottom: open ? "1.25rem" : "0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontWeight: 600,
            fontSize: "1.0625rem",
            color: "var(--pine)",
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        {open ? (
          <ChevronUp size={18} style={{ color: "var(--amber-brand)", flexShrink: 0 }} />
        ) : (
          <ChevronDown size={18} style={{ color: "var(--amber-brand)", flexShrink: 0 }} />
        )}
      </button>
      {open && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9375rem",
            color: "oklch(0.42 0.01 250)",
            lineHeight: 1.75,
            paddingBottom: "0.5rem",
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function ServicePageLayout(props: ServicePageProps) {
  const pageRef = useScrollFadeUp();
  useSeoMeta(props.seoTitle, props.metaDescription);

  return (
    <div ref={pageRef}>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: props.schemaJson }} />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${props.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, oklch(0.18 0.06 155 / 0.90) 0%, oklch(0.18 0.06 155 / 0.65) 55%, oklch(0.18 0.06 155 / 0.25) 100%)",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "4rem", paddingBottom: "4rem" }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "var(--amber-brand)" }}>{props.breadcrumbLabel}</span>
          </nav>

          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "var(--amber-brand)" }} />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--amber-brand)",
                }}
              >
                {props.heroSupporting}
              </span>
            </div>
            <h1
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                color: "white",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              {props.heroHeadline}
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.0625rem",
                color: "oklch(0.85 0.01 80)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "560px",
              }}
            >
              {props.heroSubheadline}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <Link href="/contact" className="btn-amber">
                Get a Personalized Quote
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-white" style={{ fontSize: "0.9375rem" }}>
                Speak with a Local Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ backgroundColor: "var(--pine)", padding: "1.25rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem 3.5rem" }}>
            {props.trustPoints.map((pt) => (
              <span key={pt} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "oklch(0.88 0.01 80)" }}>
                {pt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ backgroundColor: "var(--cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="fade-up">
                <span className="section-label">How It Works</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.howItWorksHeader}
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.42 0.01 250)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  transitionDelay: "160ms",
                }}
              >
                {props.howItWorksIntro}
              </p>
              <ul
                className="fade-up"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transitionDelay: "240ms",
                }}
              >
                {props.howItWorksBullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <CheckCircle size={16} style={{ color: "var(--pine)", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.38 0.01 250)", lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidance cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {props.guidanceCards.map((card, i) => (
                <div
                  key={card.title}
                  className="fade-up"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    borderLeft: "3px solid var(--amber-brand)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Lora, Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--pine)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9375rem",
                      color: "oklch(0.42 0.01 250)",
                      lineHeight: 1.65,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built for East Texas */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "5rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: "760px" }}>
            <span className="section-label">Built for East Texas</span>
            <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
            <h2
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                color: "var(--pine)",
                lineHeight: 1.2,
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              {props.builtForHeader}
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "oklch(0.42 0.01 250)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              {props.builtForIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.builtForBullets.map((b, i) => (
              <div
                key={b}
                className="fade-up"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <CheckCircle size={16} style={{ color: "var(--pine)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.38 0.01 250)", lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenarios + What Most Miss */}
      <section style={{ backgroundColor: "var(--cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Real scenarios */}
            <div>
              <div className="fade-up">
                <span className="section-label">Real Situations</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.realScenariosHeader}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {props.realScenarios.map((s, i) => (
                  <div
                    key={s}
                    className="fade-up"
                    style={{
                      padding: "1rem 1.25rem",
                      backgroundColor: "white",
                      borderRadius: "0.375rem",
                      borderLeft: "3px solid var(--pine)",
                      boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9375rem",
                      color: "oklch(0.38 0.01 250)",
                      lineHeight: 1.6,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* What most miss */}
            <div>
              <div className="fade-up">
                <span className="section-label">Common Gaps</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.whatMostMissHeader}
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  color: "oklch(0.42 0.01 250)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                  transitionDelay: "160ms",
                }}
              >
                {props.whatMostMissIntro}
              </p>
              <ul
                className="fade-up"
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem", transitionDelay: "240ms" }}
              >
                {props.whatMostMissBullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <CheckCircle size={15} style={{ color: "var(--amber-brand)", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.38 0.01 250)", lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="fade-up" style={{ marginTop: "2rem", transitionDelay: "320ms" }}>
                <Link href="/contact" className="btn-outline">
                  Review My Coverage
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Shop For You */}
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-up">
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber-brand)" }}>
                  We Shop For You
                </span>
                <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.shopHeader}
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.78 0.01 80)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  transitionDelay: "160ms",
                }}
              >
                Yes, we shop multiple carriers. But more importantly: we help you understand what you're comparing.
              </p>
              <ul
                className="fade-up"
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem", transitionDelay: "240ms" }}
              >
                {props.shopBullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <CheckCircle size={15} style={{ color: "var(--amber-brand)", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local SEO block */}
            <div
              className="fade-up"
              style={{
                backgroundColor: "oklch(0.32 0.06 155)",
                borderRadius: "0.5rem",
                padding: "2.5rem",
                transitionDelay: "80ms",
              }}
            >
              <h3
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                {props.localSeoHeader}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  color: "oklch(0.75 0.01 80)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {props.localSeoBody}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {props.localSeoList.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle size={13} style={{ color: "var(--amber-brand)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.01 80)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="fade-up">
                <span className="section-label">FAQ</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "2rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.faqHeader}
              </h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {props.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <div className="fade-up">
                <span className="section-label">Our Process</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "2rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.processHeader}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {props.processSteps.map((step, i) => (
                  <div
                    key={step}
                    className="fade-up"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "var(--pine)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Lora, Georgia, serif",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        color: "var(--amber-brand)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.9375rem",
                        color: "oklch(0.38 0.01 250)",
                        lineHeight: 1.65,
                        paddingTop: "0.375rem",
                      }}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="fade-up">
                <span className="section-label">Get Started</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.875rem, 3vw, 2.625rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  transitionDelay: "80ms",
                }}
              >
                {props.finalCtaHeadline}
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.0625rem",
                  color: "oklch(0.42 0.01 250)",
                  lineHeight: 1.75,
                  transitionDelay: "160ms",
                }}
              >
                {props.finalCtaSubheadline}
              </p>
            </div>
            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <QuoteForm defaultCoverage={props.defaultCoverage} />
            </div>
          </div>
        </div>
      </section>

      {/* App promotion */}
      <AppBanner variant="dark" />
    </div>
  );
}
