import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 dark:text-blue-400 hover:text-blue-900"
        >
          View Project {'→'}
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
