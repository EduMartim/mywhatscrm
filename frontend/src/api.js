const API_URL = "http://localhost:3000/api";

export async function getClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  return await res.json();
}

export async function getImoveis() {
  const res = await fetch(`${API_URL}/imoveis`);
  return await res.json();
}

export async function getInteracoes() {
  const res = await fetch(`${API_URL}/interacoes`);
  return await res.json();
}

export async function getTarefas() {
  const res = await fetch(`${API_URL}/tarefas`);
  return await res.json();
}
