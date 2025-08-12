import React, { useState } from 'react';
import img from '../assets/2067-0-2.jpg';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'projects' | 'about' | 'contact') => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  darkMode,
  toggleDarkMode,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => onNavigate('projects')}
      >
        <img
          src={img}
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <h1 className="text-xl font-bold dark:hover:text-blue-400 transition-colors">
          Mircea Micicoi&apos;s Portfolio
        </h1>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        {(['projects', 'about', 'contact'] as const).map((p) => (
          <button
            key={p}
            onClick={() => onNavigate(p)}
            className={`text-sm font-semibold capitalize ${
              currentPage === p
                ? 'text-blue-600 dark:text-blue-400'
                : 'hover:text-blue-500 dark:hover:text-blue-400'
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>

      <div className="md:hidden flex items-center space-x-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-[64px] right-0 w-full bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {(['projects', 'about', 'contact'] as const).map((p) => (
              <button
                key={p}
                onClick={() => {
                  onNavigate(p);
                  setMenuOpen(false);
                }}
                className={`text-sm font-semibold capitalize ${
                  currentPage === p
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
