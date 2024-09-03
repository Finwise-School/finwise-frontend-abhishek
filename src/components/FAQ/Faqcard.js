import React, { useRef } from 'react';

const Faqcard = ({ title, answer, isExpanded, onToggle, isArray }) => {
  return (
    <>
    <div className={`flex flex-col rounded-xl border border-[#262626] p-[30px] md:p-[50px] ${isExpanded ? 'h-auto bg-[#58da92]' : 'md:h-[22rem] finwise-green-bg'}`}>
      <h1 className='font-semibold text-lg md:text-2xl text-[#FFFFFF] leading-7 md:leading-9'>{title}</h1>
      <div className={`${isExpanded ? 'h-auto' : 'h-32 overflow-hidden'}`}>
      {Array.isArray(answer) ? (
  answer.map((item, index) => (
    <div key={index} className={`py-5 text-[#262626] transition ease-in-out ${isExpanded ? 'h-auto' : 'h-32 overflow-hidden'}`}>
      <h3 className={`font-semibold text-xl leading-7 tracking-tighter text-[#262626]`}>{item.heading}</h3>
      <p>{item.subAnswer}</p>
    </div>
  ))
) : (
  <p className={`font-medium text-sm leading-5 md:text-lg md:leading-7 tracking-tighter py-5 text-[#262626] transition ease-in-out ${isExpanded ? 'h-auto' : 'h-32 overflow-hidden'}`}>
  {answer}
</p>
)}
</div>
      <div className='mt-4 flex md:justify-start md:items-start justify-center items-center'>
        <button
          className='faqButton rounded-lg md:rounded-[10px] border border-[#262626] py-[14px] px-5 md:py-4 md:px-6 text-white w-full md:w-auto'
          onClick={onToggle}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
</>

  );
};

export default Faqcard;


//LATER IF NEEDED
// {Array.isArray(answer) ? (
//   answer.map((item, index) => (
//     <div key={index} className='pb-4'>
//       <h3 className='font-semibold'>{item.heading}</h3>
//       <p>{item.subAnswer}</p>
//     </div>
//   ))
// ) : (
//   <p className={`font-medium text-lg leading-7 tracking-tighter py-5 text-[#262626] transition ease-in-out ${isExpanded ? 'h-auto' : 'h-32 overflow-hidden'}`}>
//   {answer}
// </p>
// )}