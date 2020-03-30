import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
// import Resume from '../resume/Resume';

const Nav = () => {
  const user = (
    <NavLink to='/resume' className='links'>
      Resume
      <FontAwesomeIcon
        icon='user'
        className='fa'
        id='resume'
      ></FontAwesomeIcon>
    </NavLink>
  );
  const linkedIn = (
    <a
      target='_self'
      href='https://www.linkedin.com/in/evestockstill/'
      className='links'
    >
      LinkedIn
      <FontAwesomeIcon
        icon={['fab', 'linkedin']}
        className='fa'
        id='linkedin'
      ></FontAwesomeIcon>
    </a>
  );
  const github = (
    <a
      target='_self'
      href='https://www.github.com/evestockstill'
      className='links'
    >
      Github
      <FontAwesomeIcon
        icon={['fab', 'github']}
        className='fa'
        id='github'
      ></FontAwesomeIcon>
    </a>
  );
  return (
    <>
      <nav>
        <ul>
          <li>{user}</li>
          <li>{linkedIn}</li>
          <li>{github}</li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
