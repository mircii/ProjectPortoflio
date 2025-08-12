import React from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'projects' | 'about' | 'contact') => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, darkMode, toggleDarkMode }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <img
          src="..\assets\2067-0-2.jpg"
          alt="Your Name"
          className="rounded-full w-10 h-10"
        />
        <h1 className="text-xl font-bold">Mircea Micicoi</h1>
      </div>

      <nav className="flex items-center space-x-6">
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
          className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          aria-label="Toggle light/dark mode"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Header;