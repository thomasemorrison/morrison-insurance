import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Home as HomeIcon, Car, Briefcase, Tractor, Shield, Users, Award, CheckCircle, Phone } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/constants";
import QuoteForm from "@/components/QuoteForm";

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

  return (
    <div ref={pageRef}>
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
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            zIndex: 0,
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, oklch(0.18 0.06 155 / 0.88) 0%, oklch(0.18 0.06 155 / 0.65) 55%, oklch(0.18 0.06 155 / 0.25) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "5rem", paddingBottom: "5rem" }}>
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
                fontFamily: "Lora, Georgia, serif",
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
              <img
                src={IMAGES.heritage}
                alt="Morrison Insurance heritage — over 100 years serving East Texas"
                style={{
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              />
              {/* Year badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-1.5rem",
                  backgroundColor: "var(--pine)",
                  color: "white",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    display: "block",
                    lineHeight: 1,
                    color: "var(--amber-brand)",
                  }}
                >
                  1923
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  Est. Center, TX
                </span>
              </div>
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
                  fontFamily: "Lora, Georgia, serif",
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
                        fontFamily: "Lora, Georgia, serif",
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
                fontFamily: "Lora, Georgia, serif",
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
                      fontFamily: "Lora, Georgia, serif",
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
            fontFamily: "Lora, Georgia, serif",
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
                  fontFamily: "Lora, Georgia, serif",
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
                        fontFamily: "Lora, Georgia, serif",
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
                        fontFamily: "Lora, Georgia, serif",
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
                        fontFamily: "Lora, Georgia, serif",
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
                fontFamily: "Lora, Georgia, serif",
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
                      fontFamily: "Lora, Georgia, serif",
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
                fontFamily: "Lora, Georgia, serif",
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
                  fontFamily: "Lora, Georgia, serif",
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
                    fontFamily: "Lora, Georgia, serif",
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
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  padding: "2.5rem",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
              >
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
