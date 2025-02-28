import React from "react";
import "./TarjetaPlatillo.css";

const TarjetaPlatillo = ({ nombre, descripcion, imagen, categoria }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="tarjeta-imagen" />
      <div className="tarjeta-info">
        <h3>{nombre}</h3>
        <p className="categoria">{categoria}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default TarjetaPlatillo;
