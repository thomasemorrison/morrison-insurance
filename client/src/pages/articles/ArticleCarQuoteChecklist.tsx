import type { CSSProperties } from "react";
import { Link } from "wouter";
import {
  ArticleLayout,
  ArticleSection,
  ArticleH2,
  ArticleP,
  ArticleCallout,
} from "../../components/ArticleLayout";
import { SchemaMarkup } from "../../components/SchemaMarkup";

const HERO_IMAGE = "/manus-storage/car-quote-checklist-2026-11-hero_057d7888.jpg";
const CANONICAL_SLUG = "car-insurance-quote-checklist-center-tx";
const ARTICLE_URL = `https://morrison-ins.net/resources/${CANONICAL_SLUG}`;
const TITLE = "What to Bring for a Car Insurance Quote in Center, TX";
const DESCRIPTION =
  "A practical car insurance quote checklist for Center, TX: driver and vehicle information, current policy details, work use, and safer ways to share documents.";

const RELATED = [
  {
    category: "Auto Insurance",
    title: "How to Get Car Insurance Quotes in Center, TX",
    href: "/resources/car-insurance-quotes-center-tx",
    image: "/manus-storage/car-insurance-quotes-center-tx-portrait_4d76811a.jpg",
  },
  {
    category: "Auto Insurance",
    title: "How to Compare Car Insurance Rates in Center, TX",
    href: "/resources/car-insurance-companies-center-tx",
    image: "/manus-storage/car-insurance-companies-center-tx-portrait_f8955df7.jpg",
  },
];

