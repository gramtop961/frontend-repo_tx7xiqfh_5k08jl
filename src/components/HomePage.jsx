import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

export default function HomePage({ goToContact }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.05) contrast(1.05)'
          }}
        />
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 py-24 lg:py-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1C3F]">
                Fly Cheaper — Secure Discount Flight Deals
              </h1>
              <p className="mt-3 text-[#2EB6E8] font-medium">
                “Where Smart Travelers Save More.”
              </p>
              <p className="mt-6 text-slate-700 text-lg leading-relaxed bg-white/80 p-4 rounded-md shadow-sm">
                SEC Ticket Sales helps you save on domestic & international flights. We source advance-purchase & wholesale airline fares, meaning cheaper tickets than major booking websites. Safe, secure, verified flight deals.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center rounded-md bg-[#0A1C3F] px-6 py-3 text-white font-semibold shadow hover:shadow-md hover:bg-[#092035] transition-colors"
                >
                  Request Flight Quote
                </button>
                <div className="flex items-center gap-2 text-sm text-[#0A1C3F] bg-white/80 px-3 py-2 rounded">
                  <Shield className="h-4 w-4 text-[#2EB6E8]" />
                  Trusted, secure deals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-t border-[#D9E0E8]">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrustItem title="Wholesale fares" desc="Access to advance-purchase and negotiated airline prices." />
          <TrustItem title="Safe & secure" desc="Verified deals with a reliability-first approach." />
          <TrustItem title="Global coverage" desc="Domestic and international itineraries, business or leisure." />
        </div>
      </section>
    </main>
  );
}

function TrustItem({ title, desc }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-[#D9E0E8] bg-[#F7FAFC]">
      <CheckCircle2 className="h-6 w-6 text-[#2EB6E8] flex-shrink-0" />
      <div>
        <div className="font-semibold text-[#0A1C3F]">{title}</div>
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
