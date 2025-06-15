import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import header from "../assets/video/header.gif";
import join from "../assets/images/books/PINK.png";

// Date format options
const options = { year: "numeric", month: "long", day: "numeric" };

// GuidesGrid Component to show guides shuffled
const GuidesGrid = ({ guides }) => {
  const [shuffledGuides, setShuffledGuides] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      return array
        .map((item) => ({ ...item, sortValue: Math.random() }))
        .sort((a, b) => a.sortValue - b.sortValue)
        .map(({ sortValue, ...rest }) => rest);
    };
    setShuffledGuides(shuffleArray(guides));
  }, [guides]);

  return (
    <div className="grid grid-cols-1 ml-28 md:grid-cols-3 w-[85%] gap-8">
      {shuffledGuides.map((guide, index) => (
        <div
          key={index}
          className="bg-white p-5 grid grid-cols-2 items-center w-[125%] h-[60%] rounded shadow"
        >
          <div className="w-[120%] h-[110%]">
            <img
              src={guide.imageSrc}
              alt={`Guide ${index}`}
              className="w-[175%] h-[90%] object-cover rounded"
            />
          </div>
          <div className="flex flex-col justify-between h-[90%]">
            <div>
              <p className="text-gray-500 italic ml-[-8%]">{guide.author}</p>
              <h2 className="font-bold mt-[8%] mb-[4%] text-[75%] ml-[-8%] text-black">
                {guide.title}
              </h2>
              {guide.description && (
                <p className="text-gray-500 italic ml-[-8%]">{guide.description}</p>
              )}
            </div>
            <a
              href={guide.path}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 ml-[-10%] bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800 inline-block text-center"
            >
              Get Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

// Book data for carousel and listings
const bookImages = [
  {
    imageSrc: require("../assets/images/books/cover.png"),
    title: "Stock Market",
    path: "/stock",
  },
  {
    imageSrc: require("../assets/images/books/Tax.png"),
    title: "Taxation",
    path: "/comingSoon",
  },
  {
    imageSrc: require("../assets/images/books/Retirement.png"),
    title: "Retirement Planning",
    path: "/comingSoon",
  },
  {
    imageSrc: require("../assets/images/books/smart.png"),
    title: "Smart with Money",
    path: "/comingSoon",
  },
  {
    imageSrc: require("../assets/images/books/finances.png"),
    title: "Finance Hacks",
    path: "/comingSoon",
  },
];

const bookList = [
  {
    imageSrc: require("../assets/images/books/blueprint.jpg"),
    author: "Finwise School",
    title: "The Budgeting Blueprint",
    path: "https://finwiseschool.gumroad.com/l/fwsbudgetboss",
  },
  {
    imageSrc: require("../assets/images/books/Retirement.png"),
    author: "Finwise School",
    title: "Retirement Planning",
    path: "/comingSoon",
  },
  {
    imageSrc: require("../assets/images/books/Tax.png"),
    author: "Finwise School",
    title: "The Tax Planning Playbook",
    path: "/comingSoon",
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    author: "Finwise School",
    title: "Basics of Technical Analysis",
    path: "/basics",
  },
  {
    imageSrc: require("../assets/images/books/finances.png"),
    author: "Finwise School",
    title: "101 Finance Hacks",
    path: "/comingSoon",
  },
  {
    imageSrc: require("../assets/images/books/smart.png"),
    author: "Finwise School",
    title: "Smart With Money",
    path: "/comingSoon",
  },
];

const guides = [
  {
    imageSrc: require("../assets/images/books/guide1.png"),
    author: "By Finwise School",
    title: "Basics of Technical Analysis",
    path: "/basics",
    description:
      "This is your go-to guide for understanding and applying technical analysis in financial markets.",
  },
  {
    imageSrc: require("../assets/images/books/guide2.png"),
    author: "By Finwise School",
    title: "The Budgeting Blueprint",
    path: "https://finwiseschool.gumroad.com/l/fwsbudgetboss",
  },
  {
    imageSrc: require("../assets/images/books/guide3.png"),
    author: "By Finwise School",
    title: "Magic of Moving Averages",
    path: "/comingSoon",
  },
];

const Books = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="fin-head text-white pt-6 pb-6 lg:pb-0 lg:pt-[2%] md:pt-16 md:px-5">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-2 md:px-6">
          <div className="md:w-1/2 md:pl-[10%]">
            <p className="text-xs md:text-sm font-thin italic mb-1 md:mb-[3%] md:pt-[4%]">
              Free Guide to Jump-Start Your Financial Journey
            </p>
            <h1 className="text-2xl md:text-5xl mb-1 md:mb-[1%] font-semibold">
              Take Control of
            </h1>
            <h1 className="text-2xl md:text-5xl font-semibold mb-1 md:mb-[1%]">
              Your Finances
            </h1>
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-[8%]">
              in Just 2 Weeks
            </h1>
            <p className="mb-3 md:mb-6 pr-0 md:pr-[30%] font-thin">
              Get started with our free, expert-created guide designed to help you
              build strong financial habits and achieve your goals.
            </p>
            <button className="bg-blue-900 text-white py-2 px-3 md:px-7 font-semibold hover:bg-blue-800">
              <Link to="/basics">
                <div className="flex items-center">
                  Download Our Free Resources
                  <FaArrowRight className="ml-2" />
                </div>
              </Link>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src={header}
              alt="Person"
              className="w-[70%] h-[60%] md:max-w-full pr-0 md:pr-[5%] pb-[4%]"
            />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="p-6 md:p-14 flex flex-col items-center">
        <h2 className="font-bold text-black text-xl md:text-2xl text-center mb-6 md:mb-[4%]">
          Browse by Category
        </h2>
        <div className="container">
          <div className="flex justify-start md:justify-center space-x-6 md:space-x-10 overflow-x-auto px-4 md:px-0">
            {bookImages.map((bookImage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-blue-900 bg-opacity-95 backdrop-blur-sm w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center">
                  <Link to={bookImage.path}>
                    <div className="w-20 h-20 md:w-28 md:h-28 mt-2 md:mt-4 rounded-b-full overflow-hidden flex items-center justify-center">
                      <img
                        src={bookImage.imageSrc}
                        alt={`Book ${index}`}
                        className="max-w-full max-h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex text-center mt-4 md:mt-5 mb-8 md:mb-[50%]">
                  <Link to={bookImage.path}>
                    <h2 className="text-sm md:text-base">{bookImage.title}</h2>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
