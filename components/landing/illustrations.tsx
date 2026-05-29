import Image from "next/image";
import type { CSSProperties } from "react";
import type { ServiceTheme, VehicleKind } from "./landing-types";
import { cn } from "./shared";

export function AvatarStack() {
  const avatars = [
    {
      alt: "Happy traveler portrait one",
      src: "/images/65fdd9e521f2e608e8ae7971ad0d33a6018e215b%20(1).jpg",
    },
    {
      alt: "Happy traveler portrait two",
      src: "/images/c32007df712fa13c76dc00b7bb938e73cbf806f0%20(1).jpg",
    },
    {
      alt: "Happy traveler portrait three",
      src: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
    },
  ];

  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar.src}
          className={cn(
            "relative h-11 w-11 overflow-hidden rounded-full border-[3px] border-white shadow-[0_10px_18px_rgba(31,27,24,0.12)]",
            index > 0 && "-ml-3",
          )}
        >
          <Image
            alt={avatar.alt}
            className="object-cover"
            fill
            sizes="44px"
            src={avatar.src}
          />
        </div>
      ))}
    </div>
  );
}

const HERO_PHONE_ASSETS = {
  booking: {
    src: "/images/phone/phone-1.png",
    alt: "AAVORide booking app screen",
    width: 765,
    height: 1054,
  },
  brand: {
    src: "/images/phone/phone-2.png",
    alt: "AAVORide branding app screen",
    width: 674,
    height: 1033,
  },
} as const;

export function HeroPhoneMockup({
  variant,
  className,
  sizes = "240px",
}: {
  variant: "booking" | "brand";
  className?: string;
  sizes?: string;
}) {
  const asset = HERO_PHONE_ASSETS[variant];

  return (
    <Image
      alt={asset.alt}
      className={cn(
        "h-auto w-full select-none drop-shadow-[0_28px_48px_rgba(31,27,24,0.2)]",
        className,
      )}
      height={asset.height}
      loading="eager"
      priority
      sizes={sizes}
      src={asset.src}
      width={asset.width}
    />
  );
}

const serviceBackgrounds: Record<ServiceTheme, string> = {
  outstation:
    "linear-gradient(180deg, #f6dfb1 0%, #8f7a51 42%, #1b1a1c 100%)",
  airport:
    "linear-gradient(180deg, #8fb5d1 0%, #4d6980 48%, #17191b 100%)",
  wedding:
    "linear-gradient(180deg, #d3b58b 0%, #775c34 46%, #1c1816 100%)",
  local:
    "linear-gradient(180deg, #b69172 0%, #6f5845 45%, #16181c 100%)",
  roundtrip:
    "linear-gradient(180deg, #9dc9ef 0%, #756547 50%, #151718 100%)",
  tempo:
    "linear-gradient(180deg, #2b3341 0%, #1f252f 42%, #111215 100%)",
};

export function ServiceScene({ theme }: { theme: ServiceTheme }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: serviceBackgrounds[theme] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_25%),linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
      {theme === "outstation" ? <OutstationArt /> : null}
      {theme === "airport" ? <AirportArt /> : null}
      {theme === "wedding" ? <WeddingArt /> : null}
      {theme === "local" ? <LocalArt /> : null}
      {theme === "roundtrip" ? <RoundTripArt /> : null}
      {theme === "tempo" ? <TempoArt /> : null}
    </div>
  );
}

function OutstationArt() {
  return (
    <>
      <div className="absolute bottom-[42%] left-[-6%] h-[160px] w-[44%] rounded-[50%] bg-[#445238]" />
      <div className="absolute bottom-[38%] left-[18%] h-[210px] w-[46%] rounded-[52%] bg-[#566946]" />
      <div className="absolute bottom-[37%] right-[-3%] h-[190px] w-[42%] rounded-[52%] bg-[#4d5b3d]" />
      <div className="absolute bottom-[18%] left-[12%] h-[180px] w-[160px] rounded-t-[40px] bg-[#cab487]/60" />
      <div className="absolute bottom-[18%] left-[20%] h-[130px] w-[130px] rounded-t-[30px] bg-[#d9c8a4]/60" />
      <div className="absolute bottom-[13%] left-[8%] h-[7px] w-[72%] rounded-full bg-white/25 blur-sm" />
      <GenericCar
        className="absolute bottom-[9%] left-[14%] w-[62%]"
        kind="suv"
      />
    </>
  );
}

function AirportArt() {
  return (
    <>
      <div className="absolute inset-y-0 right-[12%] w-[2px] bg-white/28" />
      <div className="absolute inset-y-0 right-[28%] w-[2px] bg-white/22" />
      <div className="absolute inset-y-0 right-[44%] w-[2px] bg-white/18" />
      <div className="absolute left-[9%] top-[16%] h-[58%] w-[22%] rounded-[18px] bg-black/22" />
      <div className="absolute left-[9%] top-[74%] h-[8px] w-[82%] rounded-full bg-black/25" />
      <GenericCar className="absolute bottom-[8%] left-[5%] w-[34%]" kind="hatchback" />
    </>
  );
}

function WeddingArt() {
  return (
    <>
      <div className="absolute bottom-[32%] left-[8%] h-[42%] w-[26%] rounded-t-[80px] border-[10px] border-[#e8d1ae]/60 border-b-0" />
      <div className="absolute bottom-[29%] left-[16%] h-[27%] w-[10%] rounded-t-[24px] bg-[#b98e5b]/50" />
      <GenericCar className="absolute bottom-[9%] right-[6%] w-[56%]" kind="sedan" />
    </>
  );
}

function LocalArt() {
  return (
    <>
      {[
        { left: "7%", width: "12%", height: "42%" },
        { left: "22%", width: "15%", height: "58%" },
        { left: "40%", width: "10%", height: "34%" },
        { left: "54%", width: "16%", height: "48%" },
        { left: "74%", width: "11%", height: "62%" },
      ].map((building) => (
        <div
          key={building.left}
          className="absolute bottom-0 rounded-t-[14px] bg-black/28"
          style={building as CSSProperties}
        />
      ))}
      <div className="absolute left-[11%] top-[14%] h-[44%] w-[26%] rounded-[26px] border border-white/25 bg-white/10 backdrop-blur-[2px]" />
      <div className="absolute left-[17%] top-[22%] h-[10px] w-[10px] rounded-full bg-white/70" />
      <div className="absolute left-[17%] top-[34%] h-[5px] w-[54%] rounded-full bg-white/50" />
      <div className="absolute left-[17%] top-[42%] h-[5px] w-[42%] rounded-full bg-white/30" />
    </>
  );
}

function RoundTripArt() {
  return (
    <>
      <div className="absolute bottom-[34%] left-[8%] h-[25%] w-[66%] rounded-t-[20px] bg-[#c4b28b]/55" />
      <div className="absolute bottom-[42%] left-[18%] h-[19%] w-[10%] rounded-t-[18px] bg-[#d7c39a]/65" />
      <div className="absolute bottom-[42%] left-[32%] h-[19%] w-[10%] rounded-t-[18px] bg-[#d7c39a]/65" />
      <div className="absolute bottom-[42%] left-[46%] h-[19%] w-[10%] rounded-t-[18px] bg-[#d7c39a]/65" />
      <div className="absolute bottom-[42%] left-[60%] h-[19%] w-[10%] rounded-t-[18px] bg-[#d7c39a]/65" />
      <GenericCar className="absolute bottom-[7%] left-[14%] w-[44%]" kind="sedan" />
    </>
  );
}

function TempoArt() {
  return (
    <>
      {[
        { left: "8%", width: "11%", height: "33%" },
        { left: "22%", width: "16%", height: "52%" },
        { left: "43%", width: "13%", height: "40%" },
        { left: "61%", width: "9%", height: "60%" },
        { left: "73%", width: "12%", height: "45%" },
      ].map((building) => (
        <div
          key={building.left}
          className="absolute bottom-0 rounded-t-[12px] bg-[#0c0d10]/55"
          style={building as CSSProperties}
        />
      ))}
      <GenericCar className="absolute bottom-[6%] left-[18%] w-[56%]" kind="van" />
    </>
  );
}

export function VehicleIllustration({ kind }: { kind: VehicleKind }) {
  return (
    <div className="relative h-[170px] w-full">
      <div className="absolute inset-x-[8%] bottom-[22px] h-[24px] rounded-full bg-black/8 blur-lg" />
      <GenericCar
        className="absolute inset-x-0 bottom-0 mx-auto w-[74%] max-w-[230px]"
        kind={kind}
      />
    </div>
  );
}

function GenericCar({
  kind,
  className,
}: {
  kind: VehicleKind;
  className?: string;
}) {
  const bodyMap: Record<VehicleKind, string> = {
    hatchback:
      "polygon(8% 66%, 16% 49%, 29% 39%, 49% 33%, 65% 35%, 73% 42%, 88% 46%, 93% 58%, 95% 71%, 9% 72%)",
    sedan:
      "polygon(7% 65%, 18% 47%, 36% 38%, 56% 39%, 68% 45%, 88% 49%, 94% 59%, 95% 71%, 8% 72%)",
    suv: "polygon(6% 65%, 15% 44%, 30% 32%, 55% 31%, 71% 36%, 89% 44%, 95% 55%, 95% 71%, 7% 72%)",
    van: "polygon(5% 66%, 11% 40%, 28% 26%, 62% 26%, 82% 33%, 93% 47%, 95% 60%, 95% 72%, 6% 72%)",
  };

  return (
    <div className={cn("aspect-[2.25/1]", className)}>
      <div
        className="relative h-full w-full"
        style={{
          filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.18))",
        }}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f2f2f4_55%,#d7d8dd_100%)]"
          style={{ clipPath: bodyMap[kind] }}
        />
        <div
          className="absolute left-[20%] top-[38%] h-[17%] w-[44%] bg-[linear-gradient(180deg,#1f2731_0%,#3c4c5e_100%)]"
          style={{
            clipPath:
              kind === "van"
                ? "polygon(0 100%, 10% 10%, 90% 8%, 100% 100%)"
                : "polygon(0 100%, 12% 16%, 80% 10%, 100% 100%)",
          }}
        />
        <div className="absolute left-[18%] top-[54%] h-[10%] w-[58%] rounded-full bg-black/10" />
        <div className="absolute left-[13%] top-[59%] h-[4%] w-[14%] rounded-full bg-[#151515]" />
        <div className="absolute right-[9%] top-[58%] h-[4%] w-[14%] rounded-full bg-[#151515]" />
        <div className="absolute left-[19%] top-[62%] h-[22%] w-[18%] rounded-full border-[6px] border-[#24262d] bg-[#7a7f8a]" />
        <div className="absolute right-[15%] top-[62%] h-[22%] w-[18%] rounded-full border-[6px] border-[#24262d] bg-[#7a7f8a]" />
      </div>
    </div>
  );
}

export function IndiaNetworkIllustration() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[560px]">
      <svg
        className="absolute inset-0 h-full w-full"
        fill="none"
        viewBox="0 0 560 420"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="mapShadow" colorInterpolationFilters="sRGB">
            <feDropShadow
              dx="0"
              dy="18"
              floodColor="#5d5b63"
              floodOpacity="0.18"
              stdDeviation="18"
            />
          </filter>
        </defs>

        <path
          d="M171 44L224 41L252 60L278 59L324 88L308 122L336 153L328 204L292 238L320 292L286 359L232 327L201 273L165 257L130 215L112 163L145 117L143 76L171 44Z"
          fill="#d1d4d8"
          filter="url(#mapShadow)"
        />
        <path
          d="M150 70L186 57L214 76L204 118L160 118L149 94L150 70Z"
          fill="#f18d57"
        />
        <path
          d="M244 103L306 99L286 138L258 145L236 125L244 103Z"
          fill="#ef6f34"
        />
        <path
          d="M148 144L205 146L194 195L142 202L129 171L148 144Z"
          fill="#f39a64"
        />
        <path
          d="M230 164L290 171L286 232L246 241L222 205L230 164Z"
          fill="#f18d57"
        />
        <path
          d="M184 224L228 225L239 286L207 301L174 267L184 224Z"
          fill="#ef6f34"
        />
        <path
          d="M114 208L160 210L184 252L147 274L110 247L114 208Z"
          fill="#f7b284"
        />
        <path
          d="M263 249L321 255L299 314L252 310L242 278L263 249Z"
          fill="#f39a64"
        />
        <path
          d="M194 301L238 309L252 354L214 356L191 330L194 301Z"
          fill="#ef6f34"
        />
        <path
          d="M349 150L393 162L388 221L360 232L341 202L349 150Z"
          fill="#ef6f34"
        />
        <path
          d="M392 173L438 179L456 214L433 242L400 227L392 173Z"
          fill="#f7b284"
        />
        <path
          d="M398 252L432 252L445 290L417 312L391 286L398 252Z"
          fill="#ef6f34"
        />

        <path
          d="M233 201C232 148 258 114 282 104"
          stroke="#ef9a2d"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M233 201C280 162 335 163 366 176"
          stroke="#ef9a2d"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M233 201C274 230 315 266 408 272"
          stroke="#ef9a2d"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M233 201C194 193 147 182 110 193"
          stroke="#ef9a2d"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M233 201C194 241 174 286 160 333"
          stroke="#ef9a2d"
          strokeLinecap="round"
          strokeWidth="2.5"
        />

        {[
          [233, 201],
          [281, 104],
          [367, 176],
          [409, 272],
          [110, 193],
          [160, 333],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}-${index}`}>
            <circle cx={cx} cy={cy} fill="rgba(255,62,29,0.22)" r="15" />
            <circle cx={cx} cy={cy} fill="#ff3e1d" r="8" />
          </g>
        ))}

        <path
          d="M410 340C430 314 432 289 426 266"
          stroke="#c5c9d0"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M400 353C420 327 422 304 416 281"
          stroke="#e5e7ea"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <path
          d="M129 382C147 363 150 339 141 315"
          stroke="#d5d8dd"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M140 392C160 369 163 346 154 322"
          stroke="#eceef2"
          strokeLinecap="round"
          strokeWidth="10"
        />
      </svg>

      <SpeechBubble className="left-[12px] top-[112px]" label="A" tone="peach" />
      <SpeechBubble className="left-[84px] top-[136px]" label="A" text="A" />
      <SpeechBubble className="left-[172px] top-[42px]" label="आ" tone="slate" />
      <SpeechBubble className="left-[282px] top-[72px]" label="..." tone="peach" />
      <SpeechBubble className="left-[357px] top-[92px]" label="E" tone="cream" />
      <SpeechBubble className="left-[388px] top-[244px]" label="E" tone="slate" />
      <FloatingAvatar className="left-[0px] top-[158px]" />
      <FloatingAvatar className="left-[300px] top-[126px]" />
      <FloatingAvatar className="left-[360px] top-[286px]" />
    </div>
  );
}

function SpeechBubble({
  className,
  label,
  text,
  tone = "peach",
}: {
  className?: string;
  label: string;
  text?: string;
  tone?: "peach" | "slate" | "cream";
}) {
  const tones: Record<string, string> = {
    peach: "bg-[#ff3e1d] text-white shadow-[0_16px_28px_rgba(255,62,29,0.22)]",
    slate: "bg-[#edeef1] text-[#312f33] shadow-[0_16px_28px_rgba(31,27,24,0.08)]",
    cream: "bg-[#efe3d0] text-[#3e3126] shadow-[0_16px_28px_rgba(31,27,24,0.08)]",
  };

  return (
    <div
      className={cn(
        "absolute min-w-[52px] rounded-[18px] px-4 py-2 text-lg font-extrabold",
        tones[tone],
        className,
      )}
    >
      <span>{label}</span>
      {text ? <span className="ml-2 text-sm font-semibold">{text}</span> : null}
      <span className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 rounded-[3px] bg-inherit" />
    </div>
  );
}

function FloatingAvatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-[0_16px_28px_rgba(31,27,24,0.08)]",
        className,
      )}
    >
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2e4352] to-[#f0c39e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff3e1d]" />
    </div>
  );
}
