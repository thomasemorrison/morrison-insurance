import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--pine-dark)", color: "oklch(0.85 0.01 80)" }}>
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span
                style={{
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "white",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                Morrison Insurance
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--amber-brand)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                Est. 1923 · Center, Texas
              </span>
            </div>
            <p
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "oklch(0.78 0.01 80)",
                marginBottom: "1.25rem",
                lineHeight: 1.6,
              }}
            >
              Local roots. Grounded in community.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                color: "oklch(0.68 0.01 80)",
                lineHeight: 1.7,
                maxWidth: "340px",
              }}
            >
              An independent insurance agency serving families, businesses, and neighbors across Shelby County and Deep East Texas for over 100 years.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { href: BRAND.social.facebook, label: "Facebook", Icon: Facebook },
                { href: BRAND.social.instagram, label: "Instagram", Icon: Instagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid oklch(0.45 0.02 155)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "oklch(0.78 0.01 80)",
                    transition: "border-color 180ms, color 180ms",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--amber-brand)";
                    el.style.color = "var(--amber-brand)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "oklch(0.45 0.02 155)";
                    el.style.color = "oklch(0.78 0.01 80)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--amber-brand)",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9375rem",
                      color: "oklch(0.75 0.01 80)",
                      textDecoration: "none",
                      transition: "color 180ms",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.75 0.01 80)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--amber-brand)",
                marginBottom: "1.25rem",
              }}
            >
              Contact Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a
                href={BRAND.phoneHref}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  color: "oklch(0.75 0.01 80)",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  transition: "color 180ms",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.01 80)")}
              >
                <Phone size={15} style={{ marginTop: "2px", flexShrink: 0 }} />
                {BRAND.phone}
              </a>
              <a
                href={BRAND.emailHref}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  color: "oklch(0.75 0.01 80)",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  transition: "color 180ms",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.01 80)")}
              >
                <Mail size={15} style={{ marginTop: "2px", flexShrink: 0 }} />
                {BRAND.email}
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  color: "oklch(0.75 0.01 80)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                <MapPin size={15} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>
                  {BRAND.address.street}<br />
                  {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                </span>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.55 0.02 155)",
                  marginBottom: "0.5rem",
                }}
              >
                Service Area
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8125rem",
                  color: "oklch(0.62 0.01 80)",
                  lineHeight: 1.6,
                }}
              >
                Center · Shelby County · Shelbyville · Timpson · Joaquin · Tenaha · Deep East Texas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid oklch(0.32 0.04 155)" }}>
        <div
          className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "oklch(0.52 0.01 80)" }}
        >
          <span>© {year} Morrison Insurance. All rights reserved.</span>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              style={{ color: "oklch(0.52 0.01 80)", textDecoration: "none", transition: "color 180ms" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "oklch(0.78 0.01 80)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.52 0.01 80)")}
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy-policy#terms"
              style={{ color: "oklch(0.52 0.01 80)", textDecoration: "none", transition: "color 180ms" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "oklch(0.78 0.01 80)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.52 0.01 80)")}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
