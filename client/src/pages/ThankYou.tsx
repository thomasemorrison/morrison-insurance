// ThankYou.tsx — "Request Received" confirmation page
// Design: Morrison Insurance — Deep Pine & Amber, Cormorant Garamond + Inter
// Shown after a quote request is submitted; also used as Google Analytics conversion page

import { useEffect } from "react";
import { Link } from "wouter";
import { BRAND } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    // Fire Meta Pixel Lead event on quote form conversion
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Check icon */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "var(--pine)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          boxShadow: "0 8px 32px rgba(34,68,48,0.18)",
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Amber rule */}
      <div
        style={{
          width: "3rem",
          height: "3px",
          backgroundColor: "var(--amber-brand)",
          marginBottom: "1.5rem",
        }}
      />

      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "var(--pine)",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        Request Received
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1.125rem",
          color: "oklch(0.38 0.01 250)",
          maxWidth: "480px",
          lineHeight: 1.75,
          marginBottom: "0.75rem",
        }}
      >
        Thank you for reaching out to Morrison Insurance. One of our team members will be in touch with you shortly.
      </p>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9375rem",
          color: "oklch(0.50 0.01 250)",
          maxWidth: "420px",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        If you need immediate assistance, give us a call at{" "}
        <a
          href={`tel:${BRAND.phone}`}
          style={{ color: "var(--pine)", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
        >
          {BRAND.phone}
        </a>
        . We're available Monday–Friday, 9:00 AM – 4:00 PM CT.
      </p>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Link href="/">
          <a
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--pine)",
              color: "white",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              textDecoration: "none",
              transition: "opacity 180ms",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            ← Back to Home
          </a>
        </Link>

        <a
          href={BRAND.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "transparent",
            color: "var(--pine)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "0.9375rem",
            padding: "0.875rem 2rem",
            borderRadius: "0.375rem",
            textDecoration: "none",
            border: "2px solid var(--pine)",
            transition: "opacity 180ms",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          Leave Us a Google Review
        </a>
      </div>

      {/* Footer note */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.8125rem",
          color: "oklch(0.60 0.01 250)",
        }}
      >
        Morrison Insurance · 125 Shelbyville St., Center, TX 75935 · {BRAND.phone}
      </p>
    </div>
  );
}
