import { useState, useCallback } from 'react';

// Comprehensive translation dictionary for English to Hindi
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
  'Processing': 'प्रसंस्करण',
  'Completed': 'पूर्ण',
  'Pending': 'लंबित',
  'Approved': 'स्वीकृत',
  'Rejected': 'अस्वीकृत',
  
  // Services - Detailed translations
  'Birth Certificate': 'जन्म प्रमाण पत्र',
  'Apply for birth certificate online with quick processing and home delivery option': 'त्वरित प्रसंस्करण और होम डिलीवरी विकल्प के साथ जन्म प्रमाण पत्र के लिए ऑनलाइन आवेदन करें',
  'Death Certificate': 'मृत्यु प्रमाण पत्र',
  'Apply for death certificate with medical records. Processing time: 5-7 days': 'चिकित्सा रिकॉर्ड के साथ मृत्यु प्रमाण पत्र के लिए आवेदन करें। प्रसंस्करण समय: 5-7 दिन',
  'Ration Card': 'राशन कार्ड',
  'New ration card application and renewal services with digital verification': 'डिजिटल सत्यापन के साथ नया राशन कार्ड आवेदन और नवीनीकरण सेवाएं',
  'Property Tax': 'संपत्ति कर',
  'Pay property tax online and get instant receipts with tax calculation tools': 'कर गणना उपकरण के साथ संपत्ति कर ऑनलाइन भुगतान करें और तत्काल रसीद प्राप्त करें',
  'Water Connection': 'पानी कनेक्शन',
  'Apply for new water connection or report issues with 24/7 support system': '24/7 सहायता प्रणाली के साथ नए पानी कनेक्शन के लिए आवेदन करें या समस्याओं की रिपोर्ट करें',
  'Trade License': 'व्यापार लाइसेंस',
  'Apply for trade license for your business with online verification': 'ऑनलाइन सत्यापन के साथ अपने व्यवसाय के लिए व्यापार लाइसेंस के लिए आवेदन करें',
  'Building Permission': 'भवन अनुमति',
  'Get building permission for construction with architectural approval': 'वास्तुशिल्प अनुमोदन के साथ निर्माण के लिए भवन अनुमति प्राप्त करें',
  'Employment Certificate': 'रोजगार प्रमाण पत्र',
  'Get employment certificate for job applications and visa purposes': 'नौकरी के आवेदन और वीजा उद्देश्यों के लिए रोजगार प्रमाण पत्र प्राप्त करें',
  
  // Schemes - Detailed translations
  'PM Awas Yojana': 'प्रधानमंत्री आवास योजना',
  'Affordable housing scheme for economically weaker sections and low-income groups': 'आर्थिक रूप से कमजोर वर्गों और कम आय वाले समूहों के लिए किफायती आवास योजना',
  'MGNREGA': 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम',
  'Guaranteed 100 days of employment in a financial year to rural households': 'ग्रामीण परिवारों को एक वित्तीय वर्ष में 100 दिन के रोजगार की गारंटी',
  'PM Kisan Samman Nidhi': 'प्रधानमंत्री किसान सम्मान निधि',
  'Direct income support to small and marginal farmers across the country': 'देश भर के छोटे और सीमांत किसानों को प्रत्यक्ष आय सहायता',
  'Scholarship Scheme': 'छात्रवृत्ति योजना',
  'Financial assistance for meritorious students from economically backward families': 'आर्थिक रूप से पिछड़े परिवारों के मेधावी छात्रों के लिए वित्तीय सहायता',
  'Ayushman Bharat': 'आयुष्मान भारत',
  'Health insurance scheme providing coverage up to 5 lakh per family per year': 'प्रति परिवार प्रति वर्ष 5 लाख तक का कवरेज प्रदान करने वाली स्वास्थ्य बीमा योजना',
  'Solar Subsidy Scheme': 'सोलर सब्सिडी योजना',
  'Subsidy for installation of solar panels to promote renewable energy': 'नवीकरणीय ऊर्जा को बढ़ावा देने के लिए सोलर पैनल की स्थापना के लिए सब्सिडी',
  
  // Form fields
  'Full Name': 'पूरा नाम',
  'Email Address': 'ईमेल पता',
  'Phone Number': 'फोन नंबर',
  'Message': 'संदेश',
  'Subject': 'विषय',
  'Department': 'विभाग',
  'Required Documents': 'आवश्यक दस्तावेज',
  'Processing Time': 'प्रसंस्करण समय',
  'Fee': 'शुल्क',
  'Eligibility': 'पात्रता',
  'Benefit': 'लाभ',
  'Deadline': 'अंतिम तिथि',
  'Beneficiaries': 'लाभार्थी',
  
  // Time expressions
  'days': 'दिन',
  'weeks': 'सप्ताह',
  'months': 'महीने',
  'years': 'वर्ष',
  'Instant': 'तत्काल',
  'Ongoing': 'चालू',
  
  // Currency and numbers
  'Rupees': 'रुपये',
  'Lakh': 'लाख',
  'Crore': 'करोड़',
  'per day': 'प्रति दिन',
  'per year': 'प्रति वर्ष',
  'per month': 'प्रति महीने',
  
  // Action words
  'Click here': 'यहाँ क्लिक करें',
  'Read more': 'और पढ़ें',
  'Get started': 'शुरू करें',
  'Sign up': 'साइन अप करें',
  'Log in': 'लॉग इन करें',
  'Thank you': 'धन्यवाद',
  'Please wait': 'कृपया प्रतीक्षा करें',
  'Try again': 'फिर से कोशिश करें',
  'Need Help': 'सहायता चाहिए',
  'Emergency Services': 'आपातकालीन सेवाएं',
  'Call Support': 'सहायता कॉल करें',
  
  // Status messages
  'Application submitted successfully': 'आवेदन सफलतापूर्वक जमा किया गया',
  'Processing your request': 'आपके अनुरोध को प्रसंस्करण कर रहे हैं',
  'Download completed': 'डाउनलोड पूर्ण',
  'Form validation failed': 'फॉर्म सत्यापन असफल',
  'Connection error': 'कनेक्शन त्रुटि',
  'Please try again later': 'कृपया बाद में पुनः प्रयास करें'
};

// Advanced translation function with context awareness
const translateToHindi = (text) => {
  if (!text) return '';
  
  let translatedText = text;
  
  // Direct dictionary lookup first (exact match)
  if (translationDict[text.trim()]) {
    return translationDict[text.trim()];
  }
  
  // Handle currency formatting
  translatedText = translatedText
    .replace(/₹(\d+(?:,\d+)*)\s*Lakh/g, '₹$1 लाख')
    .replace(/₹(\d+(?:,\d+)*)\s*Crore/g, '₹$1 करोड़')
    .replace(/₹(\d+(?:,\d+)*)/g, '₹$1 रुपये');
  
  // Handle time expressions
  translatedText = translatedText
    .replace(/(\d+)-(\d+)\s*days/g, '$1-$2 दिन')
    .replace(/(\d+)\s*days/g, '$1 दिन')
    .replace(/(\d+)\s*weeks/g, '$1 सप्ताह')
    .replace(/(\d+)\s*months/g, '$1 महीने')
    .replace(/(\d+)\s*years/g, '$1 वर्ष');
  
  // Word-by-word translation for longer sentences
  Object.keys(translationDict).forEach(englishWord => {
    const hindiWord = translationDict[englishWord];
    const regex = new RegExp(`\\b${englishWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    translatedText = translatedText.replace(regex, hindiWord);
  });
  
  // Handle common sentence patterns
  translatedText = translatedText
    .replace(/Apply for\s+(.+)/gi, '$1 के लिए आवेदन करें')
    .replace(/Welcome to\s+(.+)/gi, '$1 में आपका स्वागत है')
    .replace(/(.+)\s+is available/gi, '$1 उपलब्ध है')
    .replace(/(.+)\s+required/gi, '$1 आवश्यक है')
    .replace(/Processing time:\s*(.+)/gi, 'प्रसंस्करण समय: $1')
    .replace(/Fee:\s*(.+)/gi, 'शुल्क: $1');
  
  return translatedText;
};

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('hi-IN');

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
      utterance.lang = options.lang || currentLanguage;
      utterance.rate = options.rate || 0.7; // Slower for clarity
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // Wait for voices to load
      const loadVoices = () => {
        return new Promise((resolve) => {
          const voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            resolve(voices);
          } else {
            window.speechSynthesis.onvoiceschanged = () => {
              resolve(window.speechSynthesis.getVoices());
            };
          }
        });
      };

      const voices = await loadVoices();
      
      // Try to find the best Hindi voice
      const hindiVoices = voices.filter(voice => 
        voice.lang.includes('hi') || 
        voice.name.toLowerCase().includes('hindi') ||
        voice.name.toLowerCase().includes('india') ||
        voice.lang.includes('IN')
      );
      
      if (hindiVoices.length > 0) {
        // Prefer female voices for better clarity
        const femaleVoice = hindiVoices.find(voice => 
          voice.name.toLowerCase().includes('female') ||
          voice.name.toLowerCase().includes('woman')
        );
        utterance.voice = femaleVoice || hindiVoices[0];
      }

      // Event handlers
      utterance.onstart = () => {
        setIsSpeaking(true);
        console.log('Started speaking:', hindiText);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setCurrentText('');
        console.log('Finished speaking');
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        setIsSpeaking(false);
        setCurrentText('');
      };

      utterance.onpause = () => {
        console.log('Speech paused');
      };

      utterance.onresume = () => {
        console.log('Speech resumed');
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);

    } catch (error) {
      console.error('Translation/Speech error:', error);
      setIsTranslating(false);
      setIsSpeaking(false);
    }
  }, [isSpeaking, isSupported, currentLanguage]);

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
      voice.name.toLowerCase().includes('india') ||
      voice.lang.includes('IN')
    );
  }, [getVoices]);

  // Speak service information
  const speakService = useCallback((service) => {
    const serviceText = `${service.title}. ${service.description}. शुल्क: ${service.fee}. प्रसंस्करण समय: ${service.processingTime}`;
    speak(serviceText);
  }, [speak]);

  // Speak scheme information
  const speakScheme = useCallback((scheme) => {
    const schemeText = `${scheme.title}. ${scheme.description}. लाभ: ${scheme.benefit}. पात्रता: ${scheme.eligibility}`;
    speak(schemeText);
  }, [speak]);

  return {
    speak,
    stop,
    pause,
    resume,
    speakService,
    speakScheme,
    isSpeaking,
    isTranslating,
    currentText,
    isSupported,
    getVoices,
    getHindiVoices,
    setCurrentLanguage
  };
};