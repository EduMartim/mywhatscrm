import { useEffect, useState } from "react";
import { getImoveis } from "../services/imoveis";

function ListaImoveis() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImoveis() {
      const data = await getImoveis(); // sem clienteId
      setImoveis(data);
      setLoading(false);
    }

    fetchImoveis();
  }, []);

  if (loading) return <p>Carregando imóveis...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Lista de Imóveis</h1>
      {imoveis.length > 0 ? (
        imoveis.map((i) => (
          <div key={i.id} className="border p-2 rounded mb-2 shadow">
            <p><strong>{i.titulo}</strong></p>
            <p>Preço: {i.preco}</p>
            <p>Status: {i.status}</p>
          </div>
        ))
      ) : (
        <p>Nenhum imóvel encontrado.</p>
      )}
    </div>
  );
}

export default ListaImoveis;
