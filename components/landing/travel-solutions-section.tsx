import Image from "next/image";
import { AmbientGlow } from "./ambient-glow";
import { serviceCards } from "./landing-data";
import { ArrowRightIcon } from "./icons";
import { SectionContainer, SectionHeading, cn } from "./shared";

function SolutionCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  badge,
  cta,
  overlayVariant,
  contentClassName,
  className,
}: (typeof serviceCards)[number]) {
  const isLarge = overlayVariant === "large";

  return (
    <article
      className={cn(
        "group motion-card-hover relative h-full overflow-hidden rounded-[28px] border border-transparent bg-[#ead5c8] shadow-[0_24px_60px_rgba(31,27,24,0.08)] md:rounded-[30px]",
        className,
      )}
    >
      <Image
        alt={imageAlt}
        className="motion-card-media object-cover"
        fill
        sizes={isLarge ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        src={imageSrc}
        style={{ objectPosition: imagePosition ?? "center" }}
      />
      <div
        className={cn(
          "absolute inset-0",
          isLarge
            ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.10)_48%,rgba(0,0,0,0.32)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.02)_45%,rgba(0,0,0,0.72)_100%)]",
        )}
      />

      {badge ? (
        <div className="absolute left-5 top-5 rounded-full bg-[var(--primary)] px-4 py-1.5 text-[11px] font-bold text-white shadow-[0_12px_24px_rgba(255,62,29,0.22)]">
          {badge}
        </div>
      ) : null}

      {isLarge ? (
        <div
          className={cn(
            "absolute rounded-[24px] bg-[#f2efed]/72 backdrop-blur-xl shadow-[0_20px_44px_rgba(31,27,24,0.18)] sm:rounded-[28px]",
            contentClassName,
          )}
        >
          <h3 className="text-[22px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#231f1c] sm:text-[22px] md:text-[23px]">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-[15px] leading-[1.55] text-[#5f5955] sm:mt-2 sm:line-clamp-none sm:text-[14px] sm:leading-[1.95]">
            {description}
          </p>
          {cta ? (
            <button
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-[15px] font-semibold text-white sm:mt-4 sm:gap-2 sm:px-5 sm:py-3 sm:text-[14px]"
              type="button"
            >
              {cta}
              <ArrowRightIcon className="h-4 w-4 sm:h-4 sm:w-4" />
            </button>
          ) : null}
        </div>
      ) : (
        <div className="absolute inset-x-4 bottom-4 flex flex-col items-start text-white sm:inset-x-6 sm:bottom-5 sm:items-center">
          <div className="flex w-full items-center justify-start rounded-full border border-white/10 bg-white/24 px-3 py-1.5 backdrop-blur-[1px] sm:px-4 sm:py-2">
            <h3 className="w-full text-left text-[15px] leading-none tracking-[-0.03em] sm:text-[17px]">
              {title}
            </h3>
          </div>
          <p className="mt-1.5 line-clamp-2 w-full text-left text-[11px] leading-[1.45] text-white sm:mt-2 sm:w-auto sm:max-w-[280px] sm:line-clamp-none sm:text-[12px] sm:leading-5">
            {description}
          </p>
        </div>
      )}
    </article>
  );
}

export function TravelSolutionsSection() {
  return (
    <section className="relative overflow-hidden pb-[72px] md:pb-24" id="services">
      <AmbientGlow
        className="left-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer className="max-w-[1268px]">
        <SectionHeading
          accent="Every Journey"
          className="max-w-[860px]"
          description="From airport rides to outstation adventures experience smarter, safer, and more comfortable travel with AAVORide."
          title="Travel Solutions for Every Journey"
        />

        <div className="landing-section-body mt-12">
          <div className="grid auto-rows-[minmax(200px,auto)] gap-[18px] sm:auto-rows-[minmax(220px,1fr)] md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(226px,1fr)] xl:aspect-square">
            {serviceCards.map((card) => (
              <SolutionCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
