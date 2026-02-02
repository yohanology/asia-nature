import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
export function OfficeVideo() {
  const {
    language
  } = useLanguage();
  const t = content[language];
  return <section id="bureaux" className="py-24 bg-[#E8E4D9]/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8FA89B]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C5B0]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#2F4F3E] font-medium tracking-widest uppercase text-xs mb-4 block">
            {t.office.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F3E] mb-6">
            {t.office.title}
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            {t.office.description}
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Video container */}
          <div className="relative aspect-video bg-[#1A1A1A] rounded-sm overflow-hidden shadow-2xl border border-[#E8E4D9]">
            <iframe src="https://player.vimeo.com/video/1159161886?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&amp;muted=1" className="absolute top-0 left-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="ASIA NATURE LIMITED" />
          </div>

          {/* Decorative corner accents */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#2F4F3E]/20"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#2F4F3E]/20"></div>
        </div>

        {/* Additional info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-serif font-bold text-[#2F4F3E] mb-2">
              {t.office.statShenzhen}
            </div>
            <p className="text-sm text-[#4A4A4A]">
              {t.office.statShenzhenDesc}
            </p>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#2F4F3E] mb-2">
              {t.office.statFactories}
            </div>
            <p className="text-sm text-[#4A4A4A]">
              {t.office.statFactoriesDesc}
            </p>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#2F4F3E] mb-2">
              {t.office.statExpertise}
            </div>
            <p className="text-sm text-[#4A4A4A]">
              {t.office.statExpertiseDesc}
            </p>
          </div>
        </div>
      </div>
    </section>;
}