"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MOBILE_MQ = "(max-width: 1279px)";
// Speed in pixels per frame (at ~60 fps this is ~1px/frame = ~60px/s)
const SCROLL_SPEED = 0.3;

export function HowItWorksStepsScroller({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const mobileQuery = window.matchMedia(MOBILE_MQ);
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let rafId: number | undefined;
    let paused = false;
    let isVisible = false;
    let scrollPos = scroller.scrollLeft;

    // End-of-scroll behavior states
    let isWaitingAtEnd = false;
    let pauseEndTime = 0;
    let isResetting = false;
    let resetStartTime = 0;
    let resetStartPos = 0;

    const tick = () => {
      if (!paused && isVisible && mobileQuery.matches && !reducedMotionQuery.matches) {
        const maxScroll = scroller.scrollWidth - scroller.clientWidth;
        const now = Date.now();

        if (maxScroll > 0) {
          if (isWaitingAtEnd) {
            if (now >= pauseEndTime) {
              isWaitingAtEnd = false;
              isResetting = true;
              resetStartTime = now;
              resetStartPos = scroller.scrollLeft;
            }
          } else if (isResetting) {
            const elapsed = now - resetStartTime;
            const duration = 1200; // Time in ms to scroll smoothly back to start
            const progress = Math.min(1, elapsed / duration);
            
            // Cubic ease-in-out easing
            const ease = progress < 0.5 
              ? 4 * progress * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            scrollPos = resetStartPos * (1 - ease);
            scroller.scrollLeft = scrollPos;

            if (progress >= 1) {
              isResetting = false;
              scrollPos = 0;
              scroller.scrollLeft = 0;
            }
          } else {
            // Normal continuous scrolling
            scrollPos += SCROLL_SPEED;
            if (scrollPos >= maxScroll) {
              scrollPos = maxScroll;
              scroller.scrollLeft = maxScroll;
              isWaitingAtEnd = true;
              pauseEndTime = now + 1500; // Pause for 1.5 seconds at the end
            } else {
              scroller.scrollLeft = scrollPos;
            }
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const pause = () => { paused = true; };
    const resume = () => { 
      // Synchronize accumulator, but cancel reset states to let the user scroll normally
      scrollPos = scroller.scrollLeft; 
      isWaitingAtEnd = false;
      isResetting = false;
      paused = false; 
    };

    const onBreakpointChange = () => {
      if (!mobileQuery.matches) {
        scroller.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollPos = scroller.scrollLeft;
      }
    };

    let delayTimeoutId: ReturnType<typeof setTimeout> | undefined;

    // Only auto-scroll when container is visible on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (delayTimeoutId) clearTimeout(delayTimeoutId);

        if (entry.isIntersecting) {
          // Minor delay of 800ms before starting the scroll
          delayTimeoutId = setTimeout(() => {
            isVisible = true;
          }, 800);
        } else {
          isVisible = false;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(scroller);

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("touchend", resume);
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);

    mobileQuery.addEventListener("change", onBreakpointChange);

    // Start the continuous animation loop
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (delayTimeoutId) clearTimeout(delayTimeoutId);
      observer.disconnect();
      mobileQuery.removeEventListener("change", onBreakpointChange);
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
