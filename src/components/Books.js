import React from 'react';
import EarlyAccessTemplate from './EarlyAccessTemplate';
import heroo from "../assets/images/books/heroo.png";
import join from "../assets/images/books/joined.png"
// Book and guide data

const bookList = [
  {
    imageSrc: require("../assets/images/books/budget.png"),
    author: "By Arthur Gonzalez",
    title: "The Story of Success"
  },
  {
    imageSrc: require("../assets/images/books/blue.png"),
    author: "By Sabela Hupter",
    title: "A God Who Hate Women"
  },
  {
    imageSrc: require("../assets/images/books/father.png"),
    author: "By Glenna Berge",
    title: "My Dearest Darkest"
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    author: "By Gilberto Mills",
    title: "House of Sky and Breath"
  },
  {
    imageSrc: require("../assets/images/books/illness.png"),
    author: "By Dana Chambers",
    title: "The Illness Lesson"
  },
  {
    imageSrc: require("../assets/images/books/butch.png"),
    author: "By Suzanne Casey",
    title: "Treachery: Alpha Colony "
  },
];

const bookImages = [
  {
    imageSrc: require("../assets/images/books/budget.png"),
    title:"Budgeting"
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    title:"Stock Market"
  },
  
  {
    imageSrc: require("../assets/images/books/book2.png"),
    title:"Taxation"
  },
  {
    imageSrc: require("../assets/images/books/book3.png"),
    title:"Retirement Planning"
  },
  {
    imageSrc: require("../assets/images/books/book4.png"),
    title:"Smart with money"
  },
  {
    imageSrc: require("../assets/images/books/book1.png"),
    title:"Finance hacks"
  },
];

const guides = [
  {
    imageSrc: require("../assets/images/books/guide1.png"),
    author:"By Arthur Gonzalez",
    title:"A God Who Hates Women",
    about: ""
  },
  {
    imageSrc: require("../assets/images/books/guide2.png"),
    author:"By Sabela Hupter",
    title:"Hans Christian Andersen"
  },
  {
    imageSrc: require("../assets/images/books/guide3.png"),
    author:"By Alyce Kris",
    title:"Castle In The Sky"
  },

];

const Books = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="fin-head text-white pt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">2-Week Plan to Jump-Start Your Healing</h1>
            <p className="mb-4">
              Check out the new book by Dr. Martin to find out how to stay healthy and support your body.
            </p>
            <button className="bg-white text-green-600 py-2 px-4 rounded font-semibold hover:bg-gray-100">
              Meet Our Bestsellers
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={heroo} alt="Person" className="" />
           
          </div>
        </div>
      </section>
 {/* carousel section */}
   
 <div className=" p-14 flex flex-col items-center ">  
  <h2 className="font-bold text-black text-2xl text-center mb-[4%]">Browse by Category</h2> 
  <div className="container mx-auto">          
    <div className="flex justify-center space-x-6 overflow-x-scroll">
      {bookImages.map((bookImages, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center">
            <img
              src={bookImages.imageSrc}
              alt={`Book ${index}`}
              className="w-32 h-24 object-contain overflow-hidden "
            />
          </div>
          <div className="flex text-center mt-5 mb-[50%]">
            <h2>{bookImages.title}</h2>
          </div>
        </div>
      ))} 
    </div>
  </div>
</div>

{/* Promotion Section */}
<div>
<div className="finwise-back ml-[14%] mr-[14%] m text-black flex pt-10 h-auto px-10">
  <div className="mx-auto p-10 w-full flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2">
      <div className="flex mb-4">
        <h2 className="font-bold text-lg">100% off</h2>
        <h2 className="font-semibold ml-1 text-lg">on all guides</h2>
      </div>
      <h1 className="font-extrabold text-3xl">Free for all</h1>
      <h1 className="text-5xl mb-6 font-bold">Early members</h1>
      <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
        Get Now
      </button>
    </div>

    <div className="md:w-1/2 flex justify-center">
      <img src={join} className="h-auto max-w-full" />
    </div>
  </div>
</div>

</div>

      {/* Book List Section */}
      <section className=" mb-[10%] ml-[13%] mr-[13%]">
      <h2 className="font-semibold text-black text-3xl  p-12 "> New Arrivals</h2> 
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4  text-start">
          {bookList.map((book, index) => (
            <div key={index} className="text-center">
              <img
                src={book.imageSrc}
                alt={`Book ${index}`}
                className="w-full object-cover mb-4"
              />
              <p className=' font-light italic text-sm'>{book.author}</p>
              <h3 className="font-semibold">{book.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Guides of the Day Section */}
      <div className="fin-back py-16">
        <div className="container mx-auto">
         <div className=' flex'>
         <h2 className="text-black text-3xl font-bold  "> Guides of the Day</h2>
          <h2 className="text-orange-800 text-3xl font-bold mb-8 pl-1"> {new Date().toLocaleDateString()}</h2>

         </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg">
            {guides.map((guide, index) => (
              <div>
                <div key={index} className="bg-white p-5">
                <img
                  src={guide.imageSrc}
                  alt={`Guide ${index}`}
                  className="w-full h-40 object-cover mb-4"
                />   
                <p className=''>{guide.author}</p>
                <h2 className=' font-bold text-black mb-10'>{guide.title}</h2>
               <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
                 Get Now
               </button>
                       
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
