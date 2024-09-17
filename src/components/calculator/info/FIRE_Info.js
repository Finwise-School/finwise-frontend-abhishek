import React, { useState } from "react";

const FireCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About FIRE Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Achieve financial independence and plan for early retirement with our FIRE Calculator. This tool helps you estimate when you can retire based on your savings, investments, and spending habits.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the FIRE Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>
          <strong>Enter Your Financial Details:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Current Savings:</strong> Input the total amount of savings you currently have.</li>
            <li><strong>Annual Savings:</strong> Enter the amount you plan to save each year.</li>
            <li><strong>Annual Investment Return:</strong> Specify the expected annual return rate on your investments (expressed as a percentage).</li>
            <li><strong>Annual Spending:</strong> Input your estimated annual spending or expenses in retirement.</li>
            <li><strong>Current Age:</strong> Enter your current age.</li>
            <li><strong>Desired Retirement Age:</strong> Specify the age at which you want to retire.</li>
          </ul>
        </li>
        <li>
          <strong>Calculate Your FIRE Timeline:</strong>
          <p className="ml-6">Click the 'Calculate' button. Our tool will process your inputs and provide an estimate of the number of years required to reach financial independence and the age at which you can retire.</p>
        </li>
        <li>
          <strong>Review Your Results:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Years to Financial Independence:</strong> The estimated number of years until you reach your goal.</li>
            <li><strong>Retirement Age:</strong> The age at which you will achieve financial independence and be able to retire.</li>
            <li><strong>Total Savings Needed:</strong> The total amount of savings required to sustain your annual spending in retirement.</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the FIRE Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Estimate Your Timeline:</strong> Understand how long it will take to achieve your financial independence goals based on your current savings, investment returns, and spending habits.</li>
        <li><strong>Plan for Retirement:</strong> Get a clearer picture of when you can retire and how much you need to save to maintain your desired lifestyle.</li>
        <li><strong>Adjust Scenarios:</strong> Explore different savings rates, investment returns, and spending levels to see how they affect your path to financial independence.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQs)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: What is Financial Independence, Retire Early (FIRE)?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: FIRE is a financial movement aimed at achieving financial independence as early as possible to retire before the traditional retirement age. It involves aggressive saving, investing, and budgeting.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: How accurate are the results from the calculator?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: The results are based on the inputs you provide and standard financial assumptions. Actual results may vary based on changes in investment returns, inflation, and spending patterns.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(2)}
          >
            <span>Q: Can I use the calculator to plan for different retirement goals?</span>
            <span>{faqIndex === 2 ? "-" : "+"}</span>
          </button>
          {faqIndex === 2 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes, you can adjust the inputs to explore various retirement scenarios and goals, such as early retirement or adjusting your annual spending.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        For further assistance with your FIRE planning or other financial tools, please contact us. Use our calculators to take control of your financial future and work towards achieving financial independence.
      </p>
    </div>
  );
};

export default FireCalculatorInfo;
