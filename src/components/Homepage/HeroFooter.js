import React from 'react';
import Build from "../../assets/images/HOMEPAGE/header/build.png";
import Home from "../../assets/images/HOMEPAGE/header/home.png";
import Sun from "../../assets/images/HOMEPAGE/header/sun.png";
import Money from "../../assets/images/HOMEPAGE/header/money.png";

const HeroFooter = () => {
  return (
    <footer style={{ backgroundColor: "#000000", marginLeft: "4px", marginRight: "4px" }} className="text-white py-8 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 rounded-md overflow-hidden"> 
        <div className="grid-for-calci grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-[2px] text-center">
          {/* Contact Item */}
          <a href="#" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "black" }}>
              <div className="relative mb-2">
                <img src={Home} alt="Email Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Grocery Coupens</p>
            </div>
          </a>

          {/* Phone Item */}
          <a href="#" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "black" }}>
              <div className="relative mb-2">
                <img src={Money} alt="Phone Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Increase Disposable income</p>
            </div>
          </a>

          {/* Location Item */}
          <a href="#" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "black" }}>
              <div className="relative mb-2">
                <img src={Build} alt="Location Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Achieve your Financial Goals</p>
            </div>
          </a>

          {/* Social Media Links */}
          <a href="#" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "black" }}>
              <div className="relative mb-2">
                <img src={Sun} alt="Social Media Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Smart Investments, Informed Decisions</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default HeroFooter;
