import React, { useState } from 'react';
import ContactImg from "../assets/images/contact/contact-finwise.png";
import MailImg from "../assets/images/contact/mail.png";
import CallImg from "../assets/images/contact/call.png";
import LocationImg from "../assets/images/contact/location.png";
import youtubeImg from "../assets/images/contact/youtube.png";
import EarlyAccessTemplate from './EarlyAccessTemplate';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    hearAboutUs: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid Phone Number is required';
    if (!formData.inquiryType) newErrors.inquiryType = 'Inquiry Type is required';
    if (!formData.hearAboutUs) newErrors.hearAboutUs = 'Please select how you heard about us';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the Terms of Use and Privacy Policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="font-nunito bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-blue-900">Get in Touch with Us</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Welcome to Finwise School Contact Us page. We're here to help you with any questions, feedback, or
              support you may need. Whether you're looking to improve your financial literacy, need guidance on
              using our tools, or want to learn more about our rewards program, we're just a message away. Reach out to
              us, and let's start building your financial future together.
            </p>
          </div>
          <img src={ContactImg} alt="Contact Finwise Img" className="w-full md:w-1/2 max-w-xs rounded-lg md:ml-6" />
        </div>
      </div>
      <hr className="mt-0 w-full h-0.5 bg-gray-900 border-0 dark:bg-gray-900 mb-4" />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Fill out the below form and we will get back to you.
        </h2>
        <div className="bg-white shadow-md rounded-lg p-8 mb-12 border-solid border-2 border-gray-400">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid-for-calci grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="general">General</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Support</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-sm">{errors.inquiryType}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${errors.hearAboutUs ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option value="">Select</option>
                  <option value="social_media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="web_search">Web Search</option>
                </select>
                {errors.hearAboutUs && <p className="text-red-500 text-sm">{errors.hearAboutUs}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your Message here."
                className={`mt-1 block w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Checkbox and Button Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Checkbox */}
              <div className="flex items-center mb-4 md:mb-0">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className={`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ${errors.terms ? 'border-red-500' : 'border-gray-300'}`}
                />
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
                  I agree with <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Use and Privacy Policy</a>
                </label>
                {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full sm:w-auto"
                >
                  Send Your Message
                </button>
              </div>


            </div>
          </form>
        </div>
      </div>
      <footer style={{ backgroundColor: "#000000" }} className="text-white py-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="flex items-center justify-center relative group">
        {/* <div className="relative z-10 flex flex-col items-center justify-center bg-[#1A1A1A] p-5 rounded-md shadow-md" style={{ width: '250px', height: '150px', margin: '2px' }}> */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-[#1A1A1A] p-4 rounded-md shadow-md" style={{ width: '280px', height: '120px', margin: '0px' }}>

          <img src={MailImg} alt="Email Icon" className="w-12 h-12 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <p className="text-white text-sm">
            <a href="mailto:contact@finwiseschool.com" className="hover:underline">contact@finwiseschool.com</a>
          </p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="flex items-center justify-center relative group">
        <div className="relative z-10 flex flex-col items-center justify-center bg-[#1A1A1A] p-4 rounded-md shadow-md" style={{ width: '280px', height: '120px', margin: '0px' }}>
          <img src={CallImg} alt="Phone Icon" className="w-12 h-12 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <p className="text-white text-sm">
            <a href="tel:+447741819337" className="hover:underline">+44 7741-819-337</a>
          </p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="flex items-center justify-center relative group">
        <div className="relative z-10 flex flex-col items-center justify-center bg-[#1A1A1A] p-4 rounded-md shadow-md" style={{ width: '280px', height: '120px', margin: '0px' }}>
          <img src={LocationImg} alt="Location Icon" className="w-12 h-12 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <p className="text-white text-sm">Glasgow, UK</p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="flex items-center justify-center relative group">
        <div className="relative z-10 flex flex-col items-center justify-center bg-[#1A1A1A] p-4 rounded-md shadow-md" style={{ width: '280px', height: '120px', margin: '0px' }}>
          <img src={youtubeImg} alt="YouTube Icon" className="w-12 h-12 mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <p className="text-white text-sm">YouTube</p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</footer>


      <EarlyAccessTemplate />
    </div>
  );
};

export default ContactUs;
