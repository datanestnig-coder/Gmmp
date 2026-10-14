import React, { useState } from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, Heart, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Mobile-Only Sticky Bottom Bar (Thumb-Zone Ergonomics, <8% Viewport Height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 px-3 py-2.5 shadow-lg flex items-center gap-2.5">
        <a
          href="#compatibility"
          className="min-h-[44px] px-3.5 py-2 text-stone-700 hover:text-stone-900 active:bg-stone-100 border border-stone-300 rounded-xl flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
        >
          <Heart className="w-4 h-4 text-rose-600 fill-rose-600/20" />
          <span>Match Form</span>
        </a>

        <a
          href={GMMP_CONTACT.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl shadow-xs flex items-center justify-center gap-2 text-xs font-bold transition-all"
          aria-label={`Chat on WhatsApp at ${GMMP_CONTACT.phoneDisplay}`}
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Chat on WhatsApp: {GMMP_CONTACT.phoneDisplay}</span>
        </a>
      </div>

      {/* Desktop / Tablet Floating Action Bubble (hidden on mobile) */}
      <aside
        aria-label="WhatsApp quick contact"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end"
      >
        {/* Tooltip on desktop */}
        {showTooltip && (
          <div className="flex items-center gap-2 mb-2 p-3 bg-white text-stone-800 text-xs rounded-xl shadow-lg border border-stone-200 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div>
              <div className="font-semibold text-stone-900">Have questions about matchmaking?</div>
              <div className="text-stone-500 text-[11px]">Chat directly on WhatsApp ({GMMP_CONTACT.phoneDisplay})</div>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-stone-400 hover:text-stone-600 p-1 rounded-md"
              aria-label="Close message bubble"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Floating Action Button */}
        <a
          href={GMMP_CONTACT.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label={`Chat with GMMP Matchmaker on WhatsApp at ${GMMP_CONTACT.phoneDisplay}`}
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span className="font-semibold text-xs tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </>
  );
};
