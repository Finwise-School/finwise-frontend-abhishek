import React from 'react'
import err from '../../src/assets/images/ss.jpg'

const Errors = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
      <img src={err}   className=' max-h-full max-w-full object-contain'/>
    </div>
  )
}

export default Errors 