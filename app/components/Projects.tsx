"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ExternalLink, FileWarningIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projectsData = [
  {
    id: 0,
    title: "armsacres.io",
    description: "Built a custom e-commerce platform for a cannabis delivery brand with full CMS and order handling focused on conversion.",
    liveUrl: "https://armsacres.io",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Nodemailer", icon: "/icons/nodemailer.svg", color: "#34A853" },
      { name: "Canva", icon: "/icons/canva.svg", color: "#00C4CC" },
      { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
      { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
      { name: "react-three-fiber", icon: "/icons/react-three-fiber.svg", color: "#000" },
      { name: "Local Storage", icon: "/icons/localstorage.svg", color: "#000" },
    ],
    shadowColor: "#90d200",
  },
  {
    id: 1,
    title: "biggtoysmiami.com",
    description: "Developed a sleek site for a luxury car dealership, built for performance and lead conversion.",
    liveUrl: "https://biggtoysmiami.com/",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Nodemailer", icon: "/icons/nodemailer.svg", color: "#34A853" },
      { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
      { name: "Gimp", icon: "/icons/gimp.svg", color: "#5C5543" },
      { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
    ],
    shadowColor: "#FF6B6B",
  },
  {
    id: 3,
    title: "4duckpondroad.com",
    description: "Created a minimalist yet luxurious looking real estate showcase site with a mobile-first layout.",
    liveUrl: "https://4duckpondroad.com/",
    tools: [
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
      { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
    ],
    shadowColor: "#aeb1a0",
  },
  {
    id: 4,
    title: "konstantineamax.com",
    description: "Custom linktree inspired personal portfolio site for a client, built with a focus on performance and SEO.",
    liveUrl: "https://konstantineamax.com",
    tools: [
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
      { name: "Tailwind", icon: "/icons/tailwind.svg", color: "#38B2AC" },
      { name: "Lucide", icon: "/icons/lucide.svg", color: "#74363d" },
    ],
    shadowColor: "#D4AF37",
  },
  {
    id: 5,
    title: "LocalStorage Diary",
    description: "Built a simple journaling app using React and browser localStorage for persistence.",
    liveUrl: "https://echek99.github.io/your-online-diary/",
    tools: [
      { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Local Storage", icon: "/icons/localstorage.svg", color: "#000" },
      { name: "FontAwesome", icon: "/icons/fontawesome.svg", color: "#228BE6" },
    ],
    shadowColor: "#00FFFF",
  },
];


const ProjectsSection = () => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null)

  const toggleProject = (id: number) => {
    setOpenProjectId(openProjectId === id ? null : id)
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 text-white mb-24" id="projects">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="montserrat text-4xl md:text-5xl font-medium mb-6 text-left ml-4">
            <span className="bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-left ml-4">
            A collection of websites and applications I've built for clients and personal projects. <br />
            Most projects are continously being updated or still in development. (The hustle never stops).
          </p>
          <div className="h-[2px] w-32 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full mx-auto mt-8" />
        </motion.div>

        <div className="relative">
          <div className="grid gap-8 md:grid-cols-1">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-md rounded-xl border border-gray-700/40 overflow-hidden transition-all hover:border-indigo-500/30 h-full"
                  style={{
                    boxShadow: `0 8px 32px -4px ${project.shadowColor}30`,
                  }}
                >
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full px-6 py-6 flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <h3 className="montserrat text-xl font-medium bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent group-hover:from-indigo-100 group-hover:to-green-100 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: openProjectId === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 group-hover:text-indigo-300 transition-colors bg-gray-800/50 p-2 rounded-full"
                    >
                      <ChevronDown className="h-5 w-5" />
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
                      <div className="border-t border-gray-700/30 pt-6 space-y-8">
                        <div className="grid gap-4">
                          <div className="flex items-center gap-3">
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors px-4 py-2 rounded-full border border-indigo-500/30 hover:border-indigo-500/50 backdrop-blur-sm"
                            >
                              <span className="truncate montserrat">Visit Website</span>
                              <ExternalLink className="h-4 w-4 flex-shrink-0" />
                            </Link>
                          </div>
                        </div>

                        {project.liveUrl && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-indigo-300">
                              <FileWarningIcon className="h-4 w-4" />
                              <span>Live Preview can be innacurate on some devices</span>
                            </div>
                            <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden border border-gray-700/30 shadow-xl group">
                              <iframe
                                src={project.liveUrl}
                                className="w-full h-full bg-gray-900"
                                title={`Live Preview - ${project.title}`}
                                loading="lazy"
                              />
                              <div className="absolute inset-0 pointer-events-none border-[0.5px] border-gray-600/20 group-hover:border-indigo-500/20 transition-colors" />
                            </div>
                          </div>
                        )}

                        {project.tools && (
                          <div className="space-y-4">
                            <p className="text-sm font-medium text-indigo-300 montserrat">Technologies Used</p>
                            <div className="flex flex-wrap gap-3">
                              {project.tools.map((tool, toolIndex) => (
                                <motion.div
                                  key={tool.name}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: toolIndex * 0.05 }}
                                  whileHover={{ y: -2 }}
                                  className="flex items-center p-2 space-x-2 bg-gray-800/70 border border-gray-700/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-200 rounded-lg"
                                >
                                  <Image
                                    width={20}
                                    height={20}
                                    src={tool.icon || "/placeholder.svg"}
                                    alt={tool.name}
                                    className="w-5 h-5 object-contain flex-shrink-0"
                                    style={{
                                      filter: `drop-shadow(0 0 8px ${tool.color}66)`,
                                    }}
                                  />
                                  <span className="text-xs font-medium text-gray-300 montserrat">{tool.name}</span>
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
      </div>
    </section>
  )
}

export default ProjectsSection
