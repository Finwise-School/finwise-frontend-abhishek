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
const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="w-full md:w-1/2">
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
          <div className="mt-6 lg:mt-0 lg:ml-0">
            <a
              href="/early-access"
              className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-2 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300"
              style={{
                border: "5px solid",
                borderRadius: "12px",
                borderImage:
                  "linear-gradient(90deg, #223876 0%, #3CB371 100%) 1",
              }}
            >
              Request Early Access
            </a>
          </div>
        </div>
       <img
  src={phone}
  height={500}
  width={500}
  alt="about-us"
  className="hidden md:block md:ml-10 animate-float"
/>


      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row mb-20">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex">
              <h1 className="finwise-blue text-4xl font-bold mb-4">
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 mr-4">
                    <FaStar className="finwise-blue text-xl" />
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 mr-4">
                    <FaGraduationCap className="finwise-blue text-xl" />
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 mr-4">
                    <IoIosPeople className="finwise-blue text-xl" />
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 mr-4">
                    <FaStar className="finwise-blue text-xl" />
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

      <div className="bg-black text-white p-10">
  <div className="container mx-auto px-8 hover:border-blue-700 hover:border-2 py-8">
    <div className="pb-12">
      <h1 className="text-4xl font-bold mb-4 ">
        Navigating the Finwise School Experience
      </h1>
      <p>
        Navigating the Finwise School process is simple and designed to guide you toward financial success. Here's a step-by-step overview:
      </p>
    </div>

    <div className="flex flex-wrap justify-between p-5  ">
      
    <div className="w-full md:w-[30%] border-l-[1px] border-blue-700 p-5  mb-8 ">
        <h2 className="text-xl font-semibold mb-4">Step 01</h2>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Sign Up and Create your Account</h2>
          <p className="font-thin">
            Fill Out Registration Information: Provide your basic details like name, email, and password to create your account.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
      </div>

      <div className="w-full md:w-[30%] border-l-[1px] border-blue-700 p-5  mb-8 ">

        <h2 className="text-xl font-semibold mb-4">Step 02</h2>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Complete a Financial Assessment</h2>
          <p className="font-thin">
            Answer Questions About Your Financial Goals: Share your short-term and long-term financial objectives to help tailor your plan.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
      </div>

      <div className="w-full md:w-[30%] border-l-[1px] border-blue-700 p-5  mb-8 ">

        <h2 className="text-xl font-semibold mb-4">Step 03</h2>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Start Learning with Financial Modules</h2>
          <p className="font-thin">
            Complete Educational Modules: Work through interactive modules designed to build your financial knowledge and skills.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
      </div>


      <div className="w-full md:w-[30%] border-l-[1px] border-blue-700 p-5  mb-8 ">

        <h2 className="text-xl font-semibold mb-4">Step 04</h2>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Utilize Financial Tools and Resources</h2>
          <p className="font-thin">
            Access Financial Tools: Use tools to create and manage a budget, helping you track and control your spending.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-1 shadow-lg"></div>
      </div>

      <div className="w-full md:w-[30%] border-l-[1px] border-blue-700 p-5  mb-8 ">

        <h2 className="text-xl font-semibold mb-4">Step 05</h2>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Monitor Progress and Get Expert Advice</h2>
          <p className="font-thin">
            Check the Leaderboard: See how you rank against other users by tracking your progress on the leaderboard.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
      </div>

      <div className="w-full md:w-[30%] border-l-[1px] border-blue-700 p-5  mb-8 ">

        <h2 className="text-xl font-semibold mb-4">Step 06</h2>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Achieve Goals and Earn Rewards</h2>
          <p className="font-thin">
            Earn Rewards for Completing Modules: Receive rewards for completing modules and achieving milestones, motivating you to stay on track.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-300 shadow-lg"></div>
      </div>
    </div>
  </div>

  
</div>

<div className="text-center justify-center p-20">
    <h1 className="finwise-blue text-4xl font-bold mb-4 ">
      Meet our Supporters
    </h1>
    <p className="font-thin">
      At Finwise School, our success is fueled by the support and expertise of our valued partners.
    </p>
  </div>


      <div className="flex justify-center items-center space-x-10">
  <div className="border-2 p-8 border-black animate-spin-slow rounded-lg">
    <img src={inspire} className="h-40 w-60" alt="Inspire" />
  </div>

  <div className="border-2 p-8 border-black animate-spin-slow rounded-lg">
    <img src={barclays} className="h-40 w-60" alt="Barclays" />
  </div>

  <div className="border-2 p-8 border-black animate-spin-slow rounded-lg">
    <img src={univ} className="h-40 w-60" alt="University" />
  </div>
</div>


      <div className="flex flex-col items-center text-center p-10">
        <h1 className="finwise-blue text-4xl font-bold  mb-7 pt-16">
          Partner Portal
        </h1>
        <p className=" px-10 font-thin mb-14 text-justify">
          Our Partner Portal offers customized financial planning solutions
          tailored specifically for corporate clients. Collaborate with Finwise
          School to provide your employees with seamless access to exclusive
          tools and expert advice, empowering them to achieve their financial
          goals.
        </p>
        <div className="flex justify-center gap-9 mb-10">
          <img
            className="image1"
            src={left}
            height={500}
            width={500}
            alt="left"
          />
          <img
            className="image1"
            src={right}
            height={200}
            width={400}
            alt="right"
          />
        </div>
        <div className="border-t border-gray-300 w-full"></div>
      </div>

      <EarlyAccessTemplate/>

      {/* <div className="flex p-10">
        <div className="flex-1">
          <h1 className="finwise-blue text-4xl font-bold mb-4 ">
            Start Your Financial Journey Today
          </h1>
          <p className="text-justify pr-10 font-thin pb-10">
            Your path to financial freedom is just a click away. Whether you’re
            aiming to optimize your investments, create a solid savings plan, or
            receive expert financial advice, FinWise is here to guide you every
            step of the way. Take the first step towards achieving your
            financial goals—explore our innovative planning tools or connect
            with our team for personalized support tailored to your needs.
          </p>
        </div>
        <div className="flex items-center ml-10">
          <a
            href="#"
            className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-2 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300"
            style={{
              border: "5px solid",
              borderRadius: "12px",
              borderImage: "linear-gradient(90deg, #223876 0%, #3CB371 100%) 1",
            }}
          >
            Request Early Access
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;