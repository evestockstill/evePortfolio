import React from 'react';
import '../resume/Resume.scss';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>
      <div className='wrapper'>
        <Link className='linkhome' to='/'>Back</Link>
        <div className='resume'> 
       
        </div>
      </div>
    </>
  );
};
export default Resume;
