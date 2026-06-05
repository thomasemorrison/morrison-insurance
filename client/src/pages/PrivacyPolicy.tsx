import { Link } from "wouter";
import { BRAND } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: "var(--pine)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.01 80)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "oklch(0.50 0.01 80)" }}>/</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "var(--amber-brand)" }}>Privacy Policy</span>
          </nav>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.68 0.01 80)", marginTop: "0.75rem" }}>
            Last updated: June 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "var(--cream)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "oklch(0.38 0.01 250)",
                lineHeight: 1.8,
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Morrison Insurance ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or contact us.
              </p>

              <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                Information We Collect
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                We may collect information you provide directly to us, including your name, phone number, email address, and details about your insurance needs when you fill out a contact or quote request form.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                We may also collect certain information automatically when you visit our website, such as your IP address, browser type, and pages visited, through standard web analytics tools.
              </p>

              <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                How We Use Your Information
              </h2>
              <p style={{ marginBottom: "1rem" }}>We use the information we collect to:</p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Respond to your inquiries and provide insurance quotes</li>
                <li>Contact you about your coverage needs</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p style={{ marginBottom: "1.5rem" }}>
                We do not sell your personal information to third parties.
              </p>

              <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                Information Sharing
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We may share your information with insurance carriers and underwriters as necessary to provide you with quotes and coverage. We may also share information as required by law or to protect our rights.
              </p>

              <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                Data Security
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We take reasonable measures to protect the information you provide to us. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                Contact Us
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <p>
                Morrison Insurance<br />
                {BRAND.address.full}<br />
                <a href={BRAND.phoneHref} style={{ color: "var(--pine)" }}>{BRAND.phone}</a><br />
                <a href={BRAND.emailHref} style={{ color: "var(--pine)" }}>{BRAND.email}</a>
              </p>

              <div id="terms" style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid var(--border)" }}>
                <h2 style={{ fontFamily: "Lora, Georgia, serif", fontWeight: 700, fontSize: "1.75rem", color: "var(--pine)", marginBottom: "1rem" }}>
                  Terms of Use
                </h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  By using this website, you agree to these terms. The content on this site is for general informational purposes only and does not constitute insurance advice. Coverage details vary by policy and carrier. Please contact us directly for information specific to your situation.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  Morrison Insurance makes no warranties about the accuracy or completeness of information on this website. We reserve the right to modify these terms at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
