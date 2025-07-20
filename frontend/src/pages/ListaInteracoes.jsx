import { useEffect, useState } from "react";
import { getInteracoes } from "../services/interacoes";

function ListaInteracoes() {
  const [interacoes, setInteracoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInteracoes() {
      const data = await getInteracoes(); // sem clienteId
      setInteracoes(data);
      setLoading(false);
    }

    fetchInteracoes();
  }, []);

  if (loading) return <p>Carregando interações...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Lista de Interações</h1>
      {interacoes.length > 0 ? (
        interacoes.map((i) => (
          <div key={i.id} className="border p-2 rounded mb-2 shadow">
            <p><strong>Canal:</strong> {i.canal}</p>
            <p><strong>Descrição:</strong> {i.descricao}</p>
            <p><strong>Data:</strong> {new Date(i.data).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma interação encontrada.</p>
      )}
    </div>
  );
}

export default ListaInteracoes;
