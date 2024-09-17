import React, { useState } from "react";

const FdCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">Fixed Deposit Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Use our Fixed Deposit Calculator to estimate the future value of your FD investments. This tool will help you calculate the maturity amount and interest earned based on your investment details.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the Fixed Deposit Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>
          <strong>Enter Your Investment Details:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Principal Amount:</strong> Input the initial amount you plan to invest in the fixed deposit.</li>
            <li><strong>Annual Interest Rate:</strong> Enter the annual interest rate offered on your deposit (expressed as a percentage).</li>
            <li><strong>Investment Duration:</strong> Specify the duration of the fixed deposit in years.</li>
            <li><strong>Compounding Frequency:</strong> Choose how often the interest is compounded (e.g., annually, semi-annually, quarterly, or monthly).</li>
          </ul>
        </li>
        <li>
          <strong>Calculate Your Maturity Value:</strong>
          <p className="ml-6">Click the 'Calculate' button. Our tool will process your inputs and provide an estimate of the maturity value of your fixed deposit.</p>
        </li>
        <li>
          <strong>Review Your Results:</strong>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Maturity Value:</strong> The total amount you will receive at the end of the investment period, including interest.</li>
            <li><strong>Total Interest Earned:</strong> The interest earned on your principal amount over the investment duration.</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the Fixed Deposit Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Estimate Returns:</strong> Get a clear idea of how much your fixed deposit will grow over time based on your investment details.</li>
        <li><strong>Compare Options:</strong> Easily compare different fixed deposit options by adjusting the principal amount, interest rate, and duration.</li>
        <li><strong>Plan Your Finances:</strong> Use the calculator to plan for future financial goals or evaluate the benefits of different investment strategies.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQs)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: What is a Fixed Deposit (FD)?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: A Fixed Deposit is a financial instrument where you invest a lump sum amount for a fixed period at a predetermined interest rate. It provides a safe investment option with guaranteed returns.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: How is the maturity value calculated?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: The maturity value is calculated based on the principal amount, annual interest rate, duration of the deposit, and compounding frequency. The formula takes into account how often the interest is compounded.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(2)}
          >
            <span>Q: Can I adjust the compounding frequency?</span>
            <span>{faqIndex === 2 ? "-" : "+"}</span>
          </button>
          {faqIndex === 2 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes, you can select the compounding frequency (annually, semi-annually, quarterly, or monthly) to see how it affects the maturity value and interest earned.
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(3)}
          >
            <span>Q: Are the results from the calculator accurate?</span>
            <span>{faqIndex === 3 ? "-" : "+"}</span>
          </button>
          {faqIndex === 3 && (
            <p className="mt-2 text-base text-gray-700">
              A: The results are based on the inputs you provide and standard financial assumptions. Actual returns may vary based on changes in interest rates and other factors.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        For more information or assistance with your fixed deposit investments, please contact us. Utilize our calculators to make informed financial decisions and maximize your investment returns.
      </p>
    </div>
  );
};

export default FdCalculatorInfo;
