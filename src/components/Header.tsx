import React from 'react';
import { Terminal } from 'lucide-react';

export function Header() {
  return (
    <header className="py-12 border-b border-green-800/30">
      <div className="flex items-center gap-4 mb-6">
        <Terminal className="w-12 h-12" />
        <h1 className="text-4xl font-bold">System.Engineer</h1>
      </div>
      <p className="text-xl text-green-300/80">
        Low-level systems programmer specializing in OS development, 
        embedded systems, and performance optimization
      </p>
    </header>
  );
}