import ServicePageLayout from "@/components/ServicePageLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Farm and Ranch Insurance",
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
  "description": "Farm and ranch insurance for land, equipment, livestock, and rural properties in Center, TX and Shelby County.",
  "url": "https://morrisoninsurance.com/farm-ranch-insurance"
});

export default function FarmRanchInsurancePage() {
  return (
    <ServicePageLayout
      seoTitle="Farm Ranch Insurance Center TX | Morrison Insurance | Shelby County"
      metaDescription="Farm and ranch insurance for land, equipment, livestock, and rural properties in Center, TX. Independent agency serving Shelby County since 1923."
      heroHeadline="Farm & Ranch Insurance in East Texas — Protecting the Land You Work"
      heroSubheadline="Rural life comes with risks that standard policies weren't designed for. We understand farming and ranching in East Texas, and we help you find coverage that fits the way you actually operate."
      heroSupporting="Farm & Ranch Insurance · East Texas"
      heroImage={HERO_IMAGE}
      trustPoints={[
        "✔ Land, equipment, livestock & rural structures",
        "✔ Multiple carriers — we shop for you",
        "✔ Local agents who understand rural East Texas",
      ]}
      howItWorksHeader="What farm & ranch insurance covers"
      howItWorksIntro="Farm and ranch insurance is designed to protect the unique combination of personal, property, and business risks that come with agricultural operations. Here's what a comprehensive policy typically includes:"
      howItWorksBullets={[
        "Farmhouse and dwelling coverage — protects your home on the property",
        "Farm structures — barns, sheds, equipment buildings, and other outbuildings",
        "Farm equipment — tractors, implements, and machinery",
        "Livestock — cattle, horses, hogs, and other animals",
        "Farm liability — protects against injuries or damage related to your farm operation",
        "Farm products — hay, grain, and other stored commodities",
        "Hired farm workers — coverage for employees working on the operation",
      ]}
      builtForHeader="Coverage built for East Texas farms and ranches"
      builtForIntro="East Texas agriculture has its own character — timber, cattle, horses, row crops, and rural homesteads. We understand the risks that come with working this land."
      builtForBullets={[
        "Cattle and livestock operations",
        "Timber and forestry operations",
        "Horse farms and equine operations",
        "Row crop and hay operations",
        "Rural homesteads with acreage",
        "Hunting leases and rural recreational properties",
        "Part-time and hobby farms",
      ]}
      realScenariosHeader="When farm coverage matters most"
      realScenarios={[
        "A fire destroys your barn and the equipment stored inside — farm structures and equipment coverage pays for the loss.",
        "Lightning strikes and kills several head of cattle — livestock coverage helps replace your loss.",
        "A visitor is injured on your property while hunting — farm liability coverage protects you.",
        "Your tractor is stolen from the field — farm equipment coverage handles the claim.",
        "A severe storm damages your hay crop before harvest — farm products coverage may apply.",
      ]}
      guidanceHeader="What we help you think through"
      guidanceCards={[
        {
          title: "Is your equipment insured for what it would cost to replace?",
          desc: "Farm equipment values have risen significantly. We'll help you make sure your coverage keeps up with current replacement costs.",
        },
        {
          title: "Are your farm workers covered?",
          desc: "If you hire workers — even seasonally — you may have liability exposure. We'll help you understand what coverage you need.",
        },
        {
          title: "Does your policy cover your operation correctly?",
          desc: "Part-time farming, hobby operations, and full commercial farms all have different insurance needs. We'll make sure your policy fits your actual operation.",
        },
      ]}
      whatMostMissHeader="Common gaps in farm & ranch coverage"
      whatMostMissIntro="Farm and ranch operations often have coverage gaps that only become apparent when a loss occurs. Here are the most common ones we see:"
      whatMostMissBullets={[
        "Equipment not insured at current replacement value",
        "Livestock not covered or undervalued",
        "Farm workers not covered — creating liability exposure",
        "Hunting lease liability not addressed",
        "Timber and standing crops not covered",
        "Older structures not listed on the policy",
        "Personal property and farm property mixed up — leaving gaps in both",
      ]}
      shopHeader="We shop multiple carriers for your farm"
      shopBullets={[
        "We compare options from multiple agricultural insurance providers",
        "We understand the difference between farm policies and standard homeowners policies",
        "We help you find coverage that fits your operation — not a generic policy",
        "We review your coverage as your operation changes",
      ]}
      localSeoHeader="Serving farms and ranches across East Texas"
      localSeoBody="We provide farm and ranch insurance to agricultural operations throughout Shelby County and Deep East Texas."
      localSeoList={[
        "Center, TX",
        "Shelby County",
        "Sabine County",
        "Panola County",
        "San Augustine County",
        "Deep East Texas",
      ]}
      faqHeader="Common questions about farm & ranch insurance"
      faqs={[
        {
          q: "Is my farm covered under my homeowners policy?",
          a: "Standard homeowners policies are not designed for farm operations. They typically exclude farm equipment, livestock, and farm liability. A separate farm policy is usually needed.",
        },
        {
          q: "Do I need farm insurance if I only have a few acres?",
          a: "It depends on what you have on the property. Even a small operation with livestock, equipment, or outbuildings may need farm coverage that a standard homeowners policy won't provide.",
        },
        {
          q: "Does farm insurance cover my hunting lease?",
          a: "Hunting lease liability is a specific risk that needs to be addressed in your policy. We'll help you understand what coverage you have and what you might need.",
        },
        {
          q: "What about my horse or horses?",
          a: "Horses can be covered under farm policies, but equine operations often have specific needs — especially for high-value horses or commercial operations. We'll help you find the right coverage.",
        },
        {
          q: "How is farm equipment insured?",
          a: "Farm equipment can be covered on a scheduled basis (specific items listed) or on a blanket basis (all equipment up to a limit). We'll help you decide which approach makes sense for your operation.",
        },
      ]}
      processHeader="How we help you get covered"
      processSteps={[
        "We start with a conversation about your operation — what you have, how you use it, and what risks you face.",
        "We review your current coverage and identify any gaps.",
        "We compare options from multiple farm insurance carriers.",
        "We walk you through the coverage so you understand what you're getting.",
        "We stay in touch as your operation grows and changes.",
      ]}
      finalCtaHeadline="Protect your farm, ranch, and rural property"
      finalCtaSubheadline="Tell us about your operation and we'll help you find coverage that fits — from a local team that understands East Texas agriculture."
      defaultCoverage="farm"
      schemaJson={schema}
      breadcrumbLabel="Farm & Ranch Insurance"
      breadcrumbHref="/farm-ranch-insurance"
    />
  );
}
