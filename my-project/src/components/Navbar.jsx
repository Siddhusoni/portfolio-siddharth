import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md">
      <div className="flex justify-between items-center h-16">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img
              src="https://scintillating-seahorse-5ca99e.netlify.app/assets/photo-CRiQkxfM.avif"
              className="h-12 w-12 rounded-full"
              alt="Profile"
            />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Siddhar<span className="text-red-500 text-2xl">th</span>
              </h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>
        </Link>
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className={`hidden md:flex items-center space-x-8 transition-all duration-300`}>
          <ul className="flex space-x-8">
            <li><Link to="/" className="cursor-pointer hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link to="/experience" className="cursor-pointer hover:text-red-500 transition-colors">Experience</Link></li>
            <li><Link to="/skills" className="cursor-pointer hover:text-red-500 transition-colors">Skills</Link></li>
            <li><Link to="/certificates" className="cursor-pointer hover:text-red-500 transition-colors">Certificates</Link></li>
            <li><Link to="/projects" className="cursor-pointer hover:text-red-500 transition-colors">Projects</Link></li>
            <li><Link to="/services" className="cursor-pointer hover:text-red-500 transition-colors">Services</Link></li>
            <li><Link to="/education" className="cursor-pointer hover:text-red-500 transition-colors">Education</Link></li>
            <li><Link to="/contact" className="cursor-pointer hover:text-red-500 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-6 text-white text-lg">
          <li><Link to="/" className="cursor-pointer hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link to="/experience" className="cursor-pointer hover:text-red-500 transition-colors">Experience</Link></li>
            <li><Link to="/skills" className="cursor-pointer hover:text-red-500 transition-colors">Skills</Link></li>
            <li><Link to="/certificates" className="cursor-pointer hover:text-red-500 transition-colors">Certificates</Link></li>
            <li><Link to="/projects" className="cursor-pointer hover:text-red-500 transition-colors">Projects</Link></li>
            <li><Link to="/services" className="cursor-pointer hover:text-red-500 transition-colors">Services</Link></li>
            <li><Link to="/education" className="cursor-pointer hover:text-red-500 transition-colors">Education</Link></li>
            <li><Link to="/contact" className="cursor-pointer hover:text-red-500 transition-colors">Contact</Link></li>          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
