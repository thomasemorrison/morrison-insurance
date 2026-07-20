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

export default function ArticleCarInsuranceQuotesCenterTx() {
  useSeoMeta(
    "How to Get Car Insurance Quotes in Center, TX | Morrison Insurance",
    "Looking for car insurance quotes in Center, TX? Morrison Insurance has served Shelby County since 1923. Get a free, no-pressure quote from a local independent agent who knows East Texas."
  );
  useEffect(() => {
    const setMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", val);
    };
    setMeta("og:image", "https://morrison-ins.net/manus-storage/car-insurance-quotes-center-tx-portrait_4d76811a.jpg");
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
            backgroundImage: "url(/manus-storage/car-insurance-quotes-center-tx-portrait_4d76811a.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
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
            How to Get Car Insurance Quotes in Center, TX — And Why Working with a Local Agent Makes All the Difference
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 5 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Getting a car insurance quote used to mean sitting across a desk from someone you trusted — someone who knew your family, knew the roads you drove, and could give you a straight answer. In Center, TX, that kind of relationship still exists.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What You Need to Get a Car Insurance Quote
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The quoting process is straightforward, and most people can complete it in a single conversation. Before you call or stop by, it helps to have the following on hand:
          </p>
          <ul className="fade-up" style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Your driver's license number and the license numbers of any other drivers in your household",
              "Your vehicle's year, make, model, and VIN (found on your registration or on the dashboard near the windshield)",
              "Your current insurance policy, if you have one — this helps your agent match or improve your existing coverage",
              "Your address and how many miles you drive each year",
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
            That is genuinely all it takes to get started. There are no lengthy online forms, no automated phone trees, and no pressure to decide on the spot.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Why Independent Agents Offer More Options
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            When you call a captive insurance company — one of the large national brands — you are getting a quote from exactly one carrier. The agent works for that company and can only offer you that company's products. If their rates are not competitive for your situation, there is nothing they can do for you.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Morrison Insurance is an independent agency. That means we work with multiple insurance carriers and can compare rates and coverage options across all of them on your behalf. When you ask us for a car insurance quote, we are shopping the market for you — not selling you a single product.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            For drivers in Center and Shelby County, this matters. East Texas has its own risk profile: rural roads, deer crossings, severe weather, and a mix of newer vehicles and older farm trucks. Not every carrier prices that risk the same way. An independent agent who knows this area can find the carrier that treats your specific situation most favorably.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Affects Your Car Insurance Rate in Texas
          </h2>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              { title: "Your driving record", body: "The most significant factor. A clean record with no accidents or violations typically qualifies you for the best available rates. Most carriers look back three to five years." },
              { title: "Your vehicle", body: "Newer vehicles with advanced safety features often qualify for discounts, but they also cost more to repair, which affects comprehensive and collision premiums. Older vehicles may warrant dropping collision coverage entirely if the vehicle's value no longer justifies the premium." },
              { title: "Where you live and how much you drive", body: "Drivers in rural Shelby County generally pay less than drivers in Houston or Dallas, but your annual mileage and whether you use your vehicle for business purposes will also factor in." },
              { title: "Your coverage selections", body: "Liability limits, deductibles, and optional coverages like uninsured motorist and roadside assistance all affect your final premium. Your agent can walk you through what each option means in plain language." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderLeft: "3px solid var(--amber-brand)" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--pine)", marginBottom: "0.5rem" }}>{item.title}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What to Expect When You Call Morrison Insurance
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            When you contact us for a quote, you will speak with someone who works here — not a call center in another state. We will ask you a few questions, explain your options clearly, and give you a quote that reflects what you actually need. If we can save you money compared to what you are currently paying, we will tell you. If your current coverage is already competitive, we will tell you that too.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Morrison Insurance has been a part of the Center community for over a century. We are not trying to sell you something — we are trying to make sure you and your family are protected at a price that makes sense.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up" style={{ backgroundColor: "oklch(0.22 0.06 155)", borderRadius: "0.75rem", padding: "2.5rem", borderLeft: "4px solid var(--amber-brand)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "white", marginBottom: "0.875rem" }}>
              Ready to get started?
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Call us or stop by our office at 125 Shelbyville St. in Center. We are here Monday through Friday and happy to answer any questions before you decide anything.
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
              { href: "/resources/auto-insurance-center-tx", title: "Auto Insurance in Center, TX — What Shelby County Drivers Need to Know", category: "Auto Insurance" },
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
