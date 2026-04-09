import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface HeaderProps {
  logoSrc?: string;
}

export function Header({ logoSrc }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {logoSrc ? (
              <img src={logoSrc} alt="Le Premier Logo" className="h-16" />
            ) : (
              <>
                <Logo className="w-12 h-12" />
                <div>
                  <h1 className="text-xl font-bold text-[#eb2627]" style={{ fontFamily: 'Anton, sans-serif' }}>
                    LE PREMIER GROUP
                  </h1>
                </div>
              </>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'Lato, sans-serif' }}>
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#eb2627] transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#eb2627] transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('divisions')} className="text-gray-700 hover:text-[#eb2627] transition-colors">
              {t('nav.divisions')}
            </button>
            <LanguageSwitcher />
            <button onClick={() => scrollToSection('contact')} className="bg-[#eb2627] text-white px-6 py-2 rounded hover:bg-[#d42020] transition-colors font-medium">
              {t('nav.contact')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-[#eb2627] transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-[#eb2627] transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('divisions')} className="block w-full text-left text-gray-700 hover:text-[#eb2627] transition-colors">
              {t('nav.divisions')}
            </button>
            <div className="px-4">
              <LanguageSwitcher />
            </div>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-[#eb2627] text-white px-6 py-2 rounded hover:bg-[#d42020] transition-colors font-medium">
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}