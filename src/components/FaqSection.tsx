import React, { useState } from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is eligible to join Get Married Matchmaking Platform (GMMP)?',
      a: 'GMMP welcomes single, mature men and women (never married, widowed, or legally divorced) aged 22 and above who possess a sincere, verifiable intention to marry within 3 to 24 months. We proudly serve clients resident in Nigeria (Lagos, Abuja, Rivers, Oyo, Enugu, Kano, etc.) as well as Nigerians and Africans living abroad in the UK, United States, Canada, Europe, and the Middle East.',
    },
    {
      q: 'How does the WhatsApp consultation process work?',
      a: `When you click our official WhatsApp button (+234 903 033 2109), you connect directly with a senior member of our matchmaking team. We will send you our confidential registration guide, answer any questions you have about privacy, and schedule your one-on-one compatibility assessment.`,
    },
    {
      q: 'Will my pictures or personal details ever be posted publicly?',
      a: 'Never. GMMP does NOT operate a public website directory or public social media roster. Your photos, full name, and private contact info are safeguarded under strict privacy protocols. They are only shared on a private, one-on-one basis with a verified candidate after BOTH of you have reviewed each other’s profile criteria and agreed to connect.',
    },
    {
      q: 'Why do you ask for genotype information (AA, AS, AC)?',
      a: 'In Nigeria and across Africa, preventing sickle cell disease (SS) in future generations is a paramount duty of care. We encourage early genotype awareness before emotional attachment occurs. If an individual has an AS genotype, we intentionally introduce them exclusively to AA partners to guarantee complete peace of mind.',
    },
    {
      q: 'How long does it typically take to find a compatible partner?',
      a: 'While every journey is unique, over 70% of our members are introduced to their prospective spouses within 2 to 5 months of active membership. Because we prioritize intentionality and values alignment over casual dating, our courtship-to-wedding timeline is significantly faster than traditional dating.',
    },
    {
      q: 'What if I live outside Nigeria in the Diaspora (UK, US, Canada)?',
      a: 'A substantial portion of our successful marriages involve Diaspora professionals seeking intentional partners either within their host countries or back home in Nigeria. We specialize in cross-border coordination, timezone-friendly virtual meetings, and family-supported introductions.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>Clear Answers to Important Questions</span>
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Everything you need to know about joining GMMP and beginning your journey to holy matrimony.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-stone-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full min-h-[50px] py-3.5 px-4 sm:px-6 text-left flex items-center justify-between gap-3 bg-stone-50/50 hover:bg-stone-50 active:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-stone-900 text-xs sm:text-sm md:text-base leading-snug pr-2">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed bg-white border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-stone-50 border border-stone-200">
          <p className="text-sm font-medium text-stone-800 mb-1">
            Have a personal or specific question not covered here?
          </p>
          <p className="text-xs text-stone-500 mb-4">
            Our matchmakers are happy to answer any questions directly and confidentially.
          </p>
          <a
            href={GMMP_CONTACT.getWhatsAppUrl('Hello GMMP, I have a specific question about your matchmaking process.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask via WhatsApp: {GMMP_CONTACT.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
