import React from 'react';

const projects = [
  {
    title: "Custom x86 Bootloader",
    description: "Developed a minimalist bootloader in pure assembly, implementing real-mode to protected-mode transition, memory management, and basic I/O operations.",
    tags: ["Assembly", "x86", "OS Development"],
    metrics: "512 bytes optimized boot sector"
  },
  {
    title: "Memory Allocator",
    description: "Built a high-performance memory allocator with custom heap management, featuring coalescing, splitting, and thread-safe operations.",
    tags: ["C", "Memory Management", "Threading"],
    metrics: "40% faster than standard malloc"
  },
  {
    title: "Bare Metal ARM Kernel",
    description: "Implemented a bare-metal kernel for ARM Cortex-M4 with interrupt handling, context switching, and real-time scheduling.",
    tags: ["C", "ARM Assembly", "Embedded"],
    metrics: "4KB memory footprint"
  }
];

export function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl mb-8 border-b border-green-800/30 pb-2">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, metrics }: {
  title: string;
  description: string;
  tags: string[];
  metrics: string;
}) {
  return (
    <div className="bg-gray-800/30 p-6 rounded-lg border border-green-800/30 hover:border-green-600/50 transition-all duration-300">
      <h3 className="text-xl mb-3 font-bold">{title}</h3>
      <p className="text-green-300/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-green-900/30 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-green-400/60">{metrics}</div>
    </div>
  );
}