import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Header } from './containers';
import { Navbar, Skills, Cta } from './components';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      // Défilement vers le haut uniquement pour la page d'accueil
      window.scrollTo(0, 0);
    }
  }, [location]);

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
