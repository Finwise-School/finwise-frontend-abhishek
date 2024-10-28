import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';

const TaxCalculator = () => {
  const [grossAmount, setGrossAmount] = useState("300");
  const [frequency, setFrequency] = useState("daily");
  const [hoursOrDays, setHoursOrDays] = useState("3");
  const [isScottishTax, setIsScottishTax] = useState("no");
  const [results, setResults] = useState(null);
  const [view, setView] = useState("yearly"); // New state for table view


  useEffect(() => {
    calculateTax();
  }, [grossAmount, frequency, hoursOrDays, isScottishTax]);

  const calculateTax = () => {
    if (!grossAmount) return;

    const parsedGrossAmount = parseFloat(grossAmount);
    if (isNaN(parsedGrossAmount)) return;

    const annualGross = frequency === "hourly"
      ? parsedGrossAmount * hoursOrDays * 52
      : frequency === "daily"
        ? parsedGrossAmount * hoursOrDays * 52
        : frequency === "weekly"
          ? parsedGrossAmount * 52
          : frequency === "monthly"
            ? parsedGrossAmount * 12
            : parsedGrossAmount;

    const personalAllowances = Math.min(12570, annualGross);
    const taxableIncome = Math.max(0, annualGross - personalAllowances);

    let taxDue = 0;
    let taxAt19 = 0, taxAt20 = 0, taxAt21 = 0, taxAt42 = 0, taxAt45 = 0, taxAt48 = 0, taxAt40 = 0;

    if (isScottishTax === "yes") {
      if (taxableIncome > 0) {
        taxAt19 = Math.max(0, Math.min(taxableIncome, 14876 - 12570)) * 0.19;
        let remainingIncome = taxableIncome - (Math.min(taxableIncome, 14876 - 12570));

        if (remainingIncome > 0) {
          taxAt20 = Math.max(0, Math.min(remainingIncome, 26561 - 14876)) * 0.20;
          remainingIncome -= (Math.min(remainingIncome, 26561 - 14876));

          if (remainingIncome > 0) {
            taxAt21 = Math.max(0, Math.min(remainingIncome, 43662 - 26561)) * 0.21;
            remainingIncome -= (Math.min(remainingIncome, 43662 - 26561));

            if (remainingIncome > 0) {
              taxAt42 = Math.max(0, Math.min(remainingIncome, 75000 - 43662)) * 0.42;
              remainingIncome -= (Math.min(remainingIncome, 75000 - 43662));

              if (remainingIncome > 0) {
                taxAt45 = Math.max(0, Math.min(remainingIncome, 125140 - 75000)) * 0.45;
                remainingIncome -= (Math.min(remainingIncome, 125140 - 75000));

                if (remainingIncome > 0) {
                  taxAt48 = Math.max(0, remainingIncome) * 0.48;
                }
              }
            }
          }
        }
      }
    } else {
      if (taxableIncome > 0) {
        // 20% band
        taxAt20 = Math.max(0, Math.min(taxableIncome, 50270 - 12570)) * 0.20;
        let remainingIncome = taxableIncome - (Math.min(taxableIncome, 50270 - 12570));

        // 40% band
        if (remainingIncome > 0) {
          taxAt40 = Math.max(0, Math.min(remainingIncome, 125140 - 50270)) * 0.40;
          remainingIncome -= (Math.min(remainingIncome, 125140 - 50270));

          // 45% band
          if (remainingIncome > 0) {
            taxAt45 = Math.max(0, remainingIncome) * 0.45;
          }
        }
      }
    }

    taxDue = taxAt19 + taxAt20 + taxAt21 + taxAt42 + taxAt45 + taxAt48 + taxAt40;

    const niThreshold = 12570;
    const niUpperThreshold = 50270;

    let nationalInsurance = 0;

    if (annualGross > niThreshold) {
      if (annualGross <= niUpperThreshold) {
        nationalInsurance = (annualGross - niThreshold) * 0.08;
      } else {
        nationalInsurance = (niUpperThreshold - niThreshold) * 0.08 + (annualGross - niUpperThreshold) * 0.02;
      }
    }

    const takeHomePay = annualGross - taxDue - nationalInsurance;

    setResults({
      annualGross,
      personalAllowances,
      taxableIncome,
      taxDue,
      nationalInsurance,
      takeHomePay,
      taxAmounts: {
        scottish: [taxAt19, taxAt20, taxAt21, taxAt42, taxAt45, taxAt48],
        nonScottish: [taxAt20, taxAt40, taxAt45],
      },
    });
  };

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 finwise-green">Tax Calculator</h1>
        <p className="mb-6 text-base text-gray-700">
          Calculate your take-home pay after tax deductions based on your gross salary.
        </p>

        <h2 className="text-lg font-semibold mb-4 finwise-green">Input Your Details</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <label className="text-gray-700">Gross Amount</label>
            <input
              type="number"
              value={grossAmount}
              onChange={(e) => setGrossAmount(e.target.value)}
              className="border bg-green-100 text-gray-800  p-2 rounded-lg w-32"
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <label className="text-gray-700">Frequency of Payment</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="border bg-green-100 text-gray-800  p-2 rounded-lg"
            >
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>

          {(frequency === "hourly" || frequency === "daily") && (
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <label className="text-gray-700">How many {frequency === "hourly" ? "hours" : "days"} do you work in a week?</label>
              <input
                type="number"
                value={hoursOrDays}
                onChange={(e) => setHoursOrDays(e.target.value)}
                className="border bg-green-100 text-gray-800  p-2 rounded-lg w-32"
              />
            </div>
          )}

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <label className="text-gray-700">Do you pay Scottish Income Tax?</label>
            <select
              value={isScottishTax}
              onChange={(e) => setIsScottishTax(e.target.value)}
              className="border bg-green-100 text-gray-800  p-2 rounded-lg"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {results && (
          <div className="mt-4">
            <h2 className="text-3xl font-semibold mb-8 finwise-green">Calculation Results</h2>
            <div className="mb-4">
              <button
                onClick={() => setView("yearly")}
                className={`mr-2 p-2 rounded ${view === "yearly" ? "bg-green-500 text-white" : "bg-gray-300"}`}>
                Yearly
              </button>
              <button
                onClick={() => setView("monthly")}
                className={`mr-2 p-2 rounded ${view === "monthly" ? "bg-green-500 text-white" : "bg-gray-300"}`}>
                Monthly
              </button>
              <button
                onClick={() => setView("weekly")}
                className={`p-2 rounded ${view === "weekly" ? "bg-green-500 text-white" : "bg-gray-300"}`}>
                Weekly
              </button>
            </div>
            <div className="flex items-center justify-center text-3xl sm:text-4xl finwise-green-bg text-center font-bold p-6 w-full h-28 text-white">
              £{(view === "yearly" ? results.takeHomePay : view === "monthly" ? (results.takeHomePay / 12) : (results.takeHomePay / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {view === "yearly" ? "a year" : view === "monthly" ? "a month" : "a week"}
            </div>


            <table className="border-collapse border text-center border-gray-300 w-full overflow-hidden">
              <thead>
                <tr className="finwise-green">
                  <th className="border border-gray-300 p-2">Description</th>
                  <th className="border border-gray-300 p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Gross Salary</td>
                  <td className="border border-gray-300 p-2">£{(view === "yearly" ? results.annualGross : view === "monthly" ? (results.annualGross / 12) : (results.annualGross / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Personal Allowance</td>
                  <td className="border border-gray-300 p-2">£{(view === "yearly" ? results.personalAllowances : view === "monthly" ? (results.personalAllowances / 12) : (results.personalAllowances / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
                {results.taxableIncome > 0 && (
                  <tr>
                    <td className="border border-gray-300 p-2">Taxable Income</td>
                    <td className="border border-gray-300 p-2">£{(view === "yearly" ? results.taxableIncome : view === "monthly" ? (results.taxableIncome / 12) : (results.taxableIncome / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
                )}
                {/* Conditional rendering for tax bands */}
                {isScottishTax === "yes" ? results.taxAmounts.scottish.map((amount, index) => (
                  amount > 0 && (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">{[19, 20, 21, 42, 45, 48][index]}% Tax</td>
                      <td className="border border-gray-300 p-2">£{(view === "yearly" ? amount : view === "monthly" ? (amount / 12) : (amount / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                  )
                )) : results.taxAmounts.nonScottish.map((amount, index) => (
                  amount > 0 && (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">{[20, 40, 45][index]}% Tax</td>
                      <td className="border border-gray-300 p-2">£{(view === "yearly" ? amount : view === "monthly" ? (amount / 12) : (amount / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                  )
                ))}
                {results.nationalInsurance > 0 && (
                  <tr>
                    <td className="border border-gray-300 p-2">National Insurance</td>
                    <td className="border border-gray-300 p-2">£{(view === "yearly" ? results.nationalInsurance : view === "monthly" ? (results.nationalInsurance / 12) : (results.nationalInsurance / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
                )}
                <tr>
                  <td className="border border-gray-300 p-2">Take Home Pay</td>
                  <td className="border border-gray-300 p-2">£{(view === "yearly" ? results.takeHomePay : view === "monthly" ? (results.takeHomePay / 12) : (results.takeHomePay / 52)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
              </tbody>
            </table>
            <Tool_Footer message="Evaluate your tax liabilities and discover potential savings with our tax calculator"/>
            <CalculatorList activeCalculator="Tax Calculator" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxCalculator;
