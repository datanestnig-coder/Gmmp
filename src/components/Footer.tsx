import React from 'react';
import { GmmpLogo } from './GmmpLogo.tsx';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand lockup */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <GmmpLogo size="responsive" variant="dark" />
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-1 sm:pt-2">
              Get Married Matchmaking Platform (GMMP) is Nigeria and Africa’s trusted, discreet matchmaking agency exclusively serving marriage-ready singles looking for holy matrimony and meaningful lifelong unions.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Strict 100% Confidentiality &amp; Non-Public Profiles</span>
            </div>
          </div>

          {/* Direct Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Official Contact &amp; Hours
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">WhatsApp &amp; Calls:</div>
                  <a
                    href={GMMP_CONTACT.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {GMMP_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email Inquiries:</div>
                  <a
                    href={`mailto:${GMMP_CONTACT.email}`}
                    className="text-stone-300 hover:text-white transition-colors"
                  >
                    {GMMP_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Service Coverage:</div>
                  <div className="text-xs text-stone-400">{GMMP_CONTACT.coverage}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-white transition-colors">
                  Match Compatibility Form
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-white transition-colors">
                  Couples &amp; Weddings
                </a>
              </li>
              <li>
                <a href="#why-gmmp" className="hover:text-white transition-colors">
                  Why Choose GMMP
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={GMMP_CONTACT.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Start WhatsApp Consultation</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Get Married Matchmaking Platform (GMMP). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Discretion Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>Vetted Marriage Network</span>
            <span aria-hidden="true">·</span>
            <span>Faith &amp; Family Centered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
