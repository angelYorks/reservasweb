const API_URL = "http://127.0.0.1:8000/api";


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

export async function createProducto(producto) {
  const response = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return await response.json();
}

export async function updateProducto(producto) {
  const response = await fetch(`${API_URL}/productos/${producto.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return await response.json();
}

export async function deleteProducto(productoId) {
  await fetch(`${API_URL}/productos/${productoId}`, { method: "DELETE" });
}
