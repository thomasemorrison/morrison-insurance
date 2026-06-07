// Morrison Insurance — AppBanner Component
// Design: Modern Heritage / New American Vernacular
// Purpose: Promote the Morrison Insurance app as a free lead gen tool for all visitors.
// Messaging: "Your insurance agent in your pocket" — available to anyone, even competitor clients.

import { Smartphone, ArrowRight, Shield, Bell, FileText } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface AppBannerProps {
  variant?: "dark" | "light" | "amber";
}

export default function AppBanner({ variant = "dark" }: AppBannerProps) {
  const isDark = variant === "dark";
  const isAmber = variant === "amber";

  const bg = isDark
    ? "var(--pine)"
    : isAmber
    ? "var(--amber-brand)"
    : "var(--cream)";

  const headingColor = isDark ? "white" : isAmber ? "var(--pine)" : "var(--pine)";
  const bodyColor = isDark
    ? "oklch(0.78 0.01 80)"
    : isAmber
    ? "oklch(0.22 0.06 155)"
    : "oklch(0.40 0.01 250)";
  const pillBg = isDark
    ? "oklch(0.22 0.06 155)"
    : isAmber
    ? "oklch(0.22 0.06 155)"
    : "oklch(0.92 0.02 155)";
  const pillColor = isDark || isAmber ? "var(--amber-brand)" : "var(--pine)";
  const ctaBg = isDark ? "var(--amber-brand)" : "var(--pine)";
  const ctaColor = isDark ? "var(--pine)" : "white";
  const iconColor = isDark ? "var(--amber-brand)" : isAmber ? "var(--pine)" : "var(--pine)";

  const features = [
    { icon: <Shield size={16} />, text: "Review your coverage anytime" },
    { icon: <FileText size={16} />, text: "Request quotes on the go" },
    { icon: <Bell size={16} />, text: "Stay connected with your agent" },
  ];

  return (
    <section style={{ backgroundColor: bg, padding: "4rem 0" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
          className="app-banner-grid"
        >
          {/* Left: Content */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: pillBg,
              borderRadius: "2rem",
              padding: "0.3rem 0.875rem",
              marginBottom: "1.25rem",
            }}>
              <Smartphone size={13} style={{ color: pillColor }} />
              <span style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: pillColor,
              }}>Free App — No Account Required</span>
            </div>

            <h2 style={{
              fontFamily: "Lora, Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              color: headingColor,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}>
              Your insurance agent,<br />in your pocket.
            </h2>

            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: bodyColor,
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "1.5rem",
            }}>
              The Morrison Insurance app is free for anyone in East Texas — whether you're a current client or shopping around. Review your coverage, request quotes, and stay connected with a local agent who actually knows your name.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ color: iconColor, flexShrink: 0 }}>{f.icon}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: bodyColor }}>{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href={BRAND.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                backgroundColor: ctaBg,
                color: ctaColor,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.375rem",
                textDecoration: "none",
                transition: "opacity 180ms ease-out, transform 160ms ease-out",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <Smartphone size={16} />
              Open the Free App
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: Phone mockup */}
          <div className="app-banner-phone" style={{
            flexShrink: 0,
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0",
          }}>
            <div style={{
              width: "160px",
              height: "300px",
              borderRadius: "2rem",
              border: `3px solid ${isDark ? "oklch(0.35 0.06 155)" : "oklch(0.75 0.04 155)"}`,
              backgroundColor: isDark ? "oklch(0.18 0.04 155)" : "white",
              boxShadow: isDark
                ? "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 oklch(0.40 0.06 155)"
                : "0 20px 60px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Phone notch */}
              <div style={{
                width: "60px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: isDark ? "oklch(0.30 0.04 155)" : "oklch(0.88 0.01 250)",
                margin: "12px auto 0",
              }} />
              {/* App screen content */}
              <div style={{ padding: "1rem 0.75rem", flex: 1 }}>
                <div style={{
                  backgroundColor: "var(--pine)",
                  borderRadius: "0.5rem",
                  padding: "0.75rem",
                  marginBottom: "0.75rem",
                }}>
                  <div style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "0.6rem", color: "white", lineHeight: 1.3 }}>Morrison Insurance</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.5rem", color: "var(--amber-brand)", marginTop: "0.2rem" }}>Est. 1923 · Center, TX</div>
                </div>
                {[
                  { label: "My Coverage", icon: "🛡️" },
                  { label: "Get a Quote", icon: "📋" },
                  { label: "File a Claim", icon: "📞" },
                  { label: "Contact Agent", icon: "👤" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.4rem 0.5rem",
                    borderRadius: "0.375rem",
                    marginBottom: "0.375rem",
                    backgroundColor: isDark ? "oklch(0.22 0.04 155)" : "oklch(0.97 0.005 250)",
                  }}>
                    <span style={{ fontSize: "0.65rem" }}>{item.icon}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.5rem", fontWeight: 600, color: isDark ? "oklch(0.85 0.01 80)" : "var(--pine)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
              {/* Home bar */}
              <div style={{
                width: "50px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: isDark ? "oklch(0.35 0.04 155)" : "oklch(0.82 0.01 250)",
                margin: "0 auto 10px",
              }} />
            </div>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.6875rem",
              color: bodyColor,
              textAlign: "center",
              marginTop: "0.875rem",
              lineHeight: 1.5,
            }}>Free for everyone.<br />No download required.</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .app-banner-grid {
            grid-template-columns: 1fr !important;
          }
          .app-banner-phone {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
