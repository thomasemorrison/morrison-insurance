import { Link } from "wouter";
import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";
import {
  AcquisitionContact,
  AcquisitionPageShell,
} from "@/components/AcquisitionPath";

export default function WhatToExpect() {
  return (
    <AcquisitionPageShell
      page="expect"
      eyebrow="A question-to-person handoff"
      title={
        <>
          What happens after
          <br />
          “I have a question”?
        </>
      }
      description="Start with the part you want to understand. Morrison’s existing contact page describes a local-agent conversation: a few questions about your situation, followed by a walk-through of your options. Here is how to make that first exchange useful."
    >
      <section className="acquisition-section">
        <div className="acquisition-container acquisition-expect-grid">
          <div>
            <p className="acquisition-eyebrow">
              The conversation, in plain language
            </p>
            <h2>Understand the next step before taking it.</h2>
            <ol className="acquisition-steps">
              <li>
                <span className="acquisition-step-number" aria-hidden="true">
                  01
                </span>
                <div>
                  <h3>Tell the team what brought you here.</h3>
                  <p>
                    A renewal you are comparing, a change at home, a business
                    request or help with an existing policy is enough to open
                    the conversation. Call, email or use the existing contact
                    page.
                  </p>
                </div>
              </li>
              <li>
                <span className="acquisition-step-number" aria-hidden="true">
                  02
                </span>
                <div>
                  <h3>Talk through the details that matter.</h3>
                  <p>
                    The local agent asks questions to understand your situation
                    and walks through the options. Ask which documents are
                    useful and how to share them privately. You can say when a
                    term or a question is unclear.
                  </p>
                </div>
              </li>
              <li>
                <span className="acquisition-step-number" aria-hidden="true">
                  03
                </span>
                <div>
                  <h3>Confirm who does what next—and when.</h3>
                  <p>
                    Before you finish, ask what the next step is, who is
                    handling it, and when you should check back. Mention any
                    renewal, job or paperwork deadline and confirm the timing
                    during the actual conversation.
                  </p>
                </div>
              </li>
            </ol>
            <div className="acquisition-next-note">
              <strong>A conversation is not a coverage confirmation.</strong>
              <p>
                A call, email, checklist or contact request does not itself bind
                or change coverage, settle a claim or confirm a contract
                requirement. Ask what confirmation is needed for your specific
                next step.
              </p>
            </div>
          </div>
          <aside className="acquisition-team-panel">
            <MessageCircle size={27} aria-hidden="true" />
            <p className="acquisition-eyebrow">
              People, not a new intake system
            </p>
            <h2>The local Morrison team</h2>
            <p>
              Morrison’s public team page introduces these people in its
              day-to-day service context:
            </p>
            <ul className="acquisition-team-list">
              <li>JoLynn Fountain</li>
              <li>Monica Watson</li>
              <li>Connie Morrison</li>
            </ul>
            <p>
              Ask who will be helping with your question. This page does not
              assign a particular person or promise their availability.
            </p>
            <Link href="/about" className="acquisition-text-link">
              Meet the team on our About page
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <div className="acquisition-office-line">
              <MapPin size={19} aria-hidden="true" />
              <p>
                {BRAND.address.street}
                <br />
                {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
              </p>
            </div>
            <Link href="/contact" className="acquisition-text-link">
              Office details & posted hours
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <p className="acquisition-small">
              Confirm visit arrangements and next-step timing with the team,
              especially around holidays.
            </p>
          </aside>
        </div>
      </section>
      <section className="acquisition-section acquisition-section--paper">
        <div className="acquisition-container">
          <div className="acquisition-section-heading">
            <p className="acquisition-eyebrow">Your first message</p>
            <h2>Useful does not have to mean detailed.</h2>
            <p>
              Give the team a starting point without sending a file full of
              personal information.
            </p>
          </div>
          <div className="acquisition-message-grid">
            <div className="acquisition-message-card">
              <h3>Include a little context</h3>
              <ul className="acquisition-bullets">
                <li>
                  Your name and a way to reach you in a direct message—not a
                  public comment.
                </li>
                <li>
                  The topic: auto, home or rural property, business paperwork,
                  or an existing policy question.
                </li>
                <li>What you are trying to understand or get done.</li>
                <li>
                  A relevant renewal date or requested deadline, and a request
                  to confirm what timing is possible.
                </li>
              </ul>
            </div>
            <div className="acquisition-message-example">
              <p className="acquisition-eyebrow">A simple opening—not a form</p>
              <p className="acquisition-sample">
                “I’m comparing my renewal and would like to understand the
                deductible and policy dates. What should I have ready for a
                conversation?”
              </p>
              <p>
                This is suggested wording, not a customer story. Adapt the
                question in your own words and leave attachments out of the
                first message.
              </p>
            </div>
          </div>
          <aside className="acquisition-privacy-note">
            <ShieldCheck size={24} aria-hidden="true" />
            <div>
              <h2>Ask how to share private details.</h2>
              <p>
                Do not put policy numbers, driver’s license details, VINs, birth
                dates, Social Security numbers, payment information or document
                photos in public comments, general email or the general contact
                form. Ask the team which private sharing method to use before
                sending paperwork.
              </p>
              <Link href="/privacy-policy" className="acquisition-text-link">
                Read the site’s privacy policy
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="acquisition-section acquisition-section--sage">
        <div className="acquisition-container acquisition-bottom-grid">
          <div>
            <p className="acquisition-eyebrow">Make room for your questions</p>
            <h2>Prepare a little, or just call.</h2>
            <p>
              The checklist is optional and ungated. It helps you decide what to
              ask; it does not send anything to the office.
            </p>
            <Link
              href="/prepare-for-a-conversation"
              className="acquisition-button acquisition-button--green"
            >
              Open the preparation checklist
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/resources/certificate-of-insurance-shelby-county-tx"
              className="acquisition-text-link"
            >
              Handling a certificate request? Read the existing guide
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <AcquisitionContact />
        </div>
      </section>
    </AcquisitionPageShell>
  );
}
