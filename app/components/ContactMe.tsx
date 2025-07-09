"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  MapPin,
  Mail,
  UserRound,
  Phone,
  Clock,
  Send,
  ArrowLeft,
  MessageSquare,
  Calendar,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import SocialIcons from "./SocialIcons"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setError(null)

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setSubmitStatus("error")
      setError(err instanceof Error ? err.message : "Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h1 className="montserrat text-4xl md:text-5xl font-medium mb-6 text-left ">
            <span className="bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ml-2 text-justify">
            Have a project in mind or want to discuss a potential collaboration? I'm here to help turn your ideas into
            reality.
          </p>
          <div className="h-[2px] w-32 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full mx-auto mt-10" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-lg border border-gray-700/30 rounded-xl p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

              <h2 className="text-2xl font-medium text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "New York City, NY",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "echeverrijulian100@gmail.com",
                    link: "mailto:echeverrijulian100@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (551) 332-9504",
                    link: "tel:+15513329504",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-100 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-gray-300 hover:text-indigo-300 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-700/30">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Connect with me</h3>
                <div className="flex gap-4">
                    <SocialIcons/>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-lg border border-gray-700/30 rounded-xl p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-white">Send Me a Message</h2>
                  <p className="text-gray-400 mt-1">I'd love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <div className="relative">
                      <UserRound className="h-5 w-5 text-indigo-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="h-5 w-5 text-indigo-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-500/20 to-green-500/20 border border-indigo-400/50 text-indigo-300 px-6 py-3 rounded-lg hover:bg-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-indigo-300 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Form Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-indigo-400/10 border border-indigo-400/50"
                        : "bg-red-400/10 border border-red-400/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus === "success" ? (
                        <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-400 text-xs">!</span>
                        </div>
                      )}
                      <p className="text-sm">
                        {submitStatus === "success"
                          ? "Thank you for your message! I'll get back to you as soon as possible."
                          : error || "Failed to send message. Please try again."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
            {/* FAQ Section */}
            {/* <div className="my-12 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-lg border border-gray-700/30 rounded-xl p-8">
              <h2 className="text-2xl font-medium text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {[
                  {
                    question: "What is your typical response time?",
                    answer: "I typically respond to all inquiries within 1-2 hours, any day, no days off.",
                  },
                  {
                    question: "Do you offer consultations?",
                    answer:
                      "Yes, I offer free 30-minute consultations to discuss your project needs and how I can help.",
                  },
                  {
                    question: "What is your project process?",
                    answer:
                      "My process includes discovery, planning, development, and delivery phases to ensure your project is completed successfully.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-base font-medium text-indigo-300">{faq.question}</h3>
                    <p className="text-sm text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div> */}
            {/* Additional Info */}
            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Fast Response",
                  description: "I respond to all inquiries within the same day.",
                },
                {
                  icon: Calendar,
                  title: "Free Consultation",
                  description: "Book a 30-minute call to discuss your project.",
                },
                {
                  icon: CheckCircle2,
                  title: "Satisfaction Guaranteed",
                  description: "Your satisfaction is my top priority.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <item.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage