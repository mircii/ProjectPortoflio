import React, { useState } from 'react';
import Header from './components/Header.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';

type Page = 'projects' | 'about' | 'contact';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('projects');
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header
        currentPage={page}
        onNavigate={setPage}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <main className="p-4 max-w-5xl mx-auto">
        {page === 'about' && <About />}
        {page === 'projects' && <Projects />}
      </main>
    </div>
  );
};

export default App;
