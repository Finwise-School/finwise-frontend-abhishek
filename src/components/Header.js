import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Homepage/Header Files/Logo.js';
// import Navigation from './Homepage/Header Files/Navigation.js';
import Navigation from './Homepage/Header Files/Navbar.js';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/early-access');
  };

  return (
    // <header className="">
      <Navigation />
    // </header>
  );
}

export default Header;