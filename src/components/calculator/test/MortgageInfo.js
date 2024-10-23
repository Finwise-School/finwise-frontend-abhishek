import React, { useState } from 'react';
import PaymentSchedule from './Sheet'; // Ensure you have this component created for displaying the schedule

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('10000');
  const [interestRate, setInterestRate] = useState('12.75');
  const [termLength, setTermLength] = useState('9');
  const [firstPaymentDate, setFirstPaymentDate] = useState('');
  const [compoundPeriod, setCompoundPeriod] = useState('Monthly');
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [extraPayment, setExtraPayment] = useState('');
  const [paymentInterval, setPaymentInterval] = useState('1');
  const [startAtPaymentNo, setStartAtPaymentNo] = useState('1');
  const [result, setResult] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [totalPayments, setTotalPayments] = useState(0);
  const [totalPaymentsWithExtras, setTotalPaymentsWithExtras] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [yearsUntilPaidOff, setYearsUntilPaidOff] = useState(0);
  const [numberOfPayments, setNumberOfPayments] = useState(0);
  const [lastPaymentDate, setLastPaymentDate] = useState('');

  const paymentFrequencyMapping = {
    Monthly: 12,
    'Semi-Monthly': 24,
    'Bi-Weekly': 26,
    Weekly: 52,
  };

  const compoundPeriodMapping = {
    Monthly: 12,
    'Semi-Annually': 2,
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const validateForm = () => {
    return loanAmount && interestRate && termLength && firstPaymentDate;
  };

  const calculateEMI = (principal, rate, totalPayments) => {
    return (principal * (rate * Math.pow(1 + rate, totalPayments))) / (Math.pow(1 + rate, totalPayments) - 1);
  };

  const calculatePayment = () => {
    if (!validateForm()) {
      setResult({ payment: "Invalid Input" });
      setSchedule([]);
      setTotalPayments(0); 
      setTotalPaymentsWithExtras(0);
      setTotalInterest(0); 
      setYearsUntilPaidOff(0); 
      setNumberOfPayments(0); 
      setLastPaymentDate(''); 
      return;
    }

    const P = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const years = parseInt(termLength);

    if (isNaN(P) || isNaN(annualInterestRate) || isNaN(years) || P <= 0 || annualInterestRate < 0 || years <= 0) {
      setResult({ payment: "Invalid Input" });
      setSchedule([]);
      setTotalPayments(0); 
      setTotalPaymentsWithExtras(0);
      setTotalInterest(0); 
      setYearsUntilPaidOff(0); 
      setNumberOfPayments(0); 
      setLastPaymentDate(''); 
      return;
    }

    const periodsPerYear = paymentFrequencyMapping[paymentFrequency];
    const compoundingPeriodsPerYear = compoundPeriodMapping[compoundPeriod];
    const totalPaymentsCount = years * periodsPerYear;

    // Calculate periodic interest rate
    const periodicInterestRate = (Math.pow(1 + (annualInterestRate / compoundingPeriodsPerYear), compoundingPeriodsPerYear / periodsPerYear) - 1);

    // Calculate EMI
    const EMI = calculateEMI(P, periodicInterestRate, totalPaymentsCount);

    let scheduleData = [];
    let balance = P;
    let paymentDate = new Date(firstPaymentDate);
    let totalPaymentsSum = 0;
    let totalPaymentsSumWithExtras = 0;

    const getPaymentDateIncrement = () => {
      switch (paymentFrequency) {
        case 'Monthly':
          return 1; 
        case 'Semi-Monthly':
          return 0.5; 
        case 'Bi-Weekly':
          return 14 / 30; 
        case 'Weekly':
          return 7 / 30; 
        default:
          return 1;
      }
    };

    const incrementPaymentDate = (date, incrementInMonths) => {
      date.setMonth(date.getMonth() + Math.floor(incrementInMonths));
      const remainderDays = (incrementInMonths - Math.floor(incrementInMonths)) * 30; 
      date.setDate(date.getDate() + Math.round(remainderDays));
    };

    let extraPaymentAmount = parseFloat(extraPayment) || 0;
    const startPaymentNo = parseInt(startAtPaymentNo) || 1;

    for (let i = 1; balance > 0; i++) {
      const interestDue = balance * periodicInterestRate;
      const principalPaid = EMI - interestDue;
      const totalPayment = EMI;

      // Adjust balance with EMI and check for extra payments
      if (i >= startPaymentNo && (i - startPaymentNo) % parseInt(paymentInterval) === 0) {
        balance -= extraPaymentAmount; 
      }

      balance -= principalPaid;

      if (balance < 0) {
        balance = 0; 
      }

      // Calculate the total payments sum
      if (i >= startPaymentNo) {
        totalPaymentsSum += (interestDue + principalPaid);
        totalPaymentsSumWithExtras += (interestDue + principalPaid + (i >= startPaymentNo && (i - startPaymentNo) % parseInt(paymentInterval) === 0 ? extraPaymentAmount : 0));

        scheduleData.push({
          paymentNo: i,
          paymentDate: formatDate(paymentDate),
          interestRate: (annualInterestRate * 100).toFixed(2) + '%',
          interestDue: interestDue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          paymentDue: totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          extraPayments: (i >= startPaymentNo && (i - startPaymentNo) % parseInt(paymentInterval) === 0 ? extraPaymentAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'),
          principalPaid: principalPaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          balance: balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        });
      }

      incrementPaymentDate(paymentDate, getPaymentDateIncrement());
    }

    // Calculate total interest paid
    const totalInterestPaid = totalPaymentsSum - P;

    // Calculate additional outputs
    const totalNumberOfPayments = scheduleData.length;
    const paidOffYears = (totalNumberOfPayments / periodsPerYear).toFixed(2);
    const lastPayment = scheduleData[totalNumberOfPayments - 1]?.paymentDate || '';

    setResult({ payment: EMI.toFixed(2) });
    setSchedule(scheduleData);
    setTotalPayments(totalPaymentsSum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    setTotalPaymentsWithExtras(totalPaymentsSumWithExtras.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    setTotalInterest(totalInterestPaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    setYearsUntilPaidOff(paidOffYears); 
    setNumberOfPayments(totalNumberOfPayments); 
    setLastPaymentDate(lastPayment); 
  };
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Mortgage Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Loan Amount</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Term Length (Years)</label>
          <input
            type="number"
            value={termLength}
            onChange={(e) => setTermLength(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">First Payment Date</label>
          <input
            type="date"
            value={firstPaymentDate}
            onChange={(e) => setFirstPaymentDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Compound Period</label>
          <select
            value={compoundPeriod}
            onChange={(e) => setCompoundPeriod(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Monthly">Monthly</option>
            <option value="Semi-Annually">Semi-Annually</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Payment Frequency</label>
          <select
            value={paymentFrequency}
            onChange={(e) => setPaymentFrequency(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Monthly">Monthly</option>
            <option value="Semi-Monthly">Semi-Monthly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Extra Payment</label>
          <input
            type="number"
            value={extraPayment}
            onChange={(e) => setExtraPayment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Payment Interval (in terms of payments)</label>
          <input
            type="number"
            value={paymentInterval}
            onChange={(e) => setPaymentInterval(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Start At Payment No.</label>
          <input
            type="number"
            value={startAtPaymentNo}
            onChange={(e) => setStartAtPaymentNo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={calculatePayment}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          >
            Calculate
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold">Results</h3>
          <p className="mt-2">Monthly Payment: ${result.payment}</p>
          <p>Total Payments (Without Extra): ${totalPayments}</p>
          <p>Total Payments (With Extra): ${totalPaymentsWithExtras}</p>
          <p>Total Interest Paid: ${totalInterest}</p>
          <p>Years Until Paid Off: {yearsUntilPaidOff}</p>
          <p>Number of Payments: {numberOfPayments}</p>
          <p>Last Payment Date: {lastPaymentDate}</p>
        </div>
      )}
      
      {schedule.length > 0 && <PaymentSchedule schedule={schedule} />}
    </div>
  );
};

export default MortgageCalculator;
