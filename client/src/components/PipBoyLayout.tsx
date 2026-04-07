import { type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type TabItem = {
  label: string;
  href: string;
};

const tabs: TabItem[] = [
  { label: "STAT", href: "/" },
  { label: "S.P.E.C.I.A.L.", href: "/about" },
  { label: "DATA", href: "/projects" },
  { label: "RADIO", href: "/contact" },
];

const PipBoyLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black p-4 overflow-hidden">
      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      {/* Main Pip-Boy frame */}
      <div className="crt-screen crt-flicker w-full h-full max-w-[1400px] max-h-[900px] flex flex-col pip-frame p-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2">
          <div className="flex items-center gap-3">
            <span className="status-online" />
            <span
              className="text-glow font-bold tracking-widest text-sm"
              style={{ fontFamily: "var(--font-terminal)", fontSize: "1.1rem" }}
            >
              PIP-BOY 3000 MARK IV
            </span>
          </div>
          <div
            className="text-xs tracking-wider"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--pip-green-dim)",
            }}
          >
            HP 100/100 &nbsp;&nbsp; LVL 30 &nbsp;&nbsp; AP 95/95
          </div>
        </div>

        {/* Tab navigation */}
        <nav className="flex gap-0 px-4 border-b border-[var(--pip-border)]">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              to={tab.href}
              className={`pip-tab ${location.pathname === tab.href ? "active" : ""}`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* Page content area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-12 py-6 page-enter">
          {children}
        </div>

        {/* Footer status bar */}
        <div
          className="flex items-center justify-between px-6 py-2 border-t border-[var(--pip-border)] text-xs tracking-wider"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--pip-green-dark)",
          }}
        >
          <span>VAULT-TEC INDUSTRIES // PERSONAL TERMINAL</span>
          <span>
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PipBoyLayout;
