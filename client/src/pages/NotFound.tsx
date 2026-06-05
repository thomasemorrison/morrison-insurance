import { Link } from "wouter";
import { ArrowRight, Home } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--cream)",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <div
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(6rem, 15vw, 10rem)",
            color: "oklch(0.88 0.015 80)",
            lineHeight: 1,
            marginBottom: "0.5rem",
            userSelect: "none",
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "var(--pine)",
            marginBottom: "1rem",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            color: "oklch(0.45 0.01 250)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          The page you're looking for doesn't exist or may have moved. Head back home or give us a call — we're always happy to help.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <Link href="/" className="btn-primary">
            <Home size={15} />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-amber">
            Get a Quote
            <ArrowRight size={15} />
          </Link>
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            color: "oklch(0.55 0.01 250)",
            marginTop: "2rem",
          }}
        >
          Or call us directly:{" "}
          <a href={BRAND.phoneHref} style={{ color: "var(--pine)", fontWeight: 600 }}>
            {BRAND.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
