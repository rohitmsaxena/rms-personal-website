import ProfileSection from "../../components/ProfileSection";
import { Project } from "../../types/projects";
import { useEffect } from "react";
import GithubRepoCard from "../../components/GithubRepoCard";
import projects from "../../data/projects.json";
import { Frameworks, Languages } from "../../types";

declare global {
  interface Window {
    githubCard?: {
      render: () => void;
    };
  }
}

export default function Projects() {
  const projectsData: Project[] = projects.map((project) => ({
    ...project,
    languages: project.languages as Languages[],
    frameworks: project.frameworks as Frameworks[],
  }));

  useEffect(() => {
    // Ensure GitHub Embed script runs after React renders components
    if (window.githubCard && typeof window.githubCard.render === "function") {
      window.githubCard.render();
    }
  }, []);

  return (
    <ProfileSection title={"Projects"} sectionId={"projects"}>
      <div className="join join-vertical w-full">
        {projectsData.map((project, index) => (
          <div key={index} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="project-accordion" />
            <div className="collapse-title text-lg font-medium">
              {project.name}
            </div>
            <div className="collapse-content flex item-start gap-4">
              <div className="basis-1/3">
                {project.github.map((githubUrl) => (
                  <GithubRepoCard owner={"rohitmsaxena"} repo={githubUrl} />
                ))}
              </div>
              <div className="basis-2/3 prose">
                <p>{project.description}</p>
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
