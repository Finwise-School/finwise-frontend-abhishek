import React from 'react';
import Build from "../../assets/images/HOMEPAGE/header/build.png";
import Home from "../../assets/images/HOMEPAGE/header/home.png";
import Sun from "../../assets/images/HOMEPAGE/header/sun.png";
import Money from "../../assets/images/HOMEPAGE/header/money.png";

const HeroFooter = () => {
  return (
    <footer className="bg-black text-white py-8 rounded-2xl mx-4">
      <div className="max-w-7xl mx-auto px-4 rounded-md overflow-hidden">
        <div className="grid-for-calci grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Grocery Coupons Item */}
          <div className="flex items-center justify-center relative group w-full">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-black p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full">
              <div className="relative mb-2">
                <img src={Home} alt="Grocery Coupons" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Grocery Coupons</p>
            </div>
          </div>

          {/* Increase Disposable Income Item */}
          <div className="flex items-center justify-center relative group w-full">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-black p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full">
              <div className="relative mb-2">
                <img src={Money} alt="Increase Disposable Income" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Increase Disposable Income</p>
            </div>
          </div>

          {/* Achieve Your Financial Goals Item */}
          <div className="flex items-center justify-center relative group w-full">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-black p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full">
              <div className="relative mb-2">
                <img src={Build} alt="Achieve Your Financial Goals" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Achieve Your Financial Goals</p>
            </div>
          </div>

          {/* Smart Investments Item */}
          <div className="flex items-center justify-center relative group w-full">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-black p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full">
              <div className="relative mb-2">
                <img src={Sun} alt="Smart Investments" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Smart Investments, Informed Decisions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HeroFooter;
