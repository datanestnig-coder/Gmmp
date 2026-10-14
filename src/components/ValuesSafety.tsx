import React from 'react';
import { ShieldCheck, Lock, Dna, HeartHandshake, EyeOff, CheckCircle } from 'lucide-react';

export const ValuesSafety: React.FC = () => {
  const pillars = [
    {
      icon: EyeOff,
      title: 'Zero Public Profile Exposure',
      description:
        'Your professional reputation and private life remain completely intact. We never publish member directories, photos, or personal records online. Bios are only shared one-on-one with verified prospective matches after your prior review and approval.',
    },
    {
      icon: Dna,
      title: 'Genotype & Health Prioritization',
      description:
        'We believe compassionate matchmaking includes health foresight. We ensure members know their genotype (AA, AS, AC) before falling deeply in love, eliminating the heartbreak of incompatible sickle-cell risks.',
    },
    {
      icon: ShieldCheck,
      title: 'Thorough Identity & Marital Status Check',
      description:
        'We screen out impostors, already-married individuals seeking secret affairs, and casual daters. Every prospective candidate goes through identity confirmation and sincere intention verification.',
    },
    {
      icon: HeartHandshake,
      title: 'Faith & Cultural Reverence',
      description:
        'We honor the beauty of African cultural protocols and sacred religious beliefs. Whether you are looking for a devoted Christian or practicing Muslim partner, we match according to deep spiritual convictions.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-700">
              <Lock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Safety &amp; Confidentiality Protocol</span>
            </div>
            <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
              A Safe Sanctuary for Dignified Singles Seeking Lifetime Partnership
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
              We treat your search for a spouse as a sacred trust. Unlike public dating spaces, GMMP is built on rigorous standards of privacy, medical responsibility, and genuine honor.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA &amp; Confidentiality protection for every applicant</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct consultation with trained marriage counselors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respectful mediation between prospective families</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-rose-200 hover:shadow-md transition-all space-y-2.5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm sm:text-base leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
