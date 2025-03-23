import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
    return (
        <div className="flex gap-5 justify-center items-center">
            {[
                { icon: faGithub, url: "https://github.com/Echek99" },
                { icon: faInstagram, url: "https://www.instagram.com/echesinho" },
                { icon: faLinkedin, url: "https://www.linkedin.com/in/julian-echeverri-7194bb247/" }
            ].map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-green-400/30 hover:border-green-400/60 transition-all duration-200"

                >
                    <FontAwesomeIcon
                        icon={social.icon}
                        className="text-4xl text-green-300 hover:text-green-400 transition-colors cursor-pointer"
                        height={28}
                        width={28}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;