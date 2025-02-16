import ProfileSection from "../../components/ProfileSection";
import { EXPERIENCE_LIST } from "../../data/ExperienceList";
import { ExperienceType } from "../../types/Experience";

export default function LanguagesSection() {
  const experienceList = EXPERIENCE_LIST;

  const getCardColor = (type: ExperienceType) => {
    switch (type) {
      case ExperienceType.Frontend:
        return "bg-amber-600";
      case ExperienceType.Backend:
        return "bg-red-600";
      case ExperienceType.Cloud:
        return "bg-blue-600";
      case ExperienceType.DevOps:
        return "bg-green-600";
      default:
        return "bg-neutral";
    }
  };

  return (
    <ProfileSection title={""} sectionId={""}>
      <div className="flex flex-wrap gap-2 ">
        {experienceList.map((lang) => (
          <div className="card bg-neutral text-primary-content w-75 image-full">
            <figure>
              <img src={lang.icon} alt="React" />
            </figure>
            <div className="card-body">
              <h1 className="card-title">{lang.language}</h1>
              <p className="flex flex-wrap">
                {lang.frameworks.map((framework) => (
                  <div
                    className={`${getCardColor(lang.type)} badge m-1 badge-sm`}
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
