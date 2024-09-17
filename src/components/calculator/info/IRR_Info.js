import React, { useState } from "react";

const IrrCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Internal Rate of Return (IRR) Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Welcome to the Finwise School IRR Calculator! This tool helps you assess the profitability of your investments by calculating the Internal Rate of Return (IRR). Understanding IRR can guide you in making informed financial decisions.
      </p>
      <h2 className="text-xl font-semibold mb-4 finwise-green">What is IRR?</h2>
      <p className="mb-6 text-base text-gray-700">
        The Internal Rate of Return (IRR) is a key financial metric used to evaluate the potential profitability of an investment. It is the discount rate that makes the net present value (NPV) of all future cash flows from the investment equal to zero. Essentially, IRR represents the annualized effective compounded return rate.
      </p>
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use Our IRR Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter Your Investment Details:
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Initial Investment Amount:</strong> Input the amount of money you are investing initially.</li>
            <li><strong>Cash Flows:</strong> Enter the expected cash inflows for each period. These could be annual returns, monthly earnings, or other periodic income.</li>
          </ul>
        </li>
        <li>Calculate IRR:
          <p className="ml-6">Click on the 'Calculate' button. Our tool will process your data and determine the IRR based on the cash flows you provided.</p>
        </li>
        <li>Review Your Results:
          <p className="ml-6">Once the calculation is complete, review the IRR value displayed. This percentage indicates the expected annual return on your investment.</p>
        </li>
      </ol>
      <h2 className="text-xl font-semibold mb-4 finwise-green">Why Use the IRR Calculator?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Evaluate Investment Opportunities:</strong> IRR helps you compare different investment opportunities and choose the one with the highest potential return.</li>
        <li><strong>Understand Profitability:</strong> By calculating IRR, you gain insights into how profitable your investment is compared to other options or benchmarks.</li>
        <li><strong>Make Informed Decisions:</strong> Accurate IRR calculations assist in making better financial decisions by forecasting potential returns.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4 finwise-green">Example Calculation</h2>
      <p className="mb-6 text-base text-gray-700">
        Suppose you invest $10,000 in a project and expect to receive $2,500 annually for 5 years. Input these values into the calculator:
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li><strong>Initial Investment:</strong> $10,000</li>
          <li><strong>Annual Cash Inflows:</strong> $2,500 each year for 5 years</li>
        </ul>
        The calculator will compute the IRR, providing you with the annual return rate for your investment.
      </p>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQ)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: How is IRR different from ROI?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: While Return on Investment (ROI) provides a simple percentage of profit compared to the initial investment, IRR takes into account the time value of money, offering a more comprehensive view of investment performance.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: Can I use this calculator for different investment periods?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes, the IRR Calculator accommodates various time periods. Just enter the appropriate cash flows for each period.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(2)}
          >
            <span>Q: What if I have irregular cash flows?</span>
            <span>{faqIndex === 2 ? "-" : "+"}</span>
          </button>
          {faqIndex === 2 && (
            <p className="mt-2 text-base text-gray-700">
              A: Our calculator can handle irregular cash flows. Simply input the amounts for each period as they occur.
            </p>
          )}
        </div>
      </div>
      <p className="text-base text-gray-700">
        For any additional questions or assistance, feel free to contact us. Explore our tools and enhance your financial planning today!
      </p>
    </div>
  );
};

export default IrrCalculatorInfo;
