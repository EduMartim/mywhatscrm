const API_URL = "http://localhost:3000/api/interacoes";

export async function getInteracoes(clienteId) {
  const res = await fetch(`${API_URL}?clienteId=${clienteId}`);
  return await res.json();
}

export async function createInteracao(interacao) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(interacao),
  });
  return await res.json();
}

export async function updateInteracao(id, interacao) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(interacao),
  });
  return res.status;
}

export async function deleteInteracao(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.status;
}