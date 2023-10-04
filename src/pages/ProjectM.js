import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project13 from '../components/project13/Project13';
import './portfolioPages.css';

function ProjectM() {
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
      <Project13 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectM