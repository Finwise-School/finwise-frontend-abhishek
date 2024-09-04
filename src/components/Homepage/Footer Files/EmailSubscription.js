import React from "react";
import logo from '../../../assets/images/logo.png';

function EmailSubscription() {
  return (
    <div className="flex flex-col items-start min-h-[204px] w-full md:w-[538px]">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="finwise school img" className="w-12 h-12" />
        <h2 className="text-2xl font-bold tracking-normal leading-none text-white">Finwise School</h2>
      </div>
      <form className="flex gap-2.5 items-center px-4 py-4 mt-6 w-full max-w-full text-lg font-medium rounded-xl border border-solid bg-neutral-900 border-neutral-800">
        <input
          type="email"
          id="emailInput"
          placeholder="Enter Your Email"
          className="flex-1 bg-transparent border-none outline-none text-white"
        />
        <button type="submit" aria-label="Submit email" className="bg-blue-500 px-3 py-2 rounded-md text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmailSubscription;
