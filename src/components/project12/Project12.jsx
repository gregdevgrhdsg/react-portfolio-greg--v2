import React from 'react';
import { Link } from 'react-router-dom';
import Prj12 from '../../assets/projects/Projet12.jpg';
import './project12.css';

const Project12 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Marline</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj12} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project12;