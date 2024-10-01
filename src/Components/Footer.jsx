import React from 'react';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';




const Footer = () => {
  return (
    <section className="bg-gray-50">
        <footer class="bg-gray-600 text-white md:py-20 py-10 text-center md:text-left">
          <div class="container mx-auto flex justify-around items-center">
           <div class="text-left">
      <p class=" text-sm md:text-lg font-bold ml-10 md:ml-0">&copy; 2024. All rights reserved.</p>
           </div>

            <div class="flex space-x-6 invisible md:visible ">
      <a href="https://www.linkedin.com/in/masha-a-m" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white text-3xl">
        <FaLinkedin />
      </a>
    
      <a href="https://github.com/masha-a-m" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-white text-3xl">
        <FaGithub />
      </a>

            </div>
            </div>
        </footer>

    </section>
  );
};

export default Footer;
