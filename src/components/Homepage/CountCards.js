import React from 'react';

const CountCards = () => {
  return (
    <div className="flex space-x-4 mt-20">
      <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-60 h-32 flex-shrink-0 flex flex-col justify-center">
        <div className="text-3xl font-bold">10+</div>
        <div className="mt-2 text-sm">Financial Tools</div>
      </div>
      <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-60 h-32 flex-shrink-0 flex flex-col justify-center">
        <div className="text-3xl font-bold">100+</div>
        <div className="mt-2 text-sm">Modules Completed</div>
      </div>
      <div className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-60 h-32 flex-shrink-0 flex flex-col justify-center">
        <div className="text-3xl font-bold">16+</div>
        <div className="mt-2 text-sm">Community Members</div>
      </div>
    </div>
  );
};

export default CountCards;
