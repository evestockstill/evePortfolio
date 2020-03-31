import React from 'react';
import '../resume/Resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  NavLink } from 'react-router-dom';

const Resume = () => {
  const Home = (
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
      {Home}
      {/* <div className='wrapper'>
        <Link className='linkhome' to='/'>
          Back
        </Link> */}
        <div className='resume'></div>
      {/* </div> */}
    </>
  );
};
export default Resume;
