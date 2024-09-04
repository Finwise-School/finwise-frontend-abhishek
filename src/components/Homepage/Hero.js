import React from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccess";
import sub from "../Homepage/Hero/sub.png"
import HeroFooter from "../Homepage/HeroFooter"
import CountCards from "../Homepage/CountCards"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-[7%] -mt-[6%]">
        <div className="w-full md:w-1/2">
          <h1 className="finwise-blue text-4xl font-bold mb-4">Master Your Money with Finwise School</h1>
          <p className="text-base mb-6 text-justify">
            Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
          </p>
          <div style={{ marginLeft: "-40px", marginTop: "40px" }}>
            <EarlyAccessBtn />
          </div>


            <CountCards />

        </div>
        <img src={Heroos} height={900} width={900} alt="about-us" className="hidden md:block animate-float -mr-[15%]" />
      </div>
      <div>
      </div>
      <div>
      </div>
      <div className="rounded-lg"> 
      <HeroFooter />
      </div>
    </div>
  );
};

export default Hero;
