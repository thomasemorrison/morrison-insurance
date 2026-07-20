import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Clock } from "lucide-react";
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

export default function ArticleAutoInsuranceCenterTx() {
  useSeoMeta(
    "Auto Insurance in Center, TX — What Shelby County Drivers Need to Know | Morrison Insurance",
    "Auto insurance in Center, TX from a local independent agency serving Shelby County since 1923. Morrison Insurance compares multiple carriers to find the right coverage at the right price."
  );
  useEffect(() => {
    const setMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", val);
    };
    setMeta("og:image", "https://morrison-ins.net/manus-storage/auto-insurance-center-tx-portrait_a89331da.jpg");
    setMeta("og:type", "article");
    return () => { setMeta("og:type", "website"); };
  }, []);
  const pageRef = useScrollFadeUp();
  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "380px",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/manus-storage/auto-insurance-center-tx-portrait_a89331da.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, oklch(0.12 0.05 155 / 0.92) 0%, oklch(0.12 0.05 155 / 0.65) 50%, oklch(0.12 0.05 155 / 0.30) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: "5rem" }}>
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} style={{ color: "oklch(0.50 0.01 80)" }} />
            <Link href="/resources" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Resources</Link>
            <ChevronRight size={14} style={{ color: "oklch(0.50 0.01 80)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Auto Insurance</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>Auto Insurance</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            Auto Insurance in Center, TX — What Shelby County Drivers Need to Know
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 5 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Finding the right auto insurance in Center, TX is not just about finding the cheapest rate. It is about making sure you are actually protected when something goes wrong — and that you have someone you can call who knows your name and your situation.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Texas Law Requires
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Texas requires all drivers to carry a minimum level of liability insurance. The state minimum is commonly referred to as 30/60/25 coverage:
          </p>
          <ul className="fade-up" style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "$30,000 per person for bodily injury",
              "$60,000 per accident for bodily injury",
              "$25,000 per accident for property damage",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--amber-brand)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            These minimums represent the least you are legally required to carry — not necessarily the amount that will fully protect you in a serious accident. Medical costs and vehicle repair costs in Texas have risen significantly in recent years, and a serious collision can easily exceed these limits. Many families in Shelby County choose higher liability limits to ensure they are not personally responsible for costs that exceed their policy.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Coverage Options Worth Considering in East Texas
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Beyond the state minimum, there are several coverage options that are particularly relevant for drivers in this part of Texas.
          </p>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              { title: "Uninsured and underinsured motorist coverage", body: "Protects you if you are hit by a driver who has no insurance or whose coverage is not sufficient to cover your damages. Texas has a meaningful percentage of uninsured drivers, and this coverage can be the difference between a manageable situation and a financial hardship." },
              { title: "Comprehensive coverage", body: "Pays for damage to your vehicle that is not caused by a collision — including hail, flooding, fire, theft, and deer strikes. East Texas drivers know that deer on rural roads are a genuine hazard, particularly in the fall months. Comprehensive coverage is typically inexpensive relative to the protection it provides." },
              { title: "Collision coverage", body: "Pays for damage to your vehicle when you are in an accident, regardless of fault. Whether it makes sense for your vehicle depends on the vehicle's value relative to the premium and deductible. Your agent can help you think through that calculation." },
              { title: "Roadside assistance", body: "A modest add-on that can be genuinely valuable for drivers who regularly travel rural roads in Shelby County and the surrounding area, where a breakdown can mean a long wait." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderLeft: "3px solid var(--amber-brand)" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--pine)", marginBottom: "0.5rem" }}>{item.title}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Why Working with a Local Independent Agent Matters
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Morrison Insurance is an independent agency, which means we work with multiple insurance carriers rather than representing just one company. When you ask us for an auto insurance quote, we compare rates and coverage options across our carrier partners and present you with the options that best fit your situation.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This matters because insurance pricing varies significantly from carrier to carrier, and the company that is most competitive for one driver may not be the best option for another. Factors like your driving record, your vehicle, your address, and your coverage selections all affect how different carriers price your policy. An independent agent does that comparison work for you.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Beyond the quote, what you get with a local agency is continuity. When you have a claim, you call someone who knows you. When your situation changes — a new vehicle, a teenager added to the policy, a move — you have an agent who can adjust your coverage accordingly and make sure you are not paying for something you no longer need or missing something you do.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Getting Started
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Getting an auto insurance quote from Morrison Insurance takes about fifteen minutes. You will need your driver's license, your vehicle information, and your current policy if you have one. There is no obligation and no pressure — just a clear explanation of your options and a quote that reflects what you actually need.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up" style={{ backgroundColor: "oklch(0.22 0.06 155)", borderRadius: "0.75rem", padding: "2.5rem", borderLeft: "4px solid var(--amber-brand)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "white", marginBottom: "0.875rem" }}>
              Get a free auto insurance quote in Center, TX
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance has been serving East Texas as an independent agency since 1923. Call us or stop by — we will compare your options across multiple carriers and find the coverage that fits your situation.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-amber" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Get a Free Quote <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+19365982791">
                <button className="btn-white" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Call (936) 598-2791
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h3 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1.5rem" }}>Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/resources/car-insurance-quotes-center-tx", title: "How to Get Car Insurance Quotes in Center, TX", category: "Auto Insurance" },
              { href: "/resources/car-insurance-agents-center-tx", title: "Car Insurance Agents in Center, TX — What to Look For", category: "Auto Insurance" },
              { href: "/resources/car-insurance-companies-center-tx", title: "How to Compare Car Insurance Companies in Center, TX", category: "Auto Insurance" },
              { href: "/auto-insurance", title: "Auto Insurance in Center, TX — Morrison Insurance", category: "Service Page" },
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
