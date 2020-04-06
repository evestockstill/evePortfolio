import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AboutMain.scss';

const AboutMain = () => {
  const down = (
    <FontAwesomeIcon
      icon='angle-down'
      className='fafa'
      id='down'
    ></FontAwesomeIcon>
  );
  return (
    <>
      <section id='projects-about'>
        <div className='title'>
          <div className='title-text'>
            {/* <h1>Lets Talk About Me</h1> */}
          </div>
        </div>
        <div className='project-container-about'>
          <article className='project-item-about project-item-black-about'>
            <div className='front-text-about'>
              {down}
              <h1>What I Do</h1>
          {/* <img src={pool} className='poolImg'></img> */}
            </div>
            <div className='back-text-about'>
              {/* <h1>What I Do</h1> */}

              <p>
                              I spent 20 years being an active listener and excellent advice
                              giver all while making fabulous cocktails. The flexibility of bartending paved the way for me to
                              pursue my passion for billiards. I
                              dedicated years of practice to win state championships, and even
                              got to travel for a few professional pool tournaments. These days I
                              play in local leagues. I enjoying sharing my knowledge, good
                              sportsmanship, and great teammates. I
                              even started up a meetup for software developers to network and
                              play pool! Software Engineers talent pool. I enjoy creative
                              development with a drive for front end development. I like
                              component style architect with Sass or PostCSS to build reusable
                              styles throughout a project. I have projects using React, Redux,
                              Node.js, mongoDB. My best language is JavaScript but currently
                              branching out with some online courses. I enjoy reading and
                              learning new techniques to make clean, interesting
                              designs using best practices with user experience in mind. When not working on new code I enjoy
                              spoiling my dog Isla. She holds all my attention and we like going
                              to parks, hiking trails, and camp trips. 

              </p>
              {/* <button className='btn'>{githubPet}</button>
              <button className='btn'>{petWeb}</button> */}
            </div>
          </article>
          
         
         
        </div>
      </section>
    </>
  );
};
export default AboutMain;
