import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    language
  } = useLanguage();
  const t = content[language];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: t.nav.company,
    href: '#societe'
  }, {
    name: t.nav.services,
    href: '#services'
  }, {
    name: t.nav.clients,
    href: '#clients'
  }, {
    name: t.nav.founder,
    href: '#fondateur'
  }, {
    name: t.nav.contact,
    href: '#contact'
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#2F4F3E]/10 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${language}`} className="group">
          <img src="/asia-nature-logo-2f4f3e-transparent.png" alt={t.alts.logo} className="h-12 w-auto transition-opacity group-hover:opacity-80" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-[#4A4A4A] hover:text-[#2F4F3E] transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-[#2F4F3E] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
              {link.name}
            </a>)}
          <div className="h-4 w-px bg-[#2F4F3E]/20 mx-2"></div>
          <LanguageSelector />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#2F4F3E]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && <div id="mobile-nav" className="lg:hidden absolute top-full left-0 w-full bg-[#F9F8F6] border-b border-[#2F4F3E]/10 py-8 px-6 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="text-xl font-serif font-medium text-[#2F4F3E]" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <LanguageSelector variant="mobile" />
          </div>
        </div>}
    </nav>;
}