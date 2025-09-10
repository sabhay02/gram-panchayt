import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-600 border-primary-200',
    secondary: 'bg-secondary-50 text-secondary-600 border-secondary-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 border text-lg font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${colorClasses[color]}`}
      >
        <Icon size={26} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      {/* Learn More Button */}
      {link && (
        <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-all group-hover:underline underline-offset-4">
          <span>Learn More</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      )}
    </motion.div>
  );
};

export default ServiceCard;
