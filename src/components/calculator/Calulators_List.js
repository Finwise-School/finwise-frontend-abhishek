import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const calculators = [
  { path: "/tools/fixed-deposit", name: "Fixed Deposit Calculator" },
  { path: "/tools/goal-sip", name: "Goal SIP Calculator" },
  { path: "/tools/sip", name: "SIP Calculator" },
  { path: "/tools/fire", name: "FIRE Calculator" },
  { path: "/tools/cagr", name: "CAGR Calculator" },
  { path: "/tools/emi", name: "EMI Calculator" },
  { path: "/tools/mortgage", name: "Home Mortgage Calculator" },
  { path: "/tools/tax", name: "Tax Calculator" }
];

const CalculatorList = ({ activeCalculator }) => {
  return (
    <div className="mt-16">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Try our more Popular Calculators</h2>
      <div className="space-y-2">
        {calculators.map(calculator => (
          <Link
            key={calculator.path}
            to={calculator.path}
            className={`flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 ${activeCalculator === calculator.name ? 'text-green-500' : 'text-gray-800'}`}
          >
            <p className={activeCalculator === calculator.name ? 'finwise-green' : ''}>{calculator.name}</p>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CalculatorList;
