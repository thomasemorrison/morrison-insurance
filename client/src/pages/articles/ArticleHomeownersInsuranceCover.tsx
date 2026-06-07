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

export default function ArticleHomeownersInsuranceCover() {
  useSeoMeta(
    "What Does Homeowners Insurance Actually Cover in Texas? | Morrison Insurance",
    "A plain-language breakdown of Texas homeowners insurance coverage — what's included, what's excluded, and what East Texas homeowners should watch for. Serving Center, TX since 1923."
  );
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
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Home Insurance</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>Home Insurance</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            What Does Homeowners Insurance Actually Cover in Texas?
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 5 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Most homeowners have a general idea of what their policy covers — but the details matter. Here's a plain-language breakdown of what's included, what's excluded, and what East Texas homeowners should pay close attention to when reviewing their coverage.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            The Four Core Coverages in a Standard Policy
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            A standard homeowners insurance policy — what the industry calls an HO-3 — is actually a bundle of four separate protections. Understanding each one helps you know exactly what you're paying for and where you might have gaps.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Dwelling coverage</strong> protects the physical structure of your home — the walls, roof, floors, built-in appliances, and attached structures like a garage. If a covered event damages or destroys your house, dwelling coverage pays to repair or rebuild it up to your policy limit. For East Texas homeowners, it's critical that this limit reflects the actual cost to rebuild your home today, not what you paid for it years ago.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Personal property coverage</strong> protects your belongings — furniture, clothing, electronics, tools, and more — if they're damaged, destroyed, or stolen. Most policies cover your belongings at "actual cash value," which accounts for depreciation. Upgrading to "replacement cost value" means you'll receive enough to buy a comparable new item, which is almost always worth the additional premium.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            <strong>Liability coverage</strong> protects you if someone is injured on your property or if you accidentally damage someone else's property. It covers legal fees and settlements up to your policy limit. Given how litigious our society has become, many homeowners are underinsured here — standard policies often start at $100,000, but $300,000 or more is a much safer threshold for most families.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Additional Living Expenses: The Coverage People Forget
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            If a covered event makes your home temporarily uninhabitable, Additional Living Expenses (ALE) coverage — sometimes called "loss of use" — pays for hotel stays, restaurant meals, and other costs above your normal living expenses while your home is being repaired. This coverage is more valuable than most people realize until they actually need it.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            After a major storm or fire, repairs can take weeks or even months. ALE coverage ensures that a disaster doesn't force your family into financial hardship on top of the stress of displacement. Check your policy to understand the daily and total limits — and make sure they're realistic for your area.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Homeowners Insurance Does NOT Cover in Texas
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This is where many homeowners get caught off guard. Standard policies have significant exclusions that are worth knowing before you need to file a claim.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Flood damage</strong> is not covered by a standard homeowners policy — full stop. This is one of the most common misconceptions in insurance. If a river overflows its banks, a storm surge rolls through, or heavy rain causes surface flooding, your homeowners policy will not pay for the damage. You need a separate flood insurance policy, either through the National Flood Insurance Program (NFIP) or a private carrier. Given the flooding history in East Texas and the Toledo Bend area, this is not a coverage gap you want to have.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Earthquake damage</strong> is also excluded from standard policies. While Texas isn't known for seismic activity, it's worth noting if you're near areas with injection well activity.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            <strong>Normal wear and tear</strong> and maintenance-related damage — a roof that's simply aged out, a water heater that rusts through, or a foundation that settles over time — are not covered. Insurance is designed to protect against sudden, accidental losses, not gradual deterioration. Keeping up with home maintenance is the best way to avoid claim denials.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Texas-Specific Considerations: Wind, Hail, and the TWIA
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Texas homeowners face weather risks that are different from much of the country. Hail and wind damage are among the most common claims in the state, and most standard policies do cover these perils — but the deductible structure can be different. Many Texas policies have a separate, higher deductible specifically for wind and hail damage, often expressed as a percentage of your dwelling coverage rather than a flat dollar amount.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            It's also worth reviewing your policy annually. Construction costs in East Texas have risen significantly in recent years, and if your dwelling coverage limit hasn't kept pace, you could find yourself underinsured after a major loss. An independent agent can help you review your coverage limits and make sure they reflect today's rebuilding costs — not what they were five years ago.
          </p>
        </div>
      </section>

      {/* Key Takeaways */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)" }}>Key Takeaways</span>
            <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
            <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", color: "white", marginBottom: "1.5rem" }}>
              What to remember about Texas homeowners insurance
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "A standard HO-3 policy covers your dwelling, personal property, liability, and additional living expenses.",
                "Flood damage is never covered by a standard homeowners policy — you need a separate flood policy.",
                "Texas policies often have a separate wind/hail deductible — know yours before storm season.",
                "Review your dwelling coverage limit annually to make sure it reflects current rebuilding costs.",
                "An independent agent can compare multiple carriers to find the best coverage at the best price for your specific home.",
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
            <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "var(--pine)", marginBottom: "0.875rem" }}>
              Talk to a local agent in Center, TX
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance has been helping Shelby County homeowners find the right coverage since 1923. We're an independent agency, which means we shop multiple carriers to find the best fit for your home and your budget. Give us a call or stop by our office on the Center square.
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
          <h3 className="fade-up" style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1.5rem" }}>Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/resources/does-homeowners-insurance-cover-flood-damage-texas", title: "Does Homeowners Insurance Cover Flood Damage in Texas?", category: "Home Insurance" },
              { href: "/resources/independent-vs-captive-insurance-agents", title: "Independent vs. Captive Insurance Agents: What's the Difference?", category: "General" },
            ].map((a) => (
              <Link key={a.href} href={a.href} style={{ textDecoration: "none" }}>
                <div className="fade-up" style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: "3px solid var(--pine)", transition: "transform 200ms, box-shadow 200ms" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; }}
                >
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--amber-brand)" }}>{a.category}</span>
                  <p style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 600, fontSize: "1rem", color: "var(--pine)", marginTop: "0.5rem", lineHeight: 1.4 }}>{a.title}</p>
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
