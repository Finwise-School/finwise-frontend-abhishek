import React from "react";
import FooterColumn from "./Homepage/Footer Files/FooterColumn";
import EmailSubscription from "./Homepage/Footer Files/EmailSubscription";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
// import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  const footerColumns = [
    {
      title: "Tools",
      items: [
        { name: "Budget Boss", path: "/maintainence" },
        { name: "Goal SIP", path: "/tools/goal-sip" },
        { name: "SIP Calculator", path: "/tools/sip" },
        { name: "F.I.R.E", path: "/tools/fire" },
        { name: "Many more", path: "/tools" },
      ],
    },
    {
      title: "Blogs",
      items: [
        { name: "UK Tax System", path: "/blogs/uk-tax-system" },
        { name: "Debt Management", path: "/blogs" },
        { name: "Negotiation Wizardry", path: "/blogs" },
        { name: "How to Budget", path: "/blogs" },
        { name: "Investing Yes or No ?", path: "/blogs" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Budgeting", path: "/budgeting" },
        { name: "Stock Market", path: "/stock" },
        { name: "Taxation", path: "/taxation" },
        { name: "Retirement Planning", path: "/retirement" },
        { name: "More", path: "/books" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        { name: "Contact", path: "/contact" },
        { name: "Our Offices", path: "/contact" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: <FaInstagram />,
      alt: "Instagram",
      url: "https://www.instagram.com/finwiseschool/",
    },
    {
      icon: <FaLinkedinIn />,
      alt: "LinkedIn",
      url: "https://uk.linkedin.com/company/finwiseschool",
    },
    {
      icon: <FaYoutube />,
      alt: "YouTube",
      url: "https://www.youtube.com/@finwiseschool",
    },
  ];

  const isLarge = useMediaQuery({ minWidth: 1024 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 767 });

  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById("testimonials");
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isLarge || isMedium ? (
        <footer className="flex flex-col w-full bg-black">
          {/* Top Section */}
          <div className="flex flex-wrap gap-2 items-start px-2 py-6 w-full justify-between md:justify-center max-md:flex-col max-md:items-center max-md:text-center">
            <EmailSubscription />

            {/* Footer Columns */}
            <div className="flex flex-1 gap-2 justify-between items-start font-medium flex-grow flex-wrap max-md:flex-col max-md:items-center max-md:text-center">
              {footerColumns.map((column, index) => (
                <FooterColumn
                  key={index}
                  title={column.title}
                  items={column.items}
                />
              ))}
            </div>
          </div>

          {/* Bottom Sectidsfsdfsdfdsfsdon */}
          <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-zinc-900 text-xs text-center">
            {/* Text Links */}
            <div className="flex flex-col md:flex-row items-center text-white justify-center md:justify-start w-full md:w-auto">
              <p className="text-xs md:text-sm m-auto md:m-0">
                @2024 Finwise School All Rights Reserved.
              </p>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white text-xs md:text-sm p-1 m-auto"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                target="_blank"
                className="text-gray-400 hover:text-white text-xs md:text-sm p-1 m-auto"
              >
                Privacy Notice
              </a>
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
      ) : (
        <div className="footerMobile py-[50px] gap-[40px] bg-black">
          <div className="fmUpperContainer gap-[50px] px-[16px] bg-black">
            <div className="fmUpperSubContainer gap-5">
              <EmailSubscription />
            </div>
            <div className="fmBottomSubContainer flex flex-col">
              <div className="frame1 gap-5 flex flex-row justify-center">
                <div className="border-b border-[#262626] pb-5 gap-4 w-2/4">
                  <p className="finwise-para font-medium text-base">
                    {footerColumns[0].title}
                  </p>
                  <div className="flex flex-col">
                    {footerColumns[0].items.map((items, index) =>
                      items.path.startsWith("#") ? (
                        <Link
                          to={items.path.substring(1)} // Remove the '#' from the path
                          smooth={true}
                          duration={500}
                          key={index}
                          className={
                            index > 0
                              ? "font-medium text-sm leading-6 text-[#FFFFFF] mb-1"
                              : ""
                          }
                        >
                          {items.name}
                        </Link>
                      ) : (
                        <RouterLink
                          key={index}
                          to={items.path}
                          className="font-medium text-sm leading-6 text-[#FFFFFF] mb-1"
                        >
                          {items.name}
                        </RouterLink>
                      )
                    )}
                  </div>
                </div>
                <div className="border-b border-l border-[#262626] pb-5 pl-5 gap-4 w-2/4">
                  <p className="finwise-para font-medium text-base">
                    {footerColumns[1].title}
                  </p>
                  <div className="flex flex-col">
                    {footerColumns[1].items.map((items, index) =>
                      items.path.startsWith("#") ? (
                        <Link
                          to={items.path.substring(1)} // Remove the '#' from the path
                          smooth={true}
                          duration={500}
                          key={index}
                          className={
                            index > 0
                              ? "font-medium text-sm leading-6 text-[#FFFFFF] mb-1"
                              : ""
                          }
                        >
                          {items.name}
                        </Link>
                      ) : (
                        <RouterLink
                          key={index}
                          to={items.path}
                          className="font-medium text-sm leading-6 text-[#FFFFFF] mb-1"
                        >
                          {items.name}
                        </RouterLink>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="frame2 gap-2">
                <div className="frame1 gap-2 flex flex-row justify-center">
                  <div className="border-b border-[#262626] pb-5 gap-4 w-2/4 flex flex-col">
                    <div>
                      <p className="finwise-para font-medium text-base">
                        {footerColumns[3].title}
                      </p>
                      <div className="flex flex-col">
                        {footerColumns[3].items.map((items, index) => (
                          <RouterLink
                            key={index}
                            to={items.path}
                            className="font-medium text-sm leading-6 text-[#FFFFFF] mb-1"
                          >
                            {items.name}
                          </RouterLink>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-l border-[#262626] pb-5 pl-5 gap-4 w-2/4">
                    <p className="finwise-para font-medium text-base">
                      {footerColumns[2].title}
                    </p>
                    <div className="flex flex-col">
                      {footerColumns[2].items.map((items, index) => (
                        <RouterLink
                          key={index}
                          to={items.path}
                          className="font-medium text-sm leading-6 text-[#FFFFFF] mb-1"
                        >
                          {items.name}
                        </RouterLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fmBottomContainer gap-5 border-t py-5 px-4 bg-[#1A1A1A]">
            <div className="gap-2 flex flex-row justify-center items-center">
              {socialIcons.map((items, index) => (
                <a
                  key={index}
                  href={items.url}
                  className="rounded-full p-5 gap-2 bg-[#141414] mx-1"
                >
                  {items.icon}
                </a>
              ))}
            </div>
            <div className="flex justify-center flex-col items-center py-4">
              <p className="font-medium text-sm leading-6 text-[#FFFFFF]">
                @2024 Finwise School All Rights Reserved.
              </p>
              <Link
                to="#"
                className="font-medium text-sm leading-6 text-[#FFFFFF]"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="font-medium text-sm leading-6 text-[#FFFFFF]"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
