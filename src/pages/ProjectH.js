import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project8 from '../components/project8/Project8';
import './portfolioPages.css';

function ProjectH() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project8 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectH