// Card.tsx

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const Card = ({ name, description, githubLink, liveLink, imageUrl }) => {
  return (
    <div className="max-w-sm bg-secondary rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-black-400 mb-4">{description}</p>
        <div className="flex justify-items-start space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <FaExternalLinkAlt className="mr-2" /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
