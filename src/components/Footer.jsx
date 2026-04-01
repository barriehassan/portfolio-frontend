import React from 'react';

const Github = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.62-.3 7.5-1.8 7.5-8.18 0-1.8-.6-3.3-1.6-4.5.2-.5.7-2.1-.2-4.4 0 0-1.3-.4-4.2 1.6-1.2-.3-2.5-.5-3.8-.5s-2.6.2-3.8.5c-2.9-2-4.2-1.6-4.2-1.6-.9 2.3-.4 3.9-.2 4.4-1 1.2-1.6 2.7-1.6 4.5 0 6.3 3.8 7.9 7.4 8.2-.8.6-1 1.8-1 2.8v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
const Linkedin = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
const Twitter = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo-mark" style={{ margin: '0 auto 20px auto', width: '40px', height: '40px', fontSize: '14px' }}>HB</div>
        <p>&copy; 2024 barrie.dev. All rights reserved.</p>
        <div className="socials">
          <a href="#"><Github size={20} /></a>
          <a href="#"><Linkedin size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
