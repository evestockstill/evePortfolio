import React from 'react';
import './About.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mp4 from '../assets/glitter.mp4';
// import Nav from '../nav/Nav';
import AboutMain from '../aboutMain/AboutMain';
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
      {/* <p>{returnHome}</p> */}

      <header className='hero'>
        {/* <Nav /> */}
        <div className='bg-video1'>
          {/* <video className='bg-video1__content' autoPlay muted loop>
            <source src={mp4} type='video/mp4' alt='video' />
            your browser not supported
          </video> */}
        </div>
        <p>{returnHome}</p>

        {/* <h1 className='greeting'>Hello</h1> */}
      </header>
      <Picture />
      {/* <AboutMain /> */}
      <Slider />
      {/* <Slider /> */}
    </>
  );
};
export default AboutMe;
