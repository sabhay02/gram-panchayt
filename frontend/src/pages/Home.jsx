import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Gift, 
  Phone, 
  Users, 
  Award, 
  TrendingUp,
  Bell,
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const quickServices = [
    {
      icon: FileText,
      title: 'Certificates',
      description: 'Apply for birth, death, marriage certificates',
      link: '/services',
      color: 'blue'
    },
    {
      icon: Gift,
      title: 'Government Schemes',
      description: 'Explore and apply for various government schemes',
      link: '/schemes',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Grievances',
      description: 'Register and track your complaints',
      link: '/contact',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Community Services',
      description: 'Access community development programs',
      link: '/services',
      color: 'purple'
    }
  ];

  const stats = [
    { icon: Users, label: 'Total Population', value: '12,450', color: 'bg-blue-100 text-blue-600' },
    { icon: Award, label: 'Services Delivered', value: '2,340', color: 'bg-green-100 text-green-600' },
    { icon: TrendingUp, label: 'Active Schemes', value: '45', color: 'bg-purple-100 text-purple-600' },
    { icon: FileText, label: 'Applications Processed', value: '1,890', color: 'bg-orange-100 text-orange-600' }
  ];

  const news = [
    {
      title: 'New Water Supply Project Launched',
      date: '2024-01-15',
      description: 'A new water supply project has been initiated to provide clean drinking water to all households.'
    },
    {
      title: 'Digital Literacy Program',
      date: '2024-01-10',
      description: 'Free digital literacy classes for senior citizens starting from next week.'
    },
    {
      title: 'Road Development Update',
      date: '2024-01-05',
      description: 'Construction of new concrete roads in Ward 3 and Ward 5 completed successfully.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                Welcome to<br />
                <span className="text-primary-200">Digital Village</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed">
                Empowering our community through digital governance, transparent services, 
                and citizen-centric solutions for a progressive village.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Explore Services
                </Link>
                <Link to="/schemes" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  View Schemes
                </Link>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-primary-600 font-bold text-2xl">GP</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Gram Panchayat</h3>
                    <p className="text-primary-200">Village Name, District</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">12K+</div>
                    <div className="text-primary-200 text-sm">Citizens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">45</div>
                    <div className="text-primary-200 text-sm">Services</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quick Access Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access essential government services and information with just a few clicks. 
              Our digital platform makes it easy to connect with your local administration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <ServiceCard {...service} className="hover:shadow-xl hover:-translate-y-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="text-center rounded-xl shadow-md hover:shadow-lg transition">
                    <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${stat.color}`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Latest News & Updates
              </h2>
              <p className="text-gray-600">
                Stay informed about the latest developments and announcements from your Gram Panchayat.
              </p>
            </div>
            <Bell className="text-primary-600 animate-pulse" size={32} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-center space-x-2 text-primary-600 mb-3">
                    <Calendar size={16} />
                    <span className="text-sm">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                    <span className="underline">Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <MapPin size={48} className="mx-auto mb-6 text-primary-200 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building a Digital Future Together
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join us in our mission to create a transparent, efficient, and citizen-friendly 
              governance system that serves everyone in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
