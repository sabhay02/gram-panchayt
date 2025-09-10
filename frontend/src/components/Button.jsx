import { motion } from 'framer-motion';
import { useState } from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false, 
  onClick, 
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async (e) => {
    if (disabled || loading) return;
    
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    
    if (onClick) {
      await onClick(e);
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 ease-in-out transform
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${isClicked ? 'scale-95' : 'scale-100'}
  `;

  const variants = {
    primary: 'btn-primary focus:ring-blue-500',
    secondary: 'btn-secondary focus:ring-gray-500',
    success: 'btn-success focus:ring-green-500',
    warning: 'btn-warning focus:ring-yellow-500',
    danger: 'btn-danger focus:ring-red-500',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {loading && (
        <div className="spinner mr-2" />
      )}
      
      {Icon && iconPosition === 'left' && !loading && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="mr-2" />
      )}
      
      {children}
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="ml-2" />
      )}
    </motion.button>
  );
};

export default Button;