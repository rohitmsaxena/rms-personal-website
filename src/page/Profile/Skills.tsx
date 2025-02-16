import ProfileSection from "../../components/ProfileSection";
import { SKILLS } from "../../data/ExperienceList";
import { SkillType } from "../../types/Skill";

export default function Skills() {
  const skills = SKILLS;

  const getCardColor = (type: SkillType) => {
    switch (type) {
      case SkillType.Frontend:
        return "bg-amber-600";
      case SkillType.Backend:
        return "bg-red-600";
      case SkillType.Cloud:
        return "bg-blue-600";
      case SkillType.DevOps:
        return "bg-green-600";
      default:
        return "bg-neutral";
    }
  };

  return (
    <ProfileSection title={""} sectionId={""}>
      <div className="flex flex-wrap gap-2 ">
        {skills.map((skill) => (
          <div className="card bg-neutral text-primary-content w-75 image-full">
            <figure>
              <img src={skill.icon} alt="React" />
            </figure>
            <div className="card-body">
              <h1 className="card-title">{skill.language}</h1>
              <p className="flex flex-wrap">
                {skill.frameworks.map((framework) => (
                  <div
                    className={`${getCardColor(skill.type)} badge m-1 badge-sm`}
                  >
                    {framework}
                  </div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
