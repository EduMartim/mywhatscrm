export default function Header() {
  return (
    <div className="header">
      <h2>Leads Dashboard</h2>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search leads..." />
      </div>
      <div className="user-actions">
        <div className="notification">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <div className="user-avatar">JD</div>
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}
