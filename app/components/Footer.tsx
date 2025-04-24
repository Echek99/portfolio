"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Github, Linkedin, ExternalLink, Instagram } from "lucide-react"
import SkillsSection from "./Skills"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-gradient-to-b from-transparent to-gray-900/30 backdrop-blur-sm pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800/30">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-2 text-center"
                >
                    <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I've worked with</p>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <SkillsSection />
                </motion.div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800/30 pt-12">
                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="montserrat text-xl font-medium bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent mb-4">
                            Contact
                        </h3>
                        <a
                            href="mailto:echeverrijulian100@gmail.com"
                            className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors"
                        >
                            <Mail className="h-4 w-4" />
                            <span>echeverrijulian100@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href="https://www.instagram.com/echesinho"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-300 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-300 transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-300 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="montserrat text-xl font-medium bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent mb-4">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-gray-400 hover:text-indigo-300 transition-colors">
                                Home
                            </Link>
                            <Link href="/portfolio" className="text-gray-400 hover:text-indigo-300 transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/media" className="text-gray-400 hover:text-indigo-300 transition-colors">
                                Media
                            </Link>
                            <Link href="#contact" className="text-gray-400 hover:text-indigo-300 transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Latest Projects */}
                    <div className="space-y-4">
                        <h3 className="montserrat text-xl font-medium bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent mb-4">
                            Latest Projects
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="https://armsacres.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors group"
                            >
                                <span>Armsacres.io</span>
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="https://biggtoysmiami.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors group"
                            >
                                <span>BigGToys</span>
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="https://4duckpondroad.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors group"
                            >
                                <span>4 Duck Pond Rd</span>
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-12 pt-8 border-t border-gray-800/30">
                    <p className="text-gray-500 text-sm">© {currentYear} Julian Echeverri. All rights reserved.</p>
                    <p className="text-gray-600 text-xs mt-2">Built with Next.js, React, and Three.js</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
