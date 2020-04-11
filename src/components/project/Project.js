import React, { useState } from 'react';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = () => {
  const [open, setOpen] = useState(false);
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
    <a target='blank' href='https://pet-pals.netlify.com' className='linkbtn'>
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
      target='blank'
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
      target='blank'
      href='https://the-wild-cards.github.io/guess-who/'
      className='linkbtn'
    >
      Website
    </a>
  );
  const gitLegal = (
    <a
      target='_self'
      href='https://github.com/GLH-PDX-DevLaw'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const legalWeb = (
    <a
      target='_self'
      href='https://law.uoregon.edu/global-hackathon-law-students-explore-access-justice-tech'
      className='linkbtn'
    >
      Article
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
            <div
              onClick={() => setOpen(!open)}
              className={`frontText ${
                open ? 'frontText__open' : 'frontText__close'
              }`}
            >
              {down}
              <h1>Pet Pals</h1>
            </div>
            <div className='back-text'>
              <h1>Pet Pals</h1>
              <p>
                Pet Pals app connects neighbors and their dogs to each other in
                order to exchange a quick walk or break when working
                opposite shifts. I worked on design, developed with SASS for
                reusable component architecture. Wrote models with MongoDB and tested with Jest. Front end built with React.
              </p>
              <button className='btn'>{githubPet}</button>
              <button className='btn'>{petWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-white'>
            <div
              onClick={() => setOpen(!open)}
              className={`frontText ${
                open ? 'frontText__open' : 'frontText__close'
              }`}
            >
              {down}
              <h1>FrontPage</h1>
            </div>
            <div className='back-text'>
              <h1>FrontPage</h1>
              <p>
                Front-page is a news aggregating app with a Tinder like
                interface. Developed with small team in a 4-day sprint. Mobile
                first design. Dev practices include mob, and pair programing for
                an efficient and collaborative environment. HTML/CSS,
                JavaScript, PostgreSQL, Component architecture, Q-Unit.
              </p>
              <button className='btn'>{gitFront}</button>
              <button className='btn'>{frontWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-black'>
            <div
              onClick={() => setOpen(!open)}
              className={`frontText ${
                open ? 'frontText__open' : 'frontText__close'
              }`}
            >
              {down}
              <h1>Guess Who</h1>
            </div>
            <div className='back-text'>
              <h1>Guess Who</h1>
              <p>
                Guess who? Updating the old game, with current times. Guess to
                eliminate characters and win by making a correct guess. Using
                local storage to persist user data and leader boards. Javascript
                logic to determine users input. Responsible for the game board
                animations and styling with HTML/CSS
              </p>
              <button className='btn'>{gitGuess}</button>
              <button className='btn'>{guessWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-white'>
            <div
              onClick={() => setOpen(!open)}
              className={`frontText ${
                open ? 'frontText__open' : 'frontText__close'
              }`}
            >
              {down}
              <h1>Music Search</h1>
            </div>
            <div className='back-text'>
              <h1>Music Search</h1>
              <p>
                Music Search is an app that lets you search artist by name to
                find albums and lyrics. Functionality created using custom hooks
                and React. Queried 3 API's to produce a single page app. 3
                person 1 day project, another 2 days to design 
                with PostCSS including logic for loading spinner and default
                images.
              </p>
              <button className='btn'>{githubMusic}</button>
              <button className='btn'>{musicWeb}</button>
            </div>
          </article>
          <article className='project-item project-item-black'>
            <div
              onClick={() => setOpen(!open)}
              className={`frontText ${
                open ? 'frontText__open' : 'frontText__close'
              }`}
            >
              {down}
              <h1>Legal Router</h1>
            </div>
            <div className='back-text'>
              <h1>Legal Router</h1>
              <p>
                Developed at a hackathon on a team of 4 devs
                and 2 law students in 1.5 days. The app was built
                specifically for low-income families who need legal
                assistance focusing on domestic violence. I styled the mobile
                first design with PostCSS. Link is to a write up and demo of app
                in University of Oregon Law department
              </p>
              <button className='btn'>{gitLegal}</button>
              <button className='btn'>{legalWeb}</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Project;
