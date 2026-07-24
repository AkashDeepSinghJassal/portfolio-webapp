export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  image?: string;
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
  badge?: string;
};

export const projects: Project[] = [
  {
    name: "Unmapped",
    description:
      "Helps young people in LMICs turn informal work and experience into a clear skills passport, then matches them to real local opportunities using labour-market data. Also gives policymakers a country dashboard of skills gaps and economic signals.",
    image: "/projects/unmapped.jpg",
    tech: [
      "Next.js",
      "FastAPI",
      "LangGraph",
      "Gemini",
      "ChromaDB",
      "DuckDB",
      "ESCO",
    ],
    links: [
      {
        label: "Live",
        href: "https://unmapped.akashh.dev/",
      },
      {
        label: "GitHub",
        href: "https://github.com/AkashDeepSinghJassal/unmapped",
      },
    ],
    featured: true,
    badge: "3rd Place - Hacknation Global AI Hackathon",
  },
  {
    name: "FirstSignal",
    description:
      "Evidence-first VC operating system for founder discovery and diligence. Multi-source signals (GitHub, web, research) feed a cited evidence model instead of black-box scores. Independent Founder / Market / Idea assessments, value-of-information diligence prompts, and grounded investment memos with explicit abstention when evidence is thin.",
    image: "/projects/firstsignal.jpg",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "LangGraph", "MLflow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AkashDeepSinghJassal/first-signal",
      },
      {
        label: "Live",
        href: "https://firstsignal.up.railway.app/",
      },
    ],
    featured: true,
    badge: "Maschmeyer Group - The VC Brain",
  },
  {
    name: "Medi Find",
    description:
      "Map-first health facility finder for a region with natural-language and voice search, specialty/region filters, and AI-assisted answers. Geocodes results onto an interactive map so people can locate care options quickly.",
    image: "/projects/medifind.jpg",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AkashDeepSinghJassal/ghana-health-finder",
      },
    ],
    featured: true,
  },
  {
    name: "AI Challan Backend",
    description:
      "RESTful services and WebSockets for Challan AI: violation generation, junction monitoring, signal control, and real-time notifications on detection.",
    image: "/AI_Challan.png",
    tech: ["Spring Boot", "MySQL", "Elasticsearch", "AMQP", "WebSockets"],
    links: [
      {
        label: "Product",
        href: "https://www.beltech.ai/#/product",
      },
    ],
    featured: true,
  },
  {
    name: "Tourism AI",
    description:
      "Suite of APIs for QR permit issuance, individual and group ticket purchase, plus identity-card OCR and face recognition for destination check-in.",
    image: "/Tourism_ai_img.png",
    tech: ["Java", "Spring Boot", "MySQL", "MongoDB"],
    links: [
      {
        label: "Product",
        href: "https://www.beltech.ai/#/product#tourismplatform",
      },
    ],
    featured: true,
  },
  {
    name: "Hospital Management System",
    description:
      "Streamlined hospital data management and workflow tooling.",
    tech: ["Java", "MySQL", "FXML"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AkashDeepSinghJassal/HospitalMS",
      },
    ],
  },
];
