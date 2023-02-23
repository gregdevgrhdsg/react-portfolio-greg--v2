import React from 'react';
import gpt3Logo from '../../assets/logoHero.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Grégoire Prunet-Foch <br /> Graphic designer</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>+33 6 51 03 74 35 <br />gregoireprunetfoch@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 code with &#x2764; with react by Grégoire Prunet-Foch. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;