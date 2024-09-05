import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoIntro from '../assets/video/finwise-intro.mp4';

const VideoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); 

    const intervalTimer = setInterval(() => {
      setIsVisible(true);
    }, 60000);

    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGetEarlyAccessClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative p-6">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-1 right-1 text-gray-500 hover:text-red-500 transition duration-300 text-2xl"
            >
              &#x2715;
            </button>

            {/* Video */}
            <video
              className="w-full rounded-lg"
              controls
              playsInline
            >
              <source
                src={VideoIntro}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Get Early Access Button */}
            <div className="mt-6 flex justify-center">
              <Link to="/early-access" onClick={handleGetEarlyAccessClick}>
                <button
                  className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-2 px-4 text-sm min-w-[130px] text-center font-semibold transition-all duration-300 flex items-center justify-center"
                  style={{
                    border: '3px solid',
                    borderRadius: '10px',
                    borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
                  }}
                >
                  Get Early Access <span className="ml-1"><i className='fa fa-external-link'></i></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
