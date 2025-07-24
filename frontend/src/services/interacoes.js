import api from "./api";

export const getInteracoes = (clienteId) =>
  api.get(`/interacoes`, { params: { clienteId } });

export const createInteracao = (interacao) =>
  api.post(`/interacoes`, interacao);

export const updateInteracao = (id, interacao) =>
  api.put(`/interacoes/${id}`, interacao);

export const deleteInteracao = (id) => api.delete(`/interacoes/${id}`);
