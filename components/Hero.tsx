"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { heroContainer, heroWord } from "@/lib/motion";
import MagneticButton from "./MagneticButton";
import QuickConnect from "./QuickConnect";

const headline = ["Architecting", "robust backends.", "Designing", "immersive frontends."];

const stackMarquee = [
  "MongoDB", "Express", "React", "Node.js", "Spring Boot",
  "Django", "AWS", "Jenkins", "Docker", "Quantum Computing", "AI / ML",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-10"
    >
      {/* ── Ambient glow orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-0 h-[42rem] w-[42rem] animate-float rounded-full bg-ion/15 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 -bottom-48 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-ion/8 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-[20rem] w-[20rem] rounded-full bg-ion/5 blur-[100px]"
      />

      {/* ── Structural grid lines ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <div className="absolute left-[8%] top-0 h-full w-px bg-line/30" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-line/30" />
        <div className="absolute left-[8%] top-[30%] h-px w-[84%] bg-line/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-ion"
        >
          // full-stack developer · india
        </motion.p>

        {/* ── Name ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-3 font-display text-2xl font-semibold text-bone/80 md:text-3xl"
        >
          Hi, I'm Shyam Prasad Mantri.
        </motion.p>

        {/* ── Main headline ── */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="font-display font-semibold uppercase text-bone"
          style={{
            fontSize: "clamp(2.8rem, 7.5vw, 8.5rem)",
            lineHeight: "0.93",
            letterSpacing: "-0.035em",
          }}
        >
          {headline.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                variants={heroWord}
                className="inline-block"
                style={{ color: i === 1 || i === 3 ? "#4DFAFF" : undefined }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.div>

        {/* ── Quick Connect Dock ── */}
        <QuickConnect />

        {/* ── Sub-line + CTA ── */}
        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-xl leading-snug text-mist md:text-2xl"
          >
            I build <span className="text-bone">full-stack products</span> —
            from minimalist React interfaces to robust Spring Boot APIs and
            DevOps pipelines that keep everything running. Currently exploring{" "}
            <span className="text-bone">AI-driven systems</span> and{" "}
            <span className="text-bone">scalable cloud architectures</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 md:justify-end"
          >
            <MagneticButton
              as="a"
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-ion px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-ink shadow-ion-glow transition-all hover:shadow-ion-glow-lg"
            >
              View work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#about"
              className="group flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-bone transition-all duration-300 hover:border-ion hover:text-ion"
            >
              My story
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Stack marquee strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 mt-16 w-full overflow-hidden border-y border-line/50 bg-surface/40 py-3 backdrop-blur-sm md:mt-20"
      >
        <div className="flex w-max animate-marquee gap-10 font-mono text-sm uppercase tracking-widest text-graphite">
          {[...stackMarquee, ...stackMarquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <span className="text-ion/60">/</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
