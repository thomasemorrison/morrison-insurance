import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/constants";
import QuoteForm from "@/components/QuoteForm";

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

export default function ContactPage() {
  const pageRef = useScrollFadeUp();

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0 4rem" }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Contact</span>
          </nav>
          <div style={{ maxWidth: "640px" }}>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--amber-brand)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Contact Us
            </span>
            <h1
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Let's talk about your coverage
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.125rem",
                color: "oklch(0.78 0.01 80)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Whether you're starting fresh, looking to review your current coverage, or just have a question — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: "var(--cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact info */}
            <div>
              <div className="fade-up">
                <span className="section-label">Get in Touch</span>
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
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                We'd love to hear from you
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.42 0.01 250)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  transitionDelay: "160ms",
                }}
              >
                Fill out the form and a local Morrison Insurance agent will reach out to walk through your options. Or call or email us directly — we're here to help.
              </p>

              {/* Office photo */}
              <div className="fade-up" style={{ marginBottom: "2rem", transitionDelay: "200ms" }}>
                <img
                  src={IMAGES.officeCurrent}
                  alt="Morrison Insurance Agency office on the Center, TX square"
                  style={{
                    width: "100%",
                    height: "340px",
                    objectFit: "cover",
                    objectPosition: "center center",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                  }}
                />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "oklch(0.55 0.01 250)", marginTop: "0.5rem", textAlign: "center" }}>
                  125 Shelbyville St. — On the Center Square since 1923
                </p>
              </div>

              {/* Contact cards */}
              <div
                className="fade-up"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                  transitionDelay: "240ms",
                }}
              >
                <a
                  href={BRAND.phoneHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    borderLeft: "3px solid var(--pine)",
                    textDecoration: "none",
                    transition: "box-shadow 180ms",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)")}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "oklch(0.93 0.03 155)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} style={{ color: "var(--pine)" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "oklch(0.55 0.01 250)", marginBottom: "0.125rem" }}>
                      Call Us
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "var(--pine)" }}>
                      {BRAND.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={BRAND.emailHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    borderLeft: "3px solid var(--amber-brand)",
                    textDecoration: "none",
                    transition: "box-shadow 180ms",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)")}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "oklch(0.95 0.04 65)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} style={{ color: "var(--amber-dark)" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "oklch(0.55 0.01 250)", marginBottom: "0.125rem" }}>
                      Email Us
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "var(--charcoal)" }}>
                      {BRAND.email}
                    </p>
                  </div>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    borderLeft: "3px solid oklch(0.65 0.02 155)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "oklch(0.93 0.03 155)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} style={{ color: "var(--pine)" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "oklch(0.55 0.01 250)", marginBottom: "0.125rem" }}>
                      Our Office
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--charcoal)" }}>
                      {BRAND.address.street}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.45 0.01 250)" }}>
                      {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    borderLeft: "3px solid oklch(0.65 0.02 155)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "oklch(0.93 0.03 155)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} style={{ color: "var(--pine)" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "oklch(0.55 0.01 250)", marginBottom: "0.25rem" }}>
                      Office Hours
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "var(--charcoal)", fontWeight: 600 }}>
                      Monday – Friday: 9:00 AM – 4:00 PM
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.52 0.01 250)" }}>
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div
                className="fade-up"
                style={{
                  backgroundColor: "var(--pine)",
                  borderRadius: "0.5rem",
                  padding: "1.75rem",
                  transitionDelay: "320ms",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  What to expect when you reach out
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {[
                    "A local agent will contact you — not a call center",
                    "We'll ask a few questions to understand your situation",
                    "We'll walk you through your options clearly",
                    "No pressure, no obligation",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle size={14} style={{ color: "var(--amber-brand)", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "oklch(0.82 0.01 80)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div className="fade-up" style={{ transitionDelay: "80ms", position: "sticky", top: "6rem" }}>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  padding: "2rem 2rem 0",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "var(--pine)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Get a Quote
                </h2>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    color: "oklch(0.45 0.01 250)",
                    marginBottom: "1.25rem",
                    lineHeight: 1.6,
                  }}
                >
                  Fill out the form and a local agent will be in touch shortly.
                </p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "5rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Find Us</span>
            <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
            <h2
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                color: "var(--pine)",
                marginTop: "1rem",
              }}
            >
              Located in downtown Center, TX
            </h2>
          </div>
          <div
            className="fade-up"
            style={{
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              transitionDelay: "80ms",
            }}
          >
            <iframe
              title="Morrison Insurance Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.5!2d-94.1777!3d31.7974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ3JzUwLjYiTiA5NMKwMTAnMzkuNyJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p
            className="fade-up"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "oklch(0.45 0.01 250)",
              marginTop: "1rem",
              transitionDelay: "160ms",
            }}
          >
            {BRAND.address.full} · {BRAND.phone}
          </p>
        </div>
      </section>

      {/* Testimonials strip */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "5rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                color: "var(--pine)",
                marginTop: "1rem",
              }}
            >
              Trusted by East Texas families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Your quote will go here. Share your experience with Morrison Insurance and we'll add it to the site.",
                name: "Your Name",
                location: "Center, TX",
              },
              {
                quote: "Your quote will go here. Share your experience with Morrison Insurance and we'll add it to the site.",
                name: "Your Name",
                location: "Shelby County, TX",
              },
              {
                quote: "Your quote will go here. Share your experience with Morrison Insurance and we'll add it to the site.",
                name: "Your Name",
                location: "Deep East Texas",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="fade-up"
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  padding: "2rem",
                  borderTop: "3px solid var(--pine)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transitionDelay: `${i * 80}ms`,
                  opacity: 0.55,
                }}
              >
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="var(--amber-brand)">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    color: "oklch(0.38 0.01 250)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "oklch(0.93 0.03 155)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontFamily: "Lora, serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--pine)" }}>
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "var(--pine)", marginBottom: "0.125rem" }}>
                      {t.name}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "oklch(0.55 0.01 250)" }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--amber-brand)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Service Area
              </span>
              <h2
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                Serving Shelby County &amp; Deep East Texas
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.75 0.01 80)",
                  lineHeight: 1.7,
                }}
              >
                We serve clients throughout the region, including communities across Shelby, Sabine, Panola, San Augustine, Rusk, and Nacogdoches counties.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.625rem",
              }}
            >
              {[
                "Center, TX",
                "Shelbyville, TX",
                "Timpson, TX",
                "Joaquin, TX",
                "Tenaha, TX",
                "Nacogdoches, TX",
                "Carthage, TX",
                "San Augustine, TX",
                "Hemphill, TX",
                "Henderson, TX",
                "Toledo Bend Area",
                "Deep East Texas",
              ].map((area) => (
                <span
                  key={area}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "oklch(0.82 0.01 80)",
                    backgroundColor: "oklch(0.32 0.06 155)",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "2rem",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
