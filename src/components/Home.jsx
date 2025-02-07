import React from "react";
import "./Secciones.css";
import "./Home.css";


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="overlay"></div> {/* Capa para el efecto difuminado */}
      <div className="home-content">
        <h1>Bienvenidos a Bosco</h1>
        <p>El mejor restaurante en Lima con una experiencia gastronómica única.</p>
      </div>
    </section>
  );
};

export default Home;
