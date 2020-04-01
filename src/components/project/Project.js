import React from 'react';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import pet from '../assets/pattern.jpeg';


const Project = () => {
  const githubPet = (
    <a
      target='_self'
      href='https://github.com/Pet-Project-Alchemy'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const petWeb = (
    <a
      target='_self'
      href='https://pet-pals-staging.netlify.com/'
      className='linkbtn'
    >
      Website
    </a>
  );
  const githubMusic = (
    <a
      target='_self'
      href='https://github.com/evestockstill/musicLab'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const musicWeb = (
    <a href='https://elastic-goldberg-d50ed5.netlify.com' className='linkbtn'>
      Website
    </a>
  );
  const gitFront = (
    <a
      target='_self'
      href='https://github.com/Alchemy-Frontpage'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const frontWeb = (
    <a
      target='_self'
      href='https://front-pagenews.herokuapp.com/'
      className='linkbtn'
    >
      Website
    </a>
  );
  const gitGuess = (
    <a
      target='_self'
      href='https://github.com/The-Wild-Cards/guess-who'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const guessWeb = (
    <a
      target='_self'
      href='https://the-wild-cards.github.io/guess-who/'
      className='linkbtn'
    >
      Website
    </a>
  );
  const down = (
    <FontAwesomeIcon
      icon='angle-down'
      className='fafa'
      id='down'
    ></FontAwesomeIcon>
  );
  return (
    <>
      <section id='projects'>
        <div className='title'>
          <div className='title-text'>
            <h1>Projects</h1>
          </div>
        </div>
        <div className='project-container'>
          <article className='project-item project-item-black'>
            <div className='front-text'>
              {down}
              <h1>Pet Pals</h1>
            </div>
            <div className='back-text'>
              <h1>Pet Pals</h1>

              <p>
                Pet Pals is an app that connects neighbors and their dogs to
                each other to exchange a quick walk or bathroom break when
                working opposite shifts. Done in a week long sprint with mob,
                pair, and solo coding. I worked on the overall design, styling and helped created models and routes. 
                React, Hooks, MongoDB, socket.io, SASS, npx, Jest
              </p>
              <button className='btn'>{githubPet}</button>
              <button className='btn'>{petWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-white'>
            <div className='front-text'>
              {down}
              <h1>FrontPage</h1>
            </div>
            <div className='back-text'>
              <h1>FrontPage</h1>
              <p>
                Front-page is a news aggregating app with a Tinderesque
                interface. Developed in a small team over a 4-day sprint. Built
                using a mobile first design. Dev practices include mob, and pair
                programing for an efficient and collaborative environment.
                 HTML/CSS, JavaScript, PostgreSQL, Component
                architecture, Q-Unit testing
              </p>
              <button className='btn'>{gitFront}</button>
              <button className='btn'>{frontWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-black'>
            <div className='front-text'>
              {down}
              <h1>Guess Who</h1>
            </div>
            <div className='back-text'>
              <h1>Guess Who</h1>
              <p>
                Guess who? Updating the old game with
                conscientious decisions to exclude gender and race questions
                to reflect current times. Guess to eliminate characters and win by making a correct guess.
                Using local storage to persist user
                data and leader boards. Responsible for the game board
                animations and styling. Vanilla JavaScript,
                HTML/CSS
              </p>
              <button className='btn'>{gitGuess}</button>
              <button className='btn'>{guessWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-white'>
            <div className='front-text'>
              {down}
              <h1>Music Search</h1>
            </div>
            <div className='back-text'>
              <h1>Music Search</h1>
              <p>
                Music Search is a app that lets you search music artist by name.
                Search through the artist to find albums. Choose album to find songs, and choose song to
                discover lyrics. Functionality created in a team of 3 in a 2 day
                sprint. I used another 2 days to design site. 
                React, custom Hooks, REST APIs, and PostCSS
              </p>
              <button className='btn'>{githubMusic}</button>
              <button className='btn'>{musicWeb}</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Project;
