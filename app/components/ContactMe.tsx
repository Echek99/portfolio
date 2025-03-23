"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, UserRound } from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setError(null);

        try {
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Failed to send message');
            }

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setSubmitStatus('error');
            setError(err instanceof Error ? err.message : 'Failed to send message');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-20 px-4 sm:px-6 lg:px-8 text-white" id="contact">
            <div className="max-w-6xl mx-auto relative my-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl font-medium text-left mb-4 bg-gradient-to-r from-indigo-200 to-green-200 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-400/60 to-green-400/60 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
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
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 hover:border-indigo-400/50 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-500/10 rounded-lg">
                                        <item.icon className="h-6 w-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-100 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300">{item.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-xl p-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="space-y-6">
                            {[
                                {
                                    id: "name",
                                    label: "Name",
                                    icon: UserRound,
                                    type: "text",
                                    value: formData.name,
                                },
                                {
                                    id: "email",
                                    label: "Email",
                                    icon: Mail,
                                    type: "email",
                                    value: formData.email,
                                },
                            ].map((field, index) => (
                                <div key={field.id}>
                                    <label
                                        htmlFor={field.id}
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        {field.label}
                                    </label>
                                    <div className="relative">
                                        <field.icon className="h-5 w-5 text-indigo-400 absolute left-3 top-3" />
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                                            value={field.value}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    [field.id]: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            ))}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-black/20 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full bg-indigo-500/10 border border-indigo-400/50 text-indigo-300 px-6 py-3 rounded-lg hover:bg-indigo-500/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="h-4 w-4 border-2 border-indigo-300 rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </>
                                )}
                            </motion.button>

                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${
                                        submitStatus === "success"
                                            ? "bg-indigo-400/10 border border-indigo-400"
                                            : "bg-red-400/10 border border-red-400"
                                    }`}
                                >
                                    <p className="text-sm">
                                        {submitStatus === "success"
                                            ? "Message sent successfully! 🎉 I'll get back to you ASAP."
                                            : error || "Failed to send message. Please try again."}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;