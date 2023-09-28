import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project15 from '../components/project15/Project15';
import './portfolioPages.css';

function ProjectN() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project15 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectN