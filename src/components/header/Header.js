import React from 'react';
import './Header.scss';
import mp4 from '../assets/glitter.mp4';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='background'>
          <header className='header'>
            <Nav />
            <div className='bg-video'>
              <video className='bg-video__content' autoPlay muted loop>
                <source src={mp4} type='video/mp4' alt='video' />
                your browser not supported
              </video>
            </div>
            <span className='background-border'></span>
            <div id='wrapper' className='animation'>
              <span className='first-wrapper'>
                <h2 className='first'>Eve</h2>
              </span>
              <span className='last-wrapper'>
                <h2 className='text' data='.'>
                  Stockstill
                </h2>
              </span>
              <span className='title'>Full Stack Developer</span>
            </div>
          </header>
          {/* <div>
            <Project />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Header;


