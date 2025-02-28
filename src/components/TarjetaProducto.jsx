import React from "react";
import "./TarjetaProducto.css";

const TarjetaProducto = ({ nombre, descripcion, imagen, categoria }) => {
  // Construir la URL completa de la imagen
  const imagenUrl = imagen 
    ? `http://127.0.0.1:8000${imagen}` 
    : '/placeholder.jpg'; // Añade una imagen por defecto

  return (
    <div className="tarjeta-producto">
      <img 
        src={imagenUrl} 
        alt={nombre} 
        className="producto-imagen"
        onError={(e) => {
          e.target.src = '/placeholder.jpg'; // Fallback si la imagen no carga
        }}
      />
      <div className="producto-info">
        <h3>{nombre}</h3>
        {categoria && (
          <p className="producto-categoria">{categoria.nombre}</p>
        )}
        {descripcion && (
          <p className="producto-descripcion">{descripcion}</p>
        )}
      </div>
    </div>
  );
};

export default TarjetaProducto;