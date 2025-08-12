import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  github?: string;
  live?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, live }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg dark:border-gray-700 transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>

      <div className="flex flex-wrap gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            GitHub Repo →
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
