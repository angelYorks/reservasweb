import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Catalogo from './components/Catalogo';
import LoginModal from './components/LoginModal';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar onShowLogin={() => setShowLogin(true)} />
      
      {!showLogin ? (
        <>
          <Home />
          <Nosotros />
          <Galeria />
          <Catalogo />
        </>
      ) : (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
};

export default App;
