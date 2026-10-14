import React from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, ShieldCheck, UserCheck, Heart, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Private WhatsApp Consultation',
      description:
        'Reach out directly to our official line (+234 903 033 2109). You will be greeted by a compassionate, trained Senior Matchmaker for a confidential intake discussion about your expectations, life goals, and values.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Identity, Values & Health Verification',
      description:
        'To protect every member from fraudsters and casual daters, we discreetly verify valid identification, background details, faith alignment, and medical genotype compatibility (e.g. AA/AS).',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Hand-Curated Mutual Matching',
      description:
        'No public catalogs or cold swiping. When we identify a compatible, marriage-ready prospect whose values mirror yours, we present their vetted bio. Contact is shared ONLY with bilateral mutual consent.',
      icon: UserCheck,
    },
    {
      number: '04',
      title: 'Guided Courtship to Holy Matrimony',
      description:
        'We facilitate a respectful, chaperoned first meeting (virtual or in-person). Our matchmakers remain on hand to provide objective guidance, pre-marital relationship advice, and family-friendly mediation.',
      icon: Heart,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
            The GMMP Method
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
            How Intentional Singles Find Love in 4 Dignified Steps
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Unlike public dating apps that encourage superficial swiping, GMMP is an exclusive, human-curated matchmaking service designed solely for holy matrimony.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-5 sm:p-7 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-rose-200 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="font-serif-brand text-2xl font-bold text-rose-600">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 group-hover:text-rose-600 group-hover:border-rose-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-stone-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-xs font-medium text-rose-700">
                  <span>Step {step.number} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Adjacency CTA */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-stone-900 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-brand text-lg sm:text-xl font-bold text-white">
              Ready to begin Step 01 today?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
              Message our matchmaking team directly on WhatsApp. Your inquiry is treated with strict 100% confidentiality.
            </p>
          </div>
          <a
            href={GMMP_CONTACT.getWhatsAppUrl("Hello GMMP, I'd like to initiate Step 01 and begin my private matchmaking consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-sm rounded-xl shadow-md transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Chat on WhatsApp: {GMMP_CONTACT.phoneDisplay}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
