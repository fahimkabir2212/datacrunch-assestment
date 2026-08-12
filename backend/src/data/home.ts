import type { HomeContent } from "../types/content.js";

export const homeContent: HomeContent = {
  hero: {
    headline: [
      { text: "Building" },
      { text: "Intelligence to Power", highlight: true },
      { text: "Scalable Innovation" },
    ],
    description:
      "MetaTech integrates custom software engineering, advanced data and AI systems, and strategic staff augmentation to power scalable, high impact digital transformation.",
    primaryCta: "Book for Demo",
    banner: {
      image: {
        src: "/images/home/hero.webp",
        alt: "A diverse team smiling together, encircled by a glowing network of connected data points",
      },
    },
    video: {
      provider: "youtube",
      id: "jX4dLxiso6A",
      title: "MetaTech product demo",
    },
  },

  trustedBy: {
    heading: [
      { text: "Trusted by", highlight: true },
      { text: "product teams and enterprise" },
      { text: "innovators.", highlight: true },
    ],
    logos: [
      {
        id: "databricks",
        name: "Databricks",
        src: "/images/home/companies/databricks.png",
      },
      {
        id: "google-cloud",
        name: "Google Cloud",
        src: "/images/home/companies/google-cloud.png",
      },
      {
        id: "alteryx-1",
        name: "Alteryx",
        src: "/images/home/companies/alteryx.png",
      },
      {
        id: "ui-path-1",
        name: "UiPath",
        src: "/images/home/companies/ui-path.png",
      },
      { id: "figma", name: "Figma", src: "/images/home/companies/figma.png" },
      { id: "aws", name: "AWS", src: "/images/home/companies/aws.png" },
      {
        id: "alteryx-2",
        name: "Alteryx",
        src: "/images/home/companies/alteryx.png",
      },
      {
        id: "ui-path-2",
        name: "UiPath",
        src: "/images/home/companies/ui-path.png",
      },
    ],
  },

  about: {
    eyebrow: "We Are",
    heading: [
      {
        text: "Engineering business solutions through three strategic pillars",
        bold: true,
      },
      {
        text: "AI powered delivery combining intelligent software engineering, data driven insight, and elite talent to accelerate scale, quality, and competitive advantage.",
      },
    ],
  },

  solutions: {
    tabs: [
      { id: "data-ai", label: "Data + AI", scrollTargetId: "pillar-detail" },
      {
        id: "custom-software",
        label: "Custom Software",
        scrollTargetId: "product-showcase",
      },
      {
        id: "tech-staffing",
        label: "Tech Staffing",
        scrollTargetId: "tech-stack",
      },
    ],
  },

  pillarDetail: {
    index: "01",
    heading: "Data + AI Settings Innovation",
    description:
      "Our Data and AI services combine engineering, analytics, and applied AI to help organizations understand data, predict outcomes, and automate decisions. From trusted analytics to production grade AI systems, we deliver intelligence that works in the real world.",
    cta: "Book a consultation",
    cards: [
      {
        title: "Data Integrity First",
        description:
          "AI outputs are only as reliable as the data feeding them. We design, validate, and strengthen your data foundation from the ground up. Garbage in, garbage out is not a risk we take with your business.",
      },
      {
        title: "Workflows Before Automation",
        description:
          "Before we build anything, we map your business workflows end to end by surveying the ambiguity. We understand the decisions being made, the people making them, and the systems involved. That clarity determines how and where automation creates real leverage, not just activity.",
      },
      {
        title: "Governance With Same Standard",
        description:
          "We implement data governance frameworks that carry the same accountability as human oversight. Your agents operate within defined boundaries. Auditability, control, and compliance are built in, not added on.",
      },
    ],
  },

  productShowcase: {
    logo: {
      src: "/images/home/products/amlcredible-logo.png",
      alt: "AmlCredible",
    },
    heading: "An AI-powered credibility checking platform",
    description:
      "that helps users verify claims, analyze sources, and make informed decisions with Quick Check, Deep Check, and Image Check features.",
    cta: "Explore more",
    image: {
      src: "/images/home/products/amlcredible-ui.webp",
      alt: "The AmlCredible product interface shown on a laptop",
    },
  },

  techStack: {
    eyebrow: "Tech Stacks",
    heading: "Built With Modern Technologies",
    description:
      "We use modern, reliable technologies to design, build, and scale high-performance software systems. Our team works with proven tools to deliver secure, scalable, production-ready solutions.",
    items: [
      { id: "react", name: "React", src: "/images/home/tech/react.png" },
      { id: "next", name: "Next.js", src: "/images/home/tech/next.png" },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
        src: "/images/home/tech/tailwindcss.png",
      },
      {
        id: "typescript",
        name: "TypeScript",
        src: "/images/home/tech/typescript.png",
      },
      { id: "angular", name: "Angular", src: "/images/home/tech/angular.png" },
      { id: "vue", name: "Vue.js", src: "/images/home/tech/vue.png" },
      { id: "go", name: "Go", src: "/images/home/tech/go.png" },
      { id: "python", name: "Python", src: "/images/home/tech/python.png" },
      { id: "node", name: "Node.js", src: "/images/home/tech/node.png" },
      { id: "dotnet", name: ".NET", src: "/images/home/tech/dotnet.png" },
      { id: "ruby", name: "Ruby", src: "/images/home/tech/ruby.png" },
      { id: "php", name: "PHP", src: "/images/home/tech/php.png" },
      { id: "django", name: "Django", src: "/images/home/tech/django.png" },
      { id: "laravel", name: "Laravel", src: "/images/home/tech/laravel.png" },
      { id: "flutter", name: "Flutter", src: "/images/home/tech/flutter.png" },
      { id: "mysql", name: "MySQL", src: "/images/home/tech/my-sql.png" },
      { id: "mongodb", name: "MongoDB", src: "/images/home/tech/mongodb.png" },
      { id: "html5", name: "HTML5", src: "/images/home/tech/html5.png" },
    ],
  },
};
