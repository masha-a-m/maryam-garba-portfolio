import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiFigma, 
  SiReact, 
  SiMysql, 
  SiTailwindcss, 
  SiBootstrap 
} from 'react-icons/si';

const Stack = () => {
  return (
 <div className="flex md:flex-row flex-col text-center invisible md:visible md:items-center md:justify-center py-10 ">
      {/* Tech Stack */}
            <h2 className="text-xl font-semibold text-gray-700 mb-3 md:mr-10">
              Tech Stack <span className='ml-10'>|</span>
            </h2>
            <div className="flex flex-nowrap justify-center lg:justify-start space-x-8 space-y-2 lg:space-y-0">
              <SiHtml5 
                className="text-orange-600 text-4xl hover:scale-110 transition-transform duration-300" 
                title="HTML5" 
              />
              <SiCss3 
                className="text-blue-600 text-4xl hover:scale-110 transition-transform duration-300" 
                title="CSS3" 
              />
              <SiJavascript 
                className="text-yellow-400 text-4xl hover:scale-110 transition-transform duration-300" 
                title="JavaScript" 
              />
              <SiFigma 
                className="text-pink-500 text-4xl hover:scale-110 transition-transform duration-300" 
                title="Figma" 
              />
              {/* Uncomment if you have a custom FigJam icon */}
              {/* <FigJamIcon 
                className="w-10 h-10 hover:scale-110 transition-transform duration-300" 
                title="FigJam" 
              /> */}
              <SiReact 
                className="text-blue-400 text-4xl hover:scale-110 transition-transform duration-300" 
                title="React" 
              />
              <SiMysql 
                className="text-blue-500 text-4xl hover:scale-110 transition-transform duration-300" 
                title="MySQL" 
              />
              <SiTailwindcss 
                className="text-teal-500 text-4xl hover:scale-110 transition-transform duration-300" 
                title="Tailwind CSS" 
              />
              <SiBootstrap 
                className="text-purple-600 text-4xl hover:scale-110 transition-transform duration-300" 
                title="Bootstrap" 
              />
            </div>
</div>
  )
};
export default Stack;