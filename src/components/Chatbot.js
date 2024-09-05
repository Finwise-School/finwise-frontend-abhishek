import React, { useState, useEffect, useRef } from 'react';
import responses from './Chatbot/responses';
import subOptions from './Chatbot/subOptions';
import './Chatbot/chatbot.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I assist you today?", isBot: true }
  ]);
  const [options, setOptions] = useState([
    "I have some General Questions",
    "About Platform Access and Features",
    "What are Learning Experience and Courses",
    "About Rewards and Incentives",
    "Support and Additional Information",
    "Other"
  ]);
  const [currentLevel, setCurrentLevel] = useState('main');
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousSubOptions, setPreviousSubOptions] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [typing, setTyping] = useState(false); // State to handle typing indicator

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current && isOpen) {
      chatContainerRef.current.scrollTop = scrollPosition;
    }
  }, [isOpen]);

  const handleMajorOptionClick = (option) => {
    setMessages([...messages, { text: option, isBot: false }]);
    setSelectedOption(option);

    if (option === "Other") {
      setShowForm(true);
      setOptions([]);
    } else {
      const subOptionsList = subOptions[option] || [];
      setOptions(subOptionsList);
      setCurrentLevel('sub');
      setPreviousSubOptions(subOptionsList);
      setShowForm(false);
    }
    // No typing animation for major options
  };

  const handleSubOptionClick = (subOption) => {
    setMessages([...messages, { text: subOption, isBot: false }]);
    // Show typing indicator and then respond
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const response = responses[subOption] || "I'm not sure about that.";
      setMessages(prevMessages => [...prevMessages, { text: response, isBot: true }]);
    }, 1000); // Adjust the delay as needed
  };

  const handleClear = () => {
    setMessages([...messages, { text: "Returning to main options...", isBot: true }]);
    setOptions([
      "I have some General Questions",
      "About Platform Access and Features",
      "What are Learning Experience and Courses",
      "About Rewards and Incentives",
      "Support and Additional Information",
      "Other"
    ]);
    setCurrentLevel('main');
    setSelectedOption(null);
    setShowForm(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name,
      email,
      query
    };
  
    try {
      await axios.post('https://finwisebackend.onrender.com/api/chatbot', formData);
  
      setMessages([...messages, { text: `Name: ${name}, Email: ${email}, Query: ${query}`, isBot: false }]);
      setMessages([...messages, { text: "Thank you! We will get back to you soon.", isBot: true }]);
      
      setName('');
      setEmail('');
      setQuery('');
  
      setShowForm(false);
      setOptions([
        "I have some General Questions",
        "About Platform Access and Features",
        "What are Learning Experience and Courses",
        "About Rewards and Incentives",
        "Support and Additional Information",
        "Other"
      ]);
      setCurrentLevel('main');
      setSelectedOption(null);
    } catch (error) {
      console.error('Error submitting the form:', error);
      setMessages([...messages, { text: "There was an error submitting the form. Please try again.", isBot: true }]);
    }
  };

  const openButton = () => {
    if (isOpen) {
      if (chatContainerRef.current) {
        setScrollPosition(chatContainerRef.current.scrollTop);
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`fixed md:bottom-12 bottom-10 right-4 z-50 border border-[#262626] rounded-lg overflow-hidden bg-[#1A1A1A] flex flex-col transition-all duration-300 ease-in-out ${
        isOpen ? "w-[90vw] max-w-[400px] h-[80vh]" : "w-32 h-10 rounded-lg"
      }`}>
        {isOpen ? (
          <>
            <IoIosCloseCircleOutline className='w-6 h-6 absolute top-2 right-2 cursor-pointer' onClick={openButton}/>
            <div 
              className="flex-1 p-3 overflow-y-auto flex flex-col" 
              ref={chatContainerRef}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`my-2 p-3 rounded-lg max-w-[80%] break-words ${msg.isBot ? 'bg-gray-200 self-start' : 'finwise-green-bg text-white self-end'}`}
                >
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div className="typing-indicator">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              )}
              {showForm && (
                <>
                  <form onSubmit={handleFormSubmit} className="mt-4 space-y-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                    <textarea
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Your Query"
                      className="w-full p-2 border border-gray-300 rounded"
                      rows="4"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </form>
                  <button
                    className="mt-4 w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={handleClear}
                  >
                    Back to Main Menu
                  </button>
                </>
              )}
            </div>
            <div className="p-3 space-y-2">
              {currentLevel === 'main' ? (
                options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleMajorOptionClick(option)}
                    className="w-full p-3 finwise-blue-bg text-white rounded-lg hover:bg-blue-600 text-sm"
                  >
                    {option}
                  </button>
                ))
              ) : (
                <>
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSubOptionClick(option)}
                      className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-sm"
                    >
                      {option}
                    </button>
                  ))}
                  <button
                    className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                    onClick={handleClear}
                  >
                    Go Back to Main Options
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <button
            className='flex flex-row items-center justify-center text-center my-auto'
            onClick={openButton}
          >
            <p className='text-sm text-[#FFFFFF]'>Ask Me!</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
