import React from 'react';
import ProjectCard from '../components/CardProject.tsx';

const projects = [
  {
    title: 'Car Expense Tracker',
    description: 'A web application to track car expenses, including fuel, maintenance, and insurance costs.',
    link: 'https://github.com/mircii/my-car-wallet',
  },
  {
    title: 'AI Chatbot for the CCOC Website',
    description: 'An AI-powered chatbot integrated into the CCOC website to assist users with common queries and provide information.',
    link: 'https://github.com/mircii/milo-frontend-testing',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default Projects;