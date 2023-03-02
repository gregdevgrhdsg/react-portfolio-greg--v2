import React from 'react';
import { Link } from 'react-router-dom';
import Prj4 from '../../assets/projects/Projet2.jpg';
import './project4.css';


const Project4 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Gesproweb</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj4} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project4;