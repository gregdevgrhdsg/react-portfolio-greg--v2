import React from 'react';
import { Link } from 'react-router-dom';
import Prj15 from '../../assets/projects/Projet15.jpg';
import Prj16 from '../../assets/projects/Projet16.jpg';
import './project14.css';

const Project14 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Bureau Vallée</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj15} alt="HTML icon" />
             <img className='skills__img__prj' src={Prj16} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project14;