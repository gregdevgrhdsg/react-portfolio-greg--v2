import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project6 from '../components/project6/Project6';
import './portfolioPages.css';

function ProjectF() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project6 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectF