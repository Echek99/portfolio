"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Skills data with type definition for better type safety
interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skillsData: Skill[] = [
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
  //{ name: "Canva", icon: "/icons/canva.svg", color: "#00C4CC" },
  { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
  { name: "Local Storage", icon: "/icons/localstorage.svg", color: "#000" },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="w-full" id="skills">
      <div className="max-w-4xl mx-auto">
        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-2 max-w-[90%] sm:max-w-[85%] mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center p-2 space-x-2 
                         bg-gray-800/50 border border-gray-700 
                         backdrop-blur-sm hover:bg-gray-800/70
                         transition-all duration-200 hover:scale-105"
            >
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={24}
                height={24}
                className="w-5 h-5 object-contain flex-shrink-0"
                style={{
                  filter: `drop-shadow(0 0 6px ${skill.color}66)`,
                }}
              />
              <span className="text-sm font-medium text-gray-300 montserrat">
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
