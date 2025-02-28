import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Catalogo from './components/Catalogo';
import Reservas from './components/Reservas';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>  
      <AppWithRouter showLogin={showLogin} setShowLogin={setShowLogin} />
    </Router>
  );
};

const AppWithRouter = ({ showLogin, setShowLogin }) => {
  const location = useLocation(); 

  const isReservasRoute = location.pathname === '/reservas';
  console.log(location.pathname );

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar onShowLogin={() => setShowLogin(true)} />
 
      <Routes>
        <Route path="/reservas" element={<Reservas />} />
      </Routes>

      {!isReservasRoute && (
        <>
          <Home />
          <Nosotros />
          <Galeria />
          <Catalogo />
          <Footer />
        </>
      )}

      {showLogin && <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default App;
