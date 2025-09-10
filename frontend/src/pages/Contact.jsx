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
  CheckCircle
} from 'lucide-react';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Village Panchayat Office',
        'Main Road, Village Name',
        'District, State - 123456'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Office: +91 12345 67890',
        'Sarpanch: +91 98765 43210',
        'Emergency: +91 11111 22222'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@grampanchayat.gov.in',
        'sarpanch@grampanchayat.gov.in',
        'support@grampanchayat.gov.in'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const departments = [
    {
      name: 'General Administration',
      head: 'Shri Rajesh Kumar',
      phone: '+91 12345 67890',
      email: 'admin@grampanchayat.gov.in'
    },
    {
      name: 'Public Works Department',
      head: 'Shri Mohan Singh',
      phone: '+91 12345 67891',
      email: 'pwd@grampanchayat.gov.in'
    },
    {
      name: 'Health & Sanitation',
      head: 'Dr. Priya Sharma',
      phone: '+91 12345 67892',
      email: 'health@grampanchayat.gov.in'
    },
    {
      name: 'Education & Social Welfare',
      head: 'Smt. Sunita Devi',
      phone: '+91 12345 67893',
      email: 'education@grampanchayat.gov.in'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as possible.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience. Choose the method that works best for you.
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
                  <Card className="text-center h-full hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Card>
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Full Name *"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Phone Number"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Email Address *"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Subject *"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                    placeholder="Your Message *"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:from-teal-700 hover:to-teal-800 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="h-full">
              <div className="flex items-center mb-6">
                <MapPin size={24} className="text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Find Us</h3>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 mb-6">
                <iframe
                  title="Gram Panchayat Location"
                  src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-64 border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Directions</h4>
                  <p>
                    The Panchayat office is located on the main road, easily accessible by public transport.
                    Look for the government building with the Indian flag.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Landmarks</h4>
                  <ul className="space-y-1">
                    <li>• Near Primary Health Center</li>
                    <li>• Opposite Village School</li>
                    <li>• Next to Post Office</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Department Contacts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For specific queries, you can directly contact the relevant department head.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User size={24} className="text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{dept.name}</h3>
                      <p className="text-gray-600 mb-3">Head: {dept.head}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Phone size={14} className="mr-2" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail size={14} className="mr-2" />
                          <span>{dept.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              For urgent matters and emergencies, please use the following contact numbers. Available 24/7 for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <Phone size={22} />
                <span>Emergency: +91 11111 22222</span>
              </div>
              <div className="hidden sm:block text-red-300">|</div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <Mail size={22} />
                <span>emergency@grampanchayat.gov.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
