import React, { useState } from 'react';
import PieChartComponent from './PieChartComponent';

const SummarySection = ({ totals, homeEssentials, otherSpendings, customExpenses }) => {
  const [showHomeEssentials, setShowHomeEssentials] = useState(false);
  const [showOtherSpendings, setShowOtherSpendings] = useState(false);
  const [showCustomExpenses, setShowCustomExpenses] = useState(false);

  const calculateMonthlyAmount = (amount, frequency) => {
    return frequency === 'weekly' ? amount * 4.3 : amount;
  };

  // Calculate total spending for custom expenses
  const totalCustomSpending = customExpenses.reduce((total, expense) => {
    const subTotal = expense.subExpenses.reduce((subTotal, subExpense) => {
      return subTotal + calculateMonthlyAmount(parseFloat(subExpense.spending) || 0, subExpense.frequency);
    }, 0);
    return total + subTotal;
  }, 0);

  // Data for Pie Chart
  const spendingData = [
    { label: 'Home Essentials', value: totals.totalHomeEssentials },
    { label: 'Other Spendings', value: totals.totalOtherSpendings },
    { label: 'Custom Spendings', value: totalCustomSpending },
  ];

  return (
    <div className="section my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Summary</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-4 text-left">Category</th>
            <th className="border p-4 text-right">Total (£)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4 text-center">Total Income</td>
            <td className="border p-4 text-right text-green-600 font-semibold">£{totals.totalIncome.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border p-4 text-center">
              <button 
                onClick={() => setShowHomeEssentials(!showHomeEssentials)} 
                className="text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-800"
              >
                Home Essentials {showHomeEssentials ? '-' : '+'}
              </button>
            </td>
            <td className="border p-4 text-right">£{totals.totalHomeEssentials.toFixed(2)}</td>
          </tr>
          {showHomeEssentials && homeEssentials.map((essential, index) => (
            <tr key={index} className="bg-gray-50">
              <td className="border p-4 pl-8 text-left">• {essential.name}</td>
              <td className="border p-4 text-right">£{(calculateMonthlyAmount(parseFloat(essential.spending) || 0, essential.frequency)).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td className="border p-4 text-center">
              <button 
                onClick={() => setShowOtherSpendings(!showOtherSpendings)} 
                className="text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-800"
              >
                Other Spendings {showOtherSpendings ? '-' : '+'}
              </button>
            </td>
            <td className="border p-4 text-right">£{totals.totalOtherSpendings.toFixed(2)}</td>
          </tr>
          {showOtherSpendings && otherSpendings.map((spending, index) => (
            <tr key={index} className={getSpendingRowClass(spending)}>
              <td className="border p-4 pl-8 text-left">• {spending.name}</td>
              <td className="border p-4 text-right">£{(calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency)).toFixed(2)}</td>
            </tr>
          ))}

          {/* Custom Expenses Section */}
          <tr>
            <td className="border p-4 text-center">
              <button 
                onClick={() => setShowCustomExpenses(!showCustomExpenses)} 
                className="text-blue-600 font-semibold transition-colors duration-300 hover:text-blue-800"
              >
                Custom Expenses {showCustomExpenses ? '-' : '+'}
              </button>
            </td>
            <td className="border p-4 text-right">£{totalCustomSpending.toFixed(2)}</td>
          </tr>
          {showCustomExpenses && customExpenses.map((expense, index) => (
            <React.Fragment key={index}>
              <tr className="bg-gray-50">
                <td className="border p-4 pl-8 text-left">• {expense.name}</td>
                <td className="border p-4 text-right"></td>
              </tr>
              {expense.subExpenses.map((subExpense, subIndex) => (
                <tr key={subIndex} className="bg-gray-50">
                  <td className="border p-4 pl-12 text-left">- {subExpense.name}</td>
                  <td className="border p-4 text-right">£{calculateMonthlyAmount(parseFloat(subExpense.spending), subExpense.frequency).toFixed(2)}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}

          <tr className="font-bold">
            <td className="border p-4 text-center">Total Spending</td>
            <td className="border p-4 text-red-600 text-right">£{(totals.totalSpending + totalCustomSpending).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {/* Conditionally render the PieChartComponent based on spending amounts */}
      {totals.totalHomeEssentials >= 1 || totals.totalOtherSpendings >= 1 || totalCustomSpending >= 1 ? (
        <PieChartComponent data={spendingData} />
      ) : null}
    </div>
  );
};

// Function to determine the row class based on spending category
const getSpendingRowClass = (spending) => {
  const { name } = spending;

  // Categories and their respective colors
  const spendingCategories = {
    homeEssentials: [
      'Rent or Mortgage', 
      'Food & Groceries', 
      'Home Insurance', 
      'Boiler Cover', 
      'Pet Expenditure (Insurance/Food/Walking)', 
      'Gas', 
      'Electricity', 
      'Water', 
      'Council Tax'
    ],
    otherSpendings: [ // Specify distinct colors for other spending categories
      'Dining Out',
      'Clothing',
      'Entertainment',
      'Miscellaneous'
    ],
    technology: [
      'Internet', 
      'TV Package', 
      'Streaming Services', 
      'TV Licence', 
      'Mobile Phones'
    ],
    entertainment: [
      'Eating out', 
      'Hobbies', 
      'Books', 
      'Music', 
      'Film'
    ],
    health: [
      'Fitness', 
      'Gym', 
      'Sports', 
      'Medical Expenses', 
      'Health Insurance', 
      'Life Insurance', 
      'Hairdressers'
    ],
    transport: [
      'Car Insurance', 
      'Car Maintenance', 
      'Fuel', 
      'Public Transport', 
      'Parking', 
      'Tax & MOT', 
      "Taxi's", 
      'Car Finance (PCP/Lease/Loan)'
    ],
    family: [
      'School Fees', 
      'Childcare'
    ],
    finance: [
      'Loan Repayments', 
      'Loan', 
      'Credit Card Repayments', 
      'Charity'
    ],
  };

  // Return the appropriate class based on the spending category
  if (spendingCategories.homeEssentials.includes(name)) {
    return 'bg-gray-200'; // Distinct color for Home Essentials
  } else if (spendingCategories.otherSpendings.includes(name)) {
    return 'bg-pink-200'; // Distinct color for Other Spendings
  } else if (spendingCategories.technology.includes(name)) {
    return 'bg-blue-100'; // Technology category
  } else if (spendingCategories.entertainment.includes(name)) {
    return 'bg-yellow-100'; // Entertainment category
  } else if (spendingCategories.health.includes(name)) {
    return 'bg-green-100'; // Health category
  } else if (spendingCategories.transport.includes(name)) {
    return 'bg-red-100'; // Transport category
  } else if (spendingCategories.family.includes(name)) {
    return 'bg-purple-100'; // Family category
  } else if (spendingCategories.finance.includes(name)) {
    return 'bg-orange-100'; // Finance category
  } else {
    return 'bg-gray-50'; // Default color for other categories
  }
};

export default SummarySection;
