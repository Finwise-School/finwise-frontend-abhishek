import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import blues from "../../assets/images/books/analysis.png";
import { useNavigate } from 'react-router-dom';
import book from "../../assets/booksDownload/Blueprint.pdf"
import axios from 'axios';

const BasicsOfTechnicalAnalysis = () => {
  const formatDate = (date) => {
      const options = { day: 'numeric', month: 'short', year: '2-digit' };
      return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  const date = new Date();
  const writeDate = formatDate(date);
  const [submit, isSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    // Remove non-numeric characters and limit to 10 digits
    const cleanedValue = value.replace(/\D/g, '');
    setEmail(cleanedValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate email address
    if (email.length === 10) {
      isSubmit(true);
      const emailData = { email, writeDate };

      try {
        const response = await axios.post('https://api.finwiseschool.com/api/emailData', emailData);

        if (response.status === 201) { // Successful creation
          console.log('Email Address Received');
          setOpenModal(true);
        } else {
          console.error('Error saving data:', response.data);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      } finally {
        isSubmit(false);
      }
    } else {
      console.error('Invalid email address.');
    }
  };
  return (
    <div className=" p-[5%]">
      <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[4%] text-center">
       
        Basics of Technical Analysis
      </h1>
      <div className=" mt-[4%] mr-[%]">
      <div className=" flex justify-center">
      <img src={blues} className=" h-auto w-auto"/>
      </div>
      <p className="mb-[4%] mt-[4%] font-medium text-black text-justify mx-[10%]">
        A **technical analysis book** delves into the study of price movements,
        chart patterns, and market indicators to help traders and investors
        forecast the future performance of financial instruments like stocks,
        commodities, or currencies. It typically starts by introducing various
        chart types, such as candlestick, bar, and line charts, to teach readers
        how to visualize and interpret market data. The book also covers a range
        of indicators and oscillators, including moving averages, the relative
        strength index (RSI), and MACD, providing detailed guidance on how these
        tools can help identify trends, overbought or oversold conditions, and
        potential entry or exit points. Readers learn about support and
        resistance levels, key price points where markets tend to reverse or
        consolidate, and how to draw trendlines to follow market direction.
        Additionally, the book explains how to recognize classic chart patterns
        like head and shoulders, triangles, and flags, which often signal market
        continuations or reversals. Volume analysis is another key focus,
        helping traders confirm the strength of price movements. Lastly, the
        book emphasizes risk management strategies, such as setting stop-loss
        orders, to minimize potential losses and protect gains, making it an
        essential resource for anyone looking to navigate the complexities of
        financial markets.
      </p>
      <div className="flex justify-center mr-[4%]">
      <div className="mt-6 lg:mt-0 lg:ml-10">
      <Button onClick={() => setOpenModal(true)}
        // onClick={handleClick}
        className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-3 px-6 lg:px-8 text-base lg:text-lg min-w-[200px] lg:min-w-[250px] text-center transition-all duration-300"
        style={{
          border: '5px solid',
          borderRadius: '12px',
          borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
        }}
      >
        Download Now
      </Button>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Enter your Email Address :
            </h3>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[6%]"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button color="success" onClick={() => setOpenModal(false)} onSubmit={onSubmit}>
                <a href="" download={book}>Download Now</a>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    {/*  */}
      
    </div>
      </div>
      </div>

    </div>
  );
};

export default BasicsOfTechnicalAnalysis;
