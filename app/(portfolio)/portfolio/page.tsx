"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowLeft, Search, PenTool, Palette, BookOpen, ImagePlus, Share2, CheckCircle } from "lucide-react"
import ProjectsSection from "../../components/Projects"

// Services offered to clients with Lucide icons
const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description: "Improve your website's visibility and ranking on search engines.",
    icon: Search,
    color: "#4f46e5",
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Better user experience",
      "Improved conversion rates",
    ],
  },
  {
    id: 2,
    title: "Content Design",
    description: "Create engaging and effective content that resonates with your audience.",
    icon: PenTool,
    color: "#10b981",
    benefits: [
      "Compelling storytelling",
      "Clear messaging hierarchy",
      "Consistent brand voice",
      "Engaging user experience",
    ],
  },
  {
    id: 3,
    title: "Brand Design",
    description: "Develop a cohesive brand identity that represents your business values.",
    icon: Palette,
    color: "#f59e0b",
    benefits: [
      "Distinctive visual identity",
      "Consistent brand experience",
      "Increased brand recognition",
      "Professional market positioning",
    ],
  },
  {
    id: 4,
    title: "Catalog Creation",
    description: "Design professional product catalogs that showcase your offerings.",
    icon: BookOpen,
    color: "#ec4899",
    benefits: [
      "Professional product presentation",
      "Organized information architecture",
      "Compelling visual hierarchy",
      "Print and digital optimization",
    ],
  },
  {
    id: 5,
    title: "Photo & Video Editing",
    description: "Professional editing services to enhance your visual content.",
    icon: ImagePlus,
    color: "#3b82f6",
    benefits: [
      "Professional image enhancement",
      "Consistent visual style",
      "Custom visual effects",
      "Multi-platform optimization",
    ],
  },
  {
    id: 6,
    title: "Social Media Graphics",
    description: "Eye-catching graphics optimized for various social media platforms.",
    icon: Share2,
    color: "#8b5cf6",
    benefits: [
      "Platform-specific designs",
      "Engagement-optimized visuals",
      "Consistent brand presence",
      "Trend-aware creative direction",
    ],
  },
]

export default function PortfolioPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </motion.button>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Section - Professional Redesign
      <section className="py-6 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-medium mb-6">
                  <span className="bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
                    Professional Services
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  Comprehensive solutions tailored to elevate your digital presence and business growth.
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/20 via-green-500/20 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-xl border border-gray-700/40 overflow-hidden transition-all group-hover:border-gray-600/60 group-hover:shadow-lg group-hover:shadow-indigo-900/10">
                  <div
                    className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                    style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}50)` }}
                  ></div>

                  <div className="p-6">
                    <div className="flex items-start mb-5">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <service.icon
                          size={24}
                          className="transition-all duration-300"
                          style={{ color: service.color }}
                        />
                      </div>
                      <div>
                        <h3 className="montserrat text-xl font-medium text-white group-hover:text-indigo-200 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 mt-1 text-sm">Professional Solution</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">Key Benefits</p>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-400 text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Looking for a custom solution? Let's discuss how my services can be tailored to your specific needs.
            </p>
            <button
              className="montserrat px-8 py-3 bg-gradient-to-r from-indigo-500/20 to-green-500/20 border border-indigo-500/30 hover:border-indigo-400/50 rounded-full text-indigo-300 hover:text-indigo-200 transition-all duration-300"
              style={{ backdropFilter: "blur(4px)" }}
              onClick={() => router.push("/contact")}
            >
              Request a Consultation
            </button>
          </motion.div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-medium mb-6">
              <span className="bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How I approach projects from concept to completion
            </p>
            <div className="h-[2px] w-32 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full mx-auto mt-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-2">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and target audience to create a solid foundation.",
                delay: 0.1,
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a detailed roadmap with timelines, technologies, and deliverables.",
                delay: 0.2,
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with clean, efficient code and regular progress updates.",
                delay: 0.3,
              },
              {
                step: "04",
                title: "Delivery",
                description: "Thorough testing, deployment, and support to ensure your project succeeds.",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-md rounded-xl border border-gray-700/40 p-6 relative"
              >
                <div className="montserrat absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-green-500 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-white mt-4 mb-3 montserrat">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
