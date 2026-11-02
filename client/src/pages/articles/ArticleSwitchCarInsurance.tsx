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

const HERO_IMAGE = "/manus-storage/switch-car-insurance-2026-11-hero_3d48e552.jpg";
const CANONICAL_SLUG = "switch-car-insurance-texas-without-gap";
const ARTICLE_URL = `https://morrison-ins.net/resources/${CANONICAL_SLUG}`;
const PUBLISHED_DATE = "2026-11-02";
const TITLE = "How to Switch Car Insurance in Texas Without a Coverage Gap";
const DESCRIPTION =
  "Switching car insurance in Texas? Confirm effective dates, cancellation steps, lender information, and payment questions before ending your old policy.";

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
  {
    category: "Auto Insurance",
    title: "Auto Insurance in Center, TX: What Shelby County Drivers Need to Know",
    href: "/resources/auto-insurance-center-tx",
    image: "/manus-storage/auto-insurance-center-tx-portrait_a89331da.jpg",
  },
];

const SOURCES = [
  {
    title: "TDI: How to shop smart for auto insurance",
    href: "https://www.tdi.texas.gov/consumer/auto-insurance-shopping-guide.html",
  },
  {
    title: "TDI: Auto insurance guide",
    href: "https://www.tdi.texas.gov/pubs/consumer/cb020.html",
  },
  {
    title: "TDI: Was your auto insurance not renewed or canceled?",
    href: "https://www.tdi.texas.gov/tips/was-your-auto-insurance-not-renewed-or-canceled.html",
  },
  {
    title: "TDI: Personal Automobile Insurance Consumer Bill of Rights, 2026 version",
    href: "https://www.tdi.texas.gov/commissioner/documents/bill-of-rights-auto.pdf",
  },
  {
    title: "Progressive: How to switch car insurance companies",
    href: "https://www.progressive.com/answers/changing-car-insurance-companies/",
  },
  {
    title: "Progressive: How to cancel car insurance",
    href: "https://www.progressive.com/answers/how-to-cancel-car-insurance/",
  },
  {
    title: "Progressive: Can you get same-day car insurance?",
    href: "https://www.progressive.com/answers/same-day-car-insurance/",
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

export default function ArticleSwitchCarInsurance() {
  return (
    <ArticleLayout
      pageTitle={`${TITLE} | Morrison Insurance`}
      metaDescription={DESCRIPTION}
      canonicalSlug={CANONICAL_SLUG}
      category="Auto Insurance"
      title={TITLE}
      readTime="5 min read"
      excerpt="The important part of switching is the handoff between policies. Confirm when the new coverage starts, keep written proof, and only then arrange for the old coverage to end."
      heroImage={HERO_IMAGE}
      educationalCta
      relatedArticles={RELATED}
    >
      <SchemaMarkup
        type="article"
        headline={TITLE}
        description={DESCRIPTION}
        url={ARTICLE_URL}
        datePublished={PUBLISHED_DATE}
        dateModified={PUBLISHED_DATE}
        authorName="Morrison Insurance"
        publisherName="Morrison Insurance"
        publisherUrl="https://morrison-ins.net"
        imageUrl={`https://morrison-ins.net${HERO_IMAGE}`}
        breadcrumbs={[
          { name: "Home", url: "https://morrison-ins.net/" },
          { name: "Resources", url: "https://morrison-ins.net/resources" },
          { name: "Switch Car Insurance in Texas", url: ARTICLE_URL },
        ]}
      />

      <ArticleSection>
        <ArticleP>
          Published <time dateTime={PUBLISHED_DATE}>November 2, 2026</time> · Editorial
          responsibility: Morrison Insurance
        </ArticleP>
        <ArticleH2>1. Get new coverage confirmed—not just a quote</ArticleH2>
        <ArticleP>
          A quote estimates the price and proposed coverage. It is not, by itself, an active
          insurance policy. Accepting a quote, completing an application, and making a payment
          can be separate steps. Ask the new company what remains before coverage is in place.
        </ArticleP>
        <ArticleP>
          The <a href={SOURCES[0].href} target="_blank" rel="noreferrer" style={linkStyle}>Texas
          Department of Insurance&apos;s shopping checklist</a> says not to cancel your current
          policy until you receive the new policy or a written statement proving coverage.
          Obtain the policy number and written confirmation of the start date and time. A
          purchased policy with a future start date is not covering you yet; keep the old
          coverage through the handoff.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>2. Match the actual date and time</ArticleH2>
        <ArticleP>
          Ask both companies for the exact effective date, time, and applicable time zone.
          Do not assume an expiration date means coverage lasts through that evening, or
          that buying insurance today means it began at midnight. Read the policy documents
          and ask for clarification if the time is missing.
        </ArticleP>
        <ArticleCallout label="A timing example—not a standard policy rule">
          If the old policy ends November 10 at 12:01 a.m. and the new one starts November
          10 at noon, those matching dates still leave a gap. The new coverage needs to
          start no later than the old coverage ends.
        </ArticleCallout>
        <ArticleP>
          <a href={SOURCES[6].href} target="_blank" rel="noreferrer" style={linkStyle}>Progressive&apos;s
          same-day coverage guidance</a> specifically recommends asking what day and time
          coverage takes effect. Same-day availability varies. For a morning commute from
          outside Center or a trip across Shelby County, settle the timing before driving.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>3. Choose renewal or a mid-term handoff</ArticleH2>
        <ArticleP>
          You do not have to wait for renewal. The <a href={SOURCES[3].href} target="_blank"
          rel="noreferrer" style={linkStyle}>Texas auto Consumer Bill of Rights</a> says you
          can cancel your policy at any time. At renewal, coordinate the new start with the
          old expiration and tell the old company you do not want another term. Ask whether
          renewal processing or a payment is already scheduled.
        </ArticleP>
        <ArticleP>
          A mid-term switch needs a specific cancellation date and a billing check. Ask about
          any applicable charges and whether moving auto coverage changes a discount on
          another policy. Neither timing choice guarantees savings; choose after you
          understand the paperwork and costs.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>4. Check your loan or lease and save proof</ArticleH2>
        <ArticleP>
          A vehicle payment adds another check. <a href={SOURCES[1].href} target="_blank"
          rel="noreferrer" style={linkStyle}>TDI&apos;s auto guide</a> says lenders require
          collision and comprehensive coverage when you still owe money on the car.
          Lease agreements can also require these coverages, as <a href={SOURCES[5].href}
          target="_blank" rel="noreferrer" style={linkStyle}>Progressive&apos;s cancellation
          guide</a> explains.
        </ArticleP>
        <ArticleP>
          Check your own agreement for required limits, deductible restrictions, and how the
          lender or leasing company must be listed. Send the proof it requests and confirm
          receipt rather than assuming the new insurer handles everything. Save the new
          insurance card on your phone and keep a paper copy handy for rural trips with
          limited signal. Keep the declarations page too; an ID card does not explain all
          your coverage terms.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>5. Cancel formally, then sort automatic payments</ArticleH2>
        <ArticleP>
          Once the new coverage and timing are confirmed, contact the old company using its
          cancellation procedure. Some companies accept a phone or online request; others
          require a signed form. <a href={SOURCES[4].href} target="_blank" rel="noreferrer"
          style={linkStyle}>Progressive&apos;s switching guide</a> notes that canceling the
          previous policy is typically your responsibility.
        </ArticleP>
        <ArticleP>
          Turning off automatic payments, deleting an app, or blocking a bank draft is not
          the same as requesting cancellation. TDI identifies nonpayment as a reason an
          insurer can cancel; do not use it to manage your switch. Request written
          cancellation confirmation with the effective date and time. Separately ask when
          automatic drafts stop, whether a final payment remains, and how any refund is
          delivered. Keep both companies&apos; confirmations together.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>6. Ask for the refund calculation, not a guess</ArticleH2>
        <ArticleP>
          Texas&apos;s auto Consumer Bill of Rights covers unearned-premium refunds when either
          you or the insurer cancels. Unearned premium is money paid ahead that did not go
          toward coverage—not every dollar you have paid. That right does not establish
          your particular refund amount.
        </ArticleP>
        <ArticleP>
          Ask for an itemized final statement showing unused premium, any balance, and any
          applicable fees or charges with their basis. Billing arrangements and policy terms
          vary. Do not assume every switch produces a check, that all charges are refundable,
          or that every carrier charges a cancellation fee.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>7. Questions to ask before finishing</ArticleH2>
        <ul className="fade-up" style={listStyle}>
          <li>Is the new policy issued or coverage bound, and can I have written proof?</li>
          <li>What exact time does each policy start or end, and in which time zone?</li>
          <li>Are the correct vehicles, drivers, and loan or lease requirements included?</li>
          <li>Who submits the cancellation, and what confirmation will I receive?</li>
          <li>What happens to the next draft, final balance, refund, or other-policy discount?</li>
        </ul>
        <ArticleP>
          If the old company has sent a cancellation or nonrenewal notice, use the deadline
          on that notice rather than your usual renewal reminder. <a href={SOURCES[2].href}
          target="_blank" rel="noreferrer" style={linkStyle}>TDI&apos;s cancellation tips</a>
          recommend arranging new coverage before the current policy ends.
        </ArticleP>
        <ArticleP>
          Want another set of eyes on the handoff? Bring your declarations page, new policy
          confirmation, and any lender instructions to Morrison Insurance in Center, or
          <Link href="/contact" style={linkStyle}> ask us to talk through the dates</Link>.
          You can get your questions organized without rushing a decision.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>8. Sources and policy details</ArticleH2>
        <ArticleP>
          Sources accessed November 2, 2026. This is general educational guidance, not a
          coverage determination or a promise of price, acceptance, or refund. Your policy,
          billing terms, and loan or lease agreement control the specific details.
        </ArticleP>
        <ul className="fade-up" style={listStyle}>
          {SOURCES.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer" style={linkStyle}>
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </ArticleSection>
    </ArticleLayout>
  );
}
