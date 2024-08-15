"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Abu Bakar Siddique</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Abu-bakar-webdeveloper" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abubakar-awan-4b6502227/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="abubakaraw8@gmail.com" className="text-gray-400 hover:text-white transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Abu Bakar Siddique. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
