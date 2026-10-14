import React from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, Phone, Clock, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { GmmpLogo } from './GmmpLogo.tsx';

export const DirectWhatsAppCta: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Brand Lockup centered */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <GmmpLogo size="lg" variant="dark" />
        </div>

        <h2 className="font-serif-brand text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Your Future Spouse Could Be One Message Away.
        </h2>

        <p className="mt-3 sm:mt-4 text-stone-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Take the first intentional step today. Speak privately with an experienced GMMP Matchmaker on our official WhatsApp line. No swiping, no public exposure, just genuine connection.
        </p>

        {/* WhatsApp Call to Action Card */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md max-w-2xl mx-auto space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-white/10 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official Line: <strong className="text-white font-mono text-sm sm:text-base">{GMMP_CONTACT.phoneDisplay}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{GMMP_CONTACT.operatingHours}</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={GMMP_CONTACT.getWhatsAppUrl("Hello GMMP! I am ready to start my matchmaking consultation to find my future spouse.")}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] inline-flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 px-5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-98 rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all group"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
              <span>Start Consultation on WhatsApp</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <p className="text-[11px] sm:text-xs text-stone-400">
              Click to open WhatsApp on your phone or web browser directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 text-left text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Non-Disclosure Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Compassionate, Non-Judgmental Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
