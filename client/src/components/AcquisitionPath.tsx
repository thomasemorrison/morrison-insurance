import { useEffect, useId, type ReactNode } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ClipboardList,
  Mail,
  MessageCircle,
  Phone,
  Signpost,
} from "lucide-react";
import { BRAND } from "@/lib/constants";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import "@/styles/acquisition.css";

export const ACQUISITION_PAGE_META = {
  start: {
    path: "/start-here",
    label: "Start here",
    title: "Start With Your Insurance Question | Morrison Insurance, Center TX",
    description:
      "Choose a useful starting point for a renewal, home or rural property, business paperwork, or existing-policy question. Talk with a local person in Center, Texas.",
  },
  prepare: {
    path: "/prepare-for-a-conversation",
    label: "Prepare for a conversation",
    title: "Prepare for an Insurance Conversation | Morrison Insurance",
    description:
      "Free, ungated checklists for auto renewals, home and rural-property questions, and small-business paperwork. Bring one question; keep personal documents private.",
  },
  expect: {
    path: "/what-to-expect",
    label: "What to expect",
    title: "What Happens After You Get in Touch | Morrison Insurance",
    description:
      "Know how to start with a general question, what to discuss with a local person, and how to arrange the next step without posting sensitive documents online.",
  },
} as const;

export type AcquisitionPageKey = keyof typeof ACQUISITION_PAGE_META;
const SITE_URL = "https://morrison-ins.net";

/** Client head only. The server's crawler metadata registry is integrated separately. */
export function AcquisitionPageHead({ page }: { page: AcquisitionPageKey }) {
  const meta = ACQUISITION_PAGE_META[page];
  useSeoMeta(meta.title, meta.description);

  useEffect(() => {
    const restorers: Array<() => void> = [];
    const setAttribute = (
      selector: string,
      tag: "meta" | "link",
      attributes: Record<string, string>
    ) => {
      const existing = document.head.querySelector<HTMLElement>(selector);
      const element = existing ?? document.createElement(tag);
      const previous = Object.keys(attributes).map(
        name => [name, element.getAttribute(name)] as const
      );
      for (const [name, value] of Object.entries(attributes))
        element.setAttribute(name, value);
      if (!existing) document.head.appendChild(element);
      restorers.push(() => {
        if (!existing) element.remove();
        else
          for (const [name, value] of previous) {
            if (value === null) element.removeAttribute(name);
            else element.setAttribute(name, value);
          }
      });
    };
    const url = `${SITE_URL}${meta.path}`;
    setAttribute('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: url,
    });
    const socialMeta = {
      "og:title": meta.title,
      "og:description": meta.description,
      "og:url": url,
      "og:type": "website",
      "og:site_name": BRAND.name,
      "og:image": `${SITE_URL}/manus-storage/MIBldgcurrent_0dda216e.webp`,
      "og:image:alt":
        "Morrison Insurance Agency — 125 Shelbyville St., Center, Texas",
    };
    for (const [property, content] of Object.entries(socialMeta)) {
      setAttribute(`meta[property="${property}"]`, "meta", {
        property,
        content,
      });
    }
    for (const [name, content] of Object.entries({
      "twitter:card": "summary",
      "twitter:title": meta.title,
      "twitter:description": meta.description,
      "twitter:image": `${SITE_URL}/manus-storage/MIBldgcurrent_0dda216e.webp`,
    }))
      setAttribute(`meta[name="${name}"]`, "meta", { name, content });
    return () => restorers.reverse().forEach(restore => restore());
  }, [meta]);

  const url = `${SITE_URL}${meta.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: meta.title,
        description: meta.description,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: BRAND.name,
        },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          { "@type": "ListItem", position: 2, name: meta.label, item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      data-acquisition-schema={page}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function AcquisitionContact({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`acquisition-contact${compact ? " acquisition-contact--compact" : ""}`}
    >
      <p className="acquisition-eyebrow">A human next step</p>
      <h2>One question is enough to start.</h2>
      {!compact && (
        <p>
          You do not need a finished folder to ask where to begin. Call or email
          Morrison Insurance in Center.
        </p>
      )}
      <div className="acquisition-contact-links">
        <a
          className="acquisition-button acquisition-button--amber"
          href={BRAND.phoneHref}
        >
          <Phone size={17} aria-hidden="true" /> Call {BRAND.phone}
        </a>
        <a className="acquisition-email" href={BRAND.emailHref}>
          <Mail size={17} aria-hidden="true" />
          <span>{BRAND.email}</span>
        </a>
      </div>
      <Link href="/contact" className="acquisition-text-link">
        Office details & existing contact form{" "}
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
      {!compact && (
        <p className="acquisition-small">
          Start with the topic, not attachments. Ask the team how to share
          private documents.
        </p>
      )}
    </div>
  );
}

export function AcquisitionPageShell({
  page,
  eyebrow,
  title,
  description,
  aside,
  children,
}: {
  page: AcquisitionPageKey;
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={`acquisition-page acquisition-page--${page}`}>
      <AcquisitionPageHead page={page} />
      <section className="acquisition-hero acquisition-no-print">
        <div className="acquisition-container">
          <nav aria-label="Breadcrumb" className="acquisition-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{ACQUISITION_PAGE_META[page].label}</span>
          </nav>
          <div className="acquisition-hero-grid">
            <div>
              <p className="acquisition-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="acquisition-lede">{description}</p>
            </div>
            {aside ?? <AcquisitionContact compact />}
          </div>
          <nav aria-label="Conversation tools" className="acquisition-tool-nav">
            {Object.entries(ACQUISITION_PAGE_META).map(([key, meta]) => (
              <Link
                key={key}
                href={meta.path}
                aria-current={key === page ? "page" : undefined}
              >
                {meta.label}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </section>
      {children}
    </div>
  );
}

export interface AcquisitionPathProps {
  /** Optional contextual copy; default stays useful on Home and all service pages. */
  heading?: string;
  intro?: string;
  className?: string;
}

/** Compact, self-contained three-card insert. No form, new tracking or external side effects. */
export default function AcquisitionPath({
  heading = "A useful next step, wherever you are.",
  intro = "Start with your situation, bring a few questions, or see how a conversation with our local team works.",
  className = "",
}: AcquisitionPathProps) {
  const headingId = useId();
  const cards = [
    {
      page: "start" as const,
      icon: Signpost,
      title: "Find your starting point",
      text: "A renewal, a property change, business paperwork or help with an existing policy.",
      action: "Start here",
    },
    {
      page: "prepare" as const,
      icon: ClipboardList,
      title: "Bring a few good questions",
      text: "Choose an ungated checklist for auto, home & rural property, or small business.",
      action: "Prepare for a conversation",
    },
    {
      page: "expect" as const,
      icon: MessageCircle,
      title: "Know what comes next",
      text: "The local-team handoff, a useful first message and safer ways to share details.",
      action: "See what to expect",
    },
  ];
  return (
    <section
      className={`acquisition-path ${className}`}
      aria-labelledby={headingId}
    >
      <div className="acquisition-container">
        <div className="acquisition-path-heading">
          <p className="acquisition-eyebrow">
            Less guesswork. A clearer conversation.
          </p>
          <h2 id={headingId}>{heading}</h2>
          <p>{intro}</p>
        </div>
        <div className="acquisition-path-grid">
          {cards.map(({ page, icon: Icon, title, text, action }) => (
            <Link
              className="acquisition-path-card"
              key={page}
              href={ACQUISITION_PAGE_META[page].path}
            >
              <Icon className="acquisition-icon" size={23} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="acquisition-card-action">
                {action}
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
