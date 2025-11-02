import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutContactPage from './components/AboutContactPage';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [route, setRoute] = useState('home');

  const whatsAppNumber = useMemo(() => {
    const n = import.meta.env.VITE_WHATSAPP_NUMBER || '';
    // keep only digits for wa.me format
    return n.replace(/\D/g, '');
  }, []);

  const waLink = whatsAppNumber
    ? `https://wa.me/${whatsAppNumber}`
    : 'https://wa.me/';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar route={route} setRoute={setRoute} />

      {route === 'home' ? (
        <HomePage goToContact={() => setRoute('about')} />
      ) : (
        <AboutContactPage />
      )}

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-semibold">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
