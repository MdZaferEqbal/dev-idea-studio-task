import Image from "next/image";
import { Globe, PlusCircle } from "lucide-react";
import { supportedLanguages } from "./landing-data";
import { Eyebrow, SectionContainer } from "./shared";
import { AmbientGlow } from "./ambient-glow";

export function LanguageSection() {
  return (
    <section className="relative h-auto pb-8 md:pb-24" id="about">
      <AmbientGlow
        className="md:left-[-25%] md:translate-x-1/2 bottom-0 right-[-25%] w-[312px]! h-[312px]! md:w-[570px]! md:h-[570px]!"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body">
          <div className="grid gap-6 md:gap-11 lg:grid-cols-[1.16fr_0.84fr] lg:items-center lg:gap-10 xl:gap-11">
            <div className="order-2 mx-auto w-full max-w-[640px] lg:order-1 lg:max-w-[720px]">
              <div className="relative aspect-[1536/1024] w-full">
                <Image
                  alt="India map showing language-based driver matching coverage"
                  className="object-contain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src="/images/map.png"
                />
              </div>
            </div>

            <div className="order-1 max-w-[560px] lg:order-2 lg:pl-2">
              <Eyebrow
                className="px-3.5 py-1.5 text-[11px] leading-none"
                icon={<Globe className="h-3.5 w-3.5" strokeWidth={2} />}
              >
                Growing Across Indian States
              </Eyebrow>

              <h2 className="mt-5 text-[clamp(2rem,6.5vw,3.35rem)] font-extrabold leading-[1] tracking-[-0.055em] text-[#201d1b]">
                Language-Based Driver Matching
              </h2>

              <p className="mt-5 max-w-[520px] text-[15px] leading-[1.78] text-[var(--muted-foreground)] md:text-[17px] md:leading-[1.82]">
                Choose drivers who speak your preferred language for smoother communication,
                comfort, and a stress free ride. Our global network ensures you&apos;re
                understood, wherever you are.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 text-[14px] font-medium text-[#3d3734] sm:gap-x-7 sm:gap-y-3.5 sm:text-[15px] lg:grid-cols-4">
                {supportedLanguages.map((language) => (
                  <div key={language} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3d3734]" />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap sm:overflow-visible sm:whitespace-normal">
                      {language}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[rgba(255,62,29,0.28)] bg-white px-5 py-3 text-[14px] font-bold text-[var(--primary)] shadow-[0_11px_24px_rgba(255,62,29,0.06)] transition-colors duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white sm:w-auto sm:justify-start sm:px-5 sm:text-[15px]">
                  <PlusCircle
                    className="h-[17px] w-[17px] text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2}
                  />
                  <span>20+ Languages Supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
