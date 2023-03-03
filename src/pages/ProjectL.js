import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project12 from '../components/project12/Project12';
import './portfolioPages.css';

function ProjectL() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project12 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectL