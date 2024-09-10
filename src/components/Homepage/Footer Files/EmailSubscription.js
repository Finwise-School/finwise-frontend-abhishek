import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../assets/images/logo.png';
import { Spinner, TextInput, Button, Modal } from "flowbite-react";
import axios from 'axios';

function EmailSubscription() {
  const [submit, isSubmit] = useState(false);
  const [phone, setPhone] = useState();
  const [openModal, setOpenModal] = useState(false);
  // const onSubmit = () => {
  //   if(phone) {
  //     isSubmit(true);
  //     console.log(phone);
  //   }
  // }

  const onSubmit = async (e) => {
    if(phone) {
      if(phone.length === 10) {
        e.preventDefault();
        isSubmit(true);
    
        const phoneData = {
          phone
        }
      
        try {
          const response = await axios.post('https://finwisebackend.onrender.com/api/phoneData', phoneData);
    
          if (response.status === 201) { // Successful creation
            console.log('Phone Number Received');
            isSubmit(false);
            setOpenModal(true);
            // Reset form or navigate to another page
            // resetForm();
            // setIsSuccessful(true);
          } else {
            console.error('Error saving data:', response.data);
            isSubmit(false);
            // setIsSuccessful(false);
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
        }
      }
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
      <form className="flex gap-2.5 items-center px-4 py-4 mt-6 w-full md:w-[80%] max-w-full text-lg font-medium rounded-xl border border-solid bg-neutral-900 border-neutral-800">
        <input
          type="number"
          id="phoneInput"
          placeholder="Enter Your Phone Number"
          className="flex-1 bg-transparent border-none outline-none text-white"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {/* <TextInput id="phoneInput" type="number" onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone Number" className="flex-1 bg-transparent border-none outline-none text-white" required /> */}
        {submit ? (
                  <Spinner aria-label="Default status example" />
        ) : (
                  <button type="button" aria-label="Submit phone" className="bg-blue-500 px-3 py-2 rounded-md text-white" onClick={onSubmit}>
                  Submit
                </button>
        )}
      </form>
    </div>
    </>
  );
}

export default EmailSubscription;
