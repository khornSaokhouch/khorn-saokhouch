'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en/common.json';
import km from '../locales/km/common.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [t, setT] = useState(en); // default translations

  useEffect(() => {
    if (lang === 'en') setT(en);
    if (lang === 'km') setT(km);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'km' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
