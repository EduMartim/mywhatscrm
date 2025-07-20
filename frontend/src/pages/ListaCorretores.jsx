import { useEffect, useState } from "react";

function ListaCorretores() {
  const [corretores, setCorretores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCorretores() {
      try {
        const res = await fetch("http://localhost:3000/api/corretores");
        const data = await res.json();
        setCorretores(data);
      } catch (err) {
        console.error("Erro ao buscar corretores:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCorretores();
  }, []);

  if (loading) return <p>Carregando corretores...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Lista de Corretores</h1>

      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Email</th>
            <th className="p-2">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {corretores.map((corretor) => (
            <tr key={corretor.id}>
              <td className="p-2">{corretor.id}</td>
              <td className="p-2">{corretor.nome}</td>
              <td className="p-2">{corretor.email}</td>
              <td className="p-2">{corretor.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaCorretores;
