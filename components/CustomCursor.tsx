"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor — a glowing dot + trailing ring that follows the mouse.
 * The ring expands and changes color when hovering any interactive element.
 * Hidden automatically on touch-only devices.
 */
export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows cursor exactly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.3 });

  // Ring lags behind for a trailing feel
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]");
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.style.cursor = "";
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Glow dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: clicking ? 6 : hovering ? 10 : 8,
            height: clicking ? 6 : hovering ? 10 : 8,
            backgroundColor: "#4DFAFF",
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full shadow-[0_0_10px_2px_rgba(77,250,255,0.8)]"
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: hovering ? 44 : clicking ? 28 : 36,
            height: hovering ? 44 : clicking ? 28 : 36,
            borderColor: hovering ? "#4DFAFF" : "rgba(77,250,255,0.35)",
            opacity: clicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-full border"
          style={{
            boxShadow: hovering
              ? "0 0 20px 2px rgba(77,250,255,0.2)"
              : undefined,
          }}
        />
      </motion.div>
    </>
  );
}
