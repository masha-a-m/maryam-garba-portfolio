import React from 'react';
import aboutImg from '../assets/about.webp';




const AboutHomepage = () => {
  return (
    <section>
        {/* About Section */}
          <div className="about-section flex flex-col items-center justify-center lg:flex-row lg:space-x-12 md:mt-40">
            <div className="left-side md:ml-40">
              <img src={aboutImg} alt="About me" className="w-30 h-60 md:w-96 md:h-96 rounded-3xl object-cover" />
            </div>

            <div className="right-side flex flex-col items-start md:text-left space-y-3 lg:max-w-lg md:ml-0 ml-5">
              <h2 className="text-2xl font-bold text-gray-800 md:mt-0 mt-4 mb-2">Front-end Developer <br/> based in Kaduna, Nigeria 🎈</h2>
              <div className="">
              <p className="text-base text-gray-700 md:mb-4 mb-4">
                Hey, I'm a Front-end Developer. <br/>My passion is to create and develop a clean UI/UX<br/> for my users.
              </p>
              <p className="text-base text-gray-700">
                My main stack currently is React.js in combination with <br/>Tailwind CSS and JavaScript.
              </p>
              </div>
            </div>
          </div>

       
    </section>
  );
};

export default AboutHomepage;
