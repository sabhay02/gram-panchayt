import { useState, useCallback } from 'react';

// Translation dictionary for English to Hindi
const translationDict = {
  // Navigation
  'Home': 'होम',
  'About Us': 'हमारे बारे में',
  'Services': 'सेवाएं',
  'Schemes': 'योजनाएं',
  'Gallery': 'गैलरी',
  'Contact': 'संपर्क',
  'Login': 'लॉगिन',
  
  // Common phrases
  'Welcome to e-Gram Panchayat': 'ई-ग्राम पंचायत में आपका स्वागत है',
  'Digital Services': 'डिजिटल सेवाएं',
  'Government Schemes': 'सरकारी योजनाएं',
  'Apply Now': 'अभी आवेदन करें',
  'Contact Us': 'हमसे संपर्क करें',
  'Learn More': 'और जानें',
  'Download': 'डाउनलोड',
  'Submit': 'जमा करें',
  'Cancel': 'रद्द करें',
  'Loading': 'लोड हो रहा है',
  'Success': 'सफलता',
  'Error': 'त्रुटि',
  
  // Services
  'Birth Certificate': 'जन्म प्रमाण पत्र',
  'Death Certificate': 'मृत्यु प्रमाण पत्र',
  'Ration Card': 'राशन कार्ड',
  'Property Tax': 'संपत्ति कर',
  'Water Connection': 'पानी कनेक्शन',
  'Trade License': 'व्यापार लाइसेंस',
  
  // Schemes
  'PM Awas Yojana': 'पीएम आवास योजना',
  'MGNREGA': 'मनरेगा',
  'PM Kisan Samman Nidhi': 'पीएम किसान सम्मान निधि',
  'Ayushman Bharat': 'आयुष्मान भारत',
  
  // Form fields
  'Full Name': 'पूरा नाम',
  'Email Address': 'ईमेल पता',
  'Phone Number': 'फोन नंबर',
  'Message': 'संदेश',
  'Subject': 'विषय',
  'Department': 'विभाग',
  
  // Status
  'Pending': 'लंबित',
  'Approved': 'स्वीकृत',
  'Rejected': 'अस्वीकृत',
  'Processing': 'प्रसंस्करण',
  'Completed': 'पूर्ण',
  
  // Time
  'Today': 'आज',
  'Yesterday': 'कल',
  'This Week': 'इस सप्ताह',
  'This Month': 'इस महीने',
  
  // Numbers (for better pronunciation)
  'One': 'एक',
  'Two': 'दो',
  'Three': 'तीन',
  'Four': 'चार',
  'Five': 'पांच',
  'Six': 'छह',
  'Seven': 'सात',
  'Eight': 'आठ',
  'Nine': 'नौ',
  'Ten': 'दस'
};

// Advanced translation function with context awareness
const translateToHindi = (text) => {
  if (!text) return '';
  
  let translatedText = text;
  
  // Direct dictionary lookup first
  if (translationDict[text]) {
    return translationDict[text];
  }
  
  // Word-by-word translation for longer sentences
  Object.keys(translationDict).forEach(englishWord => {
    const hindiWord = translationDict[englishWord];
    const regex = new RegExp(`\\b${englishWord}\\b`, 'gi');
    translatedText = translatedText.replace(regex, hindiWord);
  });
  
  // Handle common sentence patterns
  translatedText = translatedText
    .replace(/Apply for/gi, 'के लिए आवेदन करें')
    .replace(/Click here/gi, 'यहाँ क्लिक करें')
    .replace(/Read more/gi, 'और पढ़ें')
    .replace(/Get started/gi, 'शुरू करें')
    .replace(/Sign up/gi, 'साइन अप करें')
    .replace(/Log in/gi, 'लॉग इन करें')
    .replace(/Welcome to/gi, 'में आपका स्वागत है')
    .replace(/Thank you/gi, 'धन्यवाद')
    .replace(/Please wait/gi, 'कृपया प्रतीक्षा करें')
    .replace(/Try again/gi, 'फिर से कोशिश करें');
  
  return translatedText;
};

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentText, setCurrentText] = useState('');

  // Check if browser supports speech synthesis
  const isSupported = 'speechSynthesis' in window;

  const speak = useCallback(async (text, options = {}) => {
    if (!isSupported) {
      console.warn('Speech synthesis not supported in this browser');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
    }

    setIsTranslating(true);
    
    try {
      // Translate text to Hindi
      const hindiText = translateToHindi(text);
      setCurrentText(hindiText);
      
      setIsTranslating(false);
      setIsSpeaking(true);

      // Create speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(hindiText);
      
      // Configure voice settings for Hindi
      utterance.lang = 'hi-IN'; // Hindi (India)
      utterance.rate = options.rate || 0.8; // Slightly slower for clarity
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // Try to find a Hindi voice
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(voice => 
        voice.lang.includes('hi') || 
        voice.name.toLowerCase().includes('hindi') ||
        voice.name.toLowerCase().includes('india')
      );
      
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      // Event handlers
      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setCurrentText('');
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        setIsSpeaking(false);
        setCurrentText('');
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);

    } catch (error) {
      console.error('Translation error:', error);
      setIsTranslating(false);
      setIsSpeaking(false);
    }
  }, [isSpeaking, isSupported]);

  const stop = useCallback(() => {
    if (isSupported && isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentText('');
    }
  }, [isSupported, isSpeaking]);

  const pause = useCallback(() => {
    if (isSupported && isSpeaking) {
      window.speechSynthesis.pause();
    }
  }, [isSupported, isSpeaking]);

  const resume = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.resume();
    }
  }, [isSupported]);

  // Get available voices
  const getVoices = useCallback(() => {
    if (!isSupported) return [];
    return window.speechSynthesis.getVoices();
  }, [isSupported]);

  // Get Hindi voices specifically
  const getHindiVoices = useCallback(() => {
    const voices = getVoices();
    return voices.filter(voice => 
      voice.lang.includes('hi') || 
      voice.name.toLowerCase().includes('hindi') ||
      voice.name.toLowerCase().includes('india')
    );
  }, [getVoices]);

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
    isTranslating,
    currentText,
    isSupported,
    getVoices,
    getHindiVoices
  };
};