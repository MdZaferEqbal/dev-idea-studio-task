"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "./shared";

const MOBILE_MQ = "(max-width: 767px)";

type HorizontalAutoSlideTrackProps = {
  children: ReactNode;
  sliderClassName?: string;
  trackClassName?: string;
  scrollSpeed?: number;
};

export function HorizontalAutoSlideTrack({
  children,
  sliderClassName,
  trackClassName,
  scrollSpeed = 48,
}: HorizontalAutoSlideTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mobileQuery = window.matchMedia(MOBILE_MQ);
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frameId = 0;
    let offset = 0;
    let lastTime = 0;

    const tick = (time: number) => {
      if (!mobileQuery.matches || reducedMotionQuery.matches) {
        track.style.transform = "";
        return;
      }

      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const loopWidth = track.scrollWidth / 2;
      if (loopWidth <= 0) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      offset = (offset + scrollSpeed * delta) % loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      frameId = window.requestAnimationFrame(tick);
    };

    const restart = () => {
      window.cancelAnimationFrame(frameId);
      offset = 0;
      lastTime = 0;

      if (mobileQuery.matches && !reducedMotionQuery.matches) {
        track.style.animation = "none";
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      track.style.transform = "";
      track.style.animation = "";
    };

    const resizeObserver = new ResizeObserver(restart);
    resizeObserver.observe(track);

    mobileQuery.addEventListener("change", restart);
    reducedMotionQuery.addEventListener("change", restart);
    restart();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mobileQuery.removeEventListener("change", restart);
      reducedMotionQuery.removeEventListener("change", restart);
      track.style.transform = "";
      track.style.animation = "";
    };
  }, [scrollSpeed]);

  return (
    <div className={cn("vertical-auto-slider bg-transparent", sliderClassName)}>
      <div
        ref={trackRef}
        className={cn("vertical-auto-slider__track", trackClassName)}
      >
        {children}
      </div>
    </div>
  );
}

export function FleetAutoSlideTrack({ children }: { children: ReactNode }) {
  return (
    <HorizontalAutoSlideTrack
      sliderClassName="fleet-vertical-auto-slider w-full"
      trackClassName="fleet-vertical-auto-slider__track fleet-auto-slide-track w-full!"
    >
      {children}
    </HorizontalAutoSlideTrack>
  );
}

export function CityAutoSlideTrack({ children }: { children: ReactNode }) {
  return (
    <HorizontalAutoSlideTrack
      scrollSpeed={42}
      sliderClassName="city-vertical-auto-slider py-[90px]!"
      trackClassName="city-auto-slide-track"
    >
      {children}
    </HorizontalAutoSlideTrack>
  );
}
