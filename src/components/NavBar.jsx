import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Nosotros</a></li>
        <li><a href="#services">Galeria</a></li>
        <li><a href="#about">Catalogo</a></li>        
        <li><button className='navbar-button'>Reservas</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
