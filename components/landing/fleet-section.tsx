import type { CSSProperties } from "react";
import Image from "next/image";
import { Armchair, BadgeCheck, Luggage, ShieldCheck, Snowflake } from "lucide-react";
import { AmbientGlow } from "./ambient-glow";
import { vehicles } from "./landing-data";
import { ArrowRightIcon } from "./icons";
import { FleetAutoSlideTrack } from "./horizontal-auto-slide-track";
import { cn, Eyebrow, SectionContainer, SectionHeading } from "./shared";

function VehicleFeatureIcon({
  icon,
}: {
  icon: (typeof vehicles)[number]["features"][number]["icon"];
}) {
  if (icon === "seat") {
    return <Armchair className="h-[14px] w-[14px]" strokeWidth={2.1} />;
  }

  if (icon === "snow") {
    return <Snowflake className="h-[14px] w-[14px]" strokeWidth={2.1} />;
  }

  if (icon === "bag") {
    return <Luggage className="h-[14px] w-[14px]" strokeWidth={2.1} />;
  }

  return <ShieldCheck className="h-[14px] w-[14px]" strokeWidth={2.1} />;
}

function VehicleCard({ vehicle }: { vehicle: (typeof vehicles)[number] }) {
  return (
    <article className="vehicle-category-card lg:motion-card-hover box-border flex h-[421px] w-[357px] shrink-0 flex-col overflow-visible rounded-[20px] bg-transparent md:bg-white px-[11px] py-[18px] shadow-none lg:shadow-[0_8px_24px_rgba(0,0,0,0.1)] my-5">
      <div className="relative h-[132px] w-full shrink-0 bg-transparent">
        <Image
          alt={vehicle.imageAlt}
          className="motion-card-media object-contain object-center"
          fill
          sizes="400px"
          src={vehicle.imageSrc}
        />
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col gap-4">
        <div className="shrink-0 space-y-1">
          <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#201d1b]">
            {vehicle.title}
          </h3>
          <p className="text-[13px] font-medium leading-[1.3] text-[var(--primary)]">
            {vehicle.subtitle}
          </p>
          <p className="text-[13px] font-normal leading-[1.5] text-[var(--muted-foreground)]">
            {vehicle.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {vehicle.features.map((feature) => (
            <div
              key={feature.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF2EC] px-3 py-1.5 text-[12px] font-medium leading-none text-[#4a4440]"
            >
              <span className="text-[var(--primary)]">
                <VehicleFeatureIcon icon={feature.icon} />
              </span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="mt-6 flex h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--primary)] text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(255,62,29,0.2)]"
        type="button"
      >
        Ride via App
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </article>
  );
}

function VehicleRail({
  idPrefix,
  className,
}: {
  idPrefix: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-max gap-4 lg:gap-6", className)}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={`${idPrefix}-${vehicle.title}`} vehicle={vehicle} />
      ))}
    </div>
  );
}

export function FleetSection() {
  const sliderStyle = {
    "--auto-slide-duration": "28s",
    "--auto-slide-height": "421px",
  } as CSSProperties;

  return (
    <section className="relative py-[72px] md:py-24">
      <AmbientGlow
        className="-translate-x-1/2 -top-[10%] md:right-[-252px] md:top-1/2 md:-translate-y-1/2 w-[312px]! h-[312px]! md:w-[570px]! md:h-[570px]!"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer className="max-w-[1268px]">
        <div className="flex justify-center">
          <Eyebrow
            className="px-4 py-2 text-[11px]"
            icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
          >
            Choose Your Ride
          </Eyebrow>
        </div>

        <SectionHeading
          accent="Perfect Ride."
          className="mt-8"
          description="Browse a range of vehicles and pick the one that suits your journey."
          title="Find the Perfect Ride."
        />

        <div className="full-bleed-strip fleet-cards-strip mt-12 bg-transparent px-0">
          <div
            className="auto-slide-showcase fleet-slide-showcase w-full px-0!"
            style={sliderStyle}
          >
            <FleetAutoSlideTrack>
              <VehicleRail idPrefix="fleet-primary" />
              <VehicleRail idPrefix="fleet-clone" />
            </FleetAutoSlideTrack>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
