import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

const Navbar = ({ onShowLogin, isLoggedIn }) => {
  const navigate = useNavigate(); 

  const handleReservasClick = (e) => {
    if (isLoggedIn) { 
      e.preventDefault(); 
      onShowLogin(); 
    } else {
      navigate('/reservas');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/#home">Inicio</a></li>
        <li><a href="/#nosotros">Nosotros</a></li>
        <li><a href="/#galeria">Galería</a></li>
        <li><a href="/#catalogo">Catálogo</a></li>
        <li>
          <a 
            href="/reservas" 
            className="navbar-button" style={{color: 'black'}}
            onClick={handleReservasClick}>
            Reservas
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
