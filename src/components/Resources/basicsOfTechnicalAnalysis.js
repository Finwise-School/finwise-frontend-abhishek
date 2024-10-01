import React from "react";
import blues from "../../assets/images/books/analysis.png";
import { useNavigate } from 'react-router-dom';
import book from "../../assets/booksDownload/Blueprint.pdf"

const BasicsOfTechnicalAnalysis = () => {
  return (
    <div className=" p-[5%]">
      <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[4%] text-center">
       
        Basics of Technical Analysis
      </h1>
      <div className=" mt-[4%] mr-[%]">
      <div className=" flex justify-center">
      <img src={blues} className=" h-auto w-auto  " />
      </div>
      <p className="mb-[6%] mt-[4%] font-medium text-left text-black ">
        A **technical analysis book** delves into the study of price movements,
        chart patterns, and market indicators to help traders and investors
        forecast the future performance of financial instruments like stocks,
        commodities, or currencies. It typically starts by introducing various
        chart types, such as candlestick, bar, and line charts, to teach readers
        how to visualize and interpret market data. The book also covers a range
        of indicators and oscillators, including moving averages, the relative
        strength index (RSI), and MACD, providing detailed guidance on how these
        tools can help identify trends, overbought or oversold conditions, and
        potential entry or exit points. Readers learn about support and
        resistance levels, key price points where markets tend to reverse or
        consolidate, and how to draw trendlines to follow market direction.
        Additionally, the book explains how to recognize classic chart patterns
        like head and shoulders, triangles, and flags, which often signal market
        continuations or reversals. Volume analysis is another key focus,
        helping traders confirm the strength of price movements. Lastly, the
        book emphasizes risk management strategies, such as setting stop-loss
        orders, to minimize potential losses and protect gains, making it an
        essential resource for anyone looking to navigate the complexities of
        financial markets.
      </p>
      <div className="flex justify-center mr-[4%]">
      <div className="mt-6 lg:mt-0 lg:ml-10">
      <button
        // onClick={handleClick}
        className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
        style={{
          border: '5px solid',
          borderRadius: '12px',
          borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
        }}
      >
       <a href="" download={book}>Download Now</a>
      </button>
    </div>
      </div>
      </div>

    </div>
  );
};

export default BasicsOfTechnicalAnalysis;
