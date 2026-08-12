import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Home as HomeIcon, Car, Briefcase, Tractor, Shield, Users, Award, CheckCircle, Phone, Smartphone } from "lucide-react";
import { BRAND, IMAGES, STAFF } from "@/lib/constants";
import QuoteForm from "@/components/QuoteForm";
import AppBanner from "@/components/AppBanner";
import { useSeoMeta } from "@/hooks/useSeoMeta";

function useScrollFadeUp(selector = ".fade-up") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    container.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
  return ref;
}

const services = [
  {
    icon: HomeIcon,
    title: "Home & Property",
    description: "Homes, mobile homes, lake houses, and property coverage designed for how East Texans actually live.",
    href: "/home-insurance",
  },
  {
    icon: Car,
    title: "Auto & Recreational",
    description: "Cars, trucks, motorcycles, boats, ATVs, and UTVs—coverage that keeps you moving.",
    href: "/auto-insurance",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Coverage for contractors, restaurants, shops, and small businesses that keep our communities running.",
    href: "/business-insurance",
  },
  {
    icon: Tractor,
    title: "Farm, Ranch & Rural",
    description: "Coverage for land, equipment, livestock, and rural risks that require local understanding.",
    href: "/farm-ranch-insurance",
  },
];

const whyMorrison = [
  {
    icon: Shield,
    title: "Independent Guidance",
    description: "We represent multiple carriers, so we shop your options and find coverage that fits—not just one product.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "We live here. We insure the same roads, homes, farms, and businesses we serve every day.",
  },
  {
    icon: CheckCircle,
    title: "Advocates During Claims",
    description: "When something goes wrong, we're in your corner—helping you navigate the process and get what you're owed.",
  },
  {
    icon: Award,
    title: "100+ Years of Trust",
    description: "Serving East Texans since 1923. One of the oldest businesses in Shelby County.",
  },
];

const processSteps = [
  { num: "01", title: "We get to know you", desc: "We take the time to understand what matters most and where your risks are." },
  { num: "02", title: "We shop your options", desc: "As independent agents, we look across multiple providers to find coverage that fits your needs." },
  { num: "03", title: "We walk you through it", desc: "We explain everything clearly so you know what you have and how it works." },
  { num: "04", title: "You choose what fits best", desc: "No confusion, no guessing—just the right decision for your situation." },
];

