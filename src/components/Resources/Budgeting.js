import React from 'react';

const images = [
  {
    imageSrc: require("../../assets/images/books/blueprint.jpg"),
    name: "The Budgeting Blueprint",
    path: "https://finwiseschool.gumroad.com/l/fwsbudgetboss"
  },
];

const Budgetings = () => {
  return (
    <div className='p-[5%]'>
      <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[8%] text-center">
        Budgeting
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-[8%]">
        {images.map((image, index) => (
          <div key={index} className="m-0 p-0">
            <a
              href={image.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.imageSrc}
                alt={image.name}
                className="w-full h-[80%] mt-0 m-0"
              />
            </a>
            <h2 className="font-bold mt-4 mb-2 text-sm text-center text-black">
              {image.name}
            </h2>
          </div>
        ))}
