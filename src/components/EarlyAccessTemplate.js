import React from 'react';
import { useNavigate } from 'react-router-dom';

const EarlyAccessTemplate = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/early-access');
  };

  const buttonStyles = 'inline-block text-[#263871] hover:text-green-500 font-bold mt-6 lg:mt-0 rounded-lg py-3 px-6 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300 revolving-border border border-gray-500';

  return (
    <div className='flex flex-col bg-white max-md:pb-24'>
      <hr className="w-screen h-0.5 my-8 bg-gray-800 border-0 dark:bg-gray-800" />

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-8 lg:p-24 -mt-16 -mb-16">
        <div className="flex-1 max-w-full lg:max-w-[70%] mb-6 lg:mb-0 text-center lg:text-left">
          <h1 className="finwise-blue text-4xl font-semibold mb-4 mt-4 md:mt-0">
            Start Your Financial Journey Today
          </h1>
          <p className="text-gray-500 font-light text-lg leading-relaxed lg:text-base lg:mr-0 mr-2">
            Your path to financial freedom is just a click away. Whether you’re
            aiming to optimize your investments, create a solid savings plan, or
            receive expert financial advice, FinWise is here to guide you every
            step of the way. Take the first step towards achieving your
            financial goals—explore our innovative planning tools or connect
            with our team for personalized support tailored to your needs.
          </p>
        </div>
        <div className="flex-shrink-0 text-center w-full lg:w-auto">
          <button
            onClick={handleClick}
            className={buttonStyles}
          >
            Request Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessTemplate;
