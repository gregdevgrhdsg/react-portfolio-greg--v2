import React from 'react';
import { Link } from 'react-router-dom';
import Prj4 from '../../assets/projects/Projet4.jpg';
import './project2.css';


const Project2 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">La Sagesse Des Abeilles</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj4} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project2;