import React from 'react';

export default function ExtraPayments({
    startPaymentNo,
    extraPayment,
    extraPaymentInterval,
    extraAnnualPayment,
    extraPaymentMonth,
    totalExtraPayments,
    interestSavings,
    setStartPaymentNo,
    setExtraPayment,
    setExtraPaymentInterval,
    setExtraAnnualPayment,
    setExtraPaymentMonth,
    setTotalExtraPayment,
    totalExtraPayment,
    finalInterestSavings
}) {
    return (
        <div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Extra Payments:</h2>
                <div className="space-y-4">
                    {/* Start at Payment No */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="startPaymentNo" className="text-gray-700">Start at Payment No</label>
                        <input
                            type="number"
                            id="startPaymentNo"
                            value={startPaymentNo}
                            onChange={(e) => setStartPaymentNo(parseFloat(e.target.value) || 0)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Extra Payment */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="extraPayment" className="text-gray-700">Extra Payment</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="extraPayment"
                                value={extraPayment}
                                onChange={(e) => setExtraPayment(parseFloat(e.target.value) || 0)}
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Payment Interval */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="paymentInterval" className="text-gray-700">Payment Interval</label>
                        <input
                            type="number"
                            id="paymentInterval"
                            value={extraPaymentInterval}
                            onChange={(e) => setExtraPaymentInterval(parseFloat(e.target.value) || 0)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Extra Annual Payment */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="extraAnnualPayment" className="text-gray-700">Extra Annual Payment</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="extraAnnualPayment"
                                value={extraAnnualPayment}
                                onChange={(e) => setExtraAnnualPayment(parseFloat(e.target.value) || 0)}
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Extra Payment Month */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="extraPaymentMonth" className="text-gray-700">Extra Payment Month</label>
                        <input
                            type="number"
                            id="extraPaymentMonth"
                            value={extraPaymentMonth}
                            onChange={(e) => setExtraPaymentMonth(parseFloat(e.target.value) || 0)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Output: Total Extra Payments */}
                    <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <h3 className="text-gray-800 font-semibold mb-2">Total Extra Payments</h3>
                        <div className="text-2xl font-bold text-green-600">{totalExtraPayment}</div>
                    </div>

                    {/* Output: Interest Savings */}
                    <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <h3 className="text-gray-800 font-semibold mb-2">Interest Savings</h3>
                        <div className="text-2xl font-bold text-green-600">{parseFloat(finalInterestSavings).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
