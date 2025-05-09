import  { useState } from 'react';
import DarkModeToggle from '../buttons/DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-900 shadow dark:bg-neutral-900">
      
      {/* Navbar container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or brand name (if any) */}
        <div className="text-2xl font-semibold text-yellow-500">Recipe Finder</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-orange-400 transition-colors duration-300 dark:text-white">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors duration-300 dark:text-white">Recipes</a>
          <a href="#" className="hover:text-orange-400 transition-colors duration-300 dark:text-white">Blogs</a>
          <a href="#" className="hover:text-orange-400 transition-colors duration-300 dark:text-white">Prepare</a>
          <DarkModeToggle/>
         
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color='red'
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden  backdrop-blur-lg p-6 text-gray-800 py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-lg hover:text-orange-400 dark:text-white">Home</a>
            <a href="#about" className="text-lg hover:text-orange-400 dark:text-white">About</a>
            <a href="#projects" className="text-lg hover:text-orange-400 dark:text-white">Projects</a>
            <a href="#skills" className="text-lg hover:text-orange-400 dark:text-white">Skills</a>
            <a href="#contact" className="text-lg hover:text-orange-400 dark:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
