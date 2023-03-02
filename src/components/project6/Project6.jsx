import React from 'react';
import { Link } from 'react-router-dom';
import Prj6 from '../../assets/projects/Projet6.jpg';
import './project6.css';


const Project6 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Gesprojet</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj6} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project6;