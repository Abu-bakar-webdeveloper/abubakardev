"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row justify-between p-10 md:p-20 space-y-10 md:space-y-0 items-center">
      <div className="space-y-6 animate-fade-in-up md:w-1/2">
        <h3 className="text-2xl lg:text-4xl font-sans text-gray-600">
          Hello, My Name is
        </h3>
        <h1 className="text-4xl lg:text-6xl font-bold font-sans text-textcolor">
          AbuBakar Siddique
        </h1>
        <h3 className="text-2xl lg:text-4xl font-sans text-gray-600">
          I am a{" "}
          <span className="font-bold text-transparent bg-gradient-to-r from-extra via-textcolor to-extra2 bg-clip-text">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web-developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Backend developer",
                1000,
                "Frontend developer",
                1000,
                "Full Stack developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block", fontSize: "2rem" }}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p className="text-md lg:text-lg font-sans text-gray-600">
          I am a full-stack web developer with a strong background in building
          dynamic and responsive web applications.
        </p>
        <div className="flex space-x-4 ml-4">
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
        <div className="mt-6">
          <Link
            href="https://drive.google.com/file/d/1ktKZYi8NnXK5jJEsCJsZBIahoZ_p4qIt/view"
            target="_blank"
            className="inline-block bg-gradient-to-r from-extra via-textcolor to-extra2 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download Resume
          </Link>
        </div>
      </div>
      <div className="bg-secondary rounded-full min-h-[300px] w-[300px] md:min-w-[400px] md:h-[400px] relative flex justify-center items-center overflow-hidden animate-scale-in-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-extra via-textcolor to-extra2 p-2">
          <div className="rounded-full bg-secondary p-1 flex justify-center items-center h-full w-full">
            <Image
              src="/images/mypic2.png"
              width={400}
              height={400}
              className="absolute mb-[150px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
