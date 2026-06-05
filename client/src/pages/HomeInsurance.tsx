import ServicePageLayout from "@/components/ServicePageLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Insurance",
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
  "description": "Homeowners insurance for homes, mobile homes, lake houses, and rental properties in Center, TX and Shelby County.",
  "url": "https://morrisoninsurance.com/home-insurance"
});

export default function HomeInsurancePage() {
  return (
    <ServicePageLayout
      seoTitle="Home Insurance Center TX | Morrison Insurance | Shelby County"
      metaDescription="Homeowners insurance for homes, mobile homes, lake houses, and rental properties in Center, TX. Independent agency serving Shelby County since 1923."
      heroHeadline="Home Insurance in Center, TX — Protecting What You've Built"
      heroSubheadline="Your home is likely your most valuable asset. We'll help you understand what you have, what you might be missing, and how to make sure you're covered when it matters most."
      heroSupporting="Home Insurance · Center, TX"
      heroImage={HERO_IMAGE}
      trustPoints={[
        "✔ Homes, mobile homes, lake houses & rental properties",
        "✔ Multiple carriers — we shop for you",
        "✔ Local agents who understand East Texas property",
      ]}
      howItWorksHeader="What homeowners insurance actually covers"
      howItWorksIntro="A standard homeowners policy is designed to protect your home, your belongings, and your financial security. Here's what's typically included:"
      howItWorksBullets={[
        "Dwelling coverage — pays to repair or rebuild your home if it's damaged by a covered event",
        "Personal property — covers your belongings inside the home",
        "Liability protection — covers you if someone is injured on your property",
        "Additional living expenses — pays for temporary housing if your home becomes uninhabitable",
        "Other structures — covers fences, sheds, detached garages, and outbuildings",
        "Medical payments — covers minor injuries to guests on your property",
      ]}
      builtForHeader="Coverage built for East Texas homes"
      builtForIntro="East Texas homes face specific risks that require specific coverage. We make sure your policy reflects where you live and how you live."
      builtForBullets={[
        "Wood-frame homes and older construction",
        "Mobile and manufactured homes",
        "Lake houses and vacation properties",
        "Rental properties and landlord coverage",
        "Homes with outbuildings, barns, or sheds",
        "Properties with acreage or rural land",
        "Homes in areas with high wind or storm risk",
        "Homes with older roofs or systems",
      ]}
      realScenariosHeader="When home coverage matters most"
      realScenarios={[
        "A severe thunderstorm damages your roof and causes water damage inside — your policy covers the repair and cleanup.",
        "A tree falls on your garage during a storm — dwelling and other structures coverage handles the damage.",
        "Someone slips and falls on your property and sues you — liability coverage protects your finances.",
        "A fire damages your kitchen and you need to stay in a hotel while repairs are made — additional living expenses coverage pays for it.",
        "Your HVAC system fails and causes water damage — we'll help you understand what's covered and what's not.",
      ]}
      guidanceHeader="What we help you think through"
      guidanceCards={[
        {
          title: "Is your home insured for what it would cost to rebuild?",
          desc: "Many homeowners are underinsured — meaning their coverage wouldn't fully pay to rebuild their home at today's construction costs. We'll help you understand your replacement cost and make sure your coverage keeps up.",
        },
        {
          title: "What about your personal belongings?",
          desc: "Standard policies cover personal property, but limits and exclusions vary. High-value items like jewelry, firearms, or electronics may need additional coverage. We'll walk through what you have.",
        },
        {
          title: "Do you have the right liability coverage?",
          desc: "If someone is injured on your property, liability coverage protects your finances. We'll help you understand how much you need based on your situation.",
        },
      ]}
      whatMostMissHeader="Common gaps in home coverage"
      whatMostMissIntro="Home insurance policies have exclusions and limitations that aren't always obvious. Here are some of the most common gaps we see:"
      whatMostMissBullets={[
        "Coverage limits that haven't kept up with rising construction costs",
        "Flood damage — not covered by standard homeowners policies",
        "Sewer or drain backup — often excluded unless added as an endorsement",
        "High-value personal property not scheduled separately",
        "Home-based business equipment or liability not covered",
        "Outbuildings and structures not listed on the policy",
        "Mobile or manufactured homes requiring specialized coverage",
      ]}
      shopHeader="We shop multiple carriers for your home"
      shopBullets={[
        "We compare options from multiple insurance providers",
        "We look at coverage terms, not just premium price",
        "We explain what's different between policies so you can choose confidently",
        "We review your coverage as your home and situation change",
      ]}
      localSeoHeader="Serving homeowners across Shelby County"
      localSeoBody="We provide home insurance to homeowners throughout Center, TX and the surrounding communities."
      localSeoList={[
        "Center, TX",
        "Shelbyville, TX",
        "Timpson, TX",
        "Joaquin, TX",
        "Tenaha, TX",
        "Shelby County & Deep East Texas",
      ]}
      faqHeader="Common questions about home insurance"
      faqs={[
        {
          q: "Does homeowners insurance cover flood damage?",
          a: "No — standard homeowners policies do not cover flood damage. Flood insurance is purchased separately through the National Flood Insurance Program (NFIP) or private carriers. If you're in a flood-prone area, we can help you explore your options.",
        },
        {
          q: "What's the difference between actual cash value and replacement cost?",
          a: "Actual cash value pays what your property is worth at the time of loss (minus depreciation). Replacement cost pays what it would cost to replace the item new. Replacement cost coverage typically costs more but provides better protection.",
        },
        {
          q: "Does my homeowners insurance cover my mobile home?",
          a: "Standard homeowners policies are not designed for mobile or manufactured homes. These require specialized coverage. We can help you find the right policy for your situation.",
        },
        {
          q: "What if I rent out part of my home or have a rental property?",
          a: "Renting out your home or a property changes your insurance needs. Standard homeowners policies may not cover rental situations. We'll help you understand what landlord or rental property coverage you need.",
        },
        {
          q: "How do I know if I have enough coverage?",
          a: "The most important thing is making sure your dwelling coverage is high enough to rebuild your home at current construction costs. We can walk through your policy and help you identify any gaps.",
        },
      ]}
      processHeader="How we help you get covered"
      processSteps={[
        "We start with a conversation about your home, your situation, and what matters most to you.",
        "We review your current coverage (if you have one) and identify any gaps.",
        "We look at options from multiple carriers and explain the differences.",
        "We walk you through the coverage so you understand what you're getting.",
        "You choose what fits. We handle the paperwork and stay in touch.",
      ]}
      finalCtaHeadline="Get home insurance that protects what you've built"
      finalCtaSubheadline="Tell us about your home and situation, and we'll help you find coverage that makes sense — from a local team that knows East Texas."
      defaultCoverage="home"
      schemaJson={schema}
      breadcrumbLabel="Home Insurance"
      breadcrumbHref="/home-insurance"
    />
  );
}
