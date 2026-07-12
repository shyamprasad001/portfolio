"use client";

import { motion } from "framer-motion";
import { staggerParent, staggerChild, slideInLeft } from "@/lib/motion";

type Skill = {
  name: string;
  category: string;
  description: string;
  icon: string; // SVG string or emoji
  span: string;
  accent?: boolean; // whether to use a bolder highlight
};

const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven UIs with hooks, context, and Framer Motion animations.",
    icon: "⚛",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    name: "Node.js",
    category: "Runtime",
    description: "Event-driven server architecture, streams, and high-throughput APIs.",
    icon: "⬡",
    span: "md:col-span-2",
  },
  {
    name: "Express",
    category: "API Layer",
    description: "RESTful routing, middleware chains, and auth integrations.",
    icon: "≋",
    span: "md:col-span-1",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Document modelling, aggregation pipelines, and Atlas clusters.",
    icon: "◈",
    span: "md:col-span-1",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    description: "Production-grade Java microservices, JPA/Hibernate, Spring Security.",
    icon: "✦",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    name: "Django",
    category: "Backend",
    description: "Rapid development with ORM, admin panel, and class-based views.",
    icon: "◆",
    span: "md:col-span-2",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerising apps for consistent, reproducible deployments.",
    icon: "⬡",
    span: "md:col-span-1",
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    description: "Automated build, test, and deployment pipelines.",
    icon: "↻",
    span: "md:col-span-1",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "EC2, S3, and basic infrastructure provisioning on the cloud.",
    icon: "⬡",
    span: "md:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="stack" className="relative px-6 py-28 md:px-10 md:py-40">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-ion/6 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-ion">
              // stack
            </p>
            <h2
              className="font-display font-semibold uppercase text-bone"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", lineHeight: "1.0", letterSpacing: "-0.03em" }}
            >
              What I build with
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-graphite">
            Nine battle-tested tools. One principle: pick what the system
            actually needs, not what's trending.
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[10rem]"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={staggerChild}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-500 hover:border-ion/70 hover:bg-ion-dim/20 hover:shadow-ion-glow ${skill.span}`}
            >
              {/* Category + icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-graphite transition-colors duration-300 group-hover:text-ion">
                  {skill.category}
                </span>
                <span className="text-xl text-ion/30 transition-all duration-300 group-hover:text-ion group-hover:scale-110 select-none">
                  {skill.icon}
                </span>
              </div>

              {/* Name */}
              <div>
                <span
                  className="font-display font-semibold text-bone transition-colors duration-300"
                  style={{ fontSize: skill.accent ? "clamp(1.6rem, 2.5vw, 2.25rem)" : "clamp(1.3rem, 2vw, 1.8rem)" }}
                >
                  {skill.name}
                </span>

                {/* Description — reveals on hover */}
                <p className="mt-1.5 max-h-0 overflow-hidden font-body text-xs leading-relaxed text-mist opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-20 group-hover:opacity-100">
                  {skill.description}
                </p>
              </div>

              {/* Ambient glow orb inside card */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-ion/0 blur-2xl transition-all duration-700 group-hover:bg-ion/20"
              />
              {/* Bottom accent line */}
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-ion transition-all duration-500 group-hover:w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
