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

const HERO_IMAGE = "/manus-storage/certificate-insurance-2026-11-hero_0c5c76af.jpg";
const CANONICAL_SLUG = "certificate-of-insurance-shelby-county-tx";
const ARTICLE_URL = `https://morrison-ins.net/resources/${CANONICAL_SLUG}`;
const TITLE = "Asked for a Certificate of Insurance? A Shelby County Business Checklist";
const DESCRIPTION =
  "A certificate of insurance checklist for Shelby County businesses: what to request, certificate holder versus additional insured, and what the document does not change.";

const RELATED = [
  {
    category: "Business Insurance",
    title: "Does Your Small Business Have the Right Insurance Coverage?",
    href: "/resources/small-business-insurance-coverage-gaps",
    image: "/manus-storage/small-business-portrait_ae44be43.jpg",
  },
  {
    category: "General",
    title: "Independent vs. Captive Insurance Agents: What's the Difference?",
    href: "/resources/independent-vs-captive-insurance-agents",
    image: "/manus-storage/independent-vs-captive-portrait_a5315342.jpg",
  },
];

const sourceLinkStyle: CSSProperties = {
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

function OfficialSources() {
  return (
    <ul className="fade-up" style={listStyle}>
      <li>
        <a href="https://www.tdi.texas.gov/certificates/index.html" target="_blank" rel="noreferrer" style={sourceLinkStyle}>
          TDI: Property and Casualty Certificates of Insurance
        </a>
      </li>
      <li>
        <a href="https://www.tdi.texas.gov/certificates/faq.html" target="_blank" rel="noreferrer" style={sourceLinkStyle}>
          TDI: Certificates of Insurance Frequently Asked Questions
        </a>
      </li>
      <li>
        <a href="https://statutes.capitol.texas.gov/getstatute.aspx?Code=IN&Value=1811" target="_blank" rel="noreferrer" style={sourceLinkStyle}>
          Texas Insurance Code Chapter 1811
        </a>
      </li>
    </ul>
  );
}

export default function ArticleCertificateOfInsurance() {
  return (
    <ArticleLayout
      pageTitle={`${TITLE} | Morrison Insurance`}
      metaDescription={DESCRIPTION}
      canonicalSlug={CANONICAL_SLUG}
      category="Business Insurance"
      title={TITLE}
      readTime="5 min read"
      excerpt="A contractor starting a job in Center, a vendor booking an event, or a Shelby County venue checking paperwork may all hear the same request: send a COI. Here is how to handle it without confusing proof of insurance with a change in coverage."
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
          { name: TITLE, url: ARTICLE_URL },
        ]}
      />

      <ArticleSection>
        <ArticleP>
          Published <time dateTime="2026-11-02">November 2, 2026</time>
          {" · "}Editorial responsibility: Morrison Insurance
        </ArticleP>
        <ArticleH2>1. Know what a certificate actually shows</ArticleH2>
        <ArticleP>
          A certificate of insurance, usually called a COI, summarizes insurance for someone outside
          your policy. It typically identifies the insured business, insurance company, coverage
          types, policy dates, and limits. That helps a customer or venue check your insurance
          paperwork without starting with the entire policy.
        </ArticleP>
        <ArticleP>
          Texas Insurance Code Chapter 1811 makes the limit clear: a certificate is not an insurance
          policy. It cannot amend, extend, or alter coverage. A properly issued certificate confirms
          that the referenced policy has been issued or coverage has been bound; it does not promise
          that every accident, operation, or contract requirement is covered.
        </ArticleP>
        <ArticleCallout label="Proof is not a policy change">
          Adding words to a certificate cannot increase a limit, remove an exclusion, or create
          coverage. A coverage change must happen through the policy, such as an insurer-issued
          endorsement—not through the COI.
        </ArticleCallout>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>2. Separate certificate holder from additional insured</ArticleH2>
        <ArticleP>
          The certificate holder is the person or organization designated to receive the certificate.
          An additional insured has insured status under the policy's applicable terms, often through
          an endorsement. Those labels are not interchangeable. Putting a venue or customer in the
          certificate-holder box does not make that organization an additional insured.
        </ArticleP>
        <ArticleP>
          If the request says “name us as an additional insured,” send that wording to your agent.
          Ask which policy provision or endorsement supports the requested status and whether an
          endorsement copy should accompany the certificate. Do not assume a checked box settles it.
        </ArticleP>
        <ArticleP>
          TDI's FAQ adds an important detail: a certificate may state that a blanket additional-insured
          endorsement exists, but it cannot name the holder as an additional insured solely because
          that blanket endorsement is present. The endorsement's conditions need review.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>3. Gather the request before contacting your agent</ArticleH2>
        <ArticleP>
          A complete request is more useful than “I need a certificate.” Whether you are working
          in Timpson or setting up an event in Center, gather these details in one private message:
        </ArticleP>
        <ul className="fade-up" style={listStyle}>
          <li>Your legal business name as insured, plus any trade name used on the contract.</li>
          <li>The exact certificate holder name and mailing address supplied by the requester.</li>
          <li>The contract's exact insurance requirements and any requested attachments.</li>
          <li>The job or event location, description, dates, and identifying job number.</li>
          <li>The recipient's name, verified email or portal, and requested submission deadline.</li>
        </ul>
        <ArticleP>
          Include the original request rather than retyping technical wording from memory. If the
          contract names several organizations, ask the requester to clarify who needs the certificate
          and who is requesting additional-insured status. Do not guess at legal names.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>4. Pause before promising contract compliance</ArticleH2>
        <ArticleP>
          “Please confirm this meets our contract” is a different question from “please send proof
          of insurance.” Do not sign a promise that your insurance satisfies the contract without
          reviewing the exact requirements and the supporting policy documents.
        </ArticleP>
        <ArticleP>
          Chapter 1811 prohibits a certificate from referring to legal or insurance requirements in
          a separate construction or services contract. TDI says a job or contract number may appear
          for identification, but wording claiming coverage is provided according to that contract
          is not allowed.
        </ArticleP>
        <ArticleP>
          Send unusual certificate wording, affidavits, or supplemental insurance questionnaires to
          your agent before completing them. TDI's FAQ addresses restrictions on these documents.
          Ask your agent about policy terms; get qualified legal guidance if you need help understanding
          the obligations you are being asked to accept.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>5. Check the issued paperwork before forwarding it</ArticleH2>
        <ArticleP>
          Compare the business name, holder name and address, policy dates, and listed limits with
          your request. Check that any requested endorsement documents are included when appropriate.
          Ask about a mismatch rather than changing the PDF yourself.
        </ArticleP>
        <ArticleP>
          If you run a venue or hire vendors, make the same checks on certificates you receive.
          Seeing your name in the holder box is not enough to establish additional-insured status.
          Request clarification and the relevant policy or endorsement language when that status matters.
          TDI confirms that Chapter 1811 does not prohibit providing those documents.
        </ArticleP>
      </ArticleSection>

      <ArticleSection white>
        <ArticleH2>6. Track expiration and use verified delivery channels</ArticleH2>
        <ArticleP>
          Look at the policy expiration dates, especially if a job continues beyond renewal or an
          event date changes. Put a reminder in your calendar to request updated evidence when needed.
          A saved certificate from last year's job does not establish this year's coverage.
        </ArticleP>
        <ArticleP>
          Being a certificate holder does not automatically give you cancellation or nonrenewal
          notices. Under Chapter 1811, notice rights require the person to be named in the policy or
          an endorsement, and the policy, endorsement, or Texas law or rule must require notice.
          The certificate cannot expand those notice terms.
        </ArticleP>
        <ArticleP>
          Send the request through your agent's verified email, phone contact, or secure portal.
          Confirm an unfamiliar recipient before forwarding documents. Keep a private copy of the
          request and issued paperwork. Do not post contracts, policy numbers, certificates, or other
          private documents in public comments or social-media replies.
        </ArticleP>
      </ArticleSection>

      <ArticleSection>
        <ArticleH2>Official sources and publication date</ArticleH2>
        <ArticleP>
          This checklist uses official Texas materials accessed November 2, 2026. TDI's FAQ is marked
          last updated October 31, 2022. This is general information, not a determination that a
          particular policy satisfies a contract. The actual policy and endorsements govern coverage.
        </ArticleP>
        <OfficialSources />
        <ArticleP>
          Bring the original certificate request and your questions to a local agent in Center.
          <Link href="/contact" style={sourceLinkStyle}> Talk through the paperwork with Morrison Insurance</Link>
          {" "}before promising that a policy meets a contract.
        </ArticleP>
      </ArticleSection>
    </ArticleLayout>
  );
}
