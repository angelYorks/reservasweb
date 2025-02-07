import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png';

const Navbar = ({ onShowLogin }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#catalogo">Catálogo</a></li>
        <li>
          <button className="navbar-button" onClick={onShowLogin}>Reservas</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
