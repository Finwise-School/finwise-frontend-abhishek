import React from "react";
import { Link } from "react-router-dom"; // Import Link

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl tracking-normal leading-tight text-neutral-400">{title}</h3>
      <nav className="flex flex-col mt-8 text-lg tracking-normal leading-none text-white">
        {items.map((item, index) => (
          <Link 
            to={item.path} // Use path for navigation
            key={index} 
            className={index > 0 ? "mt-5" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default FooterColumn;
