import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import CursorGradient from './components/CursorGradient';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About setActiveSection={setActiveSection} />;
      case 'projects':
        return <Projects setActiveSection={setActiveSection} />;
      case 'social':
        return <Social setActiveSection={setActiveSection} />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <CursorGradient />
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="transition-all duration-500 ease-in-out">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default App;