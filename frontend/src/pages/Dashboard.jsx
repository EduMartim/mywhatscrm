import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import LeadsTable from "../components/LeadsTable";
import Charts from "../components/Charts";
import "../styles/variables.css";
import "../styles/index.css";

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <StatsCards />
        <LeadsTable />
        <Charts />
      </main>
    </div>
  );
}
