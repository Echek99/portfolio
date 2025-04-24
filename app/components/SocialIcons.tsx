"use client"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

// Define social media links with proper typing
interface SocialLink {
  icon: IconDefinition
  url: string
  label: string
}

const SocialIcons = () => {
  // Social media links with proper labels for accessibility
  const socialLinks: SocialLink[] = [
    {
      icon: faGithub,
      url: "https://github.com/Echek99",
      label: "GitHub Profile",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/echesinho",
      label: "Instagram Profile",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/julian-echeverri-7194bb247/",
      label: "LinkedIn Profile",
    },
  ]

  return (
    <div className="flex gap-4 justify-center items-center my-6">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.url}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.2,
          }}
          whileHover={{ y: -5 }}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-indigo-900/20 transition-all duration-300 group relative inline-block"
            aria-label={social.label}
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-4xl text-gray-300 group-hover:text-indigo-300 transition-colors"
              style={{
                textShadow: "0 2px 8px rgba(165, 180, 252, 0.2)",
              }}
            />
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default SocialIcons
