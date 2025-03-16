import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
    return (
        <div className="flex gap-6 justify-center items-center py-4">
            <a
                href="https://github.com/Echek99"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="text-6xl hover:text-green-400 transition-colors cursor-pointer"
                />
            </a>
            <a
                href="https://www.instagram.com/echesinho"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-6xl hover:text-green-400 transition-colors cursor-pointer"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/julian-echeverri-7194bb247/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-6xl hover:text-green-400 transition-colors cursor-pointer"
                />
            </a>
        </div>
    );
};

export default SocialIcons