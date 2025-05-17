"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import SocialIcons from "./SocialIcons"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Intro = () => {
  const router = useRouter()

  return (
    <section
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 "
      id="home"
      style={{
        height: "90vh",
        overflow: "hidden", // Prevent scrolling
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="text-center w-full max-w-4xl mx-auto">
        {/* Header Content */}
        <motion.div initial={fadeIn.initial} animate={fadeIn.animate} transition={fadeIn.transition} className="mb-6">
          <h1 className="montserrat text-5xl md:text-6xl font-medium">
            <span className="bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
              I'm <strong className="italic">Eche.</strong>
            </span>
            <br />
            <span className="text-2xl bg-gradient-to-r from-indigo-300 to-green-300 bg-clip-text text-transparent">
              Got an idea? I'm listening.
            </span>
          </h1>
        </motion.div>

        {/* Resume Download Button */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4"
        >
          <a
            href="/files/Julian_Echeverri.pdf"
            download
            className="inline-flex items-center px-10 py-3 border border-indigo-400/50 rounded-full 
                      text-lg font-medium text-indigo-300 hover:bg-indigo-900/30 
                      transition-all duration-300 uppercase montserrat"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </motion.div> */}

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {/* <button
            onClick={() => router.push("/media")}
            className="inline-flex items-center px-16 py-3 border border-indigo-400/50 rounded-full 
                      text-lg font-medium text-indigo-300 hover:bg-indigo-900/30 
                      transition-all duration-300 uppercase"
            style={{ backdropFilter: "blur(4px)" }}
          >
            Media Gallery
          </button> */}
                    <button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center px-24 py-3 border border-indigo-400/50 rounded-full 
                      text-lg font-medium text-indigo-300 hover:bg-indigo-900/30 
                      transition-all duration-300 uppercase montserrat"
            style={{ backdropFilter: "blur(12px)" }}
          >
            Contact Me
          </button>
          <button
            onClick={() => router.push("/portfolio")}
            className="inline-flex items-center px-24 py-3 border border-green-400/50 rounded-full 
                      text-lg font-medium text-green-300 hover:bg-green-900/30 
                      transition-all duration-300 uppercase montserrat"
            style={{ backdropFilter: "blur(12px)" }}
          >
            Portfolio
          </button>

        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6"
        >
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
