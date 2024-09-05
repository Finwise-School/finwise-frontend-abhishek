import React from "react";
import FooterColumn from "./Homepage/Footer Files/FooterColumn";
import EmailSubscription from "./Homepage/Footer Files/EmailSubscription";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerColumns = [
    {
      title: "Home",
      items: [
        { name: "Welcome", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Tools", path: "/tools" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "FAQ's", path: "/faqs" }
      ]
    },
    {
      title: "About Us",
      items: [
        { name: "Our Story", path: "/about#our-story" },
        { name: "Our Values", path: "/about#our-values" },
        { name: "How It Works", path: "/about#how-it-works" },
        { name: "Our Supporters", path: "/about#our-supporters" },
        { name: "Our Partner Dashboard", path: "/about#partner-dashboard" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Budget Boss", path: "/tools/budget-boss" },
        { name: "Goal SIP", path: "/tools/goal-sip" },
        { name: "SIP Calculator", path: "/tools/sip-calculator" },
        { name: "F.I.R.E", path: "/tools/fire" },
        { name: "Many more", path: "/tools" }
      ]
    },
    {
      title: "Blogs",
      items: [
        { name: "UK Tax System", path: "/blogs/uk-tax-system" },
        { name: "Debt Management", path: "/blogs/debt-management" },
        { name: "Negotiation Wizardry", path: "/blogs/negotiation-wizardry" },
        { name: "How to Budget", path: "/blogs/how-to-budget" },
        { name: "Investing Yes or No ?", path: "/blogs/investing-yes-or-no" }
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "Contact", path: "/contact" },
        { name: "Our Offices", path: "/contact/offices" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaInstagram />, alt: "Instagram", url: "https://www.instagram.com/finwiseschool/" },
    { icon: <FaLinkedinIn />, alt: "LinkedIn", url: "https://uk.linkedin.com/company/finwiseschool" },
    { icon: <FaYoutube />, alt: "YouTube", url: "https://www.youtube.com/@finwiseschool" }
  ];

  return (
    <footer className="flex flex-col w-full bg-black">
      {/* Top Section */}
      <div className="flex flex-wrap gap-2 items-start px-2 py-6 w-full justify-between md:justify-center max-md:flex-col max-md:items-center max-md:text-center">
        <EmailSubscription />
        {/* Footer Columns */}
        <div className="flex flex-1 gap-2 justify-between items-start font-medium flex-grow flex-wrap max-md:flex-col max-md:items-center max-md:text-center">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-zinc-900 text-xs text-center">
        {/* Text Links */}
        <div className="flex flex-col md:flex-row items-center text-white justify-center md:justify-start w-full md:w-auto">
          <p className="text-xs md:text-sm m-auto md:m-0">@2024 Finwise School All Rights Reserved.</p>
          <a href="#terms" className="text-gray-400 hover:text-white text-xs md:text-sm p-1 m-auto">Terms & Conditions</a>
          <a href="/privacy" target="_blank" className="text-gray-400 hover:text-white text-xs md:text-sm p-1 m-auto">Privacy Notice</a>
        </div>
        {/* Social Icons */}
        <div className="flex gap-2 items-center justify-center md:justify-end mt-4 md:mt-0">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.alt}
              className="flex items-center justify-center p-1.5 bg-neutral-900 h-8 w-8 rounded-full text-white cursor-pointer hover:bg-neutral-700 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
