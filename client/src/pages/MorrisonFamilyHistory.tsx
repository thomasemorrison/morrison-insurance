import { useState } from "react";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { ExternalLink } from "lucide-react";

const HERITAGE_URL = "https://morrifam-lu8s3oq5.manus.space";

export default function MorrisonFamilyHistory() {
  const [iframeError, setIframeError] = useState(false);

  useSeoMeta(
    "Morrison Family History | Morrison Insurance | Center, TX",
    "Explore the Morrison family's deep roots in Shelby County, Texas — from the 1800s to today. The same family has called this community home for generations."
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      {/* Thin header bar */}
      <div
        style={{
          backgroundColor: "var(--forest-green)",
          padding: "0.625rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: "oklch(0.92 0.02 80)",
            letterSpacing: "0.02em",
          }}
        >
          Morrison Family History
        </span>
        <a
          href={HERITAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "var(--amber-brand)",
            textDecoration: "none",
            opacity: 0.85,
            transition: "opacity 150ms",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
        >
          Open full site
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Iframe embed */}
      {!iframeError ? (
        <iframe
          src={HERITAGE_URL}
          title="Morrison Family History"
          style={{
            flex: 1,
            width: "100%",
            border: "none",
            minHeight: "calc(100vh - 120px)",
          }}
          onError={() => setIframeError(true)}
          allow="fullscreen"
        />
      ) : (
        /* Fallback if iframe is blocked */
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            padding: "4rem 1.5rem",
            textAlign: "center",
            backgroundColor: "oklch(0.97 0.005 80)",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--forest-green)",
              lineHeight: 1.2,
            }}
          >
            The Morrison Family in Shelby County
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.0625rem",
              color: "oklch(0.35 0.02 80)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            The Morrison family has called Shelby County home since the 1800s.
            Explore the family history, genealogy records, and the generations
            that built deep roots in this community.
          </p>
          <a
            href={HERITAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Visit Morrison Family History
            <ExternalLink size={15} />
          </a>
        </div>
      )}
    </div>
  );
}
