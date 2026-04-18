import { createContext, useContext, useEffect, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const META: Record<Language, { title: string; description: string }> = {
  fr: {
    title: 'Asia Nature Limited — Agent de sourcing à Shenzhen',
    description: "Plus de 20 ans d'expertise en sourcing industriel depuis Shenzhen. Nous relions l'Asie à l'Europe et à l'Afrique avec fiabilité et transparence.",
  },
  en: {
    title: 'Asia Nature Limited — Sourcing Agent in Shenzhen',
    description: 'Over 20 years of expertise in industrial sourcing from Shenzhen. We connect Asia to Europe and Africa with reliability and transparency.',
  },
};

function setMetaContent(selector: string, content: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
}

function setLinkHref(selector: string, href: string) {
  const el = document.head.querySelector<HTMLLinkElement>(selector);
  if (el) el.href = href;
}

export function LanguageProvider({
  language,
  children,
}: {
  language: Language;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = language;
    const { title, description } = META[language];
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', `https://asia-nature.com/${language}`);
    setMetaContent('meta[property="og:locale"]', language === 'fr' ? 'fr_FR' : 'en_US');
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setLinkHref('link[rel="canonical"]', `https://asia-nature.com/${language}`);
  }, [language]);

  return <LanguageContext.Provider value={{ language }}>
    {children}
  </LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
