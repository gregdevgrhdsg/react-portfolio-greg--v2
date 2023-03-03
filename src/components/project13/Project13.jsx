import React from 'react';
import { Link } from 'react-router-dom';
import Prj13 from '../../assets/projects/Projet13.jpg';
import Prj14 from '../../assets/projects/Projet14.jpg';
import './project13.css';

const Project13 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Fenomen 404</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj13} alt="HTML icon" />
             <img className='skills__img__prj' src={Prj14} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project13;