import { Project } from "../types/Project";

export const PROJECT_LIST: Project[] = [
  {
    id: 6,
    name: "React Flow Project",
    description:
      "A project to use React Flow to build SysMLv2 interconnection diagram. ",
    languages: ["Typescript / Javascript"],
    frameworks: ["React", "React Flow", "TailwindCSS", "DaisyUI"],
    github: ["react-flow-project"],
    liveDemo: "https://rohitmsaxena.github.io/react-flow-project/",
  },
  {
    id: 1,
    name: "react-vite-tailwind-daisyui-starter",
    description:
      "A template project for new react project with tailwind 4.0 and daisy5-beta preinstalled",
    languages: ["Typescript / Javascript"],
    frameworks: ["React", "Tailwind", "DaisyUI"],
    github: ["react-vite-tailwind-daisyui-starter"],
    isTemplate: true,
  },
  {
    id: 2,
    name: "Sisyphus",
    description:
      "A mac app that creates a clipboard history that can be pasted from.",
    languages: ["Swift"],
    frameworks: ["SwiftUI"],
    github: ["Sisyphus"],
  },
  {
    id: 3,
    name: "AICocktail",
    description: "A chatgpt powered cocktail suggestion",
    languages: ["TypeScript"],
    frameworks: ["React", "Open AI API"],
    github: ["Sisyphus"],
  },
  {
    id: 4,
    name: "Micro Frontend Projects",
    description:
      "An example of how to create a microfrontend using Web Components in Angular. Consists of a parent repo and a child repo. The child repo is deployed into the parent.",
    languages: ["v.TypeScript"],
    frameworks: ["Angular"],
    github: ["microfrontend-parent-demo", "microfrontend-child-demo"],
  },
  {
    id: 5,
    name: "DealScraper",
    description:
      "A screen scraper deployed to google cloud to scrape deals from slickdeals.net using a serverless function and store in a firebase db.",
    languages: ["JavaScript", "Firebase"],
    frameworks: ["Serverless", "GCP"],
    github: ["Sisyphus"],
  },
];
