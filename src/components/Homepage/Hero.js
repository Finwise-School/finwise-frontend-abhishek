import React from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccess";
import sub from "../Homepage/Hero/sub.png";
import HeroFooter from "../Homepage/HeroFooter";
import CountCards from "../Homepage/CountCards";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-[7%] -mt-[6%]">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="finwise-blue text-4xl font-bold mb-4">Master Your Money with Finwise School</h1>
          <p className="text-base mb-6 text-justify">
            Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
          </p>
          <div className="mt-10 md:mt-4" style={{ marginLeft: "-40px" }}>
            <EarlyAccessBtn />
          </div>

          <CountCards />
        </div>
        
        {/* Image with responsive behavior */}
        <img 
          src={Heroos} 
          alt="about-us" 
          className="hidden md:block animate-float" 
          style={{
            width: "60%",  // Default width for medium and larger screens
            marginRight: "-15%",
            transition: "width 0.3s ease", // Smooth transition for resizing
          }}
        />
      </div>

      {/* Custom Media Queries */}
      <style jsx>{`
        @media (max-width: 1250px) {
          img {
            width: 50%;  /* Reduce size for screens smaller than 1250px */
            margin-right: -10%;
          }
        }
        @media (max-width: 1080px) {
          img {
            width: 45%;  /* Further reduce size for screens smaller than 1080px */
            margin-right: -5%;
          }
        }
      `}</style>

      {/* HeroFooter */}
      <div className="rounded-lg"> 
        <HeroFooter />
      </div>
    </div>
  );
};

export default Hero;
