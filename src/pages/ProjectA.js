import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project1 from '../components/project1/Project1'
import './portfolioPages.css';

function ProjectA() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/portfolio') {
      // Défilement vers le haut uniquement pour la page de portefeuille
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project1 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectA