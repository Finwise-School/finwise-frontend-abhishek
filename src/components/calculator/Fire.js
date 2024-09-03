import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';


const Fire = () => {
    const [monthlyExpense, setMonthlyExpense] = useState(50000);
    const [currentAge, setCurrentAge] = useState(20);
    const [retirementAge, setRetirementAge] = useState(40);
    const [inflationRate, setInflationRate] = useState(10);
    const [result, setResult] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let validationErrors = {};

        // Validate monthlyExpense
        if (isNaN(monthlyExpense) || monthlyExpense <= 0) {
            validationErrors.monthlyExpense = "Monthly expense must be a positive number.";
        }

        // Validate currentAge
        if (isNaN(currentAge) || currentAge <= 0) {
            validationErrors.currentAge = "Current age must be a positive number.";
        }

        // Validate retirementAge
        if (isNaN(retirementAge) || retirementAge <= 0) {
            validationErrors.retirementAge = "Retirement age must be a positive number.";
        } else if (parseInt(currentAge) >= parseInt(retirementAge)) {
            validationErrors.retirementAge = "Retirement age must be greater than current age.";
        }

        // Validate inflationRate
        if (isNaN(inflationRate) || inflationRate <= 0) {
            validationErrors.inflationRate = "Inflation rate must be a positive number.";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0; // Return true if no errors
    };

    const calculateFIRE = () => {
        if (!validateForm()) return; // Only calculate if the form is valid

        const monthlyExpenseValue = parseFloat(monthlyExpense);
        const currentAgeValue = parseInt(currentAge);
        const retirementAgeValue = parseInt(retirementAge);
        const inflationRateValue = parseFloat(inflationRate) / 100;

        const yearsUntilRetirement = retirementAgeValue - currentAgeValue;
        const annualExpenseToday = monthlyExpenseValue * 12;
        const futureExpense = annualExpenseToday * Math.pow(1 + inflationRateValue, yearsUntilRetirement);

        const leanFIRE = futureExpense * 20;
        const fire = futureExpense * 25;
        const fatFIRE = futureExpense * 50;

        setResult({
            expenseToday: annualExpenseToday.toFixed(0),
            expenseAtRetirement: futureExpense.toFixed(0),
            leanFIRE: leanFIRE.toFixed(0),
            fire: fire.toFixed(0),
            fatFIRE: fatFIRE.toFixed(0),
        });
    };

    useEffect(() => {
        calculateFIRE();
    }, [monthlyExpense, currentAge, retirementAge, inflationRate]);

    return (
        <div className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">FIRE Calculator</h1>
                    <p className="finwise-blue">Financial Independence Retire Early Calculator</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold finwise-blue mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="monthly-expense" className="text-gray-700">Monthly Expense</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="monthly-expense"
                                        value={monthlyExpense}
                                        onChange={(e) => setMonthlyExpense(e.target.value)}
                                        className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            {errors.monthlyExpense && <p className="text-red-500 text-sm">{errors.monthlyExpense}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="current-age" className="text-gray-700">Current Age</label>
                                <input
                                    type="number"
                                    id="current-age"
                                    value={currentAge}
                                    onChange={(e) => setCurrentAge(e.target.value)}
                                    className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.currentAge && <p className="text-red-500 text-sm">{errors.currentAge}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="retirement-age" className="text-gray-700">Retirement Age</label>
                                <input
                                    type="number"
                                    id="retirement-age"
                                    value={retirementAge}
                                    onChange={(e) => setRetirementAge(e.target.value)}
                                    className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.retirementAge && <p className="text-red-500 text-sm">{errors.retirementAge}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="inflation-rate" className="text-gray-700">Assumed Inflation Rate</label>
                                <input
                                    type="number"
                                    id="inflation-rate"
                                    value={inflationRate}
                                    onChange={(e) => setInflationRate(e.target.value)}
                                    className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.inflationRate && <p className="text-red-500 text-sm">{errors.inflationRate}</p>}
                        </div>
                    </div>
                    {/* Output Fields */}
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold finwise-blue mb-4">Results:</h2>
                        {result && (
                            <div className="space-y-2">
                                <div className="grid grid-cols-1 gap-2" style={{ "row-gap": "0.6rem" }}>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Expense Today</p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.expenseToday}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">Expense at {retirementAge} <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.expenseAtRetirement}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">Lean FIRE <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.leanFIRE}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">FIRE <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.fire}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">FAT FIRE <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.fatFIRE}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Tool_Footer message="Discover how to achieve financial independence and retire early. Begin your journey to a secure future!"/>


                <CalculatorList activeCalculator="FIRE Calculator" />

            </div>
        </div>
    );
};

export default Fire;
