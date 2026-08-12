import type { SiteContent } from "../types/content.js";

export const siteContent: SiteContent = {
  footer: {
    copyright: [
      { text: "@2022-2026" },
      { text: "MetaTech LLC", highlight: true },
      { text: "// All Rights Reserved" },
    ],
    legalLinks: [
      { id: "terms", label: "Terms of Use", href: "/terms" },
      { id: "privacy", label: "Privacy Policy", href: "/privacy" },
    ],
    socialLinks: [
      { id: "facebook", label: "Facebook", href: "https://facebook.com" },
      { id: "linkedin", label: "Linkedin", href: "https://linkedin.com" },
      { id: "instagram", label: "Instagram", href: "https://instagram.com" },
      { id: "youtube", label: "Youtube", href: "https://youtube.com" },
    ],
    wordmark: { src: "/logo.svg", alt: "MetaTech" },
  },
};
