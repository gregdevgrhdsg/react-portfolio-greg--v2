import React from 'react';
import { Link } from 'react-router-dom';
import Prj7 from '../../assets/projects/Projet7.jpg';
import './project7.css';


const Project7 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Xavier Blondeau</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj7} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project7;