import React from 'react';
import CountUp from 'react-countup';

const CountCards = () => {
  return (
    <div className="mt-14 ml-10">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* First row: Two smaller cards */}
        <div className="flex flex-col space-y-4">
          <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full h-32 flex-shrink-0 flex flex-col justify-center">
            <div className="text-3xl font-bold">
              <CountUp end={10} suffix="+" duration={4} />
            </div>
            <div className="mt-2 text-sm">Financial Tools</div>
          </div>
          <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full h-32 flex-shrink-0 flex flex-col justify-center">
            <div className="text-3xl font-bold">
              <CountUp end={100} suffix="+" duration={4} />
            </div>
            <div className="mt-2 text-sm">Modules Completed</div>
          </div>
        </div>
        {/* Second row: Larger card */}
        <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full h-32 flex-shrink-0 flex flex-col justify-center mt-4">
          <div className="text-3xl font-bold">
            <CountUp end={16} suffix="+" duration={4} />
          </div>
          <div className="mt-2 text-sm">Community Members</div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row space-x-4">
        <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full md:w-60 h-32 flex-shrink-0 flex flex-col justify-center">
          <div className="text-3xl font-bold">
            <CountUp end={10} suffix="+" duration={4} />
          </div>
          <div className="mt-2 text-sm">Financial Tools</div>
        </div>
        <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full md:w-60 h-32 flex-shrink-0 flex flex-col justify-center">
          <div className="text-3xl font-bold">
            <CountUp end={100} suffix="+" duration={4} />
          </div>
          <div className="mt-2 text-sm">Modules Completed</div>
        </div>
        <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full md:w-60 h-32 flex-shrink-0 flex flex-col justify-center">
          <div className="text-3xl font-bold">
            <CountUp end={16} suffix="+" duration={4} />
          </div>
          <div className="mt-2 text-sm">Community Members</div>
        </div>
      </div>
    </div>
  );
};

export default CountCards;
