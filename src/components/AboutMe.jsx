"use client"
import Image from "next/image";
import { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className="flex flex-col md:flex-row justify-between p-10 md:p-20 space-y-10 md:space-y-0 items-center">
      <div className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] bg-secondary min-h-[300px] w-[300px] md:min-w-[400px] md:h-[400px] relative flex justify-center items-center overflow-hidden animate-scale-in-center">
        <div className="absolute inset-0 bg-gradient-to-r from-extra via-textcolor to-extra2 p-2">
          <div className=" bg-secondary p-1 flex justify-center items-center h-full w-full">
            <Image
              src="/images/file.png"
              width={400}
              height={400}
              className="absolute mt-[150px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="space-y-6 md:w-1/2 sm:pl-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-sans text-textcolor">About Me</h2>
        <p className="text-md lg:text-lg font-sans text-gray-600">
          Hi, I&apos;m AbuBakar Siddique, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong background in both front-end and back-end technologies, I strive to build applications that not only function seamlessly but also provide an exceptional user experience.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2 px-4 rounded-lg font-bold ${activeTab === 'skills' ? 'bg-textcolor text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`py-2 px-4 rounded-lg font-bold ${activeTab === 'education' ? 'bg-textcolor text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`py-2 px-4 rounded-lg font-bold ${activeTab === 'experience' ? 'bg-textcolor text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Experience
          </button>
        </div>
        <div className="mt-6">
          {activeTab === 'skills' && (
            <ul className="list-disc list-inside text-md lg:text-lg font-sans text-gray-600">
              <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Node.js, Express</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>MongoDB, SQL</li>
            </ul>
          )}
          {activeTab === 'education' && (
            <ul className="list-disc list-inside text-md lg:text-lg font-sans text-gray-600">
              <li>Bachelor&apos;s Degree in Computer Science from GCUF</li>
              <li>Completed various online courses in web development and programming</li>
            </ul>
          )}
          {activeTab === 'experience' && (
            <ul className="list-disc list-inside text-md lg:text-lg font-sans text-gray-600">
              <li>2 years as a Full Stack Developer at ABC Company</li>
              <li>Freelance web developer for multiple clients</li>
              <li>Internship at DEF Tech, where I worked on several web projects</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
