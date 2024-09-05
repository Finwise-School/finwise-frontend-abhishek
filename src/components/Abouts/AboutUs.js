import React from "react";
import phone from "../../assets/images/aboutUS/gifyy.gif"
import barclays from "../../assets/images/aboutUS/barclays.png";
import inspire from "../../assets/images/aboutUS/inspire.png";
import univ from "../../assets/images/aboutUS/university.png";
import left from "../../assets/images/aboutUS/left.png";
import right from "../../assets/images/aboutUS/right.png";
import CarouselCards from "../carouselCards";
import { FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import EarlyAccessTemplate from "../EarlyAccessTemplate";
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccess";
import Partner from "./partnerPortal"; 

const AboutUs = () => {
  return (
    <div>
<div className="flex flex-col-reverse md:flex-row items-center justify-between pt-[3%] pb-[3%] pr-[8%] pl-[8%]">
  
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
    <h1 className="finwise-blue text-4xl font-bold mb-4">About Us</h1>
    <p className="text-base mb-6 text-justify">
      At FinwiseSchool, we understand that everyone learns differently, so
      we offer personalized learning paths tailored to each user's unique
      financial knowledge, learning style, and goals. When users join,
      they complete a short assessment to gauge their current financial
      understanding and set personal financial goals. Our advanced
      algorithms then customize the learning experience based on the
      user's progress and performance, ensuring that each lesson is
      relevant and appropriately challenging.
    </p>
        <div style={{marginLeft: "-40px"}}>
          <EarlyAccessBtn/>
        </div>
  </div>

  
  <img
  src={phone}
  alt="about-us"
  style={{ width: "100%", maxWidth: "600px", height: "auto" }}
  className="animate-float"
  />

</div>




      <div className="p-8">
        <div className="flex flex-col md:flex-row mb-20 pr-[8%] pl-[7%]">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex">
              <h1 className="finwise-blue text-4xl font-bold mb-[1%]">
                Our Values
              </h1>
            </div>
            <p className="text-base pr-10 text-justify">
              Our journey is one of relentless progress and transformation. We
              began as a passionate group with a vision, dedicated to building
              an educational platform that redefines the boundaries of
              traditional financial learning.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="flex mb-10">
              <div className="flex-1">
                <div className="flex items-center mb-5">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 mr-4 hover:shadow-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  <FaStar className="finwise-blue text-xl shiny-effect transition-transform duration-300 ease-in-out" />
</div>

                  
                  <h1 className="finwise-blue text-lg font-bold">Trust</h1>
                </div>
                <p>
                  We build lasting relationships through integrity,
                  transparency, and trust.
                </p>
              </div>

              <div className="border-l-2 border-gray-500 mx-5 h-auto"></div>

              <div className="flex-1">
                <div className="flex items-center mb-5">
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 mr-4 hover:shadow-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  <FaGraduationCap className="finwise-blue text-xl shiny-effect transition-transform duration-300 ease-in-out" />
</div>


              
                  <h1 className="finwise-blue text-lg font-bold">Excellence</h1>
                </div>
                <p>
                  We strive for excellence in everything we do, ensuring high
                  standards and quality.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-gray-500 w-full mb-5"></div>

            <div className="flex">
              <div className="flex-1">
                <div className="flex items-center mb-5">
              
              
                <div className="flex items-center justify-center w-10 h-8 rounded-full border-2 border-green-500 mr-4 hover:shadow-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  <IoIosPeople className="finwise-blue text-xl shiny-effect transition-transform duration-300 ease-in-out" />
</div>


                
                  <h1 className="finwise-blue text-lg font-bold">
                    Community Focus
                  </h1>
                </div>
                <p>
                  We are committed to fostering a sense of community and support
                  among our users.
                </p>
              </div>

              <div className="border-l-2 border-gray-500 mx-5 h-auto"></div>

              <div className="flex-1">
                <div className="flex items-center mb-5">
                <div className="flex items-center justify-center w-10 h-8 rounded-full border-2 border-green-500 mr-4 hover:shadow-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  <FaStar className="finwise-blue text-xl shiny-effect transition-transform duration-300 ease-in-out" />
</div>

                  <h1 className="finwise-blue text-lg font-bold">
                    Our Commitment
                  </h1>
                </div>
                <p>
                  We are dedicated to our mission and to helping our users
                  achieve their financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="bg-black text-white pt-[2%] pr-[5%] pl-[5%]">
  <div className="container mx-auto  py-[]">
    <div className="pb-12">
      <h1 className="text-4xl font-bold mb-4 mt-10">
        Navigating the Finwise School Experience
      </h1>
      <p>
        Navigating the Finwise School process is simple and designed to guide you toward financial success. Here's a step-by-step overview:
      </p>
    </div>
<div className="flex flex-wrap justify-between p-[1%]">
  
  <div className="relative w-full md:w-[30%] p-5 mb-8">
    <h2 className="text-xl font-semibold mb-4 relative">
      Step 01
     
      <span className="absolute left-[-1px] bottom-[-4px] h-[1px] w-[calc(100%+1px)] bg-blue-700 shadow-md"></span>
      <span className="absolute left-0 bottom-[-5px] h-2 w-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></span>
    </h2>
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">Sign Up and Create your Account</h2>
      <p className="font-thin">
        Fill Out Registration Information: Provide your basic details like name,
        email, and password to create your account.
      </p>
    </div>
    
    <div className="absolute top-0 left-0 h-full w-[1px] bg-blue-700 shadow-md"></div>
    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-700 to-transparent opacity-50"></div>
  </div>

 
  <div className="relative w-full md:w-[30%] p-5 mb-8">
    <h2 className="text-xl font-semibold mb-4 relative">
      Step 02
      <span className="absolute left-[-1px] bottom-[-4px] h-[1px] w-[calc(100%+1px)] bg-blue-700 shadow-md"></span>
      <span className="absolute left-0 bottom-[-5px] h-2 w-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></span>
    </h2>
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">Complete a Financial Assessment</h2>
      <p className="font-thin">
        Answer Questions About Your Financial Goals: Share your short-term and
        long-term financial objectives to help tailor your plan.
      </p>
    </div>
    <div className="absolute top-0 left-0 h-full w-[1px] bg-blue-700 shadow-md"></div>
    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-700 to-transparent opacity-50"></div>
  </div>

 
  <div className="relative w-full md:w-[30%] p-5 mb-8">
    <h2 className="text-xl font-semibold mb-4 relative">
      Step 03
      <span className="absolute left-[-1px] bottom-[-4px] h-[1px] w-[calc(100%+1px)] bg-blue-700 shadow-md"></span>
      <span className="absolute left-0 bottom-[-5px] h-2 w-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></span>
    </h2>
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">Start Learning with Financial Modules</h2>
      <p className="font-thin">
        Complete Educational Modules: Work through interactive modules designed
        to build your financial knowledge and skills.
      </p>
    </div>
    <div className="absolute top-0 left-0 h-full w-[1px] bg-blue-700 shadow-md"></div>
    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-700 to-transparent opacity-50"></div>
  </div>

 
  <div className="relative w-full md:w-[30%] p-5 mb-8">
    <h2 className="text-xl font-semibold mb-4 relative">
      Step 04
      <span className="absolute left-[-1px] bottom-[-4px] h-[1px] w-[calc(100%+1px)] bg-blue-700 shadow-md"></span>
      <span className="absolute left-0 bottom-[-5px] h-2 w-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></span>
    </h2>
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">Utilize Financial Tools and Resources</h2>
      <p className="font-thin">
        Access Financial Tools: Use tools to create and manage a budget, helping
        you track and control your spending.
      </p>
    </div>
    <div className="absolute top-0 left-0 h-full w-[1px] bg-blue-700 shadow-md"></div>
    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-700 to-transparent opacity-50"></div>
  </div>

 
  <div className="relative w-full md:w-[30%] p-5 mb-8">
    <h2 className="text-xl font-semibold mb-4 relative">
      Step 05
      <span className="absolute left-[-1px] bottom-[-4px] h-[1px] w-[calc(100%+1px)] bg-blue-700 shadow-md"></span>
      <span className="absolute left-0 bottom-[-5px] h-2 w-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></span>
    </h2>
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">Monitor Progress and Get Expert Advice</h2>
      <p className="font-thin">
        Check the Leaderboard: See how you rank against other users by tracking
        your progress on the leaderboard.
      </p>
    </div>
    <div className="absolute top-0 left-0 h-full w-[1px] bg-blue-700 shadow-md"></div>
    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-700 to-transparent opacity-50"></div>
  </div>

 
  <div className="relative w-full md:w-[30%] p-5 mb-8">
    <h2 className="text-xl font-semibold mb-4 relative">
      Step 06
      <span className="absolute left-[-1px] bottom-[-4px] h-[1px] w-[calc(100%+1px)] bg-blue-700 shadow-md"></span>
      <span className="absolute left-0 bottom-[-5px] h-2 w-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></span>
    </h2>
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">Achieve Goals and Earn Rewards</h2>
      <p className="font-thin">
        Earn Rewards for Completing Modules: Receive rewards for completing
        modules and achieving milestones, motivating you to stay on track.
      </p>
    </div>
    <div className="absolute top-0 left-0 h-full w-[1px] bg-blue-700 shadow-md"></div>
    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-700 to-transparent opacity-50"></div>
  </div>
</div>


  </div>

  
</div>


  <CarouselCards/>

  <Partner/>
  <EarlyAccessTemplate/>

      
    </div>
  );
};

export default AboutUs;