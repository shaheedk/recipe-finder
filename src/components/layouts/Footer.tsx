

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-neutral-800 py-6 mt-16 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left">
        <p className="text-gray-700 dark:text-white mb-2 md:mb-0">
          Made with ❤️ by <span className="font-semibold text-yellow-400">Shaheed</span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/shaheedk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-100  hover:text-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition dark:text-gray-100 "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
