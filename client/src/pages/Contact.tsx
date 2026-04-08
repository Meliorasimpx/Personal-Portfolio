import { useState, type FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [transmitting, setTransmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="page-enter space-y-8">
      {/* Header */}
      <div>
        <h2
          className="text-glow-strong"
          style={{
            fontFamily: "var(--font-terminal)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            letterSpacing: "3px",
          }}
        >
          RADIO FREQUENCY
        </h2>
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--pip-green-dim)",
          }}
        >
          {">"} Establishing communication channel...
        </p>
      </div>

      <hr className="pip-divider" />

      {/* Contact channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            label: "EMAIL",
            value: "hello@example.com",
            icon: "[ @ ]",
            href: "mailto:hello@example.com",
          },
          {
            label: "GITHUB",
            value: "github.com/meinard",
            icon: "[ G ]",
            href: "https://github.com",
          },
          {
            label: "LINKEDIN",
            value: "/in/meinard",
            icon: "[ in ]",
            href: "https://linkedin.com",
          },
        ].map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pip-frame-inner p-5 block transition-all duration-200 group hover:border-[var(--pip-green-dim)]"
            aria-label={`Contact via ${channel.label}`}
          >
            <div
              className="text-lg mb-2 text-glow group-hover:text-glow-strong transition-all"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              {channel.icon}
            </div>
            <div
              className="text-xs tracking-widest mb-1"
              style={{
                fontFamily: "var(--font-terminal)",
                color: "var(--pip-amber)",
              }}
            >
              {channel.label}
            </div>
            <div
              className="text-sm group-hover:text-[var(--pip-green)] transition-colors"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--pip-green-dim)",
              }}
            >
              {channel.value}
            </div>
          </a>
        ))}
      </div>

      <hr className="pip-divider" />

      {/* Terminal message form */}
      <div>
        <div
          className="flex items-center gap-2 mb-5"
          style={{
            fontFamily: "var(--font-terminal)",
            fontSize: "1.2rem",
            letterSpacing: "2px",
          }}
        >
          <span style={{ color: "var(--pip-amber)" }}>{">"}</span>
          <span className="text-glow">SEND TRANSMISSION</span>
        </div>

        {submitted ? (
          <div className="pip-frame-inner p-8 text-center space-y-4">
            <div
              className="text-glow-strong"
              style={{
                fontFamily: "var(--font-terminal)",
                fontSize: "1.5rem",
                letterSpacing: "2px",
              }}
            >
              TRANSMISSION SENT
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--pip-green-dim)",
                lineHeight: "1.6",
              }}
            >
              Your message has been received. I'll respond on this frequency
              shortly.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="pip-button mt-4"
            >
              NEW TRANSMISSION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-xs tracking-widest"
                style={{
                  fontFamily: "var(--font-terminal)",
                  color: "var(--pip-green-dim)",
                }}
              >
                CALLSIGN (NAME)
              </label>
              <div className="flex items-center gap-2">
                <span
                  style={{ color: "var(--pip-green)" }}
                  aria-hidden="true"
                >
                  {">"}
                </span>
                <input
                  id="name"
                  type="text"
                  className="terminal-input"
                  placeholder="Enter your callsign..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  autoComplete="name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xs tracking-widest"
                style={{
                  fontFamily: "var(--font-terminal)",
                  color: "var(--pip-green-dim)",
                }}
              >
                FREQUENCY (EMAIL)
              </label>
              <div className="flex items-center gap-2">
                <span
                  style={{ color: "var(--pip-green)" }}
                  aria-hidden="true"
                >
                  {">"}
                </span>
                <input
                  id="email"
                  type="email"
                  className="terminal-input"
                  placeholder="your@frequency.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xs tracking-widest"
                style={{
                  fontFamily: "var(--font-terminal)",
                  color: "var(--pip-green-dim)",
                }}
              >
                MESSAGE
              </label>
              <div className="flex items-start gap-2">
                <span
                  style={{ color: "var(--pip-green)", marginTop: "10px" }}
                  aria-hidden="true"
                >
                  {">"}
                </span>
                <textarea
                  id="message"
                  className="terminal-input resize-none"
                  rows={5}
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  style={{ borderBottom: "1px solid var(--pip-border)" }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="pip-button"
                disabled={transmitting || !isFormValid}
              >
                {transmitting ? (
                  <span className="tracking-widest">
                    TRANSMITTING
                    <span className="typing-cursor" />
                  </span>
                ) : (
                  "SEND TRANSMISSION"
                )}
              </button>
              {!isFormValid && formData.name && (
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--pip-green-dark)",
                  }}
                >
                  Fill all fields to transmit
                </span>
              )}
            </div>
          </form>
        )}
      </div>

      {/* Signal strength decoration */}
      <div
        className="text-center py-4"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--pip-green-dark)",
        }}
        aria-hidden="true"
      >
        ╔══════════════════════════════════╗
        <br />
        ║ &nbsp; SIGNAL STRENGTH: ████████░░ 80% &nbsp; ║
        <br />
        ╚══════════════════════════════════╝
      </div>
    </div>
  );
};

export default Contact;
