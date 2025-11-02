import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#D9E0E8] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} SEC Ticket Sales. All rights reserved.
        </p>
        <p className="text-sm text-slate-600">
          Premium travel • Secure • Trust-focused
        </p>
      </div>
    </footer>
  );
}
