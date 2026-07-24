export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    items: [
      "Java",
      "JavaScript",
      "Python",
      "SQL",
      "HTML/CSS",
      "Spring Boot",
      "Reactive Java / WebFlux",
      "Node.js",
      "React",
      "Django",
    ],
  },
  {
    title: "Systems & Infrastructure",
    items: [
      "Elasticsearch",
      "Kafka",
      "RabbitMQ",
      "Debezium CDC",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI/CD",
      "AWS",
      "Git",
    ],
  },
  {
    title: "Data & Observability",
    items: [
      "MongoDB",
      "MySQL",
      "Oracle SQL",
      "Grafana",
      "ELK Stack",
    ],
  },
];
