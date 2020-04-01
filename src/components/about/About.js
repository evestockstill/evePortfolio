import React from 'react';
import './About.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dog from '../assets/isla.png';
import hero from '../assets/profile.png';
import pool from '../assets/mepool5.png';
import camp from '../assets/camp2.jpg';
import isla from '../assets/islagrass.png';
import mp4 from '../assets/glitter.mp4';

const AboutMe = () => {
  const returnHome = (
    <NavLink to='/' className='return-home'>
      <FontAwesomeIcon
        icon='backward'
        className='faback1'
        id='about-back'
      ></FontAwesomeIcon>
    </NavLink>
  );
  return (
    <>
      <p>{returnHome}</p>
      <header className='hero'>
        <div className='bg-video1'>
          {/* <p>{returnHome}</p> */}
          <video className='bg-video1__content' autoPlay muted loop>
            <source src={mp4} type='video/mp4' alt='video' />
            your browser not supported
          </video>
        </div>
        {/* <p>{returnHome}</p> */}
        <h1 className='greeting'>Hello</h1>
      </header>
      <h2 className='intro'>Little Bit About Me</h2>
      <div className='center'>
        <div className='about-wrapper'>
          <section className='comp'>
            <img src={pool} alt='photo 1' className='img1'></img>
            <img src={isla} alt='photo 1' className='img2'></img>

            {/* <h2 className='intro'>Little Bit About Me</h2> */}
            <p className='about-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              dignissimos amet doloremque. Voluptatem, a provident mollitia
              suscipit quod minima natus exercitationem iste placeat cumque
              itaque, distinctio quisquam, praesentium corporis doloribus modi
              possimus sint. Illo rem similique non recusandae nam ipsam
              deserunt accusamus quia iste placeat, adipisci nisi quibusdam
              ratione fuga reiciendis blanditiis quae minima labore et
              temporibus amet qui, eius quasi! Eveniet aliquam deleniti
              laudantium sunt placeat architecto dolor, neque nemo? Animi ipsum
              deleniti, repudiandae sequi illum ab repellat voluptatibus
              voluptate culpa. Quam soluta, quo minima maiores nihil saepe
              incidunt ipsam ullam vel molestiae dolorum numquam? Voluptatem ab
              quam recusandae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores dignissimos amet doloremque. Voluptatem,
              a provident mollitia suscipit quod minima natus exercitationem
              iste placeat cumque itaque, distinctio quisquam, praesentium
              corporis doloribus modi possimus sint. Illo rem similique non
              recusandae nam ipsam deserunt accusamus quia iste placeat,
              adipisci nisi quibusdam ratione fuga reiciendis blanditiis quae
              minima labore et temporibus amet qui, eius quasi! Eveniet aliquam
              deleniti laudantium sunt placeat architecto dolor, neque nemo?
              Animi ipsum deleniti, repudiandae sequi illum ab repellat
              voluptatibus voluptate culpa. Quam soluta, quo minima maiores
              nihil saepe incidunt ipsam ullam vel molestiae dolorum numquam?
              Voluptatem ab quam recusandae.
            </p>
          </section>
        </div>
      </div>

      {/* <section className='composition'>
        <div className='composition__photo composition__photo--p1'>
          <img src={pool} alt='photo 1'></img>
        </div>
        <div>

            <h2 className='into'>Little Bit About Me</h2>
            <p className='about-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              dignissimos amet doloremque. Voluptatem, a provident mollitia
              suscipit quod minima natus exercitationem iste placeat cumque
              itaque, distinctio quisquam, praesentium corporis doloribus modi
              possimus sint. Illo rem similique non recusandae nam ipsam
              deserunt accusamus quia iste placeat, adipisci nisi quibusdam
              ratione fuga reiciendis blanditiis quae minima labore et
              temporibus amet qui, eius quasi! Eveniet aliquam deleniti
              laudantium sunt placeat architecto dolor, neque nemo? Animi ipsum
              deleniti, repudiandae sequi illum ab repellat voluptatibus
              voluptate culpa. Quam soluta, quo minima maiores nihil saepe
              incidunt ipsam ullam vel molestiae dolorum numquam? Voluptatem ab
              quam recusandae.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutMe;
