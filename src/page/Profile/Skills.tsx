import ProfileSection from "../../components/ProfileSection";
import { SKILLS } from "../../data/SkillsList";
import { SkillType } from "../../types/Skill";
import { motion } from "motion/react";

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
    <ProfileSection title={"Languages & Technologies"} sectionId={"languages"}>
      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.language}
            className={`card ${getCardColor(skill.type)} text-primary-content w-60 image-full`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <figure>
              <img src={skill.icon} alt={skill.language} />
            </figure>
            <motion.div
              className="card-body"
              initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <h1 className="card-title">{skill.language}</h1>
              <p className="flex flex-wrap">
                {skill.frameworks.map((framework) => (
                  <motion.div
                    key={framework}
                    className={`${getCardColor(skill.type)} badge m-1 badge-sm`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {framework}
                  </motion.div>
                ))}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </ProfileSection>
  );
}
