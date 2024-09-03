import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
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
import LoginPage from "./components/Login/login";
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
import ScrollToTop from "./components/ScrolltoTop";
import Blogs from "./components/Blogs";


const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <ScrollToTop />
        <div className="app">
          <Header/> 
          <Routes>
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Calculator />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/clients" element={<Cards />} />
            <Route path="/tools/fire" element={<Fire />} />
            <Route path="/tools/goal-sip" element={<GoalSIP />} />
            <Route path="/tools/sip" element={<MutualFunds />} />
            <Route path="/tools/fixed-deposit" element={<FixedDepo />} />
            <Route path="/tools/tax" element={<Tax />} />
            <Route path="/tools/emi" element={<EMICalculator />} />
            <Route path="/tools/cagr" element={<CAGRCalculator />} />
            <Route path="/tools/mortgage" element={<MortgageCalculator />} />
            <Route path="/tools/irr" element={<IRRCalculator />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/uk-tax-system" element={<Blogs />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
            <Route path="/faqs" element={<FAQ />} />
          </Routes>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
