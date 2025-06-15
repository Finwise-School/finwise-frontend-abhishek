import React from 'react'
import { Link } from 'react-router-dom'
const gets =[
    {
        imageSrc:require("../../assets/images/books/Tax.png"),
        name:"The Tax Planning Playbook",
         path:"/comingSoon"
    },
    {
        imageSrc:require("../../assets/images/books/analysis.png"),
         name:"Basics of technical Analysis",
         path:"https://finwiseschool.gumroad.com/l/fwsbudgetboss"
    },
    {
        imageSrc:require("../../assets/images/books/finances.png"),
         name:"101 Finance Hacks",
         path:"/comingSoon"
    },
    {
        imageSrc:require("../../assets/images/books/smart.png"),
         name:"Smart With Money ",
        path:"/comingSoon"
    },
    {
        imageSrc:require("../../assets/images/books/blueprint.jpg"),
         name:"The Budgeting Blueprint",
         path:https://finwiseschool.gumroad.com/l/fwsbudgetboss
    },
    {
        imageSrc:require("../../assets/images/books/Retirement.png"),
         name:"Retirement Planning",
         path:"/comingSoon"
    },
    {
        imageSrc:require("../../assets/images/books/guide3.png"),
         name:"Magic of Moving Averages",
         path:"/comingSoon"
    },
    {
        imageSrc:require("../../assets/images/books/cover.png"),
         name:"Stock Market",
         path:"/comingSoon"
    },
]
const GetNow = () => {
  return (
    <div className='p-[5%]'>
    <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[8%] text-center">Get Now</h1>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-[8%]">
      {gets.map((image, index) => (
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

export default GetNow
