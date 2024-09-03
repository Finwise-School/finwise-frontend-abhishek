import React, { useState, useEffect } from 'react';

// Payment frequency mapping
const paymentFrequencyMapping = {
    'Monthly': 12,
    'Semi-Monthly': 24,
    'Bi-Weekly': 26,
    'Weekly': 52,
};

export default function Mortgage_PITI_Payments({
    loanAmount,
    interestRate,
    termLength,
    firstPaymentDate,
    compoundPeriod,
    paymentFrequency,
    result
}) {
    const [homeValue, setHomeValue] = useState(loanAmount);
    const [propertyTaxRate, setPropertyTaxRate] = useState(1.80);
    const [insuranceRate, setInsuranceRate] = useState(0.40);
    const [monthlyPMI, setMonthlyPMI] = useState(80.00);
    const [yearlyPropertyTaxes, setYearlyPropertyTaxes] = useState(0);
    const [yearlyInsurance, setYearlyInsurance] = useState(0);
    const [pitiPayment, setPitiPayment] = useState(0);

    useEffect(() => {
        // Calculate Yearly Property Taxes
        const calculatedYearlyPropertyTaxes = Number(homeValue) * (Number(propertyTaxRate) / 100);
        setYearlyPropertyTaxes(calculatedYearlyPropertyTaxes);

        // Calculate Yearly Insurance
        const calculatedYearlyInsurance = Number(homeValue) * (Number(insuranceRate) / 100);
        setYearlyInsurance(calculatedYearlyInsurance);
    }, [homeValue, propertyTaxRate, insuranceRate]);

    useEffect(() => {
        // Get payment frequency value
        const paymentFrequencyValue = paymentFrequencyMapping[paymentFrequency] || 12;
        // const paymentFrequencyValue = 24;

        // Example calculation for pitiPayment
        const calculatedPitiPayment = 
            (Number(result) || 0) + 
            (Number(yearlyPropertyTaxes) / paymentFrequencyValue) +
            (Number(yearlyInsurance) / paymentFrequencyValue) + 
            (Number(monthlyPMI*12) / (paymentFrequencyValue));

        console.log(result || 0);
        console.log(yearlyPropertyTaxes);
        console.log(yearlyInsurance);
        console.log(monthlyPMI);    
        console.log(paymentFrequencyValue);
        // Ensure pitiPayment is a number before setting state
        setPitiPayment(Number(calculatedPitiPayment).toFixed(2));
    }, [yearlyPropertyTaxes, yearlyInsurance, paymentFrequency, result, monthlyPMI]);

    return (
        <div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Estimated PITI Payment</h2>
                <div className="space-y-4">
                    {/* Home Value or Price */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="homeValue" className="text-gray-700">Home Value or Price</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="homeValue"
                                value={homeValue}
                                readOnly
                                onChange={(e) => setHomeValue(parseFloat(e.target.value) || 0)}
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Property Tax (% of Home Value) */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="propertyTaxRate" className="text-gray-700">Property Tax (% of Home Value)</label>
                        <input
                            type="number"
                            id="propertyTaxRate"
                            value={propertyTaxRate}
                            onChange={(e) => setPropertyTaxRate(parseFloat(e.target.value) || 0)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Yearly Property Taxes */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="yearlyPropertyTaxes" className="text-gray-700">Yearly Property Taxes</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="yearlyPropertyTaxes"
                                value={yearlyPropertyTaxes.toFixed(2)}
                                readOnly
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Insurance (% of Home Value) */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="insuranceRate" className="text-gray-700">Insurance (% of Home Value)</label>
                        <input
                            type="number"
                            id="insuranceRate"
                            value={insuranceRate}
                            onChange={(e) => setInsuranceRate(parseFloat(e.target.value) || 0)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Yearly H.O. Insurance */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="yearlyInsurance" className="text-gray-700">Yearly H.O. Insurance</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="yearlyInsurance"
                                value={yearlyInsurance.toFixed(2)}
                                readOnly
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Monthly PMI */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="monthlyPMI" className="text-gray-700">Monthly PMI</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="monthlyPMI"
                                value={monthlyPMI}
                                onChange={(e) => setMonthlyPMI(parseFloat(e.target.value) || 0)}
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* PITI Payment */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="pitiPayment" className="text-gray-700">PITI Payment</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="pitiPayment"
                                value={pitiPayment}
                                readOnly
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
