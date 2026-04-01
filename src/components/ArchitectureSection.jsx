import React from 'react';
import { Monitor, Layers, Database, Cpu, GitMerge } from 'lucide-react';

function ArchitectureSection() {
  return (
    <section className="container">
      <div className="section-header" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2>How I Think in <span className="text-gradient">Systems</span></h2>
        <p>Designing decoupled, resilient, and scalable cloud-native architectures.</p>
      </div>

      <div className="arch-diagram">
        <div className="arch-grid-bg"></div>
        <div className="arch-glow"></div>

        <div className="arch-row">
          <div className="arch-node">
            <Monitor size={24} />
            Frontend Client Apps
          </div>
        </div>

        <div className="arch-connector"></div>

        <div className="arch-row">
          <div className="arch-node" style={{ borderColor: 'var(--primary)', transform: 'scale(1.05)', zIndex: 20 }}>
            <Layers size={24} />
            Django REST API Gateway
          </div>
        </div>

        <div className="arch-connector"></div>

        <div className="arch-row">
          <div className="arch-node">
            <Database size={24} />
            PostgreSQL
          </div>
          <div className="arch-node">
            <Cpu size={24} />
            Redis Cache
          </div>
          <div className="arch-node">
            <GitMerge size={24} />
            Celery Workers
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;
