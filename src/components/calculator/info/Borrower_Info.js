import React, { useState } from "react";

const MortgageBorrowerCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Mortgage Borrower Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Thinking of getting a mortgage? Our Mortgage Borrower Calculator helps you determine how much you can borrow based on your income and financial profile. This tool makes it easy to assess your loan eligibility and plan your finances.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use:</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter your <strong>Annual Income</strong>.</li>
        <li>Input your <strong>Monthly Expenses</strong>.</li>
        <li>Set the <strong>Interest Rate</strong> and <strong>Loan Tenure</strong>.</li>
        <li>Click <strong>Calculate</strong> to see how much you can borrow.</li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Why Use the Mortgage Borrower Calculator?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Plan Wisely:</strong> Estimate your borrowing capacity and monthly payments.</li>
        <li><strong>Compare Options:</strong> Adjust different parameters (loan tenure, interest rates) to choose the best mortgage option.</li>
        <li><strong>Smart Financial Decisions:</strong> Avoid over-borrowing and ensure you stay within your financial limits.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQ)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: How is the borrowing limit calculated?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: The calculator uses your income and expenses to estimate how much you can afford to repay.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: What factors affect the loan amount?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: Your income, expenses, interest rates, and loan tenure are the primary determinants.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        Make smarter mortgage decisions by understanding your borrowing capacity!
      </p>
    </div>
  );
};

export default MortgageBorrowerCalculatorInfo;
