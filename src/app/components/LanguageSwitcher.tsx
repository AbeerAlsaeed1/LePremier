import { useLanguage } from '@/app/contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#eb2627] text-[#eb2627] hover:bg-[#eb2627] hover:text-white transition-colors font-medium"
      aria-label="Switch Language"
    >
      <span className="text-sm font-semibold">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};