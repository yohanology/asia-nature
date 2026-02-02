import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import { Founder } from '../../components/Founder';
import { Footer } from '../../components/Footer';
import { OfficeVideo } from '../../components/OfficeVideo';
import { Button } from '../../components/ui/Button';
import { LanguageProvider } from '../../contexts/LanguageContext';
export function HomeFr() {
  return <LanguageProvider language="fr">
      <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#2F4F3E] selection:text-white">
        <Navbar />
        <main>
          <Hero />

          {/* About/Founder Section */}
          <section id="societe" className="py-24 bg-[#E8E4D9]/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4C5B0] -z-10 rounded-full opacity-50"></div>
                  <img src="/asia_nature_bureau_shenzhen_1.jpg" alt="Meeting in Shenzhen office" className="w-full h-auto shadow-xl rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg max-w-xs border-l-4 border-[#2F4F3E]">
                    <p className="font-serif italic text-[#2F4F3E] text-lg">
                      "Notre mission est de simplifier la complexité du commerce
                      international."
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-[#2F4F3E] font-medium tracking-widest uppercase text-xs mb-4 block">
                    La société
                  </span>
                  <h2 className="text-4xl font-serif font-bold text-[#2F4F3E] mb-6">
                    Experts en sourcing <br />
                    international
                  </h2>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                    <span className="font-semibold text-[#2F4F3E]">
                      Asia Nature Limited
                    </span>{' '}
                    est une société spécialisée dans le{' '}
                    <span className="font-semibold">sourcing industriel</span>{' '}
                    et la{' '}
                    <span className="font-semibold">
                      logistique internationale
                    </span>
                    , basée à{' '}
                    <span className="font-semibold">Shenzhen, en Chine</span>,
                    au cœur des réseaux de production asiatiques.
                  </p>
                  <p className="text-[#4A4A4A] leading-relaxed mb-6">
                    Fondée par <span className="font-semibold">Bernard Vu</span>
                    , un entrepreneur franco-vietnamien reconnu, l'entreprise
                    accompagne ses clients depuis plus de dix ans dans leurs
                    projets de{' '}
                    <span className="font-semibold">
                      procurement, développement produit et distribution
                      internationale
                    </span>
                    .
                  </p>
                  <p className="text-[#4A4A4A] leading-relaxed mb-8">
                    Grâce à une connaissance approfondie du terrain, un réseau
                    industriel fiable et une capacité de livraison mondiale,
                    Asia Nature Limited s'est imposée comme un{' '}
                    <span className="font-semibold text-[#2F4F3E]">
                      partenaire stratégique pour les entreprises exigeantes
                    </span>{' '}
                    recherchant qualité, réactivité et innovation.
                  </p>
                  <Button variant="outline" withDownArrow onClick={() => {
                  document.getElementById('bureaux')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>
                    Découvrir nos bureaux
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <OfficeVideo />

          <Features />

          <Testimonials />

          <Founder />

          {/* Call to Action Section - Trade Focused */}
          <section className="py-24 md:py-32 bg-white text-center border-t border-[#E8E4D9]">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F3E] mb-6">
                Prêt à optimiser votre sourcing ?
              </h2>
              <p className="text-xl text-[#4A4A4A] mb-10 max-w-2xl mx-auto font-light">
                Discutons de vos besoins spécifiques. Notre équipe vous répond
                sous 24h avec une approche sur-mesure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" withArrow asChild>
                  <a href="#contact">Demander un devis</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Appeler un expert</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>;
}