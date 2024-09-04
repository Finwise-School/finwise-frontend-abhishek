import React from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => (
  <div className="flex flex-col justify-between flex-1 p-12 bg-green-500 rounded-xl border border-solid border-neutral-800 min-h-[320px] max-w-[calc(33%-16px)] flex-grow min-w-[300px] max-md:w-full max-md:min-h-auto max-md:max-w-full">
    <h3 className="text-2xl font-semibold text-white">{question}</h3>
    <p className="mt-4 tracking-normal leading-7 text-neutral-800 flex-grow">{answer}</p>
    <Link to="/faqs">
      <button className="px-6 py-5 mt-8 tracking-normal leading-none text-white rounded-xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
        Read More
      </button>
    </Link>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      question: "What is FinWise School?",
      answer: "FinWise School is an online platform that offers personalized and engaging financial education. We use adaptive learning technology, gamified content, and expert insights to help users understand and apply financial concepts effectively."
    },
    {
      question: "Who can benefit from FinWise School?",
      answer: "FinWise School is designed for anyone to improve their financial literacy, from beginners to advanced learners. Whether you're a student, professional, or planning for retirement, there is something for you."
    },
    {
      question: "How does personalized learning experience work?",
      answer: "Our platform has been using adaptive learning technology in order to tailor your educational journey based on your existing knowledge, learning pace, and your financial goals to help you all the way."
    }
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1596px] p-14 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-end p-10 w-full justify-between max-md:flex-col max-md:items-start">
        <div className="flex flex-col flex-1 shrink-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-5xl font-semibold text-blue-900 max-md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-lg font-medium text-neutral-400">
            Find answers to common questions about Finwise School.
          </p>
        </div>
        <Link to="/faqs">
          <button className="gap-2 p-4 text-lg font-medium text-white bg-green-500 rounded-xl border border-blue-900 ">
            View All FAQ's
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-8 w-full justify-between">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
