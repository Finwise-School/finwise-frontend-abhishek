import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ title, description, imageSrc, redirect }) => (
  <div className="financial-tool-card flex overflow-hidden flex-col items-center p-5 bg-green-500 rounded-xl border border-solid border-neutral-800 w-full md:w-[30.94vw] max-w-[371px] min-w-[309px]">
    <div className="flex flex-col w-full">
      <Link to={redirect}>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </Link>
      <p className="mt-3 text-lg font-medium leading-7 text-blue-900 text-wrap">{description}</p>
    </div>
    <Link to={redirect}>
      <img loading="lazy" src={imageSrc} alt={title} className="object-contain mt-8 w-full rounded-xl aspect-[0.62]" />
    </Link>
  </div>
);

const FinancialTools = () => {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const updateActiveDot = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
      const gap = 16; // Gap between cards
      const scrollAmount = cardWidth + gap;
      const numCards = scrollContainer.children.length;
      const newActiveDot = Math.floor((scrollLeft + containerWidth / 2) / scrollAmount) % numCards;
      setActiveDot(newActiveDot);
    };

    const autoScroll = () => {
      // const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      // const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
      // const gap = 16; // Gap between cards
      // const scrollAmount = cardWidth + gap;

      // if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
      //   scrollContainer.scrollLeft = 0;
      // } else {
      //   scrollContainer.scrollLeft += scrollAmount;
      // }
      // updateActiveDot();
    };

    const scrollSpeed = 3000; // Time in milliseconds (3 seconds)
    const intervalId = setInterval(autoScroll, scrollSpeed);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const handleDotClick = (index) => {
    const scrollContainer = scrollContainerRef.current;
    const cardWidth = scrollContainer.children[index].offsetWidth;
    const gap = 16; // Gap between cards
    const scrollAmount = cardWidth + gap;
    scrollContainer.scrollLeft = index * scrollAmount;
    setActiveDot(index);
  };

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
    <section id='features' className="financial-tools-section flex flex-col items-center justify-center px-4 py-10 mt-25 md:px-0 md:mt-0">
      <style>
        {`
          .scroll-view {
            display: flex;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch; /* Enables smooth scrolling on iOS */
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            gap: 16px;
            white-space: nowrap; /* Prevent wrapping for horizontal scrolling */
          }
          .scroll-view::-webkit-scrollbar {
            display: none; /* Hide scrollbar for a cleaner look */
          }
          .financial-tool-card {
            flex: 0 0 auto;
            scroll-snap-align: center;
          }
          /* Mobile styles */
          @media (max-width: 764px) {
            .scroll-view {
              justify-content: flex-start; /* Align items to the start */
              width: 100%;
              padding: 0 8px; /* Optional padding */
            }
          }
          /* Desktop styles */
          @media (min-width: 765px) {
            .scroll-view {
              justify-content: center;
              gap: 16px;
              padding: 0; /* Remove padding on desktop */
            }
          }
          .dots-container {
            margin-top: 16px;
            display: flex;
            gap: 8px;
          }
          .dot {
            width: 10px;
            height: 10px;
            background-color: #bbb;
            border-radius: 50%;
            cursor: pointer;
          }
          .dot.active {
            background-color: #333;
          }
        `}
      </style>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-blue-900 mt-15 md:text-5xl max-w-full">10+ Financial Planning Tools</h2>
        <p className="mt-3.5 text-lg font-medium text-neutral-400 max-w-full">
          Tailor your journey to financial freedom with our exclusive financial planning tools.
        </p>
      </div>
      <div className="scroll-view mt-10 w-full" ref={scrollContainerRef}>
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
      <div className="dots-container">
        {tools.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeDot === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FinancialTools;
