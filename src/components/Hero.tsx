import React from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, ShieldCheck, HeartHandshake, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroCoupleImg from '../assets/images/hero_modest_faceless_couple_1791991849145.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-stone-50 via-white to-stone-50">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-rose-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-6 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Direct WhatsApp Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold tracking-wider text-rose-700 uppercase">
              <span>Confidential Matchmaking</span>
              <span aria-hidden="true">·</span>
              <span>100% Marriage-Minded</span>
              <span aria-hidden="true">·</span>
              <span>Nigeria &amp; Diaspora</span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-serif-brand text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.18] sm:leading-[1.12] text-balance">
              Find Your Soulmate With <span className="text-rose-600 italic">Dignity</span>, Discretion &amp; Purpose.
            </h1>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Tired of endless swiping and time-wasters? GMMP connects mature, intentional singles who are genuinely ready for holy matrimony. Every introduction is hand-vetted, private, and guided by experienced personal matchmakers.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Strict Identity &amp; Genotype Verification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Zero Public Photos / 100% Privacy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Handcrafted Compatibility Matching</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Guided Courtship to Holy Matrimony</span>
              </div>
            </div>

            {/* CTAs with mobile thumb-friendly dimensions */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={GMMP_CONTACT.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-xl shadow-md hover:shadow-lg transition-all text-center whitespace-nowrap min-h-[48px] group"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>Chat on WhatsApp: {GMMP_CONTACT.phoneDisplay}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#compatibility"
                className="inline-flex items-center justify-center px-5 py-3.5 sm:py-4 text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 active:bg-stone-100 border border-stone-300 rounded-xl shadow-2xs transition-colors text-center whitespace-nowrap min-h-[48px]"
              >
                Check Match Compatibility
              </a>
            </div>

            {/* Human contact disclaimer */}
            <p className="text-[11px] sm:text-xs text-stone-500 pt-0.5">
              Direct line to our Senior Matchmaker · Active 7 days a week · Confidential responses within 1 hour.
            </p>
          </div>

          {/* Right Column: 2D Minimalist Line Art Vector Illustration */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0 max-w-lg mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-lg bg-white">
              {/* 2D Modest Vector Illustration matching reference style */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] max-h-[300px] sm:max-h-none overflow-hidden bg-[#FAF7F2] flex items-center justify-center p-3 sm:p-5">
                <img
                  src={heroCoupleImg}
                  alt="2D minimalist line art vector illustration of a modest couple consulting on a phone for matchmaking, matched through GMMP"
                  className="w-full h-full object-contain drop-shadow-2xs"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified Proof & Couple Strip */}
              <div className="p-3.5 sm:p-4 bg-stone-900 text-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm">Halima &amp; Babatunde · Matched &amp; Married</div>
                  <div className="text-stone-300 italic text-[11px] mt-0.5">
                    &ldquo;Within three months on WhatsApp, we found our lifelong spouse with complete dignity.&rdquo;
                  </div>
                </div>
                <a
                  href={GMMP_CONTACT.getWhatsAppUrl("Hello GMMP, I'm ready to take the first step towards marriage.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white rounded-lg font-semibold text-xs whitespace-nowrap transition-colors self-start sm:self-auto shrink-0 shadow-xs min-h-[38px] flex items-center justify-center"
                >
                  Join on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
