import { ChevronDown } from "lucide-react";
import { AmbientGlow } from "./ambient-glow";
import { Eyebrow, SectionContainer, SectionHeading } from "./shared";

const faqs = [
  {
    question: "How does AAVORide work?",
    answer:
      "AAVORide connects travelers and local users with nearby drivers for different travel needs. Users can submit their trip details in the app, and multiple drivers may respond with their offers. You can review the options, discuss details directly with the drivers via call, and choose the best one for your trip. If you want to rent a car, you can also check available vehicles in the 'Rent Car' section of the app. AAVORide supports multiple vehicle purposes such as local travel, hourly bookings, and outstation trips. Payments are made directly to the driver. There is no third-party involvement, which helps both customers and drivers benefit from transparent pricing.",
  },
  {
    question: "Can I see driver details before booking?",
    answer:
      "Yes! You can view the driver's profile, vehicle details, ratings, and reviews before confirming your booking.",
  },
  {
    question: "Are fares fixed or negotiable?",
    answer:
      "Fares depend on the vehicle type and distance (km). The pricing is fully transparent, so you can see the estimated amount in advance before confirming your booking. Whether you rent a car or book a ride, the cost details are shown clearly in the app, helping you choose the option that fits your budget.",
  },
  {
    question: "Do I pay AAVORide or the driver?",
    answer:
      "Payments are made directly to the driver. AAVORide does not act as a payment intermediary. This direct payment system helps maintain transparency and allows both customers and drivers to benefit without third-party charges.",
  },
  {
    question: "Can I book special options like pet-friendly or senior-friendly cars?",
    answer: "Yes, you can filter for special vehicle options in the app while booking.",
  },
  {
    question: "What if I face an issue during booking or travel?",
    answer:
      "Our support team is available 24/7. You can raise any issues via the app's help section or contact support directly.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <AmbientGlow
        className="hidden lg:block lg:left-[-252px] lg:top-1/2 lg:-translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body">
          <div className="flex justify-center">
            <Eyebrow className="px-4 py-2 text-[10px] tracking-[0.18em]">Support Center</Eyebrow>
          </div>

          <SectionHeading
            className="mt-7 max-w-[920px] [&_h2]:text-[46px] [&_h2]:leading-[1.02] md:[&_h2]:text-[60px] [&_p]:mt-6 [&_p]:text-[18px] [&_p]:leading-[1.85]"
            description="Everything you need to know about booking, drivers, payments, and travel experience."
            title="Frequently Asked Questions"
          />

          <div className="mx-auto mt-12 max-w-[860px]">
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group motion-card-hover rounded-[28px] border border-[#f1e9e5] bg-white shadow-[0_10px_22px_rgba(31,27,24,0.04)] transition-colors open:border-[#efd8cf]"
                >
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between px-6 text-left text-[16px] font-medium text-[#6d6866] [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDown
                      className="h-[18px] w-[18px] shrink-0 text-[var(--primary)] transition-transform duration-200 group-open:rotate-180"
                      strokeWidth={1.8}
                    />
                  </summary>
                  <div className="px-6 pb-6 pt-1">
                    <p className="text-[15px] leading-8 text-[#6f6966]">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="motion-card-hover relative mt-7 flex flex-col gap-4 rounded-[22px] border border-transparent px-6 py-6 max-md:z-10 max-md:bg-[#fff1ef] max-md:shadow-[0_12px_30px_rgba(31,27,24,0.14),0_8px_22px_rgba(255,62,29,0.16)] sm:flex-row sm:items-center sm:justify-between md:bg-[rgba(255,62,29,0.08)] md:px-7 md:py-7 md:shadow-[0_16px_36px_rgba(255,62,29,0.14),0_6px_16px_rgba(31,27,24,0.06)]">
              <div>
                <p className="text-[16px] font-bold tracking-[-0.02em] text-[var(--primary-strong)]">
                  Still have questions?
                </p>
                <p className="mt-2 text-[14px] leading-6 text-[#7a726f]">
                  We&apos;re here to help you anytime.
                </p>
              </div>
              <button
                className="inline-flex h-[48px] items-center justify-center rounded-full bg-[var(--primary)] px-7 text-[15px] font-bold text-white shadow-[0_14px_24px_rgba(255,62,29,0.2)]"
                type="button"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
