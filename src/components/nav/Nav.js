import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const user = (
    <NavLink to='/aboutMe' className='links'>
      About
    </NavLink>
  );
  const aboutMe = (
    <NavLink to='/resume' className='links'>
      Resume
    </NavLink>
  );
  const linkedIn = (
    <a
      target='blank'
      href='https://www.linkedin.com/in/evestockstill/'
      className='links'
    >
      LinkedIn
    </a>
  );
  const github = (
    <a
      target='blank'
      href='https://www.github.com/evestockstill'
      className='links'
    >
      Github
    </a>
  );
  const email = (
    <a
      target='blank'
      href='mailto:evestockstillpdx@gmail.com?'
      className='links'
    >
      Email
    </a>
  );
  const home = (
    <NavLink to='/' className='links'>
      Projects
    </NavLink>
  );
  return (
    <>
      <nav>
        <ul>
          <li>{user}</li>
          <li>{home}</li>
          {/* <li>{aboutMe}</li> */}
          <li>{linkedIn}</li>
          <li>{github}</li>
          <li>{email}</li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
