import React, { useState } from 'react';

const ExtraPayments = ({ onCalculateExtraPayments }) => {
  const [extraPayment, setExtraPayment] = useState('');
  const [paymentInterval, setPaymentInterval] = useState('1');
  const [extraAnnualPayment, setExtraAnnualPayment] = useState('');
  const [paymentNo, setPaymentNo] = useState('1');

  const handleCalculate = () => {
    const extraPaymentValue = parseFloat(extraPayment) || 0;
    const paymentIntervalValue = parseInt(paymentInterval) || 1;
    const totalPayments = parseInt(paymentNo) || 1;

    // Call the parent function with the updated values
    onCalculateExtraPayments(extraPaymentValue, paymentIntervalValue, totalPayments);
  };

  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="text-lg font-bold">Extra Payments</h3>
      <div>
        <label className="block text-gray-700">Extra Payment ($)</label>
        <input
          type="number"
          value={extraPayment}
          onChange={(e) => setExtraPayment(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700">Payment Interval (Rows)</label>
        <input
          type="number"
          value={paymentInterval}
          onChange={(e) => setPaymentInterval(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700">Payment # (1-24)</label>
        <input
          type="number"
          value={paymentNo}
          onChange={(e) => setPaymentNo(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Calculate Extra Payments
      </button>
    </div>
  );
};

export default ExtraPayments;
