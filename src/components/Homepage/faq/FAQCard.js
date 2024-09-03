import React from 'react';

function FAQCard({ title, content }) {
  return (
    <article className="flex flex-col flex-1 shrink p-12 bg-green-500 rounded-xl border border-solid basis-0 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-8 tracking-normal leading-7 text-neutral-800">{content}</p>
      <button className="gap-2.5 self-start px-6 py-5 mt-8 tracking-normal leading-none rounded-xl border border-solid bg-zinc-900 border-neutral-800 max-md:px-5">
        Read More
      </button>
    </article>
  );
}

export default FAQCard;