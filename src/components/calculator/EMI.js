import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import Tool_Footer from "./Tools_footer";
import CalculatorList from './Calulators_List';
import logo from '../../assets/images/logo.png'; // Adjust the path as needed


const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(10000.00);
    const [interestRate, setInterestRate] = useState(12.75);
    const [termLength, setTermLength] = useState(9);
    const [firstPaymentDate, setFirstPaymentDate] = useState('2024-01-01');
    const [compoundPeriod, setCompoundPeriod] = useState('Monthly');
    const [paymentFrequency, setPaymentFrequency] = useState('Bi-Weekly');
    const [result, setResult] = useState({ payment: "0" });
    const [schedule, setSchedule] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [errors, setErrors] = useState({});

    const compoundPeriodMapping = {
        'Monthly': 12,
        'Semi-Annually': 2,
        'Quarterly': 4,
        'Annually': 1,
    };

    const paymentFrequencyMapping = {
        'Monthly': 12,
        'Semi-Monthly': 24,
        'Bi-Weekly': 26,
        'Weekly': 52,
    };

    const validateForm = () => {
        const validationErrors = {};

        if (loanAmount <= 0) {
            validationErrors.loanAmount = "Loan amount should be greater than 0";
        }

        if (interestRate <= 0) {
            validationErrors.interestRate = "Interest rate should be greater than 0";
        }

        if (termLength <= 0) {
            validationErrors.termLength = "Term Length should be greater than 0";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const calculateEMI = (principal, rate, periods, totalPayments) => {
        const EMI = principal * (rate * Math.pow(1 + rate, totalPayments)) /
            (Math.pow(1 + rate, totalPayments) - 1);
        return EMI;
    };

    const calculatePayment = () => {
        if (!validateForm()) {
            return;
        }

        const P = parseFloat(loanAmount);
        const annualInterestRate = parseFloat(interestRate);
        const years = parseInt(termLength);

        if (isNaN(P) || isNaN(annualInterestRate) || isNaN(years) || P <= 0 || annualInterestRate <= 0 || years <= 0) {
            setResult({ payment: "Invalid Input" });
            setSchedule([]);
            return;
        }

        const periodsPerYear = paymentFrequencyMapping[paymentFrequency] || 12;
        const compoundingPeriodsPerYear = compoundPeriodMapping[compoundPeriod] || 12;
        const totalPayments = years * periodsPerYear;
        const periodicInterestRate = (Math.pow(1 + (annualInterestRate / 100) / compoundingPeriodsPerYear, compoundingPeriodsPerYear / periodsPerYear) - 1);

        const EMI = calculateEMI(P, periodicInterestRate, periodsPerYear, totalPayments);

        let scheduleData = [];
        let balance = P;
        let paymentDate = new Date(firstPaymentDate);

        for (let i = 1; i <= totalPayments; i++) {
            const interestDue = balance * periodicInterestRate;
            const principalPaid = EMI - interestDue;
            balance = Math.max(balance - principalPaid, 0);

            scheduleData.push({
                paymentNo: i,
                paymentDate: paymentDate.toISOString().split('T')[0],
                interestRate: annualInterestRate.toFixed(2) + '%',
                interestDue: interestDue.toFixed(2),
                paymentDue: EMI.toFixed(2),
                extraPayments: "0",
                additionalPayment: "0",
                principalPaid: principalPaid.toFixed(2),
                balance: balance.toFixed(2),
                taxReturned: "0",
                cumulativeTaxReturned: "0"
            });

            paymentDate.setMonth(paymentDate.getMonth() + (12 / periodsPerYear));
        }

        setResult({ payment: EMI.toFixed(2) });
        setSchedule(scheduleData);
    };

    useEffect(() => {
        calculatePayment();
    }, [loanAmount, interestRate, termLength, paymentFrequency, firstPaymentDate, compoundPeriod]);

    const exportToPDF = () => {
        const doc = new jsPDF();

        const logoWidth = 40;
        const logoHeight = 40;
        const margin = 10;
        const logoBottomMargin = 0;
        const footerHeight = 20;

        doc.addImage(logo, 'PNG', doc.internal.pageSize.width - logoWidth - margin, margin, logoWidth, logoHeight);

        const titleYPosition = margin + logoHeight + logoBottomMargin;
        doc.setFontSize(18);
        doc.text('EMI Payment Schedule', margin, titleYPosition);

        const tableColumn = ["Payment No", "Payment Date", "Interest Rate", "Interest Due", "Payment Due", "Extra Payments", "Additional Payments", "Principal Paid", "Balance", "Tax Returned", "Cumulative Tax Returned"];
        const tableRows = schedule.map(row => [
            row.paymentNo,
            row.paymentDate,
            row.interestRate,
            row.interestDue,
            row.paymentDue,
            row.extraPayments,
            row.additionalPayment,
            row.principalPaid,
            row.balance,
            row.taxReturned,
            row.cumulativeTaxReturned
        ]);

        const startY = titleYPosition + 10;
        doc.autoTable(tableColumn, tableRows, { startY: startY });

        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;
        doc.setFillColor(220, 220, 220);
        doc.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, 'F');

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        const footerText = 'Generated by finwiseschool.com';
        const textWidth = doc.getTextWidth(footerText);
        doc.text(footerText, pageWidth - margin - textWidth, pageHeight - (footerHeight / 2));

        // Save the PDF
        doc.save('EMI_Schedule.pdf');
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(schedule);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule');
        XLSX.writeFile(workbook, 'EMI_Schedule.xlsx');
    };

    return (
        <div className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">EMI Calculator</h1>
                    <p className="finwise-blue">Calculate your dynamic EMI based on frequency</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            {/* Loan Amount */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="loanAmount" className="text-gray-700">Loan Amount</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="loanAmount"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                        className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                              {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}

                            {/* Annual Interest Rate */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="interestRate" className="text-gray-700">Annual Interest Rate (%)</label>
                                <input
                                    type="number"
                                    id="interestRate"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.interestRate && <p className="text-red-500 text-sm mt-1">{errors.interestRate}</p>}

                            {/* Term Length */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="termLength" className="text-gray-700">Term Length (in Years)</label>
                                <input
                                    type="number"
                                    id="termLength"
                                    value={termLength}
                                    onChange={(e) => setTermLength(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.termLength && <p className="text-red-500 text-sm mt-1">{errors.termLength}</p>}

                            {/* First Payment Date */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="firstPaymentDate" className="text-gray-700">First Payment Date</label>
                                <input
                                    type="date"
                                    id="firstPaymentDate"
                                    value={firstPaymentDate}
                                    onChange={(e) => setFirstPaymentDate(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-40"
                                />
                            </div>
                            {/* Compound Period */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="compoundPeriod" className="text-gray-700">Compound Period</label>
                                <select
                                    id="compoundPeriod"
                                    value={compoundPeriod}
                                    onChange={(e) => setCompoundPeriod(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold p-2 rounded-lg w-40"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Semi-Annually">Semi-Annually</option>
                                </select>
                            </div>
                            {/* Payment Frequency Dropdown */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="paymentFrequency" className="text-gray-700">Payment Frequency</label>
                                <select
                                    id="paymentFrequency"
                                    value={paymentFrequency}
                                    onChange={(e) => setPaymentFrequency(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold p-2 rounded-lg w-40"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Semi-Monthly">Semi-Monthly</option>
                                    <option value="Bi-Weekly">Bi-Weekly</option>
                                    <option value="Weekly">Weekly</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    {/* Results Display */}

                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        <div className="space-y-2">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">{paymentFrequency} Payment</p>
                                <p className="finwise-green font-semibold text-xl">&#163;{result.payment}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Display */}
                <div style={{ marginTop: "-105px" }}>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 md:mb-0">EMI Payment Schedule</h2>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button
                                onClick={exportToPDF}
                                className="bg-red-500 text-white mb-2 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-200 flex items-center space-x-2"
                            >
                                <i className="fas fa-file-pdf"></i>
                                <span>PDF</span>
                            </button>
                            <button
                                onClick={exportToExcel}
                                className="bg-green-500 text-white mb-2 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-200 flex items-center space-x-2"
                            >
                                <i className="fas fa-file-excel"></i>
                                <span>Excel</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto max-h-[500px] border border-gray-300 rounded-lg shadow-lg">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left">Payment No</th>
                                    <th className="border p-2 text-left">Payment Date</th>
                                    <th className="border p-2 text-left">Interest Rate</th>
                                    <th className="border p-2 text-left">Interest Due</th>
                                    <th className="border p-2 text-left">Payment Due</th>
                                    <th className="border p-2 text-left">Extra Payments</th>
                                    <th className="border p-2 text-left">Additional Payments</th>
                                    <th className="border p-2 text-left">Principal Paid</th>
                                    <th className="border p-2 text-left">Balance</th>
                                    <th className="border p-2 text-left">Tax Returned</th>
                                    <th className="border p-2 text-left">Cumulative Tax Returned</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.slice(0, showMore ? schedule.length : 10).map((row, index) => (
                                    <tr key={index}>
                                        <td className="border p-2">{row.paymentNo}</td>
                                        <td className="border p-2">{row.paymentDate}</td>
                                        <td className="border p-2">{row.interestRate}</td>
                                        <td className="border p-2">{row.interestDue}</td>
                                        <td className="border p-2">{row.paymentDue}</td>
                                        <td className="border p-2">{row.extraPayments}</td>
                                        <td className="border p-2">{row.additionalPayment}</td>
                                        <td className="border p-2">{row.principalPaid}</td>
                                        <td className="border p-2">{row.balance}</td>
                                        <td className="border p-2">{row.taxReturned}</td>
                                        <td className="border p-2">{row.cumulativeTaxReturned}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-4 text-blue-500"
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
                <Tool_Footer message="Get a clear view of your monthly EMI payments. Start managing your finances with ease!"/>

                <CalculatorList activeCalculator="EMI Calculator" />


            </div>
        </div>
    );
};
export default EMICalculator;
