import { type ReactNode, useRef, useEffect } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black p-2 sm:p-4 overflow-hidden relative">
      {/* Vault-Tec blueprint grid background */}
      <div className="vault-grid" />
      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      {/* Main Pip-Boy frame */}
      <div className="crt-screen crt-flicker w-full h-full max-w-[1400px] max-h-[900px] flex flex-col pip-frame p-3 sm:p-6 lg:p-8 relative z-10">
        {/* Header bar */}
        <div className="flex items-center justify-between px-3 sm:px-6 pt-3 sm:pt-4 pb-2">
          <div className="flex items-center gap-3">
            <span className="status-online" aria-hidden="true" />
            <span
              className="text-glow font-bold tracking-widest text-xs sm:text-sm"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              PIP-BOY 3000 MARK IV
            </span>
          </div>
          <div
            className="text-xs tracking-wider hidden sm:block"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--pip-green-dim)",
            }}
          >
            HP 100/100 &nbsp;&nbsp; LVL 30 &nbsp;&nbsp; AP 95/95
          </div>
        </div>

        {/* Tab navigation */}
        <nav
          className="flex gap-0 px-2 sm:px-4 border-b border-[var(--pip-border)] overflow-x-auto scrollbar-hide"
          role="tablist"
          aria-label="Main navigation"
        >
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.href;
            return (
              <Link
                key={tab.href}
                to={tab.href}
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "page" : undefined}
                className={`pip-tab whitespace-nowrap ${isActive ? "active" : ""}`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        {/* Page content area */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-8 lg:px-12 py-4 sm:py-6 page-enter scroll-smooth"
        >
          <main>{children}</main>
        </div>

        {/* Footer status bar */}
        <div
          className="flex items-center justify-between px-3 sm:px-6 py-2 border-t border-[var(--pip-border)] text-xs tracking-wider"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--pip-green-dark)",
          }}
        >
          <span className="truncate">VAULT-TEC INDUSTRIES // PERSONAL TERMINAL</span>
          <span className="shrink-0 ml-4">
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
