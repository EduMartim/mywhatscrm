import api from "./api";

export const getImoveis = (clienteId) =>
  api.get(`/imoveis`, { params: { clienteId } });

export const createImovel = (imovel) => api.post(`/imoveis`, imovel);

export const updateImovel = (id, imovel) => api.put(`/imoveis/${id}`, imovel);

export const deleteImovel = (id) => api.delete(`/imoveis/${id}`);
