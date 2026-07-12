"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  as?: "button" | "a";
  strength?: number;
  onClick?: () => void;
}

/**
 * Wraps any element with a magnetic hover effect: the element eases
 * toward the cursor within its bounds, then springs back on leave.
 */
export default function MagneticButton({
  children,
  className = "",
  href,
  as = "button",
  strength = 0.35,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * strength, y: relY * strength });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        target={as === "a" && href?.startsWith("http") ? "_blank" : undefined}
        rel={as === "a" && href?.startsWith("http") ? "noreferrer" : undefined}
        className={className}
        whileTap={{ scale: 0.94 }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
