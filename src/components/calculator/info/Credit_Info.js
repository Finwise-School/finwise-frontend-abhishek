import React, { useState } from "react";

const CreditCard_Info = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white">
      {/* Pay Off Calculator Section */}
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Pay Off Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Welcome to Finwise School’s Pay Off Calculator! This tool is designed to help you take control of your credit card debt by providing a clear roadmap to repayment.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the Pay Off Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Credit Card Balance:</strong> Enter the outstanding balance on your credit card.</li>
        <li><strong>Interest Rate (APR):</strong> Input your card’s annual interest rate.</li>
        <li><strong>Monthly Payment:</strong> Specify your monthly payment amount.</li>
      </ol>
      <p className="mb-6 text-base text-gray-700">
        With one click, you’ll see:
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>Months to Pay Off:</strong> How long it will take to pay off your balance.</li>
          <li><strong>Total Interest Paid:</strong> The total interest you’ll pay over time.</li>
          <li><strong>Total Amount Paid:</strong> The complete cost of your repayment plan, including both principal and interest.</li>
        </ul>
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the Pay Off Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Smart Financial Decisions:</strong> Visualize how different monthly payments can shorten your debt timeline and save on interest.</li>
        <li><strong>Debt-Free Planning:</strong> Discover how adjustments in your monthly payment affect your overall debt duration and costs.</li>
        <li><strong>Budgeting Assistance:</strong> Align your financial goals by adjusting payments to fit your budget and priorities.</li>
      </ul>
      <h2 className="text-base text-gray-700 mb-8">Our Pay Off Calculator empowers you to make informed, proactive decisions about managing and eliminating credit card debt. Try it out to see how small changes in your payments can lead to big savings!</h2>

      {/* Monthly Repayment Calculator Section */}
      <h1 className="text-2xl font-bold mb-4 finwise-green">About Monthly Repayment Calculator</h1>
      <p className="mb-6 text-base text-gray-700">
        Welcome to Finwise School’s Monthly Repayment Calculator! This tool helps you plan manageable monthly payments to pay off your credit card debt within a specific timeframe.
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the Monthly Repayment Calculator</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Credit Card Balance:</strong> Enter the outstanding amount on your card.</li>
        <li><strong>Interest Rate (APR):</strong> Input your card’s annual percentage rate.</li>
        <li><strong>Repayment Period:</strong> Set the number of months you plan to pay off the debt.</li>
      </ol>
      <p className="mb-6 text-base text-gray-700">
        Results Summary:
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>Monthly Payment:</strong> The amount to be paid each month.</li>
          <li><strong>Total Interest:</strong> The interest cost over the repayment period.</li>
          <li><strong>Total Cost:</strong> The total expense, including principal and interest.</li>
        </ul>
      </p>
      
      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the Monthly Repayment Calculator</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li><strong>Goal-Oriented Planning:</strong> Tailor monthly payments to achieve a debt-free timeline that fits your financial goals.</li>
        <li><strong>Interest Savings:</strong> See how adjustments in repayment time affect the interest paid, helping you minimize costs.</li>
        <li><strong>Effective Budgeting:</strong> Calculate a monthly amount that aligns with your income and financial priorities.</li>
      </ul>
      <h2 className="text-base text-gray-700 mb-8">This calculator is perfect for taking charge of your financial future and working towards debt elimination!</h2>

    </div>
  );
};

export default CreditCard_Info;
