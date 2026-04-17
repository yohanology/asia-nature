import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
export function Founder() {
  const {
    language
  } = useLanguage();
  const t = content[language];
  return <section id="fondateur" className="py-24 md:py-32 bg-[#F9F8F6] relative overflow-hidden">
      {/* Decorative pattern - matching site style */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'radial-gradient(#2F4F3E 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2F4F3E] font-medium tracking-widest uppercase text-xs mb-4 block">
            {t.founder.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F3E]">
            {t.founder.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Founder Photo */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#D4C5B0] -z-10 rounded-full opacity-30"></div>
            <div className="relative">
              <img src="/Bernard_Vu_-_2025-08-13_08.00.19.jpg" alt="Bernard Trong Huy Vu - Fondateur" className="w-full aspect-[4/3] object-cover grayscale shadow-xl rounded-sm" />
              <div className="absolute top-6 left-6">
                <span className="inline-block bg-[#2F4F3E] text-white text-xs font-medium px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  {t.founder.roleBadge}
                </span>
              </div>
            </div>
            {/* Decorative corner accent - matching site style */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#2F4F3E]/20"></div>
          </div>

          {/* Right: Biography */}
          <div className="lg:pt-4">
            <div className="space-y-6">
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                <span className="font-bold text-[#2F4F3E]">
                  {t.founder.bio1Start}
                </span>{' '}
                {t.founder.bio1Mid}{' '}
                <span className="font-semibold text-[#2F4F3E]">
                  {t.founder.bio1Highlight1}
                </span>{' '}
                {t.founder.bio1Mid2}{' '}
                <span className="font-semibold text-[#2F4F3E]">
                  {t.founder.bio1Highlight2}
                </span>
                {t.founder.bio1End}
              </p>

              <p className="text-base text-[#4A4A4A] leading-relaxed">
                {t.founder.bio2Start}{' '}
                <span className="font-semibold">
                  {t.founder.bio2Highlight1}
                </span>{' '}
                {t.founder.bio2Mid}{' '}
                <span className="font-semibold">
                  {t.founder.bio2Highlight2}
                </span>
                {t.founder.bio2Mid2}{' '}
                <span className="font-semibold">
                  {t.founder.bio2Highlight3}
                </span>
                {t.founder.bio2End}
              </p>

              <p className="text-base text-[#4A4A4A] leading-relaxed">
                {t.founder.bio3Start}{' '}
                <span className="font-semibold">
                  {t.founder.bio3Highlight1}
                </span>
                {t.founder.bio3Mid}{' '}
                <span className="font-semibold">
                  {t.founder.bio3Highlight2}
                </span>
                {t.founder.bio3Mid2}{' '}
                <span className="font-semibold">
                  {t.founder.bio3Highlight3}
                </span>
                {t.founder.bio3End}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Photo Gallery */}
        <div className="relative mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2F4F3E] mb-4">
              {t.founder.galleryTitle}
            </h3>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              {t.founder.galleryDesc}
            </p>
          </div>

          <div className="relative">
            {/* Gradient overlays - matching testimonials style */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F8F6] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F8F6] to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                className="flex gap-6 animate-scroll-slow"
                style={{ ['--asia-scroll-distance' as string]: 'calc(-400px * 4 - 96px)' }}
              >
                {["/asia_nature_bernard_vu_3.jpg", "/asia_nature_bernard_vu_2.jpg", "/asia_nature_bernard_vu_6.jpg", "/asia_nature_bernard_vu_7.jpg", "/asia_nature_bernard_vu_3.jpg", "/asia_nature_bernard_vu_2.jpg", "/asia_nature_bernard_vu_6.jpg", "/asia_nature_bernard_vu_7.jpg"].map((src, index) => <div key={index} className="flex-none w-[400px] aspect-[16/10] overflow-hidden rounded-sm shadow-lg border border-[#E8E4D9]">
                    <img src={src} alt={`Trade show ${index + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
}