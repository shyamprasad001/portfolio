"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  /** Target value to count up to */
  to: number;
  /** Duration in milliseconds */
  duration?: number;
  /** Optional suffix (e.g., "+", "x") */
  suffix?: string;
  /** Optional prefix (e.g., ">") */
  prefix?: string;
  className?: string;
}

/**
 * StatCounter — animates from 0 to `to` when it enters the viewport.
 * Uses requestAnimationFrame for silky smooth counting.
 */
export default function StatCounter({
  to,
  duration = 1800,
  suffix = "",
  prefix = "",
  className = "",
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
