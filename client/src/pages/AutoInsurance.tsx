import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Insurance in Center, TX",
  "provider": {
    "@type": "InsuranceAgency",
    "name": "Morrison Insurance",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "125 Shelbyville St.",
      "addressLocality": "Center",
      "addressRegion": "TX",
      "postalCode": "75935"
    }
  },
  "areaServed": "Shelby County, TX",
  "description": "Local car insurance and auto coverage guidance for drivers in Center, TX and Shelby County.",
  "url": "https://morrison-ins.net/auto-insurance"
});

const relatedArticles = [
  { href: "/resources/auto-insurance-center-tx", title: "Texas Auto Insurance Requirements for Center, TX Drivers", desc: "A plain-language guide to state minimums, coverage choices, and questions to ask before comparing policies." },
  { href: "/resources/car-insurance-quotes-center-tx", title: "How to Get Car Insurance Quotes in Center, TX", desc: "What to have ready, what to watch for, and how to compare quotes without getting lost in the details." },
  { href: "/resources/car-insurance-agents-center-tx", title: "Car Insurance Agents in Center, TX — What to Look For", desc: "The difference between an independent agent and a captive agent, and why it matters for your options." },
  { href: "/resources/car-insurance-companies-center-tx", title: "How to Compare Car Insurance Companies in Center, TX", desc: "A practical guide to evaluating your options — coverage, price, service, and what most people overlook." },
];

