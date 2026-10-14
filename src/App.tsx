import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CompatibilityFinder } from './components/CompatibilityFinder.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { SuccessStories } from './components/SuccessStories.tsx';
import { WhyGmmp } from './components/WhyGmmp.tsx';
import { ValuesSafety } from './components/ValuesSafety.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { DirectWhatsAppCta } from './components/DirectWhatsAppCta.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900 pb-16 sm:pb-0">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <CompatibilityFinder />
        <HowItWorks />
        <SuccessStories />
        <WhyGmmp />
        <ValuesSafety />
        <FaqSection />
        <DirectWhatsAppCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />
    </div>
  );
}
