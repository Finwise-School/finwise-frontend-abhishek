import React from 'react';

const SummaryTable = () => {
  // Placeholder for dynamic values - later this can be replaced with props or state
  const summaryData = {
    yearsUntilPaidOff: 4.67,
    numberOfPayments: 56,
    lastPaymentDate: "01-08-2028",
    totalPayments: 13534.25,
    totalInterest: 3534.25,
  };

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold finwise-green">Loan Summary</h1>
          <p className="finwise-blue">Detailed Summary of Your Loan Repayment</p>
        </div>
        
        {/* Summary Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-green-100">
                <th className="text-left p-4 border-b border-gray-300 text-gray-700">Summary</th>
                <th className="text-right p-4 border-b border-gray-300 text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-4 border-b border-gray-300 text-gray-700">Years Until Paid Off</td>
                <td className="text-right p-4 border-b border-gray-300 text-gray-800 finwise-green font-semibold">{summaryData.yearsUntilPaidOff}</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-gray-300 text-gray-700">Number of Payments</td>
                <td className="text-right p-4 border-b border-gray-300 text-gray-800 finwise-green font-semibold">{summaryData.numberOfPayments}</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-gray-300 text-gray-700">Last Payment Date</td>
                <td className="text-right p-4 border-b border-gray-300 text-gray-800 finwise-green font-semibold">{summaryData.lastPaymentDate}</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-gray-300 text-gray-700">Total Payments</td>
                <td className="text-right p-4 border-b border-gray-300 text-gray-800 finwise-green font-semibold">&#163;{summaryData.totalPayments.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-gray-300 text-gray-700">Total Interest</td>
                <td className="text-right p-4 border-b border-gray-300 text-gray-800 finwise-green font-semibold">&#163;{summaryData.totalInterest.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryTable;
