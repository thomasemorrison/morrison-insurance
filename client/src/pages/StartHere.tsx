import { Link } from "wouter";
import {
  ArrowRight,
  CarFront,
  FileText,
  House,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";
import {
  AcquisitionContact,
  AcquisitionPageShell,
} from "@/components/AcquisitionPath";

const situations = [
  {
    id: "renewal-or-quote",
    icon: CarFront,
    label: "Comparing a renewal or quote",
    question: "What changed—and am I comparing the same things?",
    description:
      "Start with the renewal date and the part you want to understand. A price is easier to discuss alongside limits, deductibles, vehicle use and policy dates.",
    next: "Use the Auto checklist to choose a few questions. Keep your current paperwork handy for the conversation, not attached to a first email.",
    checklist: "/prepare-for-a-conversation?topic=auto",
    guides: [
      {
        href: "/resources/car-insurance-quotes-center-tx",
        label: "Getting car insurance quotes in Center",
      },
      {
        href: "/resources/car-insurance-companies-center-tx",
        label: "Comparing car insurance options",
      },
      {
        href: "/resources/switch-car-insurance-texas-without-gap",
        label: "Questions before switching auto insurance",
      },
    ],
  },
  {
    id: "home-or-rural-property",
    icon: House,
    label: "A home or rural-property question",
    question: "Does the conversation include how I actually use the property?",
    description:
      "A house, a shed, a few acres or changing property use can raise different questions. Describe what is there and what has changed; do not guess which policy applies.",
    next: "Use the Home & rural property checklist. Bring questions about buildings, equipment, livestock, guests or business use that matter to your situation.",
    checklist: "/prepare-for-a-conversation?topic=home",
    guides: [
      {
        href: "/resources/farm-insurance-vs-homeowners-insurance",
        label: "Farm and homeowners insurance: questions to explore",
      },
      {
        href: "/resources/what-does-homeowners-insurance-cover-texas",
        label: "Understanding home insurance in Texas",
      },
    ],
  },
  {
    id: "business-paperwork",
    icon: FileText,
    label: "Small-business paperwork",
    question: "Someone asked for proof of insurance. Where do I begin?",
    description:
      "Tell the team whether you are starting a policy conversation, asking about changing operations, or handling a certificate of insurance request.",
    next: "Have the original request and its deadline available privately. Ask how to share it and which policy details need discussion before promising anything to a customer or venue.",
    checklist: "/prepare-for-a-conversation?topic=business",
    guides: [
      {
        href: "/resources/certificate-of-insurance-shelby-county-tx",
        label: "A certificate of insurance checklist for Shelby County",
      },
    ],
  },
];

export default function StartHere() {
  return (
    <AcquisitionPageShell
      page="start"
      eyebrow="Center · Shelby County · Deep East Texas"
      title={<>What brings you here?</>}
      description="You do not have to know the insurance terms. Pick the situation closest to yours—or go straight to a person. These tools help you prepare; they do not issue a quote or change a policy."
    >
      <section className="acquisition-section">
        <div className="acquisition-container">
          <div className="acquisition-section-heading">
            <p className="acquisition-eyebrow">Choose a starting point</p>
            <h2>A question is a good place to begin.</h2>
            <p>Read only what is useful. There is no required sequence.</p>
          </div>
          <nav
            aria-label="Your situation"
            className="acquisition-situation-nav"
          >
            {situations.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                {label}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            ))}
            <a href="#existing-customer">
              Existing customer or claim help
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </nav>
          <div className="acquisition-situation-grid">
            {situations.map(
              ({
                id,
                icon: Icon,
                label,
                question,
                description,
                next,
                checklist,
                guides,
              }) => (
                <article
                  className="acquisition-situation-card"
                  id={id}
                  key={id}
                >
                  <div className="acquisition-card-top">
                    <Icon size={24} aria-hidden="true" />
                    <p className="acquisition-eyebrow">{label}</p>
                  </div>
                  <h3>{question}</h3>
                  <p>{description}</p>
                  <div className="acquisition-next-note">
                    <strong>A useful next step</strong>
                    <p>{next}</p>
                  </div>
                  <Link
                    href={checklist}
                    className="acquisition-button acquisition-button--green"
                  >
                    Open the preparation checklist
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <ul
                    className="acquisition-guide-list"
                    aria-label={`${label}: related guides`}
                  >
                    {guides.map(({ href, label: guideLabel }) => (
                      <li key={href}>
                        <Link href={href}>
                          {guideLabel}
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            )}
            <article
              id="existing-customer"
              className="acquisition-situation-card acquisition-situation-card--service"
            >
              <div className="acquisition-card-top">
                <LifeBuoy size={24} aria-hidden="true" />
                <p className="acquisition-eyebrow">
                  Existing customer or claim help
                </p>
              </div>
              <h3>Need help with something already in place?</h3>
              <p>
                For a policy question, a change request or help finding the
                right claim contact, reach the Morrison team directly. You do
                not need to start a new quote request.
              </p>
              <div className="acquisition-next-note">
                <strong>If a claim needs reporting</strong>
                <p>
                  Use the claim-reporting instructions and insurer contact on
                  your policy. Do not rely on a website message as a claim
                  report. For an immediate emergency, call 911.
                </p>
              </div>
              <Link
                href="/contact"
                className="acquisition-button acquisition-button--green"
              >
                Find the team’s contact details
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <ul
                className="acquisition-guide-list"
                aria-label="Existing customer: related guides"
              >
                <li>
                  <Link href="/resources/how-to-file-claim-texas-adjuster">
                    Preparing for a claim conversation
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link href="/what-to-expect">
                    How the local-team handoff works
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </article>
          </div>
          <aside className="acquisition-privacy-note">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <h2>Keep the first message simple.</h2>
              <p>
                A general question is enough. Keep policy numbers, driver’s
                license details, VINs, birth dates, payment details and document
                photos out of public comments and general contact messages. Ask
                the team how to share anything private.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="acquisition-section acquisition-section--sage">
        <div className="acquisition-container acquisition-bottom-grid">
          <div>
            <p className="acquisition-eyebrow">Still not sure?</p>
            <h2>You can skip the checklist.</h2>
            <p>
              Say what you are trying to sort out in your own words. The next
              step can be a conversation, not a completed stack of paperwork.
            </p>
            <Link href="/resources" className="acquisition-text-link">
              Browse the existing guides
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <AcquisitionContact />
        </div>
      </section>
    </AcquisitionPageShell>
  );
}
