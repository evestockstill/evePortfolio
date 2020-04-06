import React from 'react';
import './Slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon7 from '../assets/net.svg';
import icon8 from '../assets/mongo.svg';
import icon9 from '../assets/jest.svg';
import icon10 from '../assets/vs.svg';
import icon11 from '../assets/shell.svg';

const Slider = () => {
  const icon1 = (
    <FontAwesomeIcon
      icon={['fab', 'github-square']}
      className='icons'
      id='icon1'
    ></FontAwesomeIcon>
  );
  const icon2 = (
    <FontAwesomeIcon
      icon={['fab', 'react']}
      className='icons'
      id='icon2'
    ></FontAwesomeIcon>
  );
  const icon3 = (
    <FontAwesomeIcon icon={['fab', 'node-js']} className='icons' id='icon2'>
      NodeJs
    </FontAwesomeIcon>
  );
  const icon4 = (
    <FontAwesomeIcon
      icon={['fab', 'js-square']}
      className='icons'
      id='icon2'
    ></FontAwesomeIcon>
  );
  const icon5 = (
    <FontAwesomeIcon
      icon={['fab', 'sass']}
      className='icons'
      id='icon2'
    ></FontAwesomeIcon>
  );
  const icon6 = (
    <FontAwesomeIcon
      icon={['fab', 'css3-alt']}
      className='icons'
      id='icon2'
    ></FontAwesomeIcon>
  );
  const icon77 = <img id='icon7' className='icons' src={icon7}></img>;
  const icon88 = <img id='icon8' className='icons' src={icon8}></img>;
  const icon99 = <img id='icon9' className='icons' src={icon9}></img>;
  const icon1010 = <img id='icon10' className='icons' src={icon10}></img>;
  const icon1111 = <img id='icon11' className='icons' src={icon11}></img>;

  return (
    <>
      <div className='wrapper'>
        <div className='slider__wrap'>
          <div className='img__wrap'>
            {icon1}
            <span className='icon-title'>github</span>
            {icon2}
            <span className='icon-title'>React</span>
            {icon77}
            <span className='icon-title'>Netlify</span>
            {icon4}
            <span className='icon-title'>JavaScript</span>
            {icon99}
            <span className='icon-title'>Jest</span>
            {icon6}
            <span className='icon-title'>CSS</span>
            {icon3}
            <span className='icon-title'>Node js</span>
            {icon88}
            <span className='icon-title'>mongoDb</span>
            {icon5}
            <span className='icon-title'>Sass</span>
            {icon1010}
            <span className='icon-title'>VS Code</span>
            {icon1111}
            <span className='icon-title'>Shell</span>
          </div>
          <div className='img__wrap'>
            {icon1}
            <span className='icon-title'>github</span>
            {icon2}
            <span className='icon-title'>React</span>
            {icon77}
            <span className='icon-title'>Netlify</span>
            {icon4}
            <span className='icon-title'>JavaScript</span>
            {icon99}
            <span className='icon-title'>Jest</span>
            {icon6}
            <span className='icon-title'>CSS</span>
            {icon3}
            <span className='icon-title'>Node js</span>
            {icon88}
            <span className='icon-title'>mongoDb</span>
            {icon5}
            <span className='icon-title'>Sass</span>
            {icon1010}
            <span className='icon-title'>VS Code</span>
            {icon1111}
            <span className='icon-title'>Shell</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
