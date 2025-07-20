const API_URL = "http://localhost:3000/api/tarefas";

export async function getTarefas(clienteId) {
  const res = await fetch(`${API_URL}?clienteId=${clienteId}`);
  return await res.json();
}

export async function createTarefa(tarefa) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa),
  });
  return await res.json();
}

export async function updateTarefa(id, tarefa) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa),
  });
  return res.status;
}

export async function deleteTarefa(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.status;
}
