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

      <div className="flex justify-between items-center p-24 -mt-16 -mb-16">
        <div className="flex-1 max-w-[60%]">
          <h1 className="text-gray-700 text-4xl font-bold mb-4">
            Start Your Financial Journey Today
          </h1>
          <p
            className="text-gray-500 font-light text-lg leading-relaxed"
            style={{ fontSize: '16px', color: 'grey', padding: '3px', width: '130%' }}
          >
            Your path to financial freedom is just a click away. Whether you’re
            aiming to optimize your investments, create a solid savings plan, or
            receive expert financial advice, FinWise is here to guide you every
            step of the way. Take the first step towards achieving your
            financial goals—explore our innovative planning tools or connect
            with our team for personalized support tailored to your needs.
          </p>
        </div>
        <div className="ml-10 flex-shrink-0">
          <button
            onClick={handleClick}
            className="inline-block text-[#263871] hover:text-green-500 mt-6 rounded-lg py-3 px-6 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300 revolving-border border border-gray-500"
            style={{ fontSize: '18px', color: 'grey' }}
          >
            Request Early Access
          </button>
        </div>
      </div>
    </>
  );
};

export default EarlyAccessTemplate;
