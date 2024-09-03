import React from 'react';
import PropTypes from 'prop-types'; 
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';

const InfoSection = ({ message }) => {
    return (
        <div className="mt-8 p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-shrink-0">
                    <img src={CalculatorHome} alt="boy with money" className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32" />
                </div>
                <p className="finwise-blue text-center md:text-left">
                    {message}
                </p>
            </div>
            <Link to="/early-access" className={`mt-4 md:mt-0 text-white font-semibold px-4 py-2 rounded-lg finwise-green-bg`}>
                Get started
            </Link>
        </div>
    );
};

// Define prop types
InfoSection.propTypes = {
    message: PropTypes.string.isRequired,
};

export default InfoSection;
