import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full text-center overflow-hidden px-2">
      
      {/* Image Wrapper */}
      <div className="relative w-full mt-12 overflow-hidden rounded-lg">
        {/* Image */}
        <img
          src="https://i.ibb.co/5Tbxtfb/Oceanfront-Penthouse.jpg"
          alt="Oceanfront Penthouse"
          className="w-full h-[400px] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center">
          <h1 className="text-7xl font-bold text-almostBlack opacity-75 shadow-2xl mt-10">DREAM STAY</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
