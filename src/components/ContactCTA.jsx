import React from 'react';
import { Mail } from 'lucide-react';

function ContactCTA() {
  return (
    <section id="contact" className="container cta-section">
      <div className="cta-box">
        <h2 className="cta-title">Let's build something <span className="text-gradient">impactful</span> together.</h2>
        <p className="cta-desc">Whether you're looking to scale an existing system or architect a new high-performance platform from the ground up, I'm available for engineering roles and consulting.</p>
        <a href="mailto:contact@barrie.dev" className="btn btn-primary" style={{ fontSize: '1.15rem', padding: '20px 48px' }}>
          <Mail size={18} /> Get In Touch
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
