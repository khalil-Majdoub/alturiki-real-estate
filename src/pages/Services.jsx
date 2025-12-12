import { motion } from 'framer-motion';

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="py-32 text-center"
    >
      <h1 className="text-6xl font-bold mb-6">Services</h1>
      <p className="text-xl text-gray-600">Sales • Rental • Investment</p>
    </motion.div>
  );
}
