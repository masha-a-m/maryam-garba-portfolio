import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaShareAlt } from 'react-icons/fa';
import Project1Img from '../assets/portfolio.png';
import Project2Img from '../assets/sign-up-form.png';
import Project3Img from '../assets/twitter-clone.png';
import Project4Img from '../assets/tell-a-joke-api.png';


const PortfolioHomepage = () => {
  return (
    <section>
        {/* Portfolio Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:mt-40">
        
      {/* Section Title */}
      <div className="md:ml-60">
      <h2 className="font-bold text-blue-500 mb-2 text-lg md:mt-0 mt-20 md:ml-0 ml-10">PORTFOLIO SAMPLES</h2>
      <p className="font-bold text-lg mb-12 md:ml-0 ml-10">Each project is a unique piece of work 🎈</p>
      </div>
      
      {/* Project 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-16 space-x-8">
        
        {/* Project Image - Left */}
        <div className="md:w-2/6">
          <img 
            src={Project1Img} 
            alt="Portfolio" 
            className="md:w-full h-auto md:ml-60 rounded-lg shadow-md object-cover" 
          />
        </div>
        
        {/* Project Details - Right */}
        <div className="md:w-3/5 mt-8 lg:mt-0 lg:pl-12 md:text-center text-center md:mr-30">
          <h3 className="font-semibold mb-2 ">Portfolio</h3>
          <p className="mb-4">
            A simple portfolio website that shows<br/> different projects that have been worked <br/>on, including an about me section and a<br/> contact section plus a footer.
          </p>
          <p className=" font-bold mb-4 text-center ">
            Tailwind
          </p>
          <div className="flex justify-center  space-x-6">
            <a 
              href="https://github.com/masha-a-m/assignment-aca" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGithub />
              <span>Code</span>
            </a>
            <a 
              href="https://assignment-aca.vercel.app/" 
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
            alt="Sign-up-page" 
            className="w-full h-auto rounded-lg shadow-md object-cover" 
          />
        </div>
        
        {/* Project Details - Right */}
        <div className="md:w-3/5 mt-8 lg:mt-0 lg:pl-12 md:text-center text-center md:ml-48">
          <h3 className="font-semibold mb-2">Sign Up Page</h3>
          <p className="mb-4">
            A simple sign up page <br/>that allows users to input their name,<br/> email and phone number.
          </p>
          <p className=" font-bold mb-4 text-center ">
            Tailwind
          </p>
          <div className="flex justify-center  space-x-6">
            <a 
              href="https://github.com/masha-a-m/aca-sign-up-form" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGithub />
              <span>Code</span>
            </a>
            <a 
              href="https://aca-sign-up-form.vercel.app/" 
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

        {/* Project 3 */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-16 space-x-8">
        
        {/* Project Image - Left */}
        <div className="md:w-2/6">
          <img 
            src={Project3Img} 
            alt="Twitter" 
            className="w-full h-auto md:ml-60 rounded-lg shadow-md object-cover" 
          />
        </div>
        
        {/* Project Details - Right */}
        <div className="md:w-3/5 mt-8 lg:mt-0 lg:pl-12 md:text-center text-center md:mr-30">
          <h3 className="font-semibold mb-2">Twitter Clone</h3>
          <p className="mb-4">
            Clone of Twitter homepage showing the<br/> sidebar elements, the main tweet<br/> section, and a list of random <br/>tweets.
          </p>
          <p className=" font-bold mb-4 text-center ">
            Tailwind
          </p>
          <div className="flex justify-center  space-x-6">
            <a 
              href="https://github.com/masha-a-m/ACA-Twitter-Clone" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGithub />
              <span>Code</span>
            </a>
            <a 
              href="https://masha-a-m.github.io/ACA-Twitter-Clone" 
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

      
      {/* Project 4 */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center md:mt-36 mb-16 md:mr-50">
        
        {/* Project Image - Left */}
        <div className="md:w-4/6 md:mr-40">
          <img 
            src={Project4Img} 
            alt="joke-api" 
            className="w-full h-auto rounded-lg shadow-md object-cover" 
          />
        </div>
        
        {/* Project Details - Right */}
        <div className="md:w-3/5 mt-8 lg:mt-0 lg:pl-12 md:text-center text-center md:ml-48">
          <h3 className="font-semibold mb-2">Joke API</h3>
          <p className="mb-4">
            Joke API in which users can click<br/> on the tell a joke button, <br/>to create random jokes and also <br/>click on the tagline button to show the <br/>tagline of that joke.
          </p>
          <p className=" font-bold mb-4 text-center ">
            JavaScript
          </p>
          <div className="flex justify-center  space-x-6">
            <a 
              href="https://github.com/masha-a-m/api-assignment" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaGithub />
              <span>Code</span>
            </a>
            <a 
              href="https://masha-a-m.github.io/api-assignment" 
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
        <Link to="/projects">VIEW ALL PROJECTS</Link>
        </h2>
      </div>
        </div>

    </section>
  );
};

export default PortfolioHomepage;
