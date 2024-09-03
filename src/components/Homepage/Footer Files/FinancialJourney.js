import React from "react";
import Button from "./Button";

function FinancialJourney() {
  return (
    <section className="flex flex-col mt-52 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-10 items-center px-40 py-24 w-full border-t border-b border-solid border-b-neutral-800 border-t-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-12 min-w-[240px] max-md:max-w-full">
          <h2 className="text-5xl font-semibold text-blue-900 max-md:max-w-full max-md:text-4xl">
            Start Your Financial Journey Today
          </h2>
          <p className="mt-3.5 text-lg font-medium leading-7 text-neutral-400 max-md:max-w-full">
            Your path to financial freedom is just a click away. Whether you're aiming to optimize your investments, create a solid savings plan, or receive expert financial advice, FinWise is here to guide you every step of the way. Take the first step towards achieving your financial goals—explore our innovative planning tools or connect with our team for personalized support tailored to your needs.
          </p>
        </div>
        <Button text="Request Early Access" />
      </div>
    </section>
  );
}

export default FinancialJourney;