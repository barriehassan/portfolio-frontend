import React from 'react';
import { Server, Shield, ShoppingCart } from 'lucide-react';

const Github = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.62-.3 7.5-1.8 7.5-8.18 0-1.8-.6-3.3-1.6-4.5.2-.5.7-2.1-.2-4.4 0 0-1.3-.4-4.2 1.6-1.2-.3-2.5-.5-3.8-.5s-2.6.2-3.8.5c-2.9-2-4.2-1.6-4.2-1.6-.9 2.3-.4 3.9-.2 4.4-1 1.2-1.6 2.7-1.6 4.5 0 6.3 3.8 7.9 7.4 8.2-.8.6-1 1.8-1 2.8v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;

function ProjectsSection() {
  const projects = [
    {
      title: 'Municipal Complaint Reporting System',
      description: 'A highly available distributed platform for city residents to report infrastructure issues, automatically routing tickets to specialized departments using geospatial tagging.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      icon: Server,
      tags: ['Django', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      title: 'ElpWoman Platform',
      description: 'A secure, privacy-first community platform designed to connect African women with resources, mentorship, and opportunities handling sensitive encrypted user data.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
      icon: Shield,
      tags: ['FastAPI', 'AWS KMS', 'React', 'Celery']
    },
    {
      title: 'ToolLend Marketplace',
      description: 'A sophisticated peer-to-peer equipment rental marketplace featuring real-time inventory locking, secure payment escrow integration, and rapid geolocation search.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      icon: ShoppingCart,
      tags: ['Node.js', 'MongoDB', 'Stripe', 'ElasticSearch']
    }
  ];

  return (
    <section id="projects" className="container">
      <div className="section-header">
        <h2>Featured Engineering <span className="text-gradient">Projects</span></h2>
        <p>A selection of production systems I've designed and engineered from the ground up.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div key={index} className="project-card">
              <div className="project-preview">
                <div className="project-preview-bg" style={{ backgroundImage: `url('${project.image}')` }}></div>
                <IconComponent size={48} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Case Study</a>
                  <a href="#" className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}><Github size={16} /></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
