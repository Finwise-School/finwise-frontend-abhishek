import React from 'react';
import EarlyAccessTemplate from './EarlyAccessTemplate';

const Books = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">2-Week Plan to Jump-Start Your Healing</h1>
            <p className="mb-4">Check out the new book by Dr. Martin to find out how to stay healthy and support your body.</p>
            <button className="bg-white text-green-600 py-2 px-4 rounded font-semibold hover:bg-gray-100">
              Meet Our Bestsellers
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="src/assets/images/books/person.png" alt="Person" className="w-1/2" />
            <img src="src/assets/images/books/top-book.png" alt="Book Cover" className="w-1/2" />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-black py-12">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 overflow-x-scroll">
            {['book1.png', 'book2.png', 'book3.png', 'book4.png'].map((book, index) => (
              <div key={index} className="rounded-full bg-white p-2">
                <img src={`/assets/images/books/${book}`} alt={`Book ${index}`} className="w-24 h-24 object-cover rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="bg-pink-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">100% off on all guides</h2>
          <p className="text-lg mb-6">Free for all Early Members</p>
          <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
            Get Now
          </button>
        </div>
      </section>

      {/* Book List Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {['budget.png', 'father.png', 'analysis.png', 'illness.png'].map((book, index) => (
            <div key={index} className="text-center">
              <img src={`/path/to/${book}`} alt={`Book ${index}`} className="w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold">Book Title {index + 1}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Guides of the Day Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">Guides of the Day</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['guide1.png', 'guide2.png', 'guide3.png'].map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <img src={`/path/to/${guide}`} alt={`Guide ${index}`} className="w-full h-40 object-cover mb-4" />
                <h3 className="font-bold text-lg mb-2">Guide Title {index + 1}</h3>
                <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
                  Get Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EarlyAccessTemplate />
    </div>

  );
};

export default Books;
