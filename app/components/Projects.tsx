"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Armsacres.io (Client)",
    description: "A fully functional e-commerce platform with payment integration and user authentication.",
    liveUrl: "https://armsacres.io",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.svg", color: "#fff" },
      { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "Nodemailer", icon: "/icons/nodemailer.svg", color: "#34A853" },
      
    ],
    type: "website",
    shadowColor: "#90d200", // Lime green for Armsacres
  },
  {
    id: 2,
    title: "BigGToys (Client)",
    description: "A modern corporate website with a blog, contact form, and admin dashboard.",
    liveUrl: "https://biggtoys.vercel.app/",
    type: "website",
    shadowColor: "#FF6B6B", // Light red for BigGToys
  },
  {
    id: 3,
    title: "LocalStorage Diary",
    description: "A simple diary app that saves entries to the browser's localStorage.",
    liveUrl: "https://echek99.github.io/your-online-diary/",
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
    <div className="pt-12 px-4 sm:px-6 lg:px-8 text-white mb-12 min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto relative">
        <h1
          className="text-4xl font-thin text-left mb-12 uppercase italic"
          style={{
            textShadow: "0 0 15px rgba(0, 255, 0, 0.8)", // Green glow effect
          }}>
          Projects
        </h1>
        <div className="relative">
          {Object.entries(groupedProjects).map(([type, projects], sectionIndex) => (
            <div key={type} className={sectionIndex > 0 ? "mt-12" : ""}>
              <motion.h2
                className="font-semibold uppercase mb-8 italic text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              >
                {type === "website" ? "Websites" : "Software Projects"}
              </motion.h2>

              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm overflow-hidden"
                      style={{
                        boxShadow: `0 0 10px 2px ${project.shadowColor}66`, // Blurry, bright shadow
                      }}
                    >
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="w-full p-6 flex items-center justify-between hover:bg-gray-800/70 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-300">{project.title}</h3>
                        <motion.div
                          animate={{ rotate: openProjectId === project.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-6 w-6 text-gray-300" />
                        </motion.div>
                      </button>

                      {openProjectId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <div className="flex flex-col gap-6 border-t border-gray-700/20 pt-6">
                            {project.liveUrl && (
                              <div className="w-full h-[400px] sm:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                  src={project.liveUrl}
                                  className="w-full h-full border-none"
                                  title={`Live Preview - ${project.title}`}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            )}

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                              <p className="text-gray-300 flex-1">{project.description}</p>
                            </div>
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