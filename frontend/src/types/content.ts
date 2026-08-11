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

/** Pure in-page navigation, not a content switcher — clicking a tab
 *  scrolls to a section; it never changes what's rendered. */
export interface SolutionsTab {
  id: string;
  label: string;
  /** DOM id of the section this tab scrolls to. */
  scrollTargetId: string;
}

export interface SolutionsContent {
  tabs: SolutionsTab[];
}

export interface PillarDetailContent {
  index: string;
  heading: string;
  description: string;
  cta: string;
  cards: PillarCard[];
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
