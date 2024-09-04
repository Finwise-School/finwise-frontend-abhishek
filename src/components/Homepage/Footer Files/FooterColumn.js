import React from "react";
import { Link } from "react-router-dom";

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col mb-6 w-full md:w-auto">
      <h3 className="text-xl tracking-normal leading-tight text-neutral-400">{title}</h3>
      <nav className="flex flex-col mt-4 text-lg leading-none text-white">
        {items.map((item, index) => (
          <Link to={item.path} key={index} className={index > 0 ? "mt-3" : ""}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default FooterColumn;
