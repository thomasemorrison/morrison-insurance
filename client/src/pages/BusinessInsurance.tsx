import ServicePageLayout from "@/components/ServicePageLayout";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663724333063/2Zjkej9iz9N4rHr7kWB8aN/business-hero-SWMKpw9qKWkJetZJKCXE8v.webp";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Insurance",
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
  "description": "Business insurance for contractors, restaurants, retail, and small businesses in Center, TX and Shelby County.",
  "url": "https://morrisoninsurance.com/business-insurance"
});

export default function BusinessInsurancePage() {
  return (
    <ServicePageLayout
      seoTitle="Business Insurance Center TX | Morrison Insurance | Shelby County"
      metaDescription="Business insurance for contractors, restaurants, retail shops, and small businesses in Center, TX. Independent agency serving Shelby County since 1923."
      heroHeadline="Business Insurance in Center, TX — Protecting What You've Built"
      heroSubheadline="Running a business in East Texas takes hard work. We help protect it with coverage that fits your operation — from a local team that understands the risks you face."
      heroSupporting="Business Insurance · Center, TX"
      heroImage={HERO_IMAGE}
      trustPoints={[
        "✔ Contractors, restaurants, retail & professional services",
        "✔ Multiple carriers — we shop for you",
        "✔ Local agents who know East Texas business",
      ]}
      howItWorksHeader="What business insurance covers"
      howItWorksIntro="Business insurance is not one-size-fits-all. The right coverage depends on your industry, your size, and your specific risks. Here are the core coverages most businesses need:"
      howItWorksBullets={[
        "General liability — protects against claims of bodily injury or property damage caused by your business",
        "Commercial property — covers your building, equipment, and inventory",
        "Business interruption — replaces lost income if you can't operate after a covered loss",
        "Commercial auto — covers vehicles used for business purposes",
        "Workers' compensation — required in Texas for most employers with employees",
        "Professional liability — protects service businesses against claims of errors or negligence",
        "Umbrella/excess liability — additional protection above your standard limits",
      ]}
      builtForHeader="Coverage built for East Texas businesses"
      builtForIntro="East Texas businesses face a unique set of risks. We understand the local economy and help make sure your coverage fits your operation."
      builtForBullets={[
        "Contractors and tradespeople (HVAC, plumbing, electrical, construction)",
        "Restaurants, cafes, and food service operations",
        "Retail shops and service businesses",
        "Professional service providers",
        "Trucking and transportation businesses",
        "Timber and logging operations",
        "Oil and gas related businesses",
        "Home-based businesses",
      ]}
      realScenariosHeader="When business coverage matters most"
      realScenarios={[
        "A customer slips and falls in your store — general liability covers the medical bills and legal costs.",
        "A fire damages your building and you can't operate for two months — business interruption coverage replaces your lost income.",
        "One of your employees is injured on the job — workers' comp covers their medical bills and lost wages.",
        "A client claims your work caused them financial harm — professional liability protects you from the lawsuit.",
        "Your commercial vehicle is in an accident — commercial auto coverage handles the damage and liability.",
      ]}
      guidanceHeader="What we help you think through"
      guidanceCards={[
        {
          title: "Do you have the right liability limits?",
          desc: "Many small businesses carry minimum liability limits that aren't enough to cover a serious claim. We'll help you understand what level of protection makes sense for your business.",
        },
        {
          title: "Are your vehicles covered correctly?",
          desc: "Personal auto policies typically don't cover vehicles used for business. If your employees drive their own vehicles for work, you may need hired and non-owned auto coverage.",
        },
        {
          title: "What happens if you can't operate?",
          desc: "Business interruption coverage is often overlooked — but it's what keeps your business financially afloat when a covered loss forces you to close temporarily.",
        },
      ]}
      whatMostMissHeader="Common gaps in business coverage"
      whatMostMissIntro="Business owners often discover coverage gaps at the worst possible time — when they need to file a claim. Here are the most common ones we see:"
      whatMostMissBullets={[
        "No business interruption coverage — leaving you without income during a closure",
        "Personal auto policy used for business vehicles — which may not cover business use",
        "Employees driving personal vehicles for work without hired/non-owned auto coverage",
        "Inadequate liability limits for the size of the business",
        "No workers' compensation — even when legally required",
        "Home-based business equipment and liability not covered by homeowners policy",
        "Cyber liability — increasingly important for businesses that handle customer data",
      ]}
      shopHeader="We shop multiple carriers for your business"
      shopBullets={[
        "We compare options from multiple business insurance providers",
        "We look at coverage terms and exclusions, not just premium",
        "We help you understand what you're comparing",
        "We review your coverage as your business grows and changes",
      ]}
      localSeoHeader="Serving businesses across Shelby County"
      localSeoBody="We provide business insurance to companies throughout Center, TX and the surrounding area."
      localSeoList={[
        "Center, TX",
        "Shelbyville, TX",
        "Timpson, TX",
        "Joaquin, TX",
        "Tenaha, TX",
        "Shelby County & Deep East Texas",
      ]}
      faqHeader="Common questions about business insurance"
      faqs={[
        {
          q: "Do I need business insurance if I work from home?",
          a: "Yes — homeowners policies typically don't cover business equipment or business-related liability. Even home-based businesses need some form of business insurance.",
        },
        {
          q: "Is workers' compensation required in Texas?",
          a: "Texas is unique — it doesn't require most private employers to carry workers' comp. However, if you don't have it and an employee is injured, you're exposed to significant liability. We'll help you understand your options.",
        },
        {
          q: "What's the difference between general liability and professional liability?",
          a: "General liability covers bodily injury and property damage caused by your business operations. Professional liability (also called E&O) covers claims that your professional advice or services caused financial harm to a client.",
        },
        {
          q: "Does my business insurance cover my employees' vehicles?",
          a: "Not automatically. If employees use their personal vehicles for work, you may need hired and non-owned auto coverage. We'll help you make sure your policy addresses this.",
        },
        {
          q: "How much does business insurance cost?",
          a: "It depends on your industry, size, revenue, and coverage needs. We'll help you find coverage that fits your budget without leaving you exposed.",
        },
      ]}
      processHeader="How we help you get covered"
      processSteps={[
        "We start with a conversation about your business — what you do, how many employees you have, and what risks you face.",
        "We identify the coverages you need and any gaps in your current coverage.",
        "We compare options from multiple carriers and explain the differences.",
        "We walk you through the coverage so you understand what you're getting.",
        "We stay in touch as your business grows and your needs change.",
      ]}
      finalCtaHeadline="Protect your business with coverage that fits"
      finalCtaSubheadline="Tell us about your business and we'll help you find the right coverage — from a local team that understands East Texas."
      defaultCoverage="business"
      schemaJson={schema}
      breadcrumbLabel="Business Insurance"
      breadcrumbHref="/business-insurance"
    />
  );
}
