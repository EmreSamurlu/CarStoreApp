// import all namespaces (for the default language, only)
import ns1 from 'locales/en/ns1.json';
import 'react-i18next';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'ns1';
    // custom resources type
    resources: {
      ns1: typeof ns1;
    };
  }
}
