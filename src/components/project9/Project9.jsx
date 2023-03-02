import React from 'react';
import { Link } from 'react-router-dom';
import Prj9 from '../../assets/projects/Projet9.jpg';
import './project9.css';


const Project9 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Modart</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj9} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project9;