import type { ReactNode } from "react";
import Image from "next/image";
import { AmbientGlow } from "./ambient-glow";
import {
  BadgeCheck,
  Grid3x3,
  Play,
  ShieldCheck,
} from "lucide-react";
import { SectionContainer } from "./shared";

function StoreButton({
  label,
  store,
  icon,
}: {
  label: string;
  store: string;
  icon: ReactNode;
}) {
  return (
    <button
      className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#171717] px-4 py-3.5 text-left text-white shadow-[0_13px_24px_rgba(0,0,0,0.12)] sm:w-auto sm:justify-start sm:px-5"
      type="button"
    >
      <span className="flex h-7 w-7 items-center justify-center text-white sm:h-8 sm:w-8">
        {icon}
      </span>
      <span className="block">
        <span className="block text-[10px] leading-none text-white/65">{label}</span>
        <span className="mt-0.5 block text-[14px] font-semibold leading-none sm:text-[15px]">
          {store}
        </span>
      </span>
    </button>
  );
}

function FeaturePoint({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,62,29,0.08)] text-[var(--primary)]">
        {icon}
      </div>
      <div>
        <h3 className="text-[16px] font-extrabold tracking-[-0.03em] text-[#201d1b]">
          {title}
        </h3>
        <p className="mt-1 text-[14px] leading-[1.55] text-[var(--muted-foreground)]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function CheapestRatesSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24">
      <AmbientGlow
        className="hidden lg:block lg:right-[-252px] lg:top-1/2 lg:-translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer className="relative z-10">
        <div className="landing-section-body">
          <div className="grid items-center gap-14 md:gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12 xl:gap-14">
            <div className="relative order-2 mx-auto w-full min-h-[400px] max-w-[720px] sm:min-h-[520px] lg:order-1 lg:mx-auto lg:min-h-[680px] lg:max-w-none">
              <svg
                className="absolute left-[6%] top-[8%] h-[52%] w-[34%] sm:left-[5%] sm:top-[6%] sm:h-[54%] sm:w-[32%]"
                fill="none"
                viewBox="0 0 156 272"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="motion-cheapest-rates-route"
                  d="M28 22C14 43 12 63 22 82C34 103 64 117 98 131C130 144 136 165 117 183C98 201 80 215 82 232C84 247 97 258 118 266"
                  stroke="#ef8d6c"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute left-1/2 top-[20%] z-0 w-[98%] max-w-[680px] -translate-x-1/2">
                <div className="motion-cheapest-rates-car relative aspect-[1536/1024] w-full">
                  <Image
                    alt="Nearby cab behind the phone"
                    className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.14)]"
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 680px"
                    src="/images/Cheapest%20Rates/car-bg.png"
                  />
                </div>
              </div>

              <div className="absolute left-1/2 top-0 z-20 w-[50%] min-w-[200px] max-w-[300px] -translate-x-1/2">
                <div className="motion-cheapest-rates-phone relative aspect-[1312/2656] w-full">
                  <Image
                    alt="AAVORide mobile booking screen"
                    className="object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.22)]"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 300px, 300px"
                    src="/images/Cheapest%20Rates/mobile-ui.png"
                  />
                </div>
              </div>

              <div className="absolute left-[8%] top-[7%] z-20 sm:left-[7%] sm:top-[6%]">
                <svg
                  aria-hidden="true"
                  className="motion-cheapest-rates-pin h-[38px] w-[38px] drop-shadow-[0_8px_18px_rgba(255,62,29,0.14)]"
                  fill="none"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.75C10.36 2.75 6.75 6.39 6.75 10.93C6.75 16.86 15 24.75 15 24.75C15 24.75 23.25 16.86 23.25 10.93C23.25 6.39 19.64 2.75 15 2.75Z"
                    fill="#ff3e1d"
                  />
                  <circle cx="15" cy="10.9" fill="white" r="3.1" />
                </svg>
              </div>
            </div>

            <div className="relative order-1 z-10 w-full max-w-[560px] text-left lg:order-2 lg:max-w-[520px] lg:justify-self-start lg:pl-2">
              <h2 className="text-left text-[clamp(2rem,6.5vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#201d1b]">
                Instant Nearby Cars
                <span className="block text-[var(--primary)]">at Cheapest Rates.</span>
              </h2>

              <p className="mt-5 text-[15px] leading-[1.78] text-[var(--muted-foreground)] md:text-[17px] md:leading-[1.85]">
                Enjoy affordable cab bookings with transparent pricing, verified drivers, and
                smooth rides across India. Whether it&apos;s a quick city ride or a
                long-distance journey, AAVORide makes every trip budget-friendly and
                stress-free. Travel smarter with reliable rides at the best fares.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
                <FeaturePoint
                  description="Safe rides with trusted drivers."
                  icon={<BadgeCheck className="h-[18px] w-[18px]" strokeWidth={2.1} />}
                  title="Verified Drivers"
                />
                <FeaturePoint
                  description="Help anytime you need it."
                  icon={<ShieldCheck className="h-[18px] w-[18px]" strokeWidth={2.1} />}
                  title="24/7 Support"
                />
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-4">
                <StoreButton
                  icon={<Play className="h-5 w-5 fill-current sm:h-6 sm:w-6" strokeWidth={2.2} />}
                  label="Get it on"
                  store="Google Play"
                />
                <StoreButton
                  icon={<Grid3x3 className="h-[18px] w-[18px]" strokeWidth={2.2} />}
                  label="Download on the"
                  store="App Store"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
