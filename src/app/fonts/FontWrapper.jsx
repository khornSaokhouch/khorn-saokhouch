'use client';
import { useLanguage } from '../context/LanguageContext';
import { fontEn, fontKm } from './fonts';

export default function FontWrapper({ children }) {
  const { lang } = useLanguage();

  return (
    <div className={lang === 'en' ? fontEn.variable : fontKm.variable}>
      <div className={lang === 'en' ? 'font-en' : 'font-km'}>
        {children}
      </div>
    </div>
  );
}
