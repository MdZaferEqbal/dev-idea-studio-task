import { cn } from "./shared";

type StatusPillProps = {
  text: string;
  color: string;
  className?: string;
  textClassName?: string;
};

const colorPalette: Record<
  string,
  {
    container: string;
    dot: string;
    ping: string;
    text: string;
  }
> = {
  primary: {
    container:
      "border-[rgba(255,62,29,0.16)] bg-[rgba(255,62,29,0.08)] text-[var(--primary)]",
    dot: "bg-[var(--primary)]",
    ping: "bg-[rgba(255,62,29,0.32)]",
    text: "text-[var(--primary)]",
  },
  slate: {
    container: "border-slate-200 bg-slate-50 text-slate-700",
    dot: "bg-slate-500",
    ping: "bg-slate-500/35",
    text: "text-slate-700",
  },
  gray: {
    container: "border-gray-200 bg-gray-50 text-gray-700",
    dot: "bg-gray-500",
    ping: "bg-gray-500/35",
    text: "text-gray-700",
  },
  zinc: {
    container: "border-zinc-200 bg-zinc-50 text-zinc-700",
    dot: "bg-zinc-500",
    ping: "bg-zinc-500/35",
    text: "text-zinc-700",
  },
  neutral: {
    container: "border-neutral-200 bg-neutral-50 text-neutral-700",
    dot: "bg-neutral-500",
    ping: "bg-neutral-500/35",
    text: "text-neutral-700",
  },
  stone: {
    container: "border-stone-200 bg-stone-50 text-stone-700",
    dot: "bg-stone-500",
    ping: "bg-stone-500/35",
    text: "text-stone-700",
  },
  red: {
    container: "border-red-200 bg-red-50 text-red-700",
    dot: "bg-red-500",
    ping: "bg-red-500/35",
    text: "text-red-700",
  },
  orange: {
    container: "border-orange-200 bg-orange-50 text-orange-700",
    dot: "bg-orange-500",
    ping: "bg-orange-500/35",
    text: "text-orange-700",
  },
  amber: {
    container: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    ping: "bg-amber-500/35",
    text: "text-amber-700",
  },
  yellow: {
    container: "border-yellow-200 bg-yellow-50 text-yellow-700",
    dot: "bg-yellow-500",
    ping: "bg-yellow-500/35",
    text: "text-yellow-700",
  },
  lime: {
    container: "border-lime-200 bg-lime-50 text-lime-700",
    dot: "bg-lime-500",
    ping: "bg-lime-500/35",
    text: "text-lime-700",
  },
  green: {
    container: "border-green-200 bg-green-50 text-green-700",
    dot: "bg-green-500",
    ping: "bg-green-500/35",
    text: "text-green-700",
  },
  emerald: {
    container: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    ping: "bg-emerald-500/35",
    text: "text-emerald-700",
  },
  teal: {
    container: "border-teal-200 bg-teal-50 text-teal-700",
    dot: "bg-teal-500",
    ping: "bg-teal-500/35",
    text: "text-teal-700",
  },
  cyan: {
    container: "border-cyan-200 bg-cyan-50 text-cyan-700",
    dot: "bg-cyan-500",
    ping: "bg-cyan-500/35",
    text: "text-cyan-700",
  },
  sky: {
    container: "border-sky-200 bg-sky-50 text-sky-700",
    dot: "bg-sky-500",
    ping: "bg-sky-500/35",
    text: "text-sky-700",
  },
  blue: {
    container: "border-blue-200 bg-blue-50 text-blue-700",
    dot: "bg-blue-500",
    ping: "bg-blue-500/35",
    text: "text-blue-700",
  },
  indigo: {
    container: "border-indigo-200 bg-indigo-50 text-indigo-700",
    dot: "bg-indigo-500",
    ping: "bg-indigo-500/35",
    text: "text-indigo-700",
  },
  violet: {
    container: "border-violet-200 bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
    ping: "bg-violet-500/35",
    text: "text-violet-700",
  },
  purple: {
    container: "border-purple-200 bg-purple-50 text-purple-700",
    dot: "bg-purple-500",
    ping: "bg-purple-500/35",
    text: "text-purple-700",
  },
  fuchsia: {
    container: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
    dot: "bg-fuchsia-500",
    ping: "bg-fuchsia-500/35",
    text: "text-fuchsia-700",
  },
  pink: {
    container: "border-pink-200 bg-pink-50 text-pink-700",
    dot: "bg-pink-500",
    ping: "bg-pink-500/35",
    text: "text-pink-700",
  },
  rose: {
    container: "border-rose-200 bg-rose-50 text-rose-700",
    dot: "bg-rose-500",
    ping: "bg-rose-500/35",
    text: "text-rose-700",
  },
};

export function StatusPill({ text, color, className, textClassName }: StatusPillProps) {
  const palette = colorPalette[color.toLowerCase()] ?? colorPalette.primary;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 shadow-[0_8px_18px_rgba(31,27,24,0.05)] backdrop-blur-sm",
        palette.container,
        className,
      )}
    >
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full", palette.ping)} />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.9)]", palette.dot)} />
      </span>

      <span
        className={cn(
          "text-[11px] font-bold tracking-[0.08em]",
          palette.text,
          textClassName,
        )}
      >
        {text}
      </span>
    </div>
  );
}
