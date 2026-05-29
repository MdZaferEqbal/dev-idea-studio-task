import Image from "next/image";
import type { CSSProperties } from "react";
import { Car, MapPin } from "lucide-react";
import { LanguageIcon, StarIcon } from "./icons";
import { HeroPhoneMockup } from "./illustrations";
import { cn } from "./shared";

/** Figma phone-cluster frame (scaled up for hero prominence) */
const FIGMA_W = 565.94;
const FIGMA_H = 526.79;
const SIZE_SCALE = 1.28;
const STAGE_W = FIGMA_W * SIZE_SCALE;

const SVG_W = 566;
const SVG_H = 527;

const ROUTE_PRIMARY_START = { x: 15.0231, y: 0.311312 };
const ROUTE_SECONDARY_START = { x: 117.405, y: 0.271395 };

const ROUTE_PRIMARY_OFFSET = { x: 210, y: 8 };

const ROUTE_SECONDARY_OFFSET = {
  x: 420 - 0.214424,
  y: 400 - 128.572,
};

function routePoint(
  offset: { x: number; y: number },
  start: { x: number; y: number },
): CSSProperties {
  return {
    left: pct(offset.x + start.x, SVG_W),
    top: pct(offset.y + start.y, SVG_H),
  };
}

function pct(value: number, total: number) {
  return `${(value / total) * 100}%`;
}

function box(x: number, y: number, w: number): CSSProperties {
  return {
    left: pct(x, FIGMA_W),
    top: pct(y, FIGMA_H),
    width: pct(w, FIGMA_W),
  };
}

function at(x: number, y: number): CSSProperties {
  return {
    left: pct(x, FIGMA_W),
    top: pct(y, FIGMA_H),
  };
}

function RatingBadge() {
  return (
    <div className="motion-hero-badge absolute z-40" style={at(360, 34)}>
      <div className="relative flex h-[42px] items-center rounded-[12px] border border-[var(--soft-orange-border)] bg-white py-0 pl-[30px] pr-[16px] shadow-[0_8px_22px_rgba(31,27,24,0.08)]">
        <div className="absolute -left-[8px] top-1/2 flex h-[28px] w-[28px] -translate-y-1/2 items-center justify-center rounded-[7px] border border-[var(--soft-orange-border)] bg-white text-[var(--primary)] shadow-[0_6px_14px_rgba(31,27,24,0.06)]">
          <StarIcon className="h-[14px] w-[14px]" />
        </div>
        <span className="whitespace-nowrap text-[13px] font-bold leading-none text-[#5a534f]">
          4.9 Rating
        </span>
      </div>
    </div>
  );
}

function LanguageBadge() {
  return (
    <div className="motion-hero-badge-delayed absolute z-40" style={at(0, 373)}>
      <div className="flex max-w-[210px] items-center gap-[12px] rounded-[12px] border border-[var(--soft-orange-border)] bg-white px-[13px] py-[12px] shadow-[0_10px_24px_rgba(31,27,24,0.09)]">
        <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[7px] border border-[rgba(255,62,29,0.24)] bg-white text-[var(--primary)]">
          <LanguageIcon className="h-[16px] w-[16px]" />
        </div>
        <div className="leading-[1.1]">
          <p className="text-[11px] font-semibold text-[#3f3935]">Language-Based</p>
          <p className="mt-[2px] text-[11px] font-semibold text-[#3f3935]">Driver Matching</p>
        </div>
      </div>
    </div>
  );
}

