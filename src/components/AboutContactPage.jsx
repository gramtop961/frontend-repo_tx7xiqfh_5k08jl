import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function AboutContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const phone = form.get('phone');
    const details = form.get('details');

    const subject = encodeURIComponent('Flight Quote Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nTrip details:\n${details}`
    );

    // Open email client via mailto, then show confirmation
    window.location.href = `mailto:secsalesllc1@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[#0A1C3F]">About</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            SEC Ticket Sales is a Texas-based discount airfare agency. Through advance seat purchasing and private travel pricing channels, we provide lower-cost airline tickets for global travel.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Whether for business or leisure, our focus is simple: Save you money on flights — securely and reliably.
          </p>

          <div className="mt-8 space-y-3 text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#2EB6E8] mt-0.5" />
              <div>
                5900 Balcones Dr Ste 100<br />
                Austin, TX 78731<br />
                USA
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#2EB6E8]" />
              <a href="mailto:secsalesllc1@outlook.com" className="text-[#0A1C3F] underline">secsalesllc1@outlook.com</a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A1C3F]">Request a Flight Quote</h2>
          <p className="mt-2 text-slate-600">Fill out the form and our travel specialist will reach out with the best deal.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0A1C3F]">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-md border border-[#D9E0E8] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6E8]"
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0A1C3F]">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border border-[#D9E0E8] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6E8]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A1C3F]">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-md border border-[#D9E0E8] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6E8]"
                  placeholder="+1 555 000 1234"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A1C3F]">Trip details</label>
              <textarea
                name="details"
                required
                rows="5"
                className="mt-1 w-full rounded-md border border-[#D9E0E8] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6E8]"
                placeholder="Destination, travel dates, passengers, cabin class, special requests"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[#0A1C3F] px-5 py-3 text-white font-semibold hover:bg-[#092035] transition-colors"
            >
              <Send className="h-4 w-4" />
              Send Request
            </button>

            {submitted && (
              <p className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3 mt-3">
                Thank you! Our travel specialist will contact you with the best flight deal.
              </p>
            )}

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-[#2EB6E8]" />
              Prefer WhatsApp? Use the green button on the bottom-right.
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
