export enum ExperienceType {
  "Frontend",
  "Backend",
  "Cloud",
  "DevOps",
}

export interface Experience {
  language: string;
  frameworks: string[];
  icon: string;
  type: ExperienceType;
}
