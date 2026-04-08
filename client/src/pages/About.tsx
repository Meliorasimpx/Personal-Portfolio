import { useState, useEffect } from "react";

type Stat = {
  name: string;
  full: string;
  value: number;
  description: string;
};

const specialStats: Stat[] = [
  {
    name: "S",
    full: "Strength",
    value: 8,
    description: "Backend Development — Building robust APIs and server infrastructure",
  },
  {
    name: "P",
    full: "Perception",
    value: 9,
    description: "UI/UX Design — Keen eye for detail, layout, and user experience",
  },
  {
    name: "E",
    full: "Endurance",
    value: 7,
    description: "Problem Solving — Can debug for hours without losing focus",
  },
  {
    name: "C",
    full: "Charisma",
    value: 8,
    description: "Communication — Translating tech concepts for any audience",
  },
  {
    name: "I",
    full: "Intelligence",
    value: 9,
    description: "Frontend Development — React, TypeScript, modern web technologies",
  },
  {
    name: "A",
    full: "Agility",
    value: 8,
    description: "Adaptability — Quick to learn new frameworks and languages",
  },
  {
    name: "L",
    full: "Luck",
    value: 7,
    description: "Creativity — Finding elegant solutions to complex problems",
  },
];

const perks = [
  { name: "React Specialist", level: 3, icon: "⚛" },
  { name: "Node.js Veteran", level: 3, icon: "⬡" },
  { name: "Express Handler", level: 3, icon: "⇄" },
  { name: "MongoDB Operative", level: 3, icon: "⛁" },
  { name: "Prisma Artificer", level: 3, icon: "◈" },
  { name: "TypeScript Guru", level: 3, icon: "TS" },
  { name: "Git Commander", level: 2, icon: "⑂" },
  { name: "CSS Alchemist", level: 2, icon: "✦" },
];

const StatBar = ({ stat, index }: { stat: Stat; index: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setWidth((stat.value / 10) * 100),
      200 + index * 150,
    );
    return () => clearTimeout(timer);
  }, [stat.value, index]);

  return (
    <div className="flex items-start gap-3 sm:gap-4 group">
      <div
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[var(--pip-border)] text-glow-strong shrink-0 group-hover:border-[var(--pip-green-dim)] transition-colors"
        style={{
          fontFamily: "var(--font-terminal)",
          fontSize: "1.3rem",
          background: "var(--pip-bg-panel)",
        }}
      >
        {stat.name}
      </div>
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex justify-between items-baseline gap-2">
          <span
            className="text-glow tracking-wider"
            style={{ fontFamily: "var(--font-terminal)", fontSize: "1.1rem" }}
          >
            {stat.full}
          </span>
          <span
            className="text-glow-strong shrink-0"
            style={{ fontFamily: "var(--font-terminal)", fontSize: "1.3rem" }}
          >
            {stat.value}
          </span>
        </div>
        <div className="stat-bar-track">
          <div
            className="stat-bar-fill"
            style={{ width: `${width}%` }}
            role="progressbar"
            aria-valuenow={stat.value}
            aria-valuemin={0}
            aria-valuemax={10}
            aria-label={`${stat.full}: ${stat.value} out of 10`}
          />
        </div>
        <p
          className="text-xs mt-1"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--pip-green-dim)",
          }}
        >
          {stat.description}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="page-enter space-y-8">
      {/* Section header */}
      <div>
        <h2
          className="text-glow-strong"
          style={{
            fontFamily: "var(--font-terminal)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            letterSpacing: "3px",
          }}
        >
          S.P.E.C.I.A.L. STATS
        </h2>
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--pip-green-dim)",
          }}
        >
          {">"} Displaying Vault Dweller skill assessment...
        </p>
      </div>

      <hr className="pip-divider" />

      {/* Bio section */}
      <div className="pip-frame-inner p-5 sm:p-6">
        <div
          className="mb-3"
          style={{
            fontFamily: "var(--font-terminal)",
            fontSize: "1.2rem",
            letterSpacing: "2px",
            color: "var(--pip-amber)",
          }}
        >
          {">"} VAULT DWELLER PROFILE
        </div>
        <div
          className="space-y-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            lineHeight: "1.8",
          }}
        >
          <p>
            A full-stack developer who emerged from the vault with a passion for
            building things that matter. Proficient in the MERN stack (MongoDB,
            Express, React, Node.js) with Prisma as my ORM of choice, I craft
            applications that are both functional and visually compelling.
          </p>
          <p style={{ color: "var(--pip-green-dim)" }}>
            When not coding, you'll find me exploring new technologies,
            contributing to open source, and surviving the wasteland of
            ever-changing JavaScript frameworks.
          </p>
        </div>
      </div>

      {/* S.P.E.C.I.A.L. Stats */}
      <div className="space-y-5">
        {specialStats.map((stat, i) => (
          <StatBar key={stat.name} stat={stat} index={i} />
        ))}
      </div>

      <hr className="pip-divider" />

      {/* Perks section */}
      <div>
        <h3
          className="text-glow mb-5"
          style={{
            fontFamily: "var(--font-terminal)",
            fontSize: "1.4rem",
            letterSpacing: "2px",
          }}
        >
          PERKS UNLOCKED
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="pip-frame-inner p-4 sm:p-5 text-center hover:border-[var(--pip-green-dim)] transition-all duration-200 cursor-default group"
            >
              <div
                className="text-2xl mb-2 transition-transform duration-200 group-hover:scale-110"
                style={{ color: "var(--pip-amber)" }}
              >
                {perk.icon}
              </div>
              <div
                className="text-xs sm:text-sm tracking-wider text-glow"
                style={{ fontFamily: "var(--font-terminal)" }}
              >
                {perk.name}
              </div>
              <div
                className="text-xs mt-2"
                style={{ color: "var(--pip-green-dim)" }}
                aria-label={`Skill level ${perk.level} of 3`}
              >
                {"★".repeat(perk.level)}
                {"☆".repeat(3 - perk.level)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
