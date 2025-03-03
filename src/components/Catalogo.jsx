import React from "react";
import "./Catalogo.css";

const Catalogo = () => {
  return (
    <section id="catalogo" className="catalogo-section">
      <h2>Catálogo</h2>
      <div className="linea-separadora"></div>
      <p>Explora nuestro menú con los mejores platillos.</p>
      
      <div className="catalogo-iframe-container">
        <iframe 
          src="https://lacartadehoy.com/?num=XWWxoT05GVnNXa2RYVm49VbFpPVWxaRVFUME1VcFJWMWQwVjFJd01IaFZiRnBQkdUazlXVm5SUFZrcFl#" 
          title="Menú del restaurante"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Catalogo;
