import React from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccess";
import sub from "../Homepage/Hero/sub.png"
import black from "../Homepage/Hero/black.png"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-[7%] -mt-[6%]">
        <div className="w-full md:w-1/2">
          <h1 className="finwise-blue text-4xl font-bold mb-4">Master Your Money with Finwise School</h1>
          <p className="text-base mb-6 text-justify">
          Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
          </p>
          <div style={{marginLeft: "-40px"}}>
          <EarlyAccessBtn/>
          </div>
        </div>
       <img src={Heroos} height={900} width={900} alt="about-us" className="hidden md:block animate-float -mr-[15%]"/>
      </div>
      <div>
        <img src={sub} height={770} width={770} alt="about-us" className="hidden md:block ml-[6%] -mt-[12%]"/>
      </div>
      <div>
        <img src={black} height={1450} width={1485} alt="about-us" className="hidden md:block ml-[1%] mt-[5%]"/>
      </div>
    </div>
  );
};

export default Hero;