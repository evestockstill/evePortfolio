import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const user = (
    <NavLink to='/aboutMe' className='links'>
      About
      <FontAwesomeIcon icon='user' className='fa' id='card'></FontAwesomeIcon>
    </NavLink>
  );
  const aboutMe = (
    <NavLink to='/resume' className='links'>
      Resume
      <FontAwesomeIcon
        icon='address-card'
        className='fa'
        id='user'
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
  const email = (
    <a
      target='_self'
      href='mailto:evestockstillpdx@gmail.com?'
      className='links'
    >
      Email
      <FontAwesomeIcon
        icon='envelope'
        className='fa'
        id='mail'
      ></FontAwesomeIcon>
    </a>
  );
  const home = (
    <NavLink to='/' className='links'>
      Home
      <FontAwesomeIcon icon='home' className='fa' id='home'></FontAwesomeIcon>
    </NavLink>
  );
  return (
    <>
      <nav>
        <ul>
          <li>{user}</li>
          <li>{aboutMe}</li>
          <li>{linkedIn}</li>
          <li>{github}</li>
          <li>{email}</li>
          <li>{home}</li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
