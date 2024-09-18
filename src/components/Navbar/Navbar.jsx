import { Link } from 'react-router-dom';
import { FaGhost } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent py-4 px-8 mx-12 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <FaGhost className="text-white text-3xl mr-2" />
        <span className="text-white text-xl font-bold">Pahadi Baba</span>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-2 p-2 px-4 border border-[#5a5a9f] rounded-full border-gray-500">
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/" className="text-white font-bold px-4 py-2 border border-transparent hover:text-purple-500">Home</Link>
        </li>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/service" className="text-white font-bold px-4 py-2 border border-transparent hover:text-purple-500">Service</Link>
        </li>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/pages" className="text-white font-bold px-4 py-2 border border-transparent hover:text-purple-500">Pages</Link>
        </li>
        <li className="transform hover:scale-110 transition-transform duration-300">
          <Link to="/pricing" className="text-white font-bold px-4 py-2 border border-transparent hover:text-purple-500">Pricing</Link>
        </li>
      </ul>

      {/* Profile and Button */}
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">Get In</button>
      </div>
    </nav>
  );
};

export default Navbar;
