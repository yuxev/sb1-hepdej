import React from 'react';
import { Cpu, HardDrive, Code2 } from 'lucide-react';

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <StatCard
        icon={<Cpu className="w-8 h-8 mb-4" />}
        title="System Architecture"
        description="x86_64, ARM, RISC-V"
      />
      <StatCard
        icon={<HardDrive className="w-8 h-8 mb-4" />}
        title="Core Expertise"
        description="Bootloaders, Kernels, Drivers"
      />
      <StatCard
        icon={<Code2 className="w-8 h-8 mb-4" />}
        title="Languages"
        description="Assembly, C, Rust"
      />
    </div>
  );
}

function StatCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-green-800/30 backdrop-blur">
      {icon}
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-green-300/70">{description}</p>
    </div>
  );
}