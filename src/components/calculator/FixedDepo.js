import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import CalculatorList from './Calulators_List';
import Info from './info/Fixed_Info';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FixedDepo = () => {
  const [amountInvested, setAmountInvested] = useState(100000);
  const [annualInterestRate, setAnnualInterestRate] = useState(6);
  const [fdInterestStructure, setFdInterestStructure] = useState('monthly');
  const [timePeriod, setTimePeriod] = useState(5);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [errors, setErrors] = useState({});

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-GB', { style: 'decimal', maximumFractionDigits: 0 }).format(number);
  };

  const validateForm = () => {
    const validationErrors = {};

    if (amountInvested <= 0) {
      validationErrors.amountInvested = 'Amount invested should be greater than 0';
    }

    if (annualInterestRate <= 0) {
      validationErrors.annualInterestRate = 'Interest rate should be greater than 0';
    }

    if (timePeriod <= 0) {
      validationErrors.timePeriod = 'Time period should be greater than 0';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const calculateFD = () => {
    if (!validateForm()) {
      return;
    }

    const principal = parseFloat(amountInvested);
    const annualRate = parseFloat(annualInterestRate);
    const interestStructure = fdInterestStructure;
    const years = parseInt(timePeriod);

    let n;
    if (interestStructure === 'monthly') {
      n = 12;
    } else if (interestStructure === 'quarterly') {
      n = 4;
    } else if (interestStructure === 'half-yearly') {
      n = 2;
    } else if (interestStructure === 'yearly') {
      n = 1;
    }

    const rate = annualRate / 100 / n;
    const time = years * n;

    const maturityValue = principal * Math.pow(1 + rate, time);
    const totalInterest = maturityValue - principal;

    setResult({
      totalInvestment: formatNumber(principal),
      totalInterest: formatNumber(totalInterest),
      maturityValue: formatNumber(maturityValue),
    });

    // Generate data for the chart
    const labels = [];
    const data = [];
    for (let i = 1; i <= years; i++) {
      const yearlyMaturityValue = principal * Math.pow(1 + rate, i * n);
      labels.push(i);
      data.push(yearlyMaturityValue.toFixed(0));
    }

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'FD Maturity Value',
          data: data,
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    calculateFD();
  }, [amountInvested, annualInterestRate, fdInterestStructure, timePeriod]);

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-0">
          <h1 className="text-2xl font-semibold finwise-green">Fixed Deposit Calculator</h1>
          <p className="finwise-blue">Find out the maturity amount of your fixed deposits and optimize your savings</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.amountInvested ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="amount-invested" className="text-gray-700">Amount Invested</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">&#163;</span>
                  <input
                    type="number"
                    id="amount-invested"
                    value={amountInvested}
                    onChange={(e) => setAmountInvested(e.target.value)}
                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>
              {errors.amountInvested && <p className="text-red-500 text-sm mt-1">{errors.amountInvested}</p>}

              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.annualInterestRate ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="annual-interest-rate" className="text-gray-700">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  id="annual-interest-rate"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.annualInterestRate && <p className="text-red-500 text-sm mt-1">{errors.annualInterestRate}</p>}

              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="fd-interest-structure" className="text-gray-700">FD Interest Structure</label>
                <select
                  id="fd-interest-structure"
                  value={fdInterestStructure}
                  onChange={(e) => setFdInterestStructure(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half-yearly">Half-Yearly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>

              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.timePeriod ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="time-period" className="text-gray-700">Time Period (Years)</label>
                <input
                  type="number"
                  id="time-period"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.timePeriod && <p className="text-red-500 text-sm mt-1">{errors.timePeriod}</p>}
            </div>
          </div>

          {/* Output Fields */}
          <div className="output-fields -mt-28 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
            {result && (
              <div className="space-y-2">
                <div className="grid grid-cols-1 gap-2" style={{ "row-gap": "0.6rem" }}>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="finwise-blue">Total Investment</p>
                    <p className="finwise-green font-semibold text-xl">&#163;{result.totalInvestment}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="finwise-blue flex items-center">Total Interest Earned  </p>
                    <p className="finwise-green font-semibold text-xl">&#163;{result.totalInterest}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg" >
                    <p className="finwise-blue flex items-center">Maturity Value  </p>
                    <p className="finwise-green font-semibold text-xl">&#163;{result.maturityValue}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Line Graph */}
        <div className="">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Investment Over Time</h2>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      // Format tooltip label using formatNumber
                      const formattedValue = formatNumber(tooltipItem.raw);
                      return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${formattedValue}`;
                    },
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Years',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Amount (£)',
                  },
                  ticks: {
                    callback: function (value) {
                      if (value >= 1000000) {
                        return formatNumber((value / 1000000).toFixed(1)) + 'm'; // millions
                      } else if (value >= 1000) {
                        return formatNumber((value / 1000).toFixed(1)) + 'k'; // thousands
                      }
                      return formatNumber(value); // default formatting
                    },
                  },
                },
              },
            }}
          />

        </div>

        <Tool_Footer message="See the returns on your fixed deposits and make informed savings decisions. Let’s maximize your savings!" />
        <Info/>
        <CalculatorList activeCalculator="Fixed Deposit Calculator" />
      </div>
    </div>
  );
};

export default FixedDepo;
