import React from 'react';
import './About.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pool from '../assets/mepool5.png';
import isla from '../assets/islagrass.png';
import mp4 from '../assets/glitter.mp4';

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
      <p>{returnHome}</p>
      <header className='hero'>
        <div className='bg-video1'>
          <video className='bg-video1__content' autoPlay muted loop>
            <source src={mp4} type='video/mp4' alt='video' />
            your browser not supported
          </video>
        </div>
        <h1 className='greeting'>Hello</h1>
      </header>

      <section className='section-aboutMe'>
        <div className='big-picture'></div>
        
        <div className='about'>
          <figure className='about__shape'>
            <img src={pool} alt='photo 1' className='about__img'></img>
            <figcaption className='about__caption'>Eve</figcaption>
          </figure>
          <div className='about__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Lets talk about me
            </h3>
            <p>
              I spent 20 years being an active listener and excellent advice
              giver all while making fabulous cocktails. I believe in good
              customer service and the ability to collaborate and enjoy
              coworkers. The flexibility of bartending paved the way for me to
              pursue my passion for billiards reaching professional status. I
              dedicated years of practice to win state championships, and even
              got to travel for some professional pool tournaments. These days I
              play in local leagues. I enjoying sharing my knowledge, good
              sportsmanship, and love of the game through example and advice. I
              even started up a meetup for software developers to network and
              play pool! Software Engineers talent pool. I look forward to being
              able to start that back up. When not working on new code I enjoy
              spoiling my dog Isla. She holds all my attention and we like going
              to parks and hiking trails, and camp trips. I enjoy creative
              development with a drive for front end development.I like
              component style architect with Sass or PostCSS to build reusable
              styles throughout a project.I have projects using React, Redux,
              Node.js, mongoDB.My best language is JavaScript but currently
              branching out with some online courses.I enjoy reading and
              learning new style techniques to make clean and interesting
              designs using best practices, and user experience in mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
