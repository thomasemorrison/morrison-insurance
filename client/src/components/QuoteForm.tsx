import { useEffect, useRef, useState } from "react";

interface QuoteFormProps {
  dark?: boolean;
  defaultCoverage?: string;
}

const HS_PORTAL_ID = "246212557";
const HS_REGION = "na2";
const HS_FORM_ID = "156de4fd-61c3-4bff-a7a7-779bfb6bb35b";
const HS_SCRIPT_SRC = `https://js-${HS_REGION}.hsforms.net/forms/embed/${HS_PORTAL_ID}.js`;

// Singleton script loader — loads once, fires all queued callbacks
let scriptState: "idle" | "loading" | "ready" | "failed" = "idle";
const readyCallbacks: Array<() => void> = [];

function ensureHubSpotScript(onReady: () => void) {
  if (scriptState === "ready") {
    onReady();
    return;
  }
  readyCallbacks.push(onReady);
  if (scriptState !== "idle") return;

  scriptState = "loading";
  const script = document.createElement("script");
  script.src = HS_SCRIPT_SRC;
  script.async = true;
  script.onload = () => {
    // hbspt may still be initialising — poll until available
    const poll = setInterval(() => {
      if ((window as any).hbspt?.forms?.create) {
        clearInterval(poll);
        scriptState = "ready";
        readyCallbacks.forEach((cb) => cb());
        readyCallbacks.length = 0;
      }
    }, 50);
    setTimeout(() => {
      clearInterval(poll);
      if (scriptState !== "ready") scriptState = "failed";
    }, 12000);
  };
  script.onerror = () => {
    scriptState = "failed";
  };
  document.head.appendChild(script);
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function QuoteForm({ dark = false }: QuoteFormProps) {
  const mountId = useRef(`hs-mount-${Math.random().toString(36).slice(2, 9)}`);
  const initialized = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    ensureHubSpotScript(() => {
      try {
        window.hbspt!.forms.create({
          region: HS_REGION,
          portalId: HS_PORTAL_ID,
          formId: HS_FORM_ID,
          target: `#${mountId.current}`,
        });
        setStatus("ready");
      } catch {
        setStatus("failed");
      }
    });

    // Fallback: if not ready in 15s, show fallback
    const timeout = setTimeout(() => {
      setStatus((prev) => (prev === "loading" ? "failed" : prev));
    }, 15000);
    return () => clearTimeout(timeout);
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
      }}
    >
      {/* Loading state */}
      {status === "loading" && (
        <div
          style={{
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "3px solid var(--border)",
              borderTopColor: "var(--amber-brand)",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              color: dark ? "oklch(0.7 0.01 80)" : "oklch(0.55 0.01 250)",
            }}
          >
            Loading quote form…
          </p>
        </div>
      )}

      {/* Fallback if HubSpot fails to load */}
      {status === "failed" && (
        <div
          style={{
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontWeight: 700,
              fontSize: "1.125rem",
              color: dark ? "oklch(0.9 0.01 80)" : "var(--pine)",
            }}
          >
            Ready to get a quote?
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: dark ? "oklch(0.7 0.01 80)" : "oklch(0.45 0.01 250)",
              lineHeight: 1.6,
            }}
          >
            Call us or email us directly — we'll get you covered.
          </p>
          <a
            href="tel:+19365982791"
            style={{
              display: "inline-block",
              backgroundColor: "var(--amber-brand)",
              color: "var(--pine)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              textDecoration: "none",
            }}
          >
            Call (936) 598-2791
          </a>
        </div>
      )}

      {/* HubSpot form mount point — always in DOM so hbspt.forms.create can target it */}
      <div
        id={mountId.current}
        className={dark ? "hs-form-dark" : "hs-form-light"}
        style={{ width: "100%" }}
      />
    </div>
  );
}
