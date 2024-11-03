import React from 'react'
import Button from '../Button'

const Navbar = () => {
  return (
    <div className="navbar bg-background">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-background rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Rooms</a></li>
        <li><a>My Bookings</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn text-xl bg-transparent ">StayScape</a>
  </div>
  <div className="navbar-end">
    <button className='btn bg-primary text-background hover:bg-secondary px-8 rounded-2xl'>Login</button>
  </div>
</div>
  )
}

export default Navbar