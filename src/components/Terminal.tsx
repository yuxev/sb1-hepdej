import React from 'react';

export function TerminalWindow() {
  return (
    <section className="mb-16">
      <div className="bg-gray-800/50 p-4 rounded-lg border border-green-800/30">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-sm">
          <p className="mb-2">$ whoami</p>
          <p className="text-green-300/70 mb-2">→ Systems Engineer with a passion for low-level programming</p>
          <p className="mb-2">$ cat skills.txt</p>
          <p className="text-green-300/70 mb-2">→ Bootloader Development</p>
          <p className="text-green-300/70 mb-2">→ Kernel Programming</p>
          <p className="text-green-300/70 mb-2">→ Memory Management</p>
          <p className="text-green-300/70">→ Hardware Interfacing</p>
        </div>
      </div>
    </section>
  );
}