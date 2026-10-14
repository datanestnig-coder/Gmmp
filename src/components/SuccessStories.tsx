import React from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, Heart, Quote, Calendar, MapPin, Sparkles } from 'lucide-react';
import weddingNikahImg from '../assets/images/wedding_nikah_vector_1791991848682.jpg';
import chatWhatsAppImg from '../assets/images/chat_whatsapp_vector_1791991849892.jpg';
import coupleTogetherImg from '../assets/images/happy_couple_together_vector_1791991850701.jpg';

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      image: weddingNikahImg,
      alt: '2D flat line art vector illustration of a modest Muslim bride and groom in traditional Nikah wedding attire',
      couple: 'Zainab & Ibrahim',
      location: 'Kano & Kaduna',
      status: 'Nikah Solemnized January 2026',
      timeToMatch: '3 months from WhatsApp intake',
      quote:
        'We wanted a marriage process rooted in Islamic modesty, respect for our parents, and genotype compatibility. GMMP connected our families with utmost adab and discretion. Alhamdulillah, our Nikah was blessed!',
      badge: 'Nikah Solemnization',
    },
    {
      image: chatWhatsAppImg,
      alt: '2D line art vector illustration of a woman in hijab comfortably chatting on WhatsApp on a sofa',
      couple: 'Maryam & Dr. Usman',
      location: 'Abuja & Lagos',
      status: 'Courtship to Matrimony',
      timeToMatch: '2 months consultation',
      quote:
        'Being able to consult privately on WhatsApp without having my picture broadcast publicly gave me complete peace of mind. The matchmaker understood our mutual expectations from day one.',
      badge: 'Private Consultation',
    },
    {
      image: coupleTogetherImg,
      alt: '2D line art vector illustration of a modest married couple standing together holding hands',
      couple: 'Fatima & Babatunde',
      location: 'London (Diaspora) & Lagos',
      status: 'Married December 2025',
      timeToMatch: '4 months courtship',
      quote:
        'Bridging the distance between the UK and Nigeria was made simple and dignified through GMMP. Their strict vetting and background checks ensured genuine intentions from the very start.',
      badge: 'Diaspora & Home Union',
    },
  ];

  return (
    <section id="success-stories" className="py-12 sm:py-20 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>Real Couples · Real Weddings</span>
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
            Loved Stories Written Through GMMP
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Every smile here is 100% genuine. See how intentional men and women connected on WhatsApp and walked down the aisle to build blessed families.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {stories.map((story) => (
            <div
              key={story.couple}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* 2D Line Art Vector Illustration */}
                <div className="relative aspect-[4/3] max-h-[260px] sm:max-h-none bg-amber-50/40 overflow-hidden flex items-center justify-center p-2.5 sm:p-3">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md">
                    {story.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1 text-stone-700 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      {story.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      {story.timeToMatch}
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-stone-900 mb-1">
                    {story.couple}
                  </h3>
                  <div className="text-xs font-semibold text-rose-700 mb-2.5">
                    {story.status}
                  </div>

                  <div className="relative pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed italic">
                    <Quote className="w-3.5 h-3.5 text-rose-300 absolute -top-1 -left-1 opacity-60" />
                    <p className="relative pl-3">&ldquo;{story.quote}&rdquo;</p>
                  </div>
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="p-3.5 sm:p-4 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium flex items-center gap-1 text-[11px] sm:text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Verified Marriage
                </span>
                <a
                  href={GMMP_CONTACT.getWhatsAppUrl(`Hello GMMP, I was inspired by the story of ${story.couple} and would love to start my consultation.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] flex items-center text-rose-600 hover:text-rose-700 active:text-rose-800 font-semibold text-xs py-1 px-2"
                >
                  Write Your Story →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section Proof Stats */}
        <div className="mt-8 sm:mt-14 p-4 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="p-2 sm:p-0">
            <div className="font-serif-brand text-2xl sm:text-4xl font-bold text-stone-900">350+</div>
            <div className="text-[11px] sm:text-sm text-stone-500 mt-0.5 font-medium">Couples Married</div>
          </div>
          <div className="p-2 sm:p-0">
            <div className="font-serif-brand text-2xl sm:text-4xl font-bold text-stone-900">94%</div>
            <div className="text-[11px] sm:text-sm text-stone-500 mt-0.5 font-medium">Values Alignment</div>
          </div>
          <div className="p-2 sm:p-0">
            <div className="font-serif-brand text-2xl sm:text-4xl font-bold text-stone-900">100%</div>
            <div className="text-[11px] sm:text-sm text-stone-500 mt-0.5 font-medium">Strict Privacy</div>
          </div>
          <div className="p-2 sm:p-0">
            <div className="font-serif-brand text-2xl sm:text-4xl font-bold text-stone-900">&lt; 1 hr</div>
            <div className="text-[11px] sm:text-sm text-stone-500 mt-0.5 font-medium">WhatsApp Reply</div>
          </div>
        </div>
      </div>
    </section>
  );
};
