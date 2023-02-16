import React from 'react';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import FireBase from '../../assets/firebase.png';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Mongo from '../../assets/mongo.png';
import './skills.css';

const Skills = () => {
  return (
    <div name='skills' className='skills__container'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 w-full sm:auto'>
          <div>
          <h2 className="section__title">Skills</h2>
          </div>

          <div className='skills__grid'>
              <div className='skills__card'>
                  <img className='skills__img' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;