import React from 'react';
import UnderConst from '../assets/images/under-dev.jpg';
const ToolSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white  rounded-lg p-6 text-center">
        <img 
          src={UnderConst} 
          alt="Under Development" 
          className="mx-auto mb-4 w-32 h-32 object-cover"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tool Under Development</h2>
        <p className="text-gray-600">
          This tool is currently being developed. Please check back later for updates.
        </p>
      </div>
    </div>
  );
};

export default ToolSection;
