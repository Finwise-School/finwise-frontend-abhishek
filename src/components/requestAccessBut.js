import React from 'react';
import { useNavigate } from 'react-router-dom';

const RequestAccessBut = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/early-access');
  };

  return (
    <div className="mt-6 lg:mt-0 lg:ml-10">
      <button
        onClick={handleClick}
        className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
        style={{
          border: '5px solid',
          borderRadius: '12px',
          borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
        }}
      >
        Request Early Access
      </button>
    </div>
  );
};

export default RequestAccessBut;
