import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logoHero.svg';
import './navbar.css';
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to ="/">Home</Link></p>
          <p><Link to ="/portfolio">Work</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
            <ul>
                <a className='color_rs_desk' href='https://www.linkedin.com/in/grégoire-prunet-foch-988375100/?originalSubdomain=fr'> <FaLinkedin size={25} /></a>
            </ul>
          </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="rgb(0, 0, 0);" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="rgb(0, 0, 0)" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link to ="/">Home</Link></p>
            <p><Link to ="/portfolio">Work</Link></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <ul>
                <a className='color_rs' href='/'><FaLinkedin size={25} /></a>
            </ul>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;