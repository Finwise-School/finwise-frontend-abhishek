import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VideoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
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

            {/* YouTube Video */}
            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/qi2yx_S4C_0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

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
