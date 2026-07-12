import { Variants } from "framer-motion";

// ─── Hero ────────────────────────────────────────────────────────────────────

/** Stagger container for hero words */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

/** Each hero word slides up from clip */
export const heroWord: Variants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(6px)" },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Individual character stagger — tighter than word, used in sub-headings */
export const charContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

export const charReveal: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Scroll-triggered reveals ────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Stagger containers ───────────────────────────────────────────────────────

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerParentFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.0 },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerChildFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Dock / pill entrance ─────────────────────────────────────────────────────

export const dockEntrance: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 },
  },
};
