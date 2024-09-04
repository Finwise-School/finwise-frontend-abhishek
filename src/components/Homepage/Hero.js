import React from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccess";
import HeroFooter from "../Homepage/HeroFooter";
import CountCards from "../Homepage/CountCards";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Right Image - Displayed first in mobile view */}
          <div className="flex justify-center md:justify-end w-full md:w-1/2 md:ml-auto order-1 md:order-2">
            <img 
              src={Heroos} 
              alt="Illustration" 
              className="w-full h-auto object-cover" // Ensure image covers its container
            />
          </div>

          {/* Left Content - Displayed below the image in mobile view */}
          <div className="flex flex-col items-center md:items-start justify-center h-full space-y-6 text-center md:text-left w-full md:w-1/2 order-2 md:order-1">
            <h1 className="finwise-blue text-3xl md:text-4xl font-bold mb-4">
              Master Your Money with<br />Finwise School
            </h1>
            <p className="text-base md:text-lg mb-4 text-gray-500">
              Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
            </p>
            <div className="mt-6">
              <EarlyAccessBtn />
            </div>
            <div>
              <CountCards />
            </div>
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
