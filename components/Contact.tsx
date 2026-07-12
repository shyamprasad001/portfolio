"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, FileText } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { slideInLeft, staggerParent, staggerChildFade } from "@/lib/motion";

const socials = [
  {
    id: "footer-github",
    label: "GitHub",
    href: "https://github.com/shyamprasad001",
    icon: Github,
  },
  {
    id: "footer-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/shyam-mantri", // ← replace with actual URL
    icon: Linkedin,
  },
  {
    id: "footer-resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1uTywNPm2aZkbuSo21n5UX_EiZcb5nWP8/view?usp=sharing", // ← replace with hosted PDF URL
    icon: FileText,
  },
];

const ctaWords = ["Let's", "build", "something", "extraordinary."];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-line px-6 pt-28 pb-10 md:px-10 md:pt-40"
    >
      {/* ── Dramatic radial glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ion/12 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-ion/8 blur-[80px]"
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,250,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(77,250,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section label ── */}
        <motion.p
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-ion"
        >
          // let's talk
        </motion.p>

        {/* ── Massive CTA headline ── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="font-display font-semibold uppercase leading-[0.95] text-bone"
            style={{
              fontSize: "clamp(3rem, 9vw, 10rem)",
              letterSpacing: "-0.04em",
            }}
          >
            {ctaWords.map((word, i) => (
              <span
                key={i}
                className={`block ${i === ctaWords.length - 1 ? "text-ion" : ""}`}
              >
                {word}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* ── Magnetic email CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <div style={{ fontSize: "clamp(1.1rem, 3.5vw, 3.5rem)" }}>
            <MagneticButton
              as="a"
              href="mailto:iamshyam1911@gmail.com"
              strength={0.18}
              className="group inline-flex items-center gap-4 border-b-2 border-ion pb-2 font-display text-bone transition-colors duration-300 hover:text-ion"
            >
              iamshyam1911@gmail.com
              <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 md:h-12 md:w-12" />
            </MagneticButton>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="mt-20 border-t border-line" />

        {/* ── Bottom row ── */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Social links */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="flex items-center gap-3"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.div key={social.id} variants={staggerChildFade}>
                  <MagneticButton
                    as="a"
                    href={social.href}
                    strength={0.45}
                    className="group flex items-center gap-2 rounded-full border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-mist transition-all duration-300 hover:border-ion hover:bg-ion/10 hover:text-ion"
                  >
                    <Icon className="h-3.5 w-3.5 transition-colors group-hover:text-ion" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </MagneticButton>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-mono text-xs uppercase tracking-widest text-graphite"
          >
            Shyam Prasad Mantri — India — {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
