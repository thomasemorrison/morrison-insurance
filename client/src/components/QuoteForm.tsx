import { useEffect, useRef } from "react";

interface QuoteFormProps {
  dark?: boolean;
  defaultCoverage?: string;
}

// HubSpot form config
const HS_PORTAL_ID = "246212557";
const HS_FORM_ID = "156de4fd-61c3-4bff-a7a7-779bfb6bb35b";
const HS_REGION = "na2";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}

export default function QuoteForm({ dark = false }: QuoteFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formId = useRef(`hs-form-${Math.random().toString(36).slice(2, 8)}`);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const mountForm = () => {
      if (!containerRef.current) return;
      initialized.current = true;
      window.hbspt!.forms.create({
        region: HS_REGION,
        portalId: HS_PORTAL_ID,
        formId: HS_FORM_ID,
        target: `#${formId.current}`,
      });
    };

    if (window.hbspt) {
      mountForm();
    } else {
      // Load the HubSpot script if not already present
      const existing = document.querySelector(`script[src*="hsforms.net"]`);
      if (!existing) {
        const script = document.createElement("script");
        script.src = `https://js-${HS_REGION}.hsforms.net/forms/embed/${HS_PORTAL_ID}.js`;
        script.defer = true;
        script.onload = () => {
          // hbspt may not be available immediately after onload
          const poll = setInterval(() => {
            if (window.hbspt) {
              clearInterval(poll);
              mountForm();
            }
          }, 80);
        };
        document.head.appendChild(script);
      } else {
        // Script already in DOM, poll for hbspt
        const poll = setInterval(() => {
          if (window.hbspt) {
            clearInterval(poll);
            mountForm();
          }
        }, 80);
      }
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: dark ? "oklch(0.20 0.05 155)" : "white",
        borderRadius: "0.75rem",
        border: dark ? "1px solid oklch(0.32 0.05 155)" : "1px solid var(--border)",
        padding: "2rem",
        boxShadow: dark ? "none" : "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* HubSpot form mount point */}
      <div
        id={formId.current}
        ref={containerRef}
        style={{
          // Inject brand-aligned styles into HubSpot form via CSS custom properties
          "--hs-btn-bg": "var(--amber-brand)",
          "--hs-btn-color": "var(--pine)",
        } as React.CSSProperties}
        className={dark ? "hs-form-dark" : "hs-form-light"}
      />
    </div>
  );
}
