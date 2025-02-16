import ProfileSection from "../../components/ProfileSection";
import { Project } from "../../types/Project";
import { useEffect } from "react";
import GithubRepoCard from "../../components/GithubRepoCard";
import { PROJECT_LIST } from "../../data/ProjectList";

declare global {
  interface Window {
    githubCard?: {
      render: () => void;
    };
  }
}

export default function Projects() {
  const projectsData: Project[] = PROJECT_LIST;

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
          <div key={index} className="collapse collapse-plus bg-base-200 m-1">
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
              <div className="basis-2/3">
                {project.languages?.map((framework) => (
                  <span className="badge badge-primary m-1">{framework}</span>
                ))}
                {project.frameworks?.map((framework) => (
                  <span className="badge badge-secondary m-1">{framework}</span>
                ))}
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
