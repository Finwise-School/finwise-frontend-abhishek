import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Tools', path: '/tools' },
    { name: 'Blogs', path: '/blogs' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon - Only on Mobile */}
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-blue-900 focus:outline-none"
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu - Centered Dropdown in Mobile */}
      <nav
        className={`absolute lg:relative top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-white z-10 lg:z-0 lg:flex lg:gap-8 lg:items-center ${
          isOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-center py-2 text-blue-900 hover:text-blue-600 lg:my-auto"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
