'use client'

import { useEffect, useMemo, useRef, useState } from "react";

function parseStatValue(value: string) {
  const match = value.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      isValid: false,
      fallback: value,
      suffix: "",
      target: 0,
      decimals: 0,
    };
  }

  const [, numericPart, suffix] = match;

  return {
    isValid: true,
    fallback: value,
    suffix,
    target: Number(numericPart),
    decimals: numericPart.includes(".") ? numericPart.split(".")[1].length : 0,
  };
}

function formatStatValue(value: number, decimals: number) {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }

  return Math.round(value).toString();
}

export function AnimatedStatValue({
  value,
  delayMs = 0,
  durationMs = 1400,
}: {
  value: string;
  delayMs?: number;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const parsedValue = useMemo(() => parseStatValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    let frameId: number | null = null;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      frameId = window.requestAnimationFrame(() => {
        setDisplayValue(parsedValue.target);
        setHasStarted(true);
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
          setHasStarted(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [parsedValue.target]);

  useEffect(() => {
    let frameId: number | null = null;

    if (!hasStarted) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      frameId = window.requestAnimationFrame(() => {
        setDisplayValue(parsedValue.target);
      });

      return () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    timeoutRef.current = window.setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const rawProgress = Math.min((now - startTime) / durationMs, 1);
        const easedProgress = 1 - (1 - rawProgress) ** 3;
        const nextValue = parsedValue.target * easedProgress;

        setDisplayValue(rawProgress >= 1 ? parsedValue.target : nextValue);

        if (rawProgress < 1) {
          frameRef.current = window.requestAnimationFrame(tick);
        }
      };

      frameRef.current = window.requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [delayMs, durationMs, hasStarted, parsedValue.target]);

  if (!parsedValue.isValid || !Number.isFinite(parsedValue.target)) {
    return <span ref={ref}>{parsedValue.fallback}</span>;
  }

  return (
    <span ref={ref}>
      {formatStatValue(displayValue, parsedValue.decimals)}
      {parsedValue.suffix}
    </span>
  );
}
