import React from 'react';

const PaymentSchedule = ({ schedule }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold">Payment Schedule</h3>
      <table className="min-w-full mt-4 border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Payment No</th>
            <th className="border border-gray-200 p-2">Payment Date</th>
            <th className="border border-gray-200 p-2">Interest Due</th>
            <th className="border border-gray-200 p-2">Payment Due</th>
            <th className="border border-gray-200 p-2">Extra Payments</th>
            <th className="border border-gray-200 p-2">Principal Paid</th>
            <th className="border border-gray-200 p-2">Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((payment) => (
            <tr key={payment.paymentNo}>
              <td className="border border-gray-200 p-2">{payment.paymentNo}</td>
              <td className="border border-gray-200 p-2">{payment.paymentDate}</td>
              <td className="border border-gray-200 p-2">{payment.interestDue}</td>
              <td className="border border-gray-200 p-2">{payment.paymentDue}</td>
              <td className="border border-gray-200 p-2">{payment.extraPayments}</td>
              <td className="border border-gray-200 p-2">{payment.principalPaid}</td>
              <td className="border border-gray-200 p-2">{payment.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSchedule;