const linkStyle: CSSProperties = {
  color: "var(--pine)",
  fontWeight: 600,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const listStyle: CSSProperties = {
  margin: "0 0 1.5rem",
  paddingLeft: "1.25rem",
  fontFamily: "Inter, sans-serif",
  fontSize: "1rem",
  color: "var(--text-body)",
  lineHeight: 1.8,
};

export default function ArticleCarQuoteChecklist() {
  return (
    <ArticleLayout
      pageTitle={`${TITLE} | Morrison Insurance`}
      metaDescription={DESCRIPTION}
      canonicalSlug={CANONICAL_SLUG}
      category="Auto Insurance"
      title={TITLE}
      readTime="5 min read"
      excerpt="Before you call or stop by, gather the details that describe your household and how your car is used. This checklist helps you prepare without guessing—or sharing private paperwork in public."
      heroImage={HERO_IMAGE}
      educationalCta
      relatedArticles={RELATED}
    >
      <SchemaMarkup
        type="article"
        headline={TITLE}
        description={DESCRIPTION}
        url={ARTICLE_URL}
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        authorName="Morrison Insurance"
        publisherName="Morrison Insurance"
        publisherUrl="https://morrison-ins.net"
        imageUrl={`https://morrison-ins.net${HERO_IMAGE}`}
        breadcrumbs={[
          { name: "Home", url: "https://morrison-ins.net/" },
          { name: "Resources", url: "https://morrison-ins.net/resources" },
          { name: "Car Insurance Quote Checklist", url: ARTICLE_URL },
        ]}
      />

      <ArticleSection>
        <ArticleP>
          Published <time dateTime="2026-11-02">November 2, 2026</time> · Editorial
          responsibility: Morrison Insurance.
        </ArticleP>
        <ArticleH2>Your bring-along checklist</ArticleH2>
        <ArticleP>
          Getting ready for a car insurance quote in Center does not require a perfect binder.
          A small folder or a few documents on your phone can help. Start with these five things:
        </ArticleP>
        <ul className="fade-up" style={listStyle}>
          <li>Driver information for the household and anyone who regularly uses the car.</li>
          <li>Each vehicle&apos;s year, make, model, and vehicle identification number (VIN).</li>
          <li>The address where each vehicle stays and notes about mileage and use.</li>
          <li>Your current declarations page, if insured, plus any driver-exclusion documents.</li>
          <li>Your renewal date or the date you would like coverage to begin.</li>
        </ul>
        <ArticleP>
          The{" "}
          <a
            href="https://content.naic.org/article/consumer-insight-comparing-online-auto-insurance-quotes"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            National Association of Insurance Commissioners
          </a>{" "}
          recommends having your current policy, drivers&apos; licenses, and vehicle registration
          ready. The exact information needed depends on the insurer and your situation.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>Bring the details for each vehicle</ArticleH2>
        <ArticleP>
          Copy the year, make, model, and VIN from your paperwork rather than relying on memory.
          For more than one vehicle, keep each vehicle&apos;s information together. Note who owns
          it, who usually drives it, and whether it is financed or leased. Have the lender or
          leasing company&apos;s name handy if that applies.
        </ArticleP>
        <ArticleP>
          Use the address where the vehicle normally stays overnight, even if that differs from
          your mailing address. Mention a recent move, a car kept with a student, or a vehicle
          that spends part of the year somewhere else. If you are buying a car, ask the seller
          or dealer for its VIN before the quote conversation.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>Make a driver list—including teens</ArticleH2>
        <ArticleP>
          Have names, dates of birth, and license information available for the drivers being
          discussed. Include household members of driving age and regular drivers outside the
          household; let the agent explain what the insurer requires. Note recent accidents,
          tickets, or claims honestly, and say when you do not remember an exact date.
        </ArticleP>
        <ArticleP>
          For a teen, write down whether they have a learner&apos;s permit or license, when that
          status changed, and which car they use. TDI advises notifying your insurer when a teen
          is learning to drive your vehicle. Ask when the company needs the teen listed rather
          than assuming every insurer handles permits the same way.
        </ArticleP>
        <ArticleCallout label="Ask about named drivers and exclusions">
          Who needs to be listed? Is anyone specifically excluded by name? Where is that
          exclusion written? Bring any separate driver list or exclusion form. Do not assume
          that permission to borrow the keys answers the coverage question.
        </ArticleCallout>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>Describe what the car actually does</ArticleH2>
        <ArticleP>
          Write down a reasonable annual-mileage estimate and your usual commute. If the number
          is uncertain, label it as an estimate and ask how to confirm it. Explain whether the
          car is used for errands, commuting, school, or other regular trips around Shelby County.
        </ArticleP>
        <ArticleP>
          Mention paid delivery, ride-hailing, customer visits, hauling for work, or business or
          farm tasks—even if occasional. These are questions to discuss, not uses to quietly
          leave out. TDI&apos;s auto guide warns that most policies do not cover certain business,
          ride-hailing, and paid-delivery driving. Ask whether the proposed policy covers your
          specific use and what exclusions apply; the actual policy wording matters.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>Bring the declarations page, not just the card</ArticleH2>
        <ArticleP>
          The declarations page is the summary of your current policy. TDI identifies it as the
          place to find coverages, dollar limits, and deductibles. Bring the current version,
          along with a renewal notice if you have one, so the conversation starts with what you
          have today rather than what you think you bought years ago.
        </ArticleP>
        <ArticleP>
          An insurance card is useful, but it is not a substitute for that coverage summary.
          The{" "}
          <a
            href="https://content.naic.org/article/consumer-insight-declarations-saving"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            NAIC&apos;s declarations-page explanation
          </a>{" "}
          also notes that drivers may appear elsewhere in the policy. If you do not currently
          have insurance, say so plainly and ask what information is needed to proceed.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>If something is missing, start here</ArticleH2>
        <ArticleP>
          For a missing declarations page, check your insurer&apos;s app or online account, or
          request a copy from your current company or agent. For missing vehicle details,
          start with the registration, title, or purchase paperwork. Once you have the VIN, the{" "}
          <a href="https://www.nhtsa.gov/vin-decoder" target="_blank" rel="noreferrer" style={linkStyle}>
            federal NHTSA VIN decoder
          </a>{" "}
          can help identify encoded vehicle information.
        </ArticleP>
        <ArticleP>
          If a driver&apos;s license information or a claim date is unavailable, mark it as
          missing. Ask which items are needed now and which can follow. A clear question is
          better than a made-up answer.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>Keep private paperwork out of social comments</ArticleH2>
        <ArticleP>
          Never put license numbers, VINs, dates of birth, policy numbers, or photos of insurance
          documents in social-media comments. Ask general questions there without attaching
          paperwork. Before sending documents, contact the agency through a known phone number
          or website and ask for its preferred private method. Do not assume a social direct
          message is the right place either.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>Take your questions along, too</ArticleH2>
        <ArticleP>
          Bring whatever you have and a short list of uncertainties. Ask what still needs
          verification and what the next step is. A quote conversation is not proof that
          coverage has started. TDI advises keeping your current policy until you receive the
          new policy or written proof of coverage.
        </ArticleP>
        <ArticleP>
          <Link href="/contact" style={linkStyle}>
            Talk through your situation with a local agent.
          </Link>{" "}
          This checklist is general preparation guidance, not a promise of price, acceptance,
          or coverage.
        </ArticleP>
        <ul className="fade-up" style={listStyle} aria-label="Official sources">
          <li>
            <a
              href="https://www.tdi.texas.gov/consumer/auto-insurance-shopping-guide.html"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              TDI: How to shop smart for auto insurance
            </a>
          </li>
          <li>
            <a href="https://www.tdi.texas.gov/pubs/consumer/cb020.html" target="_blank" rel="noreferrer" style={linkStyle}>
              TDI: Auto insurance guide
            </a>
          </li>
          <li>
            <a
              href="https://www.tdi.texas.gov/tips/adding-teen-driver-to-insurance-policy.html"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              TDI: Adding a teen driver to your insurance policy?
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticleLayout>
  );
}
