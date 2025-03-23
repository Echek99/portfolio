'use client';
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import SkillsSection from "./Skills";

const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative pt-24 px-4 sm:px-6 lg:px-8" id="home">
            {/* Text Content */}
            <div className="text-center z-[0] w-full max-w-4xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-6xl font-medium bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
                        Hey there! I&apos;m{" "}
                        <span className="bg-gradient-to-r from-indigo-300 to-green-300 bg-clip-text text-transparent">
                            Julian Echeverri
                        </span>
                    </h1>
                    
                    <p
                        className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-300 mt-6 mb-8 italic"
                    >
                        Fullstack Developer & Technical Problem Solver
                        <span className="block text-sm text-gray-400 mt-2">Based in New York City</span>
                    </p>
                </motion.div>

                {/* Resume Download Button */}
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8 uppercase"
                >
                    <a
                        href="/files/Julian_Echeverri.pdf"
                        download
                        className="inline-flex items-center px-8 py-3 border border-indigo-400/50 rounded-full text-lg font-medium text-indigo-300 hover:bg-indigo-900/30 transition-colors duration-200"
                        style={{ backdropFilter: 'blur(4px)' }}
                    >
                        <svg
                            className="w-5 h-5 mr-2"
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
                        Download Resume
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <SocialIcons />
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <SkillsSection />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro;