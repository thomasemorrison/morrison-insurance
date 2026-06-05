import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { IMAGES } from "@/lib/constants";

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

export default function AboutPage() {
  const pageRef = useScrollFadeUp();

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--pine)",
          padding: "5rem 0 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-2rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "Lora, Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(10rem, 18vw, 20rem)",
            color: "oklch(0.32 0.06 155)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          1923
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "640px" }}>
            <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>About</span>
            </nav>
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
              About Us
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
              A part of East Texas<br />for generations
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
              For more than 100 years, Morrison Insurance has been serving families, businesses, and neighbors across East Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Story */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-up">
                <span className="section-label">The Morrison Story</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                Built over time. Passed down with purpose.
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
                <p style={{ marginBottom: "1.25rem" }}>
                  The Morrison name has been part of the insurance business in Shelby County for generations. The agency traces its roots back to 1923 and has grown through partnerships, changes, and decades of steady service to the community.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  From its early beginnings to the agency it is today, Morrison Insurance has grown through the people who have dedicated their lives to serving this community, building relationships, earning trust, and showing up when it matters most.
                </p>
                <p>
                  Over time, the business has evolved, but the focus has stayed the same: doing right by the people we serve.
                </p>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <img
                src={IMAGES.heritage}
                alt="Morrison Insurance heritage — over 100 years of service in Center, Texas"
                style={{
                  width: "100%",
                  height: "460px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The People */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "6rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: "760px", marginBottom: "3rem" }}>
            <span className="section-label">The People Behind It</span>
            <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
            <h2
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
                color: "var(--pine)",
                lineHeight: 1.2,
                marginTop: "1rem",
              }}
            >
              Rooted in the community
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tommy Morrison",
                role: "Founder of the Modern Agency",
                desc: "Tommy Morrison spent more than 50 years serving the people of Shelby County—not just through insurance, but through a deep commitment to the community. His involvement included the Center Noon Lions Club, where he maintained over 50 years of perfect attendance, along with active support of the Shelby County Chamber of Commerce and many other local organizations. He also served for many years as a board member of Farmers State Bank.",
              },
              {
                name: "Jane Morrison",
                role: "Community Cornerstone",
                desc: "Alongside Tommy, Jane Morrison was a steady and familiar presence in the office, supporting both the business and the people who walked through the door. Known for her involvement in the community and her church, she helped make Morrison Insurance a place where people felt comfortable and cared for.",
              },
              {
                name: "Thomas Morrison",
                role: "Continuing the Tradition",
                desc: "Today, Thomas Morrison—raised in Center, Texas, and a graduate of Texas A&M and Stephen F. Austin—carries the Morrison name forward with a deep connection to the community and a strong sense of responsibility to continue what has been built over generations.",
              },
            ].map((person, i) => (
              <div
                key={person.name}
                className="fade-up"
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  padding: "2rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderTop: "3px solid var(--amber-brand)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "oklch(0.93 0.03 155)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--pine)",
                  }}
                >
                  {person.name.charAt(0)}
                </div>
                <h3
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--pine)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--amber-brand)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {person.role}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    color: "oklch(0.42 0.01 250)",
                    lineHeight: 1.7,
                  }}
                >
                  {person.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Community */}
      <section style={{ backgroundColor: "var(--pine)", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  Community Connection
                </span>
                <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                More than a business
              </h2>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.0625rem",
                  color: "oklch(0.78 0.01 80)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  transitionDelay: "160ms",
                }}
              >
                Morrison Insurance has never just been an office on the square. It's been part of the community—supporting local organizations, participating in civic groups, and taking care of neighbors, friends, and families.
              </p>
              <p
                className="fade-up"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.0625rem",
                  color: "oklch(0.78 0.01 80)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  transitionDelay: "240ms",
                }}
              >
                We live here, we know the people, and we take pride in being a business our community can count on.
              </p>

              <div
                className="fade-up"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  transitionDelay: "320ms",
                }}
              >
                {[
                  "Chamber of Commerce",
                  "Lions Club",
                  "Farmers State Bank",
                  "Local Charities",
                  "Community Organizations",
                  "Project Graduation",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle size={14} style={{ color: "var(--amber-brand)", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.9rem",
                        color: "oklch(0.78 0.01 80)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <img
                src={IMAGES.landscape}
                alt="East Texas landscape — the community Morrison Insurance serves"
                style={{
                  width: "100%",
                  height: "460px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How We Serve */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="fade-up">
                <span className="section-label">How We Serve</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                Independent. Local. Focused on you.
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
                <p style={{ marginBottom: "1.25rem" }}>
                  As an independent agency, Morrison Insurance represents a range of trusted insurance providers. That means we can bring you options, not just one product, and help you find coverage that fits your needs.
                </p>
                <p>
                  We take the time to get to know you, walk you through your options, and help you make a decision you feel confident in.
                </p>
              </div>
              <div className="fade-up" style={{ marginTop: "2rem", transitionDelay: "240ms" }}>
                <Link href="/contact" className="btn-primary">
                  Let's Get Started
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div
              className="fade-up"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                transitionDelay: "80ms",
              }}
            >
              {[
                { stat: "100+", label: "Years in Business", sub: "Est. 1923, Center, TX" },
                { stat: "3", label: "Generations of Service", sub: "Family-owned & operated" },
                { stat: "Multi", label: "Carrier Options", sub: "We shop for you" },
                { stat: "Local", label: "Team & Community", sub: "We live here too" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "2rem 1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    borderBottom: "3px solid var(--pine)",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Lora, Georgia, serif",
                      fontWeight: 700,
                      fontSize: "2.25rem",
                      color: "var(--pine)",
                      display: "block",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.stat}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: "var(--charcoal)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8125rem",
                      color: "oklch(0.55 0.01 250)",
                    }}
                  >
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
