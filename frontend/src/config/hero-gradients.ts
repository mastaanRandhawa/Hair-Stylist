export type PageHeroKey = "about" | "services" | "gallery" | "contact";

export interface HeroGradient {
  /** Wave accent color */
  accentRgb: readonly [number, number, number];
  /** Top-left glow in overlay */
  from: string;
  /** Bottom depth in overlay */
  to: string;
  /** Charcoal wash tint (optional mood) */
  wash?: string;
}

/** Home — brand gold on charcoal */
export const homeHeroGradient: HeroGradient = {
  accentRgb: [254, 237, 129],
  from: "#feed81",
  to: "#1f1f1f",
  wash: "#1f1f1f",
};

/**
 * Compact page heroes — clearly distinct palettes:
 * About: gold · Services: copper rose · Gallery: cool silver · Contact: sage teal
 */
export const pageHeroGradients: Record<PageHeroKey, HeroGradient> = {
  about: {
    accentRgb: [254, 237, 129],
    from: "#feed81",
    to: "#121212",
    wash: "#1a1810",
  },
  services: {
    accentRgb: [212, 132, 98],
    from: "#d48462",
    to: "#1c1210",
    wash: "#241816",
  },
  gallery: {
    accentRgb: [168, 178, 210],
    from: "#a8b2d2",
    to: "#08080c",
    wash: "#101018",
  },
  contact: {
    accentRgb: [118, 188, 158],
    from: "#76bc9e",
    to: "#101816",
    wash: "#0f1814",
  },
};
