"use client"
import { motion } from "framer-motion"
import { Github, Instagram, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Define social media links with proper typing for Lucide icons
interface SocialLink {
  icon: LucideIcon
  url: string
  label: string
}

const SocialIcons = () => {
  // Social media links with proper labels for accessibility
  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      url: "https://github.com/Echek99",
      label: "GitHub Profile",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/echesinho",
      label: "Instagram Profile",
    },
    {
      icon: Phone,
      url: "tel:+15513329504",
      label: "Phone Number",
    },
  ]

  return (
    <div className="flex gap-4 justify-center items-center my-6">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon
        return (
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
              <IconComponent
                size={32}
                className="text-gray-300 group-hover:text-indigo-300 transition-colors"
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(165, 180, 252, 0.2))",
                }}
              />
            </a>
          </motion.div>
        )
      })}
    </div>
  )
}

export default SocialIcons
