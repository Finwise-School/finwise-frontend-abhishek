// File: App.js or MainComponent.js

import React from 'react';
import MortgageInformation from './MortgageInfo'; // Adjust the path based on your folder structure

const MainComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Home Mortgage Calculator</h1>
        {/* Import and include the MortgageInformation component */}
        <MortgageInformation />
      </div>
    </div>
  );
};

export default MainComponent;
