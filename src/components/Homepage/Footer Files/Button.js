import React from "react";

function Button({ text }) {
  return (
    <button className="gap-2 self-stretch px-6 py-5 my-auto text-lg font-medium text-black bg-white rounded-xl max-md:px-5">
      {text}
    </button>
  );
}

export default Button;