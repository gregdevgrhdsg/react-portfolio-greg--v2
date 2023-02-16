import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Portfolio from '../components/portfolio/Portfolio'
import './portfolioPages.css';

function PortfolioPages() {
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
  )
}

export default PortfolioPages