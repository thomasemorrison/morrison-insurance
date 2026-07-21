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

const HERO_IMAGE = "/manus-storage/screwworm-east-texas-cattle-portrait_f2681b22.jpg";

export default function ArticleScrewwormTexas() {
  useSeoMeta(
    "New World Screwworm in Texas: What East Texas Livestock Owners and Landowners Need to Know | Morrison Insurance",
    "41 confirmed screwworm infestations in Texas as of July 2026. Here's what the outbreak means for East Texas ranchers, landowners, and pet owners — and what to watch for."
  );
  useEffect(() => {
    const setMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", val);
    };
    setMeta("og:image", `https://morrison-ins.net${HERO_IMAGE}`);
    setMeta("og:type", "article");
    return () => { setMeta("og:type", "website"); };
  }, []);
  const pageRef = useScrollFadeUp();

  const animalRisks = [
    { animal: "Cattle", note: "Primary concern for ranchers — especially calves, animals after branding or dehorning, and cows after calving" },
    { animal: "Horses", note: "Any open wound, including minor cuts from fencing or brush" },
    { animal: "Sheep & Goats", note: "Particularly vulnerable due to frequent wounds from shearing and horn management" },
    { animal: "White-tailed Deer", note: "Major concern for East Texas landowners — deer are highly susceptible and cannot be treated easily in the wild" },
    { animal: "Dogs & Cats", note: "Less common but documented — inspect pets with outdoor access regularly" },
    { animal: "Pigs", note: "Including feral hogs, which could serve as a reservoir in the wild" },
  ];

  const warningSigns = [
    "Unusual wounds that are growing larger or appear to have larvae inside them",
    "Animals that are restless, off feed, or separating themselves from the herd",
    "A strong, distinctive odor coming from a wound",
    "Visible maggots in a wound — screwworm larvae are cream-colored, about 1/3 inch long, and burrow head-first into tissue",
    "Wounds that are not healing normally, especially around the navel in newborns",
  ];

  const preventionSteps = [
    { title: "Inspect livestock regularly", body: "During peak fly season (warm months), walk your pastures and check animals at least every few days. Pay particular attention to animals with fresh wounds from branding, castration, dehorning, or calving." },
    { title: "Treat all wounds promptly", body: "Any open wound is a potential entry point. Clean and treat wounds immediately and apply an approved fly repellent. Work with your veterinarian to identify the right products for your operation." },
    { title: "Time procedures carefully", body: "If possible, avoid elective procedures like branding and dehorning during peak fly season. If timing is not flexible, have a wound treatment protocol in place before you start." },
    { title: "Know your veterinarian's contact information", body: "If you suspect screwworm, time matters. Have your vet's number accessible and know the protocol for reporting suspected cases to the Texas Animal Health Commission." },
    { title: "Report suspicious wounds immediately", body: "Call your veterinarian and the TAHC at 1-800-550-8242. Do not wait. Early reporting helps contain the outbreak and protects your neighbors." },
  ];

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
            backgroundImage: `url(${HERO_IMAGE})`,
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
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>New World Screwworm</span>
          </nav>
          <div className="fade-up">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-brand)", backgroundColor: "oklch(0.22 0.06 155)", padding: "0.25rem 0.75rem", borderRadius: "2rem" }}>Farm &amp; Ranch</span>
          </div>
          <h1 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "800px", transitionDelay: "80ms" }}>
            New World Screwworm in Texas: What East Texas Livestock Owners and Landowners Need to Know
          </h1>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1.25rem", transitionDelay: "160ms" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)" }}>
              <Clock size={14} /> 6 min read
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.55 0.01 80)" }}>Morrison Insurance · Center, TX</span>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "680px", transitionDelay: "240ms" }}>
            Forty-one confirmed infestations. Twenty-one counties under movement restrictions. A flesh-eating parasite not seen in the United States in decades is back — and it's moving north through Texas.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ backgroundColor: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>

          {/* Status callout */}
          <div className="fade-up" style={{ backgroundColor: "oklch(0.97 0.03 80)", border: "1px solid oklch(0.85 0.06 80)", borderLeft: "4px solid var(--amber-brand)", borderRadius: "0.5rem", padding: "1.5rem", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.45 0.08 80)", marginBottom: "0.75rem" }}>Current Status — July 2026</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {[
                <><strong>41</strong> confirmed infestations in the U.S. (40 Texas, 1 New Mexico)</>,
                <><strong>21</strong> Texas counties under livestock movement restrictions</>,
                <>All southern ports of entry <strong>closed to livestock trade</strong></>,
                <>No confirmed cases in East Texas or Shelby County as of July 2026</>,
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.35 0.05 80)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--amber-brand)", fontWeight: 700, flexShrink: 0 }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "oklch(0.55 0.05 80)", marginTop: "0.875rem" }}>
              Source: USDA APHIS dashboard, updated daily —{" "}
              <a href="https://www.aphis.usda.gov/animals/animal-health/livestock-and-poultry-disease/current-status" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)", textDecoration: "underline" }}>aphis.usda.gov</a>
            </p>
          </div>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Is Happening Right Now
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            On June 3, 2026, the U.S. Department of Agriculture confirmed the first New World screwworm infestation in the United States since the parasite was eradicated decades ago. By July 16, that number had grown to 41 confirmed infestations — 40 in Texas and one in New Mexico — with 21 Texas counties under livestock movement restrictions.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The outbreak began in South Texas near the Mexico border and has been moving north and west. Confirmed cases have been found in counties including Jim Hogg, Starr, Brewster, Sutton, and Pecos. The Texas Animal Health Commission and USDA are conducting daily surveillance and have closed all southern ports of entry to livestock trade.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            No confirmed cases have been reported in East Texas or Shelby County as of this writing. But the parasite is capable of spreading 100 to 150 miles per month without intervention, and state and federal officials are urging all Texas livestock owners and landowners to be vigilant now — before it arrives.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What Is the New World Screwworm?
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Despite the name, the New World screwworm is not a worm. It is the larval stage of a fly — <em>Cochliomyia hominivorax</em> — that lays its eggs in open wounds or natural body openings of warm-blooded animals. Within hours, the eggs hatch and the larvae begin feeding on living tissue. Unlike common maggots, which feed on dead or decaying matter, screwworm larvae burrow deeper into living flesh, causing wounds to grow rapidly and become infected. Without treatment, an infestation can kill an animal.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            The United States eradicated screwworm in the 1960s and 1970s using a technique called the sterile insect method — releasing millions of sterile male flies so that female flies, which mate only once, produce no offspring. That program was one of the most successful pest eradication efforts in agricultural history. The parasite remained present in parts of Central and South America, and the current outbreak is believed to have re-entered through the southern border.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Which Animals Are at Risk
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Any warm-blooded animal with an open wound is vulnerable. For East Texas, the animals of greatest concern are:
          </p>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {animalRisks.map(({ animal, note }) => (
              <div key={animal} style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: "3px solid var(--pine)" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--pine)", marginBottom: "0.375rem" }}>{animal}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.45 0.01 250)", lineHeight: 1.65, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            The Texas Wildlife Association has specifically flagged white-tailed deer as a high-risk population in Texas. Deer cannot be easily treated in the wild, and a widespread infestation in wildlife populations would be extremely difficult to contain. East Texas landowners with hunting leases or wildlife management programs should be paying close attention.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What to Watch For
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Early detection is the most important tool available to ranchers and landowners right now. If you see any of the following signs in your livestock, pets, or harvested game, contact a veterinarian or report it to the Texas Animal Health Commission immediately:
          </p>
          <ul className="fade-up" style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {warningSigns.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "oklch(0.55 0.12 30)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What East Texas Ranchers and Landowners Can Do Now
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The outbreak is still primarily in South and West Texas, but the window for preparation is now. Here is what agricultural professionals are recommending:
          </p>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {preventionSteps.map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderLeft: "3px solid var(--amber-brand)" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--pine)", marginBottom: "0.5rem" }}>{item.title}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.40 0.01 250)", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            What This Means for Farm and Ranch Insurance
          </h2>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Farm and ranch insurance policies vary widely in what they cover when it comes to livestock losses. Some policies include coverage for livestock mortality from disease or infestation; others do not, or include it only as an endorsement. If you have livestock and are not certain what your current policy covers, now is a good time to review it.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The same applies to hunting lease liability coverage. If you have a hunting lease on your property and deer or other wildlife on your land are affected, understanding your liability exposure is worth a conversation with your agent.
          </p>
          <p className="fade-up" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "oklch(0.35 0.01 250)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Morrison Insurance works with farm and ranch clients across Shelby County and Deep East Texas. If you have questions about what your current coverage includes, or if you want to review your policy before the outbreak moves closer, we are happy to take a look.
          </p>

          <h2 className="fade-up" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--pine)", marginBottom: "1.25rem" }}>
            Where to Get More Information
          </h2>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              { label: "USDA APHIS — Current Status Dashboard", href: "https://www.aphis.usda.gov/animals/animal-health/livestock-and-poultry-disease/current-status" },
              { label: "Texas Animal Health Commission — Screwworm Resources", href: "https://www.tahc.texas.gov" },
              { label: "TAHC Livestock Movement Restriction Map", href: "https://tahc.maps.arcgis.com/apps/instant/nearby/index.html?appid=8455917e956b474f995cc3b94d3ef54b&sliderDistance=1" },
              { label: "Report suspected cases: TAHC hotline — 1-800-550-8242", href: "tel:18005508242" },
            ].map((link, i) => (
              <a key={i} href={link.href} target={link.href.startsWith("tel") ? undefined : "_blank"} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "var(--pine)", textDecoration: "none", padding: "0.875rem 1.25rem", backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", transition: "box-shadow 180ms" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
              >
                <ArrowRight size={14} style={{ color: "var(--amber-brand)", flexShrink: 0 }} />
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div className="fade-up" style={{ backgroundColor: "oklch(0.22 0.06 155)", borderRadius: "0.75rem", padding: "2.5rem", borderLeft: "4px solid var(--amber-brand)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.375rem, 2vw, 1.75rem)", color: "white", marginBottom: "0.875rem" }}>
              Questions about your farm or ranch coverage?
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "oklch(0.78 0.01 80)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Morrison Insurance has been serving Shelby County ranchers and landowners since 1923. If you want to review what your current policy covers — or if you are looking for farm and ranch coverage for the first time — we are here to help.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact">
                <button className="btn-amber" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Talk to a Local Agent <ArrowRight size={16} />
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
              { href: "/resources/farm-insurance-vs-homeowners-insurance", title: "Farm Insurance vs. Homeowners Insurance: What's the Difference?", category: "Farm & Ranch" },
              { href: "/resources/hunting-lease-liability-insurance-east-texas", title: "Hunting Lease Liability Insurance in East Texas", category: "Farm & Ranch" },
              { href: "/resources/storm-damage-home-east-texas", title: "What to Do After a Storm Damages Your Home in East Texas", category: "Home Insurance" },
              { href: "/resources/what-does-homeowners-insurance-cover-texas", title: "What Does Homeowners Insurance Actually Cover in Texas?", category: "Home Insurance" },
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
