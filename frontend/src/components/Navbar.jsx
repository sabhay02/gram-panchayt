import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, Info, FileText, Gift, Camera, Phone, LogIn } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import SpeechButton from './SpeechButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/about', label: t('nav.about'), icon: Info },
    { path: '/services', label: t('nav.services'), icon: FileText },
    { path: '/schemes', label: t('nav.schemes'), icon: Gift },
    { path: '/gallery', label: t('nav.gallery'), icon: Camera },
    { path: '/contact', label: t('nav.contact'), icon: Phone },
    { path: '/login', label: t('nav.login'), icon: LogIn },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">GP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{t('nav.title') || 'e-Gram Panchayat'}</h1>
              <p className="text-xs text-gray-500">{t('nav.subtitle') || 'Digital Village Portal'}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mr-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Language Toggle and Speech - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <SpeechButton 
              text="Welcome to e-Gram Panchayat Digital Village Portal"
              size="md"
              variant="hindi"
              showText={true}
            />
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-1 border-t border-gray-100 bg-white shadow-md rounded-lg mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Language Toggle - Mobile */}
            <div className="px-4 py-3 border-t border-gray-100">
              <LanguageToggle className="w-full justify-center" />
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
