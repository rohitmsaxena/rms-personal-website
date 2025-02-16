import { WorkExperience } from "../types/WorkExperience";

export const WORK_EXPERIENCE_LIST: WorkExperience[] = [
  {
    title: "AWS Cloud Architect",
    company: "XeroShoes",
    location: "Remote",
    period: "Oct. 2024 - Jan. 2025",
    icon: "XeroShoes.png",
    details: [
      "Developed a migration strategy to lift-and-shift a WordPress application from bare metal to AWS.",
      "Designed and implemented the company’s AWS cloud architecture using Terraform.",
      "Built and configured public/private VPC subnets for three environment layers, interconnected via a centralized network OU with a Transit Gateway and Internet Gateway.",
      "Conducted CIDR range allocation, optimizing VPC address space planning and maintaining efficient network segmentation.",
    ],
  },
  {
    title: "Technical Lead / Sr. Full Stack Engineer",
    company: "Revacomm",
    location: "Remote",
    period: "Feb. 2024 - Oct. 2024",
    icon: "Revacomm.png",
    details: [
      "Developed encryption functionality for digital signatures in Java Spring Boot application, enabling pilots to securely sign classified mission paperwork.",
      "Fully digitized a previously paper-based mission scheduling process, reducing planning time by 50% and enabling remote operational planning with React/Java application.",
      "Implemented codegen with RTK Query with custom slices, improving development time by 10%.",
      "Built a React Native iPadOS app to allow pilots offline post-mission note-taking, cutting post-mission documentation time by 50%.",
      "Led and mentored 5 developers to help them grow their technical skills and deliver functionality.",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Target",
    location: "Remote",
    period: "Aug. 2022 - Feb. 2024",
    icon: "Target.png",
    details: [
      "Led project to adapt Camunda Workflow Engine to run in a non-native Java/Kotlin Micronaut environment to deploy within Target’s architecture.",
      "Led and mentored 2 junior developers.",
      "Created installation workflow to onboard IoT devices and install them nationwide; achieved 100% automation with multiple failover strategies. Initial rollout of 100 Target stores had 98% hand-off onboarding process.",
      "Developed documentation and common design patterns in Camunda to handle logging, error handling, and Grafana dashboard monitoring to be used on all workflows.",
      "Conducted training of dozens of developers on how to develop new Camunda workflows in Kotlin.",
      "Enhanced stakeholder communication by building custom dashboards on top of complex Postgres queries to measure efficiency and time to completion of workflows.",
    ],
  },
  {
    title: "Frontend Architect / Full Stack Lead Developer",
    company: "iHeartMedia",
    location: "San Antonio, TX",
    period: "May 2019 - Aug. 2022",
    icon: "iHeartMedia.png",
    details: [
      "Spearheaded company initiative to transition Angular frontend projects into micro frontends, including company-wide training sessions, reducing development time by 15%.",
      "Presented a 'Brown Bag' session highlighting the features of micro frontends and proposed a company-wide implementation path.",
      "Created Node.js mock APIs to improve micro frontend testing.",
      "Created and managed Angular/Java & NodeJS sales platform that was used for 95% of all ads sold, decreasing vendor costs and increasing digital ads revenue by 10% in a three-month period.",
      "Developed AWS Kafka streams to process ad data in AWS Data Lakes.",
      "Increased ad revenue by designing a new feature that allowed iHeartMedia to sell political ads under new national legal regulations, increasing political ad spot profitability.",
      "Led a team of 8-10 offshore consultants in implementing functionality to see digital ads in an Angular/Java sales platform.",
    ],
  },
  {
    title: "Developer II",
    company: "HEB",
    location: "San Antonio, TX",
    period: "May 2018 - May 2019",
    icon: "HEB.png",
    details: [
      "Architected & developed an AngularJS/Java Spring Boot application for HEB pharmacists to provide compounding drugs to customers with long-term illnesses, resulting in a 12% increase in profitability.",
      "Used Babel.js to transpile ES10 syntax to ES5 to maintain compatibility with legacy browsers.",
      "Operated as Scrum Master for the team’s first Agile project.",
    ],
  },
];
