import {useEffect, useState} from 'react';
import Wallimg from '../assets/images/Blogs/img2.png'
import Thumbnail from '../assets/images/Blogs/b-2.png'
import Sidecards from './Blogs/sidecards';
import axios from 'axios';
import CardsBottom from './Blogs/cardsBottom';
import Blogswrite from './Blogs/Blogswrite'
import EATemplate from './EarlyAccessTemplate';

function Blogs() {

  // const [data, setData] = useState([]); UNCOMMENT LATER (DON'T DELETE)
  const [front, setFront] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  //UNCOMMENT LATER (DON'T DELETE)
  // useEffect(() => {
  //   axios.get('http://localhost:2142/api')
  //   .then(response => {
  //     // setData(response.data[0].Heading);
  //     setData(response.data);
  //     setFront(response.data[0]);
  //   })
  //   .catch(error => console.error('Error fetching data:', error));
  // }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleCardClick = (item) => {
    setFront(item);
  };

    return (
      <>
          <div className='m-4 md:px-12 gap-20 md:mb-20'>
      <h1 className='flex justify-center m-4 font-semibold text-5xl leading-[72px] finwise-blue'>Blogs</h1>
      <h2 className='flex sm:justify-start justify-center text-2xl font-bold my-8 finwise-blue'>Top Stories</h2>
        <div>
            <div className='flex md:flex-row flex-col justify-between'>
            <div className='mainCard md:w-4/6 bg-slate-100 rounded-xl'>
              <div className="rounded-t-xl flex justify-center flex-wrap md:max-h-96  overflow-hidden border border-[#262626]">
                <img className='flex' src={Thumbnail} alt="" />
              </div>
              <div className='content p-4'>
              <div className="flex flex-col justify-start gap-4">
                <>
                  <h3 className="text-3xl font-bold text-[#1A1A1A]">The UK Tax System: Adulting Just Got Real (But We Got You)</h3>
                  <div className={`blogPara ${isOpen ? 'h-auto' : 'h-14 overflow-hidden'}`}>
                  <Blogswrite />
                  </div>
                </>
              </div>
              <div className="footer flex justify-between my-4">
                <h1 className='font-bold my-auto'>Aug 9</h1>
                <button onClick={handleIsOpen} className='font-bold hover:bg-[#3CB371] hover:text-white rounded-[10px] border border-[#223876] py-3 px-6'>{isOpen ? "Show Less" : "Full Story"}</button>
               </div> 
               </div> 
            </div>
<div className={`sideCard md:flex flex-col md:w-1/6 hidden`}>
    {Array.from({ length: 3 }, (_, index) => (
    <Sidecards key={index} onToggle={handleCardClick}/>
    ))}
</div>
            </div>
        </div>
        <CardsBottom onToggle={handleCardClick}/>
        </div>
        <EATemplate />
        </>
    )
}

export default Blogs;