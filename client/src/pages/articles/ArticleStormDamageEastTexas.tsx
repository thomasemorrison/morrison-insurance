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

const HERO_IMAGE = "/manus-storage/storm-damage-east-texas-home-portrait_a041da8e.jpg";
const ARTICLE_SLUG = "storm-damage-home-east-texas";
const ARTICLE_URL = `https://morrison-ins.net/resources/${ARTICLE_SLUG}`;
const PUBLISH_DATE = "July 21, 2026";
const PUBLISH_DATE_ISO = "2026-07-21";

const RELATED = [
  {
    href: "/resources/does-homeowners-insurance-cover-flood-damage-texas",
    title: "Does Homeowners Insurance Cover Flood Damage in Texas?",
    category: "Home Insurance",
    readTime: "5 min read",
  },
  {
    href: "/resources/how-to-file-insurance-claim-texas",
    title: "How to File an Insurance Claim in Texas: A Step-by-Step Guide",
    category: "Claims",
    readTime: "5 min read",
  },
  {
    href: "/resources/what-does-homeowners-insurance-cover-texas",
    title: "What Does Homeowners Insurance Actually Cover in Texas?",
    category: "Home Insurance",
    readTime: "5 min read",
  },
  {
    href: "/resources/why-is-homeowners-insurance-going-up-texas",
    title: "Why Is My Texas Homeowners Insurance Going Up?",
    category: "Home Insurance",
    readTime: "5 min read",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Make sure it's safe to enter",
    body: "Before you go back inside or walk the property, confirm the structure is safe. Look for downed power lines, gas leaks (smell or hissing), foundation cracks, or walls that appear to be leaning. If there's any doubt, stay out and call your utility company and local emergency services first. No documentation is worth a serious injury.",
  },
  {
    num: "02",
    title: "Document everything before you clean up",
    body: "This is the most important step most homeowners skip. Before you move a single piece of debris or cover a damaged roof, take photos and video of every affected area — exterior, interior, roof, fencing, outbuildings, vehicles, and personal property. Walk the entire property. The more documentation you have before cleanup begins, the stronger your claim will be.",
  },
  {
    num: "03",
    title: "Make temporary repairs to prevent further damage",
    body: "Your policy requires you to take reasonable steps to prevent additional damage after a covered loss. This means covering a damaged roof with a tarp, boarding up broken windows, or pumping out standing water. Save every receipt for materials and labor — these costs are typically reimbursable. Do not make permanent repairs until your adjuster has inspected the property.",
  },
  {
    num: "04",
    title: "Contact your insurance company",
    body: "Call your agent or carrier as soon as possible to report the loss. Most policies require prompt notification. Have your policy number ready, and be prepared to describe the damage in general terms. Your agent can help you understand your coverage, your deductible, and what to expect from the claims process.",
  },
  {
    num: "05",
    title: "Document your additional living expenses",
    body: "If your home is uninhabitable and you need to stay in a hotel or rent temporary housing, keep all receipts. Most homeowners policies include Additional Living Expenses (ALE) coverage, which reimburses reasonable costs for temporary housing, meals, and other expenses above your normal living costs while your home is being repaired.",
  },
  {
    num: "06",
    title: "Meet with the adjuster — and know your rights",
    body: "Your insurance company will send an adjuster to inspect the damage. You have the right to be present during the inspection. Walk the property with the adjuster and point out every item of damage you documented. If you disagree with the adjuster's assessment, you can request a re-inspection, hire a public adjuster, or invoke the appraisal process outlined in your policy.",
  },
  {
    num: "07",
    title: "Get independent repair estimates",
    body: "Don't rely solely on the insurance company's estimate. Get at least two independent estimates from licensed contractors. If the estimates are significantly higher than the insurance offer, share them with your adjuster and ask for a supplemental claim review. Contractors experienced with insurance claims can often help identify items the adjuster may have missed.",
  },
];

