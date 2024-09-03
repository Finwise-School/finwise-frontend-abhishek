import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaUser, FaHome } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import successImg from "../assets/images/book/success.gif";

const EarlyAccessForm = () => {
  const [started, setStarted] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleStart = () => {
    setStarted(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const validateStep = () => {
    const newErrors = {};
    if (formStep === 1 && !formData.name) newErrors.name = 'Name is required';
    if (formStep === 2 && (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)))
      newErrors.email = 'Valid email is required';
    if (formStep === 3 && (!formData.phone || formData.phone.length < 10))
      newErrors.phone = 'Valid phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setFormStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setSubmitted(true); 
    }
  };

  if (submitted) {
    return (
      <div className="bg-white text-[#223876] font-inter min-h-screen flex justify-center items-center">
        <div className="text-center">
          <img
            src={successImg}
            alt="Success"
            className="mx-auto mb-4 w-32 md:w-48"
          />
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">Success!</h1>
          <p className="text-lg md:text-xl">Thank you for submitting the form.</p>
          <p className="text-lg md:text-xl mt-4">Check your email for further details.</p>
          <div className="mt-6">
            <a href="/" className="inline-flex items-center bg-[#3CB371] text-white text-lg md:text-xl font-semibold py-2 px-6 rounded-full">
              <FaHome className="mr-2" />
              Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#223876] font-inter min-h-screen flex justify-center items-center">
      {!started ? (
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="flex-1 p-10 flex flex-col justify-center items-start">
            <p className="text-xl md:text-2xl font-medium mb-6">
              We currently have a waitlist. Please fill this form to apply for the Finwise School early access.
            </p>
            <p className="text-sm md:text-base mb-10">
              Click on start, Lets get started
            </p>
            <div className="flex items-center mb-4">
              <button
                onClick={handleStart}
                className="bg-[#3CB371] text-white text-lg md:text-xl font-semibold py-2 px-6 rounded-lg"
              >
                Start
              </button>
            </div>
            <div className="flex items-center text-sm md:text-base">
              <span className="text-[#3CB371]">&#x25CF;</span>
              <span className="ml-2 text-[#223876]">Takes less than a minute</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg px-4 mx-auto mt-20">
          <form onSubmit={handleSubmit} className="w-full">
            {formStep === 1 && (
              <div className="flex flex-col items-start pb-2 mb-8 w-full">
                <label htmlFor="name" className="flex items-center space-x-2 text-lg md:text-xl font-normal">
                  <span className="text-[#3CB371] text-xl md:text-2xl">
                    <FaUser />
                  </span>
                  <span className="text-[#223876] text-lg md:text-xl">Name*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type your answer here..."
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-[#223876] text-[#223876] placeholder-[#223876] mt-4 focus:outline-none focus:ring-0 text-lg md:text-xl"
                />
                {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
                <div className="flex justify-end w-full mt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#3CB371] text-white font-semibold py-2 px-6 rounded-full"
                  >
                    Next <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="flex flex-col items-start pb-2 mb-8 w-full">
                <label htmlFor="email" className="flex items-center space-x-2 text-lg md:text-xl font-normal">
                  <span className="text-[#3CB371] text-xl md:text-2xl">
                    <FaEnvelope />
                  </span>
                  <span className="text-[#223876] text-lg md:text-xl">Email*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type your answer here..."
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-[#223876] text-[#223876] placeholder-[#223876] mt-4 focus:outline-none focus:ring-0 text-lg md:text-xl"
                />
                {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
                <div className="flex justify-between items-center mt-8 w-full">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-[#3CB371] text-white font-semibold py-2 px-4 rounded-full flex items-center"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#3CB371] text-white font-semibold py-2 px-6 rounded-full"
                  >
                    Next <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="flex flex-col items-start pb-2 mb-8 w-full">
                <label htmlFor="phone" className="flex items-center space-x-2 text-lg md:text-xl font-normal">
                  <span className="text-[#3CB371] text-xl md:text-2xl" style={{ transform: 'rotateY(180deg)' }}>
                    <FaPhone />
                  </span>
                  <span className="text-[#223876] text-lg md:text-xl">Phone*</span>
                </label>
                <div className="w-full mt-4">
                  <PhoneInput
                    country={'us'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      background: 'transparent',
                      borderBottom: '2px solid #223876',
                      color: '#223876',
                      fontSize: '1.25rem',
                      width: '100%',
                    }}
                    buttonStyle={{
                      background: 'transparent',
                      borderBottom: '2px solid #223876',
                    }}
                    dropdownStyle={{
                      border: '1px solid #223876',
                    }}
                    countryCodeEditable={false}
                  />
                </div>
                {errors.phone && <p className="text-red-500 mt-2">{errors.phone}</p>}
                <div className="flex justify-between items-center mt-8 w-full">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-[#3CB371] text-white font-semibold py-2 px-4 rounded-full flex items-center"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#3CB371] text-white font-semibold py-2 px-6 rounded-full"
                  >
                    Next <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}

            {formStep === 4 && (
              <div className="flex flex-col items-start pb-2 mb-8 w-full">
                <div className="text-lg md:text-xl font-medium mb-4">
                  Almost there! Just review and submit.
                </div>
                <div className="text-lg md:text-xl font-medium mb-4">
                  You are just a click away!.
                </div>

                <div className="flex justify-between items-center mt-8 w-full">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-[#3CB371] text-white font-semibold py-2 px-4 rounded-full flex items-center"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    type="submit"
                    className="bg-[#3CB371] text-white font-semibold py-2 px-6 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default EarlyAccessForm;
