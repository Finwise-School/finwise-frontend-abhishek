import React from 'react';
import fire from '../Homepage/Tools/fire.png';
import { Link } from 'react-router-dom';  // Use Link instead of redirect

const ToolCard = ({ title, description, imageSrc, redirect }) => (
  <div className="flex overflow-hidden flex-col items-center p-5 bg-green-500 rounded-xl border border-solid border-neutral-800 w-full md:w-[30.94vw] max-w-[371px] min-w-[309px]">
    <div className="flex flex-col w-full">
      <Link to={redirect}>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </Link>
      <p className="mt-3 text-lg font-medium leading-7 text-blue-900">{description}</p>
    </div>
    <Link to={redirect}>
      <img loading="lazy" src={imageSrc} alt={title} className="object-contain mt-8 w-full rounded-xl aspect-[0.62]" />
    </Link>
  </div>
);

const FinancialTools = () => {
  const tools = [
    {
      title: "F.I.R.E Tool",
      description: "Calculate your Financial Independence Retire Early (F.I.R.E) Number.",
      imageSrc: require('../Homepage/Tools/fire.png'),
      redirect: "/tools/fire"   
    },
    {
      title: "Goal SIP Tool",
      description: "Plan and implement your financial goals with our Goal SIP tool",
      imageSrc: require('../Homepage/Tools/goal_sip.png'),
      redirect: "/tools/goal-sip"
    },
    {
      title: "More Financial Tools",
      description: "Use over 10+ calculators and tools that help you with every financial decision.",
      imageSrc: require('../Homepage/Tools/calc_tools.png'),
      redirect: "/tools"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 mt-25 md:px-0 md:mt-0">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-blue-900 mt-15 md:text-5xl max-w-full">10+ Financial Planning Tools</h2>
        <p className="mt-3.5 text-lg font-medium text-neutral-400 max-w-full">
          Tailor your journey to financial freedom with our exclusive financial planning tools.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10 w-full">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default FinancialTools;