import {
  DownloadIcon,
  PartnerIcon,
} from "./icons";
import { BadgeCheck } from "lucide-react";
import { AnimatedStatValue } from "./animated-stat-value";
import { AvatarStack } from "./illustrations";
import { heroHighlights, heroStats, navItems } from "./landing-data";
import { MobileHeaderNav } from "./mobile-header-nav";
import { Reveal } from "./motion";
import { HeroPhoneStage } from "./hero-phone-stage";
import { Eyebrow, OutlineButton, PrimaryButton, SectionContainer, cn } from "./shared";

export function HeroSection() {
  return (
    <section className="relative pt-4 sm:pt-5 md:pt-6" id="home">
      <SectionContainer className="relative max-w-[1268px]">
        <Reveal className="relative z-40 md:hidden" delayMs={0}>
          <MobileHeaderNav items={navItems} />
        </Reveal>

        <Reveal className="relative z-40 hidden md:block" delayMs={0}>
          <nav className="mx-auto flex w-full max-w-[986px] flex-col items-center gap-3 rounded-[28px] border border-[#f3f3f3] bg-white px-4 py-3 shadow-[0_14px_36px_rgba(234,91,51,0.09)] sm:px-5 md:relative md:min-h-[68px] md:flex-row md:flex-wrap md:justify-between md:gap-5 md:rounded-full md:px-6 md:py-3 lg:flex-nowrap lg:gap-6">
            <div className="whitespace-nowrap text-[25px] font-extrabold leading-none tracking-[-0.04em] text-[var(--primary)]">
              AAVORide
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] font-semibold leading-none text-[#564f4b] sm:text-[14px] md:w-auto md:gap-6 lg:absolute lg:left-1/2 lg:top-1/2 lg:flex-nowrap lg:gap-8 lg:-translate-x-1/2 lg:-translate-y-1/2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={cn(
                    "relative whitespace-nowrap pb-[6px] transition-colors duration-300 hover:text-[var(--primary)]",
                    item.active &&
                    "text-[var(--primary)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--primary)]",
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <PrimaryButton className="premium-button-shine h-[44px] w-full whitespace-nowrap bg-[linear-gradient(180deg,#ff3e1d_0%,#ff3e1d_100%)] px-[25px] py-0 text-[13px] font-semibold tracking-[-0.01em] shadow-[0_10px_24px_rgba(255,62,29,0.24),inset_0_-2px_0_rgba(255,62,29,0.18)] sm:w-auto">
              Join as a AAVORide Partner
            </PrimaryButton>
          </nav>
        </Reveal>

        <div className="relative grid gap-8 pb-8 pt-8 sm:gap-10 sm:pt-10 sm:pb-10 md:gap-12 md:pt-12 lg:grid-cols-[minmax(0,548px)_minmax(0,1fr)] lg:items-center lg:gap-[34px] lg:pb-12 lg:pt-[64px] xl:gap-[52px]">
          <Reveal className="relative z-10 w-full lg:max-w-[580px] lg:pb-8 lg:pt-2" delayMs={120}>
            <Eyebrow
              className="px-4 py-2 text-[11px] normal-case tracking-normal shadow-[0_10px_20px_rgba(255,62,29,0.04)]"
              icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
            >
              Service Available in your city
            </Eyebrow>

            <h1 className="mt-7 text-[clamp(2.35rem,9vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-[#201d1b]">
              Book Trusted
              <span className="mt-1 block text-[var(--primary)]">Outstation Cabs</span>
            </h1>

            <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] font-medium text-[#463e3a] sm:gap-x-3 sm:text-[13px]">
              {heroHighlights.map((item, index) => (
                <li key={item} className="flex items-center gap-2 sm:gap-3">
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                    />
                  ) : null}
                  <span className="whitespace-nowrap">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-[540px] text-[16px] leading-[1.9] text-[var(--muted-foreground)] sm:text-[17px] sm:leading-[2]">
              <span className="font-semibold text-[var(--primary)]">AAVORide </span> is a smart
              and affordable taxi &amp; car rental app for outstation trips across India. Book
              cabs, rentals, airport transfers, tempo travellers, and more with verified
              drivers and transparent pricing.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <OutlineButton
                className="w-full min-w-[170px] px-7 py-[15px] text-[15px] shadow-none hover:shadow-none sm:w-auto"
                icon={<PartnerIcon className="h-5 w-5" />}
              >
                Become a Partner
              </OutlineButton>
              <PrimaryButton
                className="w-full min-w-[146px] px-7 py-[15px] text-[15px] shadow-none hover:shadow-none sm:w-auto"
                icon={<DownloadIcon className="h-5 w-5" />}
              >
                Download App
              </PrimaryButton>
            </div>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <AvatarStack />
              <p className="text-[15px] text-[#38312d]">
                <span className="font-extrabold text-[var(--primary)]">4.9/5 Rating</span>{" "}
                <span className="text-[var(--muted-foreground)]">from 50k+ Happy Travelers</span>
              </p>
            </div>
          </Reveal>

          <Reveal
            className="relative z-10 mx-auto flex w-full min-w-0 max-w-[480px] items-center justify-center xs:max-w-[540px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-none lg:justify-self-end lg:justify-end xl:min-w-[724px]"
            delayMs={220}
            distance={36}
          >
            <HeroPhoneStage />
          </Reveal>
        </div>
      </SectionContainer>

      <Reveal className="relative z-30" delayMs={120}>
        <div className="full-bleed-strip relative z-30 border-t border-[#f1f1f1] bg-[#FFF1EF] py-8 md:py-11">
          <SectionContainer className="max-w-[1268px]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-panel-soft motion-hover-lift flex flex-col items-center justify-center text-center max-md:h-[148px] max-md:w-full max-md:rounded-[32px] max-md:p-6 md:rounded-[28px] md:px-7 md:py-7"
                >
                  <p className="text-[28px] font-extrabold leading-none tracking-[-0.05em] text-[var(--primary)] sm:text-[32px] md:text-[42px]">
                    <AnimatedStatValue delayMs={index * 120} value={stat.value} />
                  </p>
                  <p className="mt-2 text-[14px] font-medium leading-snug text-[#66605c] sm:text-[15px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionContainer>
        </div>
      </Reveal>
    </section>
  );
}
