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
