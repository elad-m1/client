import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

import he from './langs/he.json';
import en from './langs/en.json';

const resources = {
  he: {
    translation: he,
  },
  en: {
    translation: en,
  },
};

I18nManager.forceRTL(false);

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  compatibilityJSON: 'v3',
});

export default i18n;
