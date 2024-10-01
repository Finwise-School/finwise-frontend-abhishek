import React from 'react';
import { useNavigate } from 'react-router-dom';
import budget from "../../assets/booksDownload/budget.pdf"

const Download = () => {
  const navigate = useNavigate();

//   const handleClick = () => {          // popup
//     navigate('/early-access');
//   };

  return ( 
    <div className="mt-6 lg:mt-0 lg:ml-10">
      <button
        // onClick={handleClick}
        className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
        style={{
          border: '5px solid',
          borderRadius: '12px',
          borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
        }}
      >
       <a href="" download={budget}>Download Now</a>
      </button>
    </div>
  );
};

export default Download;
