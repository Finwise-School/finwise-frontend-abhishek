import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import axios from "axios";
import blues from "../../assets/images/books/analysis.png";

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
        Basics of Technical Analysis
      </h1>
      <div className="mt-[4%] mr-[%]">
        <div className="flex justify-center">
          <img src={blues} className="h-auto w-auto" alt="Book Cover" />
        </div>
        <p className="mb-[4%] mt-[4%] font-medium text-black text-justify mx-[10%]">
          <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-xl italic mb-4 font-bold">
              Unlock the power of market trends and make smarter trading
              decisions!
            </h2>
            <p className="mb-4">
              <strong className="font-bold">"Basics of Technical Analysis"</strong> by Finwise School
              is your go-to guide for understanding and applying technical
              analysis in financial markets. Whether you're a beginner or
              looking to sharpen your skills, this handbook provides a solid
              foundation in analyzing price movements, spotting trends, and
              predicting future market behavior.
            </p>
            <p className="mb-4">In this book, you'll discover:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong className="font-bold">Key Concepts of Technical Analysis:</strong> Learn how
                to use historical price and volume data to forecast future
                market movements.
              </li>
              <li>
                <strong className="font-bold">Understanding Chart Types:</strong> Get familiar with
                line, bar, and candlestick charts, and learn how to interpret
                them for better trading decisions.
              </li>
              <li>
                <strong className="font-bold">Spotting Market Trends:</strong> Master the art of
                identifying uptrends, downtrends, and range-bound markets to
                capitalize on market momentum.
              </li>
              <li>
                <strong className="font-bold">Chart Patterns and Indicators:</strong> Understand
                powerful patterns like Head & Shoulders and Double Tops, along
                with essential indicators like Moving Averages and the Relative
                Strength Index (RSI).
              </li>
              <li>
                <strong className="font-bold">Psychological Insights:</strong> Gain insight into how
                emotions like fear and greed drive market movements and how to
                maintain discipline in your trades.
              </li>
            </ul>
            <p className="mb-4">
              With clear explanations and practical examples,{" "}
              <strong className="font-bold">"Basics of Technical Analysis"</strong> gives you the
              tools needed to make informed, confident trading decisions.
              Whether you're interested in stocks, commodities, or forex, this
              guide will help you navigate the markets with precision and
              clarity.
            </p>
          </div>
        </p>
        <div className="flex justify-center mr-[2%]">
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
                        href="https://drive.usercontent.google.com/u/0/uc?id=1vGrwxwJ4Avdr5-WoIDRYdzqBR0w1ctx2&export=download"
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
