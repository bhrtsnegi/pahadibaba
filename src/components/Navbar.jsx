import { Link } from 'react-router-dom';
import { FaGhost, FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { useState } from 'react'; // Import useState for toggling mobile menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent py-4 px-8 mx-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <FaGhost className="text-white text-4xl mr-2" />
        <span className="text-white text-4xl font-bold">Mester</span>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="block md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Nav Links */}
      <ul className={`md:flex md:space-x-2 mt-4 p-4 px-4 border rounded-full border-gray-500 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/" className="text-white font-bold text-xl px-4 py-2 border border-transparent hover:text-purple-500">Home</Link>
        </li>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/service" className="text-white font-bold text-xl px-4 py-2 border border-transparent hover:text-purple-500">Service</Link>
        </li>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/pages" className="text-white font-bold text-xl px-4 py-2 border border-transparent hover:text-purple-500">Pages</Link>
        </li>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/pricing" className="text-white font-bold text-xl px-4 py-2 border border-transparent hover:text-purple-500">Pricing</Link>
        </li>
      </ul>

      {/* Profile and Button */}
      <div className="hidden md:flex items-center space-x-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <Button/>
      </div>
    </nav>
  );
};

export default Navbar;
