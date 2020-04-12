import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const linkedIn = (
    <a
      target='_self'
      href='https://www.linkedin.com/in/evestockstill/'
      className='links'
    >
      <FontAwesomeIcon
        icon={['fab', 'linkedin']}
        className='my-footer__icon'
        id='linkedin'
      ></FontAwesomeIcon>
    </a>
  );
  const github = (
    <a
      target='_self'
      href='https://www.github.com/evestockstill'
      className='my-footer__icon'
    >
      <FontAwesomeIcon
        icon={['fab', 'github']}
        className='my-footer__icon'
        id='github'
      ></FontAwesomeIcon>
    </a>
  );
  const email = (
    <a
      target='_self'
      href='mailto:evestockstillpdx@gmail.com?'
      className='my-footer__icon'
    >
      <FontAwesomeIcon
        icon='envelope'
        className='my-footer__icon'
        id='mail'
      ></FontAwesomeIcon>
    </a>
  );
  return (
    <>
      <div className='footer-wrapper'>
        <div className='logo'></div>
        <div className='name-box'>
          <h3 className='name-box__name'>&copy; 2020 Eve Stockstill</h3>
        </div>
        <footer className='my-footer'>
          <div className='my-footer__icon-box'>{github}</div>
          <div className='my-footer__icon-box'>{linkedIn}</div>
          <div className='my-footer__icon-box'>{email}</div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
