import type { CSSProperties } from "react";
import { cn } from "./shared";

type AmbientGlowTone = "orange" | "peach" | "rose";

const ambientGlowStyles: Record<AmbientGlowTone, CSSProperties> = {
  orange: {
    backgroundColor: "rgba(255, 62, 29, 0.2)",
  },
  peach: {
    backgroundColor: "rgba(255, 62, 29, 0.2)",
  },
  rose: {
    backgroundColor: "rgba(255, 62, 29, 0.2)",
  },
};

export function AmbientGlow({
  className,
  tone = "orange",
  style,
}: {
  className?: string;
  tone?: AmbientGlowTone;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-0 saturate-[1.08]",
        className,
      )}
      style={{
        width: "570px",
        height: "570px",
        opacity: 1,
        borderRadius: "16px",
        filter: "blur(163.2px)",
        ...ambientGlowStyles[tone],
        ...style,
      }}
    />
  );
}
