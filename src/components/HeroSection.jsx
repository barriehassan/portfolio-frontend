import React from 'react';
import { FileCode, Terminal, Layers, Database } from 'lucide-react';
import hassanPic from '../assets/hassan_pic_short.jpg';

function HeroSection() {
  return (
    <section id="home" className="container" style={{ paddingTop: '0px' }}>
      <div className="hero">
        <div className="hero-content">
          <div className="subtitle">Hassan Barrie</div>
          <h1 className="hero-title">
            Building Scalable <br />
            <span className="text-gradient">Backends & Digital</span> <br />
            Infrastructure.
          </h1>
          <p className="hero-desc">
            Software engineer specializing in robust API architectures,
            data platforms, and impactful digital infrastructure.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-container">
            <div className="portrait-inner">
              <img
                src={hassanPic}
                alt="Hassan Barrie"
                className="portrait-fallback"
              />
            </div>
          </div>
          <div className="tech-badge badge-1">
            <FileCode size={18} /> JavaScript
          </div>
          <div className="tech-badge badge-2">
            <Terminal size={18} /> Python
          </div>
          <div className="tech-badge badge-3">
            <Layers size={18} /> Django
          </div>
          <div className="tech-badge badge-4">
            <Database size={18} /> PostgreSQL
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
