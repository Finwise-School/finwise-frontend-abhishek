import React from 'react';
import { useNavigate } from 'react-router-dom';

const EarlyAccessTemplate = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/early-access');
  };

  return (
    <>
      <hr className="w-screen h-0.5 my-8 bg-gray-800 border-0 dark:bg-gray-800" />

      <div className="flex p-24 -mt-16 -mb-16">
        <div className="">
          <h1 className="finwise-blue text-4xl font-bold mb-4 -pt-16">
            Start Your Financial Journey Today
          </h1>
          <p
            className="justify-center text-left pr-10 font-thin pb-10 text-bold"
            style={{ color: 'black', padding: '3px' }}
          >
            Your path to financial freedom is just a click away. Whether you’re
            aiming to optimize your investments, create a solid savings plan, or
            receive expert financial advice, FinWise is here to guide you every
            step of the way. Take the first step towards achieving your
            financial goals—explore our innovative planning tools or connect
            with our team for personalized support tailored to your needs.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10">
          <button
            onClick={handleClick}
            className="inline-block text-[#263871] hover:text-green-500 mt-6 rounded-lg py-2 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300"
            style={{
              border: "5px solid",
              borderRadius: "12px",
              borderImage: "linear-gradient(90deg, #223876 0%, #3CB371 100%) 1",
            }}
          >
            Request Early Access
          </button>
        </div>
      </div>
    </>
  );
};

export default EarlyAccessTemplate;
