import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import { AmbientGlow } from "./ambient-glow";
import { Eyebrow, SectionContainer, SectionHeading } from "./shared";

const testimonials = [
  {
    quote:
      "AAVORide has transformed my monthly Bangalore-Chennai trips. The cars are spotless, and the drivers are incredibly professional. Best service experience so far.",
    name: "Aarav Sharma",
    role: "Frequent Traveler",
    avatar: "/images/65fdd9e521f2e608e8ae7971ad0d33a6018e215b%20(1).jpg",
  },
  {
    quote:
      "Booking was seamless. I used them for a family trip to Ooty. The Innova was well maintained and the driver knew the best routes. Highly recommended.",
    name: "Shaan Malhotra",
    role: "Weekend Explorer",
    avatar: "/images/c32007df712fa13c76dc00b7bb938e73cbf806f0%20(1).jpg",
  },
  {
    quote:
      "Transparent pricing is the best part. I never worry about hidden fees or extra fares. The support team was one call away for late-night journeys.",
    name: "Priya Das",
    role: "Daily Commuter",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-18 md:pb-28 md:pt-20">
      <AmbientGlow
        className="right-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body">
          <div className="flex justify-center">
            <Eyebrow
              className="px-4 py-2 text-[10px] tracking-[0.18em]"
              icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
            >
              Trusted By Travelers
            </Eyebrow>
          </div>

          <SectionHeading
            accent="Our Travelers."
            className="mt-7 max-w-[960px] [&_h2]:text-[44px] [&_h2]:leading-[1.02] md:[&_h2]:text-[62px] [&_p]:mt-6 [&_p]:text-[18px] [&_p]:leading-[1.8]"
            description="Honest reviews from people who travel smart with AAVORide."
            title="Stories from Our Travelers."
          />

          <div className="mt-14 grid gap-5 md:gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="motion-card-hover rounded-[24px] border border-transparent bg-white p-7 shadow-[0_18px_36px_rgba(31,27,24,0.06)] md:p-8"
              >
                <div className="flex items-center gap-1 text-[var(--primary)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.8} />
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-8 text-[#625d5a]">{item.quote}</p>

                <div className="mt-7 flex items-center gap-3.5">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image alt={item.name} className="object-cover" fill sizes="44px" src={item.avatar} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold tracking-[-0.02em] text-[#201d1b]">
                      {item.name}
                    </p>
                    <p className="text-[13px] text-[#8a837f]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
