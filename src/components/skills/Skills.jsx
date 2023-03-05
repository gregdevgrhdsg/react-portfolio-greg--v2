import React from 'react';
import PS from '../../assets/ps.png';
import ID from '../../assets/id.png';
import AI from '../../assets/ai.png';
import AE from '../../assets/ae.png';
import PR from '../../assets/pr.png';
import XD from '../../assets/xd.png';
import BL from '../../assets/blender.png';
import WP from '../../assets/wordpress.png';
import CSS from '../../assets/css.png';
import HTML from '../../assets/html.png';
import ReactImg from '../../assets/react.png';
import JS from '../../assets/javascript.png';
import GitHub from '../../assets/github.png';
import PY from '../../assets/python.png';
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
                  <img className='skills__img__3' src={PS} alt="HTML icon" />
                  <p className='my-4'>Photoshop</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img__3' src={ID} alt="HTML icon" />
                  <p className='my-4'>Indesign</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img__3' src={AI} alt="HTML icon" />
                  <p className='my-4'>Illustrator</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img__3' src={AE} alt="HTML icon" />
                  <p className='my-4'>After Effect</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img__3' src={PR} alt="HTML icon" />
                  <p className='my-4'>Première pro</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img__3' src={XD} alt="HTML icon" />
                  <p className='my-4'>Adobe xd</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={BL} alt="HTML icon" />
                  <p className='my-4'>Blender</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={WP} alt="HTML icon" />
                  <p className='my-4'>Wordpress</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={HTML} alt="HTML icon" />
                  <p className='my-4'>Html</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={CSS} alt="HTML icon" />
                  <p className='my-4'>Css</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={JS} alt="HTML icon" />
                  <p className='my-4'>Javascript</p>
              </div>
              <div className='skills__card'>
                  <img className='skills__img' src={PY} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;