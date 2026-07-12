"use client";

import { motion } from "framer-motion";
import { scaleReveal, staggerParent, staggerChild, slideInLeft } from "@/lib/motion";
import StatCounter from "./StatCounter";

const facts = [
  { label: "Status", value: "B.Tech Student" },
  { label: "Training", value: "NxtWave CCBP 4.0 Academy" },
  { label: "Focus", value: "Full Stack + DevOps" },
  { label: "Based in", value: "India 🇮🇳" },
];

const stats = [
  { label: "Projects Shipped", to: 3, suffix: "+" },
  { label: "Technologies", to: 9, suffix: "" },
  { label: "Domains Explored", to: 4, suffix: "" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 md:py-40">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-ion/6 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-ion">
            // about
          </p>
          <h2
            className="font-display font-semibold uppercase text-bone"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              lineHeight: "1.0",
              letterSpacing: "-0.03em",
            }}
          >
            Engineering the backbone.
            <br />
            <span className="text-ion">Designing the face.</span>
          </h2>
        </motion.div>

        {/* ── Two-column content ── */}
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr]">
          {/* Left — bio + philosophy */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg leading-relaxed text-mist md:text-xl">
              I'm a{" "}
              <span className="text-bone">
                B.Tech student and active trainee
              </span>{" "}
              at <span className="text-bone">NxtWave's CCBP 4.0 Academy</span>,
              where I've been sharpening a dual practice — modern, motion-aware
              frontend design paired with robust backend architecture. I hold
              both to the same high standard.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-mist md:text-xl">
              I bridge the gap between{" "}
              <span className="text-bone">
                clean frontend aesthetics and robust backend architecture.
              </span>{" "}
              My approach to development is rooted in minimalism and
              performance. I believe the best engineers aren't just builders;
              they're{" "}
              <span className="text-bone">
                problem solvers who operate at the frontier
              </span>
              .
            </p>
            <p className="mt-6 text-lg leading-relaxed text-mist md:text-xl">
              Every project I take on is built with{" "}
              <span className="text-bone">production-readiness</span> in mind —
              clean APIs, containerized deployments, and interfaces that feel
              good to use under real-world conditions.
            </p>

            {/* ── Stat counters ── */}
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mt-12 flex flex-wrap gap-px overflow-hidden rounded-2xl border border-line/60"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={staggerChild}
                  className="flex flex-1 flex-col gap-1 bg-surface/60 px-6 py-5 transition-colors duration-300 hover:bg-ion-dim/20"
                  style={{ minWidth: "120px" }}
                >
                  <span className="font-display text-4xl font-semibold text-bone md:text-5xl">
                    <StatCounter
                      to={stat.to}
                      suffix={stat.suffix}
                      duration={1600}
                    />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-graphite">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — fact panel */}
          <motion.dl
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-0 self-start overflow-hidden rounded-2xl border border-line bg-surface/60"
          >
            {/* Panel header */}
            <div className="border-b border-line/60 px-6 py-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ion">
                Identity
              </span>
            </div>
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={staggerChild}
                className="flex items-baseline justify-between gap-4 border-b border-line/50 px-6 py-4 last:border-none transition-colors duration-300 hover:bg-ion-dim/10"
              >
                <dt className="font-mono text-[11px] uppercase tracking-widest text-graphite">
                  {fact.label}
                </dt>
                <dd className="text-right font-body text-sm text-bone md:text-base">
                  {fact.value}
                </dd>
              </motion.div>
            ))}

            {/* Availability badge */}
            <div className="px-6 py-5 bg-ion/5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ion shadow-[0_0_8px_2px_rgba(77,250,255,0.6)]" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-ion">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
