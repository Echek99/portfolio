"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Armsacres.io (Client)",
    description: "E-commerce website for a Weed delivery service located in NYC.",
    liveUrl: "https://armsacres.io",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Nodemailer", icon: "/icons/nodemailer.svg", color: "#34A853" },
      { name: "Canva", icon: "/icons/canva.svg", color: "#00C4CC" },
      { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
      { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
      { name: "react-three-fiber", icon: "/icons/react-three-fiber.svg", color: "#000" },
      { name: "Local Storage", icon: "/icons/localstorage.svg", color: "#000" },
    ],
    type: "website",
    shadowColor: "#90d200", // Lime green for Armsacres
  },
  {
    id: 2,
    title: "BigGToys (Client)",
    description: "Dynamic website for a Exotic car dealership.",
    liveUrl: "https://biggtoysmiami.com/",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Nodemailer", icon: "/icons/nodemailer.svg", color: "#34A853" },
      { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
      { name: "Gimp", icon: "/icons/gimp.svg", color: "#5C5543" },
      { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
    ],
    type: "website",
    shadowColor: "#FF6B6B", // Light red for BigGToys
  },
  {
    id: 3,
    title: "LocalStorage Diary",
    description: "A simple diary app that saves entries to the browser's localStorage.",
    liveUrl: "https://echek99.github.io/your-online-diary/",
    tools: [
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Local Storage", icon: "/icons/localstorage.svg", color: "#000" },
      { name: "FontAwesome", icon: "/icons/fontawesome.svg", color: "#228BE6" },
    ],
    type: "software",
    shadowColor: "#00FFFF", // Aqua green for LocalStorage Diary
  },
  {
    id: 4,
    title: "Webcam Barcode Reader",
    description: "A barcode scanner using the device's webcam and JavaScript.",
    liveUrl: "https://example.com/",
    type: "software",
    shadowColor: "#4169E1", // Royal blue for Barcode Scanner
  },
];

const ProjectsSection = () => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  const groupedProjects = projectsData.reduce((acc, project) => {
    if (!acc[project.type]) acc[project.type] = [];
    acc[project.type].push(project);
    return acc;
  }, {} as Record<string, typeof projectsData>);

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 text-white mb-12 min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-medium text-left mb-4 bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
            Projects
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full" />
        </motion.div>

        <div className="relative space-y-12">
          {Object.entries(groupedProjects).map(([type, projects], sectionIndex) => (
            <div key={type} className={sectionIndex > 0 ? "mt-12" : ""}>
              <motion.h2
                className="font-medium text-lg mb-8 text-gray-300 tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              >
                {type === "website" ? "Web Development" : "Software Solutions"}
              </motion.h2>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-700/30 overflow-hidden transition-all hover:border-gray-700/50"
                      style={{
                        boxShadow: `0 4px 24px -4px ${project.shadowColor}20`,
                      }}
                    >
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="w-full px-6 py-5 flex items-center justify-between group"
                      >
                        <div className="text-left">
                          <h3 className="text-xl font-medium text-gray-100 group-hover:text-indigo-200 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: openProjectId === project.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-400 group-hover:text-indigo-300 transition-colors"
                        >
                          <ChevronDown className="h-6 w-6" />
                        </motion.div>
                      </button>

                      {openProjectId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-8"
                        >
                          <div className="border-t border-gray-700/20 pt-6 space-y-8">
                            {project.liveUrl && (
                              <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                  <ExternalLink className="h-4 w-4" />
                                  <span>Live Preview</span>
                                </div>
                                <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden border border-gray-700/30 shadow-xl">
                                  <iframe
                                    src={project.liveUrl}
                                    className="w-full h-full bg-gray-900"
                                    title={`Live Preview - ${project.title}`}
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 pointer-events-none border-[0.5px] border-gray-600/20" />
                                </div>
                              </div>
                            )}

                            <div className="grid gap-4">
                              <div className="flex items-center gap-3">
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors"
                                >
                                  <span className="truncate">{project.liveUrl}</span>
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>

                            {project.tools && (
                              <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-300">Technologies Used</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.tools.map((tool, toolIndex) => (
                                    <motion.div
                                      key={tool.name}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.4, delay: toolIndex * 0.1 }}
                                      className="flex items-center p-1.5 space-x-2 bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-200 rounded-md"
                                    >
                                      <Image
                                        width={24}
                                        height={24}
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="w-6 h-6 object-contain flex-shrink-0"
                                        style={{
                                          filter: `drop-shadow(2px 2px 8px ${tool.color}66)`,
                                        }}
                                      />
                                      <span className="text-sm font-medium text-gray-300">
                                        {tool.name}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;