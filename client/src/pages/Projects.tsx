type Quest = {
  name: string;
  status: "completed" | "active" | "side-quest";
  description: string;
  tech: string[];
  xp: string;
  link?: string;
};

const quests: Quest[] = [
  {
    name: "Project Nexus",
    status: "completed",
    description:
      "Built a full-stack web application with authentication, real-time data, and a responsive dashboard interface.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    xp: "2500 XP",
    link: "#",
  },
  {
    name: "Operation Dark Mode",
    status: "completed",
    description:
      "Developed a component library with theme support, accessibility features, and comprehensive documentation.",
    tech: ["React", "CSS", "Storybook", "Jest"],
    xp: "1800 XP",
    link: "#",
  },
  {
    name: "The API Frontier",
    status: "completed",
    description:
      "Designed and implemented a RESTful API serving thousands of requests with caching and rate limiting.",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    xp: "2200 XP",
    link: "#",
  },
  {
    name: "Wasteland Explorer",
    status: "active",
    description:
      "An ongoing project exploring AI/ML integrations with web applications for intelligent user experiences.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    xp: "??? XP",
  },
  {
    name: "Side Quest: CLI Toolkit",
    status: "side-quest",
    description:
      "A collection of command-line tools for automating repetitive development tasks.",
    tech: ["Node.js", "TypeScript", "Commander.js"],
    xp: "800 XP",
    link: "#",
  },
  {
    name: "Side Quest: Portfolio Terminal",
    status: "active",
    description:
      "This very terminal you're looking at — a Fallout-themed portfolio built with React and love.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    xp: "1200 XP",
  },
];

const statusConfig = {
  completed: {
    label: "[COMPLETED]",
    color: "var(--pip-green)",
    badge: "pip-badge",
  },
  active: {
    label: "[ACTIVE]",
    color: "var(--pip-amber)",
    badge: "pip-badge pip-badge-amber",
  },
  "side-quest": {
    label: "[SIDE QUEST]",
    color: "var(--pip-green-dim)",
    badge: "pip-badge",
  },
};

const Projects = () => {
  return (
    <div className="page-enter space-y-8">
      {/* Header */}
      <div>
        <h2
          className="text-glow-strong"
          style={{
            fontFamily: "var(--font-terminal)",
            fontSize: "2rem",
            letterSpacing: "3px",
          }}
        >
          QUEST LOG
        </h2>
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--pip-green-dim)",
          }}
        >
          {">"} Displaying completed and active missions...
        </p>
      </div>

      <hr className="pip-divider" />

      {/* Quest summary */}
      <div className="flex gap-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
        <span>
          <span style={{ color: "var(--pip-green)" }}>
            {quests.filter((q) => q.status === "completed").length}
          </span>{" "}
          Completed
        </span>
        <span>
          <span style={{ color: "var(--pip-amber)" }}>
            {quests.filter((q) => q.status === "active").length}
          </span>{" "}
          Active
        </span>
        <span>
          <span style={{ color: "var(--pip-green-dim)" }}>
            {quests.filter((q) => q.status === "side-quest").length}
          </span>{" "}
          Side Quests
        </span>
      </div>

      {/* Quest cards */}
      <div className="space-y-4">
        {quests.map((quest) => {
          const config = statusConfig[quest.status];
          return (
            <div key={quest.name} className="quest-card pl-7">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3
                    className="text-glow"
                    style={{
                      fontFamily: "var(--font-terminal)",
                      fontSize: "1.3rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {quest.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={config.badge}>{config.label}</span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-terminal)",
                      color: "var(--pip-amber)",
                    }}
                  >
                    {quest.xp}
                  </span>
                </div>
              </div>

              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--pip-green-dim)",
                  lineHeight: "1.6",
                }}
              >
                {quest.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {quest.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 border border-[var(--pip-border)] rounded-sm"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--pip-green-dim)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {quest.link && (
                  <a
                    href={quest.link}
                    className="pip-button text-xs"
                    style={{ padding: "4px 14px", fontSize: "0.8rem" }}
                  >
                    EXPLORE
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <hr className="pip-divider" />

      {/* Footer note */}
      <div
        className="text-center py-2"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--pip-green-dark)",
        }}
      >
        {">"} More quests available on{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[var(--pip-green)] transition-colors"
          style={{ color: "var(--pip-green-dim)" }}
        >
          GitHub Terminal
        </a>
      </div>
    </div>
  );
};

export default Projects;
