import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={`card p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;