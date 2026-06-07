import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Smartphone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCoverageOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoverageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const coverageLinks = NAV_LINKS[0].children || [];

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--pine-dark)", color: "oklch(0.97 0.01 80)" }} className="hidden md:block text-sm">
        <div className="container flex items-center justify-between py-2">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", opacity: 0.85 }}>
            Serving East Texans Since 1923 · Shelby County &amp; Deep East Texas
          </span>
          <div className="flex items-center gap-4">
            <a
              href={BRAND.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: "var(--amber-brand)" }}
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Smartphone size={13} />
              Free App
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a
              href={BRAND.phoneHref}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.8125rem" }}
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Phone size={13} />
              {BRAND.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
        style={{ backgroundColor: "white", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight no-underline">
            <span
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                fontSize: "1.375rem",
                color: "var(--pine)",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Morrison Insurance
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 500,
                color: "var(--amber-brand)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Est. 1923 · Center, Texas
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Coverage dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setCoverageOpen(!coverageOpen)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: coverageLinks.some((l) => l.href === location) ? "var(--pine)" : "var(--charcoal)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  padding: "0",
                  borderBottom: coverageLinks.some((l) => l.href === location) ? "2px solid var(--pine)" : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 180ms",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--pine)")}
                onMouseLeave={(e) => {
                  if (!coverageLinks.some((l) => l.href === location)) {
                    (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
                  }
                }}
              >
                Coverage
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform 200ms",
                    transform: coverageOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Dropdown */}
              {coverageOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.75rem)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                    border: "1px solid var(--border)",
                    padding: "0.5rem",
                    minWidth: "220px",
                    zIndex: 100,
                    animation: "dropdownIn 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {coverageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "0.625rem 1rem",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: location === link.href ? 600 : 500,
                        fontSize: "0.9375rem",
                        color: location === link.href ? "var(--pine)" : "var(--charcoal)",
                        textDecoration: "none",
                        borderRadius: "0.375rem",
                        backgroundColor: location === link.href ? "oklch(0.93 0.03 155)" : "transparent",
                        transition: "background-color 150ms, color 150ms",
                      }}
                      onMouseEnter={(e) => {
                        if (location !== link.href) {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.96 0.01 80)";
                          (e.currentTarget as HTMLElement).style.color = "var(--pine)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location !== link.href) {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav items */}
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href!}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: location === link.href ? "var(--pine)" : "var(--charcoal)",
                  textDecoration: "none",
                  borderBottom: location === link.href ? "2px solid var(--pine)" : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 180ms, border-color 180ms",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--pine)")}
                onMouseLeave={(e) => {
                  if (location !== link.href) (e.target as HTMLElement).style.color = "var(--charcoal)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={BRAND.phoneHref} className="btn-outline" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              <Phone size={14} />
              {BRAND.phone}
            </a>
            <Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--pine)" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "white",
              borderTop: "1px solid var(--border)",
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 100,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {/* Coverage section */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--amber-brand)",
                  padding: "0.75rem 0 0.375rem",
                }}
              >
                Coverage
              </p>
              {coverageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: location === link.href ? "var(--pine)" : "var(--charcoal)",
                    textDecoration: "none",
                    padding: "0.625rem 0.75rem",
                    borderRadius: "0.375rem",
                    backgroundColor: location === link.href ? "oklch(0.93 0.03 155)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div style={{ borderTop: "1px solid var(--border)", margin: "0.5rem 0" }} />

              {NAV_LINKS.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href!}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: location === link.href ? "var(--pine)" : "var(--charcoal)",
                    textDecoration: "none",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4">
                <a href={BRAND.phoneHref} className="btn-outline" style={{ justifyContent: "center" }}>
                  <Phone size={15} />
                  {BRAND.phone}
                </a>
                <Link href="/contact" className="btn-primary" style={{ justifyContent: "center" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        style={{
          backgroundColor: "var(--pine)",
          padding: "1rem 1.25rem",
          display: "flex",
          gap: "0.75rem",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.15)",
        }}
      >
        <a
          href={BRAND.phoneHref}
          style={{
            flex: 1,
            backgroundColor: "white",
            color: "var(--pine)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "0.9375rem",
            borderRadius: "0.375rem",
            padding: "0.75rem",
            textAlign: "center",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          href="/contact"
          style={{
            flex: 2,
            backgroundColor: "var(--amber-brand)",
            color: "oklch(0.18 0.01 250)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "0.9375rem",
            borderRadius: "0.375rem",
            padding: "0.75rem",
            textAlign: "center",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Get a Quote
        </Link>
      </div>

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(0.97); }
          to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
