import React from 'react';
import CountUp from 'react-countup';

const CountCards = () => {
  return (
    <div className="flex space-x-4 mt-14">
      <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-60 h-32 flex-shrink-0 flex flex-col justify-center">
        <div className="text-3xl font-bold">
          <CountUp end={10} suffix="+" duration={2} />
        </div>
        <div className="mt-2 text-sm">Financial Tools</div>
      </div>
      <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-60 h-32 flex-shrink-0 flex flex-col justify-center">
        <div className="text-3xl font-bold">
          <CountUp end={100} suffix="+" duration={2} />
        </div>
        <div className="mt-2 text-sm">Modules Completed</div>
      </div>
      <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-60 h-32 flex-shrink-0 flex flex-col justify-center">
        <div className="text-3xl font-bold">
          <CountUp end={16} suffix="+" duration={2} />
        </div>
        <div className="mt-2 text-sm">Community Members</div>
      </div>
    </div>
  );
};

export default CountCards;
