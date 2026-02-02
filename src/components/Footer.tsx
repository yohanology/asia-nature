import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
export function Footer() {
  const {
    language
  } = useLanguage();
  const t = content[language];
  return <footer id="contact" className="bg-[#2F4F3E] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <a href={`/${language}`} className="block mb-6">
              <img src="/asia-nature-logo-2f4f3e-transparent.png" alt="Asia Nature Limited - Global Trade Company" className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-[#D4C5B0] text-sm leading-relaxed max-w-sm mb-8">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-serif font-bold text-white mb-6 text-lg">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-4 text-sm text-[#D4C5B0]">
              <li>
                <a href="#societe" className="hover:text-white transition-colors">
                  {t.nav.company}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  {t.nav.clients}
                </a>
              </li>
              <li>
                <a href="#fondateur" className="hover:text-white transition-colors">
                  {t.nav.founder}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="font-serif font-bold text-white mb-6 text-lg">
              {t.footer.contactTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#D4C5B0]">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-[#8FA89B]" />
                <div>
                  <span>
                    Room 4602-5, Block A, Jiangsu Building
                    <br />
                    No.6013 Yitian Road, Futian District
                    <br />
                    Shenzhen, China
                  </span>
                  <div className="mt-2 text-xs opacity-75">
                    广东省 深圳市 福田区 益田路6013号
                    <br />
                    江苏大厦 A座4602-5室， 邮编：518038
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0 text-[#8FA89B]" />
                  <a href="mailto:ceo@asia-nature.com" className="hover:text-white transition-colors">
                    ceo@asia-nature.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 flex-shrink-0 text-[#8FA89B]" />
                  <a href="tel:+8675523607869" className="hover:text-white transition-colors">
                    +86 755 2360 7869
                  </a>
                </li>
                <li className="flex items-center">
                  <svg viewBox="0 0 24 24" width="18" height="18" className="mr-3 flex-shrink-0 text-[#8FA89B] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <a href="https://wa.me/8618038002245" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +86 180 3800 2245
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#8FA89B]/20 flex flex-col md:flex-row justify-between items-center text-xs text-[#8FA89B]">
          <p>
            &copy; {new Date().getFullYear()} Asia Nature Limited.{' '}
            {t.footer.copyright}
          </p>
          <p className="mt-2 md:mt-0">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>;
}