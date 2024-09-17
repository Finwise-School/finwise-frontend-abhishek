import React, { useState } from "react";

const SipCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About SIP Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Plan your systematic investment with our SIP Calculator! This tool helps you estimate the future value of your investments based on regular contributions, so you can achieve your financial goals with ease.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the SIP Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>
          <strong>Enter Your Investment Details:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Monthly SIP Amount:</strong> Input the amount you plan to invest each month.</li>
            <li><strong>Investment Duration:</strong> Specify the number of years you intend to invest.</li>
            <li><strong>Expected Annual Return:</strong> Enter the anticipated annual return rate on your investments (expressed as a percentage).</li>
          </ul>
        </li>
        <li>
          <strong>Calculate Your Future Value:</strong>
          <p className="ml-6">Click the 'Calculate' button. Our tool will process your inputs and provide an estimate of the future value of your investments.</p>
        </li>
        <li>
          <strong>Review Your Results:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Future Value:</strong> The estimated amount accumulated at the end of the investment duration.</li>
            <li><strong>Total Investment:</strong> The total amount you will have invested over the entire period.</li>
            <li><strong>Total Returns:</strong> The difference between the future value and the total investment, indicating your gains.</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the SIP Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Estimate Growth:</strong> Determine how much your regular SIP investments will grow over time based on your expected returns.</li>
        <li><strong>Plan Your Savings:</strong> Help plan and manage your investments effectively to reach your financial goals.</li>
        <li><strong>Evaluate Performance:</strong> Compare different SIP amounts, durations, and return rates to find the best investment strategy for your needs.</li>
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
              A: SIP is an investment method where you contribute a fixed amount regularly to mutual funds or other investment options. It helps in building wealth through disciplined investing and benefits from market fluctuations over time.
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
              A: The results are based on the inputs you provide and standard investment assumptions. Actual returns may vary based on market conditions and changes in returns.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(2)}
          >
            <span>Q: Can I adjust the calculator for different scenarios?</span>
            <span>{faqIndex === 2 ? "-" : "+"}</span>
          </button>
          {faqIndex === 2 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes, you can modify the monthly investment amount, investment duration, and expected returns to explore different investment outcomes and strategies.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        For additional support with your investment planning or to use other financial tools, please contact us. Utilize our calculators to make informed investment decisions and work towards achieving your financial objectives.
      </p>
    </div>
  );
};

export default SipCalculatorInfo;
