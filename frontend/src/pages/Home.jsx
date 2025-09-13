import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FileText, 
  Users, 
  Building, 
  Phone, 
  Download, 
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNotification } from '../hooks/useNotification';
import NotificationContainer from '../components/NotificationContainer';

const Home = () => {
  const { notifications, showSuccess, showError, showInfo, removeNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      icon: FileText,
      title: 'Birth Certificate',
      description: 'Apply for birth certificate online with quick processing and home delivery option.',
      color: 'blue',
      link: '/services'
    },
    {
      icon: Users,
      title: 'Ration Card',
      description: 'New ration card application and renewal services with digital verification.',
      color: 'green',
      link: '/services'
    },
    {
      icon: Building,
      title: 'Property Tax',
      description: 'Pay property tax online and get instant receipts with tax calculation tools.',
      color: 'orange',
      link: '/services'
    },
    {
      icon: Phone,
      title: 'Water Connection',
      description: 'Apply for new water connection or report issues with 24/7 support system.',
      color: 'blue',
      link: '/services'
    }
  ];

  const stats = [
    { label: 'Total Population', value: '12,450', icon: Users },
    { label: 'Services Available', value: '25+', icon: FileText },
    { label: 'Applications Processed', value: '3,200+', icon: CheckCircle },
    { label: 'Response Time', value: '< 24hrs', icon: Clock }
  ];

  const handleServiceClick = (service) => {
    showInfo(`Redirecting to ${service.title} service...`);
    setTimeout(() => {
      window.location.href = service.link;
    }, 1000);
  };

  const handleDownloadGuide = async () => {
    setIsLoading(true);
    try {
      // Simulate download
      await new Promise(resolve => setTimeout(resolve, 2000));
      showSuccess('Citizen Guide downloaded successfully!');
    } catch (error) {
      showError('Failed to download guide. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmergencyCall = () => {
    showInfo('Connecting to emergency services...');
    setTimeout(() => {
      window.open('tel:+911234567890', '_self');
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NotificationContainer 
        notifications={notifications} 
        onRemove={removeNotification} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            Welcome to <span className="text-yellow-300">e-Gram Panchayat</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Your digital gateway to efficient village governance. Access services, 
            track applications, and connect with your community - all in one place.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              icon={FileText}
              onClick={() => window.location.href = '/services'}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Explore Services
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={Download}
              loading={isLoading}
              onClick={handleDownloadGuide}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Download Guide
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="text-center hover:shadow-xl">
                    <Icon size={32} className="text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick access to the most requested services with streamlined processes 
              and digital convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                >
                  <Card 
                    className="text-center cursor-pointer group"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      service.color === 'green' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    } group-hover:scale-110 transition-transform`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center text-blue-600 font-medium text-sm group-hover:underline">
                      <span>Apply Now</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about the latest developments, announcements, and 
              initiatives in our village.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'New Digital Services Launched',
                date: '2024-01-15',
                excerpt: 'Five new online services are now available including property registration and trade license applications.',
                image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
              },
              {
                title: 'Village Development Project',
                date: '2024-01-10',
                excerpt: 'Construction of new community center and library facility has been completed and is now open for public use.',
                image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
              },
              {
                title: 'Health Camp Success',
                date: '2024-01-05',
                excerpt: 'Free health checkup camp served over 500 villagers with specialist doctors and free medicines.',
                image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
              }
            ].map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {news.excerpt}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
            <Phone size={48} className="mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">Emergency Services</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              For urgent matters and emergencies, contact our 24/7 helpline. 
              We're here to help you round the clock.
            </p>
            <Button
              variant="primary"
              size="lg"
              icon={Phone}
              onClick={handleEmergencyCall}
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              Call Emergency: +91 12345 67890
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.6 }}
          >
            <Star size={48} className="mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-extrabold mb-4">
              Join the Digital Revolution
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of our journey towards a fully digital and transparent 
              governance system. Your participation makes our village stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={Users}
                onClick={() => window.location.href = '/about'}
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Learn More About Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={ExternalLink}
                onClick={() => window.location.href = '/contact'}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;