import React, { useState, useEffect } from 'react'; 
import './Secciones.css';
import './Galeria.css';

import galeria1 from "../img/FOTOS/aaa (1).jpg";
import galeria2 from "../img/FOTOS/don_bosco-e1669446151934-750x467 (1).jpg";
import galeria3 from "../img/FOTOS/don-bosco-local (1) (1).jpg";

const imagenes = [galeria1, galeria2, galeria3];

const Galeria = () => {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(intervalo);
    }, []);

    return (
      <section id="galeria" className="galeria-section">
        <h2>Galería</h2>
        <div className="divider">
  <div className="galeria-line"></div>
  <div className="galeria-diamond"></div>
  <div className="galeria-line"></div>
</div>

        <p>
          Nuestro restaurante en Jesús María es un espacio que celebra la tradición y la calidez de la cocina criolla peruana.
          Cada rincón refleja nuestra pasión por el buen comer, acompañado del cariño de siempre. Descubra momentos únicos a través
          de imágenes que capturan la esencia de Don Bosco y su gente.
        </p>
        
        <div className="linea-separadora"></div>
  
        <div className="galeria-carrusel">
          <img src={imagenes[indice]} alt="Imagen del restaurante" className="galeria-img-activa" />
        </div>

        <div className="galeria-indicadores">
          {imagenes.map((_, i) => (
            <span key={i} className={`indicador ${i === indice ? "activo" : ""}`}></span>
          ))}
        </div>
      </section>
    );
};

export default Galeria;
