"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  function copyEmail() {
    navigator.clipboard?.writeText("anmolpoojari23@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <div className="eyebrow reveal">Contact</div>
        <h2 className="section-title reveal">Let's work together</h2>
        <p className="section-subtitle reveal">
          Open to full-time backend and full stack roles, freelance projects,
          and research collaborations.
        </p>

        <div className="contact-grid">
          {/* ── LEFT: contact info ── */}
          <div className="contact-info reveal">
            {/* Email */}
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,12 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">
                  <a href="mailto:anmolpoojari23@gmail.com">
                    anmolpoojari23@gmail.com
                  </a>
                </div>
                <button
                  className="copy-email-btn"
                  onClick={copyEmail}
                  aria-label="Copy email to clipboard"
                >
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                  {copied ? "✓ Copied!" : "Copy email"}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.07 2.18A2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 83174 13964</div>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">📍</div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">
                  Bengaluru, Karnataka, India
                  <br />
                  <span style={{ fontSize: "0.8125rem", color: "var(--slate)" }}>
                    Open to remote &amp; relocation
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="contact-item-label" style={{ marginBottom: "12px" }}>
                Find me online
              </div>
              <div className="contact-social">
                <a href="https://www.linkedin.com/in/anmolhr23/" target="_blank" rel="noopener" className="contact-social-btn" aria-label="LinkedIn profile">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener" className="contact-social-btn" aria-label="GitHub profile">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.adwitaenterprises.com" target="_blank" rel="noopener" className="contact-social-btn" aria-label="Live project">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: contact form ── */}
          <div className="reveal reveal-delay-2">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Sarah Johnson"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Backend Developer role at Acme Corp"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project, or collaboration you have in mind…"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === "loading"}
                style={{ alignSelf: "flex-start", opacity: status === "loading" ? 0.7 : 1 }}
              >
                {status === "loading" ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {status === "success" && (
                <p style={{ fontSize: "0.875rem", color: "var(--sage)", marginTop: "12px" }}>
                  ✓ Message sent — I'll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p style={{ fontSize: "0.875rem", color: "#C4622D", marginTop: "12px" }}>
                  Something went wrong. Please email me directly at anmolpoojari23@gmail.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}