import React from 'react';
import './Secciones.css';
import "./Nosotros.css";

const Nosotros = () => {
    return (
      <section id="nosotros" className="section nosotros-section">
        <h1>Nosotros</h1>
          <div className="divider">
          <div className="nosotros-line"></div>
          <div className="nosotros-diamond"></div>
          <div className="nosotros-line"></div>
        </div>

        <p>En Don Bosco, llevamos más de 50 años compartiendo la pasión por la cocina criolla peruana. Nuestro compromiso siempre ha sido brindar a nuestros clientes una experiencia única, combinando el sabor tradicional de nuestras recetas con un servicio cálido y cercano.</p>
        <br></br>
        <p>Nacimos como un pequeño restaurante familiar y hemos crecido gracias al amor de nuestros comensales, quienes nos inspiran a mejorar día a día. Trabajamos con ingredientes frescos de la más alta calidad, seleccionados cuidadosamente de proveedores locales, para garantizar que cada plato represente lo mejor de nuestra gastronomía.</p>
        <br></br>
        <p>Creemos que la comida no solo alimenta el cuerpo, sino también el alma, y es por eso que en Don Bosco cada visita se convierte en un momento especial para compartir y disfrutar.</p>

      </section>
    );
  };
  
  export default Nosotros;