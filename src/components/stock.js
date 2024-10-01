import React from 'react'
import { Link } from 'react-router-dom'
const images =[
    {
        imageSrc:require("../assets/images/books/budget.png"),
        name:"Da Vinci Code"
    },
    {
        imageSrc:require("../assets/images/books/analysis.png"),
         name:"Basics of technical Analysis"
    },
    {
        imageSrc:require("../assets/images/books/book1.png"),
         name:"Angels and Demons"
    },
    {
        imageSrc:require("../assets/images/books/butch.png"),
         name:"TFIOS"
    },
    {
        imageSrc:require("../assets/images/books/blueprint.jpg"),
         name:"13 reasons why"
    },
    {
        imageSrc:require("../assets/images/books/guide2.png"),
         name:"Kite Runner"
    },
    {
        imageSrc:require("../assets/images/books/guide3.png"),
         name:"Castle in sky"
    },
    {
        imageSrc:require("../assets/images/books/guide1.png"),
         name:"Immortals of Meluha"
    },
]

const Stocks = () => {
  return (
    <div className='p-[5%]'>
    <h1 className='font-bold text-5xl text-black mb-[2%]'>Stock Market</h1>
   
    <div className='grid grid-cols-4 gap-0'>
       
        {images.map((image, index) => (
            <div key={index} className="m-0 p-0">
                <Link>
                <img
                    src={image.imageSrc}
                    alt={`Book ${index}`}
                    className="w-full h-full object-cover m-0 p-0"
                />
                </Link>
                <h2 className='font-bold mt-[8%] mb-[4%] text-sm text-center  text-black'>{image.name}</h2>
            </div>
        ))}
        
    </div>
    
</div>

  )
}

export default Stocks