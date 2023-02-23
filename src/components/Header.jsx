import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon, faFish, faHippo, faOtter, faKiwiBird, faWorm, faSpider, faShrimp, faMosquito, faLocust, faHorse, faFrog, faDove, faDog, faCrow, faCow, faCat, faBug } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const items = [
  { icon: faDragon },
  { icon: faFish },
  { icon: faHippo },
  { icon: faOtter },
  { icon: faKiwiBird },
  { icon: faWorm },
  { icon: faSpider },
  { icon: faShrimp },
  { icon: faMosquito },
  { icon: faLocust },
  { icon: faHorse },
  { icon: faFrog },
  { icon: faDove },
  { icon: faDog },
  { icon: faCrow },
  { icon: faCow },
  { icon: faCat },
  { icon: faBug },
];

const Header = () => {
  const [icon, setIcon] = useState(null);
  const [previousItem, setPreviousItem] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIcon(getRandomItem());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  function getRandomItem() {
    let item = null;
    do {
      item = items[Math.floor(Math.random() * items.length)];
    } while (item === previousItem);
    setPreviousItem(item);
    return item.icon;
  }

  return (
    <StyledHeader>
      <div className='header--icon__container'>
        {icon &&
          <FontAwesomeIcon
            className='header--icon'
            icon={icon}
            bounce
            onClick={() => window.scrollTo(0, 0)}
          />
        }
      </div>
      <div className='header--buttons__container'>
        <NavLink className='header--buttons__link' to="/">HOME</NavLink>
        <NavLink className='header--buttons__link' to="/projects">PROJECTS</NavLink>
        <NavLink className='header--buttons__link' to="/education">EDUCATION</NavLink>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #495d83;
  background-color: #1a212e;
  width: 100%;
`


export default Header;
