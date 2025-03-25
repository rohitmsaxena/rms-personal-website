import { Skill, SkillType } from "../types/Skill";

interface TechCategory {
  name: string;
  color: string;
  technologies: string[];
}

export const SKILLS: Skill[] = [
  {
    language: "React",
    frameworks: [
      "Redux",
      "RTK Query",
      "MaterialUI",
      "Tailwind",
      "DaisyUI",
      "Mocha",
      "Jasmine",
      "Selenium",
      "Mocha",
    ],
    icon: "https://logotyp.us/file/react.svg",
    type: SkillType.Frontend,
  },
  {
    language: "Angular",
    frameworks: [
      "Ag-grid",
      "Bootstrap",
      "Angular Material",
      "Storybook.js",
      "Karma",
      "Jest",
      "Microfrontends",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    type: SkillType.Frontend,
  },
  {
    language: "Java",
    frameworks: [
      "Spring Boot",
      "Hibernate",
      "JPA",
      "MyBatis",
      "Spring Testing",
      "JUnit",
      "Selenium",
      "Cucumber",
      "Mockito",
      "Micronaut",
    ],
    type: SkillType.Backend,
    icon: "",
  },
  {
    language: "Node.js",
    frameworks: ["Axios", "Express", "Lodash"],
    type: SkillType.Backend,
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=512",
  },
  {
    language: "AWS",
    frameworks: [
      "CloudFormation",
      "VPC/Subnetting",
      "Serverless",
      "Aurora",
      "EC2",
      "Dynamodb",
      "Terraform",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    type: SkillType.Cloud,
  },
  {
    language: "GCP",
    frameworks: ["Cloud Run", "Firebase"],
    icon: "",
    type: SkillType.Cloud,
  },
  {
    language: "DevOps",
    frameworks: ["Github Actions", "Jenkins", "Grafana"],
    icon: "",
    type: SkillType.DevOps,
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Frontend",
    color: "bg-amber-500",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "RTK Query",
      "Next.js",
      "MaterialUI",
      "CSS/SCSS",
      "React Native",
      "Angular",
      "Cypress",
      "Jest",
      "Selenium",
      "Jasmine",
      "Mocha",
      "SwiftUI",
      "TailwindCSS",
      "DaisyUI",
    ],
  },
  {
    name: "Backend",
    color: "bg-blue-500",
    technologies: [
      "Kotlin",
      "Java",
      "Spring Boot",
      "Micronaut",
      "Camunda",
      "Serverless",
      "Kafka",
      "Node.js",
      "AWS SNS",
      "AWS SES",
    ],
  },
  {
    name: "Database",
    color: "bg-green-500",
    technologies: [
      "PostgreSQL",
      "AWS RDS",
      "MongoDB",
      "DynamoDB",
      "ElastiCache",
    ],
  },
  {
    name: "Architecture",
    color: "bg-purple-500",
    technologies: ["Microservices", "Micro Frontends", "Serverless"],
  },
  {
    name: "DevOps",
    color: "bg-red-500",
    technologies: [
      "Terraform",
      "AWS CloudFormation",
      "Jenkins",
      "Kubernetes",
      "GitHub Actions",
      "Grafana",
      "CI/CD",
    ],
  },
  {
    name: "Cloud",
    color: "bg-cyan-500",
    technologies: ["AWS", "GCP", "Firebase"],
  },
];

export const RADAR_DATA = [
  { subject: "Frontend", A: 95, fullMark: 100 },
  { subject: "Backend", A: 90, fullMark: 100 },
  { subject: "Cloud", A: 85, fullMark: 100 },
  { subject: "DevOps", A: 80, fullMark: 100 },
  { subject: "Architecture", A: 85, fullMark: 100 },
  { subject: "Database", A: 80, fullMark: 100 },
];
