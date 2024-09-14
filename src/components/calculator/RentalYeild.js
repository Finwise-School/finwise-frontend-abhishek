import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';

const RentalYieldCalculator = () => {
  const [purchaseCost, setPurchaseCost] = useState(200000);
  const [monthlyRent, setMonthlyRent] = useState(1000);
  const [annualCosts, setAnnualCosts] = useState(2000);
  const [result, setResult] = useState({
    grossYield: "0",
    netYield: "0",
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [errors, setErrors] = useState({
    purchaseCost: "",
    monthlyRent: "",
    annualCosts: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { purchaseCost: "", monthlyRent: "", annualCosts: "" };

    if (purchaseCost <= 0 || isNaN(purchaseCost)) {
      newErrors.purchaseCost = "Please enter a valid property purchase cost.";
      valid = false;
    }
    if (monthlyRent <= 0 || isNaN(monthlyRent)) {
      newErrors.monthlyRent = "Please enter a valid monthly rent.";
      valid = false;
    }
    if (annualCosts < 0 || isNaN(annualCosts)) {
      newErrors.annualCosts = "Please enter a valid annual cost.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const calculateRentalYield = () => {
    if (!validateForm()) return;

    const propertyCost = parseFloat(purchaseCost);
    const monthlyRentAmount = parseFloat(monthlyRent);
    const annualCost = parseFloat(annualCosts);

    // Calculate Gross Rental Yield
    const grossIncome = monthlyRentAmount * 12;
    const grossYield = (grossIncome / propertyCost) * 100;

    // Calculate Net Rental Yield
    const netIncome = grossIncome - annualCost;
    const netYield = (netIncome / propertyCost) * 100;

    // Set the result
    setResult({
      grossYield: grossYield.toFixed(2),
      netYield: netYield.toFixed(2),
    });

    // Prepare chart data
    const newLabels = ['Gross Yield', 'Net Yield'];
    const yieldData = [grossYield.toFixed(2), netYield.toFixed(2)];

    setChartData({
      labels: newLabels,
      datasets: [
        {
          label: 'Rental Yield (%)',
          data: yieldData,
          backgroundColor: ['rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
        },
      ],
    });
  };

  useEffect(() => {
    calculateRentalYield();
  }, [purchaseCost, monthlyRent, annualCosts]);

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold finwise-green">Rental Yield Calculator</h1>
          <p className="finwise-blue">Calculate your Gross and Net Rental Yield based on property details</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.purchaseCost ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="purchaseCost" className="text-gray-700">Property Purchase Cost</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">&#163;</span>
                  <input
                    type="number"
                    id="purchaseCost"
                    value={purchaseCost}
                    onChange={(e) => setPurchaseCost(e.target.value)}
                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>
              {errors.purchaseCost && <p className="text-red-500 text-sm">{errors.purchaseCost}</p>}
              
              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.monthlyRent ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="monthlyRent" className="text-gray-700">Monthly Rent</label>
                <input
                  type="number"
                  id="monthlyRent"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.monthlyRent && <p className="text-red-500 text-sm">{errors.monthlyRent}</p>}

              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.annualCosts ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="annualCosts" className="text-gray-700">Annual Costs</label>
                <input
                  type="number"
                  id="annualCosts"
                  value={annualCosts}
                  onChange={(e) => setAnnualCosts(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.annualCosts && <p className="text-red-500 text-sm">{errors.annualCosts}</p>}
            </div>
          </div>
          {/* Output Fields */}
          <div className="output-fields -mt-28 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
            <div className="space-y-2">
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Gross Rental Yield</p>
                <p className="finwise-green font-semibold text-xl">{result.grossYield}%</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Net Rental Yield</p>
                <p className="finwise-green font-semibold text-xl">{result.netYield}%</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: "-40px"}}>
        <Tool_Footer message="Evaluate your rental property yield and make informed decisions!"/>
        </div>

        <CalculatorList activeCalculator="Rental Yield Calculator" />

      </div>
    </div>
  );
};

export default RentalYieldCalculator;
