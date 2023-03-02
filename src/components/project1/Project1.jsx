import React from 'react';
import { Link } from 'react-router-dom';
import Prj2 from '../../assets/projects/Projet1.jpg';
import './project1.css';


const Project2 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
          <h2 className="section__title">Trackhim</h2>
      </div>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj2} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project2;