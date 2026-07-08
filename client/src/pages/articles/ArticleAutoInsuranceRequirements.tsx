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

export default function ArticleAutoInsuranceRequirements() {
  useSeoMeta(
    "Texas Auto Insurance Requirements: What You Need to Know | Morrison Insurance",
    "Texas requires minimum liability insurance for all drivers, but those minimums may not be enough. Here's what the law requires and what we recommend for drivers in Shelby County and East Texas."
  );
  
// Set og:image for social sharing / Metricool
useEffect(() => {
  const setMeta = (prop: string, val: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", val);
  };
  setMeta("og:image", "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=70");
  setMeta("og:type", "article");
  return () => { setMeta("og:type", "website"); };
}, []);
const pageRef = useScrollFadeUp();

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0 4rem" }}>
        <div className="container">
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
            Texas Auto Insurance Requirements: What You Need to Know
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 4 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Texas requires all drivers to carry minimum liability insurance — but those minimums may not be enough to protect you. Here's what the law requires and what we recommend for drivers in Shelby County and across East Texas.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            The 30/60/25 Rule: Texas Minimum Liability Coverage
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Texas law requires every driver to carry at least the following liability coverage, commonly referred to as 30/60/25:
          </p>
          <ul className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.75rem" }}><strong>$30,000</strong> per person for bodily injury liability</li>
            <li style={{ marginBottom: "0.75rem" }}><strong>$60,000</strong> per accident for bodily injury liability (total for all injured parties)</li>
            <li><strong>$25,000</strong> per accident for property damage liability</li>
          </ul>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            These numbers represent the maximum your insurance company will pay if you cause an accident. Anything above those limits comes out of your own pocket — and in today's world, a serious accident can easily exceed $30,000 in medical bills alone. That's why most insurance professionals recommend carrying significantly higher limits than the state minimum.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Why the Minimums Often Aren't Enough
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Texas minimum liability limits were set decades ago and haven't kept pace with the actual cost of accidents. A single trip to the emergency room can run $20,000 or more. If multiple people are injured, or if someone requires surgery or long-term care, $60,000 won't come close to covering the total bills. The injured parties can then sue you personally for the remainder.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            We typically recommend that East Texas drivers carry at least 100/300/100 in liability coverage — $100,000 per person, $300,000 per accident, and $100,000 for property damage. The difference in premium is usually modest, and the protection is dramatically better. If you have significant assets, an umbrella policy on top of your auto coverage is worth considering as well.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Beyond Liability: Coverage Worth Adding
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Liability coverage only pays for damage you cause to others. To protect yourself and your vehicle, you'll want to consider additional coverages:
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Uninsured/Underinsured Motorist (UM/UIM) coverage</strong> pays for your injuries and damages if you're hit by a driver who has no insurance or not enough insurance. Texas has one of the highest rates of uninsured drivers in the country — roughly one in eight drivers on the road has no coverage. UM/UIM is one of the most valuable coverages you can add and is often very affordable.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Collision coverage</strong> pays to repair or replace your vehicle after an accident, regardless of who's at fault. <strong>Comprehensive coverage</strong> covers non-collision events — theft, vandalism, hail, deer strikes, and other hazards that are unfortunately common on East Texas rural roads.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            <strong>Personal Injury Protection (PIP)</strong> covers your medical expenses and lost wages after an accident, regardless of fault. In Texas, insurers are required to offer PIP, though you can reject it in writing. For most drivers, keeping PIP is a smart decision.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Penalties for Driving Uninsured in Texas
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Driving without insurance in Texas is not just financially risky — it carries real legal consequences. A first offense can result in fines ranging from $175 to $350. Subsequent offenses carry fines up to $1,000, and your vehicle can be impounded. You'll also be required to file an SR-22 certificate with the state, which typically results in significantly higher insurance premiums for three years.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Beyond the legal penalties, the financial exposure of being uninsured in an at-fault accident is enormous. A serious accident could result in a lawsuit that puts your savings, home, and future wages at risk. The cost of proper auto insurance is almost always far less than the cost of going without.
          </p>
        </div>
      </section>

      {/* Key Takeaways */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)" }}>Key Takeaways</span>
            <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", color: "white", marginBottom: "1.5rem" }}>
              What to remember about Texas auto insurance
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Texas requires minimum 30/60/25 liability coverage — but these limits are often not enough for a serious accident.",
                "We recommend at least 100/300/100 in liability coverage for most East Texas drivers.",
                "Uninsured motorist coverage is essential — roughly 1 in 8 Texas drivers has no insurance.",
                "Driving uninsured can result in fines, impoundment, and an SR-22 requirement.",
                "An independent agent can compare rates across multiple carriers to find the best coverage for your situation.",
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

      {/* Local CTA */}
      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up" style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", borderLeft: "4px solid var(--pine)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "var(--pine)", marginBottom: "0.875rem" }}>
              Get the right auto coverage in Center, TX
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance has been helping Shelby County drivers find the right auto coverage since 1923. As an independent agency, we compare rates from multiple carriers to make sure you're getting the best protection at the best price. Call us or stop by the office on the Center square.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Get a Free Quote <ArrowRight size={16} />
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

      {/* Related Articles */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h3 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1.5rem" }}>Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/resources/accident-uninsured-driver-texas", title: "What Happens If You're in an Accident with an Uninsured Driver in Texas?", category: "Auto Insurance" },
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
