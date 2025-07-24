export default function Charts() {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Leads by Source</h3>
          <div className="chart-actions">
            <button className="btn btn-outline">Monthly</button>
            <button className="btn btn-outline">Quarterly</button>
          </div>
        </div>
        <div className="chart">
          <div className="bar" style={{ height: "70%" }}>
            <div className="bar-value">320</div>
            <div className="bar-label">Website</div>
          </div>
          <div className="bar" style={{ height: "45%" }}>
            <div className="bar-value">210</div>
            <div className="bar-label">Referral</div>
          </div>
          <div className="bar" style={{ height: "60%" }}>
            <div className="bar-value">280</div>
            <div className="bar-label">Social</div>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Conversion Funnel</h3>
          <div className="chart-actions">
            <button className="btn btn-outline">Last 30 Days</button>
          </div>
        </div>
        <div className="chart">
          <div className="bar" style={{ height: "90%" }}>
            <div className="bar-value">1,248</div>
            <div className="bar-label">Leads</div>
          </div>
          <div className="bar" style={{ height: "65%" }}>
            <div className="bar-value">812</div>
            <div className="bar-label">Contacted</div>
          </div>
          <div className="bar" style={{ height: "40%" }}>
            <div className="bar-value">500</div>
            <div className="bar-label">Qualified</div>
          </div>
        </div>
      </div>
    </div>
  );
}
