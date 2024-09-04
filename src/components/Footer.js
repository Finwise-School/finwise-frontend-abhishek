import React from "react";
import FooterColumn from "./Homepage/Footer Files/FooterColumn";
import EmailSubscription from "./Homepage/Footer Files/EmailSubscription";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  const footerColumns = [
    {
      title: "Home",
      items: [
        { name: "Hero Section", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Financial Tools", path: "/tools" },
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
      title: "Blogs",
      items: [
        { name: "UK Tax System", path: "/blogs/uk-tax-system" },
        { name: "Debt management", path: "/blogs/debt-management" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Budget Boss Tool", path: "/tools/budget-boss" },
        { name: "Goal SIP", path: "/tools/goal-sip" },
        { name: "EMI Calculator", path: "/tools/emi-calculator" },
        { name: "Mortgage calculator", path: "/tools/mortgage-calculator" },
        { name: "Many More", path: "/tools" }
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "Contact Form", path: "/contact" },
        { name: "Our Offices", path: "/contact/offices" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaInstagram />, alt: "Instagram", url: "https://www.instagram.com/finwiseschool/" },
    { icon: <FaLinkedinIn />, alt: "LinkedIn", url: "https://uk.linkedin.com/company/finwiseschool" },
    { icon: <FaTwitter />, alt: "Twitter", url: "https://twitter.com" },
    { icon: <FaYoutube />, alt: "YouTube", url: "https://www.youtube.com/@finwiseschool" }
  ];

  return (
    <footer className="flex flex-col items-center w-full bg-black text-white">
      <div className="w-full flex flex-col items-center justify-center px-4 py-6">
        <EmailSubscription />
      </div>
      <div className="flex flex-wrap justify-between w-full px-4 py-6 md:flex-row max-md:flex-col max-md:items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-around w-full">
          {footerColumns.slice(0, 2).map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-around w-full mt-8 md:mt-0">
          {footerColumns.slice(2, 5).map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center py-4 border-t border-neutral-700 w-full">
        <div className="flex justify-center gap-4">
          {socialIcons.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.alt}
               className="flex items-center justify-center p-2 bg-neutral-900 h-10 w-10 rounded-full text-white hover:bg-neutral-700 transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-xs md:text-sm mt-4">@2024 Finwise School All Rights Reserved.</p>
        <div className="flex justify-center gap-4 text-gray-400 mt-2">
          <a href="#terms" className="hover:text-white">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-white">Privacy Notice</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
