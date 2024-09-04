import React from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccess";
import HeroFooter from "../Homepage/HeroFooter";
import CountCards from "../Homepage/CountCards";

const Hero = () => {
  return (
    <div className="bg-white font-poppins">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid-for-calci grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content - Vertically Centered */}
          <div className="flex flex-col items-center md:items-start justify-center h-full space-y-6 text-center md:text-left">
            <h1 className="finwise-blue ml-16 text-4xl font-bold mb-4">
              Master Your Money with<br />Finwise School
            </h1>
            <p className="text-base ml-16 mb-4 text-gray-500">
              Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
            </p>
            <div className="ml-6"> {/* Increased left margin */}
              <EarlyAccessBtn />
            </div>
            <div>
              <CountCards />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={Heroos} 
              alt="Illustration" 
              className="w-full max-w-3xl h-auto" // Increased to make image very large
            />
          </div>
        </div>
      </div>

      {/* HeroFooter */}
      <div className="rounded-lg"> 
        <HeroFooter />
      </div>
    </div>
  );
};

export default Hero;
