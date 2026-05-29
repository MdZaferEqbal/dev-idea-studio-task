import type { ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1268px] px-[clamp(20px,4.8vw,40px)] md:px-[clamp(28px,4.8vw,48px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

type EyebrowTone = "orange" | "blue" | "slate";

const eyebrowStyles: Record<EyebrowTone, string> = {
  orange:
    "border-[rgba(255,62,29,0.18)] bg-[rgba(255,62,29,0.08)] text-[var(--primary-strong)]",
  blue: "border-[#d5ebfb] bg-[#edf7ff] text-[#2d78a8]",
  slate: "border-[#e9eaef] bg-[#f4f5f8] text-[#5f647d]",
};

export function Eyebrow({
  children,
  icon,
  tone = "orange",
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: EyebrowTone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]",
        eyebrowStyles[tone],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}

export function PrimaryButton({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "motion-hover-lift inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_32px_rgba(255,62,29,0.22)] hover:shadow-[0_22px_38px_rgba(255,62,29,0.26)]",
        className,
      )}
      type="button"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export function OutlineButton({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "motion-hover-lift inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,62,29,0.32)] bg-white px-6 py-4 text-sm font-bold text-[var(--primary-strong)] shadow-[0_12px_28px_rgba(255,62,29,0.08)] hover:shadow-[0_18px_32px_rgba(255,62,29,0.12)]",
        className,
      )}
      type="button"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export function SectionHeading({
  title,
  accent,
  description,
  centered = true,
  className,
}: {
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  const [beforeAccent, afterAccent = ""] = accent
    ? title.split(accent)
    : [title, ""];

  return (
    <div
      className={cn(
        centered ? "mx-auto text-center" : "text-left",
        "max-w-[760px]",
        className,
      )}
    >
      <h2 className="text-[clamp(2rem,7vw,3.375rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#201d1b]">
        {accent ? (
          <>
            {beforeAccent}
            <span className="text-[var(--primary)]">{accent}</span>
            {afterAccent}
          </>
        ) : (
          title
        )}
      </h2>
      {description ? (
        <p className="mt-5 text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[18px] md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
