import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface QuoteFormProps {
  dark?: boolean;
  defaultCoverage?: string;
}

export default function QuoteForm({ dark = false, defaultCoverage = "" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    coverage: defaultCoverage,
    message: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    border: dark ? "1px solid oklch(0.45 0.04 155)" : "1px solid var(--border)",
    backgroundColor: dark ? "oklch(0.24 0.05 155)" : "white",
    color: dark ? "oklch(0.92 0.01 80)" : "var(--charcoal)",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 180ms",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: dark ? "oklch(0.85 0.01 80)" : "var(--charcoal)",
    marginBottom: "0.375rem",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to HubSpot or a backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          backgroundColor: dark ? "oklch(0.24 0.05 155)" : "white",
          borderRadius: "0.75rem",
          border: dark ? "1px solid oklch(0.35 0.05 155)" : "1px solid var(--border)",
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: "var(--amber-brand)", margin: "0 auto 1rem" }}
        />
        <h3
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: dark ? "white" : "var(--pine)",
            marginBottom: "0.75rem",
          }}
        >
          We'll be in touch soon.
        </h3>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            color: dark ? "oklch(0.75 0.01 80)" : "oklch(0.45 0.01 250)",
            lineHeight: 1.6,
          }}
        >
          Thank you for reaching out. A local Morrison Insurance agent will contact you shortly to walk through your options.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full Name <span style={{ color: "var(--amber-brand)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--pine)")}
            onBlur={(e) => (e.target.style.borderColor = dark ? "oklch(0.45 0.04 155)" : "var(--border)")}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone Number <span style={{ color: "var(--amber-brand)" }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(936) 555-0000"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--pine)")}
            onBlur={(e) => (e.target.style.borderColor = dark ? "oklch(0.45 0.04 155)" : "var(--border)")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Email Address <span style={{ color: "var(--amber-brand)" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--pine)")}
          onBlur={(e) => (e.target.style.borderColor = dark ? "oklch(0.45 0.04 155)" : "var(--border)")}
        />
      </div>

      <div>
        <label htmlFor="coverage" style={labelStyle}>
          What can we help you with?
        </label>
        <select
          id="coverage"
          name="coverage"
          value={form.coverage}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--pine)")}
          onBlur={(e) => (e.target.style.borderColor = dark ? "oklch(0.45 0.04 155)" : "var(--border)")}
        >
          <option value="">Select coverage type (optional)</option>
          <option value="home">Home Insurance</option>
          <option value="auto">Auto Insurance</option>
          <option value="business">Business Insurance</option>
          <option value="farm">Farm &amp; Ranch Insurance</option>
          <option value="not-sure">Not sure — help me figure it out</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Tell us a little about your situation
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="What are you looking to protect? Any specific questions?"
          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--pine)")}
          onBlur={(e) => (e.target.style.borderColor = dark ? "oklch(0.45 0.04 155)" : "var(--border)")}
        />
      </div>

      <button
        type="submit"
        className="btn-amber"
        style={{ width: "100%", justifyContent: "center", padding: "0.875rem", fontSize: "1rem" }}
      >
        Let's Get Started
      </button>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.8125rem",
          color: dark ? "oklch(0.55 0.01 80)" : "oklch(0.52 0.01 250)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        No obligation. A local agent will reach out to walk through your options.
      </p>
    </form>
  );
}
