import { useEffect, useState } from "react";
import { getClientes } from "../services/clientes";

export default function LeadsTable() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getClientes();
      setClientes(data);
    }
    fetchData();
  }, []);

  return (
    <div className="leads-container">
      <div className="leads-header">
        <h3 className="leads-title">Recent Leads</h3>
        <div className="leads-actions">
          <button className="btn btn-outline">
            <i className="fas fa-filter"></i> Filter
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Add Lead
          </button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.nome}</td>
                <td>{c.email}</td>
                <td>{c.telefone}</td>
                <td>
                  <button className="action-btn">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
