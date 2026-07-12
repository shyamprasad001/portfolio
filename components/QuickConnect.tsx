"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { dockEntrance, staggerParent, staggerChildFade } from "@/lib/motion";
import MagneticButton from "./MagneticButton";

const links = [
  {
    id: "dock-email",
    label: "Email",
    href: "mailto:iamshyam1911@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    id: "dock-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/shyam-mantri", // ← replace with your actual URL
    icon: Linkedin,
    external: true,
  },
  {
    id: "dock-github",
    label: "GitHub",
    href: "https://github.com/shyamprasad001",
    icon: Github,
    external: true,
  },
  {
    id: "dock-resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1uTywNPm2aZkbuSo21n5UX_EiZcb5nWP8/view?usp=sharing", // ← replace with your hosted PDF URL
    icon: FileText,
    external: true,
  },
];

/**
 * QuickConnect — an animated pill dock that appears below the Hero headline.
 * Visitors can reach Email, LinkedIn, GitHub, and Résumé without scrolling.
 */
export default function QuickConnect() {
  return (
    <motion.div
      variants={dockEntrance}
      initial="hidden"
      animate="visible"
      className="mt-10 inline-flex"
    >
      {/* Outer pill */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="visible"
        className="relative flex items-center gap-1 rounded-full border border-line/80 bg-surface/80 px-2 py-2 backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(77,250,255,0.15)]"
      >
        {/* Subtle inner glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-ion/5 via-transparent to-ion/5"
        />

        {links.map((link) => {
          const Icon = link.icon;
          return (
            <motion.div key={link.id} variants={staggerChildFade}>
              <MagneticButton
                as="a"
                href={link.href}
                strength={0.3}
                className="group relative flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-mist transition-all duration-300 hover:bg-ion/10 hover:text-ion"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 transition-colors duration-300 group-hover:text-ion" />
                <span className="hidden sm:inline">{link.label}</span>
              </MagneticButton>
            </motion.div>
          );
        })}

        {/* Separator + availability badge */}
        <span className="mx-1 hidden h-5 w-px bg-line/60 sm:block" aria-hidden />
        <motion.span
          variants={staggerChildFade}
          className="hidden items-center gap-1.5 rounded-full bg-ion/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-ion sm:flex"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ion shadow-[0_0_6px_2px_rgba(77,250,255,0.7)]" />
          Open to work
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
