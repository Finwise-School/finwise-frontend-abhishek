import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';

const CreditCardPaymentCalculator = () => {
    const [activeTab, setActiveTab] = useState('payOff');
    const [creditCardBalance, setCreditCardBalance] = useState(10000);
    const [annualInterestRate, setAnnualInterestRate] = useState(1);
    const [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState(12);
    const [payOffResult, setPayOffResult] = useState(null);
    const [payOffErrors, setPayOffErrors] = useState({});
    const [balance, setBalance] = useState(5000);
    const [interestRate, setInterestRate] = useState(12);
    const [months, setMonths] = useState(7);
    const [monthlyResult, setMonthlyResult] = useState(null);
    const [monthlyErrors, setMonthlyErrors] = useState({});
    const [payOffMessage, setPayOffMessage] = useState("");

    const validatePayOffForm = () => {
        const newErrors = {};
        if (!creditCardBalance || isNaN(creditCardBalance) || creditCardBalance <= 0) {
            newErrors.creditCardBalance = "Please enter a valid credit card balance greater than zero.";
        }
        if (!annualInterestRate || isNaN(annualInterestRate) || annualInterestRate <= 0) {
            newErrors.annualInterestRate = "Please enter a valid annual interest rate (APR) greater than zero.";
        } else if (annualInterestRate > 1) {
            newErrors.annualInterestRate = "Interest rate must be 1% or lower for payoff calculations.";
        }
        if (!monthlyPaymentAmount || isNaN(monthlyPaymentAmount) || monthlyPaymentAmount <= 0) {
            newErrors.monthlyPaymentAmount = "Please enter a valid monthly payment amount greater than zero.";
        }
        setPayOffErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateMonthlyForm = () => {
        const newErrors = {};
        if (!balance || isNaN(balance) || balance <= 0) {
            newErrors.balance = "Please enter a valid credit card balance greater than zero.";
        }
        if (!interestRate || isNaN(interestRate) || interestRate <= 0) {
            newErrors.interestRate = "Please enter a valid interest rate (APR) percentage greater than zero.";
        }
        if (!months || isNaN(months) || months <= 0) {
            newErrors.months = "Please enter a valid number of months greater than zero.";
        }
        setMonthlyErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculatePayOff = () => {
        if (!validatePayOffForm()) return;
    
        let balanceValue = parseFloat(creditCardBalance);
        const monthlyPayment = parseFloat(monthlyPaymentAmount);
        const monthlyInterestRate = parseFloat(annualInterestRate) / 100 / 12;
    
        // Check if the payment is less than the monthly interest charged
        if (monthlyPayment <= (balanceValue * monthlyInterestRate)) {
            setPayOffMessage("Your monthly payment is less than the monthly interest charged by this card. You will never pay off the debt.");
            setPayOffResult(null);
            return;
        }
    
        // Calculate the precise months to pay off (without rounding yet)
        const exactMonthsToPayOff = Math.log(monthlyPayment / (monthlyPayment - monthlyInterestRate * balanceValue)) / Math.log(1 + monthlyInterestRate);
    
        // Calculate the exact total to pay back and total interest with this value
        const exactTotalToPayBack = exactMonthsToPayOff * monthlyPayment;
        const exactTotalInterest = exactTotalToPayBack - balanceValue;
    
        // Round to two decimal places for currency formatting
        const roundedTotalToPayBack = exactTotalToPayBack.toFixed(2);
        const roundedTotalInterest = exactTotalInterest.toFixed(2);
        const roundedMonthsToPayOff = Math.ceil(exactMonthsToPayOff); // Round up to ensure complete months
    
        // Update state with calculated values
        setPayOffResult({
            monthsToPayOff: roundedMonthsToPayOff,
            totalInterestPaid: roundedTotalInterest,
            totalAmountPaid: roundedTotalToPayBack,
        });
        setPayOffMessage(""); // Clear any messages
    };
    
    const calculateMonthlyRepayment = () => {
        if (!validateMonthlyForm()) return;

        let balanceValue = parseFloat(balance);
        const interestValue = parseFloat(interestRate) / 100 / 12;
        const monthCount = parseInt(months);

        const monthlyPayment = (balanceValue * interestValue) / (1 - Math.pow(1 + interestValue, -monthCount));
        const totalPayment = monthlyPayment * monthCount;
        const totalInterest = totalPayment - balanceValue;

        setMonthlyResult({
            monthlyPayment: monthlyPayment.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            totalCost: totalPayment.toFixed(2),
        });
    };

    useEffect(() => {
        if (activeTab === 'payOff') {
            calculatePayOff();
        } else if (activeTab === 'monthly') {
            calculateMonthlyRepayment();
        }
    }, [creditCardBalance, annualInterestRate, monthlyPaymentAmount, balance, interestRate, months, activeTab]);

    return (
        <div className="bg-gradient-to-br p-4 rounded-xl shadow-lg max-w-6xl mx-auto mt-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold finwise-green">Credit Card Calculator</h1>
                <p className="finwise-blue">Easily manage your credit card payments and get debt-free faster!</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center space-x-2 mb-6">
    <button
        className={`text-sm sm:text-lg font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full focus:outline-none transition-transform transform ${activeTab === 'payOff'
            ? 'finwise-green-bg text-white shadow-md'
            : 'bg-white text-black border border-gray-300 shadow-sm'
            }`}
        onClick={() => setActiveTab('payOff')}
    >
        Pay Off Calculator
    </button>
    <button
        className={`text-sm sm:text-lg font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full focus:outline-none transition-transform transform ${activeTab === 'monthly'
            ? 'finwise-green-bg text-white shadow-md'
            : 'bg-white text-black border border-gray-300 shadow-sm'
            }`}
        onClick={() => setActiveTab('monthly')}
    >
        Monthly Repayment Calculator
    </button>
</div>


            {/* Pay Off Calculator */}
            {activeTab === 'payOff' && (
                <div className="glass-card p-4 rounded-xl  mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pay Off Calculator</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                            <label htmlFor="credit-card-balance" className="text-lg text-gray-700">Credit Card Balance (£)</label>
                            <input
                                type="number"
                                id="credit-card-balance"
                                value={creditCardBalance}
                                onChange={(e) => setCreditCardBalance(e.target.value)}
                                className="glass-input p-3 rounded-lg text-lg bg-green-100 text-gray-800 font-semibold text-right w-24 focus:outline-none"
                            />
                        </div>
                        {payOffErrors.creditCardBalance && <p className="text-red-500">{payOffErrors.creditCardBalance}</p>}

                        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                            <label htmlFor="annual-interest-rate" className="text-lg text-gray-700">Interest Rate (APR %)</label>
                            <input
                                type="number"
                                id="annual-interest-rate"
                                value={annualInterestRate}
                                onChange={(e) => setAnnualInterestRate(e.target.value)}
                                className="glass-input p-3 rounded-lg text-lg bg-green-100 text-gray-800 font-semibold text-right w-24 focus:outline-none"
                            />
                        </div>
                        {payOffErrors.annualInterestRate && <p className="text-red-500">{payOffErrors.annualInterestRate}</p>}

                        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                            <label htmlFor="monthly-payment-amount" className="text-lg text-gray-700">Payment Amount Per Month (£)</label>
                            <input
                                type="number"
                                id="monthly-payment-amount"
                                value={monthlyPaymentAmount}
                                onChange={(e) => setMonthlyPaymentAmount(e.target.value)}
                                className="glass-input p-3 rounded-lg text-lg bg-green-100 text-gray-800 font-semibold text-right w-24 focus:outline-none"
                            />
                        </div>
                        {payOffErrors.monthlyPaymentAmount && <p className="text-red-500">{payOffErrors.monthlyPaymentAmount}</p>}

                        {payOffMessage && <p className="text-red-500">{payOffMessage}</p>}

                        {payOffResult && (
                            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Results Summary</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-lg shadow-md">
                                        <span className="text-lg font-semibold text-green-500">Months to Pay Off:</span>
                                        <span className="text-lg font-bold text-green-500">{payOffResult.monthsToPayOff}</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-md">
                                        <span className="text-lg font-semibold text-yellow-600">Total Interest Paid:</span>
                                        <span className="text-lg font-bold text-yellow-600">£{Number(payOffResult.totalInterestPaid).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
                                        <span className="text-lg font-semibold text-blue-500">Total Amount Paid:</span>
                                        <span className="text-lg font-bold text-blue-500">£{Number(payOffResult.totalAmountPaid).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}

            {/* Monthly Repayment Calculator */}
            {activeTab === 'monthly' && (
                <div className="glass-card p-4 rounded-xl  mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly Repayment Calculator</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                            <label htmlFor="balance" className="text-lg text-gray-700">Credit Card Balance (£)</label>
                            <input
                                type="number"
                                id="balance"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                                className="glass-input p-3 rounded-lg text-lg bg-green-100 text-gray-800 font-semibold text-right w-24 focus:outline-none"
                            />
                        </div>
                        {monthlyErrors.balance && <p className="text-red-500">{monthlyErrors.balance}</p>}

                        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                            <label htmlFor="interest-rate" className="text-lg text-gray-700">Interest Rate (APR %)</label>
                            <input
                                type="number"
                                id="interest-rate"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                                className="glass-input p-3 rounded-lg text-lg bg-green-100 text-gray-800 font-semibold text-right w-24 focus:outline-none"
                            />
                        </div>
                        {monthlyErrors.interestRate && <p className="text-red-500">{monthlyErrors.interestRate}</p>}

                        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                            <label htmlFor="months" className="text-lg text-gray-700">Number of Months</label>
                            <input
                                type="number"
                                id="months"
                                value={months}
                                onChange={(e) => setMonths(e.target.value)}
                                className="glass-input p-3 rounded-lg text-lg bg-green-100 text-gray-800 font-semibold text-right w-24 focus:outline-none"
                            />
                        </div>
                        {monthlyErrors.months && <p className="text-red-500">{monthlyErrors.months}</p>}

                        <div className="mt-6">
                            {monthlyResult && (
                                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Results Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between p-4 bg-green-50 border-l-4 border-green-400 rounded-lg shadow-md">
                                            <span className="text-lg font-semibold text-green-500">Monthly Payment:</span>
                                            <span className="text-lg font-bold text-green-500">£{Number(monthlyResult.monthlyPayment).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-md">
                                            <span className="text-lg font-semibold text-yellow-600">Total Interest:</span>
                                            <span className="text-lg font-bold text-yellow-600">£{Number(monthlyResult.totalInterest).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
                                            <span className="text-lg font-semibold text-blue-500">Total Cost:</span>
                                            <span className="text-lg font-bold text-blue-500">£{Number(monthlyResult.totalCost).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}

            <Tool_Footer message='Take Control of Your Credit Card Payments!. Start managing your credit wisely!'/>
            <CalculatorList activeCalculator="Credit Card Calculator"/>
        </div>
    );
};

export default CreditCardPaymentCalculator;
