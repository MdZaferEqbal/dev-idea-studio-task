"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MOBILE_MQ = "(max-width: 1279px)";
const AUTO_SCROLL_INTERVAL = 4000;

export function HowItWorksStepsScroller({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const mobileQuery = window.matchMedia(MOBILE_MQ);
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let activeIndex = 0;
    let paused = false;

    const getCards = () =>
      Array.from(scroller.querySelectorAll<HTMLElement>("[data-how-it-works-step]"));

    const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
      const cards = getCards();
      if (!cards.length) return;

      const nextIndex = ((index % cards.length) + cards.length) % cards.length;
      activeIndex = nextIndex;

      if (nextIndex === 0) {
        scroller.scrollTo({ left: 0, behavior });
        return;
      }

      if (nextIndex === cards.length - 1) {
        scroller.scrollTo({
          left: scroller.scrollWidth - scroller.clientWidth,
          behavior,
        });
        return;
      }

      const card = cards[nextIndex];
      const scrollerStyles = getComputedStyle(scroller);
      const paddingLeft = Number.parseFloat(scrollerStyles.paddingLeft) || 0;
      const cardLeft =
        card.getBoundingClientRect().left -
        scroller.getBoundingClientRect().left +
        scroller.scrollLeft;

      scroller.scrollTo({
        left: Math.max(0, cardLeft - paddingLeft),
        behavior,
      });
    };

    const stop = () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const start = () => {
      stop();
      if (!mobileQuery.matches || reducedMotionQuery.matches) return;

      intervalId = setInterval(() => {
        if (paused) return;
        scrollToIndex(activeIndex + 1);
      }, AUTO_SCROLL_INTERVAL);
    };

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
    };

    const onBreakpointChange = () => {
      activeIndex = 0;

      if (!mobileQuery.matches) {
        stop();
        scroller.scrollTo({ left: 0, behavior: "auto" });
        return;
      }

      scrollToIndex(0, "auto");
      start();
    };

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("touchend", resume);
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);

    mobileQuery.addEventListener("change", onBreakpointChange);
    reducedMotionQuery.addEventListener("change", onBreakpointChange);

    const frameId = window.requestAnimationFrame(() => {
      onBreakpointChange();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      stop();
      mobileQuery.removeEventListener("change", onBreakpointChange);
      reducedMotionQuery.removeEventListener("change", onBreakpointChange);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("pointerup", resume);
      scroller.removeEventListener("touchend", resume);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="how-it-works-steps-scroll -mx-[clamp(16px,4vw,32px)] max-xl:-mx-[clamp(20px,5vw,40px)] overflow-x-auto overflow-y-visible px-[clamp(16px,4vw,32px)] pb-3 pt-10 max-xl:px-[clamp(20px,5vw,40px)] max-xl:pt-[60px] xl:mx-0 xl:overflow-visible xl:px-0 xl:pb-0 xl:pt-0"
    >
      {children}
    </div>
  );
}
