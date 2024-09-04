import React from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => (
  <div className="flex flex-col items-center justify-between p-6 bg-green-500 rounded-xl border border-solid border-neutral-800 w-full md:w-[30vw] max-w-[371px] min-w-[300px]">
    <h3 className="text-2xl font-semibold text-white text-center">{question}</h3>
    <p className="mt-4 tracking-normal leading-7 text-neutral-800 text-center">{answer}</p>
    <Link to="/faqs">
      <button className="px-6 py-3 mt-8 tracking-normal leading-none text-white bg-zinc-900 rounded-xl border border-solid border-neutral-800">
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
    <section className="flex flex-col items-center justify-center px-4 py-10 mt-10 md:px-0 md:mt-0 w-full">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mt-15 md:text-5xl max-w-full">Frequently Asked Questions</h2>
        <p className="mt-3.5 text-lg font-medium text-neutral-400 max-w-full">Find answers to common questions about Finwise School.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
