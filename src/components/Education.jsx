import React from 'react';
import '../styles/css/education.css'
const Education = () => {

    const educationInfo = [
        {
            name: 'Platzi',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077801498358067290/2975064.png',
        },
        {
            name: 'Udemy',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077801498072858624/udemy-1-logo-png-transparent.png',
        },
        {
            name: 'Youtube',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077812940394205244/youtube-logo-hd-8.png',
            modifiedClass: 'youtube--logo'
        },
        {
            name: 'FreeCodeCamp',
            image: 'https://cdn.discordapp.com/attachments/922917249919098971/1077804360551104512/qTgTIejk_400x400.jpg',
        },
    ]

    return (
        <div className='education--container'>
            <div className='education--self__container'>
                <div className='education--self__title'>
                    <h1>Where did i learned Software development?</h1>
                    <p>Basically... on the internet. <br />I gained my web development skills from a variety of online learning platforms, including Pluralsight, Udemy, FreeCodeCamp, and YouTube. Through these resources, I acquired a solid foundation in programming languages such as HTML, CSS, and JavaScript, as well as other essential tools and frameworks needed to build dynamic and functional web applications.</p>
                </div>
                <div className='education--self__info'>
                    {educationInfo.map((e, index) => {
                        return (
                            <div className='each--self__info' key={index}>
                                <h1>{e.name}</h1>
                                <img
                                    src={e.image}
                                    alt={e.name + ' logo'}
                                    className={e.modifiedClass + ' education--self__image'}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='education--regular__container'>
                <h1>High School 2009-2021</h1>
                <div className='education--regular__info'>
                    <img
                        src="https://cdn.discordapp.com/attachments/922917249919098971/1077792497637523546/logo_principal.png"
                        alt="High School logo"
                        className='education--regular__image'
                    />
                    <p>I completed my high school education at Colegio Colombo Frances, a prestigious bilingual school located in Medellin, Colombia.</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
