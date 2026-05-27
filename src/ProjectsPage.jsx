import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002d5a]">
      <Navbar />

      {/* PAGE HEADER */}
      <header className="py-16 text-center bg-[#f0f8ff] px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Featured Projects</h1>
          <p className="text-lg text-slate-600">A deep dive into my software architecture, technical challenges, and full-stack solutions.</p>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="container mx-auto max-w-6xl py-16 px-4 space-y-24">

        {/* ========================================== */}
        {/* CASE STUDY 01: PIT POINT STOP              */}
        {/* ========================================== */}
        <section className="pb-16 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Sticky Specs */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
                <small className="block font-bold text-[#0062ff] uppercase tracking-wide mb-1">Capstone Senior Project</small>
                <h2 className="text-4xl font-black uppercase text-[#002d5a] mb-4">Pit Point Stop</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {['Flask / Python', 'SQL', 'Jinja2', 'Agile / Azure DevOps'].map(badge => (
                    <span key={badge} className="bg-[#f0f8ff] text-[#002d5a] border-2 border-[#0062ff] font-bold uppercase text-xs px-3 py-1">{badge}</span>
                    ))}
                </div>

                <p className="text-slate-600 text-lg mb-6">
                    A mobile-first full-stack web application developed over a 12-week Agile lifecycle, connecting drivers, company sponsors, and system administrators via a custom points and rewards portal.
                </p>

                <div className="flex flex-col gap-3">
                    <a 
                    href="https://pit-point-stop.onrender.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-center bg-[#ff9100] text-[#002d5a] font-black uppercase text-base py-4 shadow-[4px_4px_0px_#0062ff] hover:bg-[#ffab40] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                    >
                    Explore Live Version →
                    </a>
                    
                    {/* HERE IS YOUR DISCLAIMER NOTE */}
                    <p className="text-xs text-slate-500 italic mt-1 leading-relaxed">
                    *Note: This live demo is hosted on a free cloud web service. Please allow 30–45 seconds for the spin-down database server to wake up on your first visit!
                    </p>
                </div>
                </div>

            {/* Right Column: Case Breakdown */}
            <div className="lg:col-span-8 space-y-8">
            
            {/* Permissions Table */}
            <div className="bg-[#002d5a] border-3 border-[#0062ff] p-6 text-white shadow-[10px_10px_0px_rgba(0,98,255,0.1)]">
                <div className="flex items-center justify-between border-b border-blue-500 pb-3 mb-6">
                <span className="font-black text-xs uppercase tracking-widest text-[#ff9100]">🔐 Role-Based Access Control</span>
                <span className="bg-[#0062ff] text-xs px-2.5 py-0.5 font-bold uppercase">3 User Roles</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                {/* Driver */}
                <div className="bg-[#001f3f] border border-blue-400 p-4">
                    <h4 className="font-black text-sm uppercase text-[#ff9100] border-b border-blue-900 pb-1 mb-3">🚛 Driver</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                    <li>✅ Browse sponsor product catalogs</li>
                    <li>✅ Apply to & drop sponsor relationships</li>
                    <li>✅ Track personal point history</li>
                    <li>✅ Redeem points for products</li>
                    <li>✅ Edit profile & account info</li>
                    <li>🚫 Cannot manage other users</li>
                    </ul>
                </div>

                {/* Sponsor */}
                <div className="bg-[#001f3f] border border-blue-400 p-4">
                    <h4 className="font-black text-sm uppercase text-[#ff9100] border-b border-blue-900 pb-1 mb-3">🏢 Sponsor</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                    <li>✅ Manage product catalog</li>
                    <li>✅ Award or deduct driver points</li>
                    <li>✅ Bulk upload drivers</li>
                    <li>✅ View driver performance reports</li>
                    <li>✅ Manage company profile</li>
                    <li>🚫 Cannot access other sponsors</li>
                    </ul>
                </div>

                {/* Admin */}
                <div className="bg-[#001f3f] border border-blue-400 p-4">
                    <h4 className="font-black text-sm uppercase text-[#ff9100] border-b border-blue-900 pb-1 mb-3">🛡️ Admin</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                    <li>✅ Full system visibility</li>
                    <li>✅ Manage all users & roles</li>
                    <li>✅ View all sponsor & driver reports</li>
                    <li>✅ Oversee point transactions</li>
                    <li>✅ Monitor sponsor catalogs</li>
                    <li>✅ Post-launch system maintenance</li>
                    </ul>
                </div>
                </div>

                <div className="mt-4 bg-[#00152b] p-3 text-xs text-slate-400 leading-relaxed border-l-2 border-[#ff9100]">
                📌 <strong className="text-slate-200">Access Note:</strong> Each role routes to a fully isolated dashboard on login — no shared views, no permission bleed. Backed by a relational schema with encrypted auth and dynamic join tables to support fluid driver-sponsor relationships.
                </div>
            </div>

            <h3 className="text-2xl font-black uppercase border-b-3 border-[#0062ff] inline-block pb-1">Project Breakdown</h3>

            {/* STAR 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border-2 border-[#0062ff]">
                <h4 className="font-bold text-[#0062ff] uppercase text-xs tracking-wider mb-2">Situation / Context</h4>
                <p className="text-slate-600 text-sm">
                    Contracted to build a trucking industry incentive platform where sponsors reward drivers for safe behavior through a points-based product catalog — serving 3 distinct user roles with full post-launch admin ownership.
                </p>
                </div>

                <div className="p-5 border-2 border-[#0062ff]">
                <h4 className="font-bold text-[#0062ff] uppercase text-xs tracking-wider mb-2">Task & Leadership Role</h4>
                <p className="text-slate-600 text-sm">
                    Served as <strong>Scrum Master</strong> in <strong>Azure DevOps</strong>, owning the database architecture, authentication layer, and points tracking engine.
                </p>
                </div>

                <div className="p-5 border-2 border-[#ff9100] md:col-span-2">
                <h4 className="font-bold text-[#ff9100] uppercase text-xs tracking-wider mb-2">Action Taken & Engineering Challenges</h4>
                <p className="text-slate-600 text-sm mb-3">
                    <strong>Full-Stack Development:</strong> Built backend routing in Python/Flask with Jinja2 templates and vanilla JS, designing core relational tables — <code>users</code>, <code>sponsor_companies</code>, <code>password_changes</code>, <code>driver_applications</code> — with encrypted user data throughout.
                </p>
                <p className="text-slate-600 text-sm bg-amber-50/50 p-3 border-l-4 border-[#ff9100]">
                    <strong>Scope Creep:</strong> Mid-project, stakeholders required drivers to dynamically manage relationships with multiple sponsors. Dismantled the original static binding and refactored into a fully decoupled relational structure from scratch.
                </p>
                </div>

                <div className="p-5 bg-slate-50 border-2 border-[#002d5a] md:col-span-2">
                <h4 className="font-bold text-[#002d5a] uppercase text-xs tracking-wider mb-2">Result & Project Outcomes</h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5">
                    <li>Delivered secure role-based login routing, profile editing, and accurate driver point tracking.</li>
                    <li>Closed <strong>60 of 150+ user stories</strong> across sprint cycles as Scrum Master.</li>
                    <li>Earned an <strong>A</strong> — demoed live to <strong>30+ peers and faculty</strong>, validated across <strong>7+ devices</strong>.</li>
                </ul>
                </div>
            </div>

            {/* Extended Scope Divider */}
            <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Extended Scope</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* STAR 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border-2 border-[#0062ff]">
                <h4 className="font-bold text-[#0062ff] uppercase text-xs tracking-wider mb-2">Situation / Context</h4>
                <p className="text-slate-600 text-sm">
                    With a stable core system in place, stakeholder requirements continued to evolve — demanding 3 major feature expansions without disrupting existing functionality.
                </p>
                </div>

                <div className="p-5 border-2 border-[#0062ff]">
                <h4 className="font-bold text-[#0062ff] uppercase text-xs tracking-wider mb-2">Task & Leadership Role</h4>
                <p className="text-slate-600 text-sm">
                    Architect and deliver each expansion iteratively, maintaining system stability across sprint cycles while leveraging <strong>AI-assisted development</strong> to accelerate delivery.
                </p>
                </div>

                <div className="p-5 border-2 border-[#ff9100] md:col-span-2">
                <h4 className="font-bold text-[#ff9100] uppercase text-xs tracking-wider mb-2">Action Taken & Feature Expansions</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-amber-50/50 p-3 border-l-4 border-[#ff9100] text-slate-600 text-sm">
                    <strong className="block mb-1">Multi-Sponsor Applications</strong>
                    Refactored driver-sponsor binding from a static one-to-one into a flexible many-to-many relational structure.
                    </div>
                    <div className="bg-amber-50/50 p-3 border-l-4 border-[#ff9100] text-slate-600 text-sm">
                    <strong className="block mb-1">Bulk Driver Upload</strong>
                    Built a sponsor-facing bulk upload flow, allowing companies to onboard multiple drivers efficiently in a single action.
                    </div>
                    <div className="bg-amber-50/50 p-3 border-l-4 border-[#ff9100] text-slate-600 text-sm">
                    <strong className="block mb-1">Reporting Layer</strong>
                    Delivered a reporting interface for sponsors and admins to query and review driver activity and point histories.
                    </div>
                </div>
                </div>

                <div className="p-5 bg-slate-50 border-2 border-[#002d5a] md:col-span-2">
                <h4 className="font-bold text-[#002d5a] uppercase text-xs tracking-wider mb-2">Result & Project Outcomes</h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5">
                    <li>System scaled cleanly across all 3 feature expansions with no regression to core functionality.</li>
                    <li>AI-assisted development accelerated delivery, keeping the team on pace through evolving requirements.</li>
                    <li>Reporting layer gave stakeholders real-time visibility into driver performance across all sponsor relationships.</li>
                </ul>
                </div>
            </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* CASE STUDY 02: PIER PRESSURE               */}
        {/* ========================================== */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Sticky Specs */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <small className="block font-bold text-[#0062ff] uppercase tracking-wide mb-1">Duo Class Project</small>
              <h2 className="text-4xl font-black uppercase text-[#002d5a] mb-4">ConnectX</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'REST API Architecture', 'Automated Testing', 'PostgreSQL'].map(badge => (
                  <span key={badge} className="bg-[#f0f8ff] text-[#002d5a] border-2 border-[#0062ff] font-bold uppercase text-xs px-3 py-1">{badge}</span>
                ))}
              </div>

              <p className="text-slate-600 text-lg mb-6">
                A highly optimized, multi-user backend engine designed to manage structured, stateful game rooms alongside persistent operational telemetry.
              </p>

              <div className="flex flex-col gap-3">
                <a href="https://github.com/cactuskat/ConnectX" className="text-center bg-[#ff9100] text-[#002d5a] font-black uppercase text-base py-4 shadow-[4px_4px_0px_#0062ff] hover:bg-[#ffab40] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                  View Repository →
                </a>
              </div>
            </div>

            {/* Right Column: Case Breakdown */}
            <div className="lg:col-span-8 space-y-8">

            {/* Tech Stack Bar */}
            <div className="bg-[#002d5a] border-3 border-[#0062ff] p-6 text-white shadow-[10px_10px_0px_rgba(0,98,255,0.1)]">
                <div className="flex items-center justify-between border-b border-blue-500 pb-3 mb-6">
                <span className="font-black text-xs uppercase tracking-widest text-[#ff9100]">☕ Tech & Architecture</span>
                <span className="bg-[#0062ff] text-xs px-2.5 py-0.5 font-bold uppercase">Java · Swing · JUnit</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#001f3f] border border-blue-400 p-4">
                    <h4 className="font-black text-sm uppercase text-[#ff9100] border-b border-blue-900 pb-1 mb-3">🏗️ OOP Design</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                    <li><code className="text-blue-300">IGameBoard</code> — core interface</li>
                    <li><code className="text-blue-300">AbsGameBoard</code> — abstract layer</li>
                    <li><code className="text-blue-300">GameBoard</code> — 2D array impl</li>
                    <li><code className="text-blue-300">GameBoardMem</code> — Map impl</li>
                    </ul>
                </div>

                <div className="bg-[#001f3f] border border-blue-400 p-4">
                    <h4 className="font-black text-sm uppercase text-[#ff9100] border-b border-blue-900 pb-1 mb-3">🖥️ MVC GUI</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                    <li>✅ Swing-based interactive board</li>
                    <li>✅ Separated model, view, controller</li>
                    <li>✅ 2–10 player support</li>
                    <li>✅ Built independently post-submission</li>
                    </ul>
                </div>

                <div className="bg-[#001f3f] border border-blue-400 p-4">
                    <h4 className="font-black text-sm uppercase text-[#ff9100] border-b border-blue-900 pb-1 mb-3">🧪 Test Coverage</h4>
                    <ul className="text-xs text-slate-300 space-y-2">
                    <li>✅ 30+ JUnit test cases</li>
                    <li>✅ Horiz, vert & diagonal wins</li>
                    <li>✅ Edge cases & board boundaries</li>
                    <li>✅ Both implementations tested</li>
                    </ul>
                </div>
                </div>

                <div className="mt-4 bg-[#00152b] p-3 text-xs text-slate-400 leading-relaxed border-l-2 border-[#ff9100]">
                📌 <strong className="text-slate-200">Repo Note:</strong> Original team repo was removed post-submission — personal copy preserved and independently extended with a full Swing GUI.
                </div>
            </div>

            <h3 className="text-2xl font-black uppercase border-b-3 border-[#0062ff] inline-block pb-1">Project Breakdown</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border-2 border-[#0062ff]">
                <h4 className="font-bold text-[#0062ff] uppercase text-xs tracking-wider mb-2">Situation / Context</h4>
                <p className="text-slate-600 text-sm">
                    Java course project — a customizable Connect 4 variant supporting any board size and win condition, built with a partner using structured OOP design patterns.
                </p>
                </div>

                <div className="p-5 border-2 border-[#0062ff]">
                <h4 className="font-bold text-[#0062ff] uppercase text-xs tracking-wider mb-2">Task & Ownership</h4>
                <p className="text-slate-600 text-sm">
                    Co-developed the core game engine and test suite, owning the OOP architecture — interface, abstract class, and dual concrete implementations backed by different data structures.
                </p>
                </div>

                <div className="p-5 border-2 border-[#ff9100] md:col-span-2">
                <h4 className="font-bold text-[#ff9100] uppercase text-xs tracking-wider mb-2">Action Taken</h4>
                <p className="text-slate-600 text-sm mb-3">
                    <strong>OOP Architecture:</strong> Designed a clean inheritance chain — <code>IGameBoard</code> interface → <code>AbsGameBoard</code> abstract class → two interchangeable implementations: <code>GameBoard</code> (2D array) and <code>GameBoardMem</code> (Map). Validated both with 30+ JUnit tests covering all win directions, boundary conditions, and edge cases.
                </p>
                <p className="text-slate-600 text-sm bg-amber-50/50 p-3 border-l-4 border-[#ff9100]">
                    <strong>Independent Extension:</strong> Independently built a Swing GUI on top of the existing engine — architected with full MVC separation across model, view, and controller packages, taking the project from a terminal app to a fully interactive application.
                </p>
                </div>

                <div className="p-5 bg-slate-50 border-2 border-[#002d5a] md:col-span-2">
                <h4 className="font-bold text-[#002d5a] uppercase text-xs tracking-wider mb-2">Result & Outcomes</h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5">
                    <li>Delivered a fully playable game supporting <strong>2–10 players</strong> on boards up to <strong>100×100</strong> with configurable win conditions.</li>
                    <li>Dual implementations fully interchangeable via shared interface — zero changes to game logic required to swap data structures.</li>
                    <li>Self-directed GUI extension demonstrates initiative and ownership beyond the assignment scope.</li>
                </ul>
                </div>
            </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ProjectsPage;