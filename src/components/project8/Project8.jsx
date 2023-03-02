import React from 'react';
import { Link } from 'react-router-dom';
import Prj8 from '../../assets/projects/Projet8.jpg';
import './project8.css';


const Project8 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">France Conseil Ecologie</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj8} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project8;