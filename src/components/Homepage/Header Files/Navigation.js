import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Tools', path: '/tools' },
    { name: 'Blogs', path: '/blogs' }
  ];

  return (
    <nav className="flex absolute top-2/4 left-2/4 z-0 gap-8 items-center self-start bg-white -translate-x-2/4 -translate-y-2/4 min-w-[240px]">
      {navItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          className="self-stretch my-auto text-blue-900 hover:text-blue-600"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
