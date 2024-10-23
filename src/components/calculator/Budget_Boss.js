import React, { useState } from 'react';
import IncomeSection from './budget/IncomeSection';
import HouseholdEssentialsSection from './budget/HouseholdEssentialsSection';
import OtherSpendingsSection from './budget/OtherSpendingsSection';
import SummarySection from './budget/SummarySection';
import ToolFooter from './Tools_footer';
import Info from './info/Budget_Info.js';
import CalculatorList from './Calulators_List';
import CustomExpensesSection from './budget/CustomExpensesSection'; // Import the custom expense section

const BudgetCalculator = () => {
  const [incomes, setIncomes] = useState([
    { source: 'Salary', amount: 2000, frequency: 'monthly' },
  ]);

  const [homeEssentials, setHomeEssentials] = useState([
    { name: 'Rent or Mortgage', spending: 0, frequency: 'monthly' },
    { name: 'Food & Groceries', spending: 0, frequency: 'weekly' },
    { name: 'Home Insurance', spending: 0, frequency: 'monthly' },
    { name: 'Boiler Cover', spending: 0, frequency: 'monthly' },
    { name: 'Pet Expenditure (Insurance/Food/Walking)', spending: 0, frequency: 'monthly' },
    { name: 'Gas', spending: 0, frequency: 'monthly' },
    { name: 'Electricity', spending: 0, frequency: 'monthly' },
    { name: 'Water', spending: 0, frequency: 'monthly' },
    { name: 'Council Tax', spending: 0, frequency: 'monthly' }
  ]);

  const [technologySpendings, setTechnologySpendings] = useState([
    { name: 'Internet', spending: 0, frequency: 'monthly' },
    { name: 'TV Package', spending: 0, frequency: 'monthly' },
    { name: 'Streaming Services', spending: 0, frequency: 'monthly' },
    { name: 'TV Licence', spending: 0, frequency: 'monthly' },
    { name: 'Mobile Phones', spending: 0, frequency: 'monthly' },
  ]);

  const [entertainmentSpendings, setEntertainmentSpendings] = useState([
    { name: 'Eating out', spending: 0, frequency: 'monthly' },
    { name: 'Hobbies', spending: 0, frequency: 'monthly' },
    { name: 'Books', spending: 0, frequency: 'monthly' },
    { name: 'Music', spending: 0, frequency: 'monthly' },
    { name: 'Film', spending: 0, frequency: 'monthly' },
  ]);

  const [healthSpendings, setHealthSpendings] = useState([
    { name: 'Fitness', spending: 0, frequency: 'monthly' },
    { name: 'Gym', spending: 0, frequency: 'monthly' },
    { name: 'Sports', spending: 0, frequency: 'monthly' },
    { name: 'Medical Expenses', spending: 0, frequency: 'monthly' },
    { name: 'Health Insurance', spending: 0, frequency: 'monthly' },
    { name: 'Life Insurance', spending: 0, frequency: 'monthly' },
    { name: 'Hairdressers', spending: 0, frequency: 'monthly' },
  ]);

  const [transportSpendings, setTransportSpendings] = useState([
    { name: 'Car Insurance', spending: 0, frequency: 'monthly' },
    { name: 'Car Maintenance', spending: 0, frequency: 'monthly' },
    { name: 'Fuel', spending: 0, frequency: 'monthly' },
    { name: 'Public Transport', spending: 0, frequency: 'monthly' },
    { name: 'Parking', spending: 0, frequency: 'monthly' },
    { name: 'Tax & MOT', spending: 0, frequency: 'monthly' },
    { name: "Taxi's", spending: 0, frequency: 'monthly' },
    { name: 'Car Finance (PCP/Lease/Loan)', spending: 0, frequency: 'monthly' },
  ]);

  const [familySpendings, setFamilySpendings] = useState([
    { name: 'School Fees', spending: 0, frequency: 'monthly' },
    { name: 'Childcare', spending: 0, frequency: 'monthly' },
  ]);

  const [financeSpendings, setFinanceSpendings] = useState([
    { name: 'Loan Repayments', spending: 0, frequency: 'monthly' },
    { name: 'Loan', spending: 0, frequency: 'monthly' },
    { name: 'Credit Card Repayments', spending: 0, frequency: 'monthly' },
    { name: 'Charity', spending: 0, frequency: 'monthly' },
  ]);

  const [customExpenses, setCustomExpenses] = useState([]); // Custom Expenses State

  const calculateMonthlyAmount = (amount, frequency) => {
    return frequency === 'weekly' ? amount * 4.3 : amount;
  };

  const calculateTotals = () => {
    const totalIncome = incomes.reduce((sum, income) => sum + calculateMonthlyAmount(parseFloat(income.amount) || 0, income.frequency), 0);
    const totalHomeEssentials = homeEssentials.reduce((sum, essential) => sum + calculateMonthlyAmount(parseFloat(essential.spending) || 0, essential.frequency), 0);
    const totalTechnology = technologySpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);
    const totalEntertainment = entertainmentSpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);
    const totalHealth = healthSpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);
    const totalTransport = transportSpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);
    const totalFamily = familySpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);
    const totalFinance = financeSpendings.reduce((sum, spending) => sum + calculateMonthlyAmount(parseFloat(spending.spending) || 0, spending.frequency), 0);

    const totalCustomExpenses = customExpenses.reduce((sum, expense) => {
      return sum + expense.subExpenses.reduce((subSum, sub) => subSum + calculateMonthlyAmount(parseFloat(sub.spending) || 0, sub.frequency), 0);
    }, 0);

    const totalOtherSpendings = totalTechnology + totalEntertainment + totalHealth + totalTransport + totalFamily + totalFinance;
    const totalSpending = totalHomeEssentials + totalOtherSpendings + totalCustomExpenses;
    return { totalIncome, totalHomeEssentials, totalOtherSpendings, totalSpending, totalCustomExpenses };
  };

  const totals = calculateTotals();
  const { totalIncome, totalSpending } = totals;

  // Determine Financial Status
  const financialStatus = totalIncome > totalSpending ? 'You are within your budget!' :
                          totalIncome === totalSpending ? 'You are exactly at your budget!' :
                          'You are over your budget!';

  return (
    <div className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold finwise-green">Budget Boss Calculator</h1>
          <p className="finwise-blue">Manage your income and expenses effortlessly to achieve your financial goals.</p>
        </div>

        <IncomeSection incomes={incomes} setIncomes={setIncomes} />
        <HouseholdEssentialsSection homeEssentials={homeEssentials} setHomeEssentials={setHomeEssentials} />
        <OtherSpendingsSection
          technologySpendings={technologySpendings}
          setTechnologySpendings={setTechnologySpendings}
          entertainmentSpendings={entertainmentSpendings}
          setEntertainmentSpendings={setEntertainmentSpendings}
          healthSpendings={healthSpendings}
          setHealthSpendings={setHealthSpendings}
          transportSpendings={transportSpendings}
          setTransportSpendings={setTransportSpendings}
          familySpendings={familySpendings}
          setFamilySpendings={setFamilySpendings}
          financeSpendings={financeSpendings}
          setFinanceSpendings={setFinanceSpendings}
        />
      <hr className="border-t-2 border-gray-500 my-4" />

        {/* Custom Expenses Section */}
        <CustomExpensesSection customExpenses={customExpenses} setCustomExpenses={setCustomExpenses} />

        <SummarySection
          totals={totals}
          homeEssentials={homeEssentials}
          otherSpendings={[
            ...technologySpendings,
            ...entertainmentSpendings,
            ...healthSpendings,
            ...transportSpendings,
            ...familySpendings,
            ...financeSpendings,
          ]}
          customExpenses={customExpenses}
        />

        {/* Financial Status Message */}
        <div className="text-center mt-4">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }} className={totalIncome > totalSpending ? 'text-green-500' : totalIncome === totalSpending ? 'text-gray-700' : 'text-red-600'}>
            {financialStatus}
          </h1>
        </div>

        {/* Summary Section */}
        <div className="mt-8 text-center">
          <h1 className="text-5xl font-bold">£{totalIncome.toFixed(2)}</h1>
          <p className="text-xl">Monthly Income</p>
          <h1 className="text-5xl font-bold">£{totalSpending.toFixed(2)}</h1>
          <p className="text-xl">Monthly Expenses</p>

          {totalIncome <= totalSpending && (
            <>
              <h1 className="text-4xl font-bold mt-4" style={{ color: 'red' }}>
                It's not great news
              </h1>
              <p className="text-3xl mt-2">
                After accounting for your monthly expenses, you'll face a shortfall of
                <span className="font-bold text-red-500"> £{(totalSpending - totalIncome).toFixed(2)}</span>.
              </p>
            </>
          )}
        </div>

        <ToolFooter message="Understand your income and expenses better to make smarter financial choices." />
        <Info />
        <CalculatorList activeCalculator="Budget Calculator" />
      </div>
    </div>
  );
};

export default BudgetCalculator;
