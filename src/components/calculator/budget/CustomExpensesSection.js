import React, { useState, useEffect } from 'react';

const CustomExpensesSection = ({ customExpenses, setCustomExpenses }) => {
  const [newExpenseName, setNewExpenseName] = useState('');
  const [subExpenseInputs, setSubExpenseInputs] = useState([]); // State to manage inputs for sub-expenses
  const [openExpenseIndexes, setOpenExpenseIndexes] = useState([]); // Tracks which expenses are open
  const [showNewExpenseInput, setShowNewExpenseInput] = useState(false); // Controls visibility of the input field for new custom expense

  // Open all expenses by default
  useEffect(() => {
    setOpenExpenseIndexes(customExpenses.map((_, index) => index));
    // Initialize subExpenseInputs state with empty arrays for sub-expenses
    setSubExpenseInputs(customExpenses.map(() => ({
      name: '',
      amount: '',
      frequency: 'monthly',
    })));
  }, [customExpenses]);

  const toggleExpenseDropdown = (index) => {
    setOpenExpenseIndexes((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index) // Close if it's open
        : [...prevOpen, index] // Open if it's closed
    );
  };

  const addCustomExpense = () => {
    if (!newExpenseName.trim()) return;
    const newExpense = {
      name: newExpenseName,
      subExpenses: [],
    };
    setCustomExpenses([...customExpenses, newExpense]);
    setNewExpenseName('');
    setShowNewExpenseInput(false); // Hide the input field after adding
  };

  const addSubExpense = (index) => {
    const { name, amount, frequency } = subExpenseInputs[index];

    if (!name.trim() || !amount) return;

    const updatedExpenses = customExpenses.map((expense, expenseIndex) => {
      if (expenseIndex === index) {
        return {
          ...expense,
          subExpenses: [
            ...expense.subExpenses,
            { name, spending: amount, frequency },
          ],
        };
      }
      return expense;
    });

    setCustomExpenses(updatedExpenses);
    // Reset input fields for the added sub-expense
    setSubExpenseInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = { name: '', amount: '', frequency: 'monthly' }; // Resetting only the specific index
      return newInputs;
    });
  };

  const removeCustomExpense = (index) => {
    setCustomExpenses(customExpenses.filter((_, i) => i !== index));
    // Remove corresponding sub-expense inputs when custom expense is removed
    setSubExpenseInputs(subExpenseInputs.filter((_, i) => i !== index));
  };

  const removeSubExpense = (expenseIndex, subIndex) => {
    const updatedExpenses = customExpenses.map((expense, i) => {
      if (i === expenseIndex) {
        const updatedSubExpenses = expense.subExpenses.filter((_, j) => j !== subIndex);
        return { ...expense, subExpenses: updatedSubExpenses };
      }
      return expense;
    });
    setCustomExpenses(updatedExpenses);
  };

  const handleSubExpenseInputChange = (index, field, value) => {
    setSubExpenseInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = { ...newInputs[index], [field]: value }; // Update the specific field
      return newInputs;
    });
  };

  return (
    <div className="section mt-16 mb-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Custom Expenses</h2>
      <div className="border rounded-lg p-4 mb-4 bg-gradient-to-r from-green-100 to-green-200">
        {customExpenses.map((expense, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpenseDropdown(index)}>
              <h3 className="text-lg font-semibold text-gray-800">{expense.name}</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => removeCustomExpense(index)} 
                  className="ml-2 text-red-500" 
                  aria-label={`Remove custom expense ${expense.name}`}
                >
                  <i className="fas fa-times"></i>
                </button>
                <button 
                  className="ml-4 text-gray-600" 
                  aria-label={`Toggle custom expense ${expense.name}`}
                >
                  <i className={`fas fa-chevron-${openExpenseIndexes.includes(index) ? 'up' : 'down'}`}></i>
                </button>
              </div>
            </div>
            
            {/* Dropdown content (sub-expenses and form) */}
            {openExpenseIndexes.includes(index) && (
              <div className="border rounded-lg p-4 mt-2 bg-gradient-to-r from-green-50 to-green-100">
                {/* Display sub-expenses in a premium, styled format */}
                {expense.subExpenses.map((subExpense, subIndex) => (
                  <div key={subIndex} className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-medium">{subExpense.name}</span>
                      <span className="text-sm text-gray-500">£{subExpense.spending} ({subExpense.frequency})</span>
                    </div>
                    <button 
                      onClick={() => removeSubExpense(index, subIndex)} 
                      className="text-red-500 hover:text-red-600"
                      aria-label={`Remove sub-expense ${subExpense.name}`}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}

                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4">
                  <input
                    type="text"
                    value={subExpenseInputs[index]?.name || ''}
                    onChange={(e) => handleSubExpenseInputChange(index, 'name', e.target.value)}
                    placeholder="Sub-Expense Name"
                    className="p-2 border rounded-lg flex-grow mb-2 md:mb-0"
                  />
                  <div className="relative w-32 mb-2 md:mb-0">
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2">£</span>
                    <input
                      type="number"
                      value={subExpenseInputs[index]?.amount || ''}
                      onChange={(e) => handleSubExpenseInputChange(index, 'amount', e.target.value)}
                      placeholder="Amount"
                      className={`pl-6 p-2 border rounded-lg w-full ${subExpenseInputs[index]?.amount < 0 ? 'border-red-500' : ''}`}
                    />
                  </div>
                  <select
                    value={subExpenseInputs[index]?.frequency || 'monthly'}
                    onChange={(e) => handleSubExpenseInputChange(index, 'frequency', e.target.value)}
                    className="p-2 border rounded-lg"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                  <button 
                    onClick={() => addSubExpense(index)} 
                    className="bg-green-500 mt-2 text-white p-2 rounded-lg hover:bg-green-600"
                  >
                    <i className="fas fa-plus mr-1"></i>Add Sub-Expense
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-4">
          {/* Button to toggle input visibility */}
          {!showNewExpenseInput && (
            <button 
              onClick={() => setShowNewExpenseInput(true)} 
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 text-sm"
            >
              <i className="fas fa-plus mr-1"></i>Add Custom Expense
            </button>
          )}

          {/* Show input field if button is clicked */}
          {showNewExpenseInput && (
            <>
              <input
                type="text"
                value={newExpenseName}
                onChange={(e) => setNewExpenseName(e.target.value)}
                placeholder="New Custom Expense Name"
                className="p-2 border rounded-lg mb-4 w-full"
              />
              <button 
                onClick={addCustomExpense} 
                className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 text-sm"
              >
                <i className="fas fa-plus mr-1"></i>Save Custom Expense
              </button>
            </>
          )}
        </div>
      </div>
      <hr className="border-t-2 border-gray-500 my-4" />
    </div>
  );
};

export default CustomExpensesSection;
