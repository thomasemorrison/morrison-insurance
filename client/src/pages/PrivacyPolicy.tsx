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
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "oklch(0.68 0.01 80)", marginTop: "0.75rem" }}>
            Last updated: June 2026
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
                Morrison Insurance ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit <strong>morrison-ins.net</strong> (the "Site") or contact us. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
              </p>

              {/* 1 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                1. Information We Collect
              </h2>
              <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Information you provide directly:</p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Name, phone number, and email address submitted through our contact or quote request forms</li>
                <li>Details about your insurance needs or current coverage</li>
                <li>Any other information you choose to include in a message to us</li>
              </ul>
              <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Information collected automatically:</p>
              <p style={{ marginBottom: "1rem" }}>
                When you visit the Site, certain information is collected automatically through cookies and similar tracking technologies operated by the third-party services listed below:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li>
                  <strong>Google Analytics (Google LLC)</strong> — collects anonymized data including your IP address, browser type, device type, pages visited, time spent on pages, and referral source. This data is used to understand how visitors use our Site and to improve its content. Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)" }}>policies.google.com/privacy</a>.
                </li>
                <li>
                  <strong>HubSpot (HubSpot, Inc.)</strong> — powers our contact and quote request forms. When you submit a form, your name, email, phone number, and message are stored in HubSpot's CRM so our team can follow up with you. HubSpot may also set cookies to track form interactions and page visits. HubSpot's privacy policy is available at <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)" }}>legal.hubspot.com/privacy-policy</a>.
                </li>
                <li>
                  <strong>Metricool (Metricool SL)</strong> — used to analyze website traffic and manage our social media presence. Metricool may collect anonymized usage data including page views and session information. Metricool's privacy policy is available at <a href="https://metricool.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)" }}>metricool.com/privacy-policy</a>.
                </li>
                <li>
                  <strong>Meta Pixel (Meta Platforms, Inc.)</strong> — a tracking pixel from Facebook/Meta used to measure the effectiveness of our advertising, build retargeting audiences, and understand how visitors interact with our Site after seeing our ads on Facebook or Instagram. The Meta Pixel may set cookies and collect information such as your IP address, browser type, and pages visited. You can opt out of Meta's advertising tracking at <a href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)" }}>facebook.com/adpreferences</a>. Meta's privacy policy is available at <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)" }}>facebook.com/privacy/policy</a>.
                </li>
              </ul>

              {/* 2 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                2. Cookies and Tracking Technologies
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                Our Site uses cookies — small text files stored on your device — and similar technologies to operate and improve the Site. The cookies placed on your device come from the third-party services described above (Google Analytics, HubSpot, Metricool, and Meta Pixel). We do not place first-party tracking cookies ourselves.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                You may decline cookies by clicking "Decline" in the cookie consent notice when you first visit the Site. You can also manage or delete cookies through your browser settings. Note that declining cookies may affect some functionality of the Site, including form submissions.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                To opt out of Google Analytics tracking across all websites, you may install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pine)" }}>Google Analytics Opt-out Browser Add-on</a>.
              </p>

              {/* 3 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                3. How We Use Your Information
              </h2>
              <p style={{ marginBottom: "1rem" }}>We use the information we collect to:</p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Respond to your inquiries and provide insurance quotes</li>
                <li>Contact you about your coverage needs</li>
                <li>Improve our website content and user experience</li>
                <li>Analyze website traffic and measure the effectiveness of our marketing</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p style={{ marginBottom: "1.5rem" }}>
                <strong>We do not sell your personal information to third parties.</strong>
              </p>

              {/* 4 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                4. Information Sharing
              </h2>
              <p style={{ marginBottom: "1rem" }}>We may share your information in the following limited circumstances:</p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><strong>Insurance carriers and underwriters</strong> — as necessary to provide you with quotes and coverage options</li>
                <li><strong>Service providers</strong> — including HubSpot, Google, Metricool, and Meta, as described in Section 1, solely to operate the services they provide to us</li>
                <li><strong>Legal requirements</strong> — when required by law, court order, or governmental authority, or to protect our rights and the safety of others</li>
              </ul>

              {/* 5 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                5. Data Security
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We take reasonable administrative and technical measures to protect the information you provide to us. Form submissions are processed through HubSpot's secure platform. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              {/* 6 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                6. Your Choices
              </h2>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><strong>Opt out of analytics:</strong> Use the Google Analytics Opt-out Add-on or your browser's cookie settings</li>
                <li><strong>Unsubscribe from emails:</strong> Click the unsubscribe link in any email we send you</li>
                <li><strong>Request deletion:</strong> Contact us to request deletion of personal information you have submitted through our forms</li>
              </ul>

              {/* 7 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                7. Children's Privacy
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.
              </p>

              {/* 8 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                8. Changes to This Policy
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>

              {/* 9 */}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.375rem", color: "var(--pine)", marginBottom: "1rem", marginTop: "2.5rem" }}>
                9. Contact Us
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p>
                Morrison Insurance<br />
                {BRAND.address.full}<br />
                <a href={BRAND.phoneHref} style={{ color: "var(--pine)" }}>{BRAND.phone}</a><br />
                <a href={BRAND.emailHref} style={{ color: "var(--pine)" }}>{BRAND.email}</a>
              </p>

              {/* Terms of Use */}
              <div id="terms" style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid var(--border)" }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "1.75rem", color: "var(--pine)", marginBottom: "1rem" }}>
                  Terms of Use
                </h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Informational Purpose Only</p>
                <p style={{ marginBottom: "1.5rem" }}>
                  The content on this Site is provided for general informational purposes only and does not constitute insurance advice, a binding quote, or a contract of insurance. Coverage terms, conditions, and availability vary by carrier and individual circumstances. Please contact us directly for information specific to your situation.
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: 600 }}>No Warranties</p>
                <p style={{ marginBottom: "1.5rem" }}>
                  Morrison Insurance makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or reliability of information on this Site. We reserve the right to modify, update, or remove content at any time without notice.
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Limitation of Liability</p>
                <p style={{ marginBottom: "1.5rem" }}>
                  To the fullest extent permitted by law, Morrison Insurance shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this Site or reliance on its content.
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Governing Law</p>
                <p style={{ marginBottom: "1.5rem" }}>
                  These Terms of Use are governed by the laws of the State of Texas, without regard to its conflict of law provisions.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  We reserve the right to modify these Terms at any time. Continued use of the Site following any changes constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
