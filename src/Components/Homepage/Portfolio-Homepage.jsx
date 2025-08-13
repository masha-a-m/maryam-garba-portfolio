import React from 'react';
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import Project1Img from '../assets/algorithmia.png';
import Project2Img from '../assets/7.png';



const PortfolioHomepage = () => {
  return (
    <section>
        {/* Portfolio Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:mt-40">
        
      {/* Section Title */}
      <div className="md:ml-60">
      <h2 className="font-bold text-[#b18165] mb-2 text-lg md:mt-0 mt-20 md:ml-0 ml-10">PORTFOLIO SAMPLES</h2>
      <p className="font-bold text-lg mb-12 md:ml-0 ml-10">Each project is a unique piece of work 🎈</p>
      </div>
      
      {/* Project 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-16 space-x-8">
        
        {/* Project Image - Left */}
        <div className="md:w-2/6">
          <img 
            src={Project1Img} 
            alt="algorithmia" 
            className="md:w-full h-auto md:ml-60 rounded-lg shadow-md object-cover" 
          />
        </div>
        
        {/* Project Details - Right */}
        <div className="md:w-3/5 mt-8 lg:mt-0 lg:pl-12 md:text-center text-center md:mr-30">
          <h3 className="font-semibold mb-2 ">Algorithmia</h3>
          <p className="mb-4">
            Algorithmia website illuminates the path<br/> for ALX Software Engineering students, and<br/> the wider tech community, fostering<br/> a culture of continuous learning, <br/> problem-solving, and positive change.
          </p>
          <p className=" font-bold mb-4 text-center ">
            HTML, CSS, JavaScript
          </p>
          <div className="flex justify-center  space-x-6">
            {/* <a 
              href="https://github.com/masha-a-m/assignment-aca" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGithub />
              <span>Code</span>
            </a> */}
            <a 
              href="https://alx-se-algorithmia.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors duration-300"
            >
              <FaShareAlt />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center md:mt-36 mb-32 md:mr-50 ">
        
        {/* Project Image - Left */}
        <div className="md:w-4/6 md:mr-40">
          <img 
            src={Project2Img} 
            alt="pure glow" 
            className="w-full h-auto rounded-lg shadow-md object-cover" 
          />
        </div>
        
        {/* Project Details - Right */}
        <div className="md:w-3/5 mt-8 lg:mt-0 lg:pl-12 md:text-center text-center md:ml-48">
          <h3 className="font-semibold mb-2">Pure Glow</h3>
          <p className="mb-4">
            Clean beauty marketplace with <br/> ingredient transparency, personalized<br/> routines, and video reviews.
          </p>
          <p className=" font-bold mb-4 text-center ">
            React, Tailwind
          </p>
          <div className="flex justify-center  space-x-6">
            {/* <a 
              href="https://github.com/masha-a-m/aca-sign-up-form" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGithub />
              <span>Code</span>
            </a> */}
            <a 
              href="http://pureglow.infy.uk/wp/?i=2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors duration-300"
            >
              <FaShareAlt />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center">
        
        <h2 className="font-bold text-blue-700 cursor-pointer text-center">
        <Link to="/projects" className="text-[#b18165]">VIEW ALL PROJECTS</Link>
        </h2>
      </div>
        </div>

    </section>
  );
};

export default PortfolioHomepage;
