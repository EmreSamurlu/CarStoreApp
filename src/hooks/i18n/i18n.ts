import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '../../dictionary/en.json';
import tr from '../../dictionary/tr.json';

export const resources = {
  en: en,
  tr: tr,
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'tr',
  resources,
  react: {
    useSuspense: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
