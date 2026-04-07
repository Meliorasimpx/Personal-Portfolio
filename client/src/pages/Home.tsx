import { useState, useEffect, useCallback } from "react";
import TerminalText from "../components/TerminalText";

const bootLines = [
  "VAULT-TEC INDUSTRIES (TM) TERMLINK PROTOCOL",
  "ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
  "COPYRIGHT 2077 ROBCO INDUSTRIES",
  "",
  "> INITIALIZING PERSONAL TERMINAL...",
  "> LOADING USER PROFILE...",
  "> DECRYPTION STATUS: COMPLETE",
  "> WELCOME, VAULT DWELLER.",
  "",
];

const Home = () => {
  const [bootComplete, setBoot] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const timer = setTimeout(
        () => setVisibleLines((v) => v + 1),
        visibleLines === 0 ? 300 : 150 + Math.random() * 200,
      );
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setBoot(true), 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  const noop = useCallback(() => {}, []);

  return (
    <div className="page-enter">
      {/* Boot sequence */}
      <div
        className="mb-8"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}
      >
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="boot-line"
            style={{
              animationDelay: `${i * 0.05}s`,
              color: line.startsWith(">")
                ? "var(--pip-green)"
                : "var(--pip-green-dim)",
              minHeight: "1.4em",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Main content after boot */}
      {bootComplete && (
        <div className="space-y-10">
          {/* Hero section */}
          <div className="space-y-4">
            <h1
              className="text-glow-strong"
              style={{
                fontFamily: "var(--font-terminal)",
                fontSize: "3.5rem",
                letterSpacing: "4px",
                lineHeight: 1.1,
              }}
            >
              <TerminalText
                text="MEINARD"
                speed={80}
                onComplete={noop}
                showCursor={false}
              />
            </h1>
            <p
              className="text-glow"
              style={{
                fontFamily: "var(--font-terminal)",
                fontSize: "1.6rem",
                color: "var(--pip-amber)",
                letterSpacing: "3px",
              }}
            >
              <TerminalText
                text="FULL-STACK DEVELOPER"
                speed={35}
                delay={500}
                showCursor={false}
                className="text-glow-amber"
                onComplete={noop}
              />
            </p>
          </div>

          <hr className="pip-divider" />

          {/* Terminal-style intro */}
          <div
            className="space-y-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem" }}
          >
            <div style={{ color: "var(--pip-green-dim)" }}>
              <span style={{ color: "var(--pip-green)" }}>$</span> cat
              welcome.txt
            </div>
            <div
              className="pip-frame-inner p-5 space-y-3"
              style={{ lineHeight: "1.7" }}
            >
              <p>
                Welcome to my personal terminal. I'm a developer who builds
                things for the web — from interactive frontends to robust
                backend systems. I believe in clean code, thoughtful
                architecture, and shipping things that actually work.
              </p>
              <p style={{ color: "var(--pip-green-dim)" }}>
                Navigate using the tabs above to explore my S.P.E.C.I.A.L.
                stats, quest log (projects), or tune into my radio frequency
                (contact).
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "QUESTS COMPLETED", value: "15+", sub: "Projects" },
              { label: "XP GAINED", value: "3+", sub: "Years Experience" },
              { label: "PERKS UNLOCKED", value: "10+", sub: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="pip-frame-inner p-4 text-center">
                <div
                  className="text-glow-strong"
                  style={{
                    fontFamily: "var(--font-terminal)",
                    fontSize: "2.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-widest mt-1"
                  style={{ color: "var(--pip-amber)" }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--pip-green-dark)" }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Active quests teaser */}
          <div>
            <div
              className="flex items-center gap-2 mb-3"
              style={{
                fontFamily: "var(--font-terminal)",
                fontSize: "1.2rem",
                letterSpacing: "2px",
              }}
            >
              <span style={{ color: "var(--pip-amber)" }}>{">"}</span>
              <span className="text-glow">CURRENT STATUS</span>
            </div>
            <div
              className="pip-frame-inner p-4 space-y-2"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}
            >
              <div className="flex items-center gap-2">
                <span className="status-online" />
                <span>Available for new quests (open to work)</span>
              </div>
              <div style={{ color: "var(--pip-green-dim)" }}>
                {">"} Specializing in MERN Stack (MongoDB, Express, React,
                Node.js) + Prisma
              </div>
              <div style={{ color: "var(--pip-green-dim)" }}>
                {">"} Always exploring the wasteland for new technologies
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
