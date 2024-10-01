import React from 'react';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
// import { 
//   SiHtml5, 
//   SiCss3, 
//   SiJavascript, 
//   SiFigma, 
//   SiReact, 
//   SiMysql, 
//   SiTailwindcss, 
//   SiBootstrap 
// } from 'react-icons/si';

import profileImage from '../assets/profile img.webp';




const Hero = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center md:mx-auto lg:space-y-8 lg:flex-row lg:space-x-12 ">
        
        {/* Left Side */}
        <div className="">
          <h1 className="text-4xl md:text-left text-center md:text-5xl font-bold text-gray-800 mb-3">
            Front-End React <br/> Developer 👋🏽
          </h1>
          <p className="md:text-lg text-center md:text-left text-gray-600 mb-4 sm:text-sm">
            Hi, I am Maryam Garba, a passionate Front-end React <br/> Developer based in Kaduna, Nigeria 🎈
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-6">
            <a 
              href="https://www.linkedin.com/in/masha-a-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-3xl transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/masha-a-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-3xl transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          
        </div>
        
        
        {/* Right Side */}
        <div className="">
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Maryam Garba" 
              className="w-20 h-20 md:w-60 md:h-60 object-cover rounded-full  mt-10 md:mt-0 blob-animation shadow-lg"
            />
          </div>
        </div>

      </div>

         
    </section>
  );
};

export default Hero;
