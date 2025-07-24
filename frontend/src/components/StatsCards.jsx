import { useEffect, useState } from "react";
import { getClientes } from "../services/clientes";

export default function StatsCards() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getClientes();
      setClientes(data);
    }
    fetchData();
  }, []);

  const totalLeads = clientes.length;
  const newLeads = Math.floor(totalLeads * 0.1); // exemplo: 10% são novos
  const conversionRate = "24.7%"; // poderia ser calculado no backend
  const avgDeal = "$2,480"; // idem

  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-title">Total Leads</div>
            <div className="stat-value">{totalLeads}</div>
          </div>
          <div className="stat-icon icon-blue">
            <i className="fas fa-users"></i>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-title">New Leads</div>
            <div className="stat-value">{newLeads}</div>
          </div>
          <div className="stat-icon icon-green">
            <i className="fas fa-user-plus"></i>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-title">Conversion Rate</div>
            <div className="stat-value">{conversionRate}</div>
          </div>
          <div className="stat-icon icon-pink">
            <i className="fas fa-percentage"></i>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-title">Avg. Deal Size</div>
            <div className="stat-value">{avgDeal}</div>
          </div>
          <div className="stat-icon icon-red">
            <i className="fas fa-dollar-sign"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
