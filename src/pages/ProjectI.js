import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project9 from '../components/project9/Project9';
import './portfolioPages.css';

function ProjectI() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project9 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectI