import { useState, useEffect, createContext, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.schemes': 'Schemes',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    
    // Home Page
    'home.title': 'Welcome to e-Gram Panchayat',
    'home.subtitle': 'Your digital gateway to efficient village governance. Access services, track applications, and connect with your community - all in one place.',
    'home.explore_services': 'Explore Services',
    'home.download_guide': 'Download Guide',
    'home.popular_services': 'Popular Services',
    'home.latest_updates': 'Latest Updates',
    'home.emergency_services': 'Emergency Services',
    'home.join_revolution': 'Join the Digital Revolution',
    'home.learn_more': 'Learn More About Us',
    'home.get_in_touch': 'Get in Touch',
    
    // Services
    'services.title': 'Digital Services',
    'services.subtitle': 'Access all government services online with ease. Apply, track, and manage your applications from the comfort of your home.',
    'services.available': 'Available Services',
    'services.birth_certificate': 'Birth Certificate',
    'services.death_certificate': 'Death Certificate',
    'services.ration_card': 'Ration Card',
    'services.property_tax': 'Property Tax',
    'services.water_connection': 'Water Connection',
    'services.trade_license': 'Trade License',
    'services.building_permission': 'Building Permission',
    'services.employment_certificate': 'Employment Certificate',
    'services.apply_now': 'Apply Now',
    'services.applied': 'Applied',
    'services.processing_time': 'Processing',
    'services.fee': 'Fee',
    'services.required_documents': 'Required Documents',
    'services.need_help': 'Need Help?',
    'services.call_support': 'Call Support',
    'services.contact_us': 'Contact Us',
    
    // Schemes
    'schemes.title': 'Government Schemes',
    'schemes.subtitle': 'Explore various government schemes and welfare programs designed to improve the lives of citizens. Apply online and track your application status.',
    'schemes.active_schemes': 'Active Schemes',
    'schemes.total_beneficiaries': 'Total Beneficiaries',
    'schemes.amount_disbursed': 'Amount Disbursed',
    'schemes.success_rate': 'Success Rate',
    'schemes.available_schemes': 'Available Schemes',
    'schemes.pm_awas': 'PM Awas Yojana',
    'schemes.mgnrega': 'MGNREGA',
    'schemes.pm_kisan': 'PM Kisan Samman Nidhi',
    'schemes.scholarship': 'Scholarship Scheme',
    'schemes.ayushman_bharat': 'Ayushman Bharat',
    'schemes.solar_subsidy': 'Solar Subsidy Scheme',
    'schemes.benefit': 'Benefit',
    'schemes.beneficiaries': 'Beneficiaries',
    'schemes.deadline': 'Deadline',
    'schemes.eligibility': 'Eligibility',
    'schemes.how_to_apply': 'How to Apply',
    'schemes.choose_scheme': 'Choose Scheme',
    'schemes.prepare_documents': 'Prepare Documents',
    'schemes.submit_application': 'Submit Application',
    'schemes.track_status': 'Track Status',
    'schemes.need_assistance': 'Need Assistance?',
    'schemes.contact_support': 'Contact Support Team',
    'schemes.download_guidelines': 'Download Guidelines',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': "We're here to help! Reach out to us for any queries, suggestions, or assistance. Your feedback helps us serve you better.",
    'contact.get_in_touch': 'Get in Touch',
    'contact.office_address': 'Office Address',
    'contact.phone_numbers': 'Phone Numbers',
    'contact.email_addresses': 'Email Addresses',
    'contact.office_hours': 'Office Hours',
    'contact.send_message': 'Send us a Message',
    'contact.full_name': 'Full Name',
    'contact.email_address': 'Email Address',
    'contact.phone_number': 'Phone Number',
    'contact.department': 'Department',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send_message_btn': 'Send Message',
    'contact.quick_contacts': 'Quick Contacts',
    'contact.emergency_contact': 'Emergency Contact',
    'contact.visit_office': 'Visit Our Office',
    'contact.faq': 'Frequently Asked Questions',
    
    // About
    'about.title': 'About Our Gram Panchayat',
    'about.subtitle': 'Committed to serving our community with transparency, efficiency, and dedication towards building a progressive and digitally empowered village.',
    'about.history_heritage': 'Our History & Heritage',
    'about.vision': 'Our Vision',
    'about.mission': 'Our Mission',
    'about.leadership_team': 'Our Leadership Team',
    'about.achievements': 'Our Achievements',
    'about.visit_office': 'Visit Our Office',
    
    // Gallery
    'gallery.title': 'Village Gallery',
    'gallery.subtitle': 'Explore the visual journey of our village\'s progress, events, and initiatives. Witness the transformation and celebrate our achievements together.',
    'gallery.journey_pictures': 'Our Journey in Pictures',
    'gallery.share_moments': 'Share Your Moments',
    'gallery.submit_photos': 'Submit Photos',
    
    // Login
    'login.title': 'Official Login',
    'login.subtitle': 'Access the administrative dashboard',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.remember_me': 'Remember me',
    'login.forgot_password': 'Forgot password?',
    'login.sign_in': 'Sign In',
    'login.back_to_home': 'Back to Home',
    'login.secure_access': 'Secure Administrative Access',
    'login.need_help': 'Need Help?',
    
    // Admin
    'admin.title': 'e-Gram Panchayat Admin',
    'admin.subtitle': 'Administrative Dashboard',
    'admin.overview': 'Overview',
    'admin.applications': 'Applications',
    'admin.settings': 'Settings',
    'admin.logout': 'Logout',
    'admin.total_requests': 'Total Requests',
    'admin.pending_actions': 'Pending Actions',
    'admin.completed_today': 'Completed Today',
    'admin.urgent_items': 'Urgent Items',
    'admin.recent_applications': 'Recent Applications',
    'admin.government_schemes': 'Government Schemes',
    
    // Common
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.download': 'Download',
    'common.upload': 'Upload',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.continue': 'Continue',
    'common.finish': 'Finish',
    'common.success': 'Success',
    'common.error': 'Error',
    'common.warning': 'Warning',
    'common.info': 'Information',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.schemes': 'योजनाएं',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    
    // Home Page
    'home.title': 'ई-ग्राम पंचायत में आपका स्वागत है',
    'home.subtitle': 'कुशल ग्राम शासन के लिए आपका डिजिटल गेटवे। सेवाओं का उपयोग करें, आवेदनों को ट्रैक करें, और अपने समुदाय से जुड़ें - सब एक ही स्थान पर।',
    'home.explore_services': 'सेवाओं का अन्वेषण करें',
    'home.download_guide': 'गाइड डाउनलोड करें',
    'home.popular_services': 'लोकप्रिय सेवाएं',
    'home.latest_updates': 'नवीनतम अपडेट',
    'home.emergency_services': 'आपातकालीन सेवाएं',
    'home.join_revolution': 'डिजिटल क्रांति में शामिल हों',
    'home.learn_more': 'हमारे बारे में और जानें',
    'home.get_in_touch': 'संपर्क में रहें',
    
    // Services
    'services.title': 'डिजिटल सेवाएं',
    'services.subtitle': 'सभी सरकारी सेवाओं को आसानी से ऑनलाइन एक्सेस करें। अपने घर के आराम से आवेदन करें, ट्रैक करें और प्रबंधित करें।',
    'services.available': 'उपलब्ध सेवाएं',
    'services.birth_certificate': 'जन्म प्रमाण पत्र',
    'services.death_certificate': 'मृत्यु प्रमाण पत्र',
    'services.ration_card': 'राशन कार्ड',
    'services.property_tax': 'संपत्ति कर',
    'services.water_connection': 'पानी कनेक्शन',
    'services.trade_license': 'व्यापार लाइसेंस',
    'services.building_permission': 'भवन अनुमति',
    'services.employment_certificate': 'रोजगार प्रमाण पत्र',
    'services.apply_now': 'अभी आवेदन करें',
    'services.applied': 'आवेदन किया गया',
    'services.processing_time': 'प्रसंस्करण',
    'services.fee': 'शुल्क',
    'services.required_documents': 'आवश्यक दस्तावेज',
    'services.need_help': 'सहायता चाहिए?',
    'services.call_support': 'सहायता कॉल करें',
    'services.contact_us': 'हमसे संपर्क करें',
    
    // Schemes
    'schemes.title': 'सरकारी योजनाएं',
    'schemes.subtitle': 'नागरिकों के जीवन को बेहतर बनाने के लिए डिज़ाइन की गई विभिन्न सरकारी योजनाओं और कल्याणकारी कार्यक्रमों का अन्वेषण करें। ऑनलाइन आवेदन करें और अपने आवेदन की स्थिति को ट्रैक करें।',
    'schemes.active_schemes': 'सक्रिय योजनाएं',
    'schemes.total_beneficiaries': 'कुल लाभार्थी',
    'schemes.amount_disbursed': 'वितरित राशि',
    'schemes.success_rate': 'सफलता दर',
    'schemes.available_schemes': 'उपलब्ध योजनाएं',
    'schemes.pm_awas': 'पीएम आवास योजना',
    'schemes.mgnrega': 'मनरेगा',
    'schemes.pm_kisan': 'पीएम किसान सम्मान निधि',
    'schemes.scholarship': 'छात्रवृत्ति योजना',
    'schemes.ayushman_bharat': 'आयुष्मान भारत',
    'schemes.solar_subsidy': 'सोलर सब्सिडी योजना',
    'schemes.benefit': 'लाभ',
    'schemes.beneficiaries': 'लाभार्थी',
    'schemes.deadline': 'अंतिम तिथि',
    'schemes.eligibility': 'पात्रता',
    'schemes.how_to_apply': 'आवेदन कैसे करें',
    'schemes.choose_scheme': 'योजना चुनें',
    'schemes.prepare_documents': 'दस्तावेज तैयार करें',
    'schemes.submit_application': 'आवेदन जमा करें',
    'schemes.track_status': 'स्थिति ट्रैक करें',
    'schemes.need_assistance': 'सहायता चाहिए?',
    'schemes.contact_support': 'सहायता टीम से संपर्क करें',
    'schemes.download_guidelines': 'दिशानिर्देश डाउनलोड करें',
    
    // Contact
    'contact.title': 'हमसे संपर्क करें',
    'contact.subtitle': 'हम यहाँ मदद के लिए हैं! किसी भी प्रश्न, सुझाव या सहायता के लिए हमसे संपर्क करें। आपकी प्रतिक्रिया हमें बेहतर सेवा देने में मदद करती है।',
    'contact.get_in_touch': 'संपर्क में रहें',
    'contact.office_address': 'कार्यालय का पता',
    'contact.phone_numbers': 'फोन नंबर',
    'contact.email_addresses': 'ईमेल पते',
    'contact.office_hours': 'कार्यालय समय',
    'contact.send_message': 'हमें संदेश भेजें',
    'contact.full_name': 'पूरा नाम',
    'contact.email_address': 'ईमेल पता',
    'contact.phone_number': 'फोन नंबर',
    'contact.department': 'विभाग',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.send_message_btn': 'संदेश भेजें',
    'contact.quick_contacts': 'त्वरित संपर्क',
    'contact.emergency_contact': 'आपातकालीन संपर्क',
    'contact.visit_office': 'हमारे कार्यालय में आएं',
    'contact.faq': 'अक्सर पूछे जाने वाले प्रश्न',
    
    // About
    'about.title': 'हमारी ग्राम पंचायत के बारे में',
    'about.subtitle': 'एक प्रगतिशील और डिजिटल रूप से सशक्त गांव के निर्माण की दिशा में पारदर्शिता, दक्षता और समर्पण के साथ हमारे समुदाय की सेवा करने के लिए प्रतिबद्ध।',
    'about.history_heritage': 'हमारा इतिहास और विरासत',
    'about.vision': 'हमारा दृष्टिकोण',
    'about.mission': 'हमारा मिशन',
    'about.leadership_team': 'हमारी नेतृत्व टीम',
    'about.achievements': 'हमारी उपलब्धियां',
    'about.visit_office': 'हमारे कार्यालय में आएं',
    
    // Gallery
    'gallery.title': 'गांव गैलरी',
    'gallery.subtitle': 'हमारे गांव की प्रगति, कार्यक्रमों और पहलों की दृश्य यात्रा का अन्वेषण करें। परिवर्तन को देखें और हमारी उपलब्धियों को एक साथ मनाएं।',
    'gallery.journey_pictures': 'तस्वीरों में हमारी यात्रा',
    'gallery.share_moments': 'अपने पल साझा करें',
    'gallery.submit_photos': 'फोटो जमा करें',
    
    // Login
    'login.title': 'आधिकारिक लॉगिन',
    'login.subtitle': 'प्रशासनिक डैशबोर्ड तक पहुंच',
    'login.username': 'उपयोगकर्ता नाम',
    'login.password': 'पासवर्ड',
    'login.remember_me': 'मुझे याद रखें',
    'login.forgot_password': 'पासवर्ड भूल गए?',
    'login.sign_in': 'साइन इन',
    'login.back_to_home': 'होम पर वापस',
    'login.secure_access': 'सुरक्षित प्रशासनिक पहुंच',
    'login.need_help': 'सहायता चाहिए?',
    
    // Admin
    'admin.title': 'ई-ग्राम पंचायत एडमिन',
    'admin.subtitle': 'प्रशासनिक डैशबोर्ड',
    'admin.overview': 'अवलोकन',
    'admin.applications': 'आवेदन',
    'admin.settings': 'सेटिंग्स',
    'admin.logout': 'लॉगआउट',
    'admin.total_requests': 'कुल अनुरोध',
    'admin.pending_actions': 'लंबित कार्य',
    'admin.completed_today': 'आज पूर्ण',
    'admin.urgent_items': 'तत्काल आइटम',
    'admin.recent_applications': 'हाल के आवेदन',
    'admin.government_schemes': 'सरकारी योजनाएं',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view': 'देखें',
    'common.download': 'डाउनलोड',
    'common.upload': 'अपलोड',
    'common.search': 'खोजें',
    'common.filter': 'फिल्टर',
    'common.all': 'सभी',
    'common.yes': 'हाँ',
    'common.no': 'नहीं',
    'common.close': 'बंद करें',
    'common.open': 'खोलें',
    'common.next': 'अगला',
    'common.previous': 'पिछला',
    'common.continue': 'जारी रखें',
    'common.finish': 'समाप्त',
    'common.success': 'सफलता',
    'common.error': 'त्रुटि',
    'common.warning': 'चेतावनी',
    'common.info': 'जानकारी',
  }
};