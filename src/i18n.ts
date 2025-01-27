import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/locales/en/translation.json';
import ptTranslation from '../public/locales/pt/translation.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Define o idioma padrão
    fallbackLng: 'pt', // Idioma a ser usado como fallback
    // debug: true, // Habilita logs no console para debugging
    saveMissing: true, // Salva chaves ausentes
    resources: {
      en: {
        translation: enTranslation, // Traduções para o idioma inglês
      },
      pt: {
        translation: ptTranslation, // Traduções para o idioma português
      },
    },
    interpolation: {
      escapeValue: false, // Desabilita escaping para strings
    },
  });

export default i18n;
