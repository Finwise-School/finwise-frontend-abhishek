import React from "react";
import blues from "../../assets/images/books/analysis.png";
import Download from "./download";

const BasicsOfTechnicalAnalysis = () => {
  return (
    <div className=" p-[5%]">
      <h1 className=" text-center text-black text-3xl ">
        {" "}
        Basics of Technical Analysis
      </h1>
      <div className=" grid grid-cols-2 mb-[5%] mt-[5%]">
      <div className=" flex justify-center">
      <img src={blues} className=" h-auto w-auto  " />
      </div>
      <p className="">
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
      <div className="flex justify-center">
        <Download className=" " />
      </div>
      </div>

    </div>
  );
};

export default BasicsOfTechnicalAnalysis;
