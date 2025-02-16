export interface Project {
  id: number; // Unique identifier for sorting/mapping
  name: string; // Project name
  description: string; // Short description of the project
  github: string[]; // Link to GitHub repository
  languages?: string[];
  frameworks?: string[];
  liveDemo?: string; // Optional link to a live demo
  isTemplate?: boolean;
}
