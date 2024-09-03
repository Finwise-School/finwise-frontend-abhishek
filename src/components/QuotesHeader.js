import React, { useState, useEffect } from 'react';

const QuotesHeader = () => {
  const quotes = [
    "✨ Personal finance is only 20% head knowledge. It’s 80% behavior!",
    "💸 The goal isn’t more money. The goal is living life on your terms.",
    "📈 Investment in knowledge pays the best interest. – Benjamin Franklin",
    "🗝️ Financial freedom is available to those who learn about it and work for it.",
    "📉 Don’t save what is left after spending, spend what is left after saving.",
    "🔑 The more you learn, the more you earn. – Warren Buffett",
    "💵 Wealth consists not in having great possessions, but in having few wants. – Epictetus",
    "📚 An investment in knowledge always pays the best interest.",
    "📈 Time is money. – Benjamin Franklin",
    "🧠 Budgeting isn’t about limiting yourself—it’s about making the things that excite you possible.",
    "💰 The best way to predict your future is to create it.",
    "💡 Money is a terrible master but an excellent servant. – P.T. Barnum",
    "🔍 Financial freedom is not a reward for a few, it’s a process for the many.",
    "🕒 The most powerful thing you can do is to make your money work for you.",
    "🚀 The secret to financial freedom and great wealth is a simple formula: earn more, spend less, and invest the difference.",
    "🌟 Your income is your greatest wealth-building tool.",
    "📊 The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    "💡 Investing in yourself is the best investment you will ever make.",
    "🎯 Budgeting is telling your money where to go instead of wondering where it went.",
    "💪 Financial success is not about how much money you make, but how much you keep."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        (prevIndex + 1) % quotes.length
      );
    }, 40000); 

    return () => clearInterval(intervalId); 
  }, [quotes.length]);

  return (
    <div className="w-full bg-white text-gray-800 text-center font-bold my-4">
      <span>{quotes[currentQuoteIndex]}</span>
      <hr className="h-0.5 my-2 bg-black mx-auto w-full" />
    </div>
  );
};

export default QuotesHeader;
