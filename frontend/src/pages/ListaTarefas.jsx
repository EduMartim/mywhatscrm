import { useEffect, useState } from "react";
import { getTarefas } from "../services/tarefas";
import styles from "./ListaTarefas.module.css";

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTarefas();
      setTarefas(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Tarefas</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Título</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((t) => (
            <tr key={t.id}>
              <td className={styles.td}>{t.id}</td>
              <td className={styles.td}>{t.titulo}</td>
              <td className={styles.td}>
                {t.concluida ? (
                  <span className={styles.status}>Concluída</span>
                ) : (
                  <span className={styles.statusPending}>Pendente</span>
                )}
              </td>
              <td className={styles.td}>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
