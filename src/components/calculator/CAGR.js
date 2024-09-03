import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';


const CAGRCalculator = () => {
    const [buyPrice, setBuyPrice] = useState(10000.00); 
    const [sellPrice, setSellPrice] = useState(15000.00);
    const [buyDate, setBuyDate] = useState('2020-01-01');
    const [sellDate, setSellDate] = useState('2024-01-01');
    const [result, setResult] = useState({
        absoluteReturn: "0",
        cagrReturn: "0",
        percentageReturn: "0"
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let validationErrors = {};
        let isValid = true;

        if (isNaN(buyPrice) || buyPrice <= 0) {
            validationErrors.buyPrice = "Buy Price must be a positive number.";
            isValid = false;
        }

        if (isNaN(sellPrice) || sellPrice <= 0) {
            validationErrors.sellPrice = "Sell Price must be a positive number.";
            isValid = false;
        }

        
        const buyDateObj = new Date(buyDate);
        const sellDateObj = new Date(sellDate);
        if (buyDateObj >= sellDateObj) {
            validationErrors.dates = "Sell Date must be after Buy Date.";
            isValid = false;
        }

        setErrors(validationErrors);
        return isValid;
    };

    const calculateReturns = () => {
        if (!validateForm()) return;

        const P = parseFloat(buyPrice);
        const F = parseFloat(sellPrice);
        const buyDateObj = new Date(buyDate);
        const sellDateObj = new Date(sellDate);

        const years = (sellDateObj - buyDateObj) / (1000 * 60 * 60 * 24 * 365);

        if (isNaN(P) || isNaN(F) || isNaN(years) || years <= 0) {
            return;
        }

        const absoluteReturn = F - P;

        const percentageReturn = (absoluteReturn / P) * 100;

        const cagrReturn = (((F / P) ** (1 / years)) - 1) * 100;

        setResult({
            absoluteReturn: absoluteReturn.toFixed(2),
            cagrReturn: cagrReturn.toFixed(2),
            percentageReturn: percentageReturn.toFixed(2)
        });
    };

    useEffect(() => {
        calculateReturns();
    }, [buyPrice, sellPrice, buyDate, sellDate]);

    return (
        <div className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">CAGR Calculator</h1>
                    <p className="finwise-blue">Calculate your absolute return and CAGR based on buy/sell price and dates</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            {/* Buy Price */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="buyPrice" className="text-gray-700">Buy Price</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="buyPrice"
                                        value={buyPrice}
                                        onChange={(e) => setBuyPrice(e.target.value)}
                                        className={`bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24 ${errors.buyPrice ? 'border-red-500' : ''}`}
                                    />
                                </div>
                            </div>
                            {errors.buyPrice && <p className="text-red-500 text-sm">{errors.buyPrice}</p>}

                            {/* Buy Date */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="buyDate" className="text-gray-700">Buy Date</label>
                                <input
                                    type="date"
                                    id="buyDate"
                                    value={buyDate}
                                    onChange={(e) => setBuyDate(e.target.value)}
                                    className={`bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-40 ${errors.dates ? 'border-red-500' : ''}`}
                                />
                            </div>

                            {/* Sell Price */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="sellPrice" className="text-gray-700">Sell Price</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="sellPrice"
                                        value={sellPrice}
                                        onChange={(e) => setSellPrice(e.target.value)}
                                        className={`bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24 ${errors.sellPrice ? 'border-red-500' : ''}`}
                                    />
                                </div>
                            </div>
                            {errors.sellPrice && <p className="text-red-500 text-sm">{errors.sellPrice}</p>}

                            {/* Sell Date */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="sellDate" className="text-gray-700">Sell Date</label>
                                <input
                                    type="date"
                                    id="sellDate"
                                    value={sellDate}
                                    onChange={(e) => setSellDate(e.target.value)}
                                    className={`bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-40 ${errors.dates ? 'border-red-500' : ''}`}
                                />
                            </div>
                            {errors.dates && <p className="text-red-500 text-sm">{errors.dates}</p>}
                        </div>
                    </div>

                    {/* Output Fields */}
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        <div className="space-y-2">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">Percentage Return (%)</p>
                                <p className="finwise-green font-semibold text-xl">{result.percentageReturn}%</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">CAGR Return (%)</p>
                                <p className="finwise-green font-semibold text-xl">{result.cagrReturn}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Tool_Footer message="Understand how your investments are growing. Let’s help you plan your financial future!"/>
                <CalculatorList activeCalculator="CAGR Calculator" />


            </div>
        </div>
    );
};

export default CAGRCalculator;
