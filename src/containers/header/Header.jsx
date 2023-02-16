import React from 'react';
import ai from '../../assets/logoHero.svg';
import './header.css';


const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <h2 className='hello__header_name'>
          Hi 👋🏻 I'm Greg
        </h2>
      <h1 className="gradient__text">I'm a graphic web designer</h1>
      <p> Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
      <a href="../../assets/my_CV.pdf" download class="download-button">Télécharger mon CV</a>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='logoHero'/>
    </div>
  </div>
);

export default Header;