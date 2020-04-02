import React from 'react';
import './Header.scss';
import mp4 from '../assets/glitter.mp4';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <>
      <header className='header'>
        <Nav />
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={mp4} type='video/mp4' alt='video' />
            your browser not supported
          </video>
        </div>
        <div className='center-heading'>
          <h2 className='title-text first1'>Eve</h2>
          <h2 className='title-text second2' data='.'>
            Stockstill
          </h2>
          <div className=''>
            <h4 className='title-text third3'>Software Developer</h4>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