export default function HomePage() {
  const pageRef = useScrollFadeUp();
  useSeoMeta(
    "Morrison Insurance | Center, TX Since 1923",
    "Independent insurance agency in Center, TX since 1923. Home, auto, business & farm coverage for Shelby County and Deep East Texas."
  );

  return (
    <div ref={pageRef}>
      {/* Hero image preload hint for LCP optimization */}
      <img
        src={IMAGES.heroPanoramic}
        fetchPriority="high"
        decoding="async"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
        alt=""
      />
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Full-width panoramic hero: Center TX square — courthouse left, Morrison Insurance right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMAGES.heroPanoramic})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            zIndex: 0,
          }}
        />
        {/* Gradient overlay — deep green left for text legibility, fades to transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(100deg, oklch(0.18 0.06 155 / 0.92) 0%, oklch(0.18 0.06 155 / 0.80) 40%, oklch(0.18 0.06 155 / 0.35) 65%, oklch(0.18 0.06 155 / 0.10) 100%)",
            zIndex: 1,
          }}
        />
        {/* Bottom fade for smooth section transition */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, oklch(0.18 0.06 155 / 0.50) 0%, transparent 25%)",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "680px" }}>
            {/* Supporting line */}
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
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
                Let us help you find the right coverage
              </span>
            </div>

            {/* H1 */}
            <h1
              className="fade-up"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                transitionDelay: "80ms",
              }}
            >
              Local roots.<br />
              <span style={{ color: "var(--amber-brand)" }}>Grounded in community.</span>
            </h1>

            <p
              className="fade-up"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.125rem",
                color: "oklch(0.88 0.01 80)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "560px",
                transitionDelay: "160ms",
              }}
            >
              Serving East Texans since 1923, Morrison Insurance helps protect what matters most with clear guidance, local service, and coverage that fits your life.
            </p>

            <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", transitionDelay: "240ms" }}>
              <Link href="/contact" className="btn-amber" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                Speak with a Local Agent
                <ArrowRight size={16} />
              </Link>
              <a href={BRAND.phoneHref} className="btn-white" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={BRAND.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "0.875rem 2rem",
                  border: "1.5px solid oklch(0.65 0.04 155)",
                  borderRadius: "0.375rem",
                  color: "oklch(0.88 0.01 80)",
                  textDecoration: "none",
                  transition: "border-color 180ms, color 180ms",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--amber-brand)"; (e.currentTarget as HTMLElement).style.color = "var(--amber-brand)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.65 0.04 155)"; (e.currentTarget as HTMLElement).style.color = "oklch(0.88 0.01 80)"; }}
              >
                <Smartphone size={16} />
                Free App
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="fade-up"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                marginTop: "3rem",
                transitionDelay: "320ms",
              }}
            >
              {["100+ Years in Business", "Independent Agency", "Local Team"].map((badge) => (
                <div key={badge} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle size={15} style={{ color: "var(--amber-brand)", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "oklch(0.88 0.01 80)",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ backgroundColor: "var(--pine)", padding: "1.25rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem 3.5rem",
            }}
          >
            {[
              "✔ We help you find the right coverage, not just the cheapest option",
              "✔ We explain everything clearly so you know what you're getting",
              "✔ We answer the phone when you call",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "oklch(0.88 0.01 80)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGACY / ABOUT SECTION ── */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="fade-up" style={{ position: "relative" }}>
              {/* Morrison Insurance office building — the home of the agency */}
              <img
                src={IMAGES.officeCurrent}
                alt="Morrison Insurance Agency — 125 Shelbyville St., Center, Texas"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  objectPosition: "center center",
                  borderRadius: "0.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  marginBottom: "1rem",
                }}
              />
              {/* Tommy & Jane Morrison — the founders */}
              <img
                src={STAFF.tommyAndJane}
                alt="Tommy and Jane Morrison — the heart of Morrison Insurance"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  objectPosition: "center 40%",
                  borderRadius: "0.5rem",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              />
            </div>

            {/* Content side */}
            <div>
              <div className="fade-up">
                <span className="section-label">About Us</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.875rem, 3vw, 2.625rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                More than 100 years of serving East Texas
              </h2>
              <div
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.38 0.01 250)",
                  lineHeight: 1.8,
                  transitionDelay: "160ms",
                }}
              >
                <p style={{ marginBottom: "1rem" }}>
                  For three generations, Morrison Insurance has helped families, businesses, and neighbors across East Texas protect what they've worked hard to build.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  We're not just located here—we live here, we know the people, and we're here when you need us most.
                </p>
                <p>
                  We take the time to get it right—so you can feel confident in your coverage.
                </p>
              </div>

              {/* Proof points */}
              <div
                className="fade-up"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                  margin: "2rem 0",
                  transitionDelay: "240ms",
                }}
              >
                {[
                  { label: "Local Team", desc: "Your neighbors—here to take care of you when it matters most." },
                  { label: "Independent Agents", desc: "We shop options from a range of providers to find what fits your needs." },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "1.25rem",
                      backgroundColor: "white",
                      borderRadius: "0.5rem",
                      borderLeft: "3px solid var(--amber-brand)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--pine)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.875rem",
                        color: "oklch(0.45 0.01 250)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="fade-up" style={{ transitionDelay: "320ms" }}>
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE INSURE ── */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "6rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">What We Do</span>
            <div className="amber-rule" style={{ margin: "0.75rem auto 0" }} />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                color: "var(--pine)",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Coverage built around how you live and work
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.0625rem",
                color: "oklch(0.42 0.01 250)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              From your home and vehicles to your business and property, we help protect the things that matter most—right here in East Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="fade-up"
                  style={{
                    display: "block",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    padding: "2rem 1.75rem",
                    textDecoration: "none",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    borderTop: "3px solid var(--pine)",
                    transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms",
                    transitionDelay: `${i * 60}ms`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "oklch(0.93 0.03 155)",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--pine)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      color: "var(--pine)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.45 0.01 250)",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {svc.description}
                  </p>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--pine)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    Learn More <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>

          <p
            className="fade-up"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "oklch(0.45 0.01 250)",
              textAlign: "center",
              marginTop: "2.5rem",
            }}
          >
            Not sure where you fit?{" "}
            <Link
              href="/contact"
              style={{ color: "var(--pine)", fontWeight: 600, textDecoration: "underline" }}
            >
              We'll walk through it with you
            </Link>{" "}
            and help you find the right coverage.
          </p>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section
        style={{
          backgroundColor: "var(--pine)",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture: large year number */}
        <div
          style={{
            position: "absolute",
            right: "-2rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(12rem, 20vw, 22rem)",
            color: "oklch(0.32 0.06 155)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          1923
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="fade-up">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--amber-brand)",
                  }}
                >
                  How We Work
                </span>
                <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.875rem, 3vw, 2.625rem)",
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                We'll walk you through it
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.0625rem",
                  color: "oklch(0.78 0.01 80)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  transitionDelay: "160ms",
                }}
              >
                Insurance can be difficult to understand. We'll walk through it with you and help you make sense of it, so you can feel confident in your coverage.
              </p>

              {/* Trust cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Trust",
                    desc: "We live here, we know the people, and we're here when you need us most.",
                  },
                  {
                    title: "Reassurance",
                    desc: "Most people aren't completely sure what their insurance covers, and that's okay. We'll walk through it together.",
                  },
                ].map((card, i) => (
                  <div
                    key={card.title}
                    className="fade-up"
                    style={{
                      backgroundColor: "oklch(0.32 0.06 155)",
                      borderRadius: "0.5rem",
                      padding: "1.5rem",
                      borderLeft: "3px solid var(--amber-brand)",
                      transitionDelay: `${240 + i * 80}ms`,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        color: "var(--amber-brand)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.9rem",
                        color: "oklch(0.75 0.01 80)",
                        lineHeight: 1.65,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="fade-up" style={{ marginTop: "2rem", transitionDelay: "400ms" }}>
                <Link href="/contact" className="btn-amber" style={{ fontSize: "1rem" }}>
                  Speak with a Local Agent
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Process steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className="fade-up"
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      border: "2px solid var(--amber-brand)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--amber-brand)",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        color: "white",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.9375rem",
                        color: "oklch(0.72 0.01 80)",
                        lineHeight: 1.65,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MORRISON ── */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
            <span className="section-label">Why Morrison</span>
            <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                color: "var(--pine)",
                marginTop: "1rem",
                maxWidth: "520px",
              }}
            >
              What makes us different
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMorrison.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="fade-up"
                  style={{
                    padding: "2rem 1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "oklch(0.93 0.03 155)",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--pine)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--pine)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.45 0.01 250)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: "var(--pine)", padding: "6rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--amber-brand)",
              }}
            >
              What Our Customers Say
            </span>
            <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem auto 0" }} />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                color: "white",
                marginTop: "1rem",
              }}
            >
              Trusted by East Texas families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "You can always count on a friendly smile and hello when you walk in this place and the ladies are very knowledgeable when it comes to insurance.",
                name: "Lewis Baker",
                location: "Center, TX",
                placeholder: false,
              },
              {
                quote: "Everyone in this office has been the most friendly and helpful in obtaining the right insurance for our needs. We recently experienced a very major disaster at our home and, Tem, Connie and Monica could not have been more supportive, helping to guide us through the claims process. Even going so far as to get on the phone with one of the adjusters and effectively remind them that with Allstate we, as customers and victims of a major flood event, were indeed in good hands. My wife and I are very happy with the service we have received from this team.",
                name: "R Captain",
                location: "Shelby County, TX",
                placeholder: false,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="fade-up"
                style={{
                  backgroundColor: "oklch(0.22 0.06 155)",
                  borderRadius: "0.5rem",
                  padding: "2rem",
                  borderTop: "3px solid var(--amber-brand)",
                  transitionDelay: `${i * 80}ms`,
                  opacity: t.placeholder ? 0.55 : 1,
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="var(--amber-brand)">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    color: "oklch(0.82 0.01 80)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Attribution */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "oklch(0.30 0.06 155)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--amber-brand)" }}>
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "white", marginBottom: "0.125rem" }}>
                      {t.name}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "oklch(0.60 0.01 80)" }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.72 0.01 80)", textAlign: "center" }}>
              Had a great experience with us? We'd love to hear from you.
            </p>
            <a
              href={BRAND.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--amber-brand)",
                color: "var(--pine)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "0.375rem",
                textDecoration: "none",
                transition: "opacity 180ms",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              Leave Us a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY RECOGNITION ── */}
      <section
        style={{
          backgroundColor: "var(--cream)",
          padding: "3rem 0",
          borderTop: "1px solid oklch(0.88 0.02 80 / 0.45)",
        }}
      >
        <div className="container">
          <div
            className="fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1.5rem, 4vw, 3.25rem)",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <img
              src="/manus-storage/light-champion-best-of-best-2026_f6f1d050.png"
              alt="The Light and Champion 2026 Shelby County Readers Choice Best of the Best First Place award"
              style={{ width: "clamp(115px, 18vw, 165px)", height: "auto", flexShrink: 0 }}
            />
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--amber-brand)",
                  marginBottom: "0.65rem",
                }}
              >
                Shelby County Readers Choice Awards
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  lineHeight: 1.1,
                  color: "var(--green-dark)",
                  marginBottom: "0.75rem",
                }}
              >
                Thank you, Shelby County.
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                Your votes named Morrison Insurance Best Insurance Agency and Monica Watson Best Insurance Agent in The Light and Champion&apos;s 2026 Best of the Best Awards. We&apos;re grateful for the trust—and proud to celebrate all the local winners who make Shelby County stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARRIERS WE SHOP ── */}
      <section
        style={{
          backgroundColor: "var(--cream-dark)",
          padding: "3.5rem 0",
          borderTop: "1px solid oklch(0.88 0.02 80 / 0.5)",
          borderBottom: "1px solid oklch(0.88 0.02 80 / 0.5)",
        }}
      >
        <div className="container">
          <p
            className="fade-up"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "oklch(0.50 0.03 155)",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Companies we shop on your behalf
          </p>
          <div
            className="fade-up"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem 3.5rem",
              transitionDelay: "80ms",
            }}
          >
            {[
              { src: "/manus-storage/carrier-allstate-v2_5b675fd5.png", alt: "Allstate" },
              { src: "/manus-storage/carrier-foremost-v2_d58e9cef.png", alt: "Foremost Insurance" },
              { src: "/manus-storage/carrier-liberty-mutual-v2_8c71eb01.png", alt: "Liberty Mutual" },
              { src: "/manus-storage/carrier-progressive-v2_6b30eb88.png", alt: "Progressive" },
              { src: "/manus-storage/carrier-travelers-v2_3055773f.png", alt: "Travelers" },
            ].map((carrier) => (
              <img
                key={carrier.alt}
                src={carrier.src}
                alt={carrier.alt}
                style={{
                  height: "64px",
                  width: "auto",
                  maxWidth: "180px",
                  objectFit: "contain",
                  opacity: 0.85,
                  transition: "opacity 220ms ease, transform 220ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ── APP PROMOTION ── */}
      <AppBanner variant="light" />

      {/* ── EAST TEXAS LANDSCAPE BANNER ── */}
      <section
        style={{
          position: "relative",
          padding: "5rem 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMAGES.landscape})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, oklch(0.18 0.06 155 / 0.92) 0%, oklch(0.18 0.06 155 / 0.70) 60%, oklch(0.18 0.06 155 / 0.40) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "600px" }}>
            <div className="fade-up">
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--amber-brand)",
                }}
              >
                Serving Shelby County &amp; Deep East Texas
              </span>
              <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
            </div>
            <h2
              className="fade-up"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
                color: "white",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
                transitionDelay: "80ms",
              }}
            >
              We live here. We know the land.
            </h2>
            <p
              className="fade-up"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.0625rem",
                color: "oklch(0.82 0.01 80)",
                lineHeight: 1.75,
                marginBottom: "2rem",
                transitionDelay: "160ms",
              }}
            >
              Center · Shelbyville · Timpson · Joaquin · Tenaha · Deep East Texas
            </p>
            <div className="fade-up" style={{ transitionDelay: "240ms" }}>
              <Link href="/contact" className="btn-amber">
                Get Started Today
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA / QUOTE FORM ── */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "6rem 0" }}>
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
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.875rem, 3vw, 2.625rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                  transitionDelay: "80ms",
                }}
              >
                Get a quote started today
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.0625rem",
                  color: "oklch(0.42 0.01 250)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  transitionDelay: "160ms",
                }}
              >
                Whether you're starting fresh, looking to add more coverage, or just want to compare coverages, we're here to help.
              </p>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.42 0.01 250)",
                  lineHeight: 1.75,
                  transitionDelay: "240ms",
                }}
              >
                Tell us a little about your situation, and we'll take it from there.
              </p>

              {/* Contact info */}
              <div
                className="fade-up"
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  borderLeft: "3px solid var(--pine)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transitionDelay: "320ms",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--pine)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Prefer to call or email?
                </p>
                <a
                  href={BRAND.phoneHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--pine)",
                    textDecoration: "none",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Phone size={15} />
                  {BRAND.phone}
                </a>
                <a
                  href={BRAND.emailHref}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    color: "oklch(0.45 0.01 250)",
                    textDecoration: "none",
                  }}
                >
                  {BRAND.email}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
