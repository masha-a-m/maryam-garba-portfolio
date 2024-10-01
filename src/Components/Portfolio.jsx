import React from 'react';
import { FaGithub, FaShareAlt } from 'react-icons/fa';
import Project1Img from '../Components/assets/blog.png';
import Project2Img from '../Components/assets/vendor-hub.png';
import Project3Img from '../Components/assets/portfolio.png';
import Project4Img from '../Components/assets/shopbelle.png';
import Project5Img from '../Components/assets/portfolio-site.png';
import Project6Img from '../Components/assets/sign-up-form.png';
import Project7Img from '../Components/assets/algorithmia.png';
import Project8Img from '../Components/assets/nextgentech.png';
import Project9Img from '../Components/assets/twitter-clone.png';
import Project10Img from '../Components/assets/tell-a-joke-api.png';

const Portfolio = () => {
  return (
      <div className="container mx-auto text-center py-40">

        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-20">PORTFOLIO</h2>
        
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto md:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Project1Img} 
              alt="blog" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">Blog App</h3>
            <p className="text-md mb-4 text-center">
               A simple blog app website that shows<br/> lets users read different blog posts <br/>on different genres and users can like, <br/>comment on any blog post.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Bootstrap, Django
            </p>
            <div className="flex justify-center  space-x-6">
              <a 
                href="https://github.com/masha-a-m/simple-blog-app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a>
              <a 
                href="https://afternoon-headland-76932-22b7bcf4c9f9.herokuapp.com/" 
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
              alt="vendor-hub" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">Vendor Hub</h3>
            <p className="text-md mb-4 text-center ">
              Vendor Hub is a site that brings <br/> together different vendors in a school<br/> together. With this
              app, students can find their preferred vendor easily.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              HTML, CSS
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/masha-a-m/VendorHub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a>
              <a 
                href="https://vendorrhub.netlify.app/" 
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
              alt="Portfolio" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">Portfolio</h3>
            <p className="text-md mb-4 text-center">
               A simple portfolio website that shows<br/> different projects that have been worked <br/>on, including an about me section and a<br/> contact section plus a footer.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Tailwind
            </p>
            <div className="flex justify-center space-x-6">
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
                href="https://assignment-aca.vercel.app" 
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
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:justify-between mb-40">
          
          {/* Project Image - Left */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Project4Img} 
              alt="shopbelle" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">ShopBelle</h3>
            <p className="text-md mb-4 text-center">
               ShopBelle is an E-commerce site that allows<br/> users to shop and buy different products<br/> available in the site.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Tailwind
            </p>
            <div className="flex justify-center  space-x-6">
              <a 
                href="https://github.com/masha-a-m/ShopBelle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a>
              <a 
                href="https://shop-belle.netlify.app" 
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full ">
            <img 
              src={Project5Img} 
              alt="portfolio-site" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">Portfolio Site</h3>
            <p className="text-md mb-4 text-center ">
              A portfolio website that showcases<br/> the landing page, projects page,<br/> an about me page and a contact page.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Bootstrap, JavaScript
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/masha-a-m/hertechtrail_cohort7_project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a>
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
              alt="sign-up-page" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">Sign Up Page</h3>
            <p className="text-md mb-4 text-center ">
              A simple sign up page <br/>that allows users to input their name,<br/> email and phone number.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Tailwind CSS
            </p>
            <div className="flex justify-center space-x-6">
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
              <a 
                href="https://github.com/masha-a-m/ALX-SE-Algorithmia.github.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a>
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
              <a 
                href="https://github.com/FevenSeyfu/NextGenTech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaGithub />
                <span>Code</span>
              </a>
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
              alt="twitter-clone" 
              className="w-full h-auto rounded-lg shadow-md object-cover md:ml-40" 
            />
          </div>
          
          {/* Project Details - Right */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0  md:ml-20">
            <h3 className="text-2xl text-center font-semibold mb-2">Twitter Clone</h3>
            <p className="text-md mb-4 text-center">
               Clone of Twitter homepage showing the<br/> sidebar elements, the main tweet<br/> section, and a list of random <br/>tweets.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              Tailwind CSS
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
        
        {/* Project 10 done*/}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-40 md:mr-20">
          
          {/* Project Image - Right */}
          <div className="w-full ">
            <img 
              src={Project10Img} 
              alt="joke-api" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
          </div>
          
          {/* Project Details - Left */}
          <div className="w-full lg:w-1/2 mt-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-2">Joke API</h3>
            <p className="text-md mb-4 text-center ">
               Users can click on the tell a joke button, <br/>to create random jokes and also <br/>click on the tagline button to show the <br/>tagline of that joke.
            </p>
            <p className="text-md font-bold mb-4 text-center ">
              HTML, CSS, JavaScript
            </p>
            <div className="flex justify-center space-x-6">
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
        
       
       

      </div>

       
    
  );
};

export default Portfolio;
