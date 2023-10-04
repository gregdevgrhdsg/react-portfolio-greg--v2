import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project10 from '../components/project10/Project10';
import './portfolioPages.css';

function ProjectJ() {
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
      <Project10 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectJ