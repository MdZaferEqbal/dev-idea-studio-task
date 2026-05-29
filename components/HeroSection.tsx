import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto w-full max-w-[760px] px-4">
        <div className="relative mx-auto aspect-[608/933] w-full max-w-[608px] overflow-hidden bg-white">
          <svg
            aria-hidden="true"
            className="absolute left-[8%] top-[16.5%] z-0 h-[41%] w-[24%]"
            fill="none"
            viewBox="0 0 150 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 21C14 52 8 83 16 111C24 139 52 161 88 181C127 204 133 250 61 299"
              stroke="#ff3e1d"
              strokeDasharray="4 6"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
            <path
              d="M40 4C31 4 24 11.5 24 20.5C24 32.4 40 47 40 47C40 47 56 32.4 56 20.5C56 11.5 49 4 40 4Z"
              fill="#ff3e1d"
            />
            <circle cx="40" cy="20.5" fill="white" r="5" />
          </svg>

          <div className="absolute left-[-4%] top-[49.3%] z-10 w-[99%]">
            <Image
              alt="White car background"
              className="h-auto w-full max-w-none object-contain"
              height={1024}
              priority
              src="/car-bg.png"
              width={1536}
            />
          </div>

          <div className="absolute left-[18.6%] top-[2.6%] z-20 w-[62.7%]">
            <Image
              alt="Mobile UI screen"
              className="h-auto w-full object-contain drop-shadow-[0_26px_42px_rgba(0,0,0,0.28)]"
              height={2656}
              priority
              src="/mobile-ui.png"
              width={1312}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
