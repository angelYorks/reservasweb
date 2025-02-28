import React from 'react'; 
import './Secciones.css';
import './Galeria.css';

import galeria1 from "../img/FOTOS/galeria1.jpg";
import galeria2 from "../img/FOTOS/galeria2.jpg";
import galeria3 from "../img/FOTOS/galeria3.jpg";

const Galeria = () => {
    return (
      <section id="galeria" className="galeria-section">
        <h2>Galería</h2>
        <p>
          Nuestro restaurante en Jesús María es un espacio que celebra la tradición y la calidez de la cocina criolla peruana.
          Cada rincón refleja nuestra pasión por el buen comer, acompañado del cariño de siempre. Descubra momentos únicos a través
          de imágenes que capturan la esencia de Don Bosco y su gente.
        </p>
        
        <div className="linea-separadora"></div>
  
        <div className="galeria-container">
          <img src={galeria1} alt="Plato 1" className="galeria-img" />
          <img src={galeria2} alt="Plato 2" className="galeria-img" />
          <img src={galeria3} alt="Plato 3" className="galeria-img" />
        </div>
      </section>
    );
  };

export default Galeria;