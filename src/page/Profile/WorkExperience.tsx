import { motion } from "motion/react";
import ProfileSection from "../../components/ProfileSection";
import { WORK_EXPERIENCE_LIST } from "../../data/WorkExperienceList";

const icons = import.meta.glob("../../assets/*.png", {
  eager: true,
  import: "default",
});

export default function WorkExperience() {
  return (
    <ProfileSection title={"Work Experience"} sectionId={"work-experience"}>
      <div className="space-y-8">
        {WORK_EXPERIENCE_LIST.map((exp, index) => {
          const direction = Math.random() > 0.5 ? 200 : -200;
          const rotation = Math.random() > 0.5 ? 8 : -8; // Add slight rotation
          const iconPath = icons[`../../assets/${exp.icon}`];

          return (
            <motion.div
              key={index}
              className="card p-2 " //bg-base-300 shadow-lg
              initial={{
                opacity: 0,
                x: direction,
                rotate: rotation,
                scale: 0.9,
              }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150, // More bounce
                damping: 8, // Less damping for stronger motion
                mass: 0.8, // More weight, makes it snappier
                delay: index * 0.3, // Slower stagger for drama
              }}
            >
              <div className="relative flex items-center justify-center w-full">
                <motion.h3
                  className="text-2xl font-semibold"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {exp.title} @ {exp.company}
                </motion.h3>

                <motion.img
                  src={iconPath as string}
                  alt={`${exp.company} Logo`}
                  className="h-12 w-12 object-contain absolute right-10"
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                {exp.location} | {exp.period}
              </p>

              <ul className="list-disc list-inside mt-3 space-y-1">
                {exp.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: direction / 2, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 10,
                      delay: i * 0.15, // More pronounced delay
                    }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </ProfileSection>
  );
}
