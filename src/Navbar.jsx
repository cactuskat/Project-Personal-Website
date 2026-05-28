// src/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESUME_URL, GITHUB_URL, LINKEDIN_URL,EMAIL_URL } from './config';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-slate-100 py-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link className="font-black text-xl text-[#002d5a] tracking-tight" to="/">
          🏰 Castillo
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#002d5a] focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // "X" Icon when menu is open
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon when menu is closed
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className="font-bold text-[#002d5a] hover:text-[#0062ff] transition-colors" to="/">
            Home
          </Link>
          <Link className="font-bold text-[#002d5a] hover:text-[#0062ff] transition-colors" to="/projects">
            Featured Projects
          </Link>
          <a className="font-bold text-[#002d5a] hover:text-[#ff9100] transition-colors" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="font-bold text-[#002d5a] hover:text-[#ff9100] transition-colors" href={EMAIL_URL}  target="_blank" rel="noreferrer">
            Email
          </a>
          <a className="bg-[#0062ff] hover:bg-blue-700 text-white font-bold px-5 py-2 transition-colors" href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-[100%] left-0 w-full bg-white border-b-2 border-slate-100 shadow-lg z-40 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-4 px-6 py-6">
          <Link 
            className="font-bold text-[#002d5a] hover:text-[#0062ff] transition-colors text-lg" 
            to="/" 
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            className="font-bold text-[#002d5a] hover:text-[#0062ff] transition-colors text-lg" 
            to="/projects" 
            onClick={toggleMenu}
          >
            Featured Projects
          </Link>
          <a 
            className="font-bold text-[#002d5a] hover:text-[#ff9100] transition-colors text-lg" 
            href={GITHUB_URL}
            target="_blank" 
            rel="noreferrer"
            onClick={toggleMenu}
          >
            GitHub
          </a>
          <a 
            className="font-bold text-[#002d5a] hover:text-[#ff9100] transition-colors text-lg" 
            href={EMAIL_URL}  
            target={EMAIL_URL === '/' ? '_self' : '_blank'}
            rel="noreferrer"
            onClick={toggleMenu}
          >
            Email
          </a>
          <a 
            className="bg-[#0062ff] hover:bg-blue-700 text-white font-bold px-5 py-3 transition-colors text-center inline-block w-full" 
            href={RESUME_URL} 
            target="_blank" 
            rel="noreferrer"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;