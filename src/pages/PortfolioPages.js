import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { Footer } from '../containers';
import Portfolio from '../components/portfolio/Portfolio';
import './portfolioPages.css';

function PortfolioPages() {
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
      <div className='portfolio__container'>
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioPages;
