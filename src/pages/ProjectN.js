import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project14 from '../components/project14/Project14';
import './portfolioPages.css';

function ProjectN() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project14 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectN