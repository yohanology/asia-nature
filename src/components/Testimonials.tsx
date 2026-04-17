import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
const testimonialsMeta = [{
  author: 'Jean-Marc Dubois',
  company: 'IndusFrance',
  location: 'Lyon, France',
  image: "/asia_nature_clients_1.jpg"
}, {
  author: 'Sophie Laurent',
  company: 'GreenPack Solutions',
  location: 'Bruxelles, Belgique',
  image: "/asia_nature_clients_2.jpg"
}, {
  author: 'Pierre Moreau',
  company: 'TechBuild',
  location: 'Casablanca, Maroc',
  image: "/asia_nature_clients_3.jpg"
}, {
  author: 'Thomas Bernard',
  company: 'ElectroTech Europe',
  location: 'Paris, France',
  image: "/asia_nature_clients_4.jpg"
}, {
  author: 'Marie Dubois',
  company: 'LogiPro International',
  location: 'Genève, Suisse',
  image: "/asia_nature_clients_5.jpg"
}, {
  author: 'Ahmed El Mansouri',
  company: 'AfricaTrade Solutions',
  location: "Abidjan, Côte d'Ivoire",
  image: "/asia_nature_clients_2.jpg"
}];
export function Testimonials() {
  const {
    language
  } = useLanguage();
  const t = content[language];
  // Combine translations with metadata
  const testimonials = t.testimonials.items.map((item, index) => ({
    ...item,
    ...testimonialsMeta[index]
  }));
  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return <section id="clients" className="py-24 md:py-32 bg-[#2F4F3E] text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(#8FA89B 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-[#D4C5B0] text-lg leading-relaxed mb-8">
              {t.testimonials.description}
            </p>
            <div className="flex items-center space-x-2 text-[#D4C5B0]">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4C5B0" className="text-[#D4C5B0]" />)}
              </div>
              <span className="text-sm font-medium">
                {t.testimonials.clientCount}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#2F4F3E] to-transparent z-10 pointer-events-none"></div>

            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#2F4F3E] to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden -mx-6 px-6 md:mx-0 md:px-0">
              <div
                className="flex gap-6 animate-scroll"
                style={{ ['--asia-scroll-distance' as string]: `calc(-340px * ${testimonials.length} - ${testimonials.length * 24}px)` }}
              >
                {duplicatedTestimonials.map((item, index) => <div key={index} className="flex-none w-[340px] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300 overflow-hidden group">
                    <div className="aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                      <img src={item.image} alt={`${item.author} - ${item.company}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="text-[#8FA89B] text-3xl font-serif leading-none mb-3">
                        "
                      </div>
                      <blockquote className="text-base text-[#F9F8F6] font-light leading-relaxed mb-6">
                        {item.quote}
                      </blockquote>
                      <div className="pt-4 border-t border-white/10">
                        <cite className="not-italic">
                          <div className="font-serif font-bold text-white text-sm">
                            {item.author}
                          </div>
                          <div className="text-xs text-[#8FA89B] mt-1">
                            {item.role}
                          </div>
                          <div className="text-xs text-[#8FA89B] font-medium mt-0.5">
                            {item.company}
                          </div>
                          <div className="text-xs text-[#8FA89B]/60 mt-1">
                            {item.location}
                          </div>
                        </cite>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
}