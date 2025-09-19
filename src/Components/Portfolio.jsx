import React from 'react';
import { FaGithub, FaShareAlt } from 'react-icons/fa';
import Project1Img from '../Components/assets/1.png';
import Project2Img from '../Components/assets/2.png';
import Project3Img from '../Components/assets/3.png';
import Project4Img from '../Components/assets/4.png';
import Project5Img from '../Components/assets/portfolio-site.png';
import Project6Img from '../Components/assets/5.png';
import Project7Img from '../Components/assets/algorithmia.png';
import Project8Img from '../Components/assets/nextgentech.png';
import Project9Img from '../Components/assets/6.png';
import Project10Img from '../Components/assets/7.png';

const Portfolio = () => {
  return (
      <div className="container mx-auto text-center py-40">

        
        {/* Section Title */}
        <h2 className="text-4xl text-[#b18165] font-bold mb-20">PORTFOLIO</h2>
        
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto md:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Project1Img} 
              alt="real estate website" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">Real Estate Website</h3>
            <p className="text-md mb-4 text-center">
              Modern real estate UI with clean <br/>property cards, image galleries, and <br/>intuitive filtering for optimal user experience.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              React
            </p>
            <div className="flex justify-center  space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/simple-blog-app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a> */}
              <a 
                href="http://realhomes.infinityfree.me/property/home-in-merrick-way/" 
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full ">
            <img 
              src={Project2Img} 
              alt="apex digital" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">Apex Digitals</h3>
            <p className="text-md mb-4 text-center ">
              A sleek digital agency website<br/> showcasing services, client success stories, <br/> and seamless contact integration to attract <br/> new business.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              HTML, CSS, JS
            </p>
            <div className="flex justify-center space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/VendorHub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a> */}
              <a 
                href="http://apexdigital.infinityfree.me/?i=1" 
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
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Project3Img} 
              alt="ecommerce site" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">CommerceCore</h3>
            <p className="text-md mb-4 text-center">
               Ecommerce platform with product filters,<br/> wishlists, promo codes, <br/> and real-time inventory updates.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              React, Tailwind
            </p>
            <div className="flex justify-center space-x-6">
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
                // href="https://commercecore-pymnc59.public.builtwithrocket.new/homepage" 
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
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center mx-auto lg:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2 md:mr-60">
            <img 
              src={Project4Img} 
              alt="social connect" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-20" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">SocialConnect</h3>
            <p className="text-md mb-4 text-center">
               A minimalist social app for <br/>authentic connections, blending <br/>private messaging with interest-based communities
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              React, JavaScript
            </p>
            <div className="flex justify-center  space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/ShopBelle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a> */}
              <a 
                // href="https://socialconnect-1zbjs35.public.builtwithrocket.new/landing-page" 
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

         {/* Project 5 */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full md:ml-40">
            <img 
              src={Project5Img} 
              alt="portfolio-site" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40 md:mr-40">
            <h3 className="text-2xl font-semibold mb-2">Portfolio Site</h3>
            <p className="text-md mb-4 text-center ">
              A portfolio website that showcases the landing page, projects page, an about me page and a contact page.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Bootstrap, JavaScript
            </p>
            <div className="flex justify-center space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/hertechtrail_cohort7_project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a> */}
              <a 
                href="https://maryam-garba-hertechtrail-project.netlify.app" 
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
        
        {/* Project 6 done*/}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full ">
            <img 
              src={Project6Img} 
              alt="blog website" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">BlogCraft</h3>
            <p className="text-md mb-4 text-center ">
              Built for storytellers – intuitive editor, <br/>scheduled posts, and audience analytics <br/>in one place.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              React, Tailwind CSS
            </p>
            <div className="flex justify-center space-x-6">
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
                // href="https://blogcraft-kscy260.public.builtwithrocket.new/landing-page" 
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

        {/* Project 7 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Project7Img} 
              alt="algorithmia" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">Algorithmia</h3>
            <p className="text-md mb-4 text-center">
               Algorithmia website illuminates the path<br/> for ALX Software Engineering students, and<br/> the wider tech community, fostering<br/> a culture of continuous learning, <br/> problem-solving, and positive change.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              HTML, CSS, JavaScript
            </p>
            <div className="flex justify-center  space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/ALX-SE-Algorithmia.github.io" 
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

        {/* Project 8 done*/}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full ">
            <img 
              src={Project8Img} 
              alt="next-gen-tech" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">NextGenTech</h3>
            <p className="text-md mb-4 text-center ">
              NextGenTech Innovations is a dynamic<br/> initiative dedicated to spearheading technological advancements <br/>in infrastructure to meet the<br/> demands of the 21st century.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Bootstrap, JavaScript
            </p>
            <div className="flex justify-center space-x-6">
              {/* <a 
                href="https://github.com/FevenSeyfu/NextGenTech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a> */}
              <a 
                href="https://nextgen-tech.netlify.app" 
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

        {/* Project 9 done*/}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Project9Img} 
              alt="tracking website" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">LogiTrack Pro</h3>
            <p className="text-md mb-4 text-center">
               Real-time shipment tracking with <br/> automated alerts, route optimization,<br/> and proof-of-delivery verification.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              React, Bootstrap
            </p>
            <div className="flex justify-center  space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/ACA-Twitter-Clone" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a> */}
              <a 
                // href="https://logitrack-pro-ko2ja34.public.builtwithrocket.new/pages/homepage" 
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
        
        {/* Project 10 done*/}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full ">
            <img 
              src={Project10Img} 
              alt="pure glow" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">Pure Glow</h3>
            <p className="text-md mb-4 text-center ">
               Clean beauty marketplace with <br/> ingredient transparency, personalized<br/> routines, and video reviews.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              React, Tailwind
            </p>
            <div className="flex justify-center space-x-6">
              {/* <a 
                href="https://github.com/masha-a-m/api-assignment" 
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
        
        
       
       

      </div>

       
    
  );
};

export default Portfolio;
