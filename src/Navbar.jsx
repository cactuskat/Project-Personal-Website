// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-slate-100 py-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo - Swapped href to Link to */}
        <Link className="font-black text-xl text-[#002d5a] tracking-tight" to="/">
          🏰 Castillo
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link className="font-bold text-[#002d5a] hover:text-[#0062ff] transition-colors" to="/">
            Home
          </Link>
      
          <Link className="font-bold text-[#002d5a] hover:text-[#0062ff] transition-colors" to="/projects">
            Featured Projects
          </Link>
          
          <a className="hidden sm:inline-block font-bold text-[#002d5a] hover:text-[#ff9100] transition-colors" href="https://github.com/cactuskat" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hidden sm:inline-block font-bold text-[#002d5a] hover:text-[#ff9100] transition-colors" href="mailto:karinacastillo.dev@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
          <a className="bg-[#0062ff] hover:bg-blue-700 text-white font-bold px-5 py-2 transition-colors" href="https://drive.google.com/file/d/1K7dty9dtQDzj7kwKbTqa7s1aSPjDPdCv/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;