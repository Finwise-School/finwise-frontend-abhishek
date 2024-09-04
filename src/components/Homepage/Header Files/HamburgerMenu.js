import React from 'react';

function HamburgerMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div className="relative flex items-center max-md:hidden">
      <button
        onClick={toggleMenu}
        className="p-3 rounded-md hover:bg-gray-200 transition-all duration-300"
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>
      
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md w-48">
          <ul className="flex flex-col">
            <li>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
            </li>
            <li>
              <a href="/tools" className="block px-4 py-2 hover:bg-gray-100">Tools</a>
            </li>
            <li>
              <a href="/blogs" className="block px-4 py-2 hover:bg-gray-100">Blogs</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
