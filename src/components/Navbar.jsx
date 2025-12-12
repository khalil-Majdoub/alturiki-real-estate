import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-600">AlTuriki</Link>
        <div className="hidden md:flex space-x-10 font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/listings" className="hover:text-indigo-600 transition">Listings</Link>
          <Link to="/services" className="hover:text-indigo-600 transition">Services</Link>
          <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
