import React from 'react';
import {Footer, Header, } from './containers';
import { Navbar, Skills, Cta} from './components';
import './App.css';


function App () {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
          <div>
          <Header />
          <Skills />
          <Cta />
          <Footer />
        </div>
      </div>
  );
  }


export default App;
