import React from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { Check, X, MessageCircle, Heart, ArrowRight } from 'lucide-react';

export const WhyGmmp: React.FC = () => {
  const comparison = [
    {
      feature: 'Primary Goal & Intention',
      gmmp: 'Exclusive focus on Holy Matrimony and lifelong marital commitment',
      others: 'Casual dating, entertainment, hookups, and endless time-wasting',
    },
    {
      feature: 'Privacy & Discretion',
      gmmp: 'Zero public profile galleries. Your details are revealed strictly with your mutual consent',
      others: 'Your face and bio are broadcast publicly to coworkers, family, and strangers',
    },
    {
      feature: 'Vetting & Verification',
      gmmp: 'Rigorous manual identity checks, career verification, and medical genotype screening',
      others: 'Unverified email signups riddled with catfish, scammers, and married impostors',
    },
    {
      feature: 'Matching Methodology',
      gmmp: 'Handcrafted compatibility by experienced human matchmakers who listen to your heart',
      others: 'Addictive AI algorithms designed to keep you single and paying subscriptions',
    },
    {
      feature: 'Faith & Cultural Values',
      gmmp: 'Respects Nigerian cultural heritage, family introduction protocols, and spiritual convictions',
      others: 'Westernized casual dating ethos detached from family and faith traditions',
    },
    {
      feature: 'Personalized Support',
      gmmp: 'Direct access to your Senior Matchmaker on WhatsApp (+234 903 033 2109)',
      others: 'Automated chatbot replies and non-existent customer support',
    },
  ];

  return (
    <section id="why-gmmp" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
            The Purposeful Alternative
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
            Why Serious Singles Choose GMMP Over Public Dating Apps
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Marriage is sacred. Finding your lifetime partner shouldn&apos;t feel like a digital casino. See how GMMP protects your dignity, saves your precious time, and accelerates your path to the altar.
          </p>
        </div>

        {/* Mobile View: Dedicated Card List (md:hidden) */}
        <div className="md:hidden space-y-4">
          {comparison.map((item) => (
            <div
              key={item.feature}
              className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 shadow-2xs space-y-3"
            >
              <h3 className="font-semibold text-stone-900 text-sm flex items-center justify-between">
                <span>{item.feature}</span>
              </h3>

              {/* GMMP Advantage */}
              <div className="p-3 bg-emerald-50/80 border border-emerald-200/80 rounded-lg flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider block mb-0.5">
                    GMMP Matchmaking
                  </span>
                  <p className="text-xs text-stone-900 font-medium leading-relaxed">
                    {item.gmmp}
                  </p>
                </div>
              </div>

              {/* Dating Apps Disadvantage */}
              <div className="p-3 bg-white border border-stone-200 rounded-lg flex items-start gap-2.5">
                <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-semibold text-stone-500 tracking-wider block mb-0.5">
                    Generic Dating Apps
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.others}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Comparison Matrix Table (hidden md:block) */}
        <div className="hidden md:block rounded-2xl border border-stone-200 overflow-hidden shadow-xs bg-white">
          <div className="grid grid-cols-12 bg-stone-900 text-white font-semibold text-sm py-4 px-6">
            <div className="col-span-4">Feature / Standard</div>
            <div className="col-span-4 text-emerald-400 flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 shrink-0" />
              <span>GMMP Platform</span>
            </div>
            <div className="col-span-4 text-stone-400">
              Generic Dating Apps
            </div>
          </div>

          <div className="divide-y divide-stone-200 text-sm">
            {comparison.map((item, idx) => (
              <div
                key={item.feature}
                className={`grid grid-cols-12 py-5 px-6 items-center gap-4 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'
                }`}
              >
                <div className="col-span-4 font-semibold text-stone-900">
                  {item.feature}
                </div>
                <div className="col-span-4 text-stone-800 pr-2 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-stone-900">{item.gmmp}</span>
                </div>
                <div className="col-span-4 text-stone-500 flex items-start gap-2">
                  <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner with thumb-friendly CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-stone-600 text-xs sm:text-sm mb-3">
            Don&apos;t leave your most important life decision to chance.
          </p>
          <a
            href={GMMP_CONTACT.getWhatsAppUrl("Hello GMMP, I want to experience serious, dignified matchmaking. Let's talk.")}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Speak With a Matchmaker: {GMMP_CONTACT.phoneDisplay}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
