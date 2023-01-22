import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"


const Navbar = () => {
  return (
      <div className="flex jc-center navbar">
          <div className="flex al-center navContainer">
            <Link to='/' className='link' >
              <span>Nicolas Booking</span>
            </Link>
              <div className="flex navItems">
                  <button>Register</button>
                  <button>Login</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar