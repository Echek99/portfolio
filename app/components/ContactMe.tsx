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
        <div className="pt-12 px-4 sm:px-6 lg:px-8 text-white my-12" id="contact">
            <div className="max-w-6xl mx-auto relative my-12">
                <motion.h1
                    className="text-4xl font-thin text-left mb-12 uppercase italic"
                    style={{
                        textShadow: "0 0 15px rgba(0, 255, 0, 0.8)", // Green glow effect
                    }}>
                    Get in Touch
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-4 sm:space-y-6" // Reduced spacing on mobile
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Location Card */}
                        <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-200 p-4 sm:p-6 rounded-lg flex items-start gap-4">
                            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 flex-shrink-0" /> {/* Smaller icon on mobile */}
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Location</h3> {/* Smaller text on mobile */}
                                <p className="text-sm sm:text-base text-gray-300">New York City, NY</p> {/* Smaller text on mobile */}
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-200 p-4 sm:p-6 rounded-lg flex items-start gap-4">
                            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 flex-shrink-0" /> {/* Smaller icon on mobile */}
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Email</h3> {/* Smaller text on mobile */}
                                <p className="text-sm sm:text-base text-gray-300">echeverrijulian100@gmail.com</p> {/* Smaller text on mobile */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="bg-gray-800/50
                         border border-gray-700 backdrop-blur-sm hover:bg-gray-800/70
                         transition-colors duration-200 p-6 rounded-lg"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <div className="relative">
                                    <UserRound className="h-5 w-5 text-green-400 absolute left-3 top-3" />
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="h-5 w-5 text-green-400 absolute left-3 top-3" />
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-black/20 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isSubmitting}
                                className="w-full bg-green-400/10 border border-green-400 text-green-400 px-6 py-3 rounded-lg hover:bg-green-400/20 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="h-4 w-4 border-2 border-green-400 rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>

                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${submitStatus === 'success'
                                        ? 'bg-green-400/10 border border-green-400'
                                        : 'bg-red-400/10 border border-red-400'
                                        }`}
                                >
                                    <p className="text-sm">
                                        {submitStatus === 'success'
                                            ? 'Message sent successfully! 🎉 \n i will get back to you ASAP.'
                                            : error || 'Failed to send message. Please try again.'}
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