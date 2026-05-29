import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  CircleX,
  Download,
  Headset,
  IndianRupee,
  Languages,
  Link2,
  MapPin,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

function createIcon(Icon: LucideIcon, defaultStrokeWidth = 2) {
  return function LucideWrappedIcon({ className, strokeWidth }: IconProps) {
    return (
      <Icon
        aria-hidden="true"
        className={className}
        strokeWidth={strokeWidth ?? defaultStrokeWidth}
      />
    );
  };
}

export const SparkIcon = createIcon(Sparkles, 2.1);
export const StarIcon = createIcon(Star, 2.1);
export const PinIcon = createIcon(MapPin, 2.1);
export const PartnerIcon = createIcon(Users, 2.1);
export const DownloadIcon = createIcon(Download, 2.1);
export const ArrowRightIcon = createIcon(ArrowRight, 2.1);
export const CheckCircleIcon = createIcon(CircleCheck, 2.1);
export const XCircleIcon = createIcon(CircleX, 2.1);
export const ShieldIcon = createIcon(ShieldCheck, 2.1);
export const RupeeIcon = createIcon(IndianRupee, 2.1);
export const HeadsetIcon = createIcon(Headset, 2.1);
export const LinkIcon = createIcon(Link2, 2.1);
export const CalendarIcon = createIcon(CalendarDays, 2.1);
export const SeatIcon = createIcon(Armchair, 2.1);
export const SnowIcon = createIcon(Snowflake, 2.1);
export const BagIcon = createIcon(BriefcaseBusiness, 2.1);
export const LanguageIcon = createIcon(Languages, 2.1);
