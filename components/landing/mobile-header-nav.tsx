'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PartnerIcon } from "./icons";
import type { NavItem } from "./landing-types";
import { cn } from "./shared";

export function MobileHeaderNav({
  items,
  brand = "AAVORide",
  ctaLabel = "Become a Partner",
}: {
  items: NavItem[];
  brand?: string;
  ctaLabel?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[380px] md:hidden">
      <div className="mx-auto w-[calc(100%-28px)] rounded-full border border-[#f3f3f3] bg-white p-2 shadow-[0_18px_42px_rgba(31,27,24,0.1)]">
        <div className="grid grid-cols-[44px_1fr_44px] items-center">
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#2f3743] transition-colors hover:bg-[#f6f6f6]"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-6 w-6" strokeWidth={2.2} /> : <Menu className="h-6 w-6" strokeWidth={2.2} />}
          </button>

          <div className="text-center text-[22px] font-extrabold leading-none tracking-[-0.04em] text-[var(--primary)]">
            {brand}
          </div>

          <div aria-hidden="true" className="h-11 w-11" />
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden rounded-[30px] bg-white transition-all duration-300",
          isOpen
            ? "mt-4 max-h-[420px] translate-y-0 border border-[#f2f2f2] opacity-100 shadow-[0_20px_48px_rgba(31,27,24,0.1)]"
            : "pointer-events-none mt-0 max-h-0 -translate-y-2 border-transparent opacity-0 shadow-none",
        )}
      >
        <div className={cn("px-6 pb-6 pt-7 transition-all duration-300", isOpen ? "max-h-[420px]" : "max-h-0 p-0")}>
          <div className="flex flex-col items-center gap-6 text-center">
            {items.map((item) => (
              <a
                key={item.label}
                className={cn(
                  "relative whitespace-nowrap pb-[6px] text-[16px] font-semibold leading-none tracking-[-0.01em] text-[#564f4b] transition-colors duration-300 hover:text-[var(--primary)] sm:text-[14px]",
                  item.active &&
                    "text-[var(--primary)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--primary)]",
                )}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 border-t border-[#efefef] pt-6">
            <button
              className="flex w-full items-center justify-center gap-2.5 text-[18px] font-extrabold tracking-[-0.02em] text-[var(--primary)] sm:text-[15px]"
              type="button"
            >
              <PartnerIcon className="h-4 w-4" />
              <span>{ctaLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
