import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing the Hamburger icon


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const activeClassName = "text-blue-500";

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Brand Name */}
          <div className="flex items-center ">
            <NavLink to="/" className="text-2xl font-bold text-gray-800">
              Maryam.dev
            </NavLink>
          </div>

          {/* Hamburger menu for mobile */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none "
          >
            {/* Hamburger Icon */}
             {isOpen ? <HiX className="w-6 h-6 " /> : <HiMenu className="w-6 h-6 mt-5" />}
            {/* <HiMenu className="w-6 h-6" /> */}
            
             {/* Replaced SVG with Hamburger Icon from react-icons */}
            {/* <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg> */}
          </button>
        </div>


          {/* Right side - Navigation Items */}
          <div className="md:flex items-center space-x-4 hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-md font-medium ${
                  isActive ? activeClassName : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-md font-medium ${
                  isActive ? activeClassName : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              About
            </NavLink>

            {/* Other Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium flex items-center focus:outline-none">
                Other Services
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.14.976l-4.25 4.5a.75.75 0 01-1.14 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <a
                    href="https://maryamgarba.framer.website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    UI/UX
                  </a>
                  <a
                    href="https://theintrovertedreader.home.blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </a>
                  <a
                    href="https://laescritorainquisitiva.wordpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Author Site
                  </a>
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-md font-medium ${
                  isActive ? activeClassName : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              Projects
            </NavLink>
            {/* <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-md font-medium ${
                  isActive ? activeClassName : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              Contact
            </NavLink> */}
          </div>

          {/* Mobile menu */}
          {isOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white flex flex-col justify-center items-center z-50">
          {/* Close button at the top right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <HiX className="w-8 h-8" />
          </button>

          {/* Navigation links centered */}
          <NavLink to="/" className="text-2xl mb-6 hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="text-2xl mb-6 hover:text-gray-400" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" className="text-2xl mb-6 hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</NavLink>
          

          {/* Other Services dropdown in mobile view */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-2xl hover:text-gray-400"
            >
              Other Services
            </button>
            {isServicesOpen && (
              <div className="mt-4 space-y-4 text-center">
                <NavLink to="https://maryamgarba.framer.website/" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>UI/UX Designs</NavLink>
                <NavLink to="https://theintrovertedreader.home.blog/" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Blog</NavLink>
                <NavLink to="https://laescritorainquisitiva.wordpress.com/" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Author Site</NavLink>
              </div>
            )}
             </div>
        </div>
      )}
          {/* {isOpen && (
            <div className="md:hidden mt-4">
              <NavLink to="/" className="block py-2 text-sm hover:text-gray-400">Home</NavLink>
              <NavLink to="/about" className="block py-2 text-sm hover:text-gray-400">About</NavLink>
              <NavLink to="/projects" className="block py-2 text-sm hover:text-gray-400">Projects</NavLink>
              
            </div>
          )} */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
