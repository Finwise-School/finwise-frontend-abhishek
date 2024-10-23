import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Login/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./components/carouselCards";
import Profile from "./components/Profile";
import FAQ from "./components/FAQ";
import HomePage from "./components/HomePage";
import EarlyAccess from "./components/requestEarlyAccess";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import AboutUs from "./components/Abouts/AboutUs";
import LoginPage from "./components/Login/logining";
import SignupPage from "./components/Login/SignupPage";
import Fire from "./components/calculator/Fire";
import GoalSIP from "./components/calculator/GoalSIP";
import MutualFunds from "./components/calculator/SIP";
import FixedDepo from "./components/calculator/FixedDepo";
import Tax from "./components/calculator/Tax";
import EMICalculator from "./components/calculator/EMI";
import CAGRCalculator from "./components/calculator/CAGR";
import Chatbot from "./components/Chatbot";
import MortgageCalculator from "./components/calculator/Mortgage";
import IRRCalculator from "./components/calculator/IRR";
import RentalYeildCalculator from "./components/calculator/RentalYeild";
import MortgageBorrowerCalculator from "./components/calculator/MortgageBorrower";
import Budget_Boss from "./components/calculator/Budget_Boss";
import CreditCard from "./components/calculator/CreditCard";
import ScrollToTop from "./components/ScrolltoTop";
import Blogs from "./components/Blogs";
import BlogsWriting from "./components/BlogsWriting";
import QuotesHeader from "./components/QuotesHeader";
import UnderConst from "./components/UnderDevelopement";
import PrivacyNotice from "./components/Homepage/Footer Files/privacyNotice";
import ADMINDASHBOARD from "./components/ADMINDASHBOARD";
import Errors from "./components/error";
import Books from "./components/Books";
import Test from "./components/calculator/test/MortgageTest";

import { GoogleOAuthProvider } from '@react-oauth/google';
import Stocks from "./components/stock";
import BasicsOfTechnicalAnalysis from "./components/Resources/basicsOfTechnicalAnalysis";
import BudgetBlueprint from "./components/Resources/budgetBlue";
import Taxes from "./components/Resources/taxation";
import Budgetings from "./components/Resources/Budgeting";
import Retirement from "./components/Resources/retirement";
import Smart from "./components/Resources/Smartmoney";
import Finance from "./components/Resources/finance";
import Coming from "./components/comingSoon";
import GetNow from "./components/Resources/getNow";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// ALERT DON'T DELETE THIS AT ALL
// const baseURL = "http://localhost:5000";
const baseURL = "https://api.finwiseschool.com";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <QuotesHeader />
        <div className="app">
          <Header />
          <Routes>
            <Route path="/privacy" element={<PrivacyNotice baseURL={baseURL} />} />
            <Route path="/early-access" element={<EarlyAccess baseURL={baseURL} />} />
            <Route path="/" element={<HomePage baseURL={baseURL} />} />
            <Route path="/contact" element={<Contact baseURL={baseURL} />} />
            <Route path="/tools" element={<Calculator baseURL={baseURL} />} />
            <Route path="/maintainence" element={<UnderConst baseURL={baseURL} />} />
            <Route path="/about" element={<AboutUs baseURL={baseURL} />} />
            <Route path="/signup" element={<SignupPage baseURL={baseURL} />} />
            <Route path="/login" element={<LoginPage baseURL={baseURL} />} />
            <Route path="/clients" element={<Cards baseURL={baseURL} />} />
            <Route path="/tools/fire" element={<Fire baseURL={baseURL} />} />
            <Route path="/tools/goal-sip" element={<GoalSIP baseURL={baseURL} />} />
            <Route path="/tools/sip" element={<MutualFunds baseURL={baseURL} />} />
            <Route path="/tools/fixed-deposit" element={<FixedDepo baseURL={baseURL} />} />
            <Route path="/tools/tax" element={<Tax baseURL={baseURL} />} />
            <Route path="/tools/emi" element={<EMICalculator baseURL={baseURL} />} />
            <Route path="/tools/cagr" element={<CAGRCalculator baseURL={baseURL} />} />
            <Route path="/tools/mortgage" element={<MortgageCalculator baseURL={baseURL} />} />
            <Route path="/tools/mortgage-borrower" element={<MortgageBorrowerCalculator baseURL={baseURL} />} />
            <Route path="/tools/irr" element={<IRRCalculator baseURL={baseURL} />} />
            <Route path="/tools/rental-yield" element={<RentalYeildCalculator baseURL={baseURL} />} />
            <Route path="/tools/budget-boss" element={<Budget_Boss baseURL={baseURL} />} />
            <Route path="/blogs" element={<Blogs baseURL={baseURL} />} />
            <Route path="/blogswriting" element={<BlogsWriting baseURL={baseURL} />} />
            <Route path="/blogs/uk-tax-system" element={<Blogs baseURL={baseURL} />} />
            <Route path="/admindashboard" element={<ADMINDASHBOARD baseURL={baseURL} />} />
            <Route path="/books" element={<Books baseURL={baseURL} />} />
            <Route path="/stock" element={<Stocks baseURL={baseURL} />} />
            <Route path="/basics" element={<BasicsOfTechnicalAnalysis baseURL={baseURL} />} />
            <Route path="/budgetBlue" element={<BudgetBlueprint baseURL={baseURL} />} />
            <Route path="/taxation" element={<Taxes baseURL={baseURL} />} />
            <Route path="/budgeting" element={<Budgetings baseURL={baseURL} />} />
            <Route path="/retirement" element={<Retirement baseURL={baseURL} />} />
            <Route path="/smart" element={<Smart baseURL={baseURL}/>} />
            <Route path="/finance" element={<Finance baseURL={baseURL} />} />
            <Route path="/comingSoon" element={<Coming baseURL={baseURL}/>} />
            <Route path="/getNow" element={<GetNow baseURL={baseURL}/>} />
            <Route path="/tools/credit-card" element={<CreditCard />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/faqs" element={<FAQ baseURL={baseURL} />} />
            <Route path="*" element={<Errors baseURL={baseURL} />}/>
          </Routes>
          <Chatbot baseURL={baseURL} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
