const API_URL = import.meta.env.VITE_API_URL;



// ------- RESERVAS -------
export async function getReservas() {
  const response = await fetch(`${API_URL}/reservas`);
  return await response.json();
}

export async function createReserva(reserva) {
  const response = await fetch(`${API_URL}/reservas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
  });
  return await response.json();
}

export async function updateReserva(reserva) {
  const response = await fetch(`${API_URL}/reservas/${reserva.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
  });
  return await response.json();
}

export async function deleteReserva(reservaId) {
  const response = await fetch(`${API_URL}/reservas/${reservaId}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Error al eliminar la reserva");
  }
}

// ------- PRODUCTOS -------
export async function getProductos() {
  const response = await fetch(`${API_URL}/productos`);
  return await response.json();
}

export async function createProducto(formData) {
  const response = await fetch(`${API_URL}/productos`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error del servidor:", errorData);

    // Mostrar el detalle del error
    if (errorData.detail) {
      throw new Error(Array.isArray(errorData.detail) ? errorData.detail[0].msg : errorData.detail);
    } else {
      throw new Error("Error al crear el producto");
    }
  }

  return await response.json();
}

export async function updateProducto(productoId, productoData, imagen) {
  const formData = new FormData();
  formData.append('nombre', productoData.nombre);
  formData.append('descripcion', productoData.descripcion);
  formData.append('categoria_id', productoData.categoria_id);
  if (imagen) {
    formData.append('imagen', imagen);
  }

  const response = await fetch(`${API_URL}/productos/${productoId}`, {
    method: "PUT",
    body: formData,
  });
  return await response.json();
}

export async function deleteProducto(productoId) {
  await fetch(`${API_URL}/productos/${productoId}`, { method: "DELETE" });
}

// ------- CATEGORÍAS -------
export async function getCategorias() {
  const response = await fetch(`${API_URL}/categorias`);
  return await response.json();
}

export async function createCategoria(categoria) {
  const response = await fetch(`${API_URL}/categorias`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoria),
  });
  return await response.json();
}

export async function updateCategoria(categoriaId, categoria) {
  const response = await fetch(`${API_URL}/categorias/${categoriaId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoria),
  });
  return await response.json();
}

export async function deleteCategoria(categoriaId) {
  const response = await fetch(`${API_URL}/categorias/${categoriaId}`, { 
    method: "DELETE" 
  });
  if (!response.ok) {
    throw new Error("Error al eliminar la categoría");
  }
}
