import type { SolutionsContent } from "../../types/content";

export const solutionsContent: SolutionsContent = {
  tabs: [
    {
      id: "data-ai",
      label: "Data + AI",
      index: "01",
      heading: "Data + AI Settings Innovation",
      description:
        "Our Data and AI services combine engineering, analytics, and applied AI to help organizations understand data, predict outcomes, and automate decisions. From trusted analytics to production grade AI systems, we deliver intelligence that works in the real world.",
      cta: "Book a consultation",
      cards: [
        {
          title: "Data Integrity First",
          description:
            "AI outputs are only as reliable as the data feeding them. We design, validate, and strengthen your data foundation from the ground up. Garbage in, garbage out is a risk we take with your business.",
        },
        {
          title: "Workflows Before Automation",
          description:
            "We map and refine your workflows before automating them — automation only accelerates a process that already works, not one that's broken.",
        },
        {
          title: "Governance With Same Standard",
          description:
            "Every AI system we ship is held to the same governance, auditability, and compliance standards as the rest of your production infrastructure.",
        },
      ],
    },
    {
      id: "custom-software",
      label: "Custom Software",
      scrollTargetId: "product-showcase",
      index: "02",
      heading: "Custom Software Built To Scale",
      description:
        "We design and engineer bespoke software systems tailored to your business logic — from architecture through deployment — built for performance, security, and long-term maintainability.",
      cta: "Book a consultation",
      cards: [
        {
          title: "Architecture First",
          description:
            "Every system starts with a scalable, well-documented architecture, so the codebase stays maintainable as your team and product grow.",
        },
        {
          title: "Security By Design",
          description:
            "Security reviews and best practices are built into every stage of development, not bolted on at the end.",
        },
        {
          title: "Built For Longevity",
          description:
            "We write code that outlives the people who wrote it — clear, tested, and easy for future teams to extend.",
        },
      ],
    },
    {
      id: "tech-staffing",
      label: "Tech Staffing",
      scrollTargetId: "tech-stack",
      index: "03",
      heading: "Elite Talent, On Demand",
      description:
        "We augment your team with vetted engineers, data specialists, and product talent — embedded quickly, aligned to your standards, and ready to ship.",
      cta: "Book a consultation",
      cards: [
        {
          title: "Vetted Talent Only",
          description:
            "Every engineer we place has been technically screened and reference-checked before they ever join your team.",
        },
        {
          title: "Fast Ramp-Up",
          description:
            "Our staff augmentation model is built for speed — new team members are productive within days, not months.",
        },
        {
          title: "Aligned To Your Standards",
          description:
            "We match talent to your existing workflows, tools, and culture, so integration is seamless from day one.",
        },
      ],
    },
  ],
};
