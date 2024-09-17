import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';
import Info from './info/Borrower_Info';


const MortgageBorrowerCalculator = () => {
    const [annualSalary, setAnnualSalary] = useState(50000);
    const [otherIncome, setOtherIncome] = useState(0);
    const [secondApplicant, setSecondApplicant] = useState(false);
    const [secondAnnualSalary, setSecondAnnualSalary] = useState(0);
    const [secondOtherIncome, setSecondOtherIncome] = useState(0);
    const [deposit, setDeposit] = useState(20000);

    const [result, setResult] = useState({
        borrowingAmount: "0",
        depositAmount: "0",
    });

    const [errors, setErrors] = useState({
        annualSalary: "",
        otherIncome: "",
        secondAnnualSalary: "",
        secondOtherIncome: "",
        deposit: "",
    });

    const validateForm = () => {
        let valid = true;
        let newErrors = {
            annualSalary: "",
            otherIncome: "",
            secondAnnualSalary: "",
            secondOtherIncome: "",
            deposit: ""
        };

        if (annualSalary <= 0 || isNaN(annualSalary)) {
            newErrors.annualSalary = "Please enter a valid annual salary.";
            valid = false;
        }
        if (otherIncome < 0 || isNaN(otherIncome)) {
            newErrors.otherIncome = "Please enter a valid other income amount.";
            valid = false;
        }
        if (secondApplicant && (secondAnnualSalary <= 0 || isNaN(secondAnnualSalary))) {
            newErrors.secondAnnualSalary = "Please enter a valid second applicant's annual salary.";
            valid = false;
        }
        if (secondApplicant && (secondOtherIncome < 0 || isNaN(secondOtherIncome))) {
            newErrors.secondOtherIncome = "Please enter a valid second applicant's other income amount.";
            valid = false;
        }
        if (deposit <= 0 || isNaN(deposit)) {
            newErrors.deposit = "Please enter a valid deposit amount.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const formatNumber = (num) => {
        return parseFloat(num).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    const calculateBorrowing = () => {
        if (!validateForm()) return;

        const applicantIncome = parseFloat(annualSalary) + parseFloat(otherIncome);
        let totalIncome = applicantIncome;

        if (secondApplicant) {
            const secondApplicantIncome = parseFloat(secondAnnualSalary) + parseFloat(secondOtherIncome);
            totalIncome += secondApplicantIncome;
        }

        const borrowingMultiplier = 4;
        const borrowingAmount = totalIncome * borrowingMultiplier;

        setResult({
            borrowingAmount: formatNumber(borrowingAmount),
            depositAmount: formatNumber(deposit),
        });
    };

    useEffect(() => {
        calculateBorrowing();
    }, [annualSalary, otherIncome, secondApplicant, secondAnnualSalary, secondOtherIncome, deposit]);

    // Data for the Doughnut graph
    const totalPropertyValue = parseFloat(result.borrowingAmount.replace(/,/g, '')) + parseFloat(result.depositAmount.replace(/,/g, ''));
    const ltvPercentage = (parseFloat(result.borrowingAmount.replace(/,/g, '')) / totalPropertyValue) * 100;

    const data = {
        labels: ['Borrowing Amount'],
        datasets: [
            {
                label: 'Loan to Value',
                data: [100], // Show as 100% since it's total loan value
                backgroundColor: ['#FF9800'], // Orange for the full value
                borderColor: ['#FB8C00'],
                borderWidth: 2,
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">Mortgage Borrower Calculator</h1>
                    <p className="finwise-blue">Calculate how much you can borrow based on your income and deposit</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            {/* Input fields for salaries, deposit, and second applicant */}
                            <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.annualSalary ? 'border-red-500' : 'border-gray-300'}`}>
                                <label htmlFor="annualSalary" className="text-gray-700">Your Annual Salary</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="annualSalary"
                                        value={annualSalary}
                                        onChange={(e) => setAnnualSalary(e.target.value)}
                                        className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            {errors.annualSalary && <p className="text-red-500 text-sm">{errors.annualSalary}</p>}

                            <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.otherIncome ? 'border-red-500' : 'border-gray-300'}`}>
                                <label htmlFor="otherIncome" className="text-gray-700">Other Income</label>
                                <input
                                    type="number"
                                    id="otherIncome"
                                    value={otherIncome}
                                    onChange={(e) => setOtherIncome(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.otherIncome && <p className="text-red-500 text-sm">{errors.otherIncome}</p>}

                            <div className={`flex items-center justify-between p-4 border rounded-lg`}>
                                <label htmlFor="secondApplicant" className="text-gray-700">Do you have a second applicant?</label>
                                <select
                                    id="secondApplicant"
                                    value={secondApplicant ? 'yes' : 'no'}
                                    onChange={(e) => setSecondApplicant(e.target.value === 'yes')}
                                    className="bg-green-100 text-gray-800 font-semibold p-2 rounded-lg"
                                >
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>

                            {secondApplicant && (
                                <>
                                    <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.secondAnnualSalary ? 'border-red-500' : 'border-gray-300'}`}>
                                        <label htmlFor="secondAnnualSalary" className="text-gray-700">Second Applicant Annual Salary</label>
                                        <input
                                            type="number"
                                            id="secondAnnualSalary"
                                            value={secondAnnualSalary}
                                            onChange={(e) => setSecondAnnualSalary(e.target.value)}
                                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                    {errors.secondAnnualSalary && <p className="text-red-500 text-sm">{errors.secondAnnualSalary}</p>}

                                    <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.secondOtherIncome ? 'border-red-500' : 'border-gray-300'}`}>
                                        <label htmlFor="secondOtherIncome" className="text-gray-700">Second Applicant Other Income</label>
                                        <input
                                            type="number"
                                            id="secondOtherIncome"
                                            value={secondOtherIncome}
                                            onChange={(e) => setSecondOtherIncome(e.target.value)}
                                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                    {errors.secondOtherIncome && <p className="text-red-500 text-sm">{errors.secondOtherIncome}</p>}
                                </>
                            )}

                            <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.deposit ? 'border-red-500' : 'border-gray-300'}`}>
                                <label htmlFor="deposit" className="text-gray-700">Deposit Amount</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="deposit"
                                        value={deposit}
                                        onChange={(e) => setDeposit(e.target.value)}
                                        className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            {errors.deposit && <p className="text-red-500 text-sm">{errors.deposit}</p>}
                        </div>
                    </div>

                    {/* Output Fields and Graph */}
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        <div className="space-y-2">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">Borrowing Amount</p>
                                <p className="finwise-green font-semibold text-xl">&#163;{result.borrowingAmount}</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">Deposit Amount</p>
                                <p className="finwise-green font-semibold text-xl">&#163;{result.depositAmount}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "-100px"}} className="flex items-center justify-center">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                        <h1 className="text-center text-lg font-bold text-[#004B87] mb-6">You could borrow up to</h1>

                        <div className="flex items-center justify-center mb-6">
                            <div className="relative">
                                {/* Updated width and height for responsive and bigger graph */}
                                <div style={{borderWidth: "29px"}} className="w-64 h-64 rounded-full border-8 border-orange-500 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-orange-500">
                                            &#163;{formatNumber(parseFloat(result.borrowingAmount.replace(/,/g, '')))}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold text-lg">{ltvPercentage.toFixed(0)}%</span> Loan to Value
                                            <span className="fas fa-info-circle text-[#004B87] ml-1"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mb-4">
                            <div className="text-center">
                                <p className="text-green-600 font-medium">Borrowing amount</p>
                                <p className="text-[#004B87] font-bold">&#163;{formatNumber(parseFloat(result.borrowingAmount.replace(/,/g, '')))}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-orange-500 font-medium">Deposit amount</p>
                                <p className="text-[#004B87] font-bold">&#163;{formatNumber(parseFloat(result.depositAmount.replace(/,/g, '')))}</p>
                            </div>
                        </div>

                        <hr className="border-t border-gray-300 mb-4" />

                        <p className="text-center text-sm text-gray-500 mb-4">
                            Based on your salary and deposit, you could buy a property up to
                        </p>

                        {/* Increased font size and made the value bigger */}
                        <p className="text-center text-[#004B87] text-4xl font-bold mb-4">
                            &#163;{formatNumber(totalPropertyValue)}
                        </p>

                    </div>
                </div>

                <Tool_Footer message="Calculate how much you can borrow based on your income and deposit!" />
                <Info/>
                <CalculatorList activeCalculator="Mortgage Borrower Calculator" />
            </div>
        </div>
    );
};

export default MortgageBorrowerCalculator;
