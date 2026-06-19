// Morrison Insurance — Cookie Consent Banner
// Design: Modern Heritage / New American Vernacular
// Appears on first visit, stores consent in localStorage, links to Privacy Policy

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";

const STORAGE_KEY = "morrison_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slight delay so it doesn't flash immediately on load
    const timer = setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "1.25rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 2rem)",
        maxWidth: "680px",
        backgroundColor: "var(--pine-dark)",
        border: "1px solid oklch(0.38 0.06 155)",
        borderRadius: "0.75rem",
        padding: "1.25rem 1.5rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        animation: "cookieSlideUp 300ms cubic-bezier(0.23, 1, 0.32, 1) both",
      }}
    >
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(1rem); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      {/* Close button */}
      <button
        onClick={decline}
        aria-label="Dismiss cookie notice"
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "oklch(0.60 0.01 80)",
          padding: "0.25rem",
          lineHeight: 1,
          transition: "color 150ms",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.01 80)")}
      >
        <X size={16} />
      </button>

      {/* Text */}
      <div style={{ paddingRight: "1.5rem" }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.0625rem",
            color: "white",
            marginBottom: "0.375rem",
          }}
        >
          We use cookies
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8125rem",
            color: "oklch(0.72 0.01 80)",
            lineHeight: 1.6,
          }}
        >
          This site uses cookies and similar technologies from Google Analytics, HubSpot, Metricool, and Meta Pixel to understand how visitors use our site, improve your experience, and measure the effectiveness of our advertising. By clicking "Accept," you consent to our use of cookies.{" "}
          <Link
            href="/privacy-policy"
            style={{ color: "var(--amber-brand)", textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            Learn more
          </Link>
          .
        </p>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button
          onClick={accept}
          style={{
            backgroundColor: "var(--amber-brand)",
            color: "var(--pine)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            padding: "0.5rem 1.375rem",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer",
            transition: "opacity 150ms",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Accept All
        </button>
        <button
          onClick={decline}
          style={{
            backgroundColor: "transparent",
            color: "oklch(0.72 0.01 80)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            padding: "0.5rem 1.125rem",
            borderRadius: "0.375rem",
            border: "1px solid oklch(0.38 0.04 155)",
            cursor: "pointer",
            transition: "color 150ms, border-color 150ms",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "white";
            el.style.borderColor = "oklch(0.55 0.04 155)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "oklch(0.72 0.01 80)";
            el.style.borderColor = "oklch(0.38 0.04 155)";
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
