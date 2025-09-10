import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Users, 
  Home, 
  GraduationCap, 
  Heart, 
  Briefcase,
  Leaf,
  ArrowRight,
  Calendar,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import Card from '../components/Card';

const Schemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const schemes = [
    {
      id: 1,
      title: 'Pradhan Mantri Awas Yojana',
      description: 'Housing scheme for economically weaker sections to provide affordable housing with financial assistance.',
      category: 'housing',
      level: 'central',
      icon: Home,
      color: 'blue',
      benefits: ['₹2.5 Lakh subsidy', 'Low interest rate', 'Easy EMI options'],
      eligibility: ['Annual income < ₹6 Lakh', 'First-time home buyer', 'No existing house'],
      lastDate: '2024-12-31',
      status: 'active'
    },
    {
      id: 2,
      title: 'Mahatma Gandhi NREGA',
      description: 'Employment guarantee scheme providing 100 days of wage employment to rural households.',
      category: 'employment',
      level: 'central',
      icon: Briefcase,
      color: 'green',
      benefits: ['100 days guaranteed work', '₹250/day wage', 'Skill development'],
      eligibility: ['Rural household', 'Adult member', 'Job card holder'],
      lastDate: 'Ongoing',
      status: 'active'
    },
    {
      id: 3,
      title: 'PM Kisan Samman Nidhi',
      description: 'Direct income support to farmers with ₹6000 per year in three equal installments.',
      category: 'agriculture',
      level: 'central',
      icon: Leaf,
      color: 'secondary',
      benefits: ['₹6000 per year', 'Direct bank transfer', 'No middleman'],
      eligibility: ['Small & marginal farmers', 'Land ownership', 'Bank account'],
      lastDate: 'Ongoing',
      status: 'active'
    },
    {
      id: 4,
      title: 'Beti Bachao Beti Padhao',
      description: 'Scheme to address declining child sex ratio and promote education of girl children.',
      category: 'education',
      level: 'central',
      icon: GraduationCap,
      color: 'purple',
      benefits: ['Education support', 'Awareness programs', 'Financial incentives'],
      eligibility: ['Girl child', 'School enrollment', 'Regular attendance'],
      lastDate: '2024-06-30',
      status: 'active'
    },
    {
      id: 5,
      title: 'Ayushman Bharat',
      description: 'Health insurance scheme providing ₹5 lakh coverage per family per year.',
      category: 'health',
      level: 'central',
      icon: Heart,
      color: 'primary',
      benefits: ['₹5 Lakh coverage', 'Cashless treatment', 'Pre-existing conditions covered'],
      eligibility: ['SECC database', 'Below poverty line', 'Valid Aadhaar'],
      lastDate: 'Ongoing',
      status: 'active'
    },
    {
      id: 6,
      title: 'State Scholarship Scheme',
      description: 'Merit-based scholarship for students from economically backward families.',
      category: 'education',
      level: 'state',
      icon: GraduationCap,
      color: 'blue',
      benefits: ['₹50,000 per year', 'Book allowance', 'Hostel facility'],
      eligibility: ['Merit student', 'Family income < ₹2 Lakh', 'State domicile'],
      lastDate: '2024-03-31',
      status: 'active'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'housing', label: 'Housing' },
    { value: 'employment', label: 'Employment' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'education', label: 'Education' },
    { value: 'health', label: 'Health' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'central', label: 'Central' },
    { value: 'state', label: 'State' },
    { value: 'local', label: 'Local' }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || scheme.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Government Schemes</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Explore various government schemes and benefits available for citizens. 
              Find the right scheme for you and apply online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search schemes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field pl-10 pr-8 appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="input-field pr-8 appearance-none bg-white"
                >
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Available Schemes ({filteredSchemes.length})
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover government schemes that can benefit you and your family. 
              Each scheme is designed to support different aspects of life and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <motion.div
                  key={scheme.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                        scheme.color === 'primary' ? 'bg-primary-50 text-primary-600 border-primary-200' :
                        scheme.color === 'secondary' ? 'bg-secondary-50 text-secondary-600 border-secondary-200' :
                        scheme.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                        scheme.color === 'purple' ? 'bg-purple-50 text-purple-600 border-purple-200' :
                        'bg-green-50 text-green-600 border-green-200'
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          scheme.level === 'central' ? 'bg-blue-100 text-blue-800' :
                          scheme.level === 'state' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {scheme.level.charAt(0).toUpperCase() + scheme.level.slice(1)}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          <CheckCircle size={12} className="inline mr-1" />
                          Active
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{scheme.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{scheme.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <DollarSign size={16} className="mr-1 text-green-600" />
                          Key Benefits:
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {scheme.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Users size={16} className="mr-1 text-blue-600" />
                          Eligibility:
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {scheme.eligibility.map((criteria, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                              {criteria}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100">
                        <div className="flex items-center text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          <span>Last Date: {scheme.lastDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight size={16} />
                      </button>
                      <button className="btn-secondary">
                        Details
                      </button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredSchemes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No schemes found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand scheme eligibility, application process, 
              and guide you through the entire journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
                Get Help
              </button>
              <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Schemes;