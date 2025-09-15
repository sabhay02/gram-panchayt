import { motion } from 'framer-motion';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

const SpeechButton = ({ 
  text, 
  service, 
  scheme, 
  className = '', 
  size = 'md',
  variant = 'primary',
  showText = false 
}) => {
  const { speak, stop, speakService, speakScheme, isSpeaking, isTranslating } = useTextToSpeech();

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else if (service) {
      speakService(service);
    } else if (scheme) {
      speakScheme(scheme);
    } else if (text) {
      speak(text);
    }
  };

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white',
    secondary: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white',
    success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white',
    warning: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white',
    hindi: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  return (
    <motion.button
      onClick={handleClick}
      className={`
        ${sizes[size]} ${variants[variant]}
        rounded-full shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${showText ? 'px-4 w-auto space-x-2' : ''}
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      disabled={isTranslating}
      title={
        isTranslating ? 'Translating...' :
        isSpeaking ? 'Stop speaking' : 
        'Speak in Hindi'
      }
    >
      {isTranslating ? (
        <Loader2 size={iconSize} className="animate-spin" />
      ) : isSpeaking ? (
        <VolumeX size={iconSize} />
      ) : (
        <Volume2 size={iconSize} />
      )}
      
      {showText && (
        <span className="text-sm font-medium">
          {isTranslating ? 'अनुवाद...' : 
           isSpeaking ? 'रोकें' : 'हिंदी में सुनें'}
        </span>
      )}
    </motion.button>
  );
};

export default SpeechButton;