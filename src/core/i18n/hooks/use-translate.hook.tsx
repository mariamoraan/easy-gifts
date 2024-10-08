import { useTranslation } from 'react-i18next';

interface I18n {
  readonly currentLanguage: string;
  languages: readonly string[];
  changeLanguage: (language: string, callback?: (e: unknown) => void) => void;
}

export const useTranslate = () => {
  const { t, i18n } = useTranslation();

  const i18nObject: I18n = {
    currentLanguage: i18n.language,
    languages: i18n.languages,
    changeLanguage: i18n.changeLanguage,
  };

  return {
    t,
    i18n: i18nObject,
  };
};
