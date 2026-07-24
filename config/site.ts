export const site = {
  name: "Akashdeep Singh Jassal",
  shortName: "Akashdeep",
  title: "Akashdeep Singh Jassal — Distributed Software Engineer",
  role: "Distributed Software Engineer",
  location: "Dresden, Germany",
  email: "akashdeepjassal@gmail.com",
  phone: "+49 15510 482925",
  website: "https://akashh.dev",
  tagline: "Systems across nodes. Outcomes that stay coherent.",
  intro:
    "Distributed software engineer and Master’s student at TU Dresden. I design microservices, event-driven pipelines, and real-time backends that stay reliable under load.",
  about: [
    "I build backend systems where services, queues, and data stores have to agree under pressure. My work spans REST and reactive APIs, DBMS, CDC, ETL pipelines, search and indexes, containers and CI/CD",
    "Lately I’ve been exploring how intelligent systems can take on multi-step work: planning tasks, calling the right tools, and stitching results together so people get a clear outcome instead of a pile of half-finished steps.",
    "I’m currently deepening that craft through a Master’s in Distributed Systems Engineering at Technische Universität Dresden.",
  ],
  resumePath: "/Resume_akash.pdf",
  profileImage: "/akash_profile.jpeg",
  aboutImage: "/akash_cafe_pic.jpeg",
  themeColor: "#1ca7d0",
} as const;

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AkashDeepSinghJassal",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akashdeep-singh-32a8a21b5/",
  },
] as const;
