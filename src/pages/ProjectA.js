import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project1 from '../components/project1/Project1'
import './portfolioPages.css';

function ProjectA() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project1 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectA