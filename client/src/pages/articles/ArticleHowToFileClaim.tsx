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

export default function ArticleHowToFileClaim() {
  useSeoMeta(
    "How to File an Insurance Claim in Texas: A Step-by-Step Guide | Morrison Insurance",
    "Filing an insurance claim doesn't have to be stressful. Here's a clear, step-by-step guide to filing a home, auto, or business insurance claim in Texas."
  );
  
// Set og:image for social sharing / Metricool
useEffect(() => {
  const setMeta = (prop: string, val: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", val);
  };
  setMeta("og:image", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=70");
  setMeta("og:type", "article");
  return () => { setMeta("og:type", "website"); };
}, []);
const pageRef = useScrollFadeUp();

  const steps = [
    {
      number: "01",
      title: "Make sure everyone is safe",
      body: "Before anything else, make sure you and anyone else involved are safe. If there are injuries, call 911 immediately. For auto accidents, move vehicles out of traffic if it's safe to do so. For home damage, make sure the structure is safe to enter before going back inside."
    },
    {
      number: "02",
      title: "Document everything",
      body: "Take photos and videos of all damage before anything is moved, repaired, or cleaned up. For auto accidents, photograph the vehicles, the road, any injuries, and the other driver's license, registration, and insurance card. For home damage, photograph every affected area. The more documentation you have, the stronger your claim."
    },
    {
      number: "03",
      title: "Prevent further damage",
      body: "Your insurance policy requires you to take reasonable steps to prevent further damage after a covered loss. For a roof damaged in a storm, this might mean putting a tarp over the opening. For a broken pipe, it means shutting off the water. Keep receipts for any emergency repairs — these costs are typically reimbursable."
    },
    {
      number: "04",
      title: "Contact your insurance agent",
      body: "Call your agent as soon as possible. If you're a Morrison Insurance client, call us directly — we can help you navigate the claims process, make sure you're filing with the right carrier, and advocate on your behalf. Don't wait to report a claim; most policies have reporting requirements."
    },
    {
      number: "05",
      title: "File the claim with your carrier",
      body: "Your agent will help you file the claim with the insurance company. You'll need to provide basic information about the loss: when it happened, what caused it, and a description of the damage. The carrier will assign a claims adjuster to your case."
    },
    {
      number: "06",
      title: "Work with the adjuster",
      body: "The insurance company will send an adjuster to assess the damage and determine the payout. Be present for the inspection if at all possible, and have your documentation ready. If you disagree with the adjuster's assessment, you have the right to get your own estimate and dispute the finding."
    },
    {
      number: "07",
      title: "Review the settlement offer",
      body: "Once the adjuster completes their assessment, the carrier will make a settlement offer. Review it carefully before accepting. Make sure it covers all the damage you documented, accounts for your deductible correctly, and reflects the actual cost to repair or replace what was lost. Your agent can help you evaluate whether the offer is fair."
    },
    {
      number: "08",
      title: "Complete repairs and close the claim",
      body: "Once you accept the settlement, you can proceed with repairs or replacement. Keep all receipts and records of the repair work. If additional damage is discovered during repairs that wasn't included in the original settlement, contact your adjuster immediately — supplemental claims are common in complex losses."
    },
  ];

  return (
    <div ref={pageRef}>
      <section style={{ backgroundColor: "var(--pine)", padding: "5rem 0 4rem" }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} style={{ color: "oklch(0.50 0.01 80)" }} />
            <Link href="/resources" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Resources</Link>
            <ChevronRight size={14} style={{ color: "oklch(0.50 0.01 80)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Claims Guide</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>Claims Guide</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            How to File an Insurance Claim in Texas: A Step-by-Step Guide
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 7 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Filing an insurance claim can feel overwhelming, especially when you're already dealing with the stress of a loss. Here's a clear, step-by-step guide to filing a home, auto, or business insurance claim in Texas — so you know exactly what to do when it matters most.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {steps.map((step, i) => (
              <div key={i} className="fade-up" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "var(--pine)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "0.875rem", color: "var(--amber-brand)" }}>{step.number}</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.25rem", color: "var(--pine)", marginBottom: "0.625rem" }}>{step.title}</h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Common Claim Mistakes to Avoid
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Waiting too long to report.</strong> Most policies require prompt reporting of a loss. Waiting days or weeks can give the carrier grounds to deny your claim or reduce your payout. Report as soon as possible.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Making permanent repairs before the adjuster visits.</strong> Emergency repairs to prevent further damage are fine and usually reimbursable. But making permanent repairs before the adjuster assesses the damage can complicate your claim. Document everything first.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Accepting the first settlement offer without reviewing it carefully.</strong> Adjusters work for the insurance company. Their first offer isn't always their best offer. Review it carefully, get your own repair estimates, and don't hesitate to negotiate.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            <strong>Not involving your agent.</strong> Your insurance agent is your advocate in the claims process. If you're a Morrison Insurance client, call us when you have a claim — we can help you navigate the process, communicate with the carrier, and make sure you get a fair settlement.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up" style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", borderLeft: "4px solid var(--amber-brand)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "var(--pine)", marginBottom: "0.875rem" }}>
              Morrison Insurance clients: we're here when you need us
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              When you have a claim, the last thing you want is to navigate a complex process alone. Morrison Insurance clients have a local advocate in their corner — someone who knows your policy, knows the carriers, and will work to make sure you get a fair outcome. Call us at (936) 598-2791 or stop by our office on the Center square.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Contact Us <ArrowRight size={16} />
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
              { href: "/resources/what-does-homeowners-insurance-cover-texas", title: "What Does Homeowners Insurance Actually Cover in Texas?", category: "Home Insurance" },
              { href: "/resources/uninsured-driver-accident-texas", title: "What Happens If You're in an Accident with an Uninsured Driver?", category: "Auto Insurance" },
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
