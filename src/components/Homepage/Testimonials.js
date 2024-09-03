import React from 'react';
import starrs from './../Homepage/Testimonials/star.png';

const TestimonialCard = ({ rating, title, content, author, location, imageSrc }) => (
  <div className="flex flex-col flex-1 shrink p-12 bg-green-500 rounded-xl border border-solid basis-0 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
    <div className="flex gap-2.5 items-start self-start">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-2.5 items-center p-2.5 w-11 h-11 border border-solid bg-zinc-900 border-neutral-800 rounded-full">
          <img loading="lazy" src={starrs} alt="Star rating" className="object-contain w-6 h-6" />
        </div>
      ))}
    </div>
    <div className="flex flex-col mt-10 w-full">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <p className="mt-3.5 text-lg font-medium leading-7 text-white">{content}</p>
    </div>
    <div className="flex gap-3 items-center mt-10 w-full font-medium">
      <img loading="lazy" src={imageSrc} alt={author} className="object-contain rounded-full aspect-square w-[60px]" />
      <div className="flex flex-col flex-1 shrink self-stretch my-auto">
        <div className="text-xl text-white">{author}</div>
        <div className="text-lg text-black">{location}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service!",
      content: "Finwise transformed my approach to financial planning. Their financial tools have made it so easy to set clear goals and track my progress. I finally feel that I am in control of my financial future.",
      author: "Sai",
      location: "UK, Edinburgh",
      imageSrc: require('./../Homepage/Testimonials/sai.png')
    },
    {
      rating: 5,
      title: "Efficient and Reliable",
      content: "I wish I had found Finwise years ago. Their easy-to-use tools and comprehensive planning strategies have helped me optimize my savings and enjoy my retirement with peace of mind.",
      author: "Kate",
      location: "UK, Glasgow",
      imageSrc: require('./../Homepage/Testimonials/kate.png')
    },
    {
      rating: 5,
      title: "Fun and insightful",
      content: "The way they teach about the financial concepts is kinda fun and insightful. 100% recommended if someone is struggling with money or to understand basic or even advanced financial concepts.",
      author: "Matthew",
      location: "UK, London",
      imageSrc: require('./../Homepage/Testimonials/matthew.png')
    }
  ];

  return (
    <section className="flex flex-col self-center -mt-4 w-full max-w-[1596px] px-8 md:px-16 lg:px-24 max-md:mt-10 max-md:px-16">
      <div className="flex gap-10 items-end w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-5xl font-semibold text-blue-900 max-md:max-w-full max-md:text-4xl">
            Word from Our People
          </h2>
          <p className="mt-3.5 text-lg font-medium text-neutral-400 max-md:max-w-full">
            Read the success stories and heartfelt testimonials from our valued members.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 w-full max-md:mt-10 max-md:max-w-full mx-4 lg:mx-0">
      <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
