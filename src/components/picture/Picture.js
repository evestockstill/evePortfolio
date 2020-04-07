import React from 'react';
import './Picture.scss';

const Picture = () => {
  return (
    <>
      <div className='picture__wrap'>
        <div className='reflection'></div>
      </div>
      <div className='my__article-wrapper'>
        <article className='my__article-text'>
          <h1>What I Do</h1>
          <p>
            I spent 20 years being an active listener and excellent advice giver
            all while making fabulous cocktails. The flexibility of bartending
            paved the way for me to pursue my passion for billiards. I dedicated
            years of practice to win state championships, and even got to travel
            for a few professional pool tournaments. These days I play in local
            leagues. I enjoying sharing my knowledge, good sportsmanship, and
            great teammates. I even started Software Engineers Talent Pool, a
            meetup for software developers to network while playing pool! I enjoy being
            creative  and have a drive for front end development. I like
            component style architect with Sass or PostCSS to build reusable
            styles throughout a project. I have projects using React, Redux,
            Node.js, mongoDB. My best language is JavaScript but currently
            branching out with some online courses. I enjoy reading and learning
            new techniques to make clean, interesting designs using best
            practices with user experience in mind. When not working on new code
            I enjoy spoiling my dog Isla. She holds all my attention and we like
            going to parks, hiking trails, and camp trips.
          </p>
        </article>
      </div>
    </>
  );
};
export default Picture;
