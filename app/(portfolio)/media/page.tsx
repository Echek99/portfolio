"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

// Services offered to clients
const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description: "Improve your website's visibility and ranking on search engines.",
    icon: "/icons/seo.svg",
  },
  {
    id: 2,
    title: "Content Design",
    description: "Create engaging and effective content that resonates with your audience.",
    icon: "/icons/content.svg",
  },
  {
    id: 3,
    title: "Brand Design",
    description: "Develop a cohesive brand identity that represents your business values.",
    icon: "/icons/brand.svg",
  },
  {
    id: 4,
    title: "Catalog Creation",
    description: "Design professional product catalogs that showcase your offerings.",
    icon: "/icons/catalog.svg",
  },
  {
    id: 5,
    title: "Photo & Video Editing",
    description: "Professional editing services to enhance your visual content.",
    icon: "/icons/editing.svg",
  },
  {
    id: 6,
    title: "Social Media Graphics",
    description: "Eye-catching graphics optimized for various social media platforms.",
    icon: "/icons/social.svg",
  },
]

// Media examples
const mediaExamples = [
  {
    id: 1,
    title: "Armsacres Product Catalog",
    client: "Armsacres.io",
    description:
      "A comprehensive product catalog showcasing the client's premium offerings with detailed specifications and high-quality imagery.",
    imageUrl: "/placeholder.svg?height=500&width=400",
    projectUrl: "https://example.com/armsacres-catalog",
    year: "2023",
  },
  {
    id: 2,
    title: "BigGToys Brand Guidelines",
    client: "BigGToys Miami",
    description:
      "Complete brand identity guidelines including logo usage, color palette, typography, and application examples for this luxury car dealership.",
    imageUrl: "/placeholder.svg?height=500&width=400",
    projectUrl: "https://example.com/bigg-brand",
    year: "2022",
  },
  {
    id: 3,
    title: "Seasonal Marketing Campaign",
    client: "Armsacres.io",
    description:
      "A cohesive marketing campaign spanning digital and print media, designed to promote seasonal products and special offers.",
    imageUrl: "/placeholder.svg?height=500&width=400",
    projectUrl: "https://example.com/armsacres-campaign",
    year: "2023",
  },
]

export default function MediaPage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      {/* Title and Slogan Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center w-full max-w-4xl mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-medium bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
          Media & Design
        </h1>
        <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-300 mt-6 mb-8 italic">
          Creative solutions that elevate your brand
          <span className="block text-sm text-gray-400 mt-2">Transforming ideas into visual experiences</span>
        </p>
        <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full" />
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mb-20"
      >
        <h2 className="text-3xl font-medium mb-8 bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-indigo-400/20 rounded-xl p-6 hover:border-indigo-400/40 transition-colors"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0">
                  <Image
                    src={service.icon || "/placeholder.svg?height=40&width=40"}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-indigo-300">{service.title}</h3>
                  <p className="text-gray-300 mt-2">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Media Examples Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-3xl font-medium mb-8 bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
          Featured Work
        </h2>

        <div className="space-y-20">
          {mediaExamples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-indigo-400/20 shadow-lg">
                  <Image
                    src={example.imageUrl || "/placeholder.svg"}
                    alt={example.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div className="text-sm text-gray-400">{example.year}</div>
                <h3 className="text-2xl font-medium text-indigo-300">{example.title}</h3>
                <p className="text-gray-300 italic">Client: {example.client}</p>
                <p className="text-gray-300">{example.description}</p>
                <Link
                  href={example.projectUrl}
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 mt-4 border border-indigo-400/50 rounded-full text-base font-medium text-indigo-300 hover:bg-indigo-900/30 transition-colors duration-200"
                  style={{ backdropFilter: "blur(4px)" }}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

