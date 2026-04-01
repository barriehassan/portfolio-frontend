import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import MetricsGrid from '../components/MetricsGrid';
import ProjectsSection from '../components/ProjectsSection';
import ArchitectureSection from '../components/ArchitectureSection';
import ContactCTA from '../components/ContactCTA';

function Home() {
  useEffect(() => {
    // Smooth reveal on scroll setup
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(
      '.section-header, .metric-card, .project-card, .timeline-item, .education-card, .arch-diagram, .cta-box'
    );

    elementsToReveal.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${(index % 4) * 0.1}s`;
      observer.observe(el);
    });

    // Interactive glowing cards
    const interactiveCards = document.querySelectorAll('.metric-card');

    interactiveCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="ambient-glow"></div>
      <HeroSection />
      <MetricsGrid />
      <ProjectsSection />
      <ArchitectureSection />
      <ContactCTA />
    </main>
  );
}

export default Home;
