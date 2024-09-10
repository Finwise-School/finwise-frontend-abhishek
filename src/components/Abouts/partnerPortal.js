import React, { useRef } from "react";
import Slider from "react-slick";
import left from "../../assets/images/aboutUS/left.png";
import right from "../../assets/images/aboutUS/right.png";
import Buttonnext from "../../assets/images/clients/Buttonnext.png";
import Buttonprev from "../../assets/images/clients/Buttonprev.png";
import { useMediaQuery } from "react-responsive";

export default function Partner() {
  const sliderRef = useRef(null);

  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const isLarge = useMediaQuery({ minWidth: 1024 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 767 });

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    cssEase: "linear",
    responsive: [],
  };

  return (
    <section id="auPortal" className="items-center">
      <div className="mainSupportersContainer flex flex-col justify-center items-center md:gap-3 gap-10 mt-8 mx-4 md:mx-10">
        <div className="msHeader">
          <h1 className="font-semibold md:text-5xl text-[28px] md:leading-[72px] leading-[42px] finwise-blue text-center">
            Partner Portal
          </h1>
          <p className="font-medium md:text-lg text-sm md:leading-7 leading-5 finwise-para pr-[6%] pl-[6%] text-justify">
            Our Partner Portal offers customized financial planning solutions
            tailored specifically for corporate clients. Collaborate with
            Finwise School to provide your employees with seamless access to
            exclusive tools and expert advice, empowering them to achieve their
            financial goals.
          </p>
        </div>

        <div className="msContent gap-5 lg:pl-[25%] md:gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:my-10 w-full">
          {isLarge || isMedium ? (
            data.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="supportersCard flex items-center justify-center mx-auto p-5 md:p-[30px] w-full md:w-auto gap-10 md:gap-[50px]"
              >
                <img
                  src={item.img}
                  alt={item.compName}
                  className="rounded-[10px] md:rounded-xl items-center justify-center self-center cursor-pointer w-full h-auto object-cover md:h-48 md:w-80"
                  onClick={() => handleClick(item.compLink)}
                />
              </div>
            ))
          ) : (
            <Slider ref={sliderRef} {...settings}>
              {data.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="supportersCard flex justify-center items-center mx-auto rounded-xl border border-[#262626] p-5 md:p-[30px] gap-10 md:gap-[50px] w-full"
                >
                  <img
                    src={item.img}
                    alt={item.compName}
                    className="rounded-[10px] md:rounded-xl items-center justify-center self-center cursor-pointer w-full h-auto object-cover md:h-48 md:w-80"
                    onClick={() => handleClick(item.compLink)}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>

      <div className="flex items-center self-center">
        <div className="msFooter flex flex-row items-center mx-auto my-3 md:hidden">
          <button
            className="custom-arrow custom-arrow-prev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img className="m-1" src={Buttonprev} alt="Previous" />
          </button>
          <button
            className="custom-arrow custom-arrow-next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <img className="m-1" src={Buttonnext} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
}

const data = [{ img: left }, { img: right }];
