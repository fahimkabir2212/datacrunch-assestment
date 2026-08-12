import type { SiteContent } from "../types/content.js";

export const siteContent: SiteContent = {
  header: {
    logo: { src: "/logo.svg", alt: "MetaTech" },
    items: [
      {
        id: "solutions",
        label: "Solutions",
        href: "#pillar-detail",
        menu: [
          {
            id: "custom-software",
            label: "Custom Software Development",
            href: "#product-showcase",
            image: {
              src: "/images/home/products/amlcredible-ui.webp",
              alt: "A laptop displaying a custom software dashboard",
            },
          },
          {
            id: "data-ai",
            label: "Data+AI First Innovation",
            href: "#pillar-detail",
            image: {
              src: "/images/home/hero.webp",
              alt: "A network of connected data points spanning a world map",
            },
          },
          {
            id: "tech-staffing",
            label: "Tech Staff Augmentation",
            href: "#tech-stack",
            image: {
              src: "/images/home/hero.webp",
              alt: "Engineers connected across a distributed network",
            },
          },
        ],
      },
      { id: "showcase", label: "Showcase", href: "#product-showcase" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    cta: { label: "Book a meeting", href: "#contact" },
  },

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
