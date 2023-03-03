import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '../containers';
import Project13 from '../components/project13/Project13';
import './portfolioPages.css';

function ProjectM() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
    </div>
      <div className='project__container'>
      <Project13 />
      <Footer />
    </div>
  </div>
  )
}

export default ProjectM