import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';
import { Doughnut, Line } from 'react-chartjs-2';
import Info from './info/SIP_Info';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, LineElement, PointElement, CategoryScale, LinearScale);

const SIP = () => {
    const [investmentMethod, setInvestmentMethod] = useState('sip');
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [lumpSumInvestment, setLumpSumInvestment] = useState(0);
    const [annualReturns, setAnnualReturns] = useState(3);
    const [timePeriod, setTimePeriod] = useState(5);
    const [result, setResult] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (investmentMethod === 'sip' && (!monthlyInvestment || isNaN(monthlyInvestment) || monthlyInvestment <= 0)) {
            newErrors.monthlyInvestment = "Please enter a valid monthly investment amount greater than zero.";
        }

        if (investmentMethod === 'lumpSum' && (!lumpSumInvestment || isNaN(lumpSumInvestment) || lumpSumInvestment <= 0)) {
            newErrors.lumpSumInvestment = "Please enter a valid lump sum investment amount greater than zero.";
        }

        if (!annualReturns || isNaN(annualReturns) || annualReturns <= 0) {
            newErrors.annualReturns = "Please enter a valid annual return percentage greater than zero.";
        }

        if (!timePeriod || isNaN(timePeriod) || timePeriod <= 0) {
            newErrors.timePeriod = "Please enter a valid time period in years greater than zero.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getChartData = () => {
        if (!result) return {};

        const data = {
            labels: ['Invested Amount', 'Returns'],
            datasets: [{
                data: [parseFloat(result.investedAmount), parseFloat(result.returnsGenerated)],
                backgroundColor: ['#4CAF50', '#FFC107'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 1,
            }]
        };

        return data;
    };

    const getLineChartData = () => {
        if (!result) return {};

        const years = Array.from({ length: timePeriod }, (_, i) => i + 1);
        const investedAmounts = years.map(year => {
            if (investmentMethod === 'sip') {
                const r = annualReturns / 100 / 12;
                const n = year * 12;
                return (monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)).toFixed(2);
            } else if (investmentMethod === 'lumpSum') {
                const r = annualReturns / 100;
                return (lumpSumInvestment * Math.pow(1 + r, year)).toFixed(2);
            }
            return 0;
        });

        const data = {
            labels: years,
            datasets: [
                {
                    label: 'Investment Value',
                    data: investedAmounts,
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true,
                },
            ],
        };

        return data;
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat().format(num);
    };

    const calculateMutualFund = () => {
        if (!validateForm()) return; // Stop if the form is invalid

        const annualReturnsValue = parseFloat(annualReturns);
        const years = parseInt(timePeriod);

        let investedAmount = 0;
        let totalAmount = 0;

        if (investmentMethod === 'sip') {
            const monthlyInvestmentValue = parseFloat(monthlyInvestment);
            const r = annualReturnsValue / 100 / 12; // Monthly interest rate
            const n = years * 12; // Total number of investments

            totalAmount = monthlyInvestmentValue * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
            investedAmount = monthlyInvestmentValue * n;
        } else if (investmentMethod === 'lumpSum') {
            const lumpSumInvestmentValue = parseFloat(lumpSumInvestment);
            const r = annualReturnsValue / 100;
            const n = years;

            totalAmount = lumpSumInvestmentValue * Math.pow(1 + r, n);
            investedAmount = lumpSumInvestmentValue;
        }

        totalAmount = parseFloat(totalAmount.toFixed(2));
        investedAmount = parseFloat(investedAmount.toFixed(2));

        const returnsGenerated = totalAmount - investedAmount;

        setResult({
            investedAmount: formatNumber(investedAmount.toFixed(0)),
            returnsGenerated: formatNumber(returnsGenerated.toFixed(0)),
            totalAmount: formatNumber(totalAmount.toFixed(0)),
        });
    };

    useEffect(() => {
        calculateMutualFund();
    }, [investmentMethod, monthlyInvestment, lumpSumInvestment, annualReturns, timePeriod]);

    return (
        <div style={{ marginTop: "0px" }} className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">SIP Calculator</h1>
                    <p className="finwise-blue">Calculate your mutual funds investment returns</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields Box */}
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="investment-method" className="text-gray-700">Investment Method</label>
                                <select
                                    id="investment-method"
                                    value={investmentMethod}
                                    onChange={(e) => setInvestmentMethod(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-30"
                                >
                                    <option value="sip">SIP</option>
                                    <option value="lumpSum">Lump Sum</option>
                                </select>
                            </div>
                            {investmentMethod === 'sip' && (
                                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                    <label htmlFor="monthly-investment" className="text-gray-700">Monthly Investment</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">£</span>
                                        <input
                                            type="number"
                                            id="monthly-investment"
                                            value={monthlyInvestment}
                                            onChange={(e) => setMonthlyInvestment(e.target.value)}
                                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {errors.monthlyInvestment && <p className="text-red-500 text-sm">{errors.monthlyInvestment}</p>}

                            {investmentMethod === 'lumpSum' && (
                                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                    <label htmlFor="lump-sum-investment" className="text-gray-700">Lump Sum Investment</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">£</span>
                                        <input
                                            type="number"
                                            id="lump-sum-investment"
                                            value={lumpSumInvestment}
                                            onChange={(e) => setLumpSumInvestment(e.target.value)}
                                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {errors.lumpSumInvestment && <p className="text-red-500 text-sm">{errors.lumpSumInvestment}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="annual-returns" className="text-gray-700">Expected Annual Returns (%)</label>
                                <input
                                    type="number"
                                    id="annual-returns"
                                    value={annualReturns}
                                    onChange={(e) => setAnnualReturns(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.annualReturns && <p className="text-red-500 text-sm">{errors.annualReturns}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="time-period" className="text-gray-700">Time Period (Years)</label>
                                <input
                                    type="number"
                                    id="time-period"
                                    value={timePeriod}
                                    onChange={(e) => setTimePeriod(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.timePeriod && <p className="text-red-500 text-sm">{errors.timePeriod}</p>}
                        </div>
                    </div>

                    {/* Results Box */}
                    <div className="" style={{marginTop: "-5rem"}}>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        {result && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-2" style={{ rowGap: '0.6rem' }}>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Invested Amount</p>
                                        <p className="finwise-green font-semibold text-xl">£{result.investedAmount}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Returns Generated</p>
                                        <p className="finwise-green font-semibold text-xl">£{result.returnsGenerated}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Total Amount</p>
                                        <p className="finwise-green font-semibold text-xl">£{result.totalAmount}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {result && (
                    <div className="" style={{marginTop: "-5rem"}}>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Investment Growth Over Time</h2>
                        <div className="grid-for-calci grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex justify-center">
                                <div className="w-full" style={{ maxWidth: '600px', maxHeight: '600px' }}>
                                    <Line
                                        data={getLineChartData()}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'top',
                                                },
                                                tooltip: {
                                                    callbacks: {
                                                        title: (tooltipItems) => {
                                                            // Display year as title
                                                            return `Year ${tooltipItems[0].label}`;
                                                        },
                                                        label: (tooltipItem) => {
                                                            const value = tooltipItem.raw;
                                                            return `£${formatNumber(value)}`;
                                                        }
                                                    }
                                                }
                                            },
                                            scales: {
                                                x: {
                                                    title: {
                                                        display: true,
                                                        text: 'Years'
                                                    }
                                                },
                                                y: {
                                                    title: {
                                                        display: true,
                                                        text: 'Amount'
                                                    },
                                                    beginAtZero: true
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-full" style={{ maxWidth: '300px', maxHeight: '300px' }}>
                                    <Doughnut
                                        data={getChartData()}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'top',
                                                },
                                                tooltip: {
                                                    callbacks: {
                                                        label: (tooltipItem) => {
                                                            return `${tooltipItem.label}: £${formatNumber(tooltipItem.raw)}`;
                                                        }
                                                    }
                                                }
                                            },
                                            cutout: '60%',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <Tool_Footer message="Analyze your mutual fund investments and their potential returns." />
                <Info/>
                <CalculatorList activeCalculator="SIP Calculator" />
            </div>
        </div>
    );
};

export default SIP;
