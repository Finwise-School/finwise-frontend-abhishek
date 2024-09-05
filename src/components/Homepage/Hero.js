import React, { useState, useEffect } from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccessForHome";
import CountCards from "../Homepage/CountCards";
import HeroFooter from './HeroFooter';

const Hero = () => {
  // State to track viewport width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 766);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 766);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Right Image - Displayed first in mobile view */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center order-1 md:order-2 w-full">
            <img 
              src={Heroos} 
              alt="Illustration" 
              className="hero-image"
            />
          </div>

          {/* Left Content - Displayed below the image in mobile view */}
          <div className="content-wrapper flex flex-col items-center md:items-start justify-center h-full space-y-6 text-center md:text-left w-full md:w-1/2 order-2 md:order-1">
            <p id="heading" className="finwise-blue text-5xl md:text-5xl font-bold mb-4">
              Master Your Money with Finwise School
            </p>
            <p id="para" className="text-base md:text-lg mb-4 text-gray-500">
              Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
            </p>
            <div className="mt-6">
              <EarlyAccessBtn />
            </div>
            {/* Conditionally render CountCards */}
            { !isMobile && <div className="count-cards-wrapper"><CountCards /></div> }
          </div>
        </div>
      </div>
      {/* Render CountCards only on mobile */}
      { isMobile && <CountCards /> }

      {/* HeroFooter */}
      <div className="hero-footer-container">
        <HeroFooter/>
      </div>

      {/* Scoped CSS using styled-jsx */}
      <style jsx>{`
        .hero-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        @media (min-width: 640px) {
          .hero-image {
            max-width: 86%;
            margin-right: -20px;
          }
        }

        @media (max-width: 767px) { /* Mobile views */
          #heading {
            font-size: 1.3rem;
            text-align: left;
            margin-left: 0;
            max-width: 100%;
          }
          #para {
            text-align: left;
            max-width: 100%;
          }

          .content-wrapper {
            text-align: left;
            align-items: flex-start;
          }

          .count-cards-wrapper {
            display: none; /* Hide on mobile */
          }
        }

        @media (min-width: 768px) {
          #heading {
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-image {
            max-width: 101%;
          }
        }

        @media (min-width: 1280px) {
          .hero-image {
            max-width: 101%;
          }
        }

        @media (min-width: 1536px) {
          .hero-image {
            max-width: 101%;
          }
        }

        .hero-footer-container {
          width: 100%;
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Hero;
