import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project10 from '../components/project10/Project10';
import './portfolioPages.css';

function ProjectJ() {
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