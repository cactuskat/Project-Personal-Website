// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectsPage from './ProjectsPage'; // 1. Import your projects page component

function App() {
  return (
    <Router>
      <Routes>
        {/* 2. Map the root URL to your main portfolio landing page */}
        <Route path="/" element={<Home />} />
        
        {/* 3. Map the /projects URL to your detailed case studies page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;