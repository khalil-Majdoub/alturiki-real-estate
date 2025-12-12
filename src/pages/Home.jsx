import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen">
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center"
           style={{backgroundImage: 'ur[](https://images.unsplash.com/photo-1600585154340-be6161a56a0c)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">ALTURIKI</h1>
          <p className="text-2xl md:text-4xl mb-10">Luxury Real Estate in Saudi Arabia</p>
          <Link to="/listings" className="bg-indigo-600 hover:bg-indigo-700 px-12 py-6 rounded-full text-2xl font-bold transition">
            View Properties
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
