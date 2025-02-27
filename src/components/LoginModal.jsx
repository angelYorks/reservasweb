import React, { useState, useEffect } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>X</button>
        
        <div className="modal-header">
          <button 
            className={!isRegister ? "active" : ""} 
            onClick={() => setIsRegister(false)}>Iniciar Sesión</button>
          <button 
            className={isRegister ? "active" : ""} 
            onClick={() => setIsRegister(true)}>Registrarse</button>
        </div>
        
        {isRegister ? (
          <div className="modal-body">
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombres" />
            <input type="text" placeholder="Apellidos" />
            <select>
              <option value="">Seleccione su sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
            <input type="number" placeholder="Edad" />
            <input type="tel" placeholder="Teléfono" />
            <input type="email" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button className="submit-button">Registrarse</button>
          </div>
        ) : (
          <div className="modal-body">
            <h2>Iniciar Sesión</h2>
            <input type="email" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button className="submit-button">Ingresar</button>
            <p>¿No tienes cuenta? <span onClick={() => setIsRegister(true)}>Regístrate</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
