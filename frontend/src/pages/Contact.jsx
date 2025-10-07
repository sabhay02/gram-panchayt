import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  AlertCircle,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNotification } from '../hooks/useNotification';
import NotificationContainer from '../components/NotificationContainer';
import { contactAPI } from '../services/api';

const Contact = () => {
  const { notifications, showSuccess, showError, showInfo, removeNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const departments = [
    { value: '', label: 'Select Department' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'certificates', label: 'Certificates' },
    { value: 'welfare', label: 'Welfare Schemes' },
    { value: 'tax', label: 'Tax Services' },
    { value: 'utilities', label: 'Utilities' },
    { value: 'complaints', label: 'Complaints' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Village Panchayat Office',
        'Main Road, Village Name',
        'District, State - 123456'
      ],
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Office: +91 12345 67890',
        'Emergency: +91 98765 43210',
        'Toll Free: 1800-123-4567'
      ],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@grampanchayat.gov.in',
        'support@grampanchayat.gov.in',
        'complaints@grampanchayat.gov.in'
      ],
      color: 'orange'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      color: 'purple'
    }
  ];

  const quickContacts = [
    {
      department: 'Sarpanch Office',
      name: 'Shri Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'sarpanch@grampanchayat.gov.in'
    },
    {
      department: 'Revenue Department',
      name: 'Smt. Priya Sharma',
      phone: '+91 98765 43211',
      email: 'revenue@grampanchayat.gov.in'
    },
    {
      department: 'Welfare Department',
      name: 'Shri Mohan Singh',
      phone: '+91 98765 43212',
      email: 'welfare@grampanchayat.gov.in'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showError('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    showInfo('Submitting your message...');

    try {
      await contactAPI.create({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      showSuccess('Message sent successfully! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: ''
      });
    } catch (error) {
      showError(error.message || 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickCall = (phone) => {
    showInfo('Connecting call...');
    setTimeout(() => {
      window.open(`tel:${phone}`, '_self');
    }, 500);
  };

  const handleQuickEmail = (email) => {
    showInfo('Opening email client...');
    setTimeout(() => {
      window.open(`mailto:${email}`, '_self');
    }, 500);
  };

  const handleEmergencyCall = () => {
    showInfo('Connecting to emergency services...');
    setTimeout(() => {
      window.open('tel:+919876543210', '_self');
    }, 500);
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            We're here to help! Reach out to us for any queries, suggestions, or assistance. 
            Your feedback helps us serve you better.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      info.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      info.color === 'green' ? 'bg-green-100 text-green-600' :
                      info.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`input-field pl-10 ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`input-field pl-10 ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="Enter your email"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`input-field pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department *
                      </label>
                      <div className="relative">
                        <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className={`input-field pl-10 ${errors.department ? 'border-red-500' : ''}`}
                        >
                          {departments.map(dept => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.department && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.department}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="Enter message subject"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`input-field pl-10 resize-none ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Enter your message..."
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    icon={Send}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Quick Contacts */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Quick Contacts
                </h3>
                <div className="space-y-4">
                  {quickContacts.map((contact, index) => (
                    <Card key={contact.department} className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {contact.department}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">{contact.name}</p>
                      <div className="flex gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          icon={Phone}
                          onClick={() => handleQuickCall(contact.phone)}
                        >
                          Call
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          icon={Mail}
                          onClick={() => handleQuickEmail(contact.email)}
                        >
                          Email
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <div className="text-center">
                  <AlertCircle size={32} className="text-red-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-red-800 mb-2">
                    Emergency Contact
                  </h4>
                  <p className="text-red-600 text-sm mb-4">
                    For urgent matters and emergencies
                  </p>
                  <Button
                    variant="danger"
                    icon={Phone}
                    onClick={handleEmergencyCall}
                  >
                    Emergency: +91 98765 43210
                  </Button>
                </div>
              </Card>

              {/* Office Location */}
              <Card>
                <h4 className="font-semibold text-gray-800 mb-4">
                  Visit Our Office
                </h4>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <MapPin size={48} className="text-gray-400" />
                </div>
                <Button
                  variant="secondary"
                  fullWidth
                  icon={ExternalLink}
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  View on Google Maps
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'What are the office hours?',
                answer: 'Our office is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays.'
              },
              {
                question: 'How can I track my application status?',
                answer: 'You can track your application status online using your application reference number, or contact our support team for assistance.'
              },
              {
                question: 'What documents do I need for certificate applications?',
                answer: 'Required documents vary by service. Generally, you need ID proof, address proof, and service-specific documents. Check individual service pages for detailed requirements.'
              },
              {
                question: 'How long does it take to process applications?',
                answer: 'Processing times vary by service type. Most certificates take 7-10 days, while complex applications may take 15-30 days. You will receive updates via SMS and email.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 text-sm pl-6">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;