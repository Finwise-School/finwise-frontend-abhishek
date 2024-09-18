import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import { Spinner, Button, Modal } from "flowbite-react";
import axios from 'axios';

function EmailSubscription() {
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
};

const date = new Date();

const writeDate = formatDate(date);

  const [submit, isSubmit] = useState(false);
  const [phone, setPhone] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Remove non-numeric characters and limit to 10 digits
    const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
    setPhone(cleanedValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (phone.length === 10) {
      isSubmit(true);
      const phoneData = { phone, writeDate };

      try {
        const response = await axios.post('https://finwisebackend.onrender.com/api/phoneData', phoneData);

        if (response.status === 201) { // Successful creation
          console.log('Phone Number Received');
          setOpenModal(true);
        } else {
          console.error('Error saving data:', response.data);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      } finally {
        isSubmit(false);
      }
    } else {
      console.error('Invalid phone number. It should be exactly 10 digits.');
    }
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Thank you for providing your phone number. We will be in touch with you shortly.
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="gray" onClick={() => setOpenModal(false)}>
                OK
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="flex flex-col items-start min-h-[204px] w-full md:w-[538px]">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="finwise school img" className="w-12 h-12" />
          <h2 className="text-2xl font-bold tracking-normal leading-none text-white">Finwise School</h2>
        </div>
        <form
          className="flex gap-2.5 items-center px-4 py-4 mt-6 w-full md:w-[80%] max-w-full text-lg font-medium rounded-xl border border-solid bg-neutral-900 border-neutral-800"
          onSubmit={onSubmit}
        >
          <input
            type="text" // Changed to text to handle custom validation
            id="phoneInput"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            className="flex-1 bg-transparent border-none outline-none text-white"
            required
          />
          {submit ? (
            <Spinner aria-label="Default status example" />
          ) : (
            <button type="submit" aria-label="Submit phone" className="bg-blue-500 px-3 py-2 rounded-md text-white">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default EmailSubscription;
