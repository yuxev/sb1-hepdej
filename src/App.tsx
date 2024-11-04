import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { TerminalWindow } from './components/Terminal';
import { Contact } from './components/Contact';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      <div className={`max-w-6xl mx-auto p-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        
        <main className="py-12">
          <Stats />
          <Projects />
          <TerminalWindow />
          <Contact />
        </main>

        <footer className="py-6 border-t border-green-800/30 text-center text-green-400/60">
          <p>Built with precision and performance in mind</p>
        </footer>
      </div>
    </div>
  );
}

export default App;