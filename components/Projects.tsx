"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { staggerParent, staggerChild, slideInLeft } from "@/lib/motion";
import MagneticButton from "./MagneticButton";

type Project = {
  index: string;
  title: string;
  tagline: string;
  role: string;
  problem: string;
  outcome: string;
  tags: string[];
  pattern: "grid" | "pulse" | "bars";
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "LeaveDESK",
    tagline: "Faculty leave management, without the paper trail",
    role: "Full-Stack Developer — designed DB schema, REST API, and the React dashboard.",
    problem:
      "Manual leave approvals via paper forms created bottlenecks, lost records, and no audit trail for faculty administration.",
    outcome:
      "Replaced the entire manual workflow with a structured digital system: request → review → approve/reject → audit log — all in one place.",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "React"],
    pattern: "grid",
    github:
      "https://github.com/shyamprasad001/LEAVEDESK-Leave-Management-System",
    demo: "https://faculty-leave-backend-latest.onrender.com/login",
  },
  {
    index: "02",
    title: "Minimalist Weather Dashboard",
    tagline: "Real-time weather data, stripped of the clutter.",
    role: "Full Stack Developer — integrated external weather APIs, built the backend routing, and crafted a custom, framework-free interface.",
    problem:
      "Many modern weather applications are bloated with heavy UI frameworks and excessive styling, leading to slow load times and distracted users.",
    outcome:
      "A lightning-fast, production-ready weather app featuring a typography-focused layout, built entirely with plain CSS and clean borders for a distraction-free experience.",
    tags: ["Node.js", "Express", "REST API", "Plain CSS"],
    pattern: "pulse",
    github: "https://github.com/shyamprasad001/Weather-App/tree/main",
    demo: "https://shyamprasad001.github.io/Weather-App/",
  },
  {
    index: "03",
    title: "Minimalist Task Manager",
    tagline: "Clutter-free productivity and persistent task tracking",
    role: "Full-Stack Developer — designed a clean interface and built robust RESTful APIs.",
    problem:
      "Standard task managers are often bloated with heavy UI frameworks and excessive features, making simple daily planning feel overwhelming.",
    outcome:
      "A streamlined MERN-stack application featuring a distraction-free, plain-CSS interface, seamless state management, and reliable database storage for focused task execution.",
    tags: ["React", "Node.js", "MongoDB", "Plain CSS"],
    pattern: "bars",
    github: "https://github.com/shyamprasad001/Task-Management-App",
    demo: "https://shyamprasad001.github.io/Task-Management-App/",
  },
];

function PatternVisual({
  pattern,
  index,
}: {
  pattern: Project["pattern"];
  index: string;
}) {
  return (
    <div className="relative h-full w-full">
      {/* Large index number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 bottom-2 font-display font-semibold leading-none text-ion/10 select-none transition-colors duration-500 group-hover:text-ion/20"
        style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
      >
        {index}
      </span>

      {pattern === "grid" && (
        <div className="grid h-full w-full grid-cols-6 gap-1.5 p-6">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm bg-ion/10 transition-colors duration-500 group-hover:bg-ion/30"
              style={{ transitionDelay: `${(i % 6) * 35}ms` }}
            />
          ))}
        </div>
      )}

      {pattern === "pulse" && (
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-28 w-28">
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-ion/35"
                animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: i * 0.55,
                  ease: "easeOut",
                }}
              />
            ))}
            <div className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-ion shadow-ion-glow" />
          </div>
        </div>
      )}

      {pattern === "bars" && (
        <div className="flex h-full w-full items-end gap-2 p-8">
          {[35, 72, 50, 90, 62, 38, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-ion/15 transition-all duration-500 group-hover:bg-ion/40"
              style={{ height: `${h}%`, transitionDelay: `${i * 55}ms` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={staggerChild}
      className="group relative grid overflow-hidden rounded-3xl border border-line bg-surface/50 transition-all duration-500 hover:border-ion/50 md:grid-cols-[0.7fr_1.3fr]"
    >
      {/* ── Visual panel ── */}
      <div className="relative h-48 border-b border-line/50 md:h-auto md:border-b-0 md:border-r">
        <PatternVisual pattern={project.pattern} index={project.index} />
      </div>

      {/* ── Content panel ── */}
      <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
        <div>
          {/* Header row */}
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-graphite">
                {project.tagline}
              </p>
              <h3
                className="mt-2 font-display font-semibold text-bone transition-colors duration-300 group-hover:text-ion"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  lineHeight: "1.05",
                }}
              >
                {project.title}
              </h3>
            </div>
            {/* Rotating arrow badge */}
            <motion.button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={`${open ? "Collapse" : "Expand"} ${project.title} case study`}
              animate={{
                rotate: open ? 45 : 0,
                backgroundColor: open ? "#4DFAFF" : "rgba(38,38,38,0)",
              }}
              transition={{ duration: 0.3 }}
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line"
              data-cursor-hover
            >
              <ArrowUpRight
                className={`h-4 w-4 transition-colors ${open ? "text-ink" : "text-bone"}`}
              />
            </motion.button>
          </div>

          {/* Expandable case-study details */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pb-2 pt-1">
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ion">
                      Role
                    </p>
                    <p className="text-sm leading-relaxed text-mist">
                      {project.role}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ion">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-mist">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ion">
                      Outcome
                    </p>
                    <p className="text-sm leading-relaxed text-mist">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer — tags + GitHub */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-graphite transition-all duration-300 group-hover:border-ion/40 group-hover:text-ion"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            <MagneticButton
              as="a"
              href={project.demo}
              strength={0.3}
              className="flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-mist transition-all duration-300 hover:border-ion hover:text-ion"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View live
            </MagneticButton>
            <MagneticButton
              as="a"
              href={project.github}
              strength={0.3}
              className="flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-mist transition-all duration-300 hover:border-ion hover:text-ion"
            >
              <Github className="h-3.5 w-3.5" />
              View code
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 md:px-10 md:py-40">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-ion/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-ion">
            // selected work
          </p>
          <h2
            className="font-display font-semibold uppercase text-bone"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              lineHeight: "1.0",
              letterSpacing: "-0.03em",
            }}
          >
            Things I've shipped
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-graphite">
            Click the ↗ arrow to read the full case study
          </p>
        </motion.div>

        {/* ── Project cards ── */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
