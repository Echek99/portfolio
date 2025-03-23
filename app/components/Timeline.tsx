"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Code Foundations",
    tech: ["HTML", "CSS", "JavaScript"],
    content: "Self-taught development through Udemy/Platzi while finishing high school"
  },
  {
    year: "2021",
    title: "Beewo (Remote Internship)",
    tech: ["Ruby on Rails", "React", "Linux", "Git"],
    content: "Fullstack development for business management SaaS platform, Graduated High School.",
    file: "/files/Beewo_recommendation_letter.docx" // Added file property
  },
  {
    year: "2022 Q1-Q2",
    title: "Control IT (Contractor)",
    tech: ["PHP", "Python", "PowerApps", "SQL"],
    content: "Enterprise software debugging and feature development",
    file: "/files/control_it_julian_echeverri.pdf" // Added file property
  },
  {
    year: "2022 Q3-Q4",
    title: "Global Exploration",
    tech: ["Solidity", "Blockchain", "Service Industry"],
    content: "NYC relocation + blockchain development research"
  },
  {
    year: "2023",
    title: "Tech Multiverse",
    tech: ["Network Infrastructure", "CCTV Systems", "WordPress"],
    content: "IT operations + freelance web design services"
  },
  {
    year: "2024",
    title: "Modern Web Development",
    tech: ["Next.js", "TypeScript", "SEO", "Tailwind"],
    content: "Fullstack projects with performance optimization focus"
  },
  {
    year: "2025+",
    title: "Future Focus",
    tech: ["Emerging Tech", "Technical Leadership"],
    content: "Seeking impactful collaborations and innovative projects"
  }
];

const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const borderHeight = useTransform(scrollYProgress, [0, 0.75], ["0%", "95%"]);

  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="max-w-6xl mx-auto relative">
        {/* Progressive Border */}
        <motion.div
          style={{ height: borderHeight }}
          className="absolute md:left-0 sm:left-0 lg:left-1/2 w-[1px] h-full top-16 bg-white shadow-[3px_4px_37px_5px_#E6E6E6] mx-auto"
        />

        <h1 className="text-4xl font-thin text-center mb-12 uppercase italic"
          style={{
            textShadow: "0 0 15px rgba(0, 255, 0, 0.8)", // Green glow effect
          }}>
          Professional Journey
        </h1>

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
              {/* Timeline dot */}
              {/* <div className="hidden md:block absolute -top-1 left-1/2 -translate-x-1/2 md:left-[99%] w-3 h-3 bg-green-400 rounded-full z-10" /> */}

              <div className={`relative ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                <div className="flex flex-col gap-2 mb-3">
                  <span className="text-green-400 font-mono text-lg">{item.year}</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {/* Tech stack badges */}
                <div className={`flex flex-wrap gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-green-900/40 rounded-full text-green-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={`text-gray-300 text-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  {item.content}
                </p>
              {/* Add download button for 2021 entry */}
              {item.file && (
                <div className={`mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} flex`}>
                  <a
                    href={item.file}
                    download
                    className="inline-flex items-center px-4 py-2 border border-green-400 rounded-full text-sm font-medium text-green-300 hover:bg-green-900/40 transition-colors duration-200 cursor-pointer"
                    style={{
                      textShadow: "0 0 8px rgba(110, 231, 183, 0.3)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Recommendation Letter
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Timeline