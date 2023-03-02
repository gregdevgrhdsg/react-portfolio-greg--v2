import React from 'react';
import { Link } from 'react-router-dom';
import Prj5 from '../../assets/projects/Projet5.jpg';
import './project5.css';


const Project5 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Wemanity</h2>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj5} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project5;