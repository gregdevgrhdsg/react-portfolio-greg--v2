import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project3 from '../components/project3/Project3';
import './portfolioPages.css';

function ProjectC() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project3 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectC