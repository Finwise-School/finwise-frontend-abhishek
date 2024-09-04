import React, { useRef } from 'react';
import Slider from "react-slick";
import Barclays from "../assets/images/clients/Barclays.jpg";
import Strathclvde from "../assets/images/clients/Strathclvde.jpg";
import StrathclvdeInspire from "../assets/images/clients/StrathclvdeInspire.jpg";
import Buttonnext from "../assets/images/clients/Buttonnext.png";
import Buttonprev from "../assets/images/clients/Buttonprev.png";
import { useMediaQuery } from 'react-responsive';


export default function CarouselCards() {

  const sliderRef = useRef(null);

  const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  }

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
        responsive: [
        ]
      };
    return (
<>
      <div className='mainSupportersContainer flex flex-col justify-center items-center md:gap-3 gap-10 mt-32 mx-4 md:mx-10'>
        <div className='msHeader'>
          <h1 className='font-semibold md:text-5xl text-[28px] md:leading-[72px] leading-[42px] finwise-blue text-center'>Meet Our Supporters</h1>
          <p className='font-medium md:text-lg text-sm md:leading-7 leading-5 finwise-para text-center'>At Finwise School, our success is fueled by the support and expertise of our valued partners.</p>
        </div>
        <div className='msContent gap-5 md:gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:my-10'>
          {isLarge || isMedium ? data.slice(0, 4).map((item, index) => (
            <div key={index} className='supportersCard rounded-xl border border-[#262626] p-5 md:p-[30px] gap-10 md:gap-[50px]'>
              <img src={item.img} alt={item.compName} className='rounded-[10px] md:rounded-xl cursor-pointer h-[200px] w-[318px] md:h-auto md:w-auto' onClick={() => handleClick(item.compLink)} />
            </div>
          )) : 
          <Slider ref={sliderRef} {...settings}>
          {data.slice(0, 4).map((item, index) => (
              <div key={index} className='supportersCard rounded-xl border border-[#262626] p-5 md:p-[30px] gap-10 md:gap-[50px]'>
                <img src={item.img} alt={item.compName} className='rounded-[10px] md:rounded-xl cursor-pointer md:h-auto md:w-auto' onClick={() => handleClick(item.compLink)} />
              </div>
            ))}
          </Slider>
          }
        </div>
      </div>
              <div className='msFooter flex flex-row justify-center items-center md:hidden my-3'>
                <button className='custom-arrow custom-arrow-prev' onClick={() => sliderRef.current.slickPrev()}>
              <img className='m-1' src={Buttonprev} alt='' />
                </button>
                <button className='custom-arrow custom-arrow-next' onClick={() => sliderRef.current.slickNext()}>
              <img className='m-1' src={Buttonnext} alt='' />
                </button>
            </div>
            </>

      //LATER IF NEEDED
      //   <div className="w-4/4 m-auto">
      //   <div className="mt-28">
      //   <h3 className="text-xl p-[0.2rem] font-bold text-center">Our Supporters</h3>
      //   <Slider {...settings}>
      //     {data.map((d) => (
      //       <div className="bg-white h-[30rem] w-auto text-black rounded-xl border-4 border-solid">
      //         <div className="rounded-t- flex justify-center items-center">
      //           <img src={d.img} alt="" className="h-44 w-55"/>
      //         </div>
  
      //         <div className="flex flex-col justify-center items-center gap-4 p-4">
      //           <h3 className="text-xl p-[1rem] font-bold">{d.compName}</h3>
      //           <p>{d.compDesc}</p>
      //           <a href={d.compLink} className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">More</a>
      //         </div>
      //       </div>
      //     ))}
      //   </Slider>
      //   </div>
  
      // </div>
      
    )
  }

const data = [
  {
    compName: `University of STRATHCLYDE INSPIRE`,
    img: StrathclvdeInspire,
    compLink: `https://www.strath.ac.uk/workwithus/strathclydeinspire/`
  },
  {
    compName: `Barclays | Eagle Labs`,
    img: Barclays,
    compLink: `https://labs.uk.barclays/`           
  },
  {
    compName: `University of Strathclyde`,
    img: Strathclvde,
    compLink: `https://www.strath.ac.uk/`           
  }
  ]