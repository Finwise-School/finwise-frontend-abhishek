import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import EarlyAccessTemplate from './EarlyAccessTemplate';
import heroo from "../assets/images/books/heroo.png";
import join from "../assets/images/books/joined.png";
import { FaArrowRight } from "react-icons/fa";

const options = { year: 'numeric', month: 'long', day: 'numeric' };

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
    imageSrc: require("../assets/images/books/budget.png"),
    author: "finwise School",
    title: "Budget Master",
      path:"/basics"
  },
  {
    imageSrc: require("../assets/images/books/blue.png"),
    author: "finwise School",
    title: "Blue is a darkness weekened by light",
     path:"/basics"
  },
  {
    imageSrc: require("../assets/images/books/father.png"),
    author: "finwise School",
    title: "My Feather Thief",
     path:"/basics"
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    author: "finwise School",
    title: "Basics of Technical Analysis",
     path:"/basics"
  },
  {
    imageSrc: require("../assets/images/books/illness.png"),
    author: "finwise School",
    title: "The Illness Lesson",
       path:"/basics"
  },
  {
    imageSrc: require("../assets/images/books/butch.png"),
    author: "finwise School",
    title: "The Butcher and the wren",
      path:"/basics"
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
      <section className="fin-head text-white pt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 pl-[10%]">
            <p className="text-sm font-thin italic mb-[3%]">
              Internationally Bestselling Book
            </p>
            <h1 className="text-5xl mb-[1%] font-semibold">2-Week Plan to</h1>
            <h1 className="text-5xl font-semibold mb-[1%]">Jump-Start</h1>
            <h1 className="text-5xl font-semibold mb-[8%]">Your Healing</h1>
            <p className="mb-6 pr-[30%] font-thin">
              Check out the new book by Dr. Martin to find out how to stay
              healthy and support your body.
            </p>
            <button className="bg-blue-900 text-white py-2 px-7 font-semibold hover:bg-blue-800">
              <Link to="/basics">
              <div className="flex">               
               Meet Our Bestsellers
               <FaArrowRight className="ml-2" />
              </div>
              </Link>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={heroo} alt="Person" className=" pr-[10%]"/>
           
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="p-14 flex flex-col items-center">
        <h2 className="font-bold text-black text-2xl text-center mb-[4%]">
          Browse by Category
        </h2>
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6">
            {bookImages.map((bookImages, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center">
                  <Link to={bookImages.booklocal}>
                    <div className="w-28 h-28 mt-4 rounded-b-full overflow-hidden flex items-center justify-center">
                      <img
                        src={bookImages.imageSrc}
                        alt={`Book ${index}`}
                        className="max-w-full max-h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex text-center mt-5 mb-[50%]">
                  <Link to={bookImages.path}>
                    <h2>{bookImages.title}</h2>
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
            <div className="flex mb-4">
              <h2 className="font-bold text-lg">100% off</h2>
              <h2 className="font-semibold ml-1 text-lg">on all guides</h2>
            </div>
            <h1 className="font-extrabold text-3xl">Free for all</h1>
            <h1 className="text-5xl mb-6 font-bold">Early members</h1>
            <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
              <Link to="/finance">Get Now</Link>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={join} className="h-auto w-[70%] max-w-full" alt="Join now" />
          </div>
        </div>
      </div>

      {/* Book List Section */}
      <section className="mb-[8%] ml-[10%] w-[80%]">
        <h2 className="font-semibold text-black text-3xl p-12">New Arrivals</h2>
        <div className="container grid grid-cols-2 md:grid-cols-6 gap-1">
          {bookList.map((book, index) => (
            
            <div key={index} className="text-left">
              <Link to={book.path}>
              <img
                src={book.imageSrc}
                alt={`Book ${index}`}
                className="w-[150%] h-[65%] object-cover mb-4"
              />
              </Link>
              <p className="font-light italic text-sm">{book.author}</p>
              <Link to={book.path}><h3 className="font-semibold">{book.title}</h3></Link>
            </div>

          ))}
        </div>
      </section>

      {/* Guides of the Day Section */}
      <div className="fin-back pt-[5%] mb-[-4%]">
        <div className="container">
          <div className="flex">
            <h2 className="text-black text-3xl font-bold ml-28"> Guides of the Day</h2>
            <h2 className="text-orange-800 text-3xl font-bold mb-8 pl-1">
              {new Date().toLocaleDateString('en-GB', options)}
            </h2>
          </div>
          <GuidesGrid guides={guides} />
        </div>
      </div>

      <EarlyAccessTemplate />
    </div>
  );
};

export default Books;
