import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#f0f8ff] font-sans antialiased text-[#002d5a]">
      <Navbar />

      {/* HERO SECTION */}
      <header className="min-h-[calc(100vh-76px)] flex items-center py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Intro Text Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-[#002d5a] uppercase tracking-tighter leading-none mb-2">
                Karina Castillo
              </h1>
              <span className="inline-block bg-[#0062ff] text-white text-xl md:text-2xl font-extrabold uppercase px-5 py-2 mb-6">
                Full-Stack Developer | Logical & Creative
              </span>
              <p className="text-xl text-slate-600 max-w-lg mx-auto lg:mx-0">
                Graduating CS student who loves solving the puzzle between robust backend logic and intuitive frontend design.
              </p>
              
              <div className="mt-8">
                <a href="#resume" download className="inline-block border-3 border-[#ff9100] text-[#ff9100] font-black uppercase tracking-wider text-lg px-8 py-3 hover:bg-[#ff9100] hover:text-[#002d5a] transition-all hover:-translate-y-0.5">
                  Download Resume ↓
                </a>
              </div>
            </div>

            {/* Right Featured Card Column */}
            <div id="featured">
              <div className="bg-white border-3 border-[#0062ff] p-6 md:p-12 shadow-[15px_15px_0px_rgba(0,98,255,0.1)]">
                <small className="block font-bold text-[#0062ff] uppercase tracking-wide mb-3">
                  Featured Work | Web Application
                </small>
                <h2 className="text-3xl md:text-4xl font-black mb-4">Pit Point Stop</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Developed a full-stack web application connecting drivers, sponsors, and administrators with a dynamic point-tracking and rewards ecosystem. Engineered the secure data flow and user management system, leveraging AWS for reliable cloud deployment.
                </p>
                
                <div className="mt-10">
                  <a href="/projects" className="block text-center bg-[#ff9100] text-[#002d5a] font-black uppercase tracking-wider text-xl py-5 px-6 shadow-[8px_8px_0px_#0062ff] hover:bg-[#ffab40] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    Explore the Project →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ABOUT & SKILLS SECTION */}
      <main className="bg-white py-20 px-4 shadow-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* About Column */}
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#002d5a] border-b-3 border-[#0062ff] inline-block pb-1 mb-6">
                About Me
              </h2>
              <p className="text-xl text-slate-600 font-light mb-4">
                Hi, I'm Karina! I love bridging the gap between elegant user interfaces and complex database architecture. My passion for computer science stems from a love of continuous learning and problem-solving.
              </p>
              <p className="text-slate-600">
                When I'm not coding, you can find me exploring new design trends, debugging logic puzzles, or preparing to launch my post-graduation career.
              </p>
            </div>

            {/* Skills Badges Column */}
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#002d5a] border-b-3 border-[#0062ff] inline-block pb-1 mb-6">
                Technical Skills
              </h2>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'Java', 'C++'].map(skill => (
                    <span key={skill} className="bg-[#f0f8ff] text-[#002d5a] border-2 border-[#0062ff] font-bold uppercase text-sm px-4 py-1.5">{skill}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Jinja2', 'Prolog'].map(skill => (
                    <span key={skill} className="bg-[#f0f8ff] text-[#002d5a] border-2 border-[#0062ff] font-bold uppercase text-sm px-4 py-1.5">{skill}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Agile', 'MySQL', 'Git & GitHub', 'REST APIs'].map(skill => (
                    <span key={skill} className="bg-[#f0f8ff] text-[#002d5a] border-2 border-[#0062ff] font-bold uppercase text-sm px-4 py-1.5">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;