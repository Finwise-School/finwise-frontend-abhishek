import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';

const TaxCalculator = () => {
  const [grossSalary, setGrossSalary] = useState(60000); // Default gross salary
  const [period, setPeriod] = useState('Per Annum'); // Default period
  const [result, setResult] = useState({
    yearlyIncome: 0,
    monthlyIncome: 0,
    weeklyIncome: 0,
    incomeTax: 0,
    nationalInsurance: 0,
    takeHomePay: 0,
    monthlyIncomeTax: 0,
    weeklyIncomeTax: 0,
    monthlyNationalInsurance: 0,
    weeklyNationalInsurance: 0,
    monthlyTakeHomePay: 0,
    weeklyTakeHomePay: 0,
  });

  const [chartData, setChartData] = useState({
    labels: ['Income Tax', 'National Insurance', 'Take Home Pay'],
    datasets: [],
  });

  // Constants for 2024/25 UK tax calculations
  const personalAllowance = 12570;
  const basicRateLimit = 50270;
  const higherRateLimit = 125140;
  const basicRate = 0.20;
  const higherRate = 0.40;
  const niLowerLimit = 12570;
  const niUpperLimit = 50270;
  const niBasicRate = 0.12;
  const niHigherRate = 0.02;

  // Function to calculate income details
  const calculateIncome = () => {
    let yearlyIncome;
    let taxableIncome;
    let incomeTax;
    let nationalInsurance;
    let takeHomePay;

    switch (period) {
      case 'Per Annum':
        yearlyIncome = parseFloat(grossSalary);
        break;
      case 'Per Month':
        yearlyIncome = parseFloat(grossSalary) * 12;
        break;
      case 'Per Week':
        yearlyIncome = parseFloat(grossSalary) * 52;
        break;
      case 'Per Day':
        yearlyIncome = parseFloat(grossSalary) * 260; // Assuming 5 working days per week
        break;
      case 'Per Hour':
        yearlyIncome = parseFloat(grossSalary) * 2080; // Assuming 40 hours per week
        break;
      default:
        yearlyIncome = parseFloat(grossSalary);
    }

    // Income Tax Calculation
    taxableIncome = Math.max(yearlyIncome - personalAllowance, 0);
    if (taxableIncome <= basicRateLimit - personalAllowance) {
      incomeTax = taxableIncome * basicRate;
    } else {
      incomeTax = (basicRateLimit - personalAllowance) * basicRate + (taxableIncome - (basicRateLimit - personalAllowance)) * higherRate;
    }

    // National Insurance Calculation
    taxableIncome = Math.max(yearlyIncome - niLowerLimit, 0);
    if (taxableIncome <= niUpperLimit - niLowerLimit) {
      nationalInsurance = taxableIncome * niBasicRate;
    } else {
      nationalInsurance = (niUpperLimit - niLowerLimit) * niBasicRate + (taxableIncome - (niUpperLimit - niLowerLimit)) * niHigherRate;
    }

    // Take Home Pay Calculation
    takeHomePay = yearlyIncome - incomeTax - nationalInsurance;

    // Monthly and weekly breakdowns
    const monthlyIncome = yearlyIncome / 12;
    const weeklyIncome = yearlyIncome / 52;

    const monthlyIncomeTax = incomeTax / 12;
    const weeklyIncomeTax = incomeTax / 52;
    const monthlyNationalInsurance = nationalInsurance / 12;
    const weeklyNationalInsurance = nationalInsurance / 52;
    const monthlyTakeHomePay = takeHomePay / 12;
    const weeklyTakeHomePay = takeHomePay / 52;

    setResult({
      yearlyIncome: yearlyIncome.toFixed(2),
      monthlyIncome: monthlyIncome.toFixed(2),
      weeklyIncome: weeklyIncome.toFixed(2),
      incomeTax: incomeTax.toFixed(2),
      monthlyIncomeTax: monthlyIncomeTax.toFixed(2),
      weeklyIncomeTax: weeklyIncomeTax.toFixed(2),
      nationalInsurance: nationalInsurance.toFixed(2),
      monthlyNationalInsurance: monthlyNationalInsurance.toFixed(2),
      weeklyNationalInsurance: weeklyNationalInsurance.toFixed(2),
      takeHomePay: takeHomePay.toFixed(2),
      monthlyTakeHomePay: monthlyTakeHomePay.toFixed(2),
      weeklyTakeHomePay: weeklyTakeHomePay.toFixed(2),
    });

    setChartData({
      labels: ['Income Tax', 'National Insurance', 'Take Home Pay'],
      datasets: [
        {
          label: 'Income Breakdown',
          data: [incomeTax, nationalInsurance, takeHomePay],
          backgroundColor: ['#0000FF', '#000080', '#FF00FF'],
          hoverBackgroundColor: ['#0000FF', '#000080', '#FF00FF'],
        },
      ],
    });
  };

  useEffect(() => {
    calculateIncome();
  }, [grossSalary, period]);

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold finwise-green">Tax Calculator</h1>
          <p className="finwise-blue">Estimate your tax and take-home pay</p>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="grossSalary" className="text-gray-700">Gross Salary (£)</label>
                <input
                  type="number"
                  id="grossSalary"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="period" className="text-gray-700">Select Period</label>
                <select
                  id="period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold p-2 rounded-lg w-36"
                >
                  <option>Per Annum</option>
                  <option>Per Month</option>
                  <option>Per Week</option>
                  <option>Per Day</option>
                  <option>Per Hour</option>
                </select>
              </div>
            </div>
          </div>

          {/* Output Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estimation:</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Gross Salary (Yearly)</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.yearlyIncome}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Income Tax</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.incomeTax}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">National Insurance</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.nationalInsurance}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Take Home Pay</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.takeHomePay}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimation Table */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Estimation Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Item</th>
                  <th className="border px-4 py-2">Yearly</th>
                  <th className="border px-4 py-2">Monthly</th>
                  <th className="border px-4 py-2">Weekly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Gross Salary</td>
                  <td className="border px-4 py-2">&#163;{result.yearlyIncome}</td>
                  <td className="border px-4 py-2">&#163;{result.monthlyIncome}</td>
                  <td className="border px-4 py-2">&#163;{result.weeklyIncome}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Income Tax</td>
                  <td className="border px-4 py-2">&#163;{result.incomeTax}</td>
                  <td className="border px-4 py-2">&#163;{result.monthlyIncomeTax}</td>
                  <td className="border px-4 py-2">&#163;{result.weeklyIncomeTax}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">National Insurance</td>
                  <td className="border px-4 py-2">&#163;{result.nationalInsurance}</td>
                  <td className="border px-4 py-2">&#163;{result.monthlyNationalInsurance}</td>
                  <td className="border px-4 py-2">&#163;{result.weeklyNationalInsurance}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Take Home Pay</td>
                  <td className="border px-4 py-2">&#163;{result.takeHomePay}</td>
                  <td className="border px-4 py-2">&#163;{result.monthlyTakeHomePay}</td>
                  <td className="border px-4 py-2">&#163;{result.weeklyTakeHomePay}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="mt-8 justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Income Breakdown</h2>
          <div className="w-full h-[400px] max-w-md">
            <Pie
              data={chartData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

      <Tool_Footer message="Calculate your tax liabilities and explore ways to save more. Get started on planning your tax strategy now!" />
      <CalculatorList activeCalculator="Tax Calculator" />
      </div>

    </div>
  );
};

export default TaxCalculator;
