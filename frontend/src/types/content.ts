export interface TrustedByLogo {
  id: string;
  name: string;
  src: string;
}

/** One run of text in a heading — plain, picked out with the brand color,
 *  bold, or both. `text` is always the field to check: empty/missing
 *  means "skip this segment". */
export interface HighlightedTextSegment {
  text: string;
  highlight?: boolean;
  bold?: boolean;
}

export interface AboutContent {
  eyebrow: string;
  heading: HighlightedTextSegment[];
}

export interface TrustedByContent {
  heading: HighlightedTextSegment[];
  logos: TrustedByLogo[];
}

export interface PillarCard {
  title: string;
  description: string;
}

export interface SolutionsTab {
  id: string;
  label: string;
  index: string;
  heading: string;
  description: string;
  cta: string;
  cards: PillarCard[];
  /** DOM id of the section this tab should scroll to, if any — e.g.
   *  "Custom Software" jumps to ProductShowcase, "Tech Staffing" jumps
   *  to TechStack. Omitted for tabs whose content sits right below the
   *  nav already (Data + AI). */
  scrollTargetId?: string;
}

export interface SolutionsContent {
  tabs: SolutionsTab[];
}

export interface ProductShowcaseContent {
  logo: { src: string; alt: string };
  heading: string;
  description: string;
  cta: string;
  image: { src: string; alt: string };
}

export interface TechStackItem {
  id: string;
  name: string;
  src: string;
}

export interface TechStackContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: TechStackItem[];
}

export interface HeroContent {
  headline: HighlightedTextSegment[];
  description: string;
  primaryCta: string;
  banner: {
    image: {
      src: string;
      alt: string;
    };
  };
}
