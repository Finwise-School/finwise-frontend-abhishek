import React, { useState } from 'react';

const OtherSpendingsSection = ({ 
  technologySpendings, setTechnologySpendings,
  entertainmentSpendings, setEntertainmentSpendings,
  healthSpendings, setHealthSpendings,
  transportSpendings, setTransportSpendings,
  familySpendings, setFamilySpendings,
  financeSpendings, setFinanceSpendings,
}) => {
  // State to manage which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState({
    Technology: false,
    Entertainment: false,
    Health: false,
    Transport: false,
    Family: false,
    Finance: false,
  });

  // Function to handle changes in spending input
  const handleSpendingChange = (category, index, field, value) => {
    let newSpendings;
    if (category === 'Technology') {
      newSpendings = [...technologySpendings];
      newSpendings[index][field] = value;
      setTechnologySpendings(newSpendings);
    } else if (category === 'Entertainment') {
      newSpendings = [...entertainmentSpendings];
      newSpendings[index][field] = value;
      setEntertainmentSpendings(newSpendings);
    } else if (category === 'Health') {
      newSpendings = [...healthSpendings];
      newSpendings[index][field] = value;
      setHealthSpendings(newSpendings);
    } else if (category === 'Transport') {
      newSpendings = [...transportSpendings];
      newSpendings[index][field] = value;
      setTransportSpendings(newSpendings);
    } else if (category === 'Family') {
      newSpendings = [...familySpendings];
      newSpendings[index][field] = value;
      setFamilySpendings(newSpendings);
    } else if (category === 'Finance') {
      newSpendings = [...financeSpendings];
      newSpendings[index][field] = value;
      setFinanceSpendings(newSpendings);
    }
  };

  // Function to handle deletion of spending
  const handleSpendingDelete = (category, index) => {
    if (category === 'Technology') {
      setTechnologySpendings(technologySpendings.filter((_, i) => i !== index));
    } else if (category === 'Entertainment') {
      setEntertainmentSpendings(entertainmentSpendings.filter((_, i) => i !== index));
    } else if (category === 'Health') {
      setHealthSpendings(healthSpendings.filter((_, i) => i !== index));
    } else if (category === 'Transport') {
      setTransportSpendings(transportSpendings.filter((_, i) => i !== index));
    } else if (category === 'Family') {
      setFamilySpendings(familySpendings.filter((_, i) => i !== index));
    } else if (category === 'Finance') {
      setFinanceSpendings(financeSpendings.filter((_, i) => i !== index));
    }
  };

  // Render input fields for each spending
  const renderSpendingInputs = (spending, index, category) => (
    <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
      <label className="font-semibold mb-2 text-gray-400">{`Spending ${index + 1}`}</label>
      <input
        type="text"
        value={spending.name}
        onChange={(e) => handleSpendingChange(category, index, 'name', e.target.value)}
        placeholder="Spending Name"
        className="p-2 border rounded-lg flex-grow mb-2 md:mb-0"
      />
      <div className="flex items-center mb-2 md:mb-0">
        <div className="relative w-32">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">£</span>
          <input
            type="number"
            value={spending.spending}
            onChange={(e) => handleSpendingChange(category, index, 'spending', parseFloat(e.target.value) || 0)}
            placeholder="Spending Amount"
            className="pl-6 p-2 border rounded-lg w-full"
          />
        </div>
        <span className="ml-2">per</span>
        <select
          value={spending.frequency}
          onChange={(e) => handleSpendingChange(category, index, 'frequency', e.target.value)}
          className="p-2 border rounded-lg ml-2"
        >
          <option value="weekly">Week</option>
          <option value="monthly">Month</option>
        </select>
        <button 
          onClick={() => handleSpendingDelete(category, index)} 
          className="ml-2 text-red-500" 
          aria-label={`Delete spending ${index + 1} from ${category}`}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );

  // Function to render category sections
  const renderCategory = (category, spendings, setSpendings) => (
    <div className="border rounded-lg p-4 mb-4 bg-gradient-to-r from-green-100 to-green-200">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mt-2 mb-2">{category}</h3>
        <button
          onClick={() => setExpandedCategories({ ...expandedCategories, [category]: !expandedCategories[category] })}
          className="text-green-500 font-semibold text-2xl"
        >
          {expandedCategories[category] ? '-' : '+'}
        </button>
      </div>
      {expandedCategories[category] && spendings.map((spending, index) => renderSpendingInputs(spending, index, category))}
      {expandedCategories[category] && (
        <button
          onClick={() => {
            const newSpending = { name: '', spending: 0, frequency: 'monthly' };
            setSpendings([...spendings, newSpending]);
          }}
          className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 mt-2 text-sm"
        >
          Add {category} Spending
        </button>
      )}
      
    </div>
  );

  return (
    <div className="section mb-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Other Spendings 💸</h2>
      {renderCategory('Technology', technologySpendings, setTechnologySpendings)}
      {renderCategory('Entertainment', entertainmentSpendings, setEntertainmentSpendings)}
      {renderCategory('Health', healthSpendings, setHealthSpendings)}
      {renderCategory('Transport', transportSpendings, setTransportSpendings)}
      {renderCategory('Family', familySpendings, setFamilySpendings)}
      {renderCategory('Finance', financeSpendings, setFinanceSpendings)}
    </div>
  );
};

export default OtherSpendingsSection;
