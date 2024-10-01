import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-50">

        {/* Contact Section */}
        <section class="px-10 md:px-56 md:py-16 bg-white text-center mt-40 md:mt-40">
       
        <h2 class="font-bold text-lg mb-4 text-left text-blue-700 ml-6 uppercase">Contact</h2>

  
        <p class="text-2xl font-bold text-gray-600 mb-8 text-left ml-6">
        Don’t be shy! Hit me up! <span>👇</span>
        </p>

  
        <div class="flex justify-start ml-6  md:gap-24 mt-10 md:mt-20">
    
        <div class="text-left justify-start">
          <div class="flex items-center mb-2">
            <span class="text-2xl mr-2 items-center">✉️</span>
            <span class=" text-lg font-bold">Mail</span>
          </div>
          <p class="ml-8 text-lg text-gray-700">escritoramaree@gmail.com</p>
        </div>
        
        <div class="text-left invisible md:visible items-center ">
          <div class="flex items-center mb-2">
            <span class="text-2xl mr-2 items-center">📍</span>
            <span class="text-lg font-bold">Location</span>
          </div>
          <p class="ml-8 text-lg text-gray-700">Kaduna, Nigeria</p>
        </div>

  
        
      </div>
        </section>


    </section>
  );
};

export default Contact;
