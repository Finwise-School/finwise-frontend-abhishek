import React from "react";

function Button({ text }) {
  return (
    <button className="gap-2 w-full md:w-auto px-6 py-3 text-lg font-medium text-black bg-white rounded-xl max-md:px-4">
      {text}
    </button>
  );
}

export default Button;