export default function AutoInsurancePage() {
  return (
    <div>
      <ServicePageLayout
        seoTitle="Car Insurance in Center, TX | Morrison Insurance"
        metaDescription="Looking for car insurance in Center, TX? Morrison Insurance is an independent local agency serving Shelby County drivers with plain-language help comparing auto coverage options."
        heroHeadline="Car Insurance in Center, TX — Local Auto Coverage for Shelby County Drivers"
        heroSubheadline="Whether you are commuting to work, hauling equipment, or heading to the lake, compare auto coverage options in plain language with a local team."
        heroSupporting="Car Insurance · Center, TX"
        heroImage={HERO_IMAGE}
        trustPoints={[
          "✔ Cars, trucks, motorcycles, boats & recreational vehicles",
          "✔ Multiple carriers — we shop for you",
          "✔ Local agents who know East Texas roads",
        ]}
        howItWorksHeader="What auto insurance actually covers"
        howItWorksIntro="Auto insurance is more than just a legal requirement — it's what protects you, your passengers, and your finances when something goes wrong. Here's what a standard policy typically includes:"
        howItWorksBullets={[
          "Liability coverage — pays for damage or injuries you cause to others",
          "Collision coverage — pays to repair or replace your vehicle after an accident",
          "Comprehensive coverage — covers theft, weather damage, hitting a deer, and more",
          "Uninsured/underinsured motorist — protects you when the other driver doesn't have enough coverage",
          "Medical payments — helps cover medical bills for you and your passengers",
          "Roadside assistance and rental reimbursement — optional but often worth it",
        ]}
        builtForHeader="Coverage built for how East Texans drive"
        builtForIntro="East Texas roads and lifestyles are different from what you'll find in the city. We understand that, and we help make sure your coverage reflects it."
        builtForBullets={[
          "Long rural commutes on county roads",
          "Trucks and work vehicles used for business and personal use",
          "Boats, jet skis, and lake vehicles",
          "ATVs, UTVs, and off-road vehicles",
          "Motorcycles and recreational vehicles",
          "Teen drivers and multi-vehicle households",
          "High deer-collision risk areas",
          "Vehicles used for farming or ranching",
        ]}
        realScenariosHeader="When auto coverage matters most"
        realScenarios={[
          "You hit a deer on a rural county road — comprehensive coverage may be relevant, depending on the policy, deductible, and loss details.",
          "Another driver runs a red light and totals your truck — their liability may be responsible, but it helps to know what applies if they are uninsured or underinsured.",
          "Your teenage driver gets into a fender-bender — we help you understand how it affects your policy and what to do next.",
          "Your boat trailer comes loose on the highway — we'll help you understand what's covered and how to file.",
          "Hail damages your vehicle during a storm — review your policy, deductible, and claim options before assuming what applies.",
        ]}
        guidanceHeader="What we help you think through"
        guidanceCards={[
          {
            title: "How much coverage do you actually need?",
            desc: "State minimums are often not enough. We'll walk through your situation and help you understand what level of protection makes sense.",
          },
          {
            title: "What's the right deductible for you?",
            desc: "Higher deductibles mean lower premiums — but only if you can afford the out-of-pocket cost when something happens. We'll help you find the right balance.",
          },
          {
            title: "Are all your vehicles covered correctly?",
            desc: "Vehicles used for business, hauling, or farming often need different coverage than a standard personal auto policy. We'll make sure nothing falls through the cracks.",
          },
        ]}
        whatMostMissHeader="Common gaps in auto coverage"
        whatMostMissIntro="Most people don't realize what their policy doesn't cover until they need it. Here are some of the most common gaps we see:"
        whatMostMissBullets={[
          "State minimum liability limits that aren't enough to cover a serious accident",
          "No uninsured motorist coverage — leaving you exposed when the other driver has no insurance",
          "Gap coverage — if you owe more on your vehicle than it's worth, you could be stuck with the difference",
          "Recreational vehicles not listed on the policy",
          "Business use of a personal vehicle not covered",
          "Teen drivers added without reviewing the full policy impact",
        ]}
        shopHeader="We shop multiple carriers to find the right fit"
        shopBullets={[
          "We compare options from multiple insurance providers",
          "We look at coverage, not just price",
          "We explain the differences so you can make an informed decision",
          "We review your policy regularly to make sure it still fits",
        ]}
        localSeoHeader="Car insurance for Center and Shelby County"
        localSeoBody="If you are comparing car insurance in Center, it helps to look at the same limits, deductibles, and vehicles on every quote. We help drivers across Shelby County understand those choices in plain language."
        localSeoList={[
          "Center, TX",
          "Shelbyville, TX",
          "Timpson, TX",
          "Joaquin, TX",
          "Tenaha, TX",
          "Shelby County & Deep East Texas",
        ]}
        faqHeader="Common questions about auto insurance"
        faqs={[
          {
            q: "How much auto insurance do I need in Texas?",
            a: "Texas requires minimum liability coverage of 30/60/25 (bodily injury and property damage). However, these minimums are often not enough to cover a serious accident. We'll help you understand what level of coverage makes sense for your situation.",
          },
          {
            q: "Does my auto insurance cover my boat or ATV?",
            a: "Standard auto policies typically don't cover boats, ATVs, or other recreational vehicles. These usually need separate policies or endorsements. We'll make sure everything is covered correctly.",
          },
          {
            q: "What happens if I'm in an accident with an uninsured driver?",
            a: "If you have uninsured motorist coverage, your policy will help cover your damages. Without it, you may have to pay out of pocket or pursue the other driver directly. We strongly recommend this coverage.",
          },
          {
            q: "Does my personal auto policy cover my vehicle if I use it for work?",
            a: "It depends on how you use it. Occasional business use may be covered, but regular business use — like hauling equipment or making deliveries — often requires a commercial auto policy. We'll help you figure out what you need.",
          },
          {
            q: "How can I lower my auto insurance premium?",
            a: "There are several ways — bundling with home insurance, raising your deductible, maintaining a clean driving record, and making sure you're not paying for coverage you don't need. We'll walk through your options.",
          },
          {
            q: "How do I compare car insurance rates in Center, TX?",
            a: "Ask for quotes using the same liability limits, deductibles, drivers, and vehicles so you are comparing like with like. Then check what is included, such as uninsured motorist coverage or roadside assistance. Texas also offers HelpInsure, a public comparison resource; its results are informational and not a final quoted rate or policy language.",
          },
        ]}
        processHeader="How we help you get covered"
        processSteps={[
          "We start with a conversation — what do you drive, how do you use it, and what matters most to you?",
          "We look at options from multiple carriers and explain the differences clearly.",
          "We walk you through the coverage so you understand what you're getting.",
          "You choose what fits. We handle the rest.",
          "We're here when you need to make a change or file a claim.",
        ]}
        finalCtaHeadline="Get auto insurance that fits your life"
        finalCtaSubheadline="Tell us about your vehicles and situation, and we'll help you find coverage that makes sense — without the runaround."
        defaultCoverage="auto"
        schemaJson={schema}
        breadcrumbLabel="Auto Insurance"
        breadcrumbHref="/auto-insurance"
      />
      {/* Related Articles */}
      <section style={{ backgroundColor: "var(--cream-dark)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.5rem", color: "var(--pine)", marginBottom: "0.5rem" }}>Related Reading</h3>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.45 0.01 250)", marginBottom: "2rem" }}>Helpful guides for drivers in Center, TX and Shelby County.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((a) => (
              <Link key={a.href} href={a.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ backgroundColor: "white", borderRadius: "0.5rem", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: "3px solid var(--pine)", transition: "transform 200ms, box-shadow 200ms", height: "100%" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; }}
                >
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "1.0625rem", color: "var(--pine)", lineHeight: 1.4, marginBottom: "0.625rem" }}>{a.title}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.45 0.01 250)", lineHeight: 1.6, marginBottom: "0.875rem" }}>{a.desc}</p>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--pine)", fontWeight: 600 }}>Read Article <ArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
