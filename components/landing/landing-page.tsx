import { AppExperienceSection } from "./app-experience-section";
import { AppDownloadSection } from "./app-download-section";
import { CheapestRatesSection } from "./cheapest-rates-section";
import { ComparisonSection } from "./comparison-section";
import { CitiesSection } from "./cities-section";
import { DriverPreferencesSection } from "./driver-preferences-section";
import { FleetSection } from "./fleet-section";
import { FaqSection } from "./faq-section";
import { FooterSection } from "./footer-section";
import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { LanguageSection } from "./language-section";
import { MobileBottomCta } from "./mobile-bottom-cta";
import { Reveal } from "./motion";
import { TestimonialsSection } from "./testimonials-section";
import { TravelSolutionsSection } from "./travel-solutions-section";
import { HowItWorksSectionOld } from "./how-it-works-section-OLD";

export function LandingPage() {
  return (
    <main className="landing-shell overflow-x-hidden pb-24 md:pb-0">
      <Reveal delayMs={0}>
        <HeroSection />
      </Reveal>
      <Reveal delayMs={40}>
        <ComparisonSection />
      </Reveal>
      <Reveal delayMs={40}>
        <TravelSolutionsSection />
      </Reveal>
      <Reveal delayMs={40}>
        <FleetSection />
      </Reveal>
      <Reveal delayMs={40}>
        <LanguageSection />
      </Reveal>
      <Reveal delayMs={40}>
        <DriverPreferencesSection />
      </Reveal>
      <Reveal delayMs={40}>
        <CheapestRatesSection />
      </Reveal>
      <Reveal delayMs={40}>
        <HowItWorksSection />
      </Reveal>
      {/* <Reveal delayMs={40}>
        <HowItWorksSectionOld />
      </Reveal> */}
      <Reveal delayMs={40}>
        <CitiesSection />
      </Reveal>
      <Reveal delayMs={40}>
        <AppExperienceSection />
      </Reveal>
      <Reveal delayMs={40}>
        <AppDownloadSection />
      </Reveal>
      <Reveal delayMs={40}>
        <FaqSection />
      </Reveal>
      <Reveal delayMs={40}>
        <TestimonialsSection />
      </Reveal>
      <Reveal className="relative z-10" delayMs={20}>
        <FooterSection />
      </Reveal>
      <MobileBottomCta />
    </main>
  );
}
