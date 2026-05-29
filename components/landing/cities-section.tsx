import type { CSSProperties } from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { AmbientGlow } from "./ambient-glow";
import { CityAutoSlideTrack } from "./horizontal-auto-slide-track";
import { cn, Eyebrow, SectionContainer, SectionHeading } from "./shared";

const cities = [
  {
    title: "Ahmedabad",
    count: "500+ Active Drivers",
    imageSrc: "/images/Places/Ahmedabad1.png",
    imageAlt: "Ahmedabad city bridge at sunset",
  },
  {
    title: "Gandhinagar",
    count: "800+ Active Drivers",
    imageSrc: "/images/Places/Gandhinagar1.jpg",
    imageAlt: "Gandhinagar temple complex",
  },
  {
    title: "Surat",
    count: "1.2K+ Active Drivers",
    imageSrc: "/images/Places/Surat.jpg",
    imageAlt: "Surat waterfront lake aerial view",
  },
  {
    title: "Rajkot",
    count: "400+ Active Drivers",
    imageSrc: "/images/Places/Rajkot.jpg",
    imageAlt: "Rajkot heritage building",
  },
  {
    title: "Vadodara",
    count: "700+ Active Drivers",
    imageSrc: "/images/Places/Vadodara.png",
    imageAlt: "Vadodara palace architecture",
  },
];

function CityCard({ city }: { city: (typeof cities)[number] }) {
  return (
    <article className="city-card motion-card-hover relative h-[380px] w-[280px] shrink-0 overflow-hidden rounded-[16px] bg-[#111] shadow-[0_16px_36px_rgba(31,27,24,0.18)]">
      <Image
        alt={city.imageAlt}
        className="motion-card-media object-cover"
        fill
        sizes="280px"
        src={city.imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,18,0.01)_0%,rgba(5,8,18,0.08)_44%,rgba(5,8,18,0.72)_100%)]" />
      <div className="absolute inset-x-5 bottom-4 text-white">
        {/* <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/62">
          City Network
        </p> */}
        <h3 className="mt-1 text-[33px] font-extrabold leading-none tracking-[-0.04em]">
          {city.title}
        </h3>
        <p className="mt-1.5 text-[13px] font-medium text-white/86">
          • {city.count}
        </p>
      </div>
    </article>
  );
}

function CityRail({
  idPrefix,
  className,
}: {
  idPrefix: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-max gap-2.5! ms-2.5 md:ms-0! py-3.5", className)}>
      {cities.map((city) => (
        <CityCard key={`${idPrefix}-${city.title}`} city={city} />
      ))}
    </div>
  );
}

export function CitiesSection() {
  const sliderStyle = {
    "--auto-slide-duration": "21s",
  } as CSSProperties;

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <AmbientGlow
        className="left-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body h-full">
          <div className="flex justify-center">
            <Eyebrow
              className="px-4 py-2 text-[10px]"
              icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
            >
              Cities We Serve
            </Eyebrow>
          </div>

          <SectionHeading
            accent="India."
            className="mt-7 max-w-[820px]"
            description="Connecting India&apos;s top cities with trusted rides and seamless travel experiences."
            title="Operating in the heart of India."
          />

          <div className="full-bleed-strip city-slider-strip mt-14">
            <div className="auto-slide-showcase city-slide-showcase w-full p-0" style={sliderStyle}>
              <CityAutoSlideTrack>
                <CityRail idPrefix="cities-primary" />
                <CityRail idPrefix="cities-clone" />
              </CityAutoSlideTrack>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
