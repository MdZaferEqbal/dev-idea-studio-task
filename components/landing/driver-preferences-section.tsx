import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  CarFront,
  Clock3,
  PartyPopper,
  PawPrint,
  ShieldCheck,
  TramFront,
  Zap,
} from "lucide-react";
import { SectionContainer } from "./shared";

const preferenceItems: Array<{
  title: string;
  icon: LucideIcon;
  tone: "peach" | "blue";
}> = [
    { title: "Experienced Drivers", icon: ShieldCheck, tone: "peach" },
    { title: "Event & Wedding", icon: PartyPopper, tone: "blue" },
    { title: "Pet-Friendly Drivers", icon: PawPrint, tone: "peach" },
    { title: "Flexible Hours", icon: Clock3, tone: "peach" },
    { title: "Wheelchair Access", icon: Accessibility, tone: "peach" },
    { title: "Highly Active", icon: TramFront, tone: "peach" },
    { title: "Personal Car Use", icon: CarFront, tone: "peach" },
    { title: "Young & Energetic", icon: Zap, tone: "blue" },
  ];

const toneStyles = {
  peach: {
    icon: "bg-[rgba(255,62,29,0.08)] text-[var(--primary)]",
    iconHover: "group-hover:bg-[var(--primary)] group-hover:text-white",
  },
  blue: {
    icon: "bg-[#eef6ff] text-[#5a84b0]",
    iconHover: "group-hover:bg-[#5a84b0] group-hover:text-white",
  },
} as const;

export function DriverPreferencesSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-8 md:py-24">
      <SectionContainer>
        <div className="landing-section-body">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#201d1b] md:text-[48px]">
              Driver Preferences
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.75] text-[var(--muted-foreground)]">
              Personalize your ride experience based on what matters most to you. Select
              filters to find the perfect professional for your journey.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:gap-5 xl:grid-cols-4">
            {preferenceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group motion-card-hover flex cursor-pointer flex-col items-center justify-center border border-[#f5efeb] bg-white p-6 text-center max-md:h-[168px] max-md:w-full max-md:rounded-[24px] max-md:shadow-[0_12px_30px_rgba(31,27,24,0.16)] md:min-h-[136px] md:rounded-[26px] md:px-6 md:py-7 md:shadow-[0_14px_28px_rgba(31,27,24,0.08)]"
                >
                  <div
                    className={`flex h-[56px] w-[56px] items-center justify-center rounded-[17px] transition-colors duration-300 md:h-[50px] md:w-[50px] md:rounded-[17px] ${toneStyles[item.tone].icon} ${toneStyles[item.tone].iconHover}`}
                  >
                    <Icon className="h-7 w-7 md:h-6 md:w-6" strokeWidth={2.2} />
                  </div>
                  <p className="mt-2 text-[15px] font-medium leading-snug tracking-[-0.02em] text-[#201d1b] md:mt-6 md:text-[18px]">
                    {item.title}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
