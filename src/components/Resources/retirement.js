import React from 'react'
import { Link } from 'react-router-dom'
const images =[
    {
        imageSrc:require("../../assets/images/books/Retirement.png"),
        name:"Retirement Planning",
         path:"/comingSoon"
    },
    // {
    //     imageSrc:require("../../assets/images/books/analysis.png"),
    //      name:"Basics of technical Analysis",
    //      path:"/basics"
    // },
    // {
    //     imageSrc:require("../../assets/images/books/book1.png"),
    //      name:"Angels and Demons",
    //      path:"/comingSoon"
    // },
    // {
    //     imageSrc:require("../../assets/images/books/butch.png"),
    //      name:"TFIOS",
    //     path:"/comingSoon"
    // },
    // {
    //     imageSrc:require("../../assets/images/books/blueprint.jpg"),
    //      name:"The Budgeting Blueprint",
    //      path:"/budgetBlue"
    // },
    // {
    //     imageSrc:require("../../assets/images/books/guide2.png"),
    //      name:"Kite Runner",
    //      path:"/comingSoon"
    // },
    // {
    //     imageSrc:require("../../assets/images/books/guide3.png"),
    //      name:"Castle in sky",
    //      path:"/comingSoon"
    // },
    // {
    //     imageSrc:require("../../assets/images/books/guide1.png"),
    //      name:"Immortals of Meluha",
    //      path:"/comingSoon"
    // },
]

const Retirement = () => {
  return (
    <div className='p-[5%]'>
    <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[8%] text-center">Retirement Planning</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-[8%]">
      {images.map((image, index) => (
        <div key={index} className="m-0 p-0">
          <Link to={image.path}>
            <img
              src={image.imageSrc}
              alt={`Book ${index}`}
              className="w-full h-[80%] mt-0 m-0"
            />
          </Link>
          <h2 className="font-bold mt-4 mb-2 text-sm text-center text-black">
            {image.name}
          </h2>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Retirement