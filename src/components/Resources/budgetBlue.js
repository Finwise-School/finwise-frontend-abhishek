import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import axios from "axios";
import blues from "../../assets/images/books/blueprint.jpg";

const BasicsOfTechnicalAnalysis = () => {
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "2-digit" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const date = new Date();
  const writeDate = formatDate(date);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false); // New state for tracking email submission

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // No need to clean the input, emails can have symbols, letters, numbers, etc.
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate email address with regex
    if (validateEmail(email)) {
      setSubmit(true); // Set submitting state
      const emailData = { email, writeDate };

      try {
        const response = await axios.post(
          "https://api.finwiseschool.com/api/emailData",
          emailData
        );

        if (response.status === 201) {
          console.log("Email Address Received");
          setIsEmailSubmitted(true); // Mark email as successfully submitted
        } else {
          console.error("Error saving data:", response.data);
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        setSubmit(false); // Reset submitting state
      }
    } else {
      console.error("Invalid email address.");
    }
  };

  return (
    <div className="p-[5%]">
      <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[4%] text-center">
        The Budget Blueprint
      </h1>
      <div className="mt-[4%] mr-[%]">
        <div className="flex justify-center">
          <img src={blues} className="h-auto w-auto" alt="Book Cover" />
        </div>
        <p className="mb-[4%] mt-[4%] font-medium text-black text-justify mx-[10%]">
          <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-xl italic mb-4 font-bold">
              Take control of your finances and start building the life you
              want!
            </h2>
            <p className="mb-4">
              <strong className="font-bold">"The Budgeting Blueprint"</strong> by Finwise School is a
              practical guide designed to help you master the art of budgeting
              and achieve financial freedom. This easy-to-follow guide walks you
              through every step, from understanding the basics of budgeting to
              setting meaningful financial goals, managing debt, and even
              investing for the future.
            </p>
            <p className="mb-4">In this book, you'll learn how to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong className="font-bold">Create a Personalized Budget:</strong> Break down your
                income, expenses, and savings in a way that suits your unique
                lifestyle.
              </li>
              <li>
                <strong className="font-bold">Set SMART Financial Goals:</strong> Whether you're
                saving for a dream vacation or paying off debt, discover how to
                reach your goals with clear, actionable steps.
              </li>
              <li>
                <strong className="font-bold">Build Smart Spending Habits:</strong> Learn how to track
                your expenses, cut unnecessary spending, and make smarter
                financial choices.
              </li>
              <li>
                <strong className="font-bold">Manage Debt Efficiently:</strong> Explore strategies to
                tackle debt, reduce interest payments, and gain financial
                control.
              </li>
              <li>
                <strong className="font-bold">Invest for the Future:</strong> Get an introduction to
                basic investing principles and start building long-term wealth.
              </li>
            </ul>
            <p className="mb-4">
              With practical tips, budgeting hacks, and simple strategies,{" "}
              <strong className="font-bold">"The Budgeting Blueprint"</strong> turns managing your
              money into an approachable and rewarding task. Whether you're just
              starting your financial journey or looking for ways to refine your
              budget, this guide will give you the tools to create a secure
              financial future.
            </p>
          </div>
        </p>
        <div className="flex justify-center mr-[4%]">
          <div className="mt-6 lg:mt-0 lg:ml-10">
            <Button
              onClick={() => setOpenModal(true)}
              className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300 bg-white"
              style={{
                border: "5px solid",
                borderRadius: "12px",
                borderImage:
                  "linear-gradient(90deg, #223876 0%, #3CB371 100%) 1",
                backgroundColor: "white", // Ensure background is white
              }}
            >
              Download Now
            </Button>

            <Modal
              show={openModal}
              size="md"
              onClose={() => setOpenModal(false)}
              popup
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  {!isEmailSubmitted ? (
                    <>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Enter your Email Address:
                      </h3>
                      {/* Form for email submission */}
                      <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[6%]"
                          required
                          onChange={handleEmailChange}
                          value={email}
                        />
                        {/* Submit button */}
                        <Button color="success" type="submit" disabled={submit}>
                          {submit ? "Submitting..." : "Download"}
                        </Button>
                      </form>
                    </>
                  ) : (
                    // Show download button only after successful email submission
                    <div className="flex justify-center">
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Your email was successfully submitted!
                      </h3>
                      <a
                        href="https://drive.usercontent.google.com/u/0/uc?id=1Uhy8_aqU_JTZOhNulnhymsyS2iBnQFmv&export=download"
                        download
                      >
                        <Button color="success">Download Now</Button>
                      </a>
                    </div>
                  )}
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicsOfTechnicalAnalysis;
