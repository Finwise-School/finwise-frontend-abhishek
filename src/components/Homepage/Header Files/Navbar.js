import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import REAButton from '../Header Files/RequestEarlyAccessForHome'; // Importing your custom button component
import Logo from '../../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900" style={{ marginTop: "-15px" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        {/* Logo on the left */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-12" alt="Finwise School Logo" />
          <span className="self-center text-1xl">Finwise School</span>
        </a>
        
        {/* Button to toggle mobile menu */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M8.5 13h7.5" // Updated last stroke to start from halfway
            />
          </svg>
        </button>

        {/* Mobile Menu Wrapper */}
        <div
          className={`fixed inset-0 bg-white dark:bg-gray-900 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col p-4">
            <button
              type="button"
              className="self-end p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleToggle}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M13 1L1 13"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 mt-4">
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tools"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle section with navigation links */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Button on the right, hidden on mobile */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <REAButton />
        </div>
      </div>

      {/* Horizontal line for mobile view */}
      <hr className="md:hidden border-t border-gray-300 dark:border-gray-300" />
    </nav>
  );
};

export default Navbar;
