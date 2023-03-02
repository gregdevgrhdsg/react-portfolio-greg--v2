import React from 'react';
import { Link } from 'react-router-dom';
import Prj3 from '../../assets/projects/Projet3.jpg';
import './project3.css';


const Project3 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Lydia Jardon</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj3} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project3;