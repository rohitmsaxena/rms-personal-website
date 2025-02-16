export enum SkillType {
  "Frontend",
  "Backend",
  "Cloud",
  "DevOps",
}

export interface Skill {
  language: string;
  frameworks: string[];
  icon: string;
  type: SkillType;
}
