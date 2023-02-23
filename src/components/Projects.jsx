import React from 'react';
import '../styles/css/projects.css'
import Button from './Button';
import { Link } from 'react-router-dom';

const Projects = () => {

    const projectsInfo = [
        {
            name: 'Verseye',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1078090381880741938/image.png',
            desc: 'The website of a web3 project that i am running.',
            link: 'https://verseye.io/'
        },
        {
            name: 'Online Diary',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1078156514302382171/Screenshot_from_2023-02-22_22-28-01.png',
            desc: 'A blog where you can take private notes.',
            link: 'https://echek99.github.io/your-online-diary/'
        },
        {
            name: 'RodroCuentos',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1078159831690661928/kp.png',
            desc: 'A simple website i made for a friend.',
            link: 'https://echek99.github.io/rodrocuentos/'
        },
    ]

    return (
        <>
            <div className='projects--container'>
                <h1>Projects</h1>
                <div className='projects--inner__container'>
                    {projectsInfo.map((e, index) => {
                        return (
                            <div key={index} className='each--project__container'>
                                <Link target="_blank" to={e.link}>
                                    <h2 className='project--name'>{e.name}</h2>
                                    <img
                                        className='project--preview'
                                        src={e.image}
                                        alt="project preview"
                                    />
                                    <p className='project--desc'>{e.desc}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Button />
        </>
    );
}

export default Projects;
