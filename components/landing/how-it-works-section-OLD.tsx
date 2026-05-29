import type { LucideIcon } from "lucide-react";
import {
    BadgeCheck,
    BusFront,
    Flag,
    Headset,
    MapPin,
    Search,
    ShieldCheck,
    WalletCards,
    CircleCheckBig,
} from "lucide-react";
import { Eyebrow, SectionContainer, SectionHeading, cn } from "./shared";
import { HowItWorksStepsScroller } from "./how-it-works-auto-scroll";

const steps: Array<{
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
    tinted?: boolean;
    offsetClass?: string;
}> = [
        {
            step: "STEP 01",
            title: "Search Route",
            description: "Enter your pickup and destination locations.",
            icon: Search,
        },
        {
            step: "STEP 02",
            title: "Choose Ride",
            description: "Pick from our premium fleet of verified cars.",
            icon: BusFront,
            tinted: true,
            offsetClass: "-mt-10",
        },
        {
            step: "STEP 03",
            title: "Transparent Pricing",
            description: "No hidden costs. See fares before you book.",
            icon: WalletCards,
        },
        {
            step: "STEP 04",
            title: "Connect Driver",
            description: "Direct communication with your personal pilot.",
            icon: Headset,
            tinted: true,
            offsetClass: "-mt-10",
        },
        {
            step: "STEP 05",
            title: "Confirm Booking",
            description: "One-tap confirmation for your luxury journey.",
            icon: CircleCheckBig,
        },
        {
            step: "STEP 06",
            title: "Travel Safely",
            description: "Relax and enjoy the most refined ride in India.",
            icon: ShieldCheck,
            tinted: true,
            offsetClass: "-mt-10",
        },
    ];

export function HowItWorksSectionOld() {
    return (
        <section className="how-it-works-section relative overflow-x-visible py-20 md:py-24">
            <SectionContainer className="max-w-[1268px]">
                <div className="flex justify-center">
                    <Eyebrow
                        className="px-4 py-2 text-[10px]"
                        icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
                    >
                        Simple Booking Process
                    </Eyebrow>
                </div>

                <SectionHeading
                    accent="AAVORide"
                    className="mt-7 max-w-[720px]"
                    description="Book trusted rides across India in just a few taps. Our premium ecosystem is built for luxury and absolute comfort."
                    title="How AAVORide Works"
                />

                <div className="landing-section-body how-it-works-section-body relative mt-14 overflow-x-visible md:mt-16">
                    <HowItWorksStepsScroller>
                        <div className="how-it-works-steps-canvas relative mx-auto">
                            <div className="how-it-works-steps-path pointer-events-none absolute left-[-32px] right-[-32px] top-[108px] h-[122px]">
                                <svg
                                    aria-hidden="true"
                                    className="absolute inset-0 h-full w-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 1184 122"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <filter
                                            id="how-it-works-path-glow"
                                            colorInterpolationFilters="sRGB"
                                            height="160%"
                                            width="160%"
                                            x="-30%"
                                            y="-30%"
                                        >
                                            <feGaussianBlur result="blur" stdDeviation="3.2" />
                                        </filter>
                                        <radialGradient id="how-it-works-node-glow" r="1">
                                            <stop offset="0%" stopColor="#fff4ee" />
                                            <stop offset="38%" stopColor="#ff8f6d" />
                                            <stop offset="72%" stopColor="#ff5a34" />
                                            <stop offset="100%" stopColor="#ff3e1d" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>

                                    <path
                                        className="motion-how-it-works-path-glow"
                                        d="M4 34C38 34 62 52 96 70C130 88 170 92 210 74C250 56 294 52 342 69C382 86 416 90 454 82C492 74 528 54 570 54C612 54 648 86 692 86C736 86 768 54 810 54C852 54 890 86 932 86C974 86 1010 58 1052 54C1096 50 1128 64 1152 54C1164 48 1172 40 1180 34"
                                        filter="url(#how-it-works-path-glow)"
                                        opacity="0.2"
                                        stroke="#ff8b68"
                                        strokeLinecap="round"
                                        strokeWidth="5.5"
                                    />
                                    <path
                                        className="motion-route-dash"
                                        d="M4 34C38 34 62 52 96 70C130 88 170 92 210 74C250 56 294 52 342 69C382 86 416 90 454 82C492 74 528 54 570 54C612 54 648 86 692 86C736 86 768 54 810 54C852 54 890 86 932 86C974 86 1010 58 1052 54C1096 50 1128 64 1152 54C1164 48 1172 40 1180 34"
                                        opacity="0.92"
                                        stroke="#f18f72"
                                        strokeDasharray="2 10"
                                        strokeLinecap="round"
                                        strokeWidth="2.1"
                                    />

                                    <circle
                                        className="motion-how-it-works-node"
                                        cx="232"
                                        cy="70"
                                        fill="url(#how-it-works-node-glow)"
                                        r="12"
                                    />
                                    <circle
                                        className="motion-how-it-works-node-delayed"
                                        cx="454"
                                        cy="82"
                                        fill="url(#how-it-works-node-glow)"
                                        r="11"
                                    />
                                    <circle
                                        className="motion-how-it-works-node"
                                        cx="692"
                                        cy="86"
                                        fill="url(#how-it-works-node-glow)"
                                        r="11"
                                    />
                                    <circle
                                        className="motion-how-it-works-node-delayed"
                                        cx="932"
                                        cy="86"
                                        fill="url(#how-it-works-node-glow)"
                                        r="11"
                                    />
                                </svg>
                            </div>
                            <div className="how-it-works-route-marker motion-route-marker pointer-events-none absolute left-[-42px] top-[128px] z-20 text-[var(--primary)]">
                                <MapPin className="h-7 w-7" strokeWidth={2.2} />
                            </div>
                            <div className="how-it-works-route-marker motion-route-marker-delayed pointer-events-none absolute right-[-38px] top-[128px] z-20 text-[var(--primary)]">
                                <Flag className="h-6 w-6" strokeWidth={2.2} />
                            </div>

                            <div className="relative z-10 grid grid-cols-6 gap-4 how-it-works-steps-grid xl:gap-5">
                                {steps.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <article
                                            key={item.step}
                                            data-how-it-works-step
                                            className={cn(
                                                "how-it-works-step-card group motion-card-hover relative box-border cursor-pointer border border-[#f1ece9] px-6 pb-7 pt-8 text-center shadow-[0_12px_24px_rgba(31,27,24,0.10)] md:px-6 md:pb-8 md:pt-9",
                                                "min-h-[220px] min-w-[228px] rounded-[26px] xl:min-h-0 xl:min-w-0",
                                                item.tinted ? "bg-[#fff3ee]" : "bg-white",
                                                item.offsetClass ? `${item.offsetClass} max-xl:mt-0` : "",
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-[15px] border border-transparent bg-[rgba(255,62,29,0.08)] text-[var(--primary)] transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white",
                                                    index % 2 === 0 ? "motion-bob" : "motion-bob-delayed",
                                                )}
                                            >
                                                <Icon className="h-[22px] w-[22px]" strokeWidth={2.2} />
                                            </div>
                                            <p className="mt-8 text-[12px] font-extrabold tracking-[-0.01em] text-[var(--primary)]">
                                                {item.step}
                                            </p>
                                            <h3 className="mt-3 text-balance text-[17px] font-extrabold leading-[1.28] tracking-[-0.03em] text-[#201d1b]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-4 text-pretty text-[13px] leading-[1.45] text-[var(--muted-foreground)]">
                                                {item.description}
                                            </p>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </HowItWorksStepsScroller>
                </div>
            </SectionContainer>
        </section>
    );
}
