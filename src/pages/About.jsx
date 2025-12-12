import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="py-32 text-center"
    >
      <h1 className="text-6xl font-bold mb-6">About Us</h1>
      <p className="text-xl text-gray-600">Trusted since 2010</p>
    </motion.div>
  );
}
