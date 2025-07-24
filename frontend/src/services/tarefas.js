import api from "./api";

export const getTarefas = (clienteId) =>
  api.get(`/tarefas`, { params: { clienteId } });

export const createTarefa = (tarefa) => api.post(`/tarefas`, tarefa);

export const updateTarefa = (id, tarefa) => api.put(`/tarefas/${id}`, tarefa);

export const deleteTarefa = (id) => api.delete(`/tarefas/${id}`);
