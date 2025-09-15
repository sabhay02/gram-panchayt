import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Home, 
  Users, 
  Briefcase, 
  GraduationCap,
  Heart,
  Leaf,
  Download,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  IndianRupee,
  Calendar,
  FileText
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNotification } from '../hooks/useNotification';
import NotificationContainer from '../components/NotificationContainer';
import SpeechButton from '../components/SpeechButton';

const Schemes = () => {
  const { notifications, showSuccess, showError, showInfo, removeNotification } = useNotification();
  const [applicationStatus, setApplicationStatus] = useState({});

  const schemes = [
    {
      id: 1,
      icon: Home,
      title: 'PM Awas Yojana',
      description: 'Affordable housing scheme for economically weaker sections and low-income groups.',
      category: 'Housing',
      benefit: '₹2.5 Lakh Subsidy',
      eligibility: 'Annual income below ₹6 Lakh',
      deadline: '2024-12-31',
      documents: ['Income Certificate', 'Aadhaar Card', 'Bank Statement', 'Property Documents'],
      color: 'blue',
      status: 'active',
      beneficiaries: 1250
    },
    {
      id: 2,
      icon: Briefcase,
      title: 'MGNREGA',
      description: 'Guaranteed 100 days of employment in a financial year to rural households.',
      category: 'Employment',
      benefit: '₹200 per day',
      eligibility: 'Rural household with adult members',
      deadline: 'Ongoing',
      documents: ['Job Card', 'Aadhaar Card', 'Bank Account Details'],
      color: 'green',
      status: 'active',
      beneficiaries: 3200
    },
    {
      id: 3,
      icon: Users,
      title: 'PM Kisan Samman Nidhi',
      description: 'Direct income support to small and marginal farmers across the country.',
      category: 'Agriculture',
      benefit: '₹6,000 per year',
      eligibility: 'Small and marginal farmers',
      deadline: 'Ongoing',
      documents: ['Land Records', 'Aadhaar Card', 'Bank Account Details'],
      color: 'orange',
      status: 'active',
      beneficiaries: 2800
    },
    {
      id: 4,
      icon: GraduationCap,
      title: 'Scholarship Scheme',
      description: 'Financial assistance for meritorious students from economically backward families.',
      category: 'Education',
      benefit: '₹50,000 per year',
      eligibility: 'Students with 80%+ marks, family income < ₹2 Lakh',
      deadline: '2024-08-31',
      documents: ['Mark Sheets', 'Income Certificate', 'Caste Certificate', 'Bank Details'],
      color: 'purple',
      status: 'active',
      beneficiaries: 450
    },
    {
      id: 5,
      icon: Heart,
      title: 'Ayushman Bharat',
      description: 'Health insurance scheme providing coverage up to ₹5 lakh per family per year.',
      category: 'Healthcare',
      benefit: '₹5 Lakh Health Cover',
      eligibility: 'Families as per SECC database',
      deadline: 'Ongoing',
      documents: ['Aadhaar Card', 'Ration Card', 'Income Certificate'],
      color: 'red',
      status: 'active',
      beneficiaries: 1800
    },
    {
      id: 6,
      icon: Leaf,
      title: 'Solar Subsidy Scheme',
      description: 'Subsidy for installation of solar panels to promote renewable energy.',
      category: 'Environment',
      benefit: '40% Subsidy on Installation',
      eligibility: 'Residential and commercial properties',
      deadline: '2024-10-31',
      documents: ['Property Documents', 'Electricity Bill', 'Technical Feasibility Report'],
      color: 'yellow',
      status: 'active',
      beneficiaries: 320
    }
  ];

  const handleApplyScheme = async (scheme) => {
    setApplicationStatus(prev => ({ ...prev, [scheme.id]: 'loading' }));
    showInfo(`Processing application for ${scheme.title}...`);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      setApplicationStatus(prev => ({ ...prev, [scheme.id]: 'success' }));
      showSuccess(`Application for ${scheme.title} submitted successfully! Application ID: SCH${Date.now()}`);
    } catch (error) {
      setApplicationStatus(prev => ({ ...prev, [scheme.id]: 'error' }));
      showError(`Failed to submit application for ${scheme.title}. Please try again.`);
    }
  };

  const handleDownloadBrochure = async (scheme) => {
    showInfo(`Downloading brochure for ${scheme.title}...`);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showSuccess(`${scheme.title} brochure downloaded successfully!`);
    } catch (error) {
      showError('Failed to download brochure. Please try again.');
    }
  };

  const handleViewDetails = (scheme) => {
    showInfo(`Opening detailed information for ${scheme.title}...`);
    setTimeout(() => {
      window.open(`https://example.gov.in/schemes/${scheme.id}`, '_blank');
    }, 500);
  };

  const getStatusIcon = (schemeId) => {
    const status = applicationStatus[schemeId];
    switch (status) {
      case 'loading': return <Clock className="animate-spin" size={16} />;
      case 'success': return <CheckCircle className="text-green-600" size={16} />;
      case 'error': return <AlertCircle className="text-red-600" size={16} />;
      default: return null;
    }
  };

  const isDeadlineNear = (deadline) => {
    if (deadline === 'Ongoing') return false;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Government Schemes
          </motion.h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            Explore various government schemes and welfare programs designed to improve 
            the lives of citizens. Apply online and track your application status.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Active Schemes', value: '6', icon: FileText },
              { label: 'Total Beneficiaries', value: '10,820', icon: Users },
              { label: 'Amount Disbursed', value: '₹2.5 Cr', icon: IndianRupee },
              { label: 'Success Rate', value: '94%', icon: CheckCircle }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="text-center">
                    <Icon size={32} className="text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Available Schemes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our comprehensive list of government schemes and find 
              the ones that best suit your needs and eligibility criteria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme, index) => {
              const Icon = scheme.icon;
              const status = applicationStatus[scheme.id];
              const deadlineNear = isDeadlineNear(scheme.deadline);
              
              return (
                <motion.div
                  key={scheme.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Card className="h-full flex flex-col relative">
                    {deadlineNear && (
                      <div className="absolute top-4 right-4 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                        Deadline Soon
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        scheme.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        scheme.color === 'green' ? 'bg-green-100 text-green-600' :
                        scheme.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                        scheme.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        scheme.color === 'red' ? 'bg-red-100 text-red-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <SpeechButton 
                          scheme={scheme}
                          size="sm"
                          variant="hindi"
                        />
                        {getStatusIcon(scheme.id)}
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        {scheme.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {scheme.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {scheme.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Benefit:</span>
                        <span className="font-medium text-green-600">{scheme.benefit}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Beneficiaries:</span>
                        <span className="font-medium text-gray-800">{scheme.beneficiaries.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Deadline:</span>
                        <span className={`font-medium ${deadlineNear ? 'text-red-600' : 'text-gray-800'}`}>
                          {scheme.deadline === 'Ongoing' ? scheme.deadline : new Date(scheme.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Eligibility:</p>
                      <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                        {scheme.eligibility}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Required Documents:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {scheme.documents.slice(0, 3).map((doc, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {doc}
                          </li>
                        ))}
                        {scheme.documents.length > 3 && (
                          <li className="text-gray-500">+{scheme.documents.length - 3} more...</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        loading={status === 'loading'}
                        disabled={status === 'success'}
                        onClick={() => handleApplyScheme(scheme)}
                        className="flex-1"
                      >
                        {status === 'success' ? 'Applied' : 'Apply Now'}
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={Download}
                        onClick={() => handleDownloadBrochure(scheme)}
                        className="px-3"
                      >
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={ExternalLink}
                        onClick={() => handleViewDetails(scheme)}
                        className="px-3"
                      >
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600">
              Follow these simple steps to apply for any government scheme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Scheme',
                description: 'Select the scheme that matches your eligibility criteria'
              },
              {
                step: '2',
                title: 'Prepare Documents',
                description: 'Gather all required documents as per the scheme requirements'
              },
              {
                step: '3',
                title: 'Submit Application',
                description: 'Fill the online form and upload necessary documents'
              },
              {
                step: '4',
                title: 'Track Status',
                description: 'Monitor your application status and receive updates'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <Calendar size={48} className="mx-auto text-green-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Assistance?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated support team is available to help you understand scheme 
              eligibility, application process, and document requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                icon={Users}
                onClick={() => window.location.href = '/contact'}
              >
                Contact Support Team
              </Button>
              <Button
                variant="secondary"
                icon={Download}
                onClick={() => showSuccess('Scheme guidelines downloaded successfully!')}
              >
                Download Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Schemes;