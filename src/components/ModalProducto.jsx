import React, { useState, useEffect } from "react";
import { createProducto, updateProducto } from "./api";
import "./ModalProducto.css";

const ModalProducto = ({ categorias, producto, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    categoria_id: '',
    imagen: null
  });
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (producto) {
      setForm({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        categoria_id: producto.categoria_id,
        imagen: null
      });
      setPreview(producto.imagen ? `${import.meta.env.VITE_API_URL}${producto.imagen}` : '');
    }
  }, [producto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    const categoriaId = parseInt(form.categoria_id, 10);
    if (isNaN(categoriaId)) {
      alert("El ID de la categoría debe ser un número válido.");
      return;
    }
  
    const data = new FormData();
    data.append('nombre', form.nombre);
    data.append('descripcion', form.descripcion);
    data.append('categoria_id', categoriaId); 
  
    if (form.imagen) {
      data.append('imagen', form.imagen);
    }
  
    try {
      if (producto) {
        await updateProducto(producto.id, data);
      } else {
        await createProducto(data);
      }
      onSuccess();
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Operación fallida"); 
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{producto ? "Editar" : "Nuevo"} Producto</h2>
        <button className="btn-cerrar" onClick={onClose}>×</button>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={(e) => setForm(prev => ({ ...prev, nombre: e.target.value }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={(e) => setForm(prev => ({ ...prev, descripcion: e.target.value }))}
            />
          </div>

          <div className="form-group">
            <label>Categoría:</label>
            <select
              value={form.categoria_id}
              onChange={(e) => setForm(prev => ({ ...prev, categoria_id: e.target.value }))}
              required
            >
              <option value="">Seleccionar categoría</option>
              {categorias.map(cat => (
              <option key={index} value={cat.id}>{cat.nombre}</option> 
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Imagen:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setForm(prev => ({ ...prev, imagen: file }));
                setPreview(URL.createObjectURL(file));
              }}
            />
            {preview && <img src={preview} alt="Preview" className="image-preview" />}
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose}>Cancelar</button>
            <button type="submit">{producto ? "Guardar" : "Crear"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProducto;