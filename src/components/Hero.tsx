import React from 'react';
import { Button } from './ui/Button';
import { Globe, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
export function Hero() {
  const {
    language
  } = useLanguage();
  const t = content[language];
  return <section className="relative w-full min-h-screen flex flex-col pt-32 md:pt-40 bg-[#F9F8F6] overflow-hidden">
      {/* Background Pattern - subtle geometric overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 Z" fill="#2F4F3E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center space-x-2 py-1 px-3 border border-[#2F4F3E]/20 rounded-full mb-8 bg-white/50 backdrop-blur-sm">
            <Globe size={14} className="text-[#2F4F3E]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2F4F3E]">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2F4F3E] leading-[1.1] mb-8">
            {t.hero.title} <br />
            <span className="italic font-normal text-[#8FA89B]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#4A4A4A] max-w-xl font-light leading-relaxed mb-10 border-l-2 border-[#D4C5B0] pl-6">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button size="lg" withArrow asChild>
              <a href="#contact">{t.hero.ctaPrimary}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">{t.hero.ctaSecondary}</a>
            </Button>
          </div>
        </div>

        {/* Hero Image - Professional Trade Context */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
            <div className="absolute inset-0 bg-[#2F4F3E]/10 mix-blend-multiply z-10"></div>
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop" alt={t.alts.heroLogistics} className="w-full h-full object-cover" />

            {/* Floating Stat Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 shadow-lg border-l-4 border-[#2F4F3E] z-20">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    {t.hero.statExperience}
                  </p>
                  <p className="text-3xl font-serif font-bold text-[#2F4F3E]">
                    {t.hero.statExperienceValue}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    {t.hero.statNetwork}
                  </p>
                  <p className="text-3xl font-serif font-bold text-[#2F4F3E]">
                    {t.hero.statNetworkValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-[#D4C5B0] rounded-sm hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#2F4F3E]/50 hidden md:block">
        <ArrowDown size={24} />
      </div>
    </section>;
}