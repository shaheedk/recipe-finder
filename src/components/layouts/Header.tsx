import  { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-900 shadow">
      
      {/* Navbar container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or brand name (if any) */}
        <div className="text-2xl font-semibold text-yellow-500">Recipe Finder</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-orange-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-orange-400 transition-colors duration-300">Recipes</a>
          <a href="#projects" className="hover:text-orange-400 transition-colors duration-300">Blogs</a>
          <a href="#skills" className="hover:text-orange-400 transition-colors duration-300">Prepare</a>
         
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
            <a href="#home" className="text-lg hover:text-orange-400">Home</a>
            <a href="#about" className="text-lg hover:text-orange-400">About</a>
            <a href="#projects" className="text-lg hover:text-orange-400">Projects</a>
            <a href="#skills" className="text-lg hover:text-orange-400">Skills</a>
            <a href="#contact" className="text-lg hover:text-orange-400">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
