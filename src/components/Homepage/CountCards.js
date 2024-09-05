import React from 'react';
import CountUp from 'react-countup';

const CountCards = () => {
    return (
        <div className="mt-14">
            {/* Mobile Layout */}
            <div className="block md:hidden grid-for-calci grid-cols-2 gap-4">
                {/* First two smaller cards */}
                <div className="finwise-green-bg text-center text-white p-6 rounded-lg shadow-lg h-32 flex-shrink-0 flex flex-col justify-center">
                    <div className="text-3xl font-bold">
                        <CountUp end={10} suffix="+" duration={4} />
                    </div>
                    <div className="mt-2 text-sm">Financial Tools</div>
                </div>
                <div className="finwise-green-bg text-center text-white p-6 rounded-lg shadow-lg h-32 flex-shrink-0 flex flex-col justify-center">
                    <div className="text-3xl font-bold">
                        <CountUp end={100} suffix="+" duration={4} />
                    </div>
                    <div className="mt-2 text-sm">Modules Completed</div>
                </div>
                {/* The third card spans two columns on mobile */}
                <div className="finwise-green-bg text-center text-white p-6 rounded-lg shadow-lg h-32 flex-shrink-0 flex flex-col justify-center col-span-2">
                    <div className="text-3xl font-bold">
                        <CountUp end={16} suffix="+" duration={4} />
                    </div>
                    <div className="mt-2 text-sm">Community Members</div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-row space-x-4">
                <div id="count-card" className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full md:w-60 h-32 flex-shrink-0 flex flex-col justify-center">
                    <div className="text-3xl font-bold">
                        <CountUp end={10} suffix="+" duration={4} />
                    </div>
                    <div className="mt-2 text-sm">Financial Tools</div>
                </div>
                <div id="count-card" className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full md:w-60 h-32 flex-shrink-0 flex flex-col justify-center">
                    <div className="text-3xl font-bold">
                        <CountUp end={100} suffix="+" duration={4} />
                    </div>
                    <div className="mt-2 text-sm">Modules Completed</div>
                </div>
                <div id="count-card" className="finwise-green-bg text-white p-6 rounded-lg shadow-lg w-full md:w-60 h-32 flex-shrink-0 flex flex-col justify-center">
                    <div className="text-3xl font-bold">
                        <CountUp end={16} suffix="+" duration={4} />
                    </div>
                    <div className="mt-2 text-sm">Community Members</div>
                </div>
            </div>
            {/* Scoped CSS using styled-jsx */}
            <style jsx>{`
        @media (min-width: 1204px) {
          #count-card {
            width: 13rem;
          }
        }
        @media (min-width: 1304px) {
            #count-card {
                width: 15rem;
            }
        }
      `}</style>
        </div>
    );
};

export default CountCards;
