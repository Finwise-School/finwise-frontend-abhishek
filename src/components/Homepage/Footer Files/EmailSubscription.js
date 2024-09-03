import React from "react";
import { FaUniversity } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png'
function EmailSubscription() {
  return (
    <div className="flex flex-col items-start min-h-[204px] min-w-[240px] w-[538px] max-md:max-w-full">
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="finwise school img"
          className="w-12 h-12" // Adjust width and height as needed
        />
        <h2 className="text-2xl font-bold tracking-normal leading-none text-white">
          Finwise School
        </h2>
      </div>

      <form className="flex gap-2.5 items-center px-6 py-5 mt-8 max-w-full text-lg font-medium tracking-normal leading-none rounded-xl border border-solid bg-neutral-900 border-neutral-800 text-neutral-400 w-[423px] max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0665275108820725783386b074869c26cf6434435c1c40380653d1f99a4efc7?placeholderIfAbsent=true&apiKey=e3a21e29c83a4247a3f7cd4bf7e2ec17" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <label htmlFor="emailInput" className="sr-only">Enter Your Email</label>
        <input
          type="email"
          id="emailInput"
          placeholder="Enter Your Email"
          className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
          aria-label="Enter Your Email"
        />
        <button type="submit" aria-label="Submit email">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4e9136527b07fb86bd1fae65fcb87135a0f8539b05977065f57b0ec46cbb4fa?placeholderIfAbsent=true&apiKey=e3a21e29c83a4247a3f7cd4bf7e2ec17" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
        </button>
      </form>
    </div >
  );
}

export default EmailSubscription;