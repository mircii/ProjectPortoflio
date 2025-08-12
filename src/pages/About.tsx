import React from 'react';
import img from '../assets/2067-0-2.jpg';

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 text-center">
        <img
          src={img}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
        />

        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
          Web Developer & UI Enthusiast
        </p>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! I'm a passionate web developer with a love for creating beautiful
          and functional user interfaces. I enjoy working with
          <span className="font-semibold text-blue-600 dark:text-blue-400"> React</span> and
          <span className="font-semibold text-blue-600 dark:text-blue-400"> Tailwind CSS</span> to
          build responsive and accessible web applications.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Git'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
