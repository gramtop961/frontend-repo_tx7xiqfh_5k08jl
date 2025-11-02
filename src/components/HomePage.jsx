import React from 'react';
import { CheckCircle2, Shield, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HomePage({ goToContact }) {
  return (
    <main>
      {/* Hero with Spline animation */}
      <section className="relative h-[560px] md:h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Contrast gradient overlay that does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

        <div className="relative h-full">
          <div className="mx-auto max-w-6xl h-full px-4 flex items-center">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl md:text-5xl font-extrabold text-[#0A1C3F]"
              >
                Fly Cheaper — Secure Discount Flight Deals
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="mt-3 text-[#2EB6E8] font-medium"
              >
                “Where Smart Travelers Save More.”
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="mt-6 text-slate-700 text-lg leading-relaxed bg-white/80 p-4 rounded-md shadow-sm"
              >
                SEC Ticket Sales helps you save on domestic & international flights. We source advance-purchase & wholesale airline fares, meaning cheaper tickets than major booking websites. Safe, secure, verified flight deals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="mt-8 flex items-center gap-3"
              >
                <button
                  onClick={goToContact}
                  className="relative inline-flex items-center justify-center rounded-md bg-[#0A1C3F] px-6 py-3 text-white font-semibold shadow hover:shadow-md hover:bg-[#092035] transition-colors overflow-hidden"
                >
                  Request Flight Quote
                  {/* Subtle animated plane accent */}
                  <motion.span
                    aria-hidden
                    className="ml-2 inline-flex"
                    initial={{ x: -4, opacity: 0 }}
                    animate={{ x: [0, 6, 0], opacity: 1 }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Plane className="h-4 w-4 text-[#2EB6E8]" />
                  </motion.span>
                </button>
                <div className="flex items-center gap-2 text-sm text-[#0A1C3F] bg-white/80 px-3 py-2 rounded">
                  <Shield className="h-4 w-4 text-[#2EB6E8]" />
                  Trusted, secure deals
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-t border-[#D9E0E8]">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrustItem index={0} title="Wholesale fares" desc="Access to advance-purchase and negotiated airline prices." />
          <TrustItem index={1} title="Safe & secure" desc="Verified deals with a reliability-first approach." />
          <TrustItem index={2} title="Global coverage" desc="Domestic and international itineraries, business or leisure." />
        </div>
      </section>
    </main>
  );
}

function TrustItem({ title, desc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * index }}
      className="flex items-start gap-3 p-4 rounded-lg border border-[#D9E0E8] bg-[#F7FAFC]"
    >
      <CheckCircle2 className="h-6 w-6 text-[#2EB6E8] flex-shrink-0" />
      <div>
        <div className="font-semibold text-[#0A1C3F]">{title}</div>
        <p className="text-slate-600">{desc}</p>
      </div>
    </motion.div>
  );
}
