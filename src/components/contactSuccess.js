// src/components/SuccessModal.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <div className="flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl" />
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-800 mb-4">Sent Successfully!</h3>
        <p className="finwise-blue text-center mb-4">We will get into touch soon.</p>
        <div className="flex justify-center">
          <button 
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
