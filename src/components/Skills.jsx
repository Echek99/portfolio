import React from 'react';
import '../styles/css/skills.css'
import styled from 'styled-components';

const Skills = () => {

    const skillsInfo = [
        {
            rank: 1,
            name: 'React',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077449940562886756/React-icon.png',
            sizeClass: 'rectangle'
        },
        {
            rank: 1,
            name: 'Javascript',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077430984137515008/JavaScript-logo.png',
            sizeClass: ''
        },
        {
            rank: 1,
            name: 'HTML5',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077650163050496000/HTML5_logo_and_wordmark.svg.png',
            sizeClass: ''
        },
        {
            rank: 1,
            name: 'CSS3',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077649825169952850/css3-logo-png-transparent.png',
            sizeClass: ''
        },
        {
            rank: 3,
            name: 'Solidity',
            level: 'Basic/Beginner',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077449939782750238/1200px-Solidity_logo.svg.png',
            sizeClass: 'tall'
        },
        {
            rank: 2,
            name: 'Linux',
            level: 'Intermediate',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077449940030206014/linux-logo-logo-brands-for-0.png',
            sizeClass: ''
        },
        {
            rank: 2,
            name: 'MySQL',
            level: 'Intermediate',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077449940877463572/MySQL-Logo.wine.png',
            sizeClass: ''
        },
        {
            rank: 3,
            name: 'Rails',
            level: 'Basic/Beginner',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077449941091364924/Ruby_On_Rails_Logo.svg.png',
            sizeClass: 'long'
        },
        {
            rank: 1,
            name: 'Git',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077649826474360933/Git-Icon-1788C.png',
            sizeClass: ''
        },
        {
            rank: 1,
            name: 'Github',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077649826113663037/github-logo-5F384D0265-seeklogo.com.png',
            sizeClass: ''
        },
        {
            rank: 2,
            name: 'Firebase',
            level: 'Intermediate',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077458954503848088/5847f40ecef1014c0b5e488a.png',
            sizeClass: 'tall'
        },
        {
            rank: 3,
            name: 'Azure',
            level: 'Basic/Beginner',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077458954721964062/azure.png',
            sizeClass: ''
        },
        {
            rank: 1,
            name: 'NPM',
            level: 'Advanced/Expert',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077649825853603910/540px-Npm-logo.svg.png',
            sizeClass: 'long'
        },
        {
            rank: 2,
            name: 'Gimp',
            level: 'Intermediate',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077719793383256084/The_GIMP_icon_-_gnome.svg.png',
            sizeClass: ''
        },
    ]

    return (
        <div className='skills--container'>
            {skillsInfo.map((e,index) => {
                return(
                    <div className='skill--container' key={index}>
                        <img
                            className={'skill--image ' + e.sizeClass}
                            src={e.image}
                            alt={`${e.name} logo`} 
                        />
                        <h1 className='skill--name'>{e.name}</h1>
                        <StyledLevel rank={e.rank}>{e.level}</StyledLevel>
                    </div>
                )
            })}
        </div>
    );
}

const StyledLevel = styled.p`
    color: ${props => props.rank === 1 ? '#5b8c5a' : props.rank === 2 ? '#ffd662' : '#5f7ce6'}
`

export default Skills;
