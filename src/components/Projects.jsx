"use client"
import React, { useState } from 'react';
import Card from './Card';

const projects = [
  {
    name: "YouTube Clone",
    description: "In this project, I built a YouTube-like website. By building this project I learned about using API in frontend.",
    githubLink: "https://github.com/Abu-bakar-webdeveloper/videoapp",
    liveLink: "https://elaborate-granita-27628e.netlify.app",
    imageUrl: "/images/youtube.png",
    type: "react"
  },
  {
    name: "Music Course",
    description: "This is a music course website built to learn Next.js and using 3D components from third-party libraries.",
    githubLink: "https://github.com/Abu-bakar-webdeveloper/musiclibrary",
    liveLink: "https://musiccourse.netlify.app",
    imageUrl: "/images/music.png",
    type: "next"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h2 className='text-center text-3xl lg:text-5xl font-bold font-sans text-textcolor my-8'> My Projects </h2>
      <div className="mb-8">
        <div className='flex flex-row justify-center space-x-4'>
          <button 
            className={`border border-gray-700 py-2 px-4 rounded-lg font-bold transition ${filter === 'all' ? 'bg-gray-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`border border-gray-700 py-2 px-4 rounded-lg font-bold transition ${filter === 'react' ? 'bg-gray-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setFilter('react')}
          >
            React.js
          </button>
          <button 
            className={`border border-gray-700 py-2 px-4 rounded-lg font-bold transition ${filter === 'next' ? 'bg-gray-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setFilter('next')}
          >
            Next.js
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16'>
        {filteredProjects.map((project, index) => (
          <Card 
            key={index}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
