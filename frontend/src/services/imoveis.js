const API_URL = "http://localhost:3000/api/imoveis";

export async function getImoveis(clienteId) {
  const res = await fetch(`${API_URL}?clienteId=${clienteId}`);
  return await res.json();
}

export async function createImovel(imovel) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(imovel),
  });
  return await res.json();
}

export async function updateImovel(id, imovel) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(imovel),
  });
  return res.status;
}

export async function deleteImovel(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.status;
}