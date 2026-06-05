import { useEffect, useRef } from "react";

interface QuoteFormProps {
  dark?: boolean;
  defaultCoverage?: string;
}

const HS_PORTAL_ID = "246212557";
const HS_REGION = "na2";
const HS_FORM_ID = "156de4fd-61c3-4bff-a7a7-779bfb6bb35b";
const HS_SCRIPT_SRC = `https://js-${HS_REGION}.hsforms.net/forms/embed/${HS_PORTAL_ID}.js`;

// Singleton: only inject the HubSpot script once per page load
let scriptInjected = false;
function ensureHubSpotScript() {
  if (scriptInjected) return;
  if (document.querySelector(`script[src*="hsforms.net/forms/embed"]`)) {
    scriptInjected = true;
    return;
  }
  scriptInjected = true;
  const s = document.createElement("script");
  s.src = HS_SCRIPT_SRC;
  s.async = true;
  document.head.appendChild(s);
}

export default function QuoteForm({ dark = false }: QuoteFormProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const formDivRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Ensure the HubSpot script is loaded
    ensureHubSpotScript();

    // Create a stable hs-form-frame div that won't be touched by React
    const formDiv = document.createElement("div");
    formDiv.className = "hs-form-frame";
    formDiv.setAttribute("data-region", HS_REGION);
    formDiv.setAttribute("data-form-id", HS_FORM_ID);
    formDiv.setAttribute("data-portal-id", HS_PORTAL_ID);
    formDivRef.current = formDiv;

    if (wrapperRef.current) {
      wrapperRef.current.appendChild(formDiv);
    }

    // Cleanup on unmount
    return () => {
      if (formDivRef.current && wrapperRef.current) {
        try {
          wrapperRef.current.removeChild(formDivRef.current);
        } catch {
          // Already removed
        }
      }
      formDivRef.current = null;
      initialized.current = false;
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: dark ? "oklch(0.20 0.05 155)" : "white",
        borderRadius: "0.75rem",
        border: dark
          ? "1px solid oklch(0.32 0.05 155)"
          : "1px solid var(--border)",
        padding: "2rem",
        boxShadow: dark ? "none" : "0 4px 24px rgba(0,0,0,0.07)",
        minHeight: "300px",
      }}
    >
      {/* HubSpot form is imperatively mounted here to prevent React re-renders from destroying the iframe */}
      <div ref={wrapperRef} style={{ width: "100%" }} />
    </div>
  );
}
