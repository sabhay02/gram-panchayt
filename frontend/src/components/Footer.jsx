import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">GP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">e-Gram Panchayat</h3>
                <p className="text-sm text-gray-400">Digital Village Portal</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-5">
              Empowering rural communities through <span className="text-white font-medium">digital governance</span> 
              and transparent service delivery. Building a connected and progressive village for all.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="hover:text-primary-400 transition-colors duration-200">
                  Schemes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary-400 transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <p>
                  Village Panchayat Office <br />
                  Main Road, Village Name <br />
                  District, State - 123456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <p>+91 12345 67890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <p>info@grampanchayat.gov.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 <span className="text-white font-medium">e-Gram Panchayat</span>. 
            All rights reserved. | Developed for <span className="text-primary-400">Digital India Initiative</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
