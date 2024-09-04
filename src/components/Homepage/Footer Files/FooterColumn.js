import React from "react";
import { Link } from "react-router-dom";

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col items-start text-left">
      <h3 className="text-lg text-neutral-400 mb-4">{title}</h3>
      <nav className="flex flex-col space-y-2 text-sm">
        {items.map((item, index) => (
          <Link key={index} to={item.path} className="hover:text-gray-300">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default FooterColumn;
