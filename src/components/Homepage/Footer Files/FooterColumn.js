import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col mb-6 w-full md:w-auto">
      <h3 className="text-xl tracking-normal leading-tight text-neutral-400">{title}</h3>
      <nav className="flex flex-col mt-4 text-lg leading-none text-white">
        {items.map((item, index) => (
          item.path.startsWith('#') ? (
            <Link 
              to={item.path.substring(1)} // Remove the '#' from the path
              smooth={true}
              duration={500}
              key={index}
              className={index > 0 ? "mt-3 cursor-pointer" : ""}
            >
              {item.name}
              </Link>
          ) : (
            <RouterLink to={item.path} key={index} className={index > 0 ? "mt-3" : ""}>
              {item.name}
            </RouterLink>
          )
        ))}
      </nav>
    </div>
  );
}

export default FooterColumn;