function TripBadge() {
  return (
    <div className="motion-hero-badge-slow absolute z-40" style={at(324, 424)}>
      <div className="flex items-center gap-[12px] rounded-[12px] border border-[var(--soft-orange-border)] bg-white px-[14px] py-[12px] shadow-[0_12px_26px_rgba(31,27,24,0.1)]">
        <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full border-[2px] border-[rgba(255,62,29,0.24)]">
          <Image
            alt="Recent booking traveler"
            className="object-cover"
            fill
            sizes="40px"
            src="/images/c32007df712fa13c76dc00b7bb938e73cbf806f0%20(1).jpg"
          />
        </div>
        <div className="leading-[1.1]">
          <p className="text-[11.5px] font-bold text-[var(--primary)]">Delhi - jaipur</p>
          <p className="mt-[3px] text-[11.5px] font-medium text-[#342f2b]">Booked 2 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export function HeroPhoneStage() {
  return (
    <div
      className="hero-phone-stage-root relative mx-auto w-full"
      style={{ maxWidth: `${STAGE_W}px` }}
    >
      <div
        className="relative mx-auto w-full overflow-visible"
        style={{
          width: "100%",
          maxWidth: `${STAGE_W}px`,
          aspectRatio: `${FIGMA_W} / ${FIGMA_H}`,
        }}
      >
        <div
          aria-hidden="true"
          className="hero-stage-glow motion-phone-stage-glow"
        />

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 566 527"
        >
          <circle
            className="motion-hero-stage-ring"
            cx="280"
            cy="261"
            r="133"
            stroke="var(--hero-stage-ring)"
            strokeWidth="1"
          />
          <circle
            className="motion-hero-stage-ring-delayed"
            cx="280"
            cy="261"
            r="183"
            stroke="var(--hero-stage-ring)"
            strokeWidth="1"
          />
          <circle
            className="motion-hero-stage-ring-slow"
            cx="280"
            cy="261"
            r="233"
            stroke="var(--hero-stage-ring)"
            strokeWidth="0.8"
            opacity="0.55"
          />

          <g transform={`translate(${ROUTE_PRIMARY_OFFSET.x} ${ROUTE_PRIMARY_OFFSET.y})`}>
            <path
              className="motion-route-dash text-[var(--primary)]"
              d="M15.0231 0.311312C2.82778 15.6379 -13.0498 48.1297 21.0021 55.484C55.054 62.8383 76.1453 62.0504 82.4344 60.7371C98.923 60.5859 120.682 71.7754 75.8112 117.743C30.9401 163.71 85.936 151.403 119.043 139.504"
              stroke="currentColor"
              strokeDasharray="3.5 5.5"
              strokeLinecap="round"
              strokeWidth="1.45"
              opacity="0.9"
            />
          </g>
          <g transform={`translate(${ROUTE_SECONDARY_OFFSET.x} ${ROUTE_SECONDARY_OFFSET.y})`}>
            <path
              className="motion-route-dash-delayed text-[var(--primary)]"
              d="M117.405 0.271395C128.036 16.7219 140.644 50.6163 106.035 54.5899C71.4251 58.5634 50.5133 55.7073 44.3836 53.7826C27.9896 52.0124 5.23626 61.0101 45.3747 111.163C85.5131 161.316 31.9922 143.666 0.214424 128.572"
              stroke="currentColor"
              strokeDasharray="3.5 5.5"
              strokeLinecap="round"
              strokeWidth="1.45"
              opacity="0.85"
            />
          </g>
        </svg>

        <div
          aria-hidden="true"
          className="motion-hero-stage-shadow pointer-events-none absolute bottom-[4%] left-1/2 z-[2] h-[46px] w-[72%] rounded-[50%] bg-[rgba(31,27,24,0.09)] blur-[28px]"
        />

        <div
          className="absolute z-[15] -translate-x-1/2 -translate-y-1/2"
          style={routePoint(ROUTE_PRIMARY_OFFSET, ROUTE_PRIMARY_START)}
        >
          <div className="motion-route-marker flex items-center justify-center text-[var(--primary)]">
            <Car className="h-[22px] w-[22px] -rotate-45" strokeWidth={2.2} />
          </div>
        </div>
        <div
          className="absolute z-[15] -translate-x-1/2 -translate-y-1/2"
          style={routePoint(ROUTE_SECONDARY_OFFSET, ROUTE_SECONDARY_START)}
        >
          <div className={cn("motion-route-marker-delayed", "text-[var(--primary)]")}>
            <MapPin className="h-[22px] w-[22px]" strokeWidth={2.2} />
          </div>
        </div>

        {/* Brand phone — behind */}
        <div
          className="motion-phone-secondary absolute z-10"
          style={box(224, 18, 281)}
        >
          <HeroPhoneMockup
            sizes="(max-width: 1024px) 360px, 400px"
            variant="brand"
          />
        </div>

        {/* Booking phone — front */}
        <div
          className="motion-phone-primary absolute z-20"
          style={box(9, 24, 315)}
        >
          <HeroPhoneMockup
            sizes="(max-width: 1024px) 403px, 448px"
            variant="booking"
          />
        </div>

        <RatingBadge />
        <LanguageBadge />
        <TripBadge />
      </div>
    </div>
  );
}
