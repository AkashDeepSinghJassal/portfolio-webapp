export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  url?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Tekscend Photomask",
    role: "Werkstudent Software Engineer",
    location: "Dresden, DE",
    period: "Mar 2025 — Present",
    url: "https://www.photomask.com/en/",
    highlights: [
      "Developed a rule-driven validation service connecting the ActiveMQ broker to resolve and report litho format errors preemptively before heavy planning and fracturing workloads run.",
      "Conducted performance research to optimize Oracle DBMS queries using Oracle AWR profiling, refining indexes and queries and reporting 15-80% latency reduction.",
      "Automated secure application delivery via GitLab CI/CD, ensuring stability across environments.",
    ],
  },
  {
    company: "Beltech AI",
    role: "Software Development Engineer",
    location: "Bengaluru, IN",
    period: "Jul 2022 — May 2024",
    url: "https://www.beltech.ai/",
    highlights: [
      "Designed the REST microservices architecture and API suite for Challan AI with Spring Boot—violation generation, junction monitoring, WebSocket signal control, and real-time notifications via Spring AMQP.",
      "Cut processing time by 10× with Reactive Spring WebFlux, handling jobs efficiently with fewer consumers.",
      "Synced data to Elasticsearch and OLAP stores with Debezium CDC and Celery/RabbitMQ consumers for balanced load and real-time operations.",
      "Used Elasticsearch for geo-spatial and multi-filter queries, reducing response times from 2s to 0.02s.",
      "Cut incident resolution time by 30% with centralized logging and monitoring via the ELK stack.",
      "Increased deployment frequency by 50% by designing and automating CI/CD pipelines with Jenkins and Docker.",
    ],
  },
  {
    company: "Quikr",
    role: "Software Developer Engineer Intern",
    location: "Bengaluru, IN",
    period: "Mar 2021 — Jun 2022",
    url: "https://quikr.com",
    highlights: [
      "Deployed Quikr Jobs on the Play Store (1M+ downloads)—app signing keys, backend signature registration, authentication, and analytics.",
      "Integrated Quikr Jobs with the National Career Service (NCS) portal for real-time migration and sync of job status and applications.",
    ],
  },
];
