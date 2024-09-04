import React from "react";
import logo from '../../../assets/images/logo.png';

function EmailSubscription() {
  return (
    <div className="flex flex-col items-center w-full md:w-auto">
      <div className="flex items-center space-x-4 mb-4">
        <img src={logo} alt="Finwise School" className="w-12 h-12" />
        <h2 className="text-xl font-bold text-white">Finwise School</h2>
      </div>
      <form className="flex gap-2 items-center bg-neutral-900 text-white px-4 py-2 rounded-full w-full max-w-md">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-transparent border-none outline-none placeholder-gray-400 text-sm"
        />
        <button type="submit" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0665275108820725783386b074869c26cf6434435c1c40380653d1f99a4efc7?placeholderIfAbsent=true&apiKey=e3a21e29c83a4247a3f7cd4bf7e2ec17"
               alt="Submit"
               className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
}

export default EmailSubscription;
