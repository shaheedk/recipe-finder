import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={handleToggle}
        className="sr-only"
      />
      <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300">
       
        <div
          className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white border border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs transition-all duration-300 ${
            darkMode ? "translate-x-5" : ""
          }`}
        >
          {darkMode ? <Sun className="text-yellow-400 "/> : <Moon className="text-blue-900 "/>}
        </div>
      </div>
    </label>
  );
};

export default DarkModeSwitch;
