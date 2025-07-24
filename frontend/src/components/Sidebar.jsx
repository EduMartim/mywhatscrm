export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <i className="fas fa-chart-line"></i>
        <h1>LeadsControl</h1>
      </div>
      <div className="nav-links">
        <div className="nav-item active">
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-users"></i>
          <span>Leads</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-chart-bar"></i>
          <span>Analytics</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-question-circle"></i>
          <span>Support</span>
        </div>
      </div>
    </aside>
  );
}
