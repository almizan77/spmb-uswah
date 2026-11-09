import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:block bg-surface-container-lowest text-on-surface text-xs font-semibold px-3 py-2 rounded-xl shadow-xl border border-outline-variant/60 animate-in fade-in slide-in-from-right-2 duration-200">
          Butuh info SPMB? Hubungi Kami!
        </div>
      )}

      <a
        href="https://wa.me/6285740682660?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20tentang%20SPMB."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-2xl bg-secondary hover:bg-secondary/90 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative cursor-pointer"
        aria-label="Konsultasi WhatsApp SPMB"
      >
        <img
          src="/whatsapp.png"
          alt=""
          className="w-8 h-8 object-contain"
        />

        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full border-2 border-surface-container-lowest animate-pulse"
        />
      </a>
    </div>
  );
};