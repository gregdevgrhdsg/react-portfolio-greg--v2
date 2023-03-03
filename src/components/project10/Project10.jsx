import React from 'react';
import { Link } from 'react-router-dom';
import Prj10 from '../../assets/projects/Projet10.jpg';
import './project10.css';


const Project10 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Eric Maseko</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj10} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project10;