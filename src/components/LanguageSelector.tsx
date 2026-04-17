import { useNavigate, useLocation } from 'react-router-dom';
interface LanguageSelectorProps {
  variant?: 'desktop' | 'mobile';
}
export function LanguageSelector({
  variant = 'desktop'
}: LanguageSelectorProps) {
  const navigate = useNavigate();
  const location = useLocation();
  // Determine current language from URL
  const currentLang = location.pathname.startsWith('/en') ? 'en' : 'fr';
  const switchLanguage = (lang: 'fr' | 'en') => {
    // Preserve the hash (anchor) when switching languages
    const hash = location.hash;
    navigate(`/${lang}${hash}`);
  };
  if (variant === 'mobile') {
    return <div className="flex items-center space-x-4 pt-4 border-t border-[#2F4F3E]/10">
        <button onClick={() => switchLanguage('fr')} className={`text-lg font-medium transition-colors ${currentLang === 'fr' ? 'text-[#2F4F3E] font-bold' : 'text-[#4A4A4A]'}`}>
          FR
        </button>
        <span className="text-[#2F4F3E]/30">|</span>
        <button onClick={() => switchLanguage('en')} className={`text-lg font-medium transition-colors ${currentLang === 'en' ? 'text-[#2F4F3E] font-bold' : 'text-[#4A4A4A]'}`}>
          EN
        </button>
      </div>;
  }
  return <div className="flex items-center space-x-2">
      <button onClick={() => switchLanguage('fr')} className={`text-sm transition-colors hover:text-[#2F4F3E] ${currentLang === 'fr' ? 'text-[#2F4F3E] font-bold' : 'text-[#4A4A4A]'}`}>
        FR
      </button>
      <span className="text-[#2F4F3E]/30 text-xs">|</span>
      <button onClick={() => switchLanguage('en')} className={`text-sm transition-colors hover:text-[#2F4F3E] ${currentLang === 'en' ? 'text-[#2F4F3E] font-bold' : 'text-[#4A4A4A]'}`}>
        EN
      </button>
    </div>;
}