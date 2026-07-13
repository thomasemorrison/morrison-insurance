import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import { useSeoMeta } from "@/hooks/useSeoMeta";

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

export default function ArticleSmallBusinessCoverage() {
  useSeoMeta(
    "Does Your Small Business Have the Right Insurance Coverage? | Morrison Insurance",
    "Many small businesses in East Texas are underinsured or have the wrong type of coverage. Here are the most common coverage gaps and how to fix them."
  );
  
// Set og:image for social sharing / Metricool
useEffect(() => {
  const setMeta = (prop: string, val: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", val);
  };
  setMeta("og:image", "/manus-storage/small-business-portrait_ae44be43.jpg");
  setMeta("og:type", "article");
  return () => { setMeta("og:type", "website"); };
}, []);
const pageRef = useScrollFadeUp();

  return (
    <div ref={pageRef}>
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0 4rem" }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} style={{ color: "oklch(0.50 0.01 80)" }} />
            <Link href="/resources" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Resources</Link>
            <ChevronRight size={14} style={{ color: "oklch(0.50 0.01 80)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Business Insurance</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>Business Insurance</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            Does Your Small Business Have the Right Insurance Coverage?
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 6 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Many small businesses in East Texas are either underinsured or carrying the wrong type of coverage. A single lawsuit, fire, or accident can threaten everything you've built. Here are the most common coverage gaps — and how to fix them before something goes wrong.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            The Foundation: General Liability Insurance
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            General liability (GL) insurance is the foundation of any business insurance program. It covers your business if a customer, vendor, or other third party is injured on your property or as a result of your business operations — and it covers the legal costs if they sue you.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            GL also covers property damage you cause to others — if your employee accidentally damages a client's property while on the job, for example. And it covers advertising injury, which includes things like unintentional copyright infringement or defamation in your marketing materials.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Many small businesses in Center and the surrounding area operate without adequate GL coverage — or without any at all. This is a significant risk. A single slip-and-fall lawsuit can result in legal fees and settlements that far exceed what most small businesses can absorb.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Commercial Property: Protecting What You've Built
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Commercial property insurance covers your business's physical assets — the building (if you own it), your equipment, inventory, furniture, and other property. If a fire, storm, theft, or other covered event damages your business property, commercial property insurance pays to repair or replace it.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            One common mistake is underinsuring business property. Business owners often insure their property at its current market value rather than its replacement cost — and then discover after a loss that the payout isn't enough to rebuild or replace what was lost. Make sure your commercial property coverage reflects the actual cost to replace your assets at today's prices.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Business interruption coverage is often bundled with commercial property insurance and is worth understanding. If a covered event forces your business to close temporarily, business interruption coverage pays for lost income and ongoing expenses (like rent and payroll) during the closure. For many small businesses, this coverage is the difference between surviving a disaster and closing permanently.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            The BOP: A Smart Starting Point for Small Businesses
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For many small businesses, a Business Owner's Policy (BOP) is the most efficient way to get core coverage. A BOP bundles general liability and commercial property insurance into a single, usually discounted package. It's designed specifically for small to medium-sized businesses and is often significantly less expensive than purchasing the coverages separately.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            A BOP is a good starting point, but it's not a complete solution for every business. Depending on your industry and operations, you may need additional coverages — commercial auto, workers' compensation, professional liability, or industry-specific endorsements. An independent agent can help you build a complete program that covers your actual risks.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Workers' Compensation: Required and Essential
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Texas is the only state in the country where workers' compensation insurance is not mandatory for most private employers. However, "not required" does not mean "not needed." If you don't carry workers' comp and an employee is injured on the job, you lose the legal protections that workers' comp provides — and you can be sued directly by the injured employee without the usual limitations.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            For businesses in East Texas with employees doing physical work — construction, agriculture, retail, food service — workers' compensation is strongly recommended. The cost of a single serious workplace injury without coverage can be catastrophic for a small business.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)" }}>Key Takeaways</span>
            <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", color: "white", marginBottom: "1.5rem" }}>
              What to remember about small business insurance
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "General liability insurance is the foundation — every business needs it, regardless of size.",
                "Commercial property coverage should reflect replacement cost, not market value.",
                "A Business Owner's Policy (BOP) bundles GL and property coverage at a discount for small businesses.",
                "Texas doesn't require workers' comp, but operating without it creates enormous personal liability.",
                "An independent agent can identify coverage gaps and build a complete program for your specific business.",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--amber-brand)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.82 0.01 80)", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up" style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", borderLeft: "4px solid var(--pine)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "var(--pine)", marginBottom: "0.875rem" }}>
              Protect your business with the right coverage
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance has been protecting East Texas businesses since 1923. We understand the local business landscape and can help you build a coverage program that protects what you've worked to build. Call us or stop by our office on the Center square.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Get a Free Business Quote <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+19365982791">
                <button className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Call (936) 598-2791
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h3 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1.5rem" }}>Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/resources/farm-insurance-vs-homeowners-insurance", title: "Farm Insurance vs. Homeowners Insurance: What's the Difference?", category: "Farm & Ranch" },
              { href: "/resources/independent-vs-captive-insurance-agents", title: "Independent vs. Captive Insurance Agents: What's the Difference?", category: "General" },
            ].map((a) => (
              <Link key={a.href} href={a.href} style={{ textDecoration: "none" }}>
                <div className="fade-up" style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: "3px solid var(--pine)", transition: "transform 200ms, box-shadow 200ms" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; }}
                >
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--amber-brand)" }}>{a.category}</span>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "1rem", color: "var(--pine)", marginTop: "0.5rem", lineHeight: 1.4 }}>{a.title}</p>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--pine)", fontWeight: 600, marginTop: "0.875rem" }}>Read Article <ArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
