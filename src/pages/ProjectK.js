import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project11 from '../components/project11/Project11';
import './portfolioPages.css';

function ProjectK() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project11 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectK