import React, { createContext, useContext } from 'react';
type Language = 'fr' | 'en';
interface LanguageContextType {
  language: Language;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export function LanguageProvider({
  language,
  children



}: {language: Language;children: ReactNode;}) {
  return <LanguageContext.Provider value={{
    language
  }}>
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