import React from 'react';
import './About.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picture from '../picture/Picture';
import Slider from '../slider/Slider';

const AboutMe = () => {
  const returnHome = (
    <NavLink to='/' className='return-home'>
      <FontAwesomeIcon
        icon='backward'
        className='faback1'
        id='about-back'
      ></FontAwesomeIcon>
    </NavLink>
  );
  return (
    <>
      <header className='hero'>
        <p>{returnHome}</p>
      </header>
      <Picture />
      <Slider />
    </>
  );
};
export default AboutMe;
