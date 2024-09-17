import React, { useState } from "react";

const CagrCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About CAGR (Compound Annual Growth Rate) Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Want to measure the growth rate of your investment? Our CAGR (Compound Annual Growth Rate) calculator helps you estimate the annual rate of return on your investment over a specified period. It provides insight into how much your investment has grown consistently over time.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the CAGR Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter the <strong>Initial Value</strong> of your investment.</li>
        <li>Input the <strong>Final Value</strong> of your investment.</li>
        <li>Specify the <strong>Time Period</strong> (in years).</li>
      </ol>
      <p className="mb-6 text-base text-gray-700">
        Our calculator will instantly calculate the CAGR, showing the average yearly growth your investment has experienced.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">What is CAGR?</h2>
      <p className="mb-6 text-base text-gray-700">
        CAGR represents the average annual growth rate of an investment over a specific period, assuming that profits are reinvested at the end of each period. It is a powerful tool for comparing different investments, particularly those that have varied performance across time.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the CAGR Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Track Growth:</strong> Understand how well your investment has performed over the years.</li>
        <li><strong>Compare Investments:</strong> Evaluate different investment options by comparing their CAGR values.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQ)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: What does CAGR mean?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: CAGR stands for Compound Annual Growth Rate and reflects the mean annual growth rate of an investment over a certain period.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: Why is CAGR important?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: It helps investors understand the growth rate of their investments and make informed financial decisions.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        Using this tool can help you gain better insight into your investments and optimize your portfolio for consistent returns.
      </p>
    </div>
  );
};

export default CagrCalculatorInfo;
