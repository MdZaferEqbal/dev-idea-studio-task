'use client'

import { Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { PrimaryButton, cn } from "./shared";

const MOBILE_BREAKPOINT = 768;
const HERO_SCROLL_OFFSET = 56;

function shouldShowMobileCta() {
  if (window.innerWidth >= MOBILE_BREAKPOINT) {
    return false;
  }

  const heroStart = document.getElementById("home")?.offsetTop ?? 0;
  return window.scrollY > heroStart + HERO_SCROLL_OFFSET;
}

export function MobileBottomCta({ label = "Book Now" }: { label?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(shouldShowMobileCta());
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 transition-[opacity,transform] duration-300 ease-out md:hidden",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
    >
      <div className="mx-auto max-w-[420px]">
        <PrimaryButton
          className="pointer-events-auto h-14 w-full bg-[#1d2363] px-6 py-0 text-[18px] font-extrabold tracking-[-0.03em] shadow-[0_18px_36px_rgba(29,35,99,0.24)] hover:shadow-[0_22px_42px_rgba(29,35,99,0.3)]"
          icon={<Smartphone className="h-[18px] w-[18px]" strokeWidth={2.1} />}
        >
          {label}
        </PrimaryButton>
      </div>
    </div>
  );
}
