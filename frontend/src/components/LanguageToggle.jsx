import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`
        flex items-center space-x-2 px-4 py-2 rounded-full
        bg-gradient-to-r from-orange-500 to-red-500 text-white
        hover:from-orange-600 hover:to-red-600
        shadow-lg hover:shadow-xl
        transition-all duration-300 transform hover:scale-105
        font-medium text-sm
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <Languages size={18} />
      <span className="font-semibold">
        {language === 'en' ? 'हिंदी' : 'English'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;