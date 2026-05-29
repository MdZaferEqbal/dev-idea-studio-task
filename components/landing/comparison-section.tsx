import type { ComparisonIconName, ComparisonItem } from "./landing-types";
import { aavoRideItems, traditionalCabItems } from "./landing-data";
import {
  BadgeCheck,
  CircleCheck,
  BadgeIndianRupee,
  ClipboardClock,
  CarFront,
  Clock3,
  Headset,
  PhoneIncoming,
  Shield,
} from "lucide-react";
import {
  ShieldIcon,
  XCircleIcon,
} from "./icons";
import { AmbientGlow } from "./ambient-glow";
import { Eyebrow, SectionContainer, SectionHeading, cn } from "./shared";

function ComparisonFeatureIcon({
  icon,
  positive,
}: {
  icon: ComparisonIconName;
  positive: boolean;
}) {
  const wrapperClass = positive
  ?"bg-[rgba(255,62,29,0.08)] text-[var(--primary)]"
    // ? "bg-[var(--primary)] text-white"
    : "bg-transparent text-[var(--primary)]";

  const iconNode =
    icon === "shield" ? (
      <CircleCheck className="h-[30px] w-[30px]" strokeWidth={2.1} />
    ) : icon === "rupee" ? (
      <BadgeIndianRupee className="h-[30px] w-[30px]" strokeWidth={2.1} />
    ) : icon === "headset" ? (
      <Headset className="h-[30px] w-[30px]" strokeWidth={2.1} />
    ) : icon === "sparkle" ? (
      <Shield className="h-[30px] w-[30px]" strokeWidth={2.1} />
    ) : icon === "link" ? (
      <PhoneIncoming className="h-[30px] w-[30px]" strokeWidth={2.1} />
    ) : icon === "car" ? (
      <CarFront className="h-[30px] w-[30px]" strokeWidth={2.1} />
    ) : (
      <ClipboardClock className="h-[30px] w-[30px]" strokeWidth={2.1} />
    );

  return (
    <div
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px]",
        wrapperClass,
      )}
    >
      {positive ? iconNode : <XCircleIcon className="h-7 w-7" />}
    </div>
  );
}

function ComparisonPanel({
  title,
  items,
  positive,
}: {
  title: string;
  items: ComparisonItem[];
  positive?: boolean;
}) {
  return (
    <div className="glass-panel-soft motion-card-hover relative rounded-[28px] px-7 pb-8 pt-10 md:px-8">
      <div
        className={cn(
          "absolute right-0 top-0 rounded-bl-[26px] rounded-tr-[28px] px-7 py-4 text-[15px] font-bold",
          positive
            ? "bg-[var(--primary)] text-white"
            : "bg-[#ebe7e5] text-[#6c6764]",
        )}
      >
        {title}
      </div>
      <div className="space-y-6 pt-3">
        {items.map((item) => (
          <div key={item.title} className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
            <ComparisonFeatureIcon icon={item.icon} positive={Boolean(positive)} />
            <div>
              <p className="text-[15px] font-extrabold leading-6 text-[#2a2421] md:text-[17px]">
                {item.title}
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[var(--muted-foreground)]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden py-[72px] md:py-24">
      <AmbientGlow
        className="right-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="flex flex-wrap justify-center gap-3">
          <Eyebrow
            className="px-4 py-2 text-[11px] normal-case tracking-normal"
            icon={<ShieldIcon className="h-3.5 w-3.5" />}
          >
            Safe Ride
          </Eyebrow>
          <Eyebrow
            className="px-4 py-2 text-[11px] normal-case tracking-normal"
            icon={<BadgeCheck className="h-3.5 w-3.5" />}
            tone="blue"
          >
            Verified
          </Eyebrow>
          <Eyebrow
            className="px-4 py-2 text-[11px] normal-case tracking-normal"
            icon={<Clock3 className="h-3.5 w-3.5" />}
            tone="slate"
          >
            24 / 7
          </Eyebrow>
        </div>

        <SectionHeading
          accent="AAVORide"
          className="mt-8"
          description="Safe, transparent, and hassle-free rides designed for modern travelers."
          title="Why Travellers Prefer AAVORide"
        />

        <div className="landing-section-body mt-14 grid gap-5 lg:grid-cols-2">
          <ComparisonPanel items={traditionalCabItems} title="Traditional Cabs" />
          <ComparisonPanel items={aavoRideItems} positive title="AAVORide Experience" />
        </div>
      </SectionContainer>
    </section>
  );
}
