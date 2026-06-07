import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

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

const articles = [
  {
    category: "Home Insurance",
    title: "What Does Homeowners Insurance Actually Cover in Texas?",
    excerpt: "Most homeowners have a general idea of what their policy covers — but the details matter. Here's a plain-language breakdown of what's included, what's excluded, and what East Texas homeowners should pay attention to.",
    readTime: "5 min read",
    href: "/resources/what-does-homeowners-insurance-cover-texas",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=70",
  },
  {
    category: "Auto Insurance",
    title: "Texas Auto Insurance Requirements: What You Need to Know",
    excerpt: "Texas requires all drivers to carry minimum liability insurance — but those minimums may not be enough to protect you. Here's what the law requires and what we recommend for drivers in Shelby County.",
    readTime: "4 min read",
    href: "/resources/texas-auto-insurance-requirements",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=70",
  },
  {
    category: "Farm & Ranch",
    title: "Farm Insurance vs. Homeowners Insurance: What's the Difference?",
    excerpt: "If you own land, livestock, or equipment, a standard homeowners policy probably isn't enough. Here's what farm insurance covers that homeowners insurance doesn't — and why it matters for East Texas property owners.",
    readTime: "5 min read",
    href: "/resources/farm-insurance-vs-homeowners-insurance",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=70",
  },
  {
    category: "Business Insurance",
    title: "Does Your Small Business Have the Right Insurance Coverage?",
    excerpt: "Many small business owners in East Texas are underinsured — or have coverage that doesn't match how their business actually operates. Here are the most common gaps we see and how to address them.",
    readTime: "6 min read",
    href: "/resources/small-business-insurance-coverage-gaps",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70",
  },
  {
    category: "Home Insurance",
    title: "Does Homeowners Insurance Cover Flood Damage in Texas?",
    excerpt: "Flooding is one of the most common and costly disasters in Texas — and most homeowners policies don't cover it. Here's what you need to know about flood insurance and your options in East Texas.",
    readTime: "4 min read",
    href: "/resources/does-homeowners-insurance-cover-flood-damage-texas",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=70",
  },
  {
    category: "Auto Insurance",
    title: "What Happens If You're in an Accident with an Uninsured Driver in Texas?",
    excerpt: "Texas has one of the highest rates of uninsured drivers in the country. Here's what happens if you're in an accident with someone who doesn't have insurance — and how to protect yourself.",
    readTime: "5 min read",
    href: "/resources/uninsured-driver-accident-texas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
  },
  {
    category: "General",
    title: "Independent vs. Captive Insurance Agents: What's the Difference?",
    excerpt: "When you shop for insurance, you'll encounter two types of agents. Understanding the difference can help you make a better decision about where to get your coverage.",
    readTime: "4 min read",
    href: "/resources/independent-vs-captive-insurance-agents",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=70",
  },
  {
    category: "General",
    title: "How to File an Insurance Claim: A Step-by-Step Guide",
    excerpt: "Filing an insurance claim can feel overwhelming — especially when you're already dealing with a stressful situation. Here's a clear, step-by-step guide to help you navigate the process.",
    readTime: "6 min read",
    href: "/resources/how-to-file-insurance-claim-texas",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=70",
  },
];

const categories = ["All", "Home Insurance", "Auto Insurance", "Business Insurance", "Farm & Ranch", "General"];

export default function ResourcesPage() {
  const pageRef = useScrollFadeUp();

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0 4rem" }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Resources</span>
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
              Insurance Resources
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
              Plain-language guides for East Texans
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
              Insurance can be confusing. We write these guides to help you understand your coverage, make better decisions, and know what to do when something goes wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section style={{ backgroundColor: "var(--cream)", padding: "5rem 0" }}>
        <div className="container">
          {/* Category filter (visual only) */}
          <div
            className="fade-up"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "3rem",
            }}
          >
            {categories.map((cat, i) => (
              <span
                key={cat}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  padding: "0.375rem 1rem",
                  borderRadius: "2rem",
                  backgroundColor: i === 0 ? "var(--pine)" : "white",
                  color: i === 0 ? "white" : "oklch(0.45 0.01 250)",
                  border: `1px solid ${i === 0 ? "var(--pine)" : "var(--border)"}`,
                  cursor: "pointer",
                  transition: "background-color 180ms, color 180ms",
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured article */}
          <div
            className="fade-up"
            style={{ marginBottom: "3rem" }}
          >
            <Link
              href={articles[0].href}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                backgroundColor: "white",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                textDecoration: "none",
                transition: "box-shadow 200ms",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.14)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
            >
              <div style={{ padding: "3rem" }}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--amber-brand)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  Featured · {articles[0].category}
                </span>
                <h2
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.625rem",
                    color: "var(--pine)",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                  }}
                >
                  {articles[0].title}
                </h2>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    color: "oklch(0.42 0.01 250)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {articles[0].excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
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
                    Read Article <ArrowRight size={13} />
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "oklch(0.55 0.01 250)" }}>
                    <Clock size={13} />
                    {articles[0].readTime}
                  </span>
                </div>
              </div>
              <div style={{ position: "relative", minHeight: "320px" }}>
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Link>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <Link
                key={article.href}
                href={article.href}
                className="fade-up"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms",
                  transitionDelay: `${i * 50}ms`,
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
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 400ms" }}
                  />
                </div>
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--amber-brand)",
                      marginBottom: "0.625rem",
                      display: "block",
                    }}
                  >
                    {article.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Lora, Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--pine)",
                      lineHeight: 1.35,
                      marginBottom: "0.75rem",
                      flex: 1,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      color: "oklch(0.45 0.01 250)",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {article.excerpt.substring(0, 120)}...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                      Read More <ArrowRight size={12} />
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "oklch(0.55 0.01 250)" }}>
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
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
            Still Have Questions?
          </span>
          <h2
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Talk to a local agent
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.0625rem",
              color: "oklch(0.78 0.01 80)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            Our guides are a starting point. For answers specific to your situation, reach out to a Morrison Insurance agent.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" className="btn-amber">
              Speak with a Local Agent
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-white">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
