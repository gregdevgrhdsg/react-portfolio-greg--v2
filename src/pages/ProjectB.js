import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project2 from '../components/project2/Project2';
import './portfolioPages.css';

function ProjectA() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project2 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectA