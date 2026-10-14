import React, { useState } from 'react';
import { GMMP_CONTACT } from '../constants/contact.ts';
import { MessageCircle, Check, Sparkles, Send, Copy, Heart, User, MapPin, Calendar, BookOpen, Dna, Briefcase } from 'lucide-react';

export const CompatibilityFinder: React.FC = () => {
  const [gender, setGender] = useState<'groom' | 'bride'>('bride');
  const [ageGroup, setAgeGroup] = useState('28-34');
  const [location, setLocation] = useState('Lagos, Nigeria');
  const [faith, setFaith] = useState('Christian');
  const [genotype, setGenotype] = useState('AA');
  const [timeline, setTimeline] = useState('6-12 months');
  const [profession, setProfession] = useState('Professional / Corporate');
  const [copied, setCopied] = useState(false);

  const formattedMessage = `Hello GMMP Matchmaker (+234 903 033 2109),

I am reaching out from your website to start my confidential matchmaking journey:
• Profile: ${gender === 'bride' ? 'Female looking for a Husband' : 'Male looking for a Wife'}
• Age Category: ${ageGroup}
• Location: ${location}
• Faith / Values: ${faith}
• Genotype: ${genotype}
• Profession: ${profession}
• Desired Marriage Timeline: ${timeline}

Please advise on the next steps and consultation schedule. Thank you!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="compatibility" className="py-12 sm:py-20 lg:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>Interactive Match Readiness</span>
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
            Start Your Confidential Partner Search
          </h2>
          <p className="mt-2.5 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Select your preferences below to generate a pre-formatted profile request and send it directly to our Senior Matchmaker on WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Inputs */}
            <div className="space-y-5 sm:space-y-6">
              {/* Gender Goal */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                  <User className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>I Am Looking For</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setGender('bride')}
                    className={`min-h-[46px] py-3 px-3.5 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-all ${
                      gender === 'bride'
                        ? 'border-rose-600 bg-rose-50 text-rose-800 shadow-2xs ring-1 ring-rose-600'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-stone-50/50'
                    }`}
                  >
                    A God-Fearing Husband (Female)
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('groom')}
                    className={`min-h-[46px] py-3 px-3.5 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-all ${
                      gender === 'groom'
                        ? 'border-rose-600 bg-rose-50 text-rose-800 shadow-2xs ring-1 ring-rose-600'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-stone-50/50'
                    }`}
                  >
                    A Virtuous Wife (Male)
                  </button>
                </div>
              </div>

              {/* Age Range */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                  <Calendar className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>My Age Range</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['23-27', '28-34', '35-42', '43+'].map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setAgeGroup(age)}
                      className={`min-h-[44px] py-2.5 px-2 text-xs sm:text-sm font-medium rounded-lg border transition-all active:scale-95 ${
                        ageGroup === age
                          ? 'border-rose-600 bg-rose-600 text-white font-semibold'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                  <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Current Base / Location</span>
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-3 text-base sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-stone-800"
                >
                  <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                  <option value="Abuja (FCT), Nigeria">Abuja (FCT), Nigeria</option>
                  <option value="Port Harcourt, Rivers State">Port Harcourt, Rivers State</option>
                  <option value="Ibadan / South West Nigeria">Ibadan / South West Nigeria</option>
                  <option value="Enugu / South East Nigeria">Enugu / South East Nigeria</option>
                  <option value="Kano / Northern Nigeria">Kano / Northern Nigeria</option>
                  <option value="United Kingdom (Diaspora)">United Kingdom (Diaspora)</option>
                  <option value="United States / Canada (Diaspora)">United States / Canada (Diaspora)</option>
                  <option value="Europe / Other Diaspora">Europe / Other Diaspora</option>
                </select>
              </div>

              {/* Faith & Values */}
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                  <BookOpen className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Faith &amp; Spiritual Foundation</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'Christian', label: 'Christian' },
                    { id: 'Muslim', label: 'Muslim' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFaith(item.id)}
                      className={`min-h-[44px] py-2.5 px-3 text-xs sm:text-sm font-medium rounded-lg border text-center transition-all ${
                        faith === item.id
                          ? 'border-rose-600 bg-rose-50 text-rose-800 font-semibold ring-1 ring-rose-600'
                          : 'border-stone-200 text-stone-700 hover:border-stone-300 bg-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Genotype, Profession & Ready Action */}
            <div className="space-y-5 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-5 sm:space-y-6">
                {/* Genotype */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                    <Dna className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Genotype (Crucial Health Compatibility)</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['AA', 'AS', 'AC', 'Other'].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGenotype(g)}
                        className={`min-h-[44px] py-2.5 px-2 text-xs sm:text-sm font-medium rounded-lg border text-center transition-all active:scale-95 ${
                          genotype === g
                            ? 'border-rose-600 bg-rose-600 text-white font-semibold'
                            : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1.5">
                    We prioritize medical genotype counseling to prevent sickle cell in future children.
                  </p>
                </div>

                {/* Profession / Sector */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                    <Briefcase className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Career / Profession Sector</span>
                  </label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full min-h-[46px] px-3.5 py-3 text-base sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-stone-800"
                  >
                    <option value="Professional / Corporate">Professional / Corporate / Finance</option>
                    <option value="Tech & Software / Digital">Tech & Software / Creative Digital</option>
                    <option value="Healthcare / Medicine / Pharmacy">Healthcare / Medicine / Pharmacy</option>
                    <option value="Entrepreneur / Business Executive">Entrepreneur / Business Executive</option>
                    <option value="Legal & Law Practice">Legal & Law Practice</option>
                    <option value="Engineering & Construction">Engineering & Construction</option>
                    <option value="Education & Academia">Education & Academia</option>
                    <option value="Civil Service & Public Sector">Civil Service & Public Sector</option>
                  </select>
                </div>

                {/* Marriage Readiness Timeline */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                    <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Intended Marriage Timeline</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['3-6 months', '6-12 months', '1-2 years'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`min-h-[44px] py-2 px-1.5 text-xs sm:text-sm font-medium rounded-lg border text-center transition-all ${
                          timeline === time
                            ? 'border-rose-600 bg-rose-50 text-rose-800 font-semibold ring-1 ring-rose-600'
                            : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <a
                  href={GMMP_CONTACT.getWhatsAppUrl(formattedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-sm rounded-xl shadow-md transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Send Inquiry to WhatsApp ({GMMP_CONTACT.phoneDisplay})</span>
                  <Send className="w-4 h-4 shrink-0" />
                </a>

                <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                  <span>100% Private &amp; Confidential</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="min-h-[36px] inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 active:text-rose-600 font-medium p-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
