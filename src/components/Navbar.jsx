import React, { useEffect } from 'react';
import { Download } from 'lucide-react';

function Navbar() {
  useEffect(() => {
    // Navbar blur effect on scroll
    const header = document.querySelector('header');
    if (header) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          header.style.background = 'rgba(11, 11, 26, 0.85)';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
          header.style.background = 'var(--bg-glass)';
          header.style.boxShadow = 'none';
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header>
      <div className="container nav-container">
        <a href="#" className="logo">
          <div className="logo-mark">HB</div>
          barrie.dev
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#cv" className="btn btn-primary">
          <Download size={18} />
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Navbar;
