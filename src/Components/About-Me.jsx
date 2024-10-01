import React from 'react';
import aboutImg from './assets/profile img.webp';


const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      {/* Image */}
      <img 
        src={aboutImg}
        alt="About Me" 
        className="rounded-full w-48 h-48 mb-8 object-cover" 
      />

      {/* About Me Text */}
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-center text-lg max-w-2xl">
        Hi, I'm Maryam Garba, a passionate frontend developer based in Kaduna, Nigeria.
        I love designing and building clean, user-friendly interfaces, with a focus on
        modern technologies such as React, Tailwind, and more. When I'm not coding,
        you can find me exploring UI/UX designs or learning new tech skills!<br/>
        <br/>As a product designer, I ensure that I leverage a user-centric approach, 
        meticulous attention to detail, and a deep understanding of design trends to create 
        seamless, visually compelling, and impactful solutions that resonate with users and 
        drive meaningful engagement. I make use of Figma, Figjam and Framer to achieve this.
        <br/><br/>
      </p>
    </div>
  );
};

export default AboutMe;
