"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


const skillsData = [
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "Linux", icon: "/icons/linux.svg", color: "#FCC624" },
  { name: "HTML", icon: "/icons/html.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
  { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
  { name: "Ruby On Rails", icon: "/icons/rails.svg", color: "#CC0000" },
  { name: "PowerApps", icon: "/icons/powerapps.svg", color: "#742774" },
  { name: "PhPMyAdmin", icon: "/icons/phpmyadmin.svg", color: "#6C78AF" },
  { name: "MySQL", icon: "/icons/sql.svg", color: "#336791" },
  { name: "Nodemailer", icon: "/icons/nodemailer.svg", color: "#34A853" },
  { name: "react-three-fiber", icon: "/icons/react-three-fiber.svg", color: "#000" },
  { name: "FontAwesome", icon: "/icons/fontawesome.svg", color: "#228BE6" },
  { name: "Gimp", icon: "/icons/gimp.svg", color: "#5C5543" },
  { name: "Canva", icon: "/icons/canva.svg", color: "#00C4CC" },
  { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
  { name: "Local Storage", icon: "/icons/localstorage.svg", color: "#000" },
];

const SkillsSection: React.FC = () => {

  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8 text-white mb-12" id="skills">
      <div className="max-w-4xl mx-auto relative">
        {/* <h1 className="text-3xl font-bold text-center mb-8 uppercase">Skills</h1> */}

        <div className="flex flex-wrap max-w-[80%] mx-auto gap-1 align-center justify-center">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center p-1 space-x-2 bg-gray-800/50
                         border border-gray-700 backdrop-blur-sm hover:bg-gray-800/70
                         transition-colors duration-200"
            >
              <Image
              width={24}
              height={24}
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 object-contain flex-shrink-0"
                style={{
                  filter: `drop-shadow(2px 2px 8px ${skill.color}66)`,
                }}
              />
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;