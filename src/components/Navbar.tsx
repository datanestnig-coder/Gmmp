import React, { useState } from 'react';
import { GmmpLogo } from './GmmpLogo.tsx';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-8 h-16 sm:h-20">
          {/* Zone 1: Brand Title (Single-line wordmark / logo lockup) */}
          <a
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg p-0.5 sm:p-1"
          >
            <GmmpLogo size="responsive" />
          </a>

          {/* Zone 2: 4–5 Nav Links with 1–2 word labels, single-line (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-stone-700">
            <a
              href="#how-it-works"
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
            <a
              href="#compatibility"
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Compatibility
            </a>
            <a
              href="#success-stories"
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Success Stories
            </a>
            <a
              href="#why-gmmp"
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Why GMMP
            </a>
            <a
              href="#faq"
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Official WhatsApp CTA & Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={GMMP_CONTACT.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs hover:shadow-sm transition-all active:scale-95 whitespace-nowrap shrink-0 min-h-[38px] sm:min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span className="hidden xs:inline">WhatsApp</span>
              <span className="xs:hidden">Chat</span>
              <span className="hidden xl:inline text-emerald-200 text-[11px] font-normal">
                {GMMP_CONTACT.phoneDisplay}
              </span>
            </a>

            {/* Mobile menu toggle with proper 44x44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 active:bg-stone-200 transition-colors focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer with generous touch zones */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-stone-700">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-lg hover:bg-stone-50 active:bg-stone-100 hover:text-rose-600"
            >
              How It Works
            </a>
            <a
              href="#compatibility"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-lg hover:bg-stone-50 active:bg-stone-100 hover:text-rose-600"
            >
              Match Compatibility Form
            </a>
            <a
              href="#success-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-lg hover:bg-stone-50 active:bg-stone-100 hover:text-rose-600"
            >
              Real Success Stories
            </a>
            <a
              href="#why-gmmp"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-lg hover:bg-stone-50 active:bg-stone-100 hover:text-rose-600"
            >
              Why Serious Singles Choose GMMP
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-lg hover:bg-stone-50 active:bg-stone-100 hover:text-rose-600"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-2 border-t border-stone-100">
            <a
              href={GMMP_CONTACT.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-center gap-2.5 w-full py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-xl shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Connect on WhatsApp ({GMMP_CONTACT.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
