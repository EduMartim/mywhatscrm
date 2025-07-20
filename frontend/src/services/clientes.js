const API_URL = "http://localhost:3000/api/clientes";

export async function getClientes() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function createCliente(cliente) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return await res.json();
}

export async function updateCliente(id, cliente) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return res.status;
}

export async function deleteCliente(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.status;
}
