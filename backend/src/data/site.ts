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
              src: "/images/nav/custom-software-dev.webp",
              alt: "An open laptop surrounded by floating code panels and language badges like PHP, CSS, and Java",
            },
          },
          {
            id: "data-ai",
            label: "Data+AI First Innovation",
            href: "#pillar-detail",
            image: {
              src: "/images/nav/data-ai-first.webp",
              alt: "A hand reaching toward a glowing digital globe made of connected data points",
            },
          },
          {
            id: "tech-staffing",
            label: "Tech Staff Augmentation",
            href: "#tech-stack",
            image: {
              src: "/images/nav/tech-staff.webp",
              alt: "Networked profile icons rising from a connected mesh, representing a distributed talent pool",
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
