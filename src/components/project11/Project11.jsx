import React from 'react';
import { Link } from 'react-router-dom';
import Prj11 from '../../assets/projects/Projet11.jpg';
import './project11.css';


const Project11 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Pretty Simple</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj11} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project11;