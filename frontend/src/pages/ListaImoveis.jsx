import { useEffect, useState } from "react";
import { getImoveis } from "../services/imoveis";
import styles from "./ListaImoveis.module.css";

export default function ListaImoveis() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getImoveis();
      setImoveis(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Imóveis</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Título</th>
            <th className={styles.th}>Preço</th>
            <th className={styles.th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {imoveis.map((i) => (
            <tr key={i.id}>
              <td className={styles.td}>{i.id}</td>
              <td className={styles.td}>{i.titulo}</td>
              <td className={styles.td}>{i.preco}</td>
              <td className={styles.td}>
                <div className={styles.actions}>
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
