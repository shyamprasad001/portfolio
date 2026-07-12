"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-tight text-bone">
          SHYAM<span className="text-ion">.</span>DEV
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-mist md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-bone after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ion after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-mist sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-ion shadow-ion-glow animate-pulse" />
            Open to work
          </span>
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-full border border-ion/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-ion transition-colors hover:bg-ion hover:text-ink"
          >
            Say hi
          </MagneticButton>
        </div>
      </nav>
    </motion.header>
  );
}
