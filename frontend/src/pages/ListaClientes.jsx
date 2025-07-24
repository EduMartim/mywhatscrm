import React, { useEffect, useState } from "react";
import { getClientes } from "../services/clientes";
import { getImoveis } from "../services/imoveis";
import { getInteracoes } from "../services/interacoes";
import { getTarefas } from "../services/tarefas";
import styles from "./ListaClientes.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.heading}>Lista de Clientes</h1>

      <table className={styles.table}>
        <thead>
          <tr className={styles.theadRow}>
            <th className={styles.td}>#</th>
            <th className={styles.td}>Nome</th>
            <th className={styles.td}>Email</th>
            <th className={styles.td}>Telefone</th>
            <th className={styles.td}>Ações</th>
            <th className={styles.td}>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <React.Fragment key={cliente.id}>
              <tr>
                <td className={styles.td}>{cliente.id}</td>
                <td className={styles.td}>{cliente.nome}</td>
                <td className={styles.td}>{cliente.email}</td>
                <td className={styles.td}>{cliente.telefone}</td>
                <td className={styles.td}>
                  <button className={styles.editBtn}>Editar</button>
                  <button className={styles.deleteBtn}>Excluir</button>
                </td>
                <td className={styles.td}>
                  <button onClick={() => handleExpand(cliente.id)}>
                    {expandedId === String(cliente.id) ? "▲" : "▼"}
                  </button>
                </td>
              </tr>

              {expandedId === String(cliente.id) && (
                <tr key={`details-${cliente.id}`}>
                  <td colSpan="6" className={styles.detailsCell}>
                    <div className={styles.gridDetails}>
                      <div>
                        <h2 className={styles.bold}>Imóveis</h2>
                        {(dadosPorCliente[String(cliente.id)]?.imoveis || []).length > 0
                          ? dadosPorCliente[String(cliente.id)].imoveis.map((i) => (
                              <div key={i.id} className={styles.card}>
                                <p>{i.titulo}</p>
                                <p>Preço: {i.preco}</p>
                              </div>
                            ))
                          : <p>Nenhum imóvel encontrado.</p>}
                      </div>

                      <div>
                        <h2 className={styles.bold}>Interações</h2>
                        {(dadosPorCliente[String(cliente.id)]?.interacoes || []).length > 0
                          ? dadosPorCliente[String(cliente.id)].interacoes.map((i) => (
                              <div key={i.id} className={styles.card}>
                                <p>{i.canal}</p>
                                <p>{i.descricao}</p>
                              </div>
                            ))
                          : <p>Nenhuma interação encontrada.</p>}
                      </div>

                      <div>
                        <h2 className={styles.bold}>Tarefas</h2>
                        {(dadosPorCliente[String(cliente.id)]?.tarefas || []).length > 0
                          ? dadosPorCliente[String(cliente.id)].tarefas.map((t) => (
                              <div key={t.id} className={styles.card}>
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
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaClientes;
