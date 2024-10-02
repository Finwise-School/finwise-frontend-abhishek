import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import EarlyAccessTemplate from "./EarlyAccessTemplate";
import heroo from "../assets/images/books/heroo.png";
import join from "../assets/images/books/joined.png";
import { FaArrowRight } from "react-icons/fa";

const options = { year: "numeric", month: "long", day: "numeric" };

const GuidesGrid = ({ guides }) => {
  const [shuffledGuides, setShuffledGuides] = useState([]);

  useEffect(() => {
    // Shuffle the guides array on component mount
    const shuffleArray = (array) => {
      return array
        .map((item) => ({ ...item, sortValue: Math.random() }))
        .sort((a, b) => a.sortValue - b.sortValue)
        .map((item) => {
          delete item.sortValue;
          return item;
        });
    };

    setShuffledGuides(shuffleArray(guides));
  }, [guides]);

  return (
    <div className="grid grid-cols-1 ml-28 md:grid-cols-3 w-[85%]">
      {shuffledGuides.map((guide, index) => (
        <div
          key={index}
          className="bg-white p-5 grid grid-cols-2 items-center w-[125%] h-[60%]"
        >
          <div className="w-[120%] h-[110%]">
            <img
              src={guide.imageSrc}
              alt={`Guide ${index}`}
              className="w-[175%] h-[90%] object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-[90%]">
            <div>
              <p className="text-gray-500 italic ml-[-8%]">{guide.author}</p>
              <h2 className="font-bold mt-[8%] mb-[4%] text-[75%] ml-[-8%] text-black">
                {guide.title}
              </h2>
              <p className="text-gray-500 italic ml-[-8%]">About the book</p>
            </div>
            <button className="mt-6 ml-[-10%] bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
              Get Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Book and guide data
const bookList = [
  {
    imageSrc: require("../assets/images/books/blueprint.jpg"),
    author: "Finwise School",
    title: "The Budgeting Blueprint",
    path: "/budgetBlue",
  },
  {
    imageSrc: require("../assets/images/books/blue.png"),
    author: "Finwise School",
    title: "Blue is a darkness weekened by light",
    path: "/basics",
  },
  {
    imageSrc: require("../assets/images/books/father.png"),
    author: "Finwise School",
    title: "My Feather Thief",
    path: "/basics",
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    author: "Finwise School",
    title: "Basics of Technical Analysis",
    path: "/basics",
  },
  {
    imageSrc: require("../assets/images/books/illness.png"),
    author: "Finwise School",
    title: "The Illness Lesson",
    path: "/basics",
  },
  {
    imageSrc: require("../assets/images/books/butch.png"),
    author: "Finwise School",
    title: "The Butcher and the wren",
    path: "/basics",
  },
];

const bookImages = [
  {
    imageSrc: require("../assets/images/books/budget.png"),
    title: "Budgeting",
    path: "/budgeting",
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    title: "Stock Market",
    path: "/stock",
    booklocal: "/basics",
  },
  {
    imageSrc: require("../assets/images/books/book2.png"),
    title: "Taxation",
    path: "/taxation",
  },
  {
    imageSrc: require("../assets/images/books/book3.png"),
    title: "Retirement Planning",
    path: "/retirement",
  },
  {
    imageSrc: require("../assets/images/books/book4.png"),
    title: "Smart with money",
    path: "/smart",
  },
  {
    imageSrc: require("../assets/images/books/book1.png"),
    title: "Finance hacks",
    path: "/finance",
  },
];

const guides = [
  {
    imageSrc: require("../assets/images/books/guide1.png"),
    author: "By Arthur Gonzalez",
    title: "A God Who Hates Women",
  },
  {
    imageSrc: require("../assets/images/books/guide2.png"),
    author: "By Sabela Hupter",
    title: "Hans Christian Andersen",
  },
  {
    imageSrc: require("../assets/images/books/guide3.png"),
    author: "By Alyce Kris",
    title: "Castle In The Sky",
  },
];

const Books = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="fin-head text-white pt-10 md:pt-16 md:px-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <div className="w-full md:w-1/2 md:pl-[10%]">
            <p className="text-xs md:text-sm font-thin italic mb-2 md:mb-[3%]">
              Internationally Bestselling Book
            </p>
            <h1 className="text-3xl md:text-5xl mb-1 md:mb-[1%] font-semibold">
              2-Week Plan to
            </h1>
            <h1 className="text-3xl md:text-5xl font-semibold mb-1 md:mb-[1%]">
              Jump-Start
            </h1>
            <h1 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-[8%]">
              Your Healing
            </h1>
            <p className="mb-4 md:mb-6 pr-0 md:pr-[30%] font-thin">
              Check out the new book by Dr. Martin to find out how to stay
              healthy and support your body.
            </p>
            <button className="bg-blue-900 text-white py-2 px-4 md:px-7 font-semibold hover:bg-blue-800">
              <Link to="/basics">
                <div className="flex items-center">
                  Meet Our Bestsellers
                  <FaArrowRight className="ml-2" />
                </div>
              </Link>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={heroo}
              alt="Person"
              className="max-w-[80%] md:max-w-full pr-0 md:pr-[10%]"
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
                <div className="bg-gray-200 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center">
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

      {/* Promotion Section */}
      <div className="finwise-back ml-[14%] mr-[14%] text-black flex pt-10 h-auto px-10">
        <div className="mx-auto p-10 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <div className="flex mb-4 mt-[-20%]">
              <h2 className="font-bold text-lg">100% off</h2>
              <h2 className="font-semibold ml-1 text-lg">on all guides</h2>
            </div>
            <h1 className="font-extrabold text-3xl">Free for all</h1>
            <h1 className="text-5xl mb-6 font-bold">Early members</h1>
            <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
              <Link to="/finance">Get Now</Link>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center hidden md:flex">
            {/* Image will be hidden on mobile screens */}
            <img
              src={join}
              className="lg:h-auto lg:w-[70%] lg:max-w-full mt-[8%] lg:mt-[0%]"
              alt="Join now"
            />
          </div>
        </div>
      </div>

      {/* Book List Section with Carousel for Mobile */}
      <section className="mb-[8%] w-full md:w-[80%] mx-auto">
        <h2 className="font-semibold text-black text-3xl px-6 md:px-12 py-6 md:py-12 text-center md:text-left">
          New Arrivals
        </h2>

        {/* Mobile Carousel */}
        <div className="block md:hidden overflow-x-auto whitespace-nowrap py-4 px-6 space-x-4 md:px-[4%]">
          {bookList.map((book, index) => (
            <div key={index} className="inline-block align-top w-40 text-left">
              <Link to={book.path}>
                <img
                  src={book.imageSrc}
                  alt={`Book ${index}`}
                  className="w-40 h-60 object-cover mb-2 rounded"
                />
              </Link>
              <p className="font-light italic text-sm">{book.author}</p>
              <Link to={book.path}>
                <h3 className="font-semibold text-sm whitespace-normal max-w-40 min-h-[40px]">
                  {book.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-6 gap-4">
          {bookList.map((book, index) => (
            <div key={index} className="text-center md:text-left">
              <Link to={book.path}>
                <img
                  src={book.imageSrc}
                  alt={`Book ${index}`}
                  className="w-[100%] h-[75%] object-cover mb-2 md:mb-4"
                />
              </Link>
              <p className="font-light italic text-sm">{book.author}</p>
              <Link to={book.path}>
                <h3 className="font-semibold">{book.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Guides of the Day Section */}
      <div className="fin-back pt-4 pb-12 md:pb-16 mb-[-4%] bg-[#f5dac3]">
        {" "}
        {/* Added background color and extended padding */}
        <div className="container mx-auto">
          {/* Mobile View */}
          <div className="block md:hidden px-4 text-center">
            <h2 className="text-black text-2xl font-bold">
              Guides of the Day -
            </h2>
            <h2 className="text-orange-800 text-2xl font-bold mb-4">
              {new Date().toLocaleDateString("en-GB", options)}
            </h2>
          </div>

          {/* Laptop/Tablet View */}
          <div className="hidden md:flex">
            <h2 className="text-black text-3xl font-bold ml-[7%]">
              Guides of the Day -
            </h2>
            <h2 className="text-orange-800 text-3xl font-bold mb-8 pl-[1%]">
              {new Date().toLocaleDateString("en-GB", options)}
            </h2>
          </div>

          {/* GuidesGrid component */}
          <div className="grid grid-cols-1 gap-[1%] md:grid-cols-2 lg:grid-cols-3 mb-[6%] md:ml-[7%] md:mr-[7%]">
            {" "}
            {/* Align grid to the heading on desktop */}
            {guides.map((guide, index) => (
              <div
                key={index}
                className="w-full bg-white p-4 rounded-md shadow-md flex"
              >
                {/* Image on the left */}
                <Link to={guide.path} className="flex-shrink-0">
                  <img
                    src={guide.imageSrc}
                    alt={guide.title}
                    className="w-auto h-auto object-cover rounded-md"
                  />
                </Link>

                {/* Content on the right */}
                <div className="flex flex-col justify-between ml-[6%] w-full">
                  <div>
                    {/* Author */}
                    <p className="font-light italic text-sm text-left mb-2">
                      {guide.author}
                    </p>

                    {/* Title */}
                    <Link to={guide.path}>
                      <h3 className="font-semibold text-sm whitespace-normal text-left mb-2">
                        {guide.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Button */}
                  <div>
                    <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded w-full">
                      Get Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EarlyAccessTemplate />
    </div>
  );
};

export default Books;
