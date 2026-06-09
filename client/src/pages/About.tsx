import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { IMAGES, STAFF } from "@/lib/constants";

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
            fontFamily: "'Cormorant Garamond', Georgia, serif",
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
              About Morrison Insurance
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Serving East Texas<br />
              <span style={{ color: "var(--amber-brand)" }}>since 1923</span>
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.125rem",
                color: "oklch(0.78 0.01 80)",
                lineHeight: 1.75,
                maxWidth: "540px",
              }}
            >
              For more than 100 years, Morrison Insurance has helped families, businesses, and neighbors across Shelby County and Deep East Texas protect what they've worked hard to build.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Heritage + Courthouse */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up" style={{ position: "relative" }}>
              <img
                src={IMAGES.courthouse}
                alt="Shelby County Courthouse, Center, Texas — Est. 1885, the heart of our community"
                style={{
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              />

            </div>

            <div>
              <div className="fade-up">
                <span className="section-label">Our Story</span>
                <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="fade-up"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
                  color: "var(--pine)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  transitionDelay: "80ms",
                }}
              >
                One of the oldest businesses in Shelby County
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
                  Morrison Insurance has been on the square in Center, Texas for over a century. What started as a commitment to helping neighbors protect what they'd worked hard to build has grown into a three-generation family agency with deep roots in this community.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  We're not just located here — we live here. We know the roads, the farms, the families, and the businesses. That local knowledge shapes everything we do.
                </p>
                <p>
                  As an independent agency, we represent a range of trusted carriers, which means we can shop your options and find coverage that fits — not just one product.
                </p>
              </div>
              <div className="fade-up" style={{ marginTop: "2rem", transitionDelay: "240ms" }}>
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Agents — moved above Rooted in Community per client request */}
      <section style={{ backgroundColor: "var(--cream)", padding: "6rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: "760px", marginBottom: "3rem" }}>
            <span className="section-label">Our Team</span>
            <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
                color: "var(--pine)",
                lineHeight: 1.2,
                marginTop: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              The agents who take care of you
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "oklch(0.42 0.01 250)",
                lineHeight: 1.75,
              }}
            >
              When you call or walk in, these are the people you’ll talk to. They know this community, they know their coverage, and they genuinely care about the people they serve.
            </p>
          </div>

          {/* Group photo */}
          <div
            className="fade-up"
            style={{
              marginBottom: "3rem",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              backgroundColor: "white",
              textAlign: "center",
              padding: "2.5rem 2rem 1.5rem",
            }}
          >
            <img
              src={STAFF.group}
              alt="JoLynn Fountain, Connie Morrison, and Monica Watson — Morrison Insurance team"
              style={{
                maxWidth: "700px",
                width: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                color: "oklch(0.55 0.01 250)",
                marginTop: "1rem",
                letterSpacing: "0.04em",
              }}
            >
              Left to right: Monica Watson, Connie Morrison, JoLynn Fountain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "JoLynn Fountain",
                title: "Licensed Agent",
                photo: STAFF.jolynn,
                bio: "JoLynn has been a trusted face at Morrison Insurance for years. Known for her patience and thoroughness, she takes the time to make sure every client understands their coverage and feels confident in their decisions.",
                facebook: "https://www.facebook.com/jolynn.fountain",
              },
              {
                name: "Monica Watson",
                title: "Licensed Agent",
                photo: STAFF.monica,
                bio: "Monica brings energy, expertise, and a genuine love for helping people to every conversation. Whether you're a new customer or a longtime client, Monica makes the process easy and stress-free.",
                facebook: "https://www.facebook.com/MonMonWatson38",
              },
              {
                name: "Connie Morrison",
                title: "Licensed Agent",
                photo: STAFF.connies,
                bio: "Connie Morrison is both a member of the Morrison family and a dedicated licensed agent. Her deep roots in the community and personal investment in every client relationship make her an invaluable part of the team.",
                facebook: "https://www.facebook.com/connie.e.morrison.5",
              },
            ].map((agent, i) => (
              <div
                key={agent.name}
                className="fade-up"
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    height: "320px",
                    overflow: "hidden",
                    backgroundColor: "oklch(0.97 0.01 90)",
                    position: "relative",
                  }}
                >
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                  />
                </div>
                {/* Content */}
                <div style={{ padding: "1.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "var(--pine)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {agent.name}
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
                    {agent.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9375rem",
                      color: "oklch(0.42 0.01 250)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {agent.bio}
                  </p>
                  <a
                    href={agent.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--pine)",
                      textDecoration: "none",
                      borderBottom: "2px solid var(--amber-brand)",
                      paddingBottom: "1px",
                    }}
                  >
                    Connect on Facebook
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Morrison Family — Rooted in Community */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "6rem 0" }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: "760px", marginBottom: "3rem" }}>
            <span className="section-label">The People Behind It</span>
            <div className="amber-rule" style={{ marginTop: "0.75rem" }} />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
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
                photo: STAFF.tommyPortrait,
                desc: "Tommy Morrison spent more than 50 years serving the people of Shelby County — not just through insurance, but through a deep commitment to the community. His involvement included the Center Noon Lions Club, where he maintained over 50 years of perfect attendance, along with active support of the Shelby County Chamber of Commerce and many other local organizations. He also served for many years as a board member of Farmers State Bank.",
              },
              {
                name: "Jane Morrison",
                role: "Community Cornerstone",
                photo: STAFF.tommyAndJane,
                desc: "Alongside Tommy, Jane Morrison was a steady and familiar presence in the office, supporting both the business and the people who walked through the door. Known for her involvement in the community and her church, she helped make Morrison Insurance a place where people felt comfortable and cared for.",
              },
              {
                name: "Tem Morrison",
                role: "Second Generation",
                photo: STAFF.temAndConnie,
                desc: "Tem Morrison, Tommy and Jane's son, carries the family's commitment to community and service into the next generation. Raised in Center, Texas, Tem brings a lifetime of local knowledge and genuine care for the people Morrison Insurance serves.",
              },
              {
                name: "Connie Morrison",
                role: "Tem's Partner in Life & Business",
                photo: STAFF.connies,
                photoNote: "family",
                desc: "Connie Morrison has been an integral part of the Morrison Insurance family, bringing warmth, dedication, and a personal touch to every interaction. Her commitment to the community reflects the values that have defined this agency for over a century.",
              },
              {
                name: "Thomas Morrison",
                role: "Continuing the Tradition",
                photo: STAFF.thomas,
                desc: "Thomas Morrison — raised in Center, Texas, and a graduate of Texas A&M and Stephen F. Austin — carries the Morrison name forward with a deep connection to the community and a strong sense of responsibility to continue what has been built over generations.",
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
                    width: "100%",
                    height: "220px",
                    borderRadius: "0.375rem",
                    overflow: "hidden",
                    backgroundColor: "oklch(0.93 0.03 155)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        color: "var(--pine)",
                      }}
                    >
                      {person.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
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

      {/* Section 4: Community Connection */}
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
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
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
                Morrison Insurance has never just been an office on the square. It's been part of the community — supporting local organizations, participating in civic groups, and taking care of neighbors, friends, and families.
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

      {/* Section 5: How We Serve */}
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
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
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
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
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
