import React from 'react';
import { Link } from 'react-router-dom';
import Prj17 from '../../assets/projects/Projet17.jpg';
import './project15.css';

const Project15 = () => {
  return (
    <div className="project_container_c">
         <div>
          <Link to="/portfolio" className="back-button">⬅️ Back</Link>
      </div>
      <h2 className="section__title">Beach House</h2>
      <div className="section__title"><a href="https://www.beachhouserum.com" download><button className="button color-1">Visiter le site</button></a></div>
      <div className='skills__grid__prj'>
             <img className='skills__img__prj' src={Prj17} alt="HTML icon" />
        </div>
    </div>
  );
};

export default Project15;