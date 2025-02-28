import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductos, deleteProducto, getCategorias } from "./api";
import ModalProducto from "./ModalProducto";
import "./AdminProductos.css";

const AdminProductos = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    productos: [],
    categorias: [],
    showModal: false,
    productoEdit: null,
    loading: true,
    error: ''
  });

  useEffect(() => {
    if (!localStorage.getItem('adminKey')) {
      navigate('/admin/login');
    } else {
      cargarDatos();
    }
  }, [navigate]);

  const cargarDatos = async () => {
    try {
      const [productosData, categoriasData] = await Promise.all([
        getProductos(),
        getCategorias()
      ]);
      setState(prev => ({
        ...prev,
        productos: productosData,
        categorias: categoriasData,
        loading: false,
        error: ''
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Error al cargar datos',
        loading: false
      }));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminKey');
    navigate('/admin/login');
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await deleteProducto(id);
        cargarDatos();
      } catch (error) {
        setState(prev => ({ ...prev, error: 'Error al eliminar' }));
      }
    }
  };

  if (state.loading) return <div className="loading">Cargando...</div>;
  if (state.error) return <div className="error">{state.error}</div>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Administración de Productos</h1>
        <button className="btn-logout" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      <button 
        className="btn-agregar"
        onClick={() => setState(prev => ({ ...prev, showModal: true }))}
      >
        + Agregar Producto
      </button>

      <div className="productos-list">
        {state.productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <div className="producto-header">
              <h3>{producto.nombre}</h3>
              <div className="acciones">
                <button 
                  className="btn-editar"
                  onClick={() => setState(prev => ({
                    ...prev,
                    productoEdit: producto,
                    showModal: true
                  }))}
                >
                  Editar
                </button>
                <button 
                  className="btn-eliminar"
                  onClick={() => handleEliminar(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
            {producto.imagen && (
              <img 
                src={`${process.env.REACT_APP_API_URL}${producto.imagen}`} 
                alt={producto.nombre} 
                className="producto-img"
              />
            )}
            <p>{producto.descripcion}</p>
            <div className="producto-footer">
              <span>Categoría: {producto.categoria?.nombre}</span>
            </div>
          </div>
        ))}
      </div>

      {state.showModal && (
        <ModalProducto
          categorias={state.categorias}
          producto={state.productoEdit}
          onClose={() => setState(prev => ({ ...prev, showModal: false }))}
          onSuccess={cargarDatos}
        />
      )}
    </div>
  );
};

export default AdminProductos;