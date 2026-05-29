import Image from "next/image";
import type { ReactNode } from "react";
import { AmbientGlow } from "./ambient-glow";
import {
  ArrowRight,
  BadgeCheck,
  IndianRupee,
  CarFront,
  Smartphone,
  UserRoundCheck,
} from "lucide-react";
import { Eyebrow, SectionContainer, SectionHeading } from "./shared";

const featureCards: Array<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Free Cancellation",
    description: "Plans changed? Cancel easily in just one tap.",
    icon: (
      <span className="relative block h-[28px] w-[28px]">
        <CarFront className="h-full w-full" strokeWidth={2.2} />
        <span className="absolute right-[-2px] top-[-2px] h-[10px] w-[10px] rounded-full bg-[var(--primary)] transition-colors duration-300 group-hover:bg-white" />
      </span>
    ),
  },
  {
    title: "Best Price Guaranteed",
    description: "Enjoy transparent pricing and save more on every ride with AAVORide.",
    icon: <IndianRupee className="h-[28px] w-[28px]" strokeWidth={2.1} />,
  },
  {
    title: "Direct Driver Contact",
    description: "Connect directly with verified drivers for a faster and smoother booking experience.",
    icon: <UserRoundCheck className="h-[28px] w-[28px]" strokeWidth={2.1} />,
  },
  {
    title: "24/7 Ride Availability",
    description:
      "Book rides anytime for airport transfers, local trips, or outstation travel across India.",
    icon: <BadgeCheck className="h-[28px] w-[28px]" strokeWidth={2.1} />,
  },
];

export function AppExperienceSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <AmbientGlow
        className="right-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body">
          <div className="flex justify-center">
            <Eyebrow className="px-4 py-2 text-[10px]">
              Why AAVORide
            </Eyebrow>
          </div>

          <SectionHeading
            accent="AAVO"
            className="mt-7 max-w-[820px]"
            description="We&apos;ve stripped away the noise. No websites, no calls-just pure, high-velocity booking at your fingertips."
            title="The real AAVO experience lives inside the app."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] lg:items-stretch">
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {featureCards.map((item) => {
                return (
                  <article
                    key={item.title}
                    className="group motion-card-hover min-h-[172px] cursor-pointer rounded-[18px] border border-[#ece8e5] bg-white px-5 py-5 max-md:shadow-[0_12px_30px_rgba(31,27,24,0.16)] md:min-h-[186px] md:px-6 md:py-6 md:shadow-[0_10px_24px_rgba(31,27,24,0.06)]"
                  >
                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[18px] border border-[rgba(255,62,29,0.10)] bg-[rgba(255,62,29,0.08)] text-[var(--primary)] transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="mt-8 text-[18px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#201d1b] md:mt-10">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[280px] text-[14px] leading-[1.65] text-[var(--muted-foreground)] md:text-[15px]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <article className="motion-card-hover relative min-h-[360px] overflow-hidden rounded-[22px] border border-transparent bg-[#17181b] px-6 py-6 text-white shadow-[0_18px_38px_rgba(0,0,0,0.18)] md:min-h-[420px] md:px-7 md:py-7 lg:h-full lg:min-h-0">
              <Image
                alt="AAVORide in-app experience background"
                className="motion-card-media object-cover object-center opacity-95"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                src="/images/Travel.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,19,0.58)_0%,rgba(18,19,22,0.78)_42%,rgba(17,17,19,0.92)_100%)]" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_14px_24px_rgba(255,62,29,0.28)]">
                  <Smartphone className="h-6 w-6" strokeWidth={2.2} />
                </div>

                <h3 className="mt-12 max-w-[250px] text-[30px] font-extrabold leading-[0.98] tracking-[-0.05em] md:mt-14 md:text-[38px]">
                  Experience Seamless Travel
                </h3>

                <p className="mt-7 max-w-[292px] text-[15px] leading-[1.65] text-white/78 md:text-[16px]">
                  Book trusted cabs, tempo travellers, and airport rides with verified
                  drivers, transparent pricing, and smooth journeys across India.
                </p>

                <div className="mt-auto flex flex-col items-center pt-8 md:pt-10">
                  <button
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--primary)] px-6 py-3 text-[13px] font-bold text-white shadow-[0_14px_24px_rgba(255,62,29,0.22)] sm:w-auto"
                    type="button"
                  >
                    Download AAVORide App
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </button>

                  <p className="mt-7 text-center text-[12px] text-white/40">
                    Available on iOS & Android
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
