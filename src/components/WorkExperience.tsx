import { motion } from "motion/react";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Cloud Architect",
      company: "XeroShoes",
      location: "Remote",
      period: "Oct. 2024 - Jan. 2025",
      details: [
        "Developed a migration strategy to lift-and-shift a WordPress application from bare metal to AWS.",
        "Designed and implemented AWS cloud architecture using Terraform, including multi-account OUs.",
        "Optimized VPC address space planning for efficient network segmentation.",
      ],
    },
    {
      title: "Technical Lead / Sr. Full Stack Engineer",
      company: "Revacomm",
      location: "Remote",
      period: "Feb. 2024 - Oct. 2024",
      details: [
        "Developed encryption functionality for digital signatures on classified mission paperwork.",
        "Digitized mission scheduling, reducing planning time by 50%.",
        "Implemented RTK Query codegen, improving development time by 10%.",
        "Built a proof of concept for an AI-powered scheduling assistant.",
        "Led and mentored developers to enhance technical skills.",
      ],
    },
    {
      title: "Senior Backend Developer",
      company: "Target",
      location: "Remote",
      period: "Aug. 2022 - Feb. 2024",
      details: [
        "Led Camunda Workflow development to automate nationwide RFID Reader installation.",
        "Developed workflows to onboard IoT devices, achieving 100% automation.",
        "Built Grafana dashboards to monitor workflow efficiency.",
      ],
    },
    {
      title: "Frontend Architect / Full Stack Lead Developer",
      company: "iHeartMedia",
      location: "San Antonio, TX",
      period: "May 2019 - Aug. 2022",
      details: [
        "Developed micro frontend architecture, reducing development time by 15%.",
        "Led company-wide transition to micro frontends with training sessions.",
        "Built a sales platform used for 95% of all ad sales, increasing revenue by 10%.",
      ],
    },
    {
      title: "Developer II",
      company: "HEB",
      location: "San Antonio, TX",
      period: "May 2018 - May 2019",
      details: [
        "Developed an AngularJS/Java Spring Boot application for pharmacists.",
        "Used Babel.js to maintain compatibility with legacy browsers.",
        "Operated as Scrum Master for the team’s first Agile project.",
      ],
    },
  ];
  // return (
  //   <section className="py-12 bg-base-200">
  //     <div className="container mx-auto px-4">
  //       <motion.h2
  //         className="text-4xl font-bold text-center mb-8"
  //         initial={{ opacity: 0, y: -20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.5 }}
  //       >
  //         Work Experience
  //       </motion.h2>
  //
  //       <div className="space-y-8">
  //         {experiences.map((exp, index) => {
  //           // Randomly choose left or right animation
  //           const direction = Math.random() > 0.5 ? 100 : -100;
  //
  //           return (
  //             <motion.div
  //               key={index}
  //               className="card bg-base-100 shadow-lg p-6"
  //               initial={{ opacity: 0, x: direction }}
  //               animate={{ opacity: 1, x: 0 }}
  //               transition={{
  //                 type: "spring",
  //                 stiffness: 80,
  //                 damping: 12,
  //                 delay: index * 0.2,
  //               }}
  //             >
  //               <motion.h3
  //                 className="text-2xl font-semibold text-center"
  //                 whileHover={{ scale: 1.05 }}
  //               >
  //                 {exp.title}
  //               </motion.h3>
  //               <p className="text-sm text-gray-500 text-center">
  //                 {exp.company} - {exp.location} | {exp.period}
  //               </p>
  //               <ul className="list-disc list-inside mt-3 space-y-2">
  //                 {exp.details.map((detail, i) => (
  //                   <motion.li
  //                     key={i}
  //                     initial={{ opacity: 0, x: direction / 2 }}
  //                     animate={{ opacity: 1, x: 0 }}
  //                     transition={{
  //                       type: "spring",
  //                       stiffness: 100,
  //                       damping: 14,
  //                       delay: i * 0.1,
  //                     }}
  //                   >
  //                     {detail}
  //                   </motion.li>
  //                 ))}
  //               </ul>
  //             </motion.div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            // Randomize direction (Left or Right)
            const direction = Math.random() > 0.5 ? 200 : -200;
            const rotation = Math.random() > 0.5 ? 8 : -8; // Add slight rotation

            return (
              <motion.div
                key={index}
                className="card bg-base-100 shadow-lg p-6"
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
                <motion.h3
                  className="text-2xl font-semibold text-center"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {exp.title}
                </motion.h3>
                <p className="text-sm text-gray-500 text-center">
                  {exp.company} - {exp.location} | {exp.period}
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
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
      </div>
    </section>
  );
}
