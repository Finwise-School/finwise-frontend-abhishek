import { useEffect, useState, useRef } from 'react';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import axios from 'axios';
// import Wallimg from '../../assets/images/Blogs/img2.png';
import Thumbnail from '../../assets/images/Blogs/b-2.png'
// import Buttonnext from "../../assets/images/Blogs/Buttonnext.png";
// import Buttonprev from "../../assets/images/Blogs/Buttonprev.png";
import Slider from "react-slick";

const CardsBottom = ({ onToggle }) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        }
      },
    ]
  };

  // const [data, setData] = useState([]); DONT DELETE
  // const carouselRef = useRef(null);

  // DONT DELETE
  // useEffect(() => {
  //   axios.get('http://localhost:2142/api')
  //   .then(response => {
  //     // setData(response.data[0].Heading);
  //     setData(response.data);
  //     console.log("Hello");
  //   })
  //   .catch(error => console.error('Error fetching data:', error));
  // }, []);

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     partialVisibilityGutter: 40 
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     partialVisibilityGutter: 30 
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     partialVisibilityGutter: 30 
//   }
// };
return (
  <>
<Slider {...settings}>
{Array.from({ length: 5 }, (_, index) => (
    <div key={index} className='cursor-pointer p-6 rounded-xl w-4'>
      <div className="rounded-t flex justify-center flex-wrap overflow-hidden">
        <img src={Thumbnail} alt="" />
      </div>
      <div className="content py-2">
        <div className="flex flex-col justify-start">
          <h3 className="text-sm font-bold">The UK Tax System</h3>
          <h6 className="text-sm">Aug 9</h6>
        </div>
      </div>
    </div>
))}
</Slider>
      {/* <div className='msFooter flex flex-row justify-center items-center my-3'>
                <button className='custom-arrow custom-arrow-prev' onClick={() => carouselRef.current && carouselRef.current.previous()}>
              <img className='m-1' src={Buttonprev} alt='' />
                </button>
                <button className='custom-arrow custom-arrow-next' onClick={() => carouselRef.current && carouselRef.current.next()}>
              <img className='m-1' src={Buttonnext} alt='' />
                </button>
            </div> */}
</>
  )
}

export default CardsBottom