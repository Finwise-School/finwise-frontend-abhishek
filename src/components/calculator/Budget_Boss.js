import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Pie } from 'react-chartjs-2';
import CalculatorList from './Calulators_List';
import Info from './info/Budget_Info.js';
import Tool_Footer from './Tools_footer';

const BudgetCalculator = () => {
  const [incomes, setIncomes] = useState([
    { source: 'Salary', amount: 2000, frequency: 'monthly' },
    { source: 'Freelance', amount: 500, frequency: 'monthly' },
  ]);
  const [homeEssentials, setHomeEssentials] = useState([
    { name: 'Rent', spending: 800, frequency: 'monthly' },
    { name: 'Groceries', spending: 300, frequency: 'monthly' },
  ]);
  const [otherSpendings, setOtherSpendings] = useState([
    { name: 'Entertainment', spending: 150, frequency: 'monthly' },
  ]);
  const [showHomeEssentials, setShowHomeEssentials] = useState(false);
  const [showOtherSpendings, setShowOtherSpendings] = useState(false);
  const [isFilled, setIsFilled] = useState(true);

  const addIncome = () => setIncomes([...incomes, { source: '', amount: 0, frequency: 'monthly' }]);
  const removeIncome = (index) => setIncomes(incomes.filter((_, i) => i !== index));

  const handleIncomeChange = (index, field, value) => {
    const newIncomes = [...incomes];
    newIncomes[index][field] = value;

    // Validate only the amount
    const isValid = field === 'amount' ? !isNaN(value) && value.trim() !== '' : true;
    newIncomes[index].isValid = isValid;

    setIncomes(newIncomes);
    checkIfFilled();
  };


  const addHomeEssential = () => setHomeEssentials([...homeEssentials, { name: '', spending: 0, frequency: 'monthly' }]);
  const removeHomeEssential = (index) => setHomeEssentials(homeEssentials.filter((_, i) => i !== index));

  const handleHomeEssentialChange = (index, field, value) => {
    const newEssentials = [...homeEssentials];
    newEssentials[index][field] = value;

    // Validate only the spending amount
    const isValid = field === 'spending' ? !isNaN(value) && value.trim() !== '' : true;
    newEssentials[index].isValid = isValid;

    setHomeEssentials(newEssentials);
    checkIfFilled();
  };
  const addOtherSpending = () => setOtherSpendings([...otherSpendings, { name: '', spending: 0, frequency: 'monthly' }]);
  const removeOtherSpending = (index) => setOtherSpendings(otherSpendings.filter((_, i) => i !== index));


  const handleOtherSpendingChange = (index, field, value) => {
    const newSpendings = [...otherSpendings];
    newSpendings[index][field] = value;

    // Validate only the spending amount
    const isValid = field === 'spending' ? !isNaN(value) && value.trim() !== '' : true;
    newSpendings[index].isValid = isValid;

    setOtherSpendings(newSpendings);
    checkIfFilled();
  };

  const checkIfFilled = () => {
    const filledIn = incomes.some(income => income.source && income.amount > 0) ||
      homeEssentials.some(essential => essential.name && essential.spending > 0) ||
      otherSpendings.some(spending => spending.name && spending.spending > 0);
    setIsFilled(filledIn);
  };

  const calculateMonthlyAmount = (amount, frequency) => {
    return frequency === 'weekly' ? amount * 4.3 : amount;
  };

  const calculateTotals = () => {
    const totalIncome = incomes.reduce((sum, income) => sum + calculateMonthlyAmount(parseFloat(income.amount) || 0, income.frequency), 0);
    const totalHomeEssentials = homeEssentials.reduce((sum, essential) => sum + calculateMonthlyAmount(parseFloat(essential.spending) || 0, essential.frequency), 0);
    const totalOtherSpendings = otherSpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);
    const totalSpending = totalHomeEssentials + totalOtherSpendings;

    return { totalIncome, totalHomeEssentials, totalOtherSpendings, totalSpending };
  };

  const { totalIncome, totalHomeEssentials, totalOtherSpendings, totalSpending } = calculateTotals();

  const pieLabels = [...homeEssentials.map(e => e.name), ...otherSpendings.map(s => s.name)];
  const pieDataValues = [...homeEssentials.map(e => calculateMonthlyAmount(e.spending, e.frequency)), ...otherSpendings.map(s => calculateMonthlyAmount(s.spending, s.frequency))];

  const pieChartData = {
    labels: pieLabels.length > 0 ? pieLabels : ['No Spendings'],
    datasets: [{
      data: pieDataValues.length > 0 ? pieDataValues : [1],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
    }],
  };

  const financialStatus = totalIncome > totalSpending ? 'Great news! You are within budget.' :
    totalIncome === totalSpending ? 'Not too bad, you are breaking even.' :
      'Danger! Your spending exceeds your income.';

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-0">
          <h1 className="text-2xl font-semibold finwise-green">Budget Boss Calculator</h1>
          <p className="finwise-blue">Manage your income and expenses effortlessly to achieve your financial goals.</p>
        </div>

        {/* Income Section */}
        <div className="section mt-16 mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Enter Income Details</h2>
          {incomes.map((income, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <span className="text-sm text-gray-600">Income Source {index + 1}</span>
              <input
                type="text"
                value={income.source}
                onChange={(e) => handleIncomeChange(index, 'source', e.target.value)}
                placeholder="Income Source"
                className="p-2 border rounded-lg flex-grow mb-2 md:mb-0"
              />
              <div className="flex items-center mb-2 md:mb-0">
                <div className="relative w-32">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">£</span>
                  <input
                    type="number"
                    value={income.amount}
                    onChange={(e) => handleIncomeChange(index, 'amount', e.target.value)}
                    placeholder="Amount"
                    className={`pl-6 p-2 border rounded-lg w-full ${income.isValid !== undefined && !income.isValid ? 'border-red-500' : ''}`}
                  />
                </div>

                <span className="ml-2">per</span>
                <select
                  value={income.frequency}
                  onChange={(e) => handleIncomeChange(index, 'frequency', e.target.value)}
                  className="p-2 border rounded-lg ml-2"
                >
                  <option value="weekly">Week</option>
                  <option value="monthly">Month</option>
                </select>
                <button onClick={() => removeIncome(index)} className="ml-2 text-red-500">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
          <button onClick={addIncome} className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
            <i className="fas fa-plus mr-2"></i>Add Income
          </button>
        </div>
        <hr className="border-t-2 border-gray-500 my-4" />

        {/* Home Essentials Section */}
        <div className="section mb-6">
          <h2 className="text-2xl font-semibold finwise-blue mt-8 mb-8">Enter your Spendings 💸</h2>
          <h2 className="text-2xl font-semibold text-green-600">Household Essentials 🏠</h2>
          <p className="text-gray-500 mb-4 text-sm">This can include essential spending on Rent, Utilities, Groceries, Insurance, and more.</p>
          {homeEssentials.map((essential, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <span className="text-sm text-gray-600">Household Essential {index + 1}</span>
              <input
                type="text"
                value={essential.name}
                onChange={(e) => handleHomeEssentialChange(index, 'name', e.target.value)}
                placeholder="Expense Name"
                className="p-2 border rounded-lg w-full mb-2 md:mb-0"
              />
              <div className="flex items-center mb-2 md:mb-0">
                <div className="relative w-32">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">£</span>
                  <input
                    type="number"
                    value={essential.spending}
                    onChange={(e) => handleHomeEssentialChange(index, 'spending', e.target.value)}
                    placeholder="Spending Amount"
                    className={`pl-6 p-2 border rounded-lg w-full ${essential.isValid !== undefined && !essential.isValid ? 'border-red-500' : ''}`}
                  />
                </div>

                <span className="ml-2">per</span>
                <select
                  value={essential.frequency}
                  onChange={(e) => handleHomeEssentialChange(index, 'frequency', e.target.value)}
                  className="p-2 border rounded-lg ml-2"
                >
                  <option value="weekly">Week</option>
                  <option value="monthly">Month</option>
                </select>
                <button onClick={() => removeHomeEssential(index)} className="ml-2 text-red-500">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
          <button onClick={addHomeEssential} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            <i className="fas fa-plus mr-2"></i>Add Expense
          </button>
        </div>

        {/* Other Spendings Section */}
        <div className="section mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Other Spendings 💵</h2>
          <p className="text-gray-500 mb-4 text-sm">This can include spending on Technology, Entertainment, Health, Transport, Family & Kids, Finance, and more.</p>
          {otherSpendings.map((spending, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <span className="text-sm text-gray-600">Other Spending {index + 1}</span>
              <input
                type="text"
                value={spending.name}
                onChange={(e) => handleOtherSpendingChange(index, 'name', e.target.value)}
                placeholder="Spending Name"
                className="p-2 border rounded-lg w-full mb-2 md:mb-0"
              />

              <div className="flex items-center mb-2 md:mb-0">
                <div className="relative w-32">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">£</span>
                  <input
                    type="number"
                    value={spending.spending}
                    onChange={(e) => handleOtherSpendingChange(index, 'spending', e.target.value)}
                    placeholder="Spending Amount"
                    className={`pl-6 p-2 border rounded-lg w-full ${spending.isValid !== undefined && !spending.isValid ? 'border-red-500' : ''}`}
                  />
                </div>

                <span className="ml-2">per</span>
                <select
                  value={spending.frequency}
                  onChange={(e) => handleOtherSpendingChange(index, 'frequency', e.target.value)}
                  className="p-2 border rounded-lg ml-2"
                >
                  <option value="weekly">Week</option>
                  <option value="monthly">Month</option>
                </select>
                <button onClick={() => removeOtherSpending(index)} className="ml-2 text-red-500">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
          <button onClick={addOtherSpending} className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600">
            <i className="fas fa-plus mr-2"></i>Add Spending
          </button>
        </div>
        <hr className="border-t-2 border-gray-500 my-4" />

        {/* Conditional Rendering of Summary Table and Pie Chart */}
        {isFilled && (
          <>
            {/* Summary Table */}
            <div className="section mb-6">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Summary</h2>
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Total (£)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 text-center">Total Income</td>
                    <td className="border p-2 text-center text-green-600">£{totalIncome.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-center">
                      <button onClick={() => setShowHomeEssentials(!showHomeEssentials)} className="text-blue-500">
                        Home Essentials {showHomeEssentials ? '-' : '+'}
                      </button>
                    </td>
                    <td className="border p-2 text-center">£{totalHomeEssentials.toFixed(2)}</td>
                  </tr>
                  {showHomeEssentials && homeEssentials.map((essential, index) => (
                    <tr key={index}>
                      <td className="border p-2 pl-6 text-center">• {essential.name}</td>
                      <td className="border p-2 text-center">£{(calculateMonthlyAmount(parseFloat(essential.spending) || 0, essential.frequency)).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border p-2 text-center">
                      <button onClick={() => setShowOtherSpendings(!showOtherSpendings)} className="text-blue-500">
                        Other Spendings {showOtherSpendings ? '-' : '+'}
                      </button>
                    </td>
                    <td className="border p-2 text-center">£{totalOtherSpendings.toFixed(2)}</td>
                  </tr>
                  {showOtherSpendings && otherSpendings.map((spending, index) => (
                    <tr key={index}>
                      <td className="border p-2 pl-6 text-center">• {spending.name}</td>
                      <td className="border p-2 text-center">£{(calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency)).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="border p-2 text-center">Total Spending</td>
                    <td className="border p-2 text-red-600 text-center">£{totalSpending.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pie Chart */}
            <h2 className="text-2xl font-semibold text-green-600">Spending Breakdown</h2>
            <div className="section flex justify-center mb-6">
              <div style={{ width: '300px', height: '300px' }}>
                <Pie data={pieChartData} />
              </div>
            </div>

            {/* Financial Status Message */}
            <div className="text-center mt-4">
              <h1 className={totalIncome > totalSpending ? 'text-green-500' : totalIncome === totalSpending ? 'text-gray-700' : 'text-red-600'}>
                {financialStatus}
              </h1>
            </div>

            {/* Summary Section */}
            <div className="mt-8 text-center">
              <h1 className="text-5xl font-bold">£{totalIncome.toFixed(2)}</h1>
              <p className="text-xl">Monthly Income</p>
              <h1 className="text-5xl font-bold">£{totalSpending.toFixed(2)}</h1>
              <p className="text-xl">Monthly Expenses</p>

              {totalIncome <= totalSpending && (
                <>
                  <h1 className="text-4xl font-bold mt-4" style={{ color: 'red' }}>
                    It's not great news
                  </h1>
                  <p className="text-3xl mt-2">
                    After accounting for your monthly expenses, you'll face a shortfall of
                    <span className="font-bold text-red-500"> £{(totalSpending - totalIncome).toFixed(2)}</span>.
                  </p>
                </>
              )}
            </div>
          </>
        )}
        <div style={{ marginTop: "-0rem" }}>
          <Tool_Footer message="Understand your income and expenses better to make smarter financial choices." />
        </div>
        <Info />
        <CalculatorList activeCalculator="Budget Calculator" />
      </div>
    </div>
  );
};

export default BudgetCalculator;
