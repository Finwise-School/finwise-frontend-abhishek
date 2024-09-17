import React, { useState } from "react";

const GoalSipCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Goal SIP Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Plan your investments effectively with our Goal SIP Calculator! Estimate whether your monthly investments will meet your financial goals over a specified period.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the Goal SIP Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>
          <strong>Enter Your Investment Details:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Goal Amount:</strong> Input the total amount you wish to accumulate for your goal.</li>
            <li><strong>Monthly SIP Amount:</strong> Enter the amount you plan to invest each month.</li>
            <li><strong>Expected Annual Return:</strong> Specify the expected annual return rate on your investments (expressed as a percentage).</li>
            <li><strong>Investment Duration:</strong> Enter the number of years you plan to invest.</li>
          </ul>
        </li>
        <li>
          <strong>Calculate Your Investment Plan:</strong>
          <p className="ml-6">Click the 'Calculate' button. Our tool will process your inputs and provide an estimate of whether your SIP plan will meet your financial goal.</p>
        </li>
        <li>
          <strong>Review Your Results:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Future Value:</strong> The estimated amount accumulated at the end of the investment duration.</li>
            <li><strong>Shortfall/Excess:</strong> The difference between your goal amount and the estimated future value, indicating if you need to adjust your SIP amount or investment duration.</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the Goal SIP Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Plan Your Investments:</strong> Determine how much you need to invest monthly to achieve your financial goals within a specified time frame.</li>
        <li><strong>Track Your Progress:</strong> Get an estimate of how your SIP contributions will grow over time based on expected returns.</li>
        <li><strong>Adjust and Optimize:</strong> Explore different SIP amounts, durations, and return rates to find the optimal investment strategy for your goals.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQs)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: What is a Systematic Investment Plan (SIP)?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: SIP is an investment strategy where you invest a fixed amount regularly in mutual funds or other investment vehicles. It helps in disciplined investing and potentially benefits from market fluctuations through rupee cost averaging.
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
              A: The results are based on the inputs you provide and standard investment assumptions. Actual results may vary based on market conditions and changes in returns.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(2)}
          >
            <span>Q: Can I adjust the calculator for different investment scenarios?</span>
            <span>{faqIndex === 2 ? "-" : "+"}</span>
          </button>
          {faqIndex === 2 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes, you can adjust the monthly SIP amount, investment duration, and expected returns to explore various investment scenarios and strategies.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        For more assistance with your investment planning or to explore other financial tools, please contact us. Use our calculators to make informed investment decisions and work towards achieving your financial goals.
      </p>
    </div>
  );
};

export default GoalSipCalculatorInfo;
