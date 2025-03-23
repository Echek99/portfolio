import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
    return (
        <div className="flex gap-4 justify-center items-center">
            {[
                { icon: faGithub, url: "https://github.com/Echek99" },
                { icon: faInstagram, url: "https://www.instagram.com/echesinho" },
                { icon: faLinkedin, url: "https://www.linkedin.com/in/julian-echeverri-7194bb247/" }
            ].map((social, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:bg-indigo-900/20 transition-all duration-300 group relative"
                    >
                        <FontAwesomeIcon
                            icon={social.icon}
                            className="text-5xl text-gray-300 group-hover:text-indigo-300 transition-colors"
                            style={{
                                textShadow: "0 2px 8px rgba(165, 180, 252, 0.2)"
                            }}
                        />
                    </a>
                </motion.div>
            ))}
        </div>
    );
};

export default SocialIcons;