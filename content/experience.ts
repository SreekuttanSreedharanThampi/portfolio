import { experienceListSchema } from "@/lib/content/schema";
import type { ExperienceEntry } from "@/lib/content/types";

const experience: ExperienceEntry[] = [
  {
    company: "IT Designers Gruppe",
    title: "Software Developer (Full-time)",
    location: "Stuttgart, Germany",
    dateRange: "09/2025 - present",
    highlights: [
      "Building Go backend services for a multi-tenant, cloud-native platform (a modular monolith with independently deployed microservices) that powers a client's fleet-management application.",
      "Designed and implemented the policy-based authorization system from scratch, with fine-grained access control across tenant and user roles.",
      "RESTful APIs (OpenAPI/Swagger) with idiomatic Go; PostgreSQL via PostGraphile GraphQL, ScyllaDB, Redis; Temporal for workflow orchestration; GitOps on Kubernetes.",
      "Working directly with the client to gather and refine requirements and run sprint retrospectives and reviews, turning evolving business needs into shipped features.",
    ],
    tags: ["Go", "ScyllaDB", "GraphQL", "Temporal", "Kubernetes", "Keycloak", "PostgreSQL", "Redis"],
    bullets: [
      "Development of Go backend services for a multi-tenant, cloud-native platform (modular monolith with independently deployed microservices), used to deliver a fleet-management and vehicle-operations application for a client.",
      "Designed and implemented the policy-based authorisation system from scratch, handling fine-grained access control across tenant and user roles.",
      "Design and implementation of RESTful APIs (documented with Swagger / OpenAPI) applying idiomatic Go patterns: interfaces, explicit error handling, and context propagation.",
      "PostgreSQL data layer exposed via GraphQL using PostGraphile; audit history maintained with pgmemento; ScyllaDB as primary high-throughput datastore; Redis for caching and session management.",
      "Integration of identity and access management using Keycloak (current) and Zitadel (prior); S3-compatible object storage for the platform's media service.",
      "Use of Temporal for reliable workflow orchestration across distributed backend processes.",
      "Contribution to a React/Redux/Vite frontend feature, extending responsibility beyond backend scope when required.",
      "Operation of services on a Kubernetes cluster; participation in GitOps-based deployments via Terraform, Kargo, and Argo CD.",
      "Maintenance of CI/CD pipelines using GitHub Actions.",
      "Direct collaboration with the client throughout delivery: gathering and refining requirements, participating in sprint retrospectives and reviews, and communicating technical trade-offs to keep the build aligned with evolving business needs.",
    ],
  },
  {
    company: "Mercedes-Benz AG",
    title: "Software Developer (Working Student)",
    location: "Stuttgart, Germany",
    dateRange: "05/2025 - 07/2025",
    highlights: [
      "Extended the vehicle planning and dispatching web application built during the Master's thesis.",
      "Developed a new vehicle hub management application using Django, TypeScript and Angular.",
    ],
    tags: ["Django", "TypeScript", "Angular"],
    bullets: [
      "Further development of the vehicle planning and dispatching web application built during the Master's thesis.",
      "Development of a new vehicle hub management application using Django (Python), TypeScript, and Angular.",
    ],
  },
  {
    company: "Mercedes-Benz AG",
    title: "Software Developer (Master's Thesis)",
    location: "Stuttgart, Germany",
    dateRange: "11/2024 - 04/2025",
    highlights: [
      "Designed and built an MVP web application for vehicle fleet planning and dispatching.",
      "Modular-monolith and Clean Architecture with CQRS in the backend; .NET Core 8, Angular, PostgreSQL, Entity Framework, RabbitMQ, Docker.",
      "Produced Figma wireframes and UML diagrams; applied TDD and Clean Code throughout.",
    ],
    tags: [".NET Core 8", "Angular", "CQRS", "RabbitMQ"],
    bullets: [
      "Design and development of an MVP web application for vehicle fleet planning and dispatching.",
      "Architecture based on modular monolithic and Clean Architecture principles; CQRS pattern applied in the backend.",
      "Technology stack: .NET Core 8, Angular, PostgreSQL, Entity Framework, RabbitMQ, Docker.",
      "Creation of UI wireframes (Figma) and UML diagrams; application of TDD and Clean Code practices throughout.",
    ],
  },
  {
    company: "Mercedes-Benz AG",
    title: "Software Developer (Internship)",
    location: "Stuttgart, Germany",
    dateRange: "05/2024 - 10/2024",
    highlights: [
      "Automated Jira issue creation and management with Python and REST APIs.",
      "Built a real-time fleet calendar in Python, integrated into Confluence via its REST API.",
      "Scheduled recurring Python scripts with cron jobs, triggering them at defined times so routine automation ran hands-off.",
    ],
    tags: ["Python", "REST", "Cron", "Confluence"],
    bullets: [
      "Automation of Jira issue creation and management using Python and REST APIs.",
      "Development of a real-time fleet calendar in Python, integrated into Confluence via the Confluence REST API.",
    ],
  },
  {
    company: "Deutsche Automobil Treuhand GmbH (DAT)",
    title: "Software Developer (Working Student)",
    location: "Germany",
    dateRange: "03/2023 - 04/2024",
    highlights: [
      "Built a test-client application to automate SOAP API testing using .NET Core 6, C# and WPF.",
      "Designed an XML comparison tool with .NET Core 6; managed CI/CD pipelines with Jenkins.",
    ],
    tags: [".NET Core 6", "C#", "WPF", "Jenkins"],
    bullets: [
      "Development of a test-client application to automate SOAP API testing using .NET Core 6, C#, and WPF.",
      "Design and development of an XML comparison tool with .NET Core 6.",
      "Management of CI/CD pipelines with Jenkins; version control with Git.",
    ],
  },
  {
    company: "Infosys Private Ltd",
    title: "Software Developer",
    location: "India",
    dateRange: "11/2019 - 08/2022",
    highlights: [
      "Built an e-commerce web app for a global CPQ sales configurator (elevator manufacturer) with C#, ASP.NET MVC, Angular, WCF and MS SQL Server.",
      "Owned 50%+ of the RESTful API surface and integrated it with the Angular frontend.",
      "Designed the database including stored procedures; delivered in agile SCRUM sprints.",
    ],
    tags: ["C#", "ASP.NET MVC", "Angular", "WCF", "MS SQL"],
    bullets: [
      "Design and development of an e-commerce web application for a global CPQ sales configurator (elevator manufacturer) using C#, ASP.NET MVC, Angular, WCF, and MS SQL Server.",
      "Backend API development, responsible for 50%+ of the RESTful API surface; integration with Angular frontend.",
      "Database design, including stored procedures, for efficient data access.",
      "Delivery within agile SCRUM sprints using GitHub CI/CD and Azure Boards.",
    ],
  },
];

export const experienceList = experienceListSchema.parse(experience);
