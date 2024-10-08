import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './en.json';

const resources = {
  en: {
    translation: translationEn,
  },
};

i18n
  .use(new LanguageDetector())
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
