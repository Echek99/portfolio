"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Code Foundations",
    tech: ["HTML", "CSS", "JavaScript"],
    content: "Developed a strong foundation in web development through Udemy and Platzi while finishing high school, focusing on responsive design and interactivity."
  },
  {
    year: "2021 - 2023",
    title: "Beewo (Remote Internship)",
    tech: ["Ruby on Rails", "React", "Azure"],
    content: "Worked on full-stack development for a business management SaaS platform, gaining hands-on experience while completing high school.",
    file: "/files/Beewo_recommendation_letter.docx"
  },
  {
    year: "2021 - 2024",
    title: "Control IT (Contractor)",
    tech: ["Microsoft PowerApps", "PHP", "Python", "SQL"],
    content: "Developed and debugged enterprise software, improving system performance and functionality.",
    file: "/files/control_it_julian_echeverri.pdf"
  },
  {
    year: "2022 - 2023",
    title: "Blockchain & IT Operations",
    tech: [
      "Solidity", "Blockchain", "Network Infrastructure", "CCTV",
    ],
    content: "Researched Solidity and blockchain technology while transitioning to NYC. Gained experience in network infrastructure, CCTV systems, and WordPress, offering IT support and freelance web design services."
  },
  {
    year: "2024 - Present",
    title: "Freelance Development",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "SEO", "Tailwind"],
    content: "Built a growing clientele by developing high-performance full-stack applications. Actively managing websites and social media accounts for clients, expanding into a full-service digital agency."
  },
  {
    year: "2025+",
    title: "Future - Life is good",
    tech: ["Emerging Tech", "Business Growth", "Creative Solutions"],
    content: "Exploring new technologies and innovative solutions to create a bigger impact. Focused on leading projects, building strong partnerships, and always open to new opportunities."
  }
];


const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const borderHeight = useTransform(scrollYProgress, [0, 0.75], ["0%", "95%"]);

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 text-white" id="experience">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-medium text-center mb-4 bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
            Professional Journey
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full mx-auto" />
        </motion.div>

        {/* Progressive Border */}
        <motion.div
          style={{ height: borderHeight }}
          className="absolute left-1/2 w-[1px] h-full top-16 bg-gradient-to-b from-indigo-400/60 to-green-400/60 mx-auto shadow-[0_0_20px_2px_rgba(110,231,183,0.1)]"
        />

        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className="relative md:w-1/2 p-6 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                marginLeft: index % 2 === 0 ? "0" : "auto",
              }}
            >
              <div className={`relative ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full z-10 shadow-[0_0_12px_2px_rgba(110,231,183,0.3)]" />

                <div className="bg-gradient-to-br from-gray-800/10 to-gray-800/10 backdrop-blur-lg rounded-xl border border-gray-700/30 p-6 hover:border-gray-700/50 transition-colors">
                  <div className="flex flex-col gap-3 mb-4">
                    <span className="text-indigo-300 font-mono text-sm tracking-wide">{item.year}</span>
                    <h3 className="text-lg font-medium text-gray-100">{item.title}</h3>
                  </div>

                  {/* Tech stack badges */}
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {item.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className={`text-gray-400 text-sm leading-relaxed ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {item.content}
                  </p>

                  {item.file && (
                    <div className={`mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} flex`}>
                      <a
                        href={item.file}
                        download
                        className="inline-flex items-center px-4 py-2 border border-indigo-400/50 rounded-full text-sm font-medium text-indigo-300 hover:bg-indigo-900/30 transition-colors duration-200"
                        style={{
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download Recommedation Letter
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;