import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project5 from '../components/project5/Project5';
import './portfolioPages.css';

function ProjectD() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project5 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectD