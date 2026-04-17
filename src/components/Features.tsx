import { Factory, Lightbulb, Truck, Leaf, Smartphone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../translations/content';
const icons = [Factory, Lightbulb, Truck, ShieldCheck, Leaf, Smartphone];
export function Features() {
  const {
    language
  } = useLanguage();
  const t = content[language];
  return <section id="services" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#8FA89B] font-medium tracking-widest uppercase text-xs mb-4 block">
            {t.features.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F3E] mb-6">
            {t.features.title}
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.services.map((service, index) => {
          const Icon = icons[index];
          return <div key={index} className="group bg-white p-8 border border-[#E8E4D9] hover:border-[#2F4F3E] transition-all duration-300 shadow-sm hover:shadow-xl relative top-0 hover:-top-2">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-none bg-[#F9F8F6] text-[#2F4F3E] group-hover:bg-[#2F4F3E] group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2F4F3E] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed border-t border-[#E8E4D9] pt-4 group-hover:border-[#2F4F3E]/20 transition-colors">
                  {service.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}