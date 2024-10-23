import React, { useState } from "react";

const CreditCardPaymentCalculatorInfo = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Credit Card Payment Calculators</h1>
      <p className="mb-6 text-base text-gray-700">
        Managing credit card payments can be challenging. Our Credit Card Payment Calculators help you evaluate your credit card debt in two distinct ways:
        <strong> Monthly Repayments Calculator</strong> and <strong>Pay Off Calculator</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Monthly Repayments Calculator</h2>
      <p className="mb-6 text-base text-gray-700">
        The Monthly Repayments Calculator assists you in determining how much you need to pay each month to pay off your credit card balance within a specified timeframe. 
        This tool provides insights into your monthly payments, total interest, and overall cost.
      </p>
      <h3 className="font-semibold mb-4">How to Use the Monthly Repayments Calculator:</h3>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter your <strong>Credit Card Balance</strong>.</li>
        <li>Input the <strong>Interest Rate (APR)</strong>.</li>
        <li>Specify the <strong>Desired Months to be Debt Free</strong>.</li>
      </ol>
      <p className="mb-6 text-base text-gray-700">
        The calculator will instantly display the monthly payment required, total interest, and total cost, helping you make informed financial decisions.
      </p>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Pay Off Calculator</h2>
      <p className="mb-6 text-base text-gray-700">
        The Pay Off Calculator is designed to help you assess how quickly you can pay off your credit card debt. 
        By inputting your current balance and interest rate, you can explore different payment strategies and their implications on your overall debt.
      </p>
      <h3 className="font-semibold mb-4">How to Use the Pay Off Calculator:</h3>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter your <strong>Credit Card Balance</strong>.</li>
        <li>Input the <strong>Interest Rate (APR)</strong>.</li>
        <li>Specify a <strong>Monthly Payment Amount</strong> you plan to make.</li>
      </ol>
      <p className="mb-6 text-base text-gray-700">
        The calculator will calculate the number of months required to pay off your balance, the total interest paid, and the overall cost of your payments.
      </p>

      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQ)</h2>
      <div className="mb-6">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-2">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(0)}
          >
            <span>Q: What is the difference between the two calculators?</span>
            <span>{faqIndex === 0 ? "-" : "+"}</span>
          </button>
          {faqIndex === 0 && (
            <p className="mt-2 text-base text-gray-700">
              A: The Monthly Repayments Calculator helps you find out how much to pay each month to eliminate debt, while the Pay Off Calculator shows you how long it will take to pay off your debt based on a specified monthly payment.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-2 mt-4">
          <button
            className="w-full text-left text-base font-bold text-finwise-green focus:outline-none flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            <span>Q: Can these calculators help me save on interest?</span>
            <span>{faqIndex === 1 ? "-" : "+"}</span>
          </button>
          {faqIndex === 1 && (
            <p className="mt-2 text-base text-gray-700">
              A: Yes, by understanding your payment options and how they affect interest over time, you can create a strategy that minimizes your total interest paid.
            </p>
          )}
        </div>
      </div>

      <p className="text-base text-gray-700">
        Using these tools empowers you to manage your credit card payments more effectively, leading to financial stability and peace of mind.
      </p>
    </div>
  );
};

export default CreditCardPaymentCalculatorInfo;
