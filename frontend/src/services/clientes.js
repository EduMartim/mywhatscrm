// frontend/src/services/clientes.js (exemplo refatorado)

import api from "./api";

// GET /clientes
export const getClientes = () => api.get("/clientes");

// POST /clientes
export const createCliente = (dadosDoCliente) =>
  api.post("/clientes", dadosDoCliente);

// PUT /clientes/:id
export const updateCliente = (id, dadosDoCliente) =>
  api.put(`/clientes/${id}`, dadosDoCliente);

// DELETE /clientes/:id
export const deleteCliente = (id) => api.delete(`/clientes/${id}`);
