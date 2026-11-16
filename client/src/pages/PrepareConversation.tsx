import { useEffect, useId, useState, type KeyboardEvent } from "react";
import { Link, useSearch } from "wouter";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Printer,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { BRAND } from "@/lib/constants";
import {
  AcquisitionContact,
  AcquisitionPageShell,
} from "@/components/AcquisitionPath";

type Topic = "auto" | "home" | "business";
type ChecklistGroup = {
  title: string;
  items: Array<{ id: string; question: string; detail: string }>;
};
const TOPICS: Array<{ id: Topic; label: string }> = [
  { id: "auto", label: "Auto" },
  { id: "home", label: "Home & rural property" },
  { id: "business", label: "Small business" },
];
const PRINTABLE_PDFS: Record<Topic, string> = {
  auto: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663724333063/hqHHHRxQBOMbgjhx.pdf",
  home: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663724333063/qupbstuZihAFoyki.pdf",
  business: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663724333063/TEvetmVhfMSxfPEu.pdf",
};
const CHECKLISTS: Record<
  Topic,
  {
    title: string;
    intro: string;
    groups: ChecklistGroup[];
    guides: Array<{ href: string; label: string }>;
    sources: Array<{ href: string; label: string }>;
    note: string;
  }
> = {
  auto: {
    title: "Auto conversation checklist",
    intro:
      "A renewal, a new quote or changing vehicle use: choose the questions that fit. You do not need every answer before contacting the team.",
    groups: [
      {
        title: "Have in mind",
        items: [
          {
            id: "auto-goal",
            question: "What am I trying to understand or change?",
            detail:
              "Pick one starting point: the renewal, a quote comparison, a driver change or a vehicle change.",
          },
          {
            id: "auto-use",
            question: "Has the way a vehicle is used changed?",
            detail:
              "Be ready to discuss regular drivers, commuting, mileage, deliveries or other work use—without entering details here.",
          },
        ],
      },
      {
        title: "Questions to ask",
        items: [
          {
            id: "auto-compare",
            question:
              "Are the quotes using the same coverages, limits and deductibles?",
            detail:
              "Ask what is different or excluded. Keep the policy summary nearby for your conversation; do not attach it to a first message.",
          },
          {
            id: "auto-cost",
            question:
              "What do the price, payment terms and optional coverages include?",
            detail:
              "Ask about available discounts and eligibility rather than assuming a quoted discount applies.",
          },
        ],
      },
      {
        title: "Before a next step",
        items: [
          {
            id: "auto-dates",
            question:
              "What dates and written confirmation should I check before switching?",
            detail:
              "Ask how the new effective date aligns with the current policy. Do not cancel based only on a quote.",
          },
          {
            id: "auto-followup",
            question:
              "What information is needed, how should I share it, and when should I check back?",
            detail:
              "Confirm the private sharing method and next-step timing with the team.",
          },
        ],
      },
    ],
    guides: [
      {
        href: "/resources/car-insurance-quote-checklist-center-tx",
        label: "What to bring for a car insurance quote in Center",
      },
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
        label: "Questions before switching car insurance",
      },
    ],
    sources: [
      {
        href: "https://www.tdi.texas.gov/consumer/auto-insurance-shopping-guide.html",
        label: "TDI: How to shop smart for auto insurance",
      },
      {
        href: "https://www.tdi.texas.gov/pubs/consumer/cb020.html",
        label: "TDI: Automobile insurance guide",
      },
    ],
    note: "TDI advises not canceling your current auto policy until you have the new policy or a written statement proving coverage. Ask the team what confirmation you need.",
  },
  home: {
    title: "Home & rural property conversation checklist",
    intro:
      "Describe the place and how it is used—not the policy you think you should have. These are discussion prompts, not a finding that something is covered.",
    groups: [
      {
        title: "Have in mind",
        items: [
          {
            id: "home-changes",
            question: "What has changed at the house or on the land?",
            detail:
              "Think about renovations, roof work, a new building, a move or a change in occupancy.",
          },
          {
            id: "home-use",
            question: "How are the home, land and outbuildings actually used?",
            detail:
              "Mention relevant livestock, equipment, timber activity, rental, guests or business use during your conversation.",
          },
        ],
      },
      {
        title: "Questions to ask",
        items: [
          {
            id: "home-property",
            question:
              "Which buildings and belongings need a closer discussion?",
            detail:
              "Ask about the home, detached structures, equipment and property that matters to you. Do not assume one description settles coverage.",
          },
          {
            id: "home-terms",
            question:
              "How do deductibles, limits and loss-settlement terms work?",
            detail:
              "Ask the difference between replacement cost and actual cash value, what exclusions matter and whether any separate coverage needs discussion.",
          },
        ],
      },
      {
        title: "Before a next step",
        items: [
          {
            id: "home-paperwork",
            question: "Which policy pages or property details would be useful?",
            detail:
              "Keep your current summary or renewal nearby if you have one. Ask how to share documents privately rather than uploading them here.",
          },
          {
            id: "home-followup",
            question:
              "What should happen next, and what timing can the team confirm?",
            detail:
              "Mention a renewal, closing or planned change. Ask what confirmation is needed before relying on a policy change.",
          },
        ],
      },
    ],
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
    sources: [
      {
        href: "https://www.tdi.texas.gov/pubs/consumer/cb025.html",
        label: "TDI: Home insurance guide",
      },
    ],
    note: "TDI explains that coverages vary by company and that the policy or agent is the place to check exact coverages. Property-use details are a starting point for that discussion, not a coverage conclusion.",
  },
  business: {
    title: "Small-business conversation checklist",
    intro:
      "Starting a policy conversation, changing operations or handling a certificate request? Keep the task and the original request clear before making promises to anyone else.",
    groups: [
      {
        title: "Have in mind",
        items: [
          {
            id: "business-task",
            question:
              "Am I comparing coverage, discussing a change or requesting proof of insurance?",
            detail:
              "Tell the team which task brought you here and whether you are an existing Morrison customer.",
          },
          {
            id: "business-operations",
            question: "What work does the business do, and what has changed?",
            detail:
              "Be ready to discuss relevant locations, equipment, vehicles, staffing, subcontractors or new kinds of work. These are context, not coverage determinations.",
          },
        ],
      },
      {
        title: "Questions to ask",
        items: [
          {
            id: "business-request",
            question:
              "If I need a certificate, do I have the original request and its deadline?",
            detail:
              "Keep exact recipient details, job dates and insurance wording available privately. Ask how to share the request; do not enter it here.",
          },
          {
            id: "business-status",
            question:
              "Is the request for proof of existing insurance or for a policy change?",
            detail:
              "Ask about any requested additional-insured status, endorsement or limit. Do not assume a certificate satisfies a contract.",
          },
        ],
      },
      {
        title: "Before a next step",
        items: [
          {
            id: "business-confirm",
            question:
              "Which policy terms or documents need checking before I confirm anything?",
            detail:
              "Ask the team to explain what the policy and supporting documents say. Do not promise contract compliance based on this checklist.",
          },
          {
            id: "business-followup",
            question:
              "Who handles the next step, how should I share documents, and when should I check back?",
            detail:
              "Confirm what timing is possible for a requested job or paperwork deadline.",
          },
        ],
      },
    ],
    guides: [
      {
        href: "/resources/certificate-of-insurance-shelby-county-tx",
        label: "A certificate of insurance checklist for Shelby County",
      },
    ],
    sources: [
      {
        href: "https://www.tdi.texas.gov/certificates/faq.html",
        label: "TDI: Certificates of Insurance Frequently Asked Questions",
      },
      {
        href: "https://www.tdi.texas.gov/pubs/consumer/cb030.html",
        label: "TDI: Workers’ compensation insurance guide",
      },
    ],
    note: "TDI's certificate FAQs explain that certificate wording cannot alter, amend or extend policy coverage. The workers’ compensation guide is a separate reference for employee-related questions—not a general small-business coverage guide.",
  },
};

function topicFromSearch(search: string): Topic {
  const topic = new URLSearchParams(search).get("topic");
  return topic === "home" || topic === "business" ? topic : "auto";
}

export default function PrepareConversation() {
  const search = useSearch();
  const [topic, setTopic] = useState<Topic>(() => topicFromSearch(search));
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const idPrefix = useId();
  useEffect(() => setTopic(topicFromSearch(search)), [search]);
  const active = CHECKLISTS[topic];
  const activeItems = active.groups.flatMap(group => group.items);
  const checkedCount = activeItems.filter(item => checked[item.id]).length;

  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let nextIndex: number;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % TOPICS.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (index + TOPICS.length - 1) % TOPICS.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = TOPICS.length - 1;
    else return;
    event.preventDefault();
    const next = TOPICS[nextIndex].id;
    setTopic(next);
    document.getElementById(`${idPrefix}-tab-${next}`)?.focus();
  }

  return (
    <AcquisitionPageShell
      page="prepare"
      eyebrow="A little preparation. No paperwork overload."
      title={
        <>
          Bring a few
          <br />
          good questions.
        </>
      }
      description="Choose a checklist, mark the questions you have considered, and print it if useful. You can call before everything is checked. Nothing in this tool is sent to Morrison."
      aside={
        <div className="acquisition-tool-preview">
          <ClipboardList size={29} aria-hidden="true" />
          <p className="acquisition-eyebrow">Yours to use, not turn in</p>
          <h2>
            No sign-up.
            <br />
            No upload.
            <br />
            No form to submit.
          </h2>
          <p>
            Checkmarks stay only in this open page. They are not saved or sent
            by this checklist.
          </p>
          <a
            href="#preparation-checklist"
            className="acquisition-button acquisition-button--amber"
          >
            Choose your checklist
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <p className="acquisition-preview-contact">
            Prefer a person? <a href={BRAND.phoneHref}>{BRAND.phone}</a>
            <br />
            <a href={BRAND.emailHref}>{BRAND.email}</a>
            <br />
            <Link href="/contact">Office details & existing contact form</Link>
          </p>
        </div>
      }
    >
      <section
        className="acquisition-section acquisition-checklist-section"
        id="preparation-checklist"
      >
        <div className="acquisition-container">
          <header className="acquisition-print-heading">
            <p>Morrison Insurance · Conversation preparation</p>
            <h1>{active.title}</h1>
            <p>
              General questions only. No personal information belongs on this
              checklist.
            </p>
          </header>
          <div className="acquisition-section-heading acquisition-no-print">
            <p className="acquisition-eyebrow">An optional bring-along tool</p>
            <h2>What would you like to talk about?</h2>
            <p>
              Check a box when you have considered the question—not because you
              have a final answer.
            </p>
          </div>
          <div
            className="acquisition-tabs acquisition-no-print"
            role="tablist"
            aria-label="Choose an insurance conversation checklist"
          >
            {TOPICS.map(({ id, label }, index) => (
              <button
                key={id}
                type="button"
                role="tab"
                id={`${idPrefix}-tab-${id}`}
                aria-controls={`${idPrefix}-panel-${id}`}
                aria-selected={topic === id}
                tabIndex={topic === id ? 0 : -1}
                onClick={() => setTopic(id)}
                onKeyDown={event => handleTabKey(event, index)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="acquisition-checklist-toolbar acquisition-no-print">
            <p role="status" aria-live="polite" aria-atomic="true">
              <Check size={16} aria-hidden="true" />
              {checkedCount} of {activeItems.length} questions considered
              <span>No need to finish them all.</span>
            </p>
            <div>
              <button
                type="button"
                className="acquisition-button acquisition-button--green"
                onClick={() => window.print()}
              >
                <Printer size={17} aria-hidden="true" />
                Print this checklist
              </button>
              <a
                className="acquisition-button acquisition-button--green"
                href={PRINTABLE_PDFS[topic]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Printer size={17} aria-hidden="true" />
                Open the one-page PDF
              </a>
              <button
                type="button"
                className="acquisition-reset"
                onClick={() =>
                  setChecked(previous => {
                    const next = { ...previous };
                    activeItems.forEach(item => delete next[item.id]);
                    return next;
                  })
                }
              >
                <RotateCcw size={15} aria-hidden="true" />
                Clear this checklist
              </button>
            </div>
          </div>
          {TOPICS.map(({ id }) => {
            const checklist = CHECKLISTS[id];
            return (
              <div
                key={id}
                role="tabpanel"
                id={`${idPrefix}-panel-${id}`}
                aria-labelledby={`${idPrefix}-tab-${id}`}
                tabIndex={0}
                hidden={topic !== id}
                className="acquisition-checklist-panel"
              >
                <div className="acquisition-checklist-grid">
                  <div className="acquisition-checklist-sheet">
                    <div className="acquisition-checklist-intro">
                      <h2>{checklist.title}</h2>
                      <p>{checklist.intro}</p>
                    </div>
                    {checklist.groups.map(group => (
                      <fieldset
                        key={group.title}
                        className="acquisition-checklist-group"
                      >
                        <legend>{group.title}</legend>
                        {group.items.map(item => (
                          <label
                            className={`acquisition-checklist-item${checked[item.id] ? " acquisition-checklist-item--checked" : ""}`}
                            key={item.id}
                          >
                            <input
                              type="checkbox"
                              checked={Boolean(checked[item.id])}
                              onChange={event =>
                                setChecked(previous => ({
                                  ...previous,
                                  [item.id]: event.target.checked,
                                }))
                              }
                              aria-describedby={`${idPrefix}-${item.id}-detail`}
                            />
                            <span>
                              <strong>{item.question}</strong>
                              <span id={`${idPrefix}-${item.id}-detail`}>
                                {item.detail}
                              </span>
                            </span>
                          </label>
                        ))}
                      </fieldset>
                    ))}
                  </div>
                  <aside className="acquisition-reading acquisition-no-print">
                    <p className="acquisition-eyebrow">Read a little further</p>
                    <h2>Guides for this conversation</h2>
                    <ul className="acquisition-guide-list">
                      {checklist.guides.map(guide => (
                        <li key={guide.href}>
                          <Link href={guide.href}>
                            {guide.label}
                            <ArrowRight size={14} aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <h3>Official Texas references</h3>
                    <ul className="acquisition-guide-list">
                      {checklist.sources.map(source => (
                        <li key={source.href}>
                          <a href={source.href}>
                            {source.label}
                            <ArrowRight size={14} aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <p className="acquisition-small">{checklist.note}</p>
                  </aside>
                </div>
              </div>
            );
          })}
          <aside className="acquisition-privacy-note">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <h2>Questions here. Private details with the team.</h2>
              <p>
                This tool has no text fields, document upload or submission. Do
                not write policy numbers, VINs, license details, birth dates or
                payment information on a printed copy. Ask the team how to share
                private documents.
              </p>
              <p className="acquisition-small">
                These prompts are general preparation, not advice about your
                specific coverage or a quote. Completing them does not request,
                bind or change insurance.
              </p>
            </div>
          </aside>
          <footer className="acquisition-print-footer">
            <p>
              <strong>Morrison Insurance</strong> · {BRAND.phone} ·{" "}
              {BRAND.email}
            </p>
            <p>{BRAND.address.full}</p>
            <p>
              morrison-ins.net/prepare-for-a-conversation · Ask how to share
              documents privately and confirm next-step timing.
            </p>
          </footer>
        </div>
      </section>
      <section className="acquisition-section acquisition-section--sage acquisition-no-print">
        <div className="acquisition-container acquisition-bottom-grid">
          <div>
            <p className="acquisition-eyebrow">
              Your questions belong in a conversation
            </p>
            <h2>Ready enough is enough.</h2>
            <p>
              Call or email with the topic you want to discuss. There is no
              checklist to turn in and no need to send documents in your first
              message.
            </p>
            <Link href="/what-to-expect" className="acquisition-text-link">
              See what to expect when you reach out
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/resources" className="acquisition-text-link">
              Browse all existing guides
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <AcquisitionContact />
        </div>
      </section>
    </AcquisitionPageShell>
  );
}
