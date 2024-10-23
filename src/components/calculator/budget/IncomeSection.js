import React from 'react';

const IncomeSection = ({ incomes, setIncomes }) => {
  const addIncome = () => setIncomes([...incomes, { source: '', amount: 0, frequency: 'monthly' }]);
  const removeIncome = (index) => setIncomes(incomes.filter((_, i) => i !== index));

  const handleIncomeChange = (index, field, value) => {
    const newIncomes = [...incomes];
    newIncomes[index][field] = value;
    setIncomes(newIncomes);
  };

  // Calculate total income
  // const totalIncome = incomes.reduce((acc, income) => acc + (parseFloat(income.amount) || 0), 0).toFixed(2);

  return (
    <div className="section mt-16 mb-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Enter Income Details</h2>
      <div className="border rounded-lg p-4 mb-4 bg-gradient-to-r from-green-100 to-green-200">
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
                  onChange={(e) => handleIncomeChange(index, 'amount', parseFloat(e.target.value) || 0)}
                  placeholder="Amount"
                  className={`pl-6 p-2 border rounded-lg w-full ${income.amount < 0 ? 'border-red-500' : ''}`}
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
              <button 
                onClick={() => removeIncome(index)} 
                className="ml-2 text-red-500" 
                aria-label={`Remove income source ${index + 1}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
        <button onClick={addIncome} className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 text-sm">
          <i className="fas fa-plus mr-2"></i>Add Income
        </button>
      {/* <div className="text-lg font-semibold text-gray-800">
        Total Income: <span className="text-green-600">£{totalIncome}</span>
      </div> */}
      <hr className="border-t-2 border-gray-500 my-4" />
    </div>
  );
};

export default IncomeSection;
