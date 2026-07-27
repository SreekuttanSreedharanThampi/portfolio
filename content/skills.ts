export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Go", "C# / .NET Core", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "REST APIs",
      "GraphQL",
      "Temporal",
      "RabbitMQ",
      "CQRS",
      "Clean Architecture",
      "Microservices",
      "OpenAPI",
    ],
  },
  {
    label: "Databases",
    items: ["ScyllaDB", "PostgreSQL", "pgmemento", "Redis", "MS SQL Server"],
  },
  {
    label: "Auth & Storage",
    items: ["Keycloak", "Zitadel", "Policy-based Authz", "S3 Storage"],
  },
  {
    label: "Frontend",
    items: ["React", "Redux", "Vite", "Angular", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Infrastructure",
    items: ["Kubernetes", "Terraform", "Argo CD", "Kargo", "Docker", "GitHub Actions", "Jenkins"],
  },
  {
    label: "Tools",
    items: ["Git", "YouTrack", "Jira", "Confluence", "Figma", "Postman", "Linux", "Azure Boards"],
  },
  {
    label: "AI-Assisted Dev",
    items: ["Claude", "GitHub Copilot", "Custom skills / prompts"],
  },
];
