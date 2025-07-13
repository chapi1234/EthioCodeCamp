import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setAdmissionOpen(false);
    setLibraryOpen(false);
  };

  return (
    <nav className="bg-yellow-400 shadow-md px-4 py-3 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/1200px-Commons-logo.svg.png"
            alt="EthioCodeCamp"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-blue-900">EthioCodeCamp</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-6 font-medium text-black">
          <li>
            <a href="#" className="hover:text-blue-600 text-blue-800">
              Home
            </a>
          </li>

          {/* About Us Dropdown */}
          <li className="relative group">
            <button className="flex items-center">
              About Us <span className="ml-1">&#9662;</span>
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-md mt-2 py-2 w-48 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">About</li>
              <li className="px-4 py-2 hover:bg-gray-100">Accreditation</li>
              <li className="px-4 py-2 hover:bg-gray-100">Office</li>
            </ul>
          </li>

          {/* Admission Dropdown */}
          <li className="relative group">
            <button className="flex items-center">
              Admission <span className="ml-1">&#9662;</span>
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-md mt-2 py-2 w-56 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Distance</li>
              <li className="px-4 py-2 hover:bg-gray-100">Extension</li>
              <li className="px-4 py-2 hover:bg-gray-100">Regular Degree</li>
              <li className="px-4 py-2 hover:bg-gray-100">Masters Degree</li>
            </ul>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600">
              News & Event
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Programs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Almunis
            </a>
          </li>

          {/* Libraries Dropdown */}
          <li className="relative group">
            <button className="flex items-center">
              Libraries <span className="ml-1">&#9662;</span>
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-md mt-2 py-2 w-80 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">E-Learning</li>
              <li className="px-4 py-2 hover:bg-gray-100">Digital Library</li>
              <li className="px-4 py-2 hover:bg-gray-100">Emerald Journal</li>
              <li className="px-4 py-2 hover:bg-gray-100">EBSCO Journal</li>
              <li className="px-4 py-2 hover:bg-gray-100">
                National Digital Library of Ethiopia (NDLE)
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Research and Publication Repository
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Login Button - Desktop */}
        <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-2xl text-blue-800"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/1200px-Commons-logo.svg.png"
                alt="EthioCodeCamp"
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-blue-900">EthioCodeCamp</span>
            </div>
            <button onClick={handleLinkClick} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          <ul className="space-y-4 text-lg font-medium">
            <li>
              <a href="#" onClick={handleLinkClick} className="block hover:text-blue-600">
                Home
              </a>
            </li>

            {/* About Us */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                <span>About Us</span>
                <FaChevronDown className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </div>
              {aboutOpen && (
                <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-700">
                  <li onClick={handleLinkClick}>About</li>
                  <li onClick={handleLinkClick}>Accreditation</li>
                  <li onClick={handleLinkClick}>Office</li>
                </ul>
              )}
            </li>

            {/* Admission */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setAdmissionOpen(!admissionOpen)}
              >
                <span>Admission</span>
                <FaChevronDown className={`transition-transform ${admissionOpen ? "rotate-180" : ""}`} />
              </div>
              {admissionOpen && (
                <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-700">
                  <li onClick={handleLinkClick}>Distance</li>
                  <li onClick={handleLinkClick}>Extension</li>
                  <li onClick={handleLinkClick}>Regular Degree</li>
                  <li onClick={handleLinkClick}>Masters Degree</li>
                </ul>
              )}
            </li>

            <li>
              <a href="#" onClick={handleLinkClick} className="block hover:text-blue-600">
                News & Event
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick} className="block hover:text-blue-600">
                Programs
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick} className="block hover:text-blue-600">
                Almunis
              </a>
            </li>

            {/* Libraries */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setLibraryOpen(!libraryOpen)}
              >
                <span>Libraries</span>
                <FaChevronDown className={`transition-transform ${libraryOpen ? "rotate-180" : ""}`} />
              </div>
              {libraryOpen && (
                <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-700">
                  <li onClick={handleLinkClick}>E-Learning</li>
                  <li onClick={handleLinkClick}>Digital Library</li>
                  <li onClick={handleLinkClick}>Emerald Journal</li>
                  <li onClick={handleLinkClick}>EBSCO Journal</li>
                  <li onClick={handleLinkClick}>NDLE</li>
                  <li onClick={handleLinkClick}>Research & Publication Repository</li>
                </ul>
              )}
            </li>

            <li>
              <a href="#" onClick={handleLinkClick} className="block hover:text-blue-600">
                Contact Us
              </a>
            </li>

            {/* Login - mobile */}
            <li className="mt-4">
              <button
                onClick={handleLinkClick}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;