import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project4 from '../components/project4/Project4';
import './portfolioPages.css';

function ProjectD() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project4 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectD