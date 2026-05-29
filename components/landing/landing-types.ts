import type { ReactNode } from "react";

export type HeroBadgeTone = "orange" | "blue" | "slate";

export type ComparisonIconName =
  | "shield"
  | "rupee"
  | "headset"
  | "sparkle"
  | "link"
  | "calendar"
  | "car";

export type ServiceTheme =
  | "outstation"
  | "airport"
  | "wedding"
  | "local"
  | "roundtrip"
  | "tempo";

export type VehicleKind = "hatchback" | "sedan" | "suv" | "van";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ComparisonItem = {
  title: string;
  description: string;
  icon: ComparisonIconName;
};

export type ServiceCardItem = {
  title: string;
  description: string;
  theme: ServiceTheme;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  badge?: string;
  cta?: string;
  overlayVariant?: "large" | "small";
  contentClassName?: string;
  className?: string;
};

export type VehicleFeature = {
  label: string;
  icon: "seat" | "snow" | "bag" | "shield";
};

export type VehicleItem = {
  kind: VehicleKind;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: VehicleFeature[];
};

export type FloatingBadge = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className: string;
};
