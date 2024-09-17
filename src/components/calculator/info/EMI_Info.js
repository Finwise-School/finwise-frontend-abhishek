import React from "react";

const EmiCalculatorInfo = () => {
  return (
    <div className="mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 finwise-green">About EMI Calcualtor</h1>
      <p className="mb-6 text-base text-gray-700">
        Planning a loan repayment? Our EMI (Equated Monthly Installment) calculator helps you estimate your
        monthly payments with ease. Simply enter the loan amount, interest rate,
        and tenure, and get a detailed breakdown of your EMI, total interest
        payable, and overall loan cost.
      </p>
      <h2 className="text-xl font-semibold mb-4 finwise-green">How to Use the EMI Calculator:</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>Enter your Loan Amount.</li>
        <li>Specify the Interest Rate your bank or lender is offering.</li>
        <li>Select the Tenure of the loan in months or years.</li>
      </ol>
      <p className="mb-6 text-base text-gray-700">
        Once you input these values, our EMI calculator will instantly compute
        your monthly installment, giving you a clear picture of your financial
        commitment.
      </p>
      <h2 className="text-xl font-semibold mb-4 finwise-green">What is EMI?</h2>
      <p className="mb-6 text-base text-gray-700">
        EMI refers to the fixed monthly payment you make toward repaying your
        loan. Each EMI consists of both principal and interest components, which
        can vary depending on the loan structure. Our calculator helps you
        understand how much of your monthly payment goes toward interest versus
        paying down the principal.
      </p>
      <h2 className="text-xl font-semibold mb-4 finwise-green">Benefits of Using the EMI Calculator:</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>
          <strong>Financial Planning:</strong> Understand how much you need to
          allocate for loan repayment each month.
        </li>
        <li>
          <strong>Compare Loan Options:</strong> Experiment with different loan
          amounts, interest rates, or tenure to find the most affordable option
          for you.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-4 finwise-green">Frequently Asked Questions (FAQ):</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-base text-gray-700">
        <li>
          <strong>What is an EMI?</strong> EMI stands for Equated Monthly
          Installment, which is the fixed payment you make each month toward
          loan repayment.
        </li>
        <li>
          <strong>Can I use this calculator for home or car loans?</strong> Yes!
          Our EMI calculator works for all types of loans, whether you're
          financing a home, car, or personal expenses.
        </li>
      </ul>
      <p className="text-base text-gray-700">
        By using this tool, you can plan your loans smartly and stay financially
        secure throughout your repayment journey.
      </p>
    </div>
  );
};

export default EmiCalculatorInfo;
