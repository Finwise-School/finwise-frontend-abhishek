import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Homepage/Header Files/Logo.js';
import Navigation from './Homepage/Header Files/Navigation.js';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex relative justify-between items-center px-40 w-full bg-white max-md:px-5 max-md:max-w-full">
      {/* Logo */}
      <div className="flex-shrink-0 max-md:w-40 max-md:my-auto">
        <Logo className="text-2xl max-md:text-4xl" />
      </div>

      {/* Title Hidden on Mobile */}
      <h1 className="z-0 self-stretch my-auto w-[1325px] max-md:hidden" style={{ marginLeft: '-20px' }}>
        Finwise School
      </h1>

      {/* Request Early Access Button - Visible only on large screens */}
      <button
        onClick={() => navigate('/early-access')}
        className="hidden lg:inline-block hover:text-green-500 font-bold text-[#263871] rounded-lg py-2 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300"
        style={{
          border: '5px solid',
          borderRadius: '12px',
          borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
        }}
      >
        Request Early Access
      </button>

      {/* Navigation Component */}
      <Navigation />
    </header>
  );
}

export default Header;
