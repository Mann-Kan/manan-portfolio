import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internships />
      <Certifications />
      <Projects />
      <TechnicalSkills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;