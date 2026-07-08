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

export default function ArticleIndependentVsCaptive() {
  useSeoMeta(
    "Independent vs. Captive Insurance Agents: What's the Difference? | Morrison Insurance",
    "An independent insurance agent works for you, not for a single insurance company. Here's why that matters for East Texas families and businesses shopping for coverage."
  );
  
// Set og:image for social sharing / Metricool
useEffect(() => {
  const setMeta = (prop: string, val: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
    el.setAttribute("content", val);
  };
  setMeta("og:image", "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=70");
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
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>General</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>General</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            Independent vs. Captive Insurance Agents: What's the Difference?
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 5 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            When you buy insurance, who is your agent actually working for? The answer to that question has a significant impact on the coverage you get and the price you pay. Here's the difference between independent and captive agents — and why it matters for East Texas families and businesses.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Is a Captive Agent?
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            A captive agent works exclusively for one insurance company. State Farm agents, Allstate agents, Farmers agents — these are all captive agents. They can only sell you products from the company they represent. If that company's rates are competitive for your situation, great. If they're not, a captive agent has no other options to offer you.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Captive agents often work hard for their clients and know their company's products well. But their loyalty is fundamentally divided — they work for the insurance company, not for you. When you have a claim, when you need coverage advice, or when you're wondering if you're getting the best rate, a captive agent can only tell you what their one company offers.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Is an Independent Agent?
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            An independent agent — like Morrison Insurance — represents multiple insurance companies. We're not employed by any single carrier. Instead, we have contracts with a range of carriers and can shop your coverage across all of them to find the best combination of coverage and price for your specific situation.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This independence is the key advantage. When your circumstances change — you buy a new car, add a teen driver, start a business, buy more land — an independent agent can re-shop your coverage across multiple carriers to make sure you're still getting the best deal. A captive agent can only adjust your coverage within their one company's offerings.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            Independent agents also tend to have deeper roots in their local communities. We're not a national call center — we're your neighbors. When you call Morrison Insurance, you talk to someone who knows Center, knows Shelby County, and knows the specific risks and needs of families and businesses in this part of East Texas.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            The Practical Difference: Shopping vs. Settling
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Insurance rates vary significantly between carriers — sometimes by hundreds of dollars per year for the same coverage. The carrier that's cheapest for one family may be the most expensive for another, depending on factors like age, driving history, home construction, and location.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            When you work with an independent agent, you get the benefit of having someone shop those rates on your behalf. Instead of calling five different companies yourself, your agent does that work for you — and presents you with the best options. This is especially valuable when your situation is complex: a farm with multiple vehicles, a business with employees, or a home with unique features.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            The other practical advantage is continuity. If one carrier raises your rates significantly at renewal, an independent agent can move your coverage to a different carrier without you having to start the shopping process from scratch. Your relationship stays with your agent — not with any particular insurance company.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Morrison Insurance: 100 Years of Independent Service in East Texas
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Morrison Insurance has been an independent agency in Center, Texas since 1923. For over a century, we've served Shelby County families and businesses as their trusted insurance advisors — not as representatives of any single insurance company.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8 }}>
            That independence means we work for you. When you have a claim, we advocate for you with the carrier. When your rates go up, we shop alternatives on your behalf. When your life changes, we make sure your coverage keeps pace. That's what a local, independent agent does — and it's what we've been doing in this community for four generations.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)" }}>Key Takeaways</span>
            <div style={{ width: "3rem", height: "3px", backgroundColor: "var(--amber-brand)", margin: "0.75rem 0 1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", color: "white", marginBottom: "1.5rem" }}>
              Independent vs. captive: the bottom line
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Captive agents work for one company — they can only offer that company's products.",
                "Independent agents represent multiple carriers and shop your coverage to find the best fit.",
                "Insurance rates vary significantly between carriers — shopping matters.",
                "Independent agents stay with you when carriers change — your relationship is with your agent.",
                "Local independent agents know your community's specific risks and needs.",
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
              Experience the difference of an independent agent
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance has been serving East Texas as an independent agency since 1923. Let us shop your coverage across multiple carriers and find the best protection at the best price for your family or business.
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
              { href: "/resources/what-does-homeowners-insurance-cover-texas", title: "What Does Homeowners Insurance Actually Cover in Texas?", category: "Home Insurance" },
              { href: "/resources/texas-auto-insurance-requirements", title: "Texas Auto Insurance Requirements: What You Need to Know", category: "Auto Insurance" },
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
