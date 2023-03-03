import React from 'react';
import ai from '../../assets/logoHero.svg';
import pdf from '../../assets/my_CV.pdf';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h2 className='hello__header_name'>
        Hi 👋🏻 I'm Greg
      </h2>
      <h1 className="gradient__text">I'm a graphic web designer</h1>
      <p> As a graphic designer, I strive to bring creativity and innovation to every project. Design is not just about aesthetics, it's about solving problems and communicating ideas visually. </p>

      <div className="gpt3__header-content__input">
       <a href={pdf} download><button className="button color-1">Télécharger mon CV</button></a>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='logoHero'/>
    </div>
  </div>
);

export default Header;
