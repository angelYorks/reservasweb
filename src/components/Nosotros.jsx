import React from 'react';
import './Secciones.css';
import "./Nosotros.css";

const Nosotros = () => {
    return (
      <section id="nosotros" className="section nosotros-section">
        <h2>Nosotros</h2>
        <div className="divider">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>
        <p>Somos un restaurante comprometido con ofrecer la mejor experiencia gastronómica.</p>
      </section>
    );
  };
  
  export default Nosotros;
  