import React from "react";
import FooterColumn from "./FooterColumn";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function MobileFooter() {
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
    // Add more footer columns like in the main component
  ];

  const socialIcons = [
    { icon: <FaInstagram />, alt: "Instagram", url: "https://www.instagram.com/finwiseschool/" },
    { icon: <FaLinkedinIn />, alt: "LinkedIn", url: "https://uk.linkedin.com/company/finwiseschool" },
    { icon: <FaYoutube />, alt: "YouTube", url: "https://www.youtube.com/@finwiseschool" }
  ];

  return (
    <footer className="flex flex-col w-full bg-black p-4">
      {/* Footer Columns */}
      <div className="flex flex-col items-center">
        {footerColumns.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4 justify-center">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
            className="flex items-center justify-center p-2 bg-neutral-900 h-10 w-10 rounded-full text-white hover:bg-neutral-700 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default MobileFooter;
