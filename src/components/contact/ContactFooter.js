import React from 'react';
import MailImg from "../../assets/images/contact/mail.png";
import CallImg from "../../assets/images/contact/call.png";
import LocationImg from "../../assets/images/contact/location.png";
import youtubeImg from "../../assets/images/contact/youtube.png";

const ContactFooter = () => {
  return (
    <footer style={{ backgroundColor: "#000000"}} className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid-for-calci grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-[2px] text-center">
          {/* Contact Item */}
          <a href="mailto:contact@finwiseschool.com" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="relative mb-2">
                <img src={MailImg} alt="Email Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">contact@finwiseschool.com</p>
            </div>
          </a>

          {/* Phone Item */}
          <a href="tel:+447741819337" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="relative mb-2">
                <img src={CallImg} alt="Phone Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">+44 7741-819-337</p>
            </div>
          </a>

          {/* Location Item */}
          <a href="https://www.google.com/maps/place/Glasgow,+UK" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="relative mb-2">
                <img src={LocationImg} alt="Location Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Glasgow, UK</p>
            </div>
          </a>

          {/* Social Media Links */}
          <a href="https://youtube.com/@finwiseschool" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative group">
            <div className="relative shiny-effect z-10 flex flex-col items-center justify-center bg-green-500 p-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform w-full h-full" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="relative mb-2">
                <img src={youtubeImg} alt="Social Media Icon" className="w-14 h-14" />
              </div>
              <p className="text-white text-sm">Youtube</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
