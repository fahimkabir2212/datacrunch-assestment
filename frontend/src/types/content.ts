export interface TrustedByLogo {
  id: string;
  name: string;
  src: string;
}

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

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterContent {
  copyright: HighlightedTextSegment[];
  legalLinks: FooterLink[];
  socialLinks: FooterLink[];
  wordmark: { src: string; alt: string };
}

export interface HomeContent {
  hero: HeroContent;
  trustedBy: TrustedByContent;
  about: AboutContent;
  solutions: SolutionsContent;
  pillarDetail: PillarDetailContent;
  productShowcase: ProductShowcaseContent;
  techStack: TechStackContent;
}

export type SectionKey = keyof HomeContent;

/** Chrome that wraps every route, as opposed to the content of any one page. */
export interface SiteContent {
  footer: FooterContent;
}

export type SiteSectionKey = keyof SiteContent;