const FLOOD_NOTES = [
  "Standard homeowners insurance does NOT cover flooding — including storm surge, overflowing rivers, or water that enters from the ground up.",
  "Flood damage requires a separate flood insurance policy, typically through the National Flood Insurance Program (NFIP) or a private flood carrier.",
  "If your home flooded and you don't have flood insurance, contact FEMA at DisasterAssistance.gov — federal disaster assistance may be available if your county is under a disaster declaration.",
  "Governor Abbott issued a disaster declaration for Texas counties affected by the July 2026 severe storms. Check DisasterAssistance.gov to see if Shelby County is included.",
];

export default function ArticleStormDamageEastTexas() {
  useSeoMeta(
    "What to Do After a Storm Damages Your Home in East Texas | Morrison Insurance",
    "A step-by-step guide for East Texas homeowners after a severe storm or flooding event — what to document, who to call, and how to work with your insurance company."
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, oklch(0.12 0.04 240 / 0.90) 0%, oklch(0.12 0.04 240 / 0.55) 45%, oklch(0.12 0.04 240 / 0.15) 100%)",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-sans mb-4 transition-colors"
            style={{ color: "oklch(0.82 0.03 80)", textDecoration: "none" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-sans font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                color: "var(--amber-brand)",
                backgroundColor: "oklch(0.18 0.04 80 / 0.6)",
                border: "1px solid oklch(0.55 0.12 80 / 0.4)",
              }}
            >
              Home Insurance
            </span>
            <span className="flex items-center gap-1 text-xs font-sans" style={{ color: "oklch(0.75 0.02 80)" }}>
              <Clock size={12} />
              6 min read
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1rem",
              maxWidth: "720px",
            }}
          >
            What to Do After a Storm Damages Your Home in East Texas
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.0625rem",
              color: "oklch(0.85 0.02 80)",
              lineHeight: 1.65,
              maxWidth: "600px",
              marginBottom: "1.25rem",
            }}
          >
            A step-by-step guide for East Texas homeowners after a severe storm or flooding event — what to document, who to call, and how to work with your insurance company.
          </p>
          <div className="flex items-center gap-3 text-sm font-sans" style={{ color: "oklch(0.72 0.02 80)" }}>
            <span>Morrison Insurance Agency</span>
            <span>·</span>
            <time dateTime={PUBLISH_DATE_ISO}>{PUBLISH_DATE}</time>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container" style={{ maxWidth: "760px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        {/* Intro */}
        <section className="fade-up mb-10">
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "var(--stone-800, #292524)",
              marginBottom: "1.25rem",
            }}
          >
            East Texas got hit hard in July 2026. Governor Abbott issued a disaster declaration for counties affected by the severe storms and flooding, and homeowners across the region are dealing with the aftermath — damaged roofs, fallen trees, flooded rooms, and the complicated process of filing an insurance claim.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "var(--stone-800, #292524)",
              marginBottom: "1.25rem",
            }}
          >
            If your home was damaged, the steps you take in the first 24 to 72 hours matter more than most people realize. This guide walks through what to do, in order, so you don't miss anything that could affect your claim.
          </p>
        </section>

        {/* Flood Warning Box */}
        <section className="fade-up mb-10">
          <div
            className="rounded-lg px-6 py-5"
            style={{
              backgroundColor: "oklch(0.97 0.02 240)",
              border: "1px solid oklch(0.82 0.06 240)",
              borderLeft: "4px solid oklch(0.55 0.15 240)",
            }}
          >
            <p className="text-sm font-sans font-semibold uppercase tracking-wide mb-3" style={{ color: "oklch(0.35 0.12 240)" }}>
              Important: Flood Damage Is Different
            </p>
            <ul className="space-y-2">
              {FLOOD_NOTES.map((note, i) => (
                <li key={i} className="flex gap-2 text-sm font-sans" style={{ color: "oklch(0.28 0.08 240)" }}>
                  <span style={{ color: "oklch(0.55 0.15 240)", fontWeight: 700, marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step-by-step */}
        <section className="fade-up mb-12">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "var(--pine)",
              marginBottom: "1.5rem",
            }}
          >
            Seven Steps After Storm Damage
          </h2>
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-sans font-bold"
                  style={{
                    backgroundColor: "oklch(0.96 0.04 155)",
                    color: "var(--pine)",
                    border: "1.5px solid oklch(0.82 0.08 155)",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--pine)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "oklch(0.32 0.02 80)",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What your adjuster is looking for */}
        <section className="fade-up mb-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "var(--pine)",
              marginBottom: "1rem",
            }}
          >
            What Your Adjuster Will Be Looking For
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "oklch(0.32 0.02 80)",
              marginBottom: "1rem",
            }}
          >
            Insurance adjusters are trained to assess damage quickly and efficiently. Understanding what they're evaluating helps you present your claim more effectively.
          </p>
          <div className="overflow-x-auto mb-4">
            <table
              className="w-full text-sm font-sans border-collapse"
              style={{ borderRadius: "0.5rem", overflow: "hidden" }}
            >
              <thead>
                <tr style={{ backgroundColor: "oklch(0.96 0.04 155)" }}>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--pine)", border: "1px solid oklch(0.88 0.06 155)" }}>
                    Damage Type
                  </th>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--pine)", border: "1px solid oklch(0.88 0.06 155)" }}>
                    What to Document
                  </th>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--pine)", border: "1px solid oklch(0.88 0.06 155)" }}>
                    Common Issues
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roof damage", "Photos from ground level and, if safe, from the roof. Date-stamped if possible.", "Pre-existing wear vs. storm damage — document condition before the storm if you can."],
                  ["Wind damage", "Broken windows, damaged siding, missing shutters, fence damage, outbuildings.", "Adjusters look for consistent wind direction patterns across the damage."],
                  ["Fallen trees", "Photos of the tree, the point of impact, and all structural damage caused.", "Coverage depends on whether the tree damaged a covered structure — a tree in the yard alone may not be covered."],
                  ["Interior water damage", "Ceiling stains, damaged flooring, wet insulation, affected personal property.", "Distinguish between rain intrusion (covered) and ground-up flooding (not covered by standard policy)."],
                  ["Personal property", "Itemized list with photos. Serial numbers where available.", "High-value items (jewelry, electronics, firearms) may have sub-limits — check your policy."],
                ].map(([type, doc, issue]) => (
                  <tr key={type} style={{ borderBottom: "1px solid oklch(0.92 0.02 80)" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "var(--pine)", border: "1px solid oklch(0.92 0.02 80)" }}>{type}</td>
                    <td className="px-4 py-3" style={{ color: "oklch(0.35 0.02 80)", border: "1px solid oklch(0.92 0.02 80)" }}>{doc}</td>
                    <td className="px-4 py-3" style={{ color: "oklch(0.45 0.04 80)", border: "1px solid oklch(0.92 0.02 80)" }}>{issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Watch out for storm chasers */}
        <section className="fade-up mb-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "var(--pine)",
              marginBottom: "1rem",
            }}
          >
            Watch Out for Storm Chasers
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "oklch(0.32 0.02 80)",
              marginBottom: "1rem",
            }}
          >
            After a major storm, out-of-town contractors show up quickly — sometimes door to door within hours of the event. Some are legitimate. Many are not. Texas law requires contractors to be licensed, and storm-chasing contractors have been known to do substandard work, collect insurance payments, and disappear before the job is finished.
          </p>
          <div
            className="rounded-lg px-6 py-5"
            style={{
              backgroundColor: "oklch(0.98 0.02 80)",
              border: "1px solid oklch(0.88 0.04 80)",
            }}
          >
            <p className="text-sm font-sans font-semibold mb-3" style={{ color: "oklch(0.35 0.06 80)" }}>
              Before signing anything with a contractor:
            </p>
            <ul className="space-y-2">
              {[
                "Verify their Texas contractor license at tdlr.texas.gov",
                "Ask for a physical address — not just a phone number",
                "Do not sign an Assignment of Benefits (AOB) — this transfers your insurance rights to the contractor",
                "Get the full scope of work in writing before any work begins",
                "Never pay the full amount upfront — a reasonable deposit is normal, full payment is not",
                "Check reviews and ask neighbors or your agent for local referrals",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm font-sans" style={{ color: "oklch(0.38 0.04 80)" }}>
                  <span style={{ color: "var(--amber-brand)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* If your claim is denied or underpaid */}
        <section className="fade-up mb-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "var(--pine)",
              marginBottom: "1rem",
            }}
          >
            If Your Claim Is Denied or You Disagree with the Settlement
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "oklch(0.32 0.02 80)",
              marginBottom: "1rem",
            }}
          >
            A claim denial or a settlement offer that doesn't cover your actual costs is not necessarily the end of the road. Texas homeowners have several options:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              { label: "Request a re-inspection", body: "Ask your insurance company to send a different adjuster or a supervisor to re-examine the damage. New documentation or a second look sometimes changes the outcome." },
              { label: "File a complaint with TDI", body: "The Texas Department of Insurance handles complaints against insurance companies. If you believe your claim was mishandled, you can file at tdi.texas.gov." },
              { label: "Hire a public adjuster", body: "A public adjuster works for you — not the insurance company — and can help negotiate a higher settlement. They typically charge a percentage of the claim payout." },
              { label: "Invoke the appraisal process", body: "Most Texas homeowners policies include an appraisal clause that allows both sides to hire independent appraisers to determine the loss amount. This is often faster and less expensive than litigation." },
              { label: "Consult an attorney", body: "If you believe your claim was wrongfully denied or handled in bad faith, a Texas insurance attorney can advise you on your options. Many work on contingency for insurance disputes." },
            ].map((item) => (
              <li key={item.label} className="flex gap-3">
                <ChevronRight
                  size={18}
                  className="flex-shrink-0 mt-1"
                  style={{ color: "var(--amber-brand)" }}
                />
                <div>
                  <span className="font-semibold font-sans text-sm" style={{ color: "var(--pine)" }}>{item.label}: </span>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "1rem", lineHeight: 1.75, color: "oklch(0.35 0.02 80)" }}>{item.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to action */}
        <section className="fade-up mb-12">
          <div
            className="rounded-xl px-6 py-7"
            style={{
              background: "linear-gradient(135deg, oklch(0.18 0.06 155) 0%, oklch(0.22 0.07 155) 100%)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Questions about your coverage?
            </h3>
            <p
              className="mb-5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9375rem",
                color: "oklch(0.85 0.02 80)",
                lineHeight: 1.65,
              }}
            >
              If you're not sure what your homeowners policy covers — or you want to review your coverage before the next storm season — Morrison Insurance is here to help. We've been serving Shelby County since 1923.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-all"
              style={{
                backgroundColor: "var(--amber-brand)",
                color: "oklch(0.15 0.04 80)",
                textDecoration: "none",
              }}
            >
              Talk to a Local Agent
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="fade-up">
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.375rem",
              color: "var(--pine)",
              marginBottom: "1.5rem",
            }}
          >
            Related Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RELATED.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block rounded-lg p-4 transition-all group"
                style={{
                  border: "1px solid oklch(0.88 0.04 155)",
                  backgroundColor: "oklch(0.98 0.015 155)",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-xs font-sans font-semibold uppercase tracking-widest block mb-1.5"
                  style={{ color: "var(--amber-brand)" }}
                >
                  {article.category}
                </span>
                <span
                  className="text-sm font-sans font-medium leading-snug block mb-2 group-hover:underline"
                  style={{ color: "var(--pine)" }}
                >
                  {article.title}
                </span>
                <span className="flex items-center gap-1 text-xs font-sans" style={{ color: "oklch(0.58 0.04 155)" }}>
                  <Clock size={11} />
                  {article.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
