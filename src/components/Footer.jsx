import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import '../styles/css/footer.css'

const Footer = () => {
    return (
        <footer className='footer--container'>
            <Link target="_blank" to="https://github.com/Echek99">
                <FontAwesomeIcon className='social--icon' icon={faGithub} />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/echepj/">
                <FontAwesomeIcon className='social--icon' icon={faInstagram} />
            </Link>
            <Link target="_blank" to="https://twitter.com/echepj">
                <FontAwesomeIcon className='social--icon' icon={faTwitter} />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/in/julian-echeverri-7194bb247/">
                <FontAwesomeIcon className='social--icon' icon={faLinkedin} />
            </Link>
        </footer>
    );
}

export default Footer;
