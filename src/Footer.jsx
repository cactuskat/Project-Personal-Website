// src/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="container mx-auto px-4 pt-16 pb-8 border-t border-slate-200 text-center">
      {/* Social Icons Container */}
      <div className="flex justify-center space-x-6 text-3xl">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-[#002d5a] hover:text-[#ff9100] hover:scale-110 transform transition-all duration-200" 
          title="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-[#002d5a] hover:text-[#ff9100] hover:scale-110 transform transition-all duration-200" 
          title="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a 
          href="mailto:your.email@example.com" 
          className="text-[#002d5a] hover:text-[#ff9100] hover:scale-110 transform transition-all duration-200" 
          title="Email Me"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        © 2026 Karina Castillo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;