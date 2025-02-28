import React, { useEffect, useState } from "react";
import "./Catalogo.css";
import TarjetaProducto from "./TarjetaProducto";
import { getProductos } from "./api";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }
    fetchProductos();
  }, []);

  return (
    <section id="catalogo" className="catalogo-section">
      <div className="catalogo-fondo"></div>
      <h2>Catálogo</h2>
      <div className="linea-separadora"></div>
      <p>Explora nuestro menú con los mejores platillos.</p>
      <div className="catalogo-grid">
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} {...producto} />
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
