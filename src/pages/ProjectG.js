import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project7 from '../components/project7/Project7';
import './portfolioPages.css';

function ProjectG() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project7 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectG