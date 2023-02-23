import React from 'react';
import '../styles/css/intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Skills from './Skills';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className='intro--container'>
                <div className='intro--info__container'>
                    <h1>Julian Echeverri</h1>
                    <img
                        className='intro--picture'
                        src="https://cdn.discordapp.com/attachments/878971364629942302/1078042513044152372/IMG_20221220_151657_HDR.jpg" 
                        alt="Julian Picture" 
                    />
                    <p>Web Developer.</p>
                    <div className='intro--location__container'>
                        <FontAwesomeIcon className='location--icon' icon={faLocationDot}/>
                        <p>New York, NY</p>
                    </div>
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
                </div>
                <div className='intro--desc__container'>
                    <p>Hello there! I'm Julian, a self-taught web developer from Colombia with over 3 years of experience in the field. Fluent in Spanish and English, and with a basic knowledge of French, I have a passion for soccer, philosophy, music, and of course, programming! I'm excited to connect with like-minded individuals, so feel free to reach out to me anytime. Looking forward to hearing from you soon!</p>
                </div>
            </div>
            <Skills />
        </>
    );
}

export default Intro;
