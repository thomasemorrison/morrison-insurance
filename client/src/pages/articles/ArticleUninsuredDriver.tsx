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

export default function ArticleUninsuredDriver() {
  useSeoMeta(
    "What Happens If You're in an Accident with an Uninsured Driver in Texas? | Morrison Insurance",
    "Texas has one of the highest rates of uninsured drivers in the country. Here's what happens after an accident with an uninsured driver and how to protect yourself."
  );
  
// Set og:image for social sharing / Metricool
useEffect(() => {
  const setMeta = (prop: string, val: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", val);
  };
  setMeta("og:image", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=70");
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
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Auto Insurance</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>Auto Insurance</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            What Happens If You're in an Accident with an Uninsured Driver in Texas?
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 5 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Texas has one of the highest rates of uninsured drivers in the country — roughly 1 in 8 drivers on the road has no insurance. Here's what happens when you're hit by one of them, and how the right coverage can protect you.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            The Immediate Problem: No Insurance Means No Easy Recovery
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            When a driver with insurance causes an accident, the process is relatively straightforward: you file a claim with their insurance company, and their liability coverage pays for your damages and injuries. When an uninsured driver causes an accident, that process doesn't exist. There's no insurance company to call, no policy to file against.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            You can sue the at-fault driver personally, but that's a slow and often fruitless process. Most uninsured drivers don't have significant assets to recover, which means even a successful lawsuit may not result in meaningful compensation. The practical reality is that without the right coverage on your own policy, you may be left paying out of pocket for an accident that wasn't your fault.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Uninsured Motorist Coverage: Your Primary Protection
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Uninsured Motorist (UM) coverage is the most direct solution to this problem. When you carry UM coverage on your own policy, your insurance company steps in to pay for your damages and injuries when the at-fault driver has no insurance. Underinsured Motorist (UIM) coverage works similarly — it covers the gap when the at-fault driver has insurance, but not enough to cover your full losses.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            In Texas, insurance companies are required to offer UM/UIM coverage, but you can reject it in writing. Many drivers do reject it to save money on their premium — and then discover the hard way why it matters. The cost of UM/UIM coverage is typically very modest relative to the protection it provides.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            UM/UIM coverage typically covers bodily injury — your medical bills, lost wages, and pain and suffering. Some policies also include Uninsured Motorist Property Damage (UMPD), which covers damage to your vehicle. Review your policy carefully to understand exactly what your UM/UIM coverage includes.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What to Do Immediately After an Accident with an Uninsured Driver
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            If you're involved in an accident and the other driver doesn't have insurance, the steps you take immediately after the accident matter. First, call the police and make sure an official report is filed. A police report documenting that the other driver was at fault and uninsured is essential for your insurance claim.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Document everything at the scene: photos of the vehicles, the road conditions, any injuries, and the other driver's information (even if they have no insurance). Get contact information from any witnesses. The more documentation you have, the stronger your claim will be.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Contact your insurance company as soon as possible and let them know the other driver was uninsured. If you have UM coverage, your insurer will guide you through the claims process. Be aware that some UM claims require you to show that the other driver was at fault — the police report and your documentation will be important here.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)" }}>Key Takeaways</span>
            <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", color: "white", marginBottom: "1.5rem" }}>
              What to remember about uninsured drivers in Texas
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Roughly 1 in 8 Texas drivers has no insurance — this is one of the highest rates in the country.",
                "Without UM/UIM coverage, you may be left paying out of pocket for an accident that wasn't your fault.",
                "UM/UIM coverage is required to be offered in Texas — don't reject it to save a few dollars.",
                "Always call the police after an accident with an uninsured driver and get an official report.",
                "Document everything at the scene — photos, witness information, and the other driver's details.",
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
              Make sure you're protected against uninsured drivers
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance can review your current auto policy and make sure you have the UM/UIM coverage you need. We're an independent agency serving Shelby County and East Texas since 1923. Call us or stop by the office on the Center square.
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

      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h3 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1.5rem" }}>Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/resources/texas-auto-insurance-requirements", title: "Texas Auto Insurance Requirements: What You Need to Know", category: "Auto Insurance" },
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
