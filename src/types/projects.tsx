import { Languages } from "./languages";
import { Frameworks } from "./frameworks";

export interface Project {
  id: number; // Unique identifier for sorting/mapping
  name: string; // Project name
  description: string; // Short description of the project
  github: string[]; // Link to GitHub repository
  languages?: Languages[];
  frameworks?: Frameworks[];
  liveDemo?: string; // Optional link to a live demo
  isTemplate?: boolean;
}
