'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "./shared";

export function Reveal({
  children,
  className,
  delayMs = 0,
  distance = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    let frameId: number | null = null;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      frameId = window.requestAnimationFrame(() => {
        setVisible(true);
      });

      return () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", visible && "motion-reveal-visible", className)}
      style={
        {
          "--reveal-delay": `${delayMs}ms`,
          "--reveal-distance": `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
