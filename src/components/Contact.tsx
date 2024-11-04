import React from 'react';
import { Github, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section>
      <h2 className="text-2xl mb-8 border-b border-green-800/30 pb-2">Connect</h2>
      <div className="flex gap-6">
        <a href="https://github.com" className="flex items-center gap-2 hover:text-green-300 transition-colors">
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-green-300 transition-colors">
          <Mail className="w-5 h-5" />
          Email
        </a>
      </div>
    </section>
  );
}