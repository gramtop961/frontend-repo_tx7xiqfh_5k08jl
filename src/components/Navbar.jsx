import React from 'react';
import { Plane } from 'lucide-react';

export default function Navbar({ route, setRoute }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-[#D9E0E8]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setRoute('home')}
          className="flex items-center gap-2 group"
          aria-label="SEC Ticket Sales Home"
        >
          <div className="p-2 rounded-md bg-[#0A1C3F] text-white">
            <Plane className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="font-semibold text-[#0A1C3F] leading-tight">SEC Ticket Sales</div>
            <div className="text-xs text-[#2EB6E8]">Where Smart Travelers Save More.</div>
          </div>
        </button>
        <nav className="flex items-center gap-1 text-sm">
          <button
            onClick={() => setRoute('home')}
            className={`px-4 py-2 rounded-md transition-colors ${
              route === 'home'
                ? 'bg-[#0A1C3F] text-white'
                : 'text-[#0A1C3F] hover:bg-[#D9E0E8]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setRoute('about')}
            className={`px-4 py-2 rounded-md transition-colors ${
              route === 'about'
                ? 'bg-[#0A1C3F] text-white'
                : 'text-[#0A1C3F] hover:bg-[#D9E0E8]'
            }`}
          >
            About / Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
