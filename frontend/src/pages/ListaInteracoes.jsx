import { useEffect, useState } from "react";
import { getInteracoes } from "../services/interacoes";
import styles from "./ListaInteracoes.module.css";

export default function ListaInteracoes() {
  const [interacoes, setInteracoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getInteracoes();
      setInteracoes(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Interações</h1>

      <ul className={styles.list}>
        {interacoes.map((i) => (
          <li key={i.id} className={styles.listItem}>
            <p><strong>Canal:</strong> {i.canal}</p>
            <p><strong>Descrição:</strong> {i.descricao}</p>
            <div className={styles.actions}>
              <button>Editar</button>
              <button>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

