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
export function HomeEn() {
  return <LanguageProvider language="en">
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
                      "Our mission is to simplify the complexity of
                      international trade."
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-[#2F4F3E] font-medium tracking-widest uppercase text-xs mb-4 block">
                    The Company
                  </span>
                  <h2 className="text-4xl font-serif font-bold text-[#2F4F3E] mb-6">
                    International sourcing <br />
                    experts
                  </h2>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                    <span className="font-semibold text-[#2F4F3E]">
                      Asia Nature Limited
                    </span>{' '}
                    is a company specialized in{' '}
                    <span className="font-semibold">industrial sourcing</span>{' '}
                    and{' '}
                    <span className="font-semibold">
                      international logistics
                    </span>
                    , based in{' '}
                    <span className="font-semibold">Shenzhen, China</span>, at
                    the heart of Asian production networks.
                  </p>
                  <p className="text-[#4A4A4A] leading-relaxed mb-6">
                    Founded by <span className="font-semibold">Bernard Vu</span>
                    , a recognized Franco-Vietnamese entrepreneur, the company
                    has been supporting its clients for over ten years in their{' '}
                    <span className="font-semibold">
                      procurement, product development and international
                      distribution
                    </span>{' '}
                    projects.
                  </p>
                  <p className="text-[#4A4A4A] leading-relaxed mb-8">
                    Thanks to in-depth field knowledge, a reliable industrial
                    network and global delivery capacity, Asia Nature Limited
                    has established itself as a{' '}
                    <span className="font-semibold text-[#2F4F3E]">
                      strategic partner for demanding companies
                    </span>{' '}
                    seeking quality, responsiveness and innovation.
                  </p>
                  <Button variant="outline" withDownArrow onClick={() => {
                  document.getElementById('bureaux')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>
                    Discover our offices
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
                Ready to optimize your sourcing?
              </h2>
              <p className="text-xl text-[#4A4A4A] mb-10 max-w-2xl mx-auto font-light">
                Let's discuss your specific needs. Our team responds within 24
                hours with a tailor-made approach.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" withArrow asChild>
                  <a href="#contact">Request a quote</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Call an expert</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>;
}