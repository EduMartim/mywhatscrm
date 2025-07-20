import { useEffect, useState } from "react";
import { getTarefas } from "../services/tarefas";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTarefas() {
      const data = await getTarefas(); // sem clienteId
      setTarefas(data);
      setLoading(false);
    }

    fetchTarefas();
  }, []);

  if (loading) return <p>Carregando tarefas...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Lista de Tarefas</h1>
      {tarefas.length > 0 ? (
        tarefas.map((t) => (
          <div key={t.id} className="border p-2 rounded mb-2 shadow">
            <p><strong>{t.titulo}</strong></p>
            <p>{t.concluida ? "✅ Concluída" : "⏳ Pendente"}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}

export default ListaTarefas;
