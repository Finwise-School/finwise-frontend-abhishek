import React from 'react';
import FAQCard from './FAQCard';

const faqData = [
  {
    title: "What is FinWise School?",
    content: "FinWise School is an online platform that offers personalized and engaging financial education. We use adaptive learning technology, gamified content, and expert insights to help users understand and apply financial concepts effectively.",
  },
  {
    title: "Who can benefit from FinWise School?",
    content: "FinWise School is designed for anyone looking to improve their financial literacy, from beginners to advanced learners. Whether you're a student, young professional, or someone planning for retirement, our platform has something for you.",
  },
  {
    title: "How does personalized learning experience work?",
    content: "Our platform uses adaptive learning technology to tailor your educational journey based on your existing knowledge, learning pace, and financial goals.",
  },
];

function FAQSection() {
  return (
    <section className="flex flex-col self-center mt-36 w-full max-w-[1596px] max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-wrap gap-10 items-end w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-12 min-w-[240px] max-md:max-w-full">
          <h2 className="text-5xl font-semibold text-blue-900 max-md:max-w-full max-md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-lg font-medium text-neutral-400 max-md:max-w-full">
            Find answers to common questions about Finwise School,
          </p>
        </div>
        <button className="gap-2 self-stretch px-6 py-5 text-lg font-medium text-white bg-green-500 rounded-xl border border-blue-900 border-solid max-md:px-5">
          View All FAQ's
        </button>
      </header>
      <div className="flex flex-col mt-20 w-full text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {faqData.map((faq, index) => (
            <FAQCard key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;