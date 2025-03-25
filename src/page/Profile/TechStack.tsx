import { useEffect, useState } from "react";
import ProfileSection from "../../components/ProfileSection";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { RADAR_DATA, TECH_CATEGORIES } from "../../data/SkillsList";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const techCategories = TECH_CATEGORIES;

  // Radar chart data
  const radarData = RADAR_DATA;

  // Check if we're on mobile for responsive design
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleCategoryHover = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <ProfileSection title="Tech Stack" sectionId="tech-stack">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Radar Chart */}
        <div className="lg:w-1/3 h-96 bg-base-100 rounded-lg shadow-lg p-4">
          <h3 className="text-2xl font-bold text-center mb-4">
            Technical Proficiency
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Skills"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Section */}
        <div className="lg:w-2/3">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-6">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Skills Total</div>
              <div className="stat-value text-primary">70+</div>
              <div className="stat-desc">Technologies & Frameworks</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Years Experience</div>
              <div className="stat-value text-secondary">9+</div>
              <div className="stat-desc">Full Stack Development</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Certifications</div>
              <div className="stat-value">AWS</div>
              <div className="stat-desc">Certified Solutions Architect</div>
            </div>
          </div>

          {/* Tech Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techCategories.map((category) => {
              const isActive = activeCategory === category.name;
              const textColorClass = isActive
                ? "text-white"
                : "text-base-content";
              const bgColorClass = isActive ? category.color : "bg-base-200";

              return (
                <div
                  key={category.name}
                  className={`card shadow-xl transition-all duration-300 ${isActive ? "scale-105 -translate-y-1" : ""}`}
                  onMouseEnter={() => handleCategoryHover(category.name)}
                  onMouseLeave={handleCategoryLeave}
                >
                  <div
                    className={`card-body p-4 ${bgColorClass} rounded-lg ${isActive ? "shadow-lg" : ""}`}
                  >
                    <h3
                      className={`card-title text-xl font-bold mb-3 ${textColorClass}`}
                    >
                      {category.name}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`badge ${isActive ? "bg-white text-black" : category.color + " text-white"} 
                            p-3 font-medium transition-all duration-300
                            ${isActive ? "scale-110" : "scale-100"}
                            hover:shadow-md cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ProfileSection>
  );
}
