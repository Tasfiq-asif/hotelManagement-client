import React from 'react'

function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>
        {/* Inner Ring */}
        <div className="absolute inset-2 border-4 border-transparent border-t-indigo-300 rounded-full animate-spin-slow"></div>
        {/* Dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    </div>
  )
}

export default Spinner