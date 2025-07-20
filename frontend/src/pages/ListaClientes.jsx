import { useEffect, useState } from "react";
import { getClientes } from "../services/clientes";
import { getImoveis } from "../services/imoveis";
import { getInteracoes } from "../services/interacoes";
import { getTarefas } from "../services/tarefas";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const [dadosPorCliente, setDadosPorCliente] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getClientes();

      setClientes(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleExpand = async (id) => {
    const key = String(id);

    if (expandedId === key) {
      setExpandedId(null);
      return;
    }

    setExpandedId(key);

    if (!dadosPorCliente[key]) {
      const [imoveisData, interacoesData, tarefasData] = await Promise.all([
        getImoveis(id),
        getInteracoes(id),
        getTarefas(id),
      ]);

      setDadosPorCliente((prev) => ({
        ...prev,
        [key]: {
          imoveis: imoveisData,
          interacoes: interacoesData,
          tarefas: tarefasData,
        },
      }));
    }
  };

  if (loading) return <p>Carregando clientes...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Lista de Clientes</h1>

      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Email</th>
            <th className="p-2">Telefone</th>
            <th className="p-2">Ações</th>
            <th className="p-2">Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <>
              <tr key={cliente.id}>
                <td className="p-2">{cliente.id}</td>
                <td className="p-2">{cliente.nome}</td>
                <td className="p-2">{cliente.email}</td>
                <td className="p-2">{cliente.telefone}</td>
                <td className="p-2">
                  <button className="text-blue-600">Editar</button>
                  <button className="text-red-600 ml-2">Excluir</button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleExpand(cliente.id)}
                    className="text-gray-600 hover:text-black"
                  >
                    {expandedId === String(cliente.id) ? "▲" : "▼"}
                  </button>
                </td>
              </tr>

              {expandedId === String(cliente.id) && (
                <tr key={`details-${cliente.id}`}>
                  <td colSpan="6" className="bg-gray-50 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h2 className="font-semibold">Imóveis</h2>
                        {(dadosPorCliente[String(cliente.id)]?.imoveis || []).length > 0
                          ? dadosPorCliente[String(cliente.id)].imoveis.map((i) => (
                              <div
                                key={i.id}
                                className="border p-2 rounded mb-2"
                              >
                                <p>{i.titulo}</p>
                                <p>Preço: {i.preco}</p>
                              </div>
                            ))
                          : <p>Nenhum imóvel encontrado.</p>}
                      </div>

                      <div>
                        <h2 className="font-semibold">Interações</h2>
                        {(dadosPorCliente[String(cliente.id)]?.interacoes || []).length > 0
                          ? dadosPorCliente[String(cliente.id)].interacoes.map((i) => (
                              <div
                                key={i.id}
                                className="border p-2 rounded mb-2"
                              >
                                <p>{i.canal}</p>
                                <p>{i.descricao}</p>
                              </div>
                            ))
                          : <p>Nenhuma interação encontrada.</p>}
                      </div>

                      <div>
                        <h2 className="font-semibold">Tarefas</h2>
                        {(dadosPorCliente[String(cliente.id)]?.tarefas || []).length > 0
                          ? dadosPorCliente[String(cliente.id)].tarefas.map((t) => (
                              <div
                                key={t.id}
                                className="border p-2 rounded mb-2"
                              >
                                <p>{t.titulo}</p>
                                <p>{t.concluida ? "Concluída" : "Pendente"}</p>
                              </div>
                            ))
                          : <p>Nenhuma tarefa encontrada.</p>}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaClientes;
