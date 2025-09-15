import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FileText, 
  Users, 
  Building, 
  Phone, 
  CreditCard,
  Home,
  Briefcase,
  Heart,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNotification } from '../hooks/useNotification';
import NotificationContainer from '../components/NotificationContainer';
import { useLanguage } from '../hooks/useLanguage';
import SpeechButton from '../components/SpeechButton';

const Services = () => {
  const { notifications, showSuccess, showError, showInfo, removeNotification } = useNotification();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [applicationStatus, setApplicationStatus] = useState({});
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      icon: FileText,
      title: t('services.birth_certificate'),
      description: t('services.birth_certificate_desc') || 'Apply for birth certificate with required documents. Processing time: 7-10 days.',
      category: 'certificates',
      fee: '₹50',
      documents: ['Hospital Birth Record', 'Parent ID Proof', 'Address Proof'],
      processingTime: '7-10 days',
      color: 'blue'
    },
    {
      id: 2,
      icon: FileText,
      title: t('services.death_certificate'),
      description: t('services.death_certificate_desc') || 'Apply for death certificate with medical records. Processing time: 5-7 days.',
      category: 'certificates',
      fee: '₹50',
      documents: ['Medical Certificate', 'ID Proof', 'Address Proof'],
      processingTime: '5-7 days',
      color: 'gray'
    },
    {
      id: 3,
      icon: Users,
      title: t('services.ration_card'),
      description: t('services.ration_card_desc') || 'New ration card application and renewal services with income verification.',
      category: 'welfare',
      fee: 'Free',
      documents: ['Income Certificate', 'Address Proof', 'Family Photo'],
      processingTime: '15-20 days',
      color: 'green'
    },
    {
      id: 4,
      icon: Building,
      title: 'Property Tax',
      description: 'Pay property tax online and get instant receipts with calculation tools.',
      category: 'tax',
      fee: 'Variable',
      documents: ['Property Documents', 'Previous Tax Receipt'],
      processingTime: 'Instant',
      color: 'orange'
    },
    {
      id: 5,
      icon: Phone,
      title: 'Water Connection',
      description: 'Apply for new water connection or report issues with 24/7 support.',
      category: 'utilities',
      fee: '₹2,500',
      documents: ['Address Proof', 'Property Documents', 'ID Proof'],
      processingTime: '10-15 days',
      color: 'blue'
    },
    {
      id: 6,
      icon: CreditCard,
      title: 'Trade License',
      description: 'Apply for trade license for your business with online verification.',
      category: 'business',
      fee: '₹1,000',
      documents: ['Business Plan', 'Address Proof', 'ID Proof'],
      processingTime: '20-25 days',
      color: 'purple'
    },
    {
      id: 7,
      icon: Home,
      title: 'Building Permission',
      description: 'Get building permission for construction with architectural approval.',
      category: 'construction',
      fee: '₹5,000',
      documents: ['Site Plan', 'Architectural Drawing', 'NOC'],
      processingTime: '30-45 days',
      color: 'red'
    },
    {
      id: 8,
      icon: Briefcase,
      title: 'Employment Certificate',
      description: 'Get employment certificate for job applications and visa purposes.',
      category: 'certificates',
      fee: '₹100',
      documents: ['Employment Letter', 'Salary Slip', 'ID Proof'],
      processingTime: '3-5 days',
      color: 'indigo'
    }
  ];

  const categories = [
    { value: 'all', label: t('categories.all_services') || 'All Services' },
    { value: 'certificates', label: t('categories.certificates') || 'Certificates' },
    { value: 'welfare', label: t('categories.welfare') || 'Welfare Schemes' },
    { value: 'tax', label: t('categories.tax') || 'Tax Services' },
    { value: 'utilities', label: t('categories.utilities') || 'Utilities' },
    { value: 'business', label: t('categories.business') || 'Business' },
    { value: 'construction', label: t('categories.construction') || 'Construction' }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplyService = async (service) => {
    setApplicationStatus(prev => ({ ...prev, [service.id]: 'loading' }));
    showInfo(`Processing application for ${service.title}...`);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setApplicationStatus(prev => ({ ...prev, [service.id]: 'success' }));
      showSuccess(`Application for ${service.title} submitted successfully! Reference ID: APP${Date.now()}`);
    } catch (error) {
      setApplicationStatus(prev => ({ ...prev, [service.id]: 'error' }));
      showError(`Failed to submit application for ${service.title}. Please try again.`);
    }
  };

  const handleDownloadForm = async (service) => {
    showInfo(`Downloading application form for ${service.title}...`);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showSuccess(`${service.title} application form downloaded successfully!`);
    } catch (error) {
      showError('Failed to download form. Please try again.');
    }
  };

  const getStatusIcon = (serviceId) => {
    const status = applicationStatus[serviceId];
    switch (status) {
      case 'loading': return <Clock className="animate-spin" size={16} />;
      case 'success': return <CheckCircle className="text-green-600" size={16} />;
      case 'error': return <AlertCircle className="text-red-600" size={16} />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <NotificationContainer 
        notifications={notifications} 
        onRemove={removeNotification} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            {t('services.title')}
          </motion.h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('common.search') + ' services...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <Filter size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field pl-10 pr-8"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('services.available')} ({filteredServices.length})
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive list of digital services designed to make 
              your life easier and more convenient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              const status = applicationStatus[service.id];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        service.color === 'green' ? 'bg-green-100 text-green-600' :
                        service.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                        service.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        service.color === 'red' ? 'bg-red-100 text-red-600' :
                        service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <SpeechButton 
                          service={service}
                          size="sm"
                          variant="hindi"
                        />
                        {getStatusIcon(service.id)}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">{t('services.fee')}:</span>
                        <span className="font-medium text-gray-800">{service.fee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">{t('services.processing_time')}:</span>
                        <span className="font-medium text-gray-800">{service.processingTime}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">{t('services.required_documents')}:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.documents.map((doc, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        loading={status === 'loading'}
                        disabled={status === 'success'}
                        onClick={() => handleApplyService(service)}
                        className="flex-1"
                      >
                        {status === 'success' ? t('services.applied') : t('services.apply_now')}
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={Download}
                        onClick={() => handleDownloadForm(service)}
                        className="px-3"
                      >
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Heart size={48} className="mx-auto text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('services.need_help')}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to assist you with any questions about our services 
              or help you complete your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                icon={Phone}
                onClick={() => window.open('tel:+911234567890', '_self')}
              >
                {t('services.call_support')}: +91 12345 67890
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.location.href = '/contact'}
              >
                {t('services.contact_us')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;