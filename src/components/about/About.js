import React from 'react';
import './About.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dog from '../assets/isla.png';
import hero from '../assets/profile.png';
import pool from '../assets/mepool5.png';
import camp from '../assets/camp2.jpg';
import mp4 from '../assets/glitter.mp4';

const AboutMe = () => {
  const returnHome = (
    <NavLink to='/' className='return-home'>
      <FontAwesomeIcon
        icon='backward'
        className='faback'
        id='back'
      ></FontAwesomeIcon>
    </NavLink>
  );
  return (
    <>
      <header className='hero'>
        <div className='bg-video1'>
          <p>{returnHome}</p>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={mp4} type='video/mp4' alt='video' />
            your browser not supported
          </video>
        </div>
        <h1 className='greeting'>Hello</h1>
      </header>
      <section className='about'>
        <div className='about-container'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sit
          itaque odit vel consectetur maxime porro consequatur, unde accusamus
          recusandae distinctio ratione, aspernatur eum delectus! Quaerat
          repellendus eligendi illo similique?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sit
          itaque odit vel consectetur maxime porro consequatur, unde accusamus
          recusandae distinctio ratione, aspernatur eum delectus! Quaerat
          repellendus eligendi illo similique?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sit
          itaque odit vel consectetur maxime porro consequatur, unde accusamus
          recusandae distinctio ratione, aspernatur eum delectus! Quaerat
          repellendus eligendi illo similique?
        </div>
        <div className='composition'>
          <img
            src={pool}
            alt='photo 1'
            className='composition__photo composition__photo--p1'
          ></img>
          <img
            src={camp}
            alt='photo 2'
            className='composition__photo composition__photo--p2'
          ></img>
          <img
            src={dog}
            alt='photo 3'
            className='composition__photo composition__photo--p3'
          ></img>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
