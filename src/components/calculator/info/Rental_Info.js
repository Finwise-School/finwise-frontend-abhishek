import React, { useState } from "react";

const RentalYieldCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Rental Yield Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Maximize your real estate returns with our Rental Yield Calculator! Whether you’re an investor or homeowner, this tool helps you estimate the annual percentage return on your rental property.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use:</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter your <strong>Property Value</strong>.</li>
        <li>Input your <strong>Annual Rental Income</strong>.</li>
        <li>Press <strong>Calculate</strong> to discover your rental yield.</li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 finwise-green">What is Rental Yield?</h2>
      <p className="mb-6 text-base text-gray-700">
        Rental yield measures how much you earn from your property as a percentage of its market value. It’s a key metric for evaluating investment performance.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the Rental Yield Calculator:</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Investment Analysis:</strong> Quickly assess the profitability of rental properties.</li>
        <li><strong>Risk Assessment:</strong> Compare different real estate options to minimize risks and maximize returns.</li>
        <li><strong>Financial Planning:</strong> Use this tool to strategize future property purchases based on rental income potential.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQ)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: What’s a Good Rental Yield?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: A typical range for rental yield is 5%-8%, but this varies based on location and market conditions.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: Can I include maintenance costs?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes! For a more accurate result, deduct expenses like repairs and property management from your rental income.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        Plan your property investments wisely with clear insights into potential returns!
      </p>
    </div>
  );
};

export default RentalYieldCalculatorInfo;
