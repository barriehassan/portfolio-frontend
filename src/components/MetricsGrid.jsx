import React from 'react';

function MetricsGrid() {
  return (
    <section className="container" style={{ paddingTop: 0 }}>
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-title">Backend & API Systems</div>
          <div className="metric-desc">High-performance data pipelines and microservices architecture</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">AI & Data Platforms</div>
          <div className="metric-desc">Scalable machine learning model deployment and data ops</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Civic Tech Solutions</div>
          <div className="metric-desc">Building platforms to handle massive municipal scale</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Scalable Architectures</div>
          <div className="metric-desc">Cloud-native infrastructure that grows alongside your product</div>
        </div>
      </div>
    </section>
  );
}

export default MetricsGrid;
