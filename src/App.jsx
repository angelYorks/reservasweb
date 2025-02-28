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
import AdminProductos from './components/AdminProductos';
import AdminLogin from './components/AdminLogin'; 

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

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

  // Verificación mejorada de autenticación
  const isAuthenticated = () => {
    return localStorage.getItem('adminKey') === import.meta.env.VITE_ADMIN_KEY;
  };

  // Componente protegido actualizado
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/admin/login" replace />;
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Ocultar navbar en rutas administrativas */}
      {!location.pathname.startsWith('/admin') && 
        <Navbar onShowLogin={() => setShowLogin(true)} />}
      
      <Routes>
        <Route path="/reservas" element={<Reservas />} />
        
        {/* Ruta de acceso admin actualizada */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Ruta protegida */}
        <Route path="/admin/productos" element={
          <ProtectedRoute>
            <AdminProductos />
          </ProtectedRoute>
        } />
      </Routes>

      {/* Mostrar contenido principal solo en rutas no administrativas */}
      {!location.pathname.startsWith('/admin') && !location.pathname.startsWith('/reservas') && (
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