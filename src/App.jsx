import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-6xl mx-auto"
  >
    {children}
  </motion.div>
);

const Home = () => (
  <PageWrapper>
    <section className="relative">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Luxury Villa in Riyadh" className="w-full h-96 object-cover rounded-2xl mb-6" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to AlTuriki Real Estate</h1>
        <p className="mt-4 text-xl drop-shadow-lg">Discover luxury villas, apartments, and commercial properties in Saudi Arabia</p>
      </div>
    </section>

    <section className="my-12">
      <h2 className="text-3xl font-bold mb-4">Your Trusted Partner in Saudi Real Estate</h2>
      <p className="text-gray-600 mb-6">
        AlTuriki Real Estate specializes in helping clients find premium properties across Riyadh, Jeddah, Dammam, and the Eastern Province.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <img src="https://images.unsplash.com/photo-1560518883-5565f1abdeef" alt="Residential" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg">Residential Properties</h3>
          <p className="text-sm text-gray-500">Villas & Apartments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad3ab" alt="Commercial" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg">Commercial Spaces</h3>
          <p className="text-sm text-gray-500">Offices & Retail</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <img src="https://images.unsplash.com/photo-1600566752355-35792bab2c43" alt="Investment" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg">Investment Advisory</h3>
          <p className="text-sm text-gray-500">Maximize Returns</p>
        </div>
      </div>
    </section>

    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1" alt="Villa" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="font-bold text-xl">Luxury Villa in Riyadh</h3>
            <p className="text-indigo-600 font-bold text-lg">SAR 2,500,000</p>
            <p className="text-gray-600 text-sm">4 Beds • 5 Baths • 450 m²</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6" alt="Apartment" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="font-bold text-xl">Modern Apartment in Jeddah</h3>
            <p className="text-indigo-600 font-bold text-lg">SAR 1,200,200,000</p>
            <p className="text-gray-600 text-sm">3 Beds • 2 Baths • 180 m²</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad3ab" alt="Office" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="font-bold text-xl">Prime Office in Dammam</h3>
            <p className="text-indigo-600 font-bold text-lg">SAR 3,800,000</p>
            <p className="text-gray-600 text-sm">500 m² • Grade A</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="/listings" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition">
          View All Properties →
        </Link>
      </div>
    </section>
  </PageWrapper>
);

const Listings = () => (
  <PageWrapper>
    <h1 className="text-5xl font-bold text-center mb-12">All Properties</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Repeat similar property cards here */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Family Villa – Al Khobar</h3>
          <p className="text-indigo-600 font-bold text-lg">SAR 1,950,000</p>
          <p className="text-gray-600 text-sm">5 Beds • Private Pool • Garden</p>
        </div>
      </div>
      {/* Add more as needed */}
    </div>
  </PageWrapper>
);

const Services = () => (
  <PageWrapper>
    <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {["Property Sales & Rentals", "Commercial Leasing", "Market Valuation", "Investment Advisory", "Property Management", "Legal Support"].map((service, i) => (
        <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold text-xl">{service}</h3>
        </div>
      ))}
    </div>
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <h1 className="text-5xl font-bold text-center mb-12">About AlTuriki</h1>
    <p className="text-center text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
      Established in 2010, AlTuriki Real Estate has become one of the most trusted names in luxury real estate across Saudi Arabia.
    </p>
    <div className="grid md:grid-cols-3 gap-12">
      <div className="text-center">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="font-bold text-xl">Ahmed AlTuriki</h3>
        <p className="text-gray-600">CEO & Founder</p>
      </div>
      <div className="text-center">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="font-bold text-xl">Sara Al-Khalidi</h3>
        <p className="text-gray-600">Head of Sales</p>
      </div>
      <div className="text-center">
        <img src="https://images.unsplash.com/photo-1556155099-870a15520355" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="font-bold text-xl">Mohammed Al-Saud</h3>
        <p className="text-gray-600">Senior Advisor</p>
      </div>
    </div>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper>
    <h1 className="text-5xl font-bold text-center mb-12">Get In Touch</h1>
    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
        <form>
          <input placeholder="Your Name" className="w-full p-4 mb-4 border rounded-lg rounded-lg" />
          <input placeholder="Email" type="email" className="w-full p-4 mb-4 border rounded-lg" />
          <input placeholder="Phone" className="w-full p-4 mb-4 border rounded-lg" />
          <textarea placeholder="Message" rows="6" className="w-full p-4 mb-6 border rounded-lg"></textarea>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-lg font-bold text-lg w-full">
            Send Message
          </button>
        </form>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-xl">Riyadh Office</h3>
          <p className="text-gray-600">King Fahd Road, Olaya<br/>+966 50 123 4567</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Email</h3>
          <p className="text-gray-600">info@alturiki.com</p>
        </div>
        <img src="https://images.unsplash.com/photo-1524661135-439d0e4f2a73" className="w-full h-80 object-cover rounded-2xl" />
      </div>
    </div>
  </PageWrapper>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white/90 backdrop-blur shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-indigo-600">ALTURIKI</Link>
            <div className="flex gap-10 font-medium text-gray-700">
              <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
              <Link to="/listings" className="hover:text-indigo-600 transition">Listings</Link>
              <Link to="/services" className="hover:text-indigo-600 transition">Services</Link>
              <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
              <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="text-center">
            <p className="text-2xl font-bold">AlTuriki Real Estate</p>
            <p className="text-gray-400 mt-3">© 2025 – Built by Khalil Majdoub</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
