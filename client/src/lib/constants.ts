// Morrison Insurance — Shared Constants
// Design: Modern Heritage / New American Vernacular

export const BRAND = {
  name: "Morrison Insurance",
  tagline: "Local roots. Grounded in community.",
  subTagline: "Serving East Texans since 1923",
  founded: 1923,
  phone: "(936) 598-2791",
  phoneHref: "tel:+19365982791",
  email: "hello@morrisoninsurance.com",
  emailHref: "mailto:hello@morrisoninsurance.com",
  address: {
    street: "125 Shelbyville St.",
    city: "Center",
    state: "TX",
    zip: "75935",
    full: "125 Shelbyville St., Center, TX 75935",
  },
  social: {
    facebook: "https://www.facebook.com/morrisoninsurance",
    instagram: "https://www.instagram.com/morrisoninsurance",
  },
  serviceAreas: [
    "Center, TX",
    "Shelby County",
    "Shelbyville",
    "Timpson",
    "Joaquin",
    "Tenaha",
    "Deep East Texas",
  ],
};

export const NAV_LINKS = [
  {
    label: "Coverage",
    href: "#",
    children: [
      { label: "Auto Insurance", href: "/auto-insurance" },
      { label: "Home Insurance", href: "/home-insurance" },
      { label: "Business Insurance", href: "/business-insurance" },
      { label: "Farm & Ranch", href: "/farm-ranch-insurance" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  { label: "Auto Insurance", href: "/auto-insurance" },
  { label: "Home Insurance", href: "/home-insurance" },
  { label: "Business Insurance", href: "/business-insurance" },
  { label: "Farm & Ranch", href: "/farm-ranch-insurance" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const IMAGES = {
  hero: "/manus-storage/morrison-hero_eb548c1e.jpg",
  landscape: "/manus-storage/morrison-east-texas-landscape_9c3ba0aa.jpg",
  familyHome: "/manus-storage/morrison-family-home_e1b9dc8f.jpg",
  farmRanch: "/manus-storage/morrison-farm-ranch_8c98ce59.jpg",
  heritage: "/manus-storage/morrison-about-heritage_b386e2b6.jpg",
};
